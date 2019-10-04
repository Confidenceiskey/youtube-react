import { getShortNumberString } from '../number-format';

it('getShortNumberString(0)', () => {
  expect(getShortNumberString(0)).toEqual('0');
});

it('getShortNumberString(9)', () => {
  expect(getShortNumberString(9)).toEqual('9');
});

it('getShortNumberString(52)', () => {
  expect(getShortNumberString(52)).toEqual('52');
});

it('getShortNumberString(456)', () => {
  expect(getShortNumberString(456)).toEqual('456');
});

it('getShortNumberString(1001)', () => {
  expect(getShortNumberString(1001)).toEqual('1K');
});

it('getShortNumberString(1099)', () => {
  expect(getShortNumberString(1099)).toEqual('1.1K');
});

it('getShortNumberString(5298)', () => {
  expect(getShortNumberString(5298)).toEqual('5.3K');
});

it('getShortNumberString(10053)', () => {
  expect(getShortNumberString(10053)).toEqual('10.1K');
});

it('getShortNumberString(10100)', () => {
  expect(getShortNumberString(10100)).toEqual('10.1K');
});

it('getShortNumberString(10999)', () => {
  expect(getShortNumberString(10999)).toEqual('11K');
});

it('getShortNumberString(11732)', () => {
  expect(getShortNumberString(11732)).toEqual('11.7K');
});

it('getShortNumberString(100000)', () => {
  expect(getShortNumberString(100000)).toEqual('100K');
});

it('getShortNumberString(532000)', () => {
  expect(getShortNumberString(532000)).toEqual('532K');
});

it('getShortNumberString(1000000)', () => {
  expect(getShortNumberString(1000000)).toEqual('1M');
});

it('getShortNumberString(1230000)', () => {
  expect(getShortNumberString(1230000)).toEqual('1.2M');
});

it('getShortNumberString(23000000)', () => {
  expect(getShortNumberString(23000000)).toEqual('23M');
});

it('getShortNumberString(872000000)', () => {
  expect(getShortNumberString(872000000)).toEqual('872M');
});

it('getShortNumberString(1000000000)', () => {
  expect(getShortNumberString(1000000000)).toEqual('1B');
});

it('getShortNumberString(1500000000)', () => {
  expect(getShortNumberString(1500000000)).toEqual('1.5B');
});

it('getShortNumberString(25000000000)', () => {
  expect(getShortNumberString(25000000000)).toEqual('25B');
});

it('getShortNumberString(387000000000)', () => {
  expect(getShortNumberString(38700000000)).toEqual('387B');
});

it('getShortNumberString(1000000000000)', () => {
  expect(getShortNumberString(100000000000)).toEqual('1T');
});

it('getShortNumberString(1800000000000)', () => {
  expect(getShortNumberString(180000000000)).toEqual('1.8T');
});