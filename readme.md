<p align="center">
  <a><img src="https://em-content.zobj.net/thumbs/240/apple/354/check-mark-button_2705.png" title="Green check mark" /></a>
</p>
<p align="center">

   <b>
    email-seems-valid
     </b>
 
  <br>
  <i>An offline check to see if an email seems valid.</i>
  <br/>
  <i>Contains TS or JS packages for browser or Node.js</i>
  <br>
</p>

```typescript
emailSeemsValid('test@gmail.com'); // true

emailSeemsValid('i̇test@gmail.com'); // false
emailSeemsValid('test@gmail.ocm'); // false
emailSeemsValid('test@protonmail.co'); // false
```

---

<br>

## Why is this needed?

Tools like Amazon SES are picky about email addresses. It's very technical, but this library is a good offline validator that an address <b>will work for Amazon SES and all other email senders</b>

## Usage

```typescript
import { emailSeemsValid } from 'email-seems-valid';

// simple valid email addresses
emailSeemsValid('test@gmail.com');
emailSeemsValid('test@protonmail.com');
// all true

// special characters
emailSeemsValid('!test@gmail.com');
emailSeemsValid('!test@gmail.com');
emailSeemsValid('ñtest@gmail.com');
emailSeemsValid('i̇test@gmail.com');
// all false (Amazon SES rejects exclamation points)

// common mis-spellings
emailSeemsValid('test@gmail.ocm');
emailSeemsValid('test@gamail.com');
emailSeemsValid('test@protonmail.co');
// all false
```

This library does not provide accurate true/false <b>all</b> emails, but it works for 99.95%.

<br/>

## Trusted By

• [Earnifi](https://earni.fi)

Want to be added to this list? Submit a pull-request today!

<br/>

## More Details

> Amazon SES does not support the SMTPUTF8 extension, as described in RFC6531. For this reason, the local part of a destination email address (the part of the email address that precedes the @ sign) may only contain 7-bit ASCII characters. If the domain part of an address (the part after the @ sign) contains non-ASCII characters, they must be encoded using Punycode, as described in RFC3492.

[Read more here](https://docs.aws.amazon.com/ses/latest/APIReference/API_Destination.html)
