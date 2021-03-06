# express-queue-test
Contrast experiment code for express-queue.

## Usage
### Running web server
`node app.js`
* You should restart server when start experiment.

### Test for express-queue (an experiment group)
`node req_queue.js`

### Test for original server (Control group)
`node req_not_queue.js`

## Result
* Result for express-queue (an experiment group)
```
[
   1,  2,  3,   4,  5,  6,  7,  8,  9, 10, 11, 12,
  13, 14, 15,  16, 17, 18, 19, 20, 21, 22, 23, 24,
  25, 26, 27,  28, 29, 30, 31, 32, 33, 34, 35, 36,
  37, 38, 39,  40, 41, 42, 43, 44, 45, 46, 47, 48,
  49, 50, 51,  52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63,  64, 65, 66, 67, 68, 69, 70, 71, 72,
  73, 74, 75,  76, 77, 78, 79, 80, 81, 82, 83, 84,
  85, 86, 87,  88, 89, 90, 91, 92, 93, 94, 95, 96,
  97, 98, 99, 100,
  ... 900 more items
]
```

* Result for original server (Control group)
```
[
   19,  41,  27,  17, 12, 61,  37,  65,   1,   6,   2,  20,
   22,  52,  32,  33, 43, 14,  34,  45,  18,  35,  30,  57,
   53,   7,  38,  21, 36, 46,  39, 111,  44,  42,  24,  69,
   86,  70,  28,  47, 71, 25,  40,  89, 106, 130, 107,  90,
   54,   3,   8,  15, 49, 50,  72,  58,  87,   4,  48,  55,
  117,  16,  63,  66, 60, 51,  64,  83, 165,  73,  67, 108,
   56, 142, 100, 118, 62, 13, 154,  91,  68,  31, 155, 103,
  136,  88, 162, 163, 29, 59, 157,  26,  78, 126, 104, 160,
   74, 139, 122,   9,
  ... 900 more items
]
```
