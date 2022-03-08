const adhan = require('adhan')

exports.getAll = async (coordinates) => {
  const date = new Date();
  const coordinates = new adhan.Coordinates(coordinates.x, coordinates.y);
  const params = adhan.CalculationMethod.MuslimWorldLeague();

  params.madhab = adhan.Madhab.Hanafi;
  return new adhan.PrayerTimes(coordinates, date, params);
};