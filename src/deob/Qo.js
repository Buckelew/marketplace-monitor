const At = require('./At.js');

const qn = require('./qn')

function ba(t) {
  return t instanceof Date && !Number.isNaN(t.getTime())
}

const Xo = {
  "1": "apa",
  "2": "hou",
  "3": "com",
  "4": "biz",
  "5": "for",
  "7": "sys",
  "8": "eve",
  "10": "res",
  "11": "web",
  "12": "bus",
  "13": "mar",
  "15": "etc",
  "16": "wri",
  "18": "roo",
  "19": "sha",
  "20": "wan",
  "21": "sof",
  "23": "acc",
  "24": "ofc",
  "25": "med",
  "26": "hea",
  "27": "ret",
  "28": "npo",
  "29": "vol",
  "35": "act",
  "36": "rid",
  "37": "pet",
  "38": "cls",
  "39": "sub",
  "40": "off",
  "41": "prk",
  "42": "bar",
  "44": "tix",
  "47": "lgl",
  "48": "egr",
  "49": "sls",
  "50": "sad",
  "52": "tfr",
  "54": "hum",
  "55": "tch",
  "56": "kid",
  "57": "edu",
  "58": "sbw",
  "59": "trd",
  "61": "gov",
  "63": "mis",
  "65": "swp",
  "68": "bik",
  "69": "mcy",
  "70": "ats",
  "71": "muc",
  "73": "gms",
  "75": "sci",
  "76": "cps",
  "77": "crs",
  "79": "evs",
  "80": "hss",
  "81": "lss",
  "82": "lbs",
  "83": "sks",
  "87": "pol",
  "88": "laf",
  "90": "rnr",
  "91": "grp",
  "92": "bks",
  "93": "spo",
  "94": "clo",
  "95": "clt",
  "96": "ele",
  "97": "hsh",
  "98": "msg",
  "99": "vac",
  "100": "csr",
  "101": "zip",
  "103": "lgs",
  "104": "fns",
  "105": "rts",
  "106": "aos",
  "107": "bab",
  "108": "tlg",
  "109": "cwg",
  "110": "cpg",
  "111": "lbg",
  "112": "wrg",
  "113": "dmg",
  "114": "crg",
  "115": "evg",
  "116": "vnn",
  "117": "emd",
  "118": "tls",
  "119": "boa",
  "120": "jwl",
  "121": "rew",
  "122": "pts",
  "124": "rvs",
  "125": "trp",
  "126": "spa",
  "127": "rej",
  "128": "mnu",
  "129": "fbh",
  "130": "lab",
  "131": "sec",
  "132": "tag",
  "133": "grd",
  "134": "bfs",
  "135": "art",
  "136": "mat",
  "137": "pho",
  "138": "bts",
  "139": "wet",
  "140": "trv",
  "141": "fuo",
  "142": "fud",
  "143": "reo",
  "144": "reb",
  "145": "cto",
  "146": "ctd",
  "149": "app",
  "150": "atq",
  "151": "vgm",
  "152": "hab",
  "153": "mob",
  "154": "fgs",
  "155": "pas",
  "156": "mas",
  "158": "cys",
  "160": "mcd",
  "161": "tid",
  "162": "ppd",
  "163": "ptd",
  "164": "bod",
  "165": "mod",
  "166": "syd",
  "167": "eld",
  "168": "rvd",
  "169": "atd",
  "170": "ard",
  "171": "bad",
  "172": "bid",
  "173": "bkd",
  "174": "bfd",
  "175": "emq",
  "176": "cld",
  "177": "cbd",
  "178": "grq",
  "179": "fod",
  "180": "had",
  "181": "hsd",
  "182": "jwd",
  "183": "mad",
  "184": "msd",
  "185": "phd",
  "186": "sgd",
  "187": "tld",
  "188": "tad",
  "189": "vgd",
  "190": "wad",
  "191": "snw",
  "192": "snd",
  "193": "hvo",
  "194": "hvd",
  "195": "mpo",
  "196": "mpd",
  "197": "bop",
  "198": "bdp",
  "199": "sop",
  "200": "sdp",
  "201": "bpo",
  "202": "bpd",
  "203": "wto",
  "204": "wtd",
  "205": "tro",
  "206": "trb",
  "207": "cms",
  "208": "avo",
  "209": "avd",
  "210": "hws",
  "-1": "hsw"
}

const Yo = {acc: {abbreviation: 'acc', name: 'accounting/finance',  id: 23},
act
: 
{abbreviation: 'act', name: 'activity partners',  id: 35},
aos
: 
{abbreviation: 'aos', name: 'automotive services',  id: 106},
apa
: 
{abbreviation: 'apa', name: 'apartments / housing for rent',  id: 1},
app
: 
{abbreviation: 'app', name: 'appliances - by owner',  id: 149},
ara
: 
{abbreviation: 'ara', children: Array(2), name: 'arts & crafts',  isPurveyorAggregate: true},
ard
: 
{abbreviation: 'ard', name: 'arts & crafts - by dealer',  id: 170},
art
: 
{abbreviation: 'art', name: 'arts & crafts - by owner',  id: 135},
ata
: 
{abbreviation: 'ata', children: Array(2), name: 'antiques',  isPurveyorAggregate: true},
atd
: 
{abbreviation: 'atd', name: 'antiques - by dealer',  id: 169},
atq
: 
{abbreviation: 'atq', name: 'antiques - by owner',  id: 150},
ats
: 
{abbreviation: 'ats', name: 'artists',  id: 70},
ava
: 
{abbreviation: 'ava', children: Array(2), name: 'aviation',  isPurveyorAggregate: true},
avd
: 
{abbreviation: 'avd', name: 'aviation - by dealer',  id: 209},
avo
: 
{abbreviation: 'avo', name: 'aviation - by owner',  id: 208},
baa
: 
{abbreviation: 'baa', children: Array(2), name: 'baby & kid stuff',  isPurveyorAggregate: true},
bab
: 
{abbreviation: 'bab', name: 'baby & kid stuff - by owner',  id: 107},
bad
: 
{abbreviation: 'bad', name: 'baby & kid stuff - by dealer',  id: 171},
bar
: 
{abbreviation: 'bar', name: 'barter',  id: 42},
bbb
: 
{abbreviation: 'bbb', children: Array(21), name: 'services', type: 'B', },
bdp
: 
{abbreviation: 'bdp', name: 'bicycle parts - by dealer',  id: 198},
bfa
: 
{abbreviation: 'bfa', children: Array(2), name: 'business',  isPurveyorAggregate: true},
bfd
: 
{abbreviation: 'bfd', name: 'business/commercial - by dealer',  id: 174},
bfs
: 
{abbreviation: 'bfs', name: 'business/commercial - by owner',  id: 134},
bia
: 
{abbreviation: 'bia', children: Array(2), name: 'bicycles',  isPurveyorAggregate: true},
bid
: 
{abbreviation: 'bid', name: 'bicycles - by dealer',  id: 172},
bik
: 
{abbreviation: 'bik', name: 'bicycles - by owner',  id: 68},
bip
: 
{abbreviation: 'bip', children: Array(2), name: 'bicycle parts',  isPurveyorAggregate: true},
biz
: 
{abbreviation: 'biz', name: 'small biz ads',  id: 4},
bka
: 
{abbreviation: 'bka', children: Array(2), name: 'books & magazines',  isPurveyorAggregate: true},
bkd
: 
{abbreviation: 'bkd', name: 'books & magazines - by dealer',  id: 173},
bks
: 
{abbreviation: 'bks', name: 'books & magazines - by owner',  id: 92},
boa
: 
{abbreviation: 'boa', name: 'boats - by owner',  id: 119},
bod
: 
{abbreviation: 'bod', name: 'boats - by dealer',  id: 164},
boo
: 
{abbreviation: 'boo', children: Array(2), name: 'boats',  isPurveyorAggregate: true},
bop
: 
{abbreviation: 'bop', name: 'bicycle parts - by owner',  id: 197},
bpa
: 
{abbreviation: 'bpa', children: Array(2), name: 'boat parts & accessories',  isPurveyorAggregate: true},
bpd
: 
{abbreviation: 'bpd', name: 'boat parts - by dealer',  id: 202},
bpo
: 
{abbreviation: 'bpo', name: 'boat parts - by owner',  id: 201},
bts
: 
{abbreviation: 'bts', name: 'beauty services',  id: 138},
bus
: 
{abbreviation: 'bus', name: 'business/mgmt',  id: 12},
cba
: 
{abbreviation: 'cba', children: Array(2), name: 'collectibles',  isPurveyorAggregate: true},
cbd
: 
{abbreviation: 'cbd', name: 'collectibles - by dealer',  id: 177},
ccc
: 
{abbreviation: 'ccc', children: Array(14), name: 'community', type: 'C', },
cla
: 
{abbreviation: 'cla', children: Array(2), name: 'clothing & accessories',  isPurveyorAggregate: true},
cld
: 
{abbreviation: 'cld', name: 'clothing & accessories - by dealer',  id: 176},
clo
: 
{abbreviation: 'clo', name: 'clothing & accessories - by owner',  id: 94},
cls
: 
{abbreviation: 'cls', name: 'classes',  id: 38},
clt
: 
{abbreviation: 'clt', name: 'collectibles - by owner',  id: 95},
cms
: 
{abbreviation: 'cms', name: 'cell phone / mobile services',  id: 207},
com
: 
{abbreviation: 'com', name: 'general community',  id: 3},
cpg
: 
{abbreviation: 'cpg', name: 'computer gigs',  id: 110},
cps
: 
{abbreviation: 'cps', name: 'computer services',  id: 76},
crg
: 
{abbreviation: 'crg', name: 'creative gigs',  id: 114},
crs
: 
{abbreviation: 'crs', name: 'creative services',  id: 77},
csr
: 
{abbreviation: 'csr', name: 'customer service',  id: 100},
cta
: 
{abbreviation: 'cta', children: Array(2), name: 'cars & trucks',  isPurveyorAggregate: true},
ctd
: 
{abbreviation: 'ctd', name: 'cars & trucks - by dealer',  id: 146},
cto
: 
{abbreviation: 'cto', name: 'cars & trucks - by owner',  id: 145},
cwg
: 
{abbreviation: 'cwg', name: 'crew gigs',  id: 109},
cys
: 
{abbreviation: 'cys', name: 'cycle services',  id: 158},
dmg
: 
{abbreviation: 'dmg', name: 'domestic gigs',  id: 113},
edu
: 
{abbreviation: 'edu', name: 'education/teaching',  id: 57},
eee
: 
{abbreviation: 'eee', name: 'events', children: Array(2), },
egr
: 
{abbreviation: 'egr', name: 'architect/engineer/cad',  id: 48},
ela
: 
{abbreviation: 'ela', children: Array(2), name: 'electronics',  isPurveyorAggregate: true},
eld
: 
{abbreviation: 'eld', name: 'electronics - by dealer',  id: 167},
ele
: 
{abbreviation: 'ele', name: 'electronics - by owner',  id: 96},
ema
: 
{abbreviation: 'ema', children: Array(2), name: 'cds / dvds / vhs',  isPurveyorAggregate: true},
emd
: 
{abbreviation: 'emd', name: 'cds / dvds / vhs - by owner',  id: 117},
emq
: 
{abbreviation: 'emq', name: 'cds / dvds / vhs - by dealer',  id: 175},
etc
: 
{abbreviation: 'etc', name: 'et cetera',  id: 15},
eve
: 
{abbreviation: 'eve', name: 'events',  id: 8},
evg
: 
{abbreviation: 'evg', name: 'event gigs',  id: 115},
evs
: 
{abbreviation: 'evs', name: 'event services',  id: 79},
fbh
: 
{abbreviation: 'fbh', name: 'food/beverage/hospitality',  id: 129},
fgs
: 
{abbreviation: 'fgs', name: 'farm & garden services',  id: 154},
fns
: 
{abbreviation: 'fns', name: 'financial services',  id: 104},
foa
: 
{abbreviation: 'foa', children: Array(2), name: 'general for sale',  isPurveyorAggregate: true},
fod
: 
{abbreviation: 'fod', name: 'general for sale - by dealer',  id: 179},
for
: 
{abbreviation: 'for', name: 'general for sale - by owner',  id: 5},
fua
: 
{abbreviation: 'fua', children: Array(2), name: 'furniture',  isPurveyorAggregate: true},
fud
: 
{abbreviation: 'fud', name: 'furniture - by dealer',  id: 142},
fuo
: 
{abbreviation: 'fuo', name: 'furniture - by owner',  id: 141},
ggg
: 
{abbreviation: 'ggg', children: Array(8), name: 'gigs', type: 'G', },
gms
: 
{abbreviation: 'gms', name: 'garage & moving sales',  id: 73},
gov
: 
{abbreviation: 'gov', name: 'government',  id: 61},
gra
: 
{abbreviation: 'gra', children: Array(2), name: 'farm & garden',  isPurveyorAggregate: true},
grd
: 
{abbreviation: 'grd', name: 'farm & garden - by owner',  id: 133},
grp
: 
{abbreviation: 'grp', name: 'groups',  id: 91},
grq
: 
{abbreviation: 'grq', name: 'farm & garden - by dealer',  id: 178},
haa
: 
{abbreviation: 'haa', children: Array(2), name: 'health and beauty',  isPurveyorAggregate: true},
hab
: 
{abbreviation: 'hab', name: 'health and beauty - by owner',  id: 152},
had
: 
{abbreviation: 'had', name: 'health and beauty - by dealer',  id: 180},
hea
: 
{abbreviation: 'hea', name: 'healthcare',  id: 26},
hhh
: 
{abbreviation: 'hhh', children: Array(13), name: 'housing', type: 'H', },
hou
: 
{abbreviation: 'hou', name: 'wanted: apts',  id: 2},
hsa
: 
{abbreviation: 'hsa', children: Array(2), name: 'household items',  isPurveyorAggregate: true},
hsd
: 
{abbreviation: 'hsd', name: 'household items - by dealer',  id: 181},
hsh
: 
{abbreviation: 'hsh', name: 'household items - by owner',  id: 97},
hss
: 
{abbreviation: 'hss', name: 'household services',  id: 80},
hsw
: 
{abbreviation: 'hsw', name: 'all housing wanted',  id: -1},
hum
: 
{abbreviation: 'hum', name: 'human resource',  id: 54},
hva
: 
{abbreviation: 'hva', children: Array(2), name: 'heavy equipment',  isPurveyorAggregate: true},
hvd
: 
{abbreviation: 'hvd', name: 'heavy equipment - by dealer',  id: 194},
hvo
: 
{abbreviation: 'hvo', name: 'heavy equipment - by owner',  id: 193},
hws
: 
{abbreviation: 'hws', name: 'health/wellness services',  id: 210},
jjj
: 
{abbreviation: 'jjj', children: Array(31), name: 'jobs', type: 'J', },
jwa
: 
{abbreviation: 'jwa', children: Array(2), name: 'jewelry',  isPurveyorAggregate: true},
jwd
: 
{abbreviation: 'jwd', name: 'jewelry - by dealer',  id: 182},
jwl
: 
{abbreviation: 'jwl', name: 'jewelry - by owner',  id: 120},
kid
: 
{abbreviation: 'kid', name: 'childcare',  id: 56},
lab
: 
{abbreviation: 'lab', name: 'general labor',  id: 130},
laf
: 
{abbreviation: 'laf', name: 'lost & found',  id: 88},
lbg
: 
{abbreviation: 'lbg', name: 'labor gigs',  id: 111},
lbs
: 
{abbreviation: 'lbs', name: 'labor / hauling / moving',  id: 82},
lgl
: 
{abbreviation: 'lgl', name: 'legal/paralegal',  id: 47},
lgs
: 
{abbreviation: 'lgs', name: 'legal services',  id: 103},
lss
: 
{abbreviation: 'lss', name: 'lessons & tutoring',  id: 81},
maa
: 
{abbreviation: 'maa', children: Array(2), name: 'materials',  isPurveyorAggregate: true},
mad
: 
{abbreviation: 'mad', name: 'materials - by dealer',  id: 183},
mar
: 
{abbreviation: 'mar', name: 'marketing/advertising/pr',  id: 13},
mas
: 
{abbreviation: 'mas', name: 'marine services',  id: 156},
mat
: 
{abbreviation: 'mat', name: 'materials - by owner',  id: 136},
mca
: 
{abbreviation: 'mca', children: Array(2), name: 'motorcycles/scooters',  isPurveyorAggregate: true},
mcd
: 
{abbreviation: 'mcd', name: 'motorcycles/scooters - by dealer',  id: 160},
mcy
: 
{abbreviation: 'mcy', name: 'motorcycles/scooters - by owner',  id: 69},
med
: 
{abbreviation: 'med', name: 'art/media/design',  id: 25},
mis
: 
{abbreviation: 'mis', name: 'missed connections',  id: 63},
mnu
: 
{abbreviation: 'mnu', name: 'manufacturing',  id: 128},
moa
: 
{abbreviation: 'moa', children: Array(2), name: 'cell phones',  isPurveyorAggregate: true},
mob
: 
{abbreviation: 'mob', name: 'cell phones - by owner',  id: 153},
mod
: 
{abbreviation: 'mod', name: 'cell phones - by dealer',  id: 165},
mpa
: 
{abbreviation: 'mpa', children: Array(2), name: 'motorcycle parts & accessories',  isPurveyorAggregate: true},
mpd
: 
{abbreviation: 'mpd', name: 'motorcycle parts - by dealer',  id: 196},
mpo
: 
{abbreviation: 'mpo', name: 'motorcycle parts - by owner',  id: 195},
msa
: 
{abbreviation: 'msa', children: Array(2), name: 'musical instruments',  isPurveyorAggregate: true},
msd
: 
{abbreviation: 'msd', name: 'musical instruments - by dealer',  id: 184},
msg
: 
{abbreviation: 'msg', name: 'musical instruments - by owner',  id: 98},
muc
: 
{abbreviation: 'muc', name: 'musicians',  id: 71},
npo
: 
{abbreviation: 'npo', name: 'nonprofit',  id: 28},
ofc
: 
{abbreviation: 'ofc', name: 'admin/office',  id: 24},
off
: 
{abbreviation: 'off', name: 'office & commercial',  id: 40},
pas
: 
{abbreviation: 'pas', name: 'pet services',  id: 155},
pet
: 
{abbreviation: 'pet', name: 'pets',  id: 37},
pha
: 
{abbreviation: 'pha', children: Array(2), name: 'photo/video',  isPurveyorAggregate: true},
phd
: 
{abbreviation: 'phd', name: 'photo/video - by dealer',  id: 185},
pho
: 
{abbreviation: 'pho', name: 'photo/video - by owner',  id: 137},
pol
: 
{abbreviation: 'pol', name: 'politics',  id: 87},
ppa
: 
{abbreviation: 'ppa', children: Array(2), name: 'appliances',  isPurveyorAggregate: true},
ppd
: 
{abbreviation: 'ppd', name: 'appliances - by dealer',  id: 162},
prk
: 
{abbreviation: 'prk', name: 'parking & storage',  id: 41},
pta
: 
{abbreviation: 'pta', children: Array(2), name: 'auto parts',  isPurveyorAggregate: true},
ptd
: 
{abbreviation: 'ptd', name: 'auto parts - by dealer',  id: 163},
pts
: 
{abbreviation: 'pts', name: 'auto parts - by owner',  id: 122},
rea
: 
{abbreviation: 'rea', name: 'real estate for sale', children: Array(2),  isPurveyorAggregate: true},
reb
: 
{abbreviation: 'reb', name: 'real estate - by broker',  id: 144},
rej
: 
{abbreviation: 'rej', name: 'real estate',  id: 127},
reo
: 
{abbreviation: 'reo', name: 'real estate - by owner',  id: 143},
res
: 
{abbreviation: 'res', name: 'resumes / job wanted',  id: 10},
ret
: 
{abbreviation: 'ret', name: 'retail / wholesale',  id: 27},
rew
: 
{abbreviation: 'rew', name: 'wanted: real estate',  id: 121},
rid
: 
{abbreviation: 'rid', name: 'rideshare',  id: 36},
rnr
: 
{abbreviation: 'rnr', name: 'rants & raves',  id: 90},
roo
: 
{abbreviation: 'roo', name: 'rooms & shares',  id: 18},
rrr
: 
{abbreviation: 'rrr', children: Array(1), name: 'resumes', type: 'R', },
rts
: 
{abbreviation: 'rts', name: 'real estate services',  id: 105},
rva
: 
{abbreviation: 'rva', children: Array(2), name: 'recreational vehicles',  isPurveyorAggregate: true},
rvd
: 
{abbreviation: 'rvd', name: 'rvs - by dealer',  id: 168},
rvs
: 
{abbreviation: 'rvs', name: 'rvs - by owner',  id: 124},
sad
: 
{abbreviation: 'sad', name: 'systems/networking',  id: 50},
sbw
: 
{abbreviation: 'sbw', name: 'wanted: sublet/temp',  id: 58},
sci
: 
{abbreviation: 'sci', name: 'science/biotech',  id: 75},
sdp
: 
{abbreviation: 'sdp', name: 'computer parts - by dealer',  id: 200},
sec
: 
{abbreviation: 'sec', name: 'security',  id: 131},
sga
: 
{abbreviation: 'sga', children: Array(2), name: 'sporting goods',  isPurveyorAggregate: true},
sgd
: 
{abbreviation: 'sgd', name: 'sporting goods - by dealer',  id: 186},
sha
: 
{abbreviation: 'sha', name: 'wanted: room/share',  id: 19},
sks
: 
{abbreviation: 'sks', name: 'skilled trade services',  id: 83},
sls
: 
{abbreviation: 'sls', name: 'sales',  id: 49},
sna
: 
{abbreviation: 'sna', children: Array(2), name: 'atvs, utvs, snowmobiles',  isPurveyorAggregate: true},
snd
: 
{abbreviation: 'snd', name: 'atvs, utvs, snowmobiles - by dealer',  id: 192},
snw
: 
{abbreviation: 'snw', name: 'atvs, utvs, snowmobiles - by owner',  id: 191},
sof
: 
{abbreviation: 'sof', name: 'software/qa/dba/etc',  id: 21},
sop
: 
{abbreviation: 'sop', name: 'computer parts - by owner',  id: 199},
spa
: 
{abbreviation: 'spa', name: 'salon/spa/fitness',  id: 126},
spo
: 
{abbreviation: 'spo', name: 'sporting goods - by owner',  id: 93},
sso
: 
{abbreviation: 'sso', name: 'for sale by owner'},
ssq
: 
{abbreviation: 'ssq', name: 'for sale by dealer'},
sss
: 
{abbreviation: 'sss', children: Array(47), name: 'for sale', type: 'S', },
sub
: 
{abbreviation: 'sub', name: 'sublets & temporary',  id: 39},
swp
: 
{abbreviation: 'swp', name: 'housing swap',  id: 65},
sya
: 
{abbreviation: 'sya', children: Array(2), name: 'computers',  isPurveyorAggregate: true},
syd
: 
{abbreviation: 'syd', name: 'computers - by dealer',  id: 166},
syp
: 
{abbreviation: 'syp', children: Array(2), name: 'computer parts',  isPurveyorAggregate: true},
sys
: 
{abbreviation: 'sys', name: 'computers - by owner',  id: 7},
taa
: 
{abbreviation: 'taa', children: Array(2), name: 'toys & games',  isPurveyorAggregate: true},
tad
: 
{abbreviation: 'tad', name: 'toys & games - by dealer',  id: 188},
tag
: 
{abbreviation: 'tag', name: 'toys & games - by owner',  id: 132},
tch
: 
{abbreviation: 'tch', name: 'technical support',  id: 55},
tfr
: 
{abbreviation: 'tfr', name: 'tv/film/video/radio',  id: 52},
tia
: 
{abbreviation: 'tia', children: Array(2), name: 'tickets',  isPurveyorAggregate: true},
tid
: 
{abbreviation: 'tid', name: 'tickets - by dealer',  id: 161},
tix
: 
{abbreviation: 'tix', name: 'tickets - by owner',  id: 44},
tla
: 
{abbreviation: 'tla', children: Array(2), name: 'tools',  isPurveyorAggregate: true},
tld
: 
{abbreviation: 'tld', name: 'tools - by dealer',  id: 187},
tlg
: 
{abbreviation: 'tlg', name: 'talent gigs',  id: 108},
tls
: 
{abbreviation: 'tls', name: 'tools - by owner',  id: 118},
tra
: 
{abbreviation: 'tra', children: Array(2), name: 'trailers',  isPurveyorAggregate: true},
trb
: 
{abbreviation: 'trb', name: 'trailers - by dealer',  id: 206},
trd
: 
{abbreviation: 'trd', name: 'skilled trades/artisan',  id: 59},
tro
: 
{abbreviation: 'tro', name: 'trailers - by owner',  id: 205},
trp
: 
{abbreviation: 'trp', name: 'transportation',  id: 125},
trv
: 
{abbreviation: 'trv', name: 'travel/vacation services',  id: 140},
vac
: 
{abbreviation: 'vac', name: 'vacation rentals',  id: 99},
vga
: 
{abbreviation: 'vga', children: Array(2), name: 'video gaming',  isPurveyorAggregate: true},
vgd
: 
{abbreviation: 'vgd', name: 'video gaming - by dealer',  id: 189},
vgm
: 
{abbreviation: 'vgm', name: 'video gaming - by owner',  id: 151},
vnn
: 
{abbreviation: 'vnn', name: 'local news and views',  id: 116},
vol
: 
{abbreviation: 'vol', name: 'volunteers',  id: 29},
waa
: 
{abbreviation: 'waa', children: Array(2), name: 'wanted',  isPurveyorAggregate: true},
wad
: 
{abbreviation: 'wad', name: 'wanted - by dealer',  id: 190},
wan
: 
{abbreviation: 'wan', name: 'wanted - by owner',  id: 20},
web
: 
{abbreviation: 'web', name: 'web/html/info design',  id: 11},
wet
: 
{abbreviation: 'wet', name: 'writing / editing / translation',  id: 139},
wrg
: 
{abbreviation: 'wrg', name: 'writing gigs',  id: 112},
wri
: 
{abbreviation: 'wri', name: 'writing/editing',  id: 16},
wta
: 
{abbreviation: 'wta', children: Array(2), name: 'auto wheels & tires',  isPurveyorAggregate: true},
wtd
: 
{abbreviation: 'wtd', name: 'auto wheels & tires - by dealer',  id: 204},
wto
: 
{abbreviation: 'wto', name: 'auto wheels & tires - by owner',  id: 203},
zip
: 
{ abbreviation: 'zip', name: 'free stuff', id: 101 }
}

class Qo extends (At.withWatchables("viewMode", "screenMode", "showDuplicates")) {
  constructor(t) {
      if (t instanceof Qo)
          super(t.kwargs),
          this.isDigest && !t.isDigest && this.addDetails({
              postingTitle: t._postingTitle,
              imageIds: t._imageIds
          }),
          t.hasDuplicates && (this.duplicates = t.duplicates.map((t=>new Qo(t)))),
          this.location = t.location;
      else {
          if (super(t),
          !(Number.isInteger(t.postingId) && t.postingId > 0 && ba(t.postedDate) && t.location))
              throw console.error("bad kwargs", "SearchResult");
          const e = this.location = t.location;
          e.lng = e.lon,
          delete e.lon
      }
      this.screenMode = 'wide',
      // this.own(Bn.advise(La, (t=>{
      //     this.screenMode = t.mode
      // }
      // ))),
      this.viewMode = 'Uo',
      this.postingTitle === 'retrieving' && this.addClassName("cl-retrieving"),
      this._infoElement = {},
      Qo.insCatalog(this)
  }
  destroy() {
      this.destroyed || (Qo.delCatalog(this),
      this.hasDuplicates && (this.duplicates.forEach((t=>t.destroy())),
      this.duplicates = []),
      this._saleDateClones && (this._saleDateClones.forEach((t=>t.destroy())),
      delete this.__saleDateClones),
      super.destroy())
  }
  get pid() {
      return this.kwargs.postingId
  }
  get postedDate() {
      return this.kwargs.postedDate
  }
  get openHouses() {
      return this.kwargs.openHouses
  }
  get postingTitle() {
      return this._postingTitle || this.kwargs.title || $o
  }
  set postingTitle(t) {
      this._postingTitle = t
  }
  get isDigest() {
      return !this._postingTitle && !this.kwargs.title
  }
  get url() {
      if (!this._url) {
          const t = ""
            , e = {
              areaHost: this.location.hostname,
              subareaAbbr: this.location.subareaAbbr,
              categoryAbbr: this.kwargs.categoryAbbr,
              seo: t ? `d/${t}` : Xn,
              pid: this.kwargs.postingId
          };
          this._url = Qn(e.subareaAbbr ? "subareaPosting" : "posting", e)
      }
      return this._url
  }
  get imageIds() {
      return this._imageIds || this.kwargs.imageIds || Jo
  }
  hasImageIds() {
      return this.imageIds !== Jo
  }
  get areaId() {
      return this.location.areaId
  }
  get hostname() {
      return this.location.hostname
  }
  get subareaAbbr() {
      return this.location.subareaAbbr
  }
  get categoryAbbr() {
      return this.kwargs.categoryAbbr
  }
  get categoryId() {
      return this.kwargs.categoryId
  }
  get locationDescription() {
      return this.location.description
  }
  get hood() {
      return this.location.neighborhood
  }
  get lat() {
      return this.location.lat
  }
  get lng() {
      return this.location.lng
  }
  get isGeoLocated() {
      return la(this.lat, this.lng, !0)
  }
  get distance() {
      return this.kwargs.distance
  }
  get repostOf() {
      return this.kwargs.repostOf
  }
  get sortUpcomingDate() {
      return this._sortUpcomingDate || this.kwargs.sortUpcomingDate
  }
  get price() {
      return this.kwargs.price
  }
  get bedrooms() {
      return this.kwargs.bedrooms
  }
  get sqft() {
      return this.kwargs.sqft
  }
  get relevance() {
      return this.kwargs.relevance
  }
  get imageThumb() {
      const t = this.imageIds;
      return t && t[0] && ni(t[0], "small")
  }
  get dedupeKey() {
      return this._dedupeKey || this.kwargs.dedupeKey
  }
  set dedupeKey(t) {
      this._dedupeKey = t
  }
  set duplicates(t) {
      this._duplicates = t || []
  }
  get duplicates() {
      return this._duplicates || []
  }
  get hasDuplicates() {
      return this._duplicates && this._duplicates.length
  }
  getSaleDateClones(t) {
      return this._saleDateClones ? this._saleDateClones : this.kwargs.openHouses || this.kwargs.dates ? this._saleDateClones = (this.kwargs.openHouses || this.kwargs.dates).filter((e=>e >= t)).slice(1).map((t=>{
          const e = new Qo(this);
          return e._sortUpcomingDate = t,
          e
      }
      )) : 0
  }
  addDetails(t) {
      this.removeClassName("cl-retrieving"),
      this.postingTitle = t.postingTitle,
      Object.values(this._infoElement).forEach((t=>{
          t.postingTitle = this.postingTitle
      }
      )),
      t.imageIds && (this._unrenderThumb(),
      this._thumbNodes = 0,
      this._unrenderGallery(),
      this._galleryNodes = 0,
      this._imageIds = t.imageIds,
      this.rendered && (this._lastViewModeRendered === jo ? this._renderThumb() : this._lastViewModeRendered === Ko && this._renderGallery())),
      this._saleDateClones && this._saleDateClones.forEach((e=>e.addDetails(t))),
      this.bdNotify({
          type: "details-arrived"
      })
  }
  markDeleted() {}
  bdElements() {
      return z.li({
          bdAttach: "listRootNode",
          bdReflectClass: ["viewMode", Mr.getCssClassName]
      })
  }
  get infoElement() {
      if (this._infoElement[this.viewMode])
          return this._infoElement[this.viewMode];
      const t = new To({
          ...this.kwargs,
          url: this.url,
          postingTitle: this.postingTitle,
          hasDuplicates: this.hasDuplicates,
          oneLine: this.viewMode === Uo && "wide" === this.screenMode,
          galleryLayout: this.viewMode === Ko,
          toggleDuplicates: ()=>{
              this.showDuplicates = !this.showDuplicates
          }
      });
      return this._infoElement[this.viewMode] = t,
      t
  }
  postRender() {
      this._renderViewMode(this.viewMode)
  }
  unrender() {
      switch (this.onMutateShowDuplicates(!1),
      this._lastViewModeRendered) {
      case Uo:
          this._unrenderList();
          break;
      case jo:
          this._unrenderThumb();
          break;
      case Ko:
          this._unrenderGallery()
      }
      this._lastViewModeRendered = 0,
      ["_tableNodes", "_thumbNodes", "_galleryNodes"].forEach((t=>{
          this[t] && this[t].forEach((t=>t instanceof At && t.destroy())),
          delete this[t]
      }
      )),
      super.unrender()
  }
  onMutateScreenMode() {
      this._infoElement && this._infoElement[Uo] && (delete this._infoElement[Uo],
      this.viewMode === Uo && this._renderList())
  }
  onMutateShowDuplicates(t) {
      this.rendered && (t ? (this._renderDuplicates(),
      this.classList.add("show-duplicates")) : (this._unrenderDuplicates(),
      this.classList.remove("show-duplicates")),
      Object.values(this._infoElement).forEach((e=>{
          e.showingDups = t
      }
      )))
  }
  onMutateViewMode(t) {
      try {
          if (this.rendered) {
              if (t === Vo)
                  return;
              if (t === this._lastViewModeRendered)
                  return;
              switch (this._lastViewModeRendered) {
              case Uo:
                  this._unrenderList();
                  break;
              case jo:
                  this._unrenderThumb();
                  break;
              case Ko:
                  this._unrenderGallery();
                  break;
              default:
                  return void console.error("unexpected in onMutateViewMode", "SearchResult")
              }
              this._renderViewMode(t)
          }
      } catch (t) {
          console.error(t)
      }
  }
  _renderViewMode(t) {
      switch (t) {
      case Uo:
          this._renderList();
          break;
      case jo:
          this._renderThumb();
          break;
      case Ko:
          this._renderGallery();
          break;
      case Vo:
          return;
      default:
        console.error("unexpected view mode", "SearchResult"),
          this._renderList()
      }
      this._lastViewModeRendered = t,
      this.showDuplicates && this._renderDuplicates()
  }
  lazyInit() {
      return !0
  }
  _renderList() {
      const t = this._setRootNode(this.listRootNode);
      Z(t),
      this.insChild(this.infoElement, t)
  }
  _renderDuplicates() {
      this._listDuplicatesContainer || (this._listDuplicatesContainer = this.insChild(qo, {
          viewMode: this._lastViewModeRendered
      }, "last"),
      this.duplicates.forEach((t=>this._listDuplicatesContainer.insChild(t))))
  }
  _unrenderDuplicates() {
      this.showDuplicates ? this.showDuplicates = !1 : this._listDuplicatesContainer && (this._listDuplicatesContainer.delChildren(!0),
      this.delChild(this._listDuplicatesContainer),
      delete this._listDuplicatesContainer)
  }
  _unrenderList() {
      this._unrenderDuplicates()
  }
  _renderThumb() {
      if (!this._thumbNodes) {
          const t = T('<div class="thumb-result-container"></div>')
            , e = new Co({
              ...this,
              url: this.url,
              imageIds: this.imageIds
          });
          this._thumbNodes = [t, e]
      }
      const [t,e] = this._thumbNodes
        , a = this._setRootNode(this.listRootNode);
      Z(a),
      A(t, a),
      this.insChild(e, t),
      this.insChild(this.infoElement, t)
  }
  _unrenderThumb() {
      if (this._unrenderDuplicates(),
      this._floatingGallery && (this._floatingGallery.destroy(),
      this._floatingGallery = 0),
      this._thumbNodes) {
          const [t,e] = this._thumbNodes;
          this.delChild(e, !0),
          this.listRootNode.removeChild(t)
      }
  }
  _renderGallery() {
      if (!this._galleryNodes) {
          const t = (this.imageIds || []).map((t=>ni(t, "gallery")))
            , e = new Cr({
              imageUrls: t,
              url: this.url
          })
            , a = T('<div class="gallery-card"></div>');
          this._galleryNodes = [a, e]
      }
      const [t,e] = this._galleryNodes
        , a = this._setRootNode(this.listRootNode);
      Z(a),
      A(t, a),
      this.insChild(e, t),
      this.insChild(this.infoElement, t)
  }
  _unrenderGallery() {
      if (this._unrenderDuplicates(),
      this._galleryNodes) {
          const [t,e] = this._galleryNodes;
          this.delChild(e, !0),
          this.listRootNode.removeChild(t)
      }
  }
  _renderMap() {}
  _unrenderMap() {}
  _getClassName(t) {
      return `cl-search-result ${Mr.getCssClassName(t)}`
  }
  _setRootNode(t) {
      return this.bdDom.root !== t && (this.bdDom.root = t),
      t
  }
  static insCatalog(t) {
      const e = t.pid
        , a = Qo.catalog[e];
      a ? Array.isArray(a) ? a.push(t) : Qo.catalog[e] = [Qo.catalog[e], t] : Qo.catalog[e] = t
  }
  static delCatalog(t) {
      const e = t.pid
        , a = Qo.catalog[e];
      if (Array.isArray(a)) {
          const e = a.indexOf(t);
          -1 !== e && a.splice(e, 1)
      } else
          a && delete Qo.catalog[e]
  }
  static lookup(t) {
      const e = Qo.catalog[t];
      return Array.isArray(e) ? e[0] : e || 0
  }
  static clone(t) {
      const e = Qo.lookup(t);
      return new e.constructor(e)
  }
  static getComparator(t) {
      return t === Fo.relevance.value ? (t,e)=>t.relevance - e.relevance : t === Fo.priceAsc.value ? (t,e)=>(t.price || 0) - (e.price || 0) : t === Fo.priceDesc.value ? (t,e)=>(e.price || 0) - (t.price || 0) : t === Fo.upcoming.value ? (t,e)=>t.sortUpcomingDate.getTime() !== e.sortUpcomingDate.getTime() ? t.sortUpcomingDate.getTime() - e.sortUpcomingDate.getTime() : t.postedDate.getTime() - e.postedDate.getTime() : t === Fo.distance.value ? (t,e)=>(t.distance || 3e4) - (e.distance || 3e4) : t === Fo.oldest.value ? (t,e)=>t.postedDate.getTime() - e.postedDate.getTime() : (t,e)=>e.postedDate.getTime() - t.postedDate.getTime()
  }
}
Qo.catalog = {},
  Qo.className = "cl-search-result";

module.exports = Qo;