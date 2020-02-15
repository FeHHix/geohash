import { Geohash } from './Geohash'

describe('Geohash', () => {

  it('encodes Jutland', () => {
    expect(Geohash.encode(57.648, 10.410, 6)).toStrictEqual('u4pruy')
  })

  it('encodes Jutland with undefined precision', () => {
    expect(Geohash.encode(57.648, 10.410, undefined)).toStrictEqual('u4pruy')
  })

  it('encodes Jutland with undefined precision 2', () => {
    expect(Geohash.encode(57.6488888888888888888888, 10.4108888888888888888, undefined)).toStrictEqual('u4pruysvp7c3')
  })

  it('decodes Jutland', () => {
    expect(Geohash.decode('u4pruy')).toStrictEqual({ lat: 57.648, lon: 10.410 })
  })

  it('encodes Curitiba', () => {
    expect(Geohash.encode(-25.38262, -49.26561, 8)).toStrictEqual('6gkzwgjz')
  })

  it('decodes Curitiba', () => {
    expect(Geohash.decode('6gkzwgjz')).toStrictEqual({ lat: -25.38262, lon: -49.26561 })
  })

  it('fetches neighbours', () => {
    expect(Geohash.neighbours('ezzz')).toStrictEqual({ n:'gbpb', ne:'u000', e:'spbp', se:'spbn', s:'ezzy', sw:'ezzw', w:'ezzx', nw:'gbp8' })
  })

  it('matches geohash.org', () => {
    expect(Geohash.encode(37.25, 123.75, 12)).toStrictEqual('wy85bj0hbp21')
  })

})