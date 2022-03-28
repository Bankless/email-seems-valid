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
  // blocks characters which Amazon SES cannot support in emails (like "&" or "i̇")
  const hasCharacterOutsideRange = emailAddress.split('').some((letter) => {
    const utf16Code = letter.charCodeAt(0);
    // https://www.fileformat.info/info/charset/UTF-16/list.htm
    // this is a guess as to allowed characters
    // '+'.charCodeAt() === 43
    // '~'.charCodeAt() === 126
    return utf16Code < 43 || utf16Code > 126;
  });
  return (
    isEmail(emailAddress) &&
    !hasCharacterOutsideRange &&
    !emailAddress.includes('@gmial') &&
    !emailAddress.includes('gmaik.com') &&
    !emailAddress.includes('.comy') &&
    !emailAddress.includes('@gail') &&
    !emailAddress.includes('@gmak') &&
    !emailAddress.includes('@gamai') &&
    !emailAddress.includes('@gamil.') &&
    !emailAddress.includes('@gamal.') &&
    !emailAddress.includes('@gmai.') &&
    !emailAddress.includes('@gmial') &&
    !emailAddress.includes('@gmil.') &&
    !emailAddress.includes('@gmal') &&
    !emailAddress.includes('@gmmail') &&
    !emailAddress.includes('@gna') &&
    !emailAddress.includes('@gemail') &&
    !emailAddress.includes('@protonmai.') &&
    !emailAddress.includes('@protonmi') &&
    // ends with
    !emailAddress.match(/@.*\.com.$/) &&
    !emailAddress.match(/@.*\.con.*$/) &&
    !emailAddress.match(/@.*\.col.*$/) &&
    !emailAddress.endsWith('foxmail.co') &&
    !emailAddress.endsWith('.ocm') &&
    !emailAddress.endsWith('.om') &&
    !emailAddress.endsWith('@gmail.co') &&
    !emailAddress.endsWith('@protonmail.co') &&
    !emailAddress.endsWith('.ccom') &&
    !emailAddress.endsWith('.coom') &&
    !emailAddress.endsWith('.cmo')
  );
}
