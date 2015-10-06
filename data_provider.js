var fs = require('fs'),
  _ = require('underscore')

var DATA_FILE = './babynames.json',
  COL_SID = 0, COL_ID = 1, COL_POSITION = 2, COL_CREATED_AT = 3,
  COL_CREATED_META = 4, COL_UPDATED_AT = 5, COL_UPDATED_META = 6,
  COL_META = 7, COL_BIRTH_YEAR = 8, COL_GENDER = 9, COL_ETHNICITY = 10,
  COL_NAME = 11, COL_COUNT = 12, COL_RANK = 13

var VAL_MALE = 'MALE',
  VAL_FEMALE = 'FEMALE'

function format(entry) {
  return {
    birthYear: entry[COL_BIRTH_YEAR],
    gender: entry[COL_GENDER],
    ethnicity: entry[COL_ETHNICITY],
    name: entry[COL_NAME],
    count: entry[COL_COUNT],
    rank: entry[COL_RANK]
  }
}

var rawData = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'))
var data = _.uniq(
  rawData.data.map(entry => format(entry)),
  false,
  (a, b) => a.name
)

var DataProvider = {
  male: function(options) {
    return data.filter(val => {
      return val.gender === VAL_MALE
    }).sort(options.sort)
  },

  female: function(options) {
    return data.filter(val => {
      return val.gender === VAL_FEMALE
    }).sort(options.sort)
  },

  all: function() {
    return data
  }
}

module.exports = DataProvider
