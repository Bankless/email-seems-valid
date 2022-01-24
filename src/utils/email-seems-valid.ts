import isEmail from 'validator/lib/isEmail';

/**
 * Similar to ["parseEther" in ethers.js](https://docs.ethers.io/v4/api-utils.html#ether-strings-and-wei)
 *
 * Similar to ["toWei" in web3](https://web3js.readthedocs.io/en/v1.2.11/web3-utils.html?highlight=towei#towei)
 *
 * @example
 * ```javascript
 * emailSeemsValid('1000').toString()
 * // '1000000000000000000000'
 * emailSeemsValid(1000).toString()
 * // '1000000000000000000000'
 * ```
 *
 * @example
 * ```javascript
 * emailSeemsValid('1000').toNumber()
 * // 1000000000000000000000
 * emailSeemsValid(1000).toNumber()
 * // 1000000000000000000000
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
