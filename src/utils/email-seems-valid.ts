import isEmail from 'validator/lib/isEmail';

/**
 * Validate if an email appears to work with providers like Amazon SES. Works offline.
 *
 * @example
 * ```javascript
 * emailSeemsValid('test@gmail.com')
 * // true
 * emailSeemsValid('test@gmai.com)
 * // false
 * ```
 */
export function emailSeemsValid(emailAddress: string): boolean {
  if (typeof emailAddress !== 'string' || !isEmail(emailAddress)) {
    return false;
  }
  emailAddress = emailAddress.toLowerCase();
  // blocks characters which Amazon SES cannot support in emails (like "&" or "i̇")
  const hasCharacterOutsideRange = emailAddress.split('').some((letter) => {
    const utf16Code = letter.charCodeAt(0);
    // https://www.fileformat.info/info/charset/UTF-16/list.htm
    // this is a guess as to allowed characters
    // '+'.charCodeAt() === 43
    // '~'.charCodeAt() === 126
    return utf16Code < 43 || utf16Code > 126;
  });
  const doesNotInclude: ReadonlyArray<string> = [
    '@gmial',
    '@gmaik',
    '@gail',
    '@gmak',
    '@gamai',
    '@gamil.',
    '@gamal.',
    '@gmai.',
    '@gmial',
    '@gmil.',
    '@gmal',
    '@gmmail',
    '@gna',
    '@gemail',
    '@protonmai.',
    '@protonmi',
  ];

  const doesNotEndWith: ReadonlyArray<string> = [
    'foxmail.co',
    '.ocm',
    '.om',
    '@gmail.co',
    '@protonmail.co',
    '.ccom',
    '.coom',
    '.cmo',
  ];
  const [, domainName] = emailAddress.split('@');

  // domain must have "." to separate TLD
  if (!domainName.includes('.')) {
    return false;
  }

  const tld = domainName.split('.').pop() as string;
  return (
    !hasCharacterOutsideRange &&
    !doesNotInclude.some((invalidSubstring) =>
      emailAddress.includes(invalidSubstring),
    ) &&
    !doesNotEndWith.some((invalidSubstring) =>
      emailAddress.endsWith(invalidSubstring),
    ) &&
    // ends with
    !tld.match(/com.+$/) &&
    !tld.match(/co[a-ln-z]+$/) &&
    !tld.match(/c[^o]m$/) &&
    !tld.match(/co[^m]m$/) &&
    !tld.match(/[^c]om$/)
  );
}
