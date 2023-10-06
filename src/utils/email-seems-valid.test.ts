import { emailSeemsValid } from '../index';

describe('form validations', () => {
  it('co* tricky', () => {
    expect(emailSeemsValid('test@person.codes')).toBe(true);
    expect(emailSeemsValid('test@person.community')).toBe(true);

    expect(emailSeemsValid('test@person.comqwerty')).toBe(false);
    expect(emailSeemsValid('test@person.coqwerty')).toBe(false);
  });
  it('valid emails', () => {
    expect(emailSeemsValid('test@crazy.finance')).toBe(true);
    expect(emailSeemsValid('test.cmo@yahoo.com')).toBe(true);
    expect(emailSeemsValid('gmial@yahoo.COM')).toBe(true);
    expect(emailSeemsValid('gmia@gmail.com')).toBe(true);
    expect(emailSeemsValid('hotmai@hotmail.com')).toBe(true);

    expect(emailSeemsValid('a@protonmail.com')).toBe(true);
    expect(emailSeemsValid('test@dawsbot.io')).toBe(true);
    expect(emailSeemsValid('test@protonmail.com')).toBe(true);

    expect(emailSeemsValid('test@foxmail.com')).toBe(true);

    expect(emailSeemsValid('company@company.co')).toBe(true);
    expect(emailSeemsValid('company@company.cool')).toBe(true);
    expect(emailSeemsValid('company@company.io')).toBe(true);
    expect(emailSeemsValid('company@company.xyz')).toBe(true);
    expect(emailSeemsValid('company@company.wtf')).toBe(true);
    expect(emailSeemsValid('company@company.gov')).toBe(true);

    expect(emailSeemsValid('a.comy.test@gmail.com')).toBe(true);
    expect(emailSeemsValid('a.coml.test@gmail.com')).toBe(true);
    expect(emailSeemsValid('a.coml.cxm.vom@gmail.com')).toBe(true);
    expect(emailSeemsValid('coml.cxm.vom@cop.cpm.pom.comm.com')).toBe(true);
    expect(emailSeemsValid('coml.cxm.vom@cop.cpm.pom.comm.co.jp')).toBe(true);
    expect(emailSeemsValid('test@scotland.scot')).toBe(true);
  });
  it('special characters', () => {
    expect(emailSeemsValid('!test@gmail.com')).toBe(false);
    expect(emailSeemsValid('&test@gmail.com')).toBe(false);
    expect(emailSeemsValid('*test@gmail.com')).toBe(false);
    expect(emailSeemsValid('testÔÛãñõ@gmail.com')).toBe(false);
    expect(emailSeemsValid('t.ti̇st@gmai̇l.com')).toBe(false);
    expect(emailSeemsValid('tést@gmail.com')).toBe(false);
  });
  it('invalid emails', () => {
    expect(emailSeemsValid('@gmail.com')).toBe(false);
    expect(emailSeemsValid('bad@com')).toBe(false);
    expect(emailSeemsValid('test@@gmail.com')).toBe(false);
    expect(emailSeemsValid('test@gmail@com')).toBe(false);

    // invalid characters (amazon SES rejects these)

    // must have "@"
    expect(emailSeemsValid('no')).toBe(false);

    // mis-spellings of gmail
    expect(emailSeemsValid('test@hotmai.com')).toBe(false);

    // mis-spellings of gmail
    expect(emailSeemsValid('test@gmai.com')).toBe(false);
    expect(emailSeemsValid('test@gmaail.com')).toBe(false);
    expect(emailSeemsValid('test@gmnail.com')).toBe(false);
    expect(emailSeemsValid('test@gmial.com')).toBe(false);
    expect(emailSeemsValid('test@gamal.com')).toBe(false);
    expect(emailSeemsValid('test@gemail.com')).toBe(false);
    expect(emailSeemsValid('test@gmal.com')).toBe(false);
    expect(emailSeemsValid('test@gnail.com')).toBe(false);
    expect(emailSeemsValid('test@gnal.com')).toBe(false);
    expect(emailSeemsValid('test@gail.com')).toBe(false);
    expect(emailSeemsValid('test@gmil.com')).toBe(false);

    // bad suffixes
    expect(emailSeemsValid('test@gmail.cmo')).toBe(false);
    expect(emailSeemsValid('test@gmail.ocm')).toBe(false);
    expect(emailSeemsValid('test@gmail.comm')).toBe(false);
    expect(emailSeemsValid('test@gmail.comc')).toBe(false);
    expect(emailSeemsValid('test@gmail.coom')).toBe(false);
    expect(emailSeemsValid('test@gmail.ccom')).toBe(false);
    expect(emailSeemsValid('test@gmail.comn')).toBe(false);
    expect(emailSeemsValid('test@gmail.comnn')).toBe(false);
    expect(emailSeemsValid('test@gmail.col')).toBe(false);
    expect(emailSeemsValid('test@gmail.colm')).toBe(false);
    expect(emailSeemsValid('test@gmail.collm')).toBe(false);
    expect(emailSeemsValid('test@gmail.colln')).toBe(false);
    expect(emailSeemsValid('test@gmail.om')).toBe(false);
    expect(emailSeemsValid('test@gmail.comy')).toBe(false);
    expect(emailSeemsValid('test@gmail.comyy')).toBe(false);

    expect(emailSeemsValid('test@gmail.xom')).toBe(false);
    expect(emailSeemsValid('test@gmail.xxom')).toBe(false);
    expect(emailSeemsValid('test@gmail.xcom')).toBe(false);
    expect(emailSeemsValid('test@gmail.coml')).toBe(false);
    expect(emailSeemsValid('test@gmail.comll')).toBe(false);
    expect(emailSeemsValid('test@gmail.copm')).toBe(false);
    expect(emailSeemsValid('test@gmail.coppm')).toBe(false);
    expect(emailSeemsValid('test@gmail.vom')).toBe(false);
    expect(emailSeemsValid('test@gmail.vvom')).toBe(false);
    expect(emailSeemsValid('test@gmail.ckm')).toBe(false);
    expect(emailSeemsValid('test@gmail.ckkm')).toBe(false);

    // mis-spellings of protonmail
    expect(emailSeemsValid('test@protonmail.cpm')).toBe(false);
    expect(emailSeemsValid('test@protonmail.comc')).toBe(false);
    expect(emailSeemsValid('test@protonmail.come')).toBe(false);
    expect(emailSeemsValid('test@protonmail.comm')).toBe(false);
    expect(emailSeemsValid('test@protonmail.conm')).toBe(false);
    expect(emailSeemsValid('test@protonmail.conn')).toBe(false);
    expect(emailSeemsValid('test@protonmail.con')).toBe(false);
    expect(emailSeemsValid('test@protonmail.co')).toBe(false);
    expect(emailSeemsValid('test@protonmai.com')).toBe(false);
    expect(emailSeemsValid('test@protonmil.com')).toBe(false);

    // mis-spellings of yahoo
    expect(emailSeemsValid('test@yahoo.come')).toBe(false);
    expect(emailSeemsValid('test@yhaoo.com')).toBe(false);

    expect(emailSeemsValid('test@foxmail.co')).toBe(false);
  });
});
