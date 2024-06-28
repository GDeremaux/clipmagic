import * as z from "zod";

import { storyProjectSchema } from "@/remotion/schemas/projects/story";

const defaultProject: z.infer<typeof storyProjectSchema> = {
  "input": {
    "storySettings": {
      "title": "What was the moment you cancelled the friendship with your best friend?",
      "content": "It was my daughter’s 5th birthday.\n\nBecause I got married and had her very early in my 20s, at that time, none of my friends had kids. My baby was the sweetheart for all the aunties - mom’s three close friends. We threw her a party.\n\nIt was fun. Each auntie got her a present. They handed it to her one by one so she opened it and got excited. To the last auntie, before she handed the present to my daughter, she ‘demanded’ my girl, “Say ‘please’ and bow, so auntie will give you the gift!”. I thought she was joking, so I interrupted and told my daughter, “Auntie got you a present, you say ‘Thank you’ out loud!”. My daughter exclaimed, “Thank you auntie!”, then opened the present. It was a Lego Friends set. Needless to say, my daughter was so happy, and jumped up and down with the Lego set. Then suddenly, the auntie snatched the Lego set from my daughter’s hands again, held it up above her head, and demanded my daughter, “Say ‘please’ and bow, or auntie’s gonna take it back!”. This time, I knew she wasn’t joking.\n\nI got angry but tried very hard to keep my voice calm, “No one demands my daughter to beg. We’re poor but we are not cheap”. “I was just joking!”, she said. “No, you weren’t. That’s the second time and I don’t like it”, I told her. Now she got angry, raised her voice with me, “Even so, this is an expensive toy, what wrong with begging a little?”. “You take the gift back and please leave”, I told her, while getting up and holding the door open. She left and never came back.\n\nThe next day, I took my daughter to the toy store to get that Lego set. My friend was right. It was a damn expensive toy, it cost me a big chunk of my skinny paycheck and a friendship."
    },
    "subtitlesSettings": {
      "text": {
        "fontPath": "/fonts/TheBoldFont.ttf",
        "fontWeight": "700",
        "isItalic": false,
        "size": "16",
        "textColor": {
          "r": 255,
          "g": 255,
          "b": 255
        },
        "stroke": {
          "isActive": true,
          "color": {
            "r": 0,
            "g": 0,
            "b": 0
          },
          "width": 10
        },
        "shadow": {
          "isActive": true,
          "color": {
            "r": 0,
            "g": 0,
            "b": 0
          },
          "opacity": 80,
          "blurRadius": 20,
          "offsetX": 0,
          "offsetY": 0
        }
      },
      "subtitling": {
        "maxChar": 15,
        "maxDuration": 2,
        "startAdjust": 0,
        "endAdjust": 0
      },
      "animation": {
        "fadeInDuration": 0,
        "fadeOutDuration": 0
      }
    },
    "backgroundSettings": {
      "fileName": "clipmagic-files/trackmania/I+have+build+the+Longest+Press+Forward+Map+in+Trackmania2020.mp4"
    },
    "voiceSettings": {
      "service": "elevenlabs",
      "languageCode": "en-US",
      "elevenlabsVoiceId": "pNInz6obpgDQGcFmaJgB",
      "pollyVoiceId": "Matthew",
      "advanced": {
        "speed": 1.2,
        "isActive": false,
        "stability": 0.5,
        "similarity": 0.5,
        "styleExaggeration": 0,
        "speakerBoost": true
      }
    },
    "audio": {
      "title": {
        "key": "user-upload/ded62943-8cde-44df-9398-d8ded2a39f4c.mp3",
        "transcription": {
          "characters": [
            {
              "character": "W",
              "start": 0,
              "end": 0.07
            },
            {
              "character": "h",
              "start": 0.07,
              "end": 0.128
            },
            {
              "character": "a",
              "start": 0.128,
              "end": 0.163
            },
            {
              "character": "t",
              "start": 0.163,
              "end": 0.197
            },
            {
              "character": " ",
              "start": 0.197,
              "end": 0.232
            },
            {
              "character": "w",
              "start": 0.232,
              "end": 0.267
            },
            {
              "character": "a",
              "start": 0.267,
              "end": 0.302
            },
            {
              "character": "s",
              "start": 0.302,
              "end": 0.348
            },
            {
              "character": " ",
              "start": 0.348,
              "end": 0.406
            },
            {
              "character": "t",
              "start": 0.406,
              "end": 0.43
            },
            {
              "character": "h",
              "start": 0.43,
              "end": 0.453
            },
            {
              "character": "e",
              "start": 0.453,
              "end": 0.476
            },
            {
              "character": " ",
              "start": 0.476,
              "end": 0.534
            },
            {
              "character": "m",
              "start": 0.534,
              "end": 0.58
            },
            {
              "character": "o",
              "start": 0.58,
              "end": 0.65
            },
            {
              "character": "m",
              "start": 0.65,
              "end": 0.708
            },
            {
              "character": "e",
              "start": 0.708,
              "end": 0.743
            },
            {
              "character": "n",
              "start": 0.743,
              "end": 0.766
            },
            {
              "character": "t",
              "start": 0.766,
              "end": 0.801
            },
            {
              "character": " ",
              "start": 0.801,
              "end": 0.836
            },
            {
              "character": "y",
              "start": 0.836,
              "end": 0.859
            },
            {
              "character": "o",
              "start": 0.859,
              "end": 0.882
            },
            {
              "character": "u",
              "start": 0.882,
              "end": 0.917
            },
            {
              "character": " ",
              "start": 0.917,
              "end": 0.987
            },
            {
              "character": "c",
              "start": 0.987,
              "end": 1.033
            },
            {
              "character": "a",
              "start": 1.033,
              "end": 1.126
            },
            {
              "character": "n",
              "start": 1.126,
              "end": 1.184
            },
            {
              "character": "c",
              "start": 1.184,
              "end": 1.231
            },
            {
              "character": "e",
              "start": 1.231,
              "end": 1.277
            },
            {
              "character": "l",
              "start": 1.277,
              "end": 1.3
            },
            {
              "character": "l",
              "start": 1.3,
              "end": 1.335
            },
            {
              "character": "e",
              "start": 1.335,
              "end": 1.37
            },
            {
              "character": "d",
              "start": 1.37,
              "end": 1.393
            },
            {
              "character": " ",
              "start": 1.393,
              "end": 1.416
            },
            {
              "character": "t",
              "start": 1.416,
              "end": 1.44
            },
            {
              "character": "h",
              "start": 1.44,
              "end": 1.463
            },
            {
              "character": "e",
              "start": 1.463,
              "end": 1.486
            },
            {
              "character": " ",
              "start": 1.486,
              "end": 1.521
            },
            {
              "character": "f",
              "start": 1.521,
              "end": 1.567
            },
            {
              "character": "r",
              "start": 1.567,
              "end": 1.602
            },
            {
              "character": "i",
              "start": 1.602,
              "end": 1.637
            },
            {
              "character": "e",
              "start": 1.637,
              "end": 1.672
            },
            {
              "character": "n",
              "start": 1.672,
              "end": 1.707
            },
            {
              "character": "d",
              "start": 1.707,
              "end": 1.741
            },
            {
              "character": "s",
              "start": 1.741,
              "end": 1.8
            },
            {
              "character": "h",
              "start": 1.8,
              "end": 1.834
            },
            {
              "character": "i",
              "start": 1.834,
              "end": 1.892
            },
            {
              "character": "p",
              "start": 1.892,
              "end": 1.939
            },
            {
              "character": " ",
              "start": 1.939,
              "end": 1.985
            },
            {
              "character": "w",
              "start": 1.985,
              "end": 2.009
            },
            {
              "character": "i",
              "start": 2.009,
              "end": 2.043
            },
            {
              "character": "t",
              "start": 2.043,
              "end": 2.078
            },
            {
              "character": "h",
              "start": 2.078,
              "end": 2.113
            },
            {
              "character": " ",
              "start": 2.113,
              "end": 2.148
            },
            {
              "character": "y",
              "start": 2.148,
              "end": 2.171
            },
            {
              "character": "o",
              "start": 2.171,
              "end": 2.194
            },
            {
              "character": "u",
              "start": 2.194,
              "end": 2.218
            },
            {
              "character": "r",
              "start": 2.218,
              "end": 2.252
            },
            {
              "character": " ",
              "start": 2.252,
              "end": 2.299
            },
            {
              "character": "b",
              "start": 2.299,
              "end": 2.334
            },
            {
              "character": "e",
              "start": 2.334,
              "end": 2.403
            },
            {
              "character": "s",
              "start": 2.403,
              "end": 2.461
            },
            {
              "character": "t",
              "start": 2.461,
              "end": 2.508
            },
            {
              "character": " ",
              "start": 2.508,
              "end": 2.566
            },
            {
              "character": "f",
              "start": 2.566,
              "end": 2.612
            },
            {
              "character": "r",
              "start": 2.612,
              "end": 2.694
            },
            {
              "character": "i",
              "start": 2.694,
              "end": 2.752
            },
            {
              "character": "e",
              "start": 2.752,
              "end": 2.786
            },
            {
              "character": "n",
              "start": 2.786,
              "end": 2.844
            },
            {
              "character": "d",
              "start": 2.844,
              "end": 2.995
            },
            {
              "character": "?",
              "start": 2.995,
              "end": 3.251
            }
          ],
          "words": [
            {
              "word": "What",
              "start": 0,
              "end": 0.197,
              "characters": [
                {
                  "character": "W",
                  "start": 0,
                  "end": 0.07
                },
                {
                  "character": "h",
                  "start": 0.07,
                  "end": 0.128
                },
                {
                  "character": "a",
                  "start": 0.128,
                  "end": 0.163
                },
                {
                  "character": "t",
                  "start": 0.163,
                  "end": 0.197
                }
              ]
            },
            {
              "word": "was",
              "start": 0.232,
              "end": 0.348,
              "characters": [
                {
                  "character": "w",
                  "start": 0.232,
                  "end": 0.267
                },
                {
                  "character": "a",
                  "start": 0.267,
                  "end": 0.302
                },
                {
                  "character": "s",
                  "start": 0.302,
                  "end": 0.348
                }
              ]
            },
            {
              "word": "the",
              "start": 0.406,
              "end": 0.476,
              "characters": [
                {
                  "character": "t",
                  "start": 0.406,
                  "end": 0.43
                },
                {
                  "character": "h",
                  "start": 0.43,
                  "end": 0.453
                },
                {
                  "character": "e",
                  "start": 0.453,
                  "end": 0.476
                }
              ]
            },
            {
              "word": "moment",
              "start": 0.534,
              "end": 0.801,
              "characters": [
                {
                  "character": "m",
                  "start": 0.534,
                  "end": 0.58
                },
                {
                  "character": "o",
                  "start": 0.58,
                  "end": 0.65
                },
                {
                  "character": "m",
                  "start": 0.65,
                  "end": 0.708
                },
                {
                  "character": "e",
                  "start": 0.708,
                  "end": 0.743
                },
                {
                  "character": "n",
                  "start": 0.743,
                  "end": 0.766
                },
                {
                  "character": "t",
                  "start": 0.766,
                  "end": 0.801
                }
              ]
            },
            {
              "word": "you",
              "start": 0.836,
              "end": 0.917,
              "characters": [
                {
                  "character": "y",
                  "start": 0.836,
                  "end": 0.859
                },
                {
                  "character": "o",
                  "start": 0.859,
                  "end": 0.882
                },
                {
                  "character": "u",
                  "start": 0.882,
                  "end": 0.917
                }
              ]
            },
            {
              "word": "cancelled",
              "start": 0.987,
              "end": 1.393,
              "characters": [
                {
                  "character": "c",
                  "start": 0.987,
                  "end": 1.033
                },
                {
                  "character": "a",
                  "start": 1.033,
                  "end": 1.126
                },
                {
                  "character": "n",
                  "start": 1.126,
                  "end": 1.184
                },
                {
                  "character": "c",
                  "start": 1.184,
                  "end": 1.231
                },
                {
                  "character": "e",
                  "start": 1.231,
                  "end": 1.277
                },
                {
                  "character": "l",
                  "start": 1.277,
                  "end": 1.3
                },
                {
                  "character": "l",
                  "start": 1.3,
                  "end": 1.335
                },
                {
                  "character": "e",
                  "start": 1.335,
                  "end": 1.37
                },
                {
                  "character": "d",
                  "start": 1.37,
                  "end": 1.393
                }
              ]
            },
            {
              "word": "the",
              "start": 1.416,
              "end": 1.486,
              "characters": [
                {
                  "character": "t",
                  "start": 1.416,
                  "end": 1.44
                },
                {
                  "character": "h",
                  "start": 1.44,
                  "end": 1.463
                },
                {
                  "character": "e",
                  "start": 1.463,
                  "end": 1.486
                }
              ]
            },
            {
              "word": "friendship",
              "start": 1.521,
              "end": 1.939,
              "characters": [
                {
                  "character": "f",
                  "start": 1.521,
                  "end": 1.567
                },
                {
                  "character": "r",
                  "start": 1.567,
                  "end": 1.602
                },
                {
                  "character": "i",
                  "start": 1.602,
                  "end": 1.637
                },
                {
                  "character": "e",
                  "start": 1.637,
                  "end": 1.672
                },
                {
                  "character": "n",
                  "start": 1.672,
                  "end": 1.707
                },
                {
                  "character": "d",
                  "start": 1.707,
                  "end": 1.741
                },
                {
                  "character": "s",
                  "start": 1.741,
                  "end": 1.8
                },
                {
                  "character": "h",
                  "start": 1.8,
                  "end": 1.834
                },
                {
                  "character": "i",
                  "start": 1.834,
                  "end": 1.892
                },
                {
                  "character": "p",
                  "start": 1.892,
                  "end": 1.939
                }
              ]
            },
            {
              "word": "with",
              "start": 1.985,
              "end": 2.113,
              "characters": [
                {
                  "character": "w",
                  "start": 1.985,
                  "end": 2.009
                },
                {
                  "character": "i",
                  "start": 2.009,
                  "end": 2.043
                },
                {
                  "character": "t",
                  "start": 2.043,
                  "end": 2.078
                },
                {
                  "character": "h",
                  "start": 2.078,
                  "end": 2.113
                }
              ]
            },
            {
              "word": "your",
              "start": 2.148,
              "end": 2.252,
              "characters": [
                {
                  "character": "y",
                  "start": 2.148,
                  "end": 2.171
                },
                {
                  "character": "o",
                  "start": 2.171,
                  "end": 2.194
                },
                {
                  "character": "u",
                  "start": 2.194,
                  "end": 2.218
                },
                {
                  "character": "r",
                  "start": 2.218,
                  "end": 2.252
                }
              ]
            },
            {
              "word": "best",
              "start": 2.299,
              "end": 2.508,
              "characters": [
                {
                  "character": "b",
                  "start": 2.299,
                  "end": 2.334
                },
                {
                  "character": "e",
                  "start": 2.334,
                  "end": 2.403
                },
                {
                  "character": "s",
                  "start": 2.403,
                  "end": 2.461
                },
                {
                  "character": "t",
                  "start": 2.461,
                  "end": 2.508
                }
              ]
            },
            {
              "word": "friend?",
              "start": 2.566,
              "end": 3.251,
              "characters": [
                {
                  "character": "f",
                  "start": 2.566,
                  "end": 2.612
                },
                {
                  "character": "r",
                  "start": 2.612,
                  "end": 2.694
                },
                {
                  "character": "i",
                  "start": 2.694,
                  "end": 2.752
                },
                {
                  "character": "e",
                  "start": 2.752,
                  "end": 2.786
                },
                {
                  "character": "n",
                  "start": 2.786,
                  "end": 2.844
                },
                {
                  "character": "d",
                  "start": 2.844,
                  "end": 2.995
                },
                {
                  "character": "?",
                  "start": 2.995,
                  "end": 3.251
                }
              ]
            }
          ],
          "sentences": [
            {
              "sentence": "What was the",
              "start": 0,
              "end": 0.476,
              "words": [
                {
                  "word": "What",
                  "start": 0,
                  "end": 0.197,
                  "characters": [
                    {
                      "character": "W",
                      "start": 0,
                      "end": 0.07
                    },
                    {
                      "character": "h",
                      "start": 0.07,
                      "end": 0.128
                    },
                    {
                      "character": "a",
                      "start": 0.128,
                      "end": 0.163
                    },
                    {
                      "character": "t",
                      "start": 0.163,
                      "end": 0.197
                    }
                  ]
                },
                {
                  "word": "was",
                  "start": 0.232,
                  "end": 0.348,
                  "characters": [
                    {
                      "character": "w",
                      "start": 0.232,
                      "end": 0.267
                    },
                    {
                      "character": "a",
                      "start": 0.267,
                      "end": 0.302
                    },
                    {
                      "character": "s",
                      "start": 0.302,
                      "end": 0.348
                    }
                  ]
                },
                {
                  "word": "the",
                  "start": 0.406,
                  "end": 0.476,
                  "characters": [
                    {
                      "character": "t",
                      "start": 0.406,
                      "end": 0.43
                    },
                    {
                      "character": "h",
                      "start": 0.43,
                      "end": 0.453
                    },
                    {
                      "character": "e",
                      "start": 0.453,
                      "end": 0.476
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "moment you",
              "start": 0.534,
              "end": 0.917,
              "words": [
                {
                  "word": "moment",
                  "start": 0.534,
                  "end": 0.801,
                  "characters": [
                    {
                      "character": "m",
                      "start": 0.534,
                      "end": 0.58
                    },
                    {
                      "character": "o",
                      "start": 0.58,
                      "end": 0.65
                    },
                    {
                      "character": "m",
                      "start": 0.65,
                      "end": 0.708
                    },
                    {
                      "character": "e",
                      "start": 0.708,
                      "end": 0.743
                    },
                    {
                      "character": "n",
                      "start": 0.743,
                      "end": 0.766
                    },
                    {
                      "character": "t",
                      "start": 0.766,
                      "end": 0.801
                    }
                  ]
                },
                {
                  "word": "you",
                  "start": 0.836,
                  "end": 0.917,
                  "characters": [
                    {
                      "character": "y",
                      "start": 0.836,
                      "end": 0.859
                    },
                    {
                      "character": "o",
                      "start": 0.859,
                      "end": 0.882
                    },
                    {
                      "character": "u",
                      "start": 0.882,
                      "end": 0.917
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "cancelled the",
              "start": 0.987,
              "end": 1.486,
              "words": [
                {
                  "word": "cancelled",
                  "start": 0.987,
                  "end": 1.393,
                  "characters": [
                    {
                      "character": "c",
                      "start": 0.987,
                      "end": 1.033
                    },
                    {
                      "character": "a",
                      "start": 1.033,
                      "end": 1.126
                    },
                    {
                      "character": "n",
                      "start": 1.126,
                      "end": 1.184
                    },
                    {
                      "character": "c",
                      "start": 1.184,
                      "end": 1.231
                    },
                    {
                      "character": "e",
                      "start": 1.231,
                      "end": 1.277
                    },
                    {
                      "character": "l",
                      "start": 1.277,
                      "end": 1.3
                    },
                    {
                      "character": "l",
                      "start": 1.3,
                      "end": 1.335
                    },
                    {
                      "character": "e",
                      "start": 1.335,
                      "end": 1.37
                    },
                    {
                      "character": "d",
                      "start": 1.37,
                      "end": 1.393
                    }
                  ]
                },
                {
                  "word": "the",
                  "start": 1.416,
                  "end": 1.486,
                  "characters": [
                    {
                      "character": "t",
                      "start": 1.416,
                      "end": 1.44
                    },
                    {
                      "character": "h",
                      "start": 1.44,
                      "end": 1.463
                    },
                    {
                      "character": "e",
                      "start": 1.463,
                      "end": 1.486
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "friendship with",
              "start": 1.521,
              "end": 2.113,
              "words": [
                {
                  "word": "friendship",
                  "start": 1.521,
                  "end": 1.939,
                  "characters": [
                    {
                      "character": "f",
                      "start": 1.521,
                      "end": 1.567
                    },
                    {
                      "character": "r",
                      "start": 1.567,
                      "end": 1.602
                    },
                    {
                      "character": "i",
                      "start": 1.602,
                      "end": 1.637
                    },
                    {
                      "character": "e",
                      "start": 1.637,
                      "end": 1.672
                    },
                    {
                      "character": "n",
                      "start": 1.672,
                      "end": 1.707
                    },
                    {
                      "character": "d",
                      "start": 1.707,
                      "end": 1.741
                    },
                    {
                      "character": "s",
                      "start": 1.741,
                      "end": 1.8
                    },
                    {
                      "character": "h",
                      "start": 1.8,
                      "end": 1.834
                    },
                    {
                      "character": "i",
                      "start": 1.834,
                      "end": 1.892
                    },
                    {
                      "character": "p",
                      "start": 1.892,
                      "end": 1.939
                    }
                  ]
                },
                {
                  "word": "with",
                  "start": 1.985,
                  "end": 2.113,
                  "characters": [
                    {
                      "character": "w",
                      "start": 1.985,
                      "end": 2.009
                    },
                    {
                      "character": "i",
                      "start": 2.009,
                      "end": 2.043
                    },
                    {
                      "character": "t",
                      "start": 2.043,
                      "end": 2.078
                    },
                    {
                      "character": "h",
                      "start": 2.078,
                      "end": 2.113
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "your best",
              "start": 2.148,
              "end": 2.508,
              "words": [
                {
                  "word": "your",
                  "start": 2.148,
                  "end": 2.252,
                  "characters": [
                    {
                      "character": "y",
                      "start": 2.148,
                      "end": 2.171
                    },
                    {
                      "character": "o",
                      "start": 2.171,
                      "end": 2.194
                    },
                    {
                      "character": "u",
                      "start": 2.194,
                      "end": 2.218
                    },
                    {
                      "character": "r",
                      "start": 2.218,
                      "end": 2.252
                    }
                  ]
                },
                {
                  "word": "best",
                  "start": 2.299,
                  "end": 2.508,
                  "characters": [
                    {
                      "character": "b",
                      "start": 2.299,
                      "end": 2.334
                    },
                    {
                      "character": "e",
                      "start": 2.334,
                      "end": 2.403
                    },
                    {
                      "character": "s",
                      "start": 2.403,
                      "end": 2.461
                    },
                    {
                      "character": "t",
                      "start": 2.461,
                      "end": 2.508
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "friend?",
              "start": 2.566,
              "end": 3.251,
              "words": [
                {
                  "word": "friend?",
                  "start": 2.566,
                  "end": 3.251,
                  "characters": [
                    {
                      "character": "f",
                      "start": 2.566,
                      "end": 2.612
                    },
                    {
                      "character": "r",
                      "start": 2.612,
                      "end": 2.694
                    },
                    {
                      "character": "i",
                      "start": 2.694,
                      "end": 2.752
                    },
                    {
                      "character": "e",
                      "start": 2.752,
                      "end": 2.786
                    },
                    {
                      "character": "n",
                      "start": 2.786,
                      "end": 2.844
                    },
                    {
                      "character": "d",
                      "start": 2.844,
                      "end": 2.995
                    },
                    {
                      "character": "?",
                      "start": 2.995,
                      "end": 3.251
                    }
                  ]
                }
              ]
            }
          ]
        },
        "duration": 3.2914285714285714
      },
      "content": {
        "key": "user-upload/9f75b391-d144-4a19-bd56-376c6fd4383d.mp3",
        "transcription": {
          "characters": [
            {
              "character": "I",
              "start": 0,
              "end": 0.081
            },
            {
              "character": "t",
              "start": 0.081,
              "end": 0.128
            },
            {
              "character": " ",
              "start": 0.128,
              "end": 0.174
            },
            {
              "character": "w",
              "start": 0.174,
              "end": 0.197
            },
            {
              "character": "a",
              "start": 0.197,
              "end": 0.232
            },
            {
              "character": "s",
              "start": 0.232,
              "end": 0.267
            },
            {
              "character": " ",
              "start": 0.267,
              "end": 0.337
            },
            {
              "character": "m",
              "start": 0.337,
              "end": 0.383
            },
            {
              "character": "y",
              "start": 0.383,
              "end": 0.453
            },
            {
              "character": " ",
              "start": 0.453,
              "end": 0.534
            },
            {
              "character": "d",
              "start": 0.534,
              "end": 0.592
            },
            {
              "character": "a",
              "start": 0.592,
              "end": 0.662
            },
            {
              "character": "u",
              "start": 0.662,
              "end": 0.697
            },
            {
              "character": "g",
              "start": 0.697,
              "end": 0.731
            },
            {
              "character": "h",
              "start": 0.731,
              "end": 0.766
            },
            {
              "character": "t",
              "start": 0.766,
              "end": 0.801
            },
            {
              "character": "e",
              "start": 0.801,
              "end": 0.836
            },
            {
              "character": "r",
              "start": 0.836,
              "end": 0.871
            },
            {
              "character": "’",
              "start": 0.871,
              "end": 0.917
            },
            {
              "character": "s",
              "start": 0.917,
              "end": 0.952
            },
            {
              "character": " ",
              "start": 0.952,
              "end": 1.033
            },
            {
              "character": "5",
              "start": 1.033,
              "end": 1.184
            },
            {
              "character": "t",
              "start": 1.184,
              "end": 1.231
            },
            {
              "character": "h",
              "start": 1.231,
              "end": 1.265
            },
            {
              "character": " ",
              "start": 1.265,
              "end": 1.335
            },
            {
              "character": "b",
              "start": 1.335,
              "end": 1.382
            },
            {
              "character": "i",
              "start": 1.382,
              "end": 1.451
            },
            {
              "character": "r",
              "start": 1.451,
              "end": 1.509
            },
            {
              "character": "t",
              "start": 1.509,
              "end": 1.567
            },
            {
              "character": "h",
              "start": 1.567,
              "end": 1.614
            },
            {
              "character": "d",
              "start": 1.614,
              "end": 1.695
            },
            {
              "character": "a",
              "start": 1.695,
              "end": 1.811
            },
            {
              "character": "y",
              "start": 1.811,
              "end": 1.927
            },
            {
              "character": ".",
              "start": 1.927,
              "end": 2.043
            },
            {
              "character": " ",
              "start": 2.043,
              "end": 2.485
            },
            {
              "character": " ",
              "start": 2.485,
              "end": 2.485
            },
            {
              "character": "B",
              "start": 2.485,
              "end": 2.543
            },
            {
              "character": "e",
              "start": 2.543,
              "end": 2.601
            },
            {
              "character": "c",
              "start": 2.601,
              "end": 2.647
            },
            {
              "character": "a",
              "start": 2.647,
              "end": 2.682
            },
            {
              "character": "u",
              "start": 2.682,
              "end": 2.717
            },
            {
              "character": "s",
              "start": 2.717,
              "end": 2.752
            },
            {
              "character": "e",
              "start": 2.752,
              "end": 2.786
            },
            {
              "character": " ",
              "start": 2.786,
              "end": 2.821
            },
            {
              "character": "I",
              "start": 2.821,
              "end": 2.844
            },
            {
              "character": " ",
              "start": 2.844,
              "end": 2.926
            },
            {
              "character": "g",
              "start": 2.926,
              "end": 2.961
            },
            {
              "character": "o",
              "start": 2.961,
              "end": 3.042
            },
            {
              "character": "t",
              "start": 3.042,
              "end": 3.088
            },
            {
              "character": " ",
              "start": 3.088,
              "end": 3.158
            },
            {
              "character": "m",
              "start": 3.158,
              "end": 3.204
            },
            {
              "character": "a",
              "start": 3.204,
              "end": 3.286
            },
            {
              "character": "r",
              "start": 3.286,
              "end": 3.344
            },
            {
              "character": "r",
              "start": 3.344,
              "end": 3.39
            },
            {
              "character": "i",
              "start": 3.39,
              "end": 3.437
            },
            {
              "character": "e",
              "start": 3.437,
              "end": 3.495
            },
            {
              "character": "d",
              "start": 3.495,
              "end": 3.518
            },
            {
              "character": " ",
              "start": 3.518,
              "end": 3.553
            },
            {
              "character": "a",
              "start": 3.553,
              "end": 3.576
            },
            {
              "character": "n",
              "start": 3.576,
              "end": 3.599
            },
            {
              "character": "d",
              "start": 3.599,
              "end": 3.622
            },
            {
              "character": " ",
              "start": 3.622,
              "end": 3.68
            },
            {
              "character": "h",
              "start": 3.68,
              "end": 3.727
            },
            {
              "character": "a",
              "start": 3.727,
              "end": 3.773
            },
            {
              "character": "d",
              "start": 3.773,
              "end": 3.82
            },
            {
              "character": " ",
              "start": 3.82,
              "end": 3.866
            },
            {
              "character": "h",
              "start": 3.866,
              "end": 3.889
            },
            {
              "character": "e",
              "start": 3.889,
              "end": 3.913
            },
            {
              "character": "r",
              "start": 3.913,
              "end": 3.936
            },
            {
              "character": " ",
              "start": 3.936,
              "end": 3.982
            },
            {
              "character": "v",
              "start": 3.982,
              "end": 4.029
            },
            {
              "character": "e",
              "start": 4.029,
              "end": 4.087
            },
            {
              "character": "r",
              "start": 4.087,
              "end": 4.156
            },
            {
              "character": "y",
              "start": 4.156,
              "end": 4.203
            },
            {
              "character": " ",
              "start": 4.203,
              "end": 4.272
            },
            {
              "character": "e",
              "start": 4.272,
              "end": 4.319
            },
            {
              "character": "a",
              "start": 4.319,
              "end": 4.365
            },
            {
              "character": "r",
              "start": 4.365,
              "end": 4.423
            },
            {
              "character": "l",
              "start": 4.423,
              "end": 4.493
            },
            {
              "character": "y",
              "start": 4.493,
              "end": 4.54
            },
            {
              "character": " ",
              "start": 4.54,
              "end": 4.586
            },
            {
              "character": "i",
              "start": 4.586,
              "end": 4.609
            },
            {
              "character": "n",
              "start": 4.609,
              "end": 4.644
            },
            {
              "character": " ",
              "start": 4.644,
              "end": 4.702
            },
            {
              "character": "m",
              "start": 4.702,
              "end": 4.748
            },
            {
              "character": "y",
              "start": 4.748,
              "end": 4.818
            },
            {
              "character": " ",
              "start": 4.818,
              "end": 4.911
            },
            {
              "character": "2",
              "start": 4.911,
              "end": 5.062
            },
            {
              "character": "0",
              "start": 5.062,
              "end": 5.271
            },
            {
              "character": "s",
              "start": 5.271,
              "end": 5.422
            },
            {
              "character": ",",
              "start": 5.422,
              "end": 5.515
            },
            {
              "character": " ",
              "start": 5.515,
              "end": 5.666
            },
            {
              "character": "a",
              "start": 5.666,
              "end": 5.782
            },
            {
              "character": "t",
              "start": 5.782,
              "end": 5.817
            },
            {
              "character": " ",
              "start": 5.817,
              "end": 5.875
            },
            {
              "character": "t",
              "start": 5.875,
              "end": 5.898
            },
            {
              "character": "h",
              "start": 5.898,
              "end": 5.968
            },
            {
              "character": "a",
              "start": 5.968,
              "end": 6.026
            },
            {
              "character": "t",
              "start": 6.026,
              "end": 6.072
            },
            {
              "character": " ",
              "start": 6.072,
              "end": 6.13
            },
            {
              "character": "t",
              "start": 6.13,
              "end": 6.2
            },
            {
              "character": "i",
              "start": 6.2,
              "end": 6.351
            },
            {
              "character": "m",
              "start": 6.351,
              "end": 6.42
            },
            {
              "character": "e",
              "start": 6.42,
              "end": 6.536
            },
            {
              "character": ",",
              "start": 6.536,
              "end": 6.571
            },
            {
              "character": " ",
              "start": 6.571,
              "end": 6.722
            },
            {
              "character": "n",
              "start": 6.722,
              "end": 6.792
            },
            {
              "character": "o",
              "start": 6.792,
              "end": 6.838
            },
            {
              "character": "n",
              "start": 6.838,
              "end": 6.873
            },
            {
              "character": "e",
              "start": 6.873,
              "end": 6.896
            },
            {
              "character": " ",
              "start": 6.896,
              "end": 6.92
            },
            {
              "character": "o",
              "start": 6.92,
              "end": 6.943
            },
            {
              "character": "f",
              "start": 6.943,
              "end": 6.966
            },
            {
              "character": " ",
              "start": 6.966,
              "end": 7.012
            },
            {
              "character": "m",
              "start": 7.012,
              "end": 7.047
            },
            {
              "character": "y",
              "start": 7.047,
              "end": 7.094
            },
            {
              "character": " ",
              "start": 7.094,
              "end": 7.163
            },
            {
              "character": "f",
              "start": 7.163,
              "end": 7.21
            },
            {
              "character": "r",
              "start": 7.21,
              "end": 7.256
            },
            {
              "character": "i",
              "start": 7.256,
              "end": 7.291
            },
            {
              "character": "e",
              "start": 7.291,
              "end": 7.326
            },
            {
              "character": "n",
              "start": 7.326,
              "end": 7.349
            },
            {
              "character": "d",
              "start": 7.349,
              "end": 7.396
            },
            {
              "character": "s",
              "start": 7.396,
              "end": 7.43
            },
            {
              "character": " ",
              "start": 7.43,
              "end": 7.465
            },
            {
              "character": "h",
              "start": 7.465,
              "end": 7.5
            },
            {
              "character": "a",
              "start": 7.5,
              "end": 7.558
            },
            {
              "character": "d",
              "start": 7.558,
              "end": 7.605
            },
            {
              "character": " ",
              "start": 7.605,
              "end": 7.686
            },
            {
              "character": "k",
              "start": 7.686,
              "end": 7.744
            },
            {
              "character": "i",
              "start": 7.744,
              "end": 7.918
            },
            {
              "character": "d",
              "start": 7.918,
              "end": 8.034
            },
            {
              "character": "s",
              "start": 8.034,
              "end": 8.185
            },
            {
              "character": ".",
              "start": 8.185,
              "end": 8.359
            },
            {
              "character": " ",
              "start": 8.359,
              "end": 8.87
            },
            {
              "character": "M",
              "start": 8.87,
              "end": 8.951
            },
            {
              "character": "y",
              "start": 8.951,
              "end": 9.009
            },
            {
              "character": " ",
              "start": 9.009,
              "end": 9.079
            },
            {
              "character": "b",
              "start": 9.079,
              "end": 9.114
            },
            {
              "character": "a",
              "start": 9.114,
              "end": 9.207
            },
            {
              "character": "b",
              "start": 9.207,
              "end": 9.288
            },
            {
              "character": "y",
              "start": 9.288,
              "end": 9.334
            },
            {
              "character": " ",
              "start": 9.334,
              "end": 9.392
            },
            {
              "character": "w",
              "start": 9.392,
              "end": 9.439
            },
            {
              "character": "a",
              "start": 9.439,
              "end": 9.485
            },
            {
              "character": "s",
              "start": 9.485,
              "end": 9.532
            },
            {
              "character": " ",
              "start": 9.532,
              "end": 9.601
            },
            {
              "character": "t",
              "start": 9.601,
              "end": 9.625
            },
            {
              "character": "h",
              "start": 9.625,
              "end": 9.659
            },
            {
              "character": "e",
              "start": 9.659,
              "end": 9.683
            },
            {
              "character": " ",
              "start": 9.683,
              "end": 9.741
            },
            {
              "character": "s",
              "start": 9.741,
              "end": 9.799
            },
            {
              "character": "w",
              "start": 9.799,
              "end": 9.857
            },
            {
              "character": "e",
              "start": 9.857,
              "end": 9.927
            },
            {
              "character": "e",
              "start": 9.927,
              "end": 9.996
            },
            {
              "character": "t",
              "start": 9.996,
              "end": 10.054
            },
            {
              "character": "h",
              "start": 10.054,
              "end": 10.077
            },
            {
              "character": "e",
              "start": 10.077,
              "end": 10.124
            },
            {
              "character": "a",
              "start": 10.124,
              "end": 10.17
            },
            {
              "character": "r",
              "start": 10.17,
              "end": 10.217
            },
            {
              "character": "t",
              "start": 10.217,
              "end": 10.263
            },
            {
              "character": " ",
              "start": 10.263,
              "end": 10.31
            },
            {
              "character": "f",
              "start": 10.31,
              "end": 10.344
            },
            {
              "character": "o",
              "start": 10.344,
              "end": 10.379
            },
            {
              "character": "r",
              "start": 10.379,
              "end": 10.414
            },
            {
              "character": " ",
              "start": 10.414,
              "end": 10.472
            },
            {
              "character": "a",
              "start": 10.472,
              "end": 10.519
            },
            {
              "character": "l",
              "start": 10.519,
              "end": 10.565
            },
            {
              "character": "l",
              "start": 10.565,
              "end": 10.612
            },
            {
              "character": " ",
              "start": 10.612,
              "end": 10.67
            },
            {
              "character": "t",
              "start": 10.67,
              "end": 10.693
            },
            {
              "character": "h",
              "start": 10.693,
              "end": 10.716
            },
            {
              "character": "e",
              "start": 10.716,
              "end": 10.739
            },
            {
              "character": " ",
              "start": 10.739,
              "end": 10.82
            },
            {
              "character": "a",
              "start": 10.82,
              "end": 10.879
            },
            {
              "character": "u",
              "start": 10.879,
              "end": 10.925
            },
            {
              "character": "n",
              "start": 10.925,
              "end": 10.983
            },
            {
              "character": "t",
              "start": 10.983,
              "end": 11.053
            },
            {
              "character": "i",
              "start": 11.053,
              "end": 11.134
            },
            {
              "character": "e",
              "start": 11.134,
              "end": 11.204
            },
            {
              "character": "s",
              "start": 11.204,
              "end": 11.285
            },
            {
              "character": " ",
              "start": 11.285,
              "end": 11.459
            },
            {
              "character": "-",
              "start": 11.459,
              "end": 11.494
            },
            {
              "character": " ",
              "start": 11.494,
              "end": 11.773
            },
            {
              "character": "m",
              "start": 11.773,
              "end": 11.831
            },
            {
              "character": "o",
              "start": 11.831,
              "end": 12.005
            },
            {
              "character": "m",
              "start": 12.005,
              "end": 12.051
            },
            {
              "character": "’",
              "start": 12.051,
              "end": 12.121
            },
            {
              "character": "s",
              "start": 12.121,
              "end": 12.144
            },
            {
              "character": " ",
              "start": 12.144,
              "end": 12.214
            },
            {
              "character": "t",
              "start": 12.214,
              "end": 12.237
            },
            {
              "character": "h",
              "start": 12.237,
              "end": 12.307
            },
            {
              "character": "r",
              "start": 12.307,
              "end": 12.365
            },
            {
              "character": "e",
              "start": 12.365,
              "end": 12.434
            },
            {
              "character": "e",
              "start": 12.434,
              "end": 12.492
            },
            {
              "character": " ",
              "start": 12.492,
              "end": 12.55
            },
            {
              "character": "c",
              "start": 12.55,
              "end": 12.608
            },
            {
              "character": "l",
              "start": 12.608,
              "end": 12.678
            },
            {
              "character": "o",
              "start": 12.678,
              "end": 12.771
            },
            {
              "character": "s",
              "start": 12.771,
              "end": 12.829
            },
            {
              "character": "e",
              "start": 12.829,
              "end": 12.875
            },
            {
              "character": " ",
              "start": 12.875,
              "end": 12.934
            },
            {
              "character": "f",
              "start": 12.934,
              "end": 12.992
            },
            {
              "character": "r",
              "start": 12.992,
              "end": 13.073
            },
            {
              "character": "i",
              "start": 13.073,
              "end": 13.131
            },
            {
              "character": "e",
              "start": 13.131,
              "end": 13.189
            },
            {
              "character": "n",
              "start": 13.189,
              "end": 13.235
            },
            {
              "character": "d",
              "start": 13.235,
              "end": 13.305
            },
            {
              "character": "s",
              "start": 13.305,
              "end": 13.456
            },
            {
              "character": ".",
              "start": 13.456,
              "end": 13.607
            },
            {
              "character": " ",
              "start": 13.607,
              "end": 13.99
            },
            {
              "character": "W",
              "start": 13.99,
              "end": 14.06
            },
            {
              "character": "e",
              "start": 14.06,
              "end": 14.129
            },
            {
              "character": " ",
              "start": 14.129,
              "end": 14.187
            },
            {
              "character": "t",
              "start": 14.187,
              "end": 14.211
            },
            {
              "character": "h",
              "start": 14.211,
              "end": 14.257
            },
            {
              "character": "r",
              "start": 14.257,
              "end": 14.303
            },
            {
              "character": "e",
              "start": 14.303,
              "end": 14.362
            },
            {
              "character": "w",
              "start": 14.362,
              "end": 14.408
            },
            {
              "character": " ",
              "start": 14.408,
              "end": 14.478
            },
            {
              "character": "h",
              "start": 14.478,
              "end": 14.512
            },
            {
              "character": "e",
              "start": 14.512,
              "end": 14.547
            },
            {
              "character": "r",
              "start": 14.547,
              "end": 14.582
            },
            {
              "character": " ",
              "start": 14.582,
              "end": 14.64
            },
            {
              "character": "a",
              "start": 14.64,
              "end": 14.663
            },
            {
              "character": " ",
              "start": 14.663,
              "end": 14.733
            },
            {
              "character": "p",
              "start": 14.733,
              "end": 14.791
            },
            {
              "character": "a",
              "start": 14.791,
              "end": 14.872
            },
            {
              "character": "r",
              "start": 14.872,
              "end": 14.93
            },
            {
              "character": "t",
              "start": 14.93,
              "end": 15.012
            },
            {
              "character": "y",
              "start": 15.012,
              "end": 15.128
            },
            {
              "character": ".",
              "start": 15.128,
              "end": 15.279
            },
            {
              "character": " ",
              "start": 15.279,
              "end": 15.488
            },
            {
              "character": " ",
              "start": 15.488,
              "end": 15.488
            },
            {
              "character": "I",
              "start": 15.488,
              "end": 15.569
            },
            {
              "character": "t",
              "start": 15.569,
              "end": 15.627
            },
            {
              "character": " ",
              "start": 15.627,
              "end": 15.673
            },
            {
              "character": "w",
              "start": 15.673,
              "end": 15.708
            },
            {
              "character": "a",
              "start": 15.708,
              "end": 15.743
            },
            {
              "character": "s",
              "start": 15.743,
              "end": 15.789
            },
            {
              "character": " ",
              "start": 15.789,
              "end": 15.906
            },
            {
              "character": "f",
              "start": 15.906,
              "end": 16.022
            },
            {
              "character": "u",
              "start": 16.022,
              "end": 16.196
            },
            {
              "character": "n",
              "start": 16.196,
              "end": 16.37
            },
            {
              "character": ".",
              "start": 16.37,
              "end": 16.498
            },
            {
              "character": " ",
              "start": 16.498,
              "end": 17.101
            },
            {
              "character": "E",
              "start": 17.101,
              "end": 17.183
            },
            {
              "character": "a",
              "start": 17.183,
              "end": 17.241
            },
            {
              "character": "c",
              "start": 17.241,
              "end": 17.287
            },
            {
              "character": "h",
              "start": 17.287,
              "end": 17.322
            },
            {
              "character": " ",
              "start": 17.322,
              "end": 17.38
            },
            {
              "character": "a",
              "start": 17.38,
              "end": 17.415
            },
            {
              "character": "u",
              "start": 17.415,
              "end": 17.461
            },
            {
              "character": "n",
              "start": 17.461,
              "end": 17.508
            },
            {
              "character": "t",
              "start": 17.508,
              "end": 17.577
            },
            {
              "character": "i",
              "start": 17.577,
              "end": 17.612
            },
            {
              "character": "e",
              "start": 17.612,
              "end": 17.647
            },
            {
              "character": " ",
              "start": 17.647,
              "end": 17.693
            },
            {
              "character": "g",
              "start": 17.693,
              "end": 17.74
            },
            {
              "character": "o",
              "start": 17.74,
              "end": 17.81
            },
            {
              "character": "t",
              "start": 17.81,
              "end": 17.856
            },
            {
              "character": " ",
              "start": 17.856,
              "end": 17.891
            },
            {
              "character": "h",
              "start": 17.891,
              "end": 17.914
            },
            {
              "character": "e",
              "start": 17.914,
              "end": 17.937
            },
            {
              "character": "r",
              "start": 17.937,
              "end": 17.972
            },
            {
              "character": " ",
              "start": 17.972,
              "end": 18.019
            },
            {
              "character": "a",
              "start": 18.019,
              "end": 18.042
            },
            {
              "character": " ",
              "start": 18.042,
              "end": 18.1
            },
            {
              "character": "p",
              "start": 18.1,
              "end": 18.135
            },
            {
              "character": "r",
              "start": 18.135,
              "end": 18.204
            },
            {
              "character": "e",
              "start": 18.204,
              "end": 18.274
            },
            {
              "character": "s",
              "start": 18.274,
              "end": 18.332
            },
            {
              "character": "e",
              "start": 18.332,
              "end": 18.402
            },
            {
              "character": "n",
              "start": 18.402,
              "end": 18.437
            },
            {
              "character": "t",
              "start": 18.437,
              "end": 18.529
            },
            {
              "character": ".",
              "start": 18.529,
              "end": 18.68
            },
            {
              "character": " ",
              "start": 18.68,
              "end": 18.924
            },
            {
              "character": "T",
              "start": 18.924,
              "end": 18.971
            },
            {
              "character": "h",
              "start": 18.971,
              "end": 19.017
            },
            {
              "character": "e",
              "start": 19.017,
              "end": 19.063
            },
            {
              "character": "y",
              "start": 19.063,
              "end": 19.098
            },
            {
              "character": " ",
              "start": 19.098,
              "end": 19.156
            },
            {
              "character": "h",
              "start": 19.156,
              "end": 19.191
            },
            {
              "character": "a",
              "start": 19.191,
              "end": 19.261
            },
            {
              "character": "n",
              "start": 19.261,
              "end": 19.307
            },
            {
              "character": "d",
              "start": 19.307,
              "end": 19.377
            },
            {
              "character": "e",
              "start": 19.377,
              "end": 19.458
            },
            {
              "character": "d",
              "start": 19.458,
              "end": 19.481
            },
            {
              "character": " ",
              "start": 19.481,
              "end": 19.528
            },
            {
              "character": "i",
              "start": 19.528,
              "end": 19.563
            },
            {
              "character": "t",
              "start": 19.563,
              "end": 19.609
            },
            {
              "character": " ",
              "start": 19.609,
              "end": 19.644
            },
            {
              "character": "t",
              "start": 19.644,
              "end": 19.679
            },
            {
              "character": "o",
              "start": 19.679,
              "end": 19.714
            },
            {
              "character": " ",
              "start": 19.714,
              "end": 19.795
            },
            {
              "character": "h",
              "start": 19.795,
              "end": 19.83
            },
            {
              "character": "e",
              "start": 19.83,
              "end": 19.853
            },
            {
              "character": "r",
              "start": 19.853,
              "end": 19.888
            },
            {
              "character": " ",
              "start": 19.888,
              "end": 19.969
            },
            {
              "character": "o",
              "start": 19.969,
              "end": 20.027
            },
            {
              "character": "n",
              "start": 20.027,
              "end": 20.108
            },
            {
              "character": "e",
              "start": 20.108,
              "end": 20.155
            },
            {
              "character": " ",
              "start": 20.155,
              "end": 20.201
            },
            {
              "character": "b",
              "start": 20.201,
              "end": 20.259
            },
            {
              "character": "y",
              "start": 20.259,
              "end": 20.352
            },
            {
              "character": " ",
              "start": 20.352,
              "end": 20.445
            },
            {
              "character": "o",
              "start": 20.445,
              "end": 20.538
            },
            {
              "character": "n",
              "start": 20.538,
              "end": 20.608
            },
            {
              "character": "e",
              "start": 20.608,
              "end": 20.654
            },
            {
              "character": " ",
              "start": 20.654,
              "end": 20.7
            },
            {
              "character": "s",
              "start": 20.7,
              "end": 20.747
            },
            {
              "character": "o",
              "start": 20.747,
              "end": 20.817
            },
            {
              "character": " ",
              "start": 20.817,
              "end": 20.886
            },
            {
              "character": "s",
              "start": 20.886,
              "end": 20.921
            },
            {
              "character": "h",
              "start": 20.921,
              "end": 20.967
            },
            {
              "character": "e",
              "start": 20.967,
              "end": 21.002
            },
            {
              "character": " ",
              "start": 21.002,
              "end": 21.084
            },
            {
              "character": "o",
              "start": 21.084,
              "end": 21.2
            },
            {
              "character": "p",
              "start": 21.2,
              "end": 21.258
            },
            {
              "character": "e",
              "start": 21.258,
              "end": 21.304
            },
            {
              "character": "n",
              "start": 21.304,
              "end": 21.339
            },
            {
              "character": "e",
              "start": 21.339,
              "end": 21.397
            },
            {
              "character": "d",
              "start": 21.397,
              "end": 21.42
            },
            {
              "character": " ",
              "start": 21.42,
              "end": 21.467
            },
            {
              "character": "i",
              "start": 21.467,
              "end": 21.502
            },
            {
              "character": "t",
              "start": 21.502,
              "end": 21.536
            },
            {
              "character": " ",
              "start": 21.536,
              "end": 21.583
            },
            {
              "character": "a",
              "start": 21.583,
              "end": 21.606
            },
            {
              "character": "n",
              "start": 21.606,
              "end": 21.641
            },
            {
              "character": "d",
              "start": 21.641,
              "end": 21.676
            },
            {
              "character": " ",
              "start": 21.676,
              "end": 21.745
            },
            {
              "character": "g",
              "start": 21.745,
              "end": 21.792
            },
            {
              "character": "o",
              "start": 21.792,
              "end": 21.873
            },
            {
              "character": "t",
              "start": 21.873,
              "end": 21.92
            },
            {
              "character": " ",
              "start": 21.92,
              "end": 21.966
            },
            {
              "character": "e",
              "start": 21.966,
              "end": 22.001
            },
            {
              "character": "x",
              "start": 22.001,
              "end": 22.07
            },
            {
              "character": "c",
              "start": 22.07,
              "end": 22.152
            },
            {
              "character": "i",
              "start": 22.152,
              "end": 22.268
            },
            {
              "character": "t",
              "start": 22.268,
              "end": 22.337
            },
            {
              "character": "e",
              "start": 22.337,
              "end": 22.419
            },
            {
              "character": "d",
              "start": 22.419,
              "end": 22.512
            },
            {
              "character": ".",
              "start": 22.512,
              "end": 22.686
            },
            {
              "character": " ",
              "start": 22.686,
              "end": 23.382
            },
            {
              "character": "T",
              "start": 23.382,
              "end": 23.452
            },
            {
              "character": "o",
              "start": 23.452,
              "end": 23.498
            },
            {
              "character": " ",
              "start": 23.498,
              "end": 23.568
            },
            {
              "character": "t",
              "start": 23.568,
              "end": 23.591
            },
            {
              "character": "h",
              "start": 23.591,
              "end": 23.615
            },
            {
              "character": "e",
              "start": 23.615,
              "end": 23.638
            },
            {
              "character": " ",
              "start": 23.638,
              "end": 23.696
            },
            {
              "character": "l",
              "start": 23.696,
              "end": 23.742
            },
            {
              "character": "a",
              "start": 23.742,
              "end": 23.858
            },
            {
              "character": "s",
              "start": 23.858,
              "end": 23.94
            },
            {
              "character": "t",
              "start": 23.94,
              "end": 23.986
            },
            {
              "character": " ",
              "start": 23.986,
              "end": 24.056
            },
            {
              "character": "a",
              "start": 24.056,
              "end": 24.102
            },
            {
              "character": "u",
              "start": 24.102,
              "end": 24.16
            },
            {
              "character": "n",
              "start": 24.16,
              "end": 24.218
            },
            {
              "character": "t",
              "start": 24.218,
              "end": 24.288
            },
            {
              "character": "i",
              "start": 24.288,
              "end": 24.346
            },
            {
              "character": "e",
              "start": 24.346,
              "end": 24.392
            },
            {
              "character": ",",
              "start": 24.392,
              "end": 24.416
            },
            {
              "character": " ",
              "start": 24.416,
              "end": 24.439
            },
            {
              "character": "b",
              "start": 24.439,
              "end": 24.474
            },
            {
              "character": "e",
              "start": 24.474,
              "end": 24.543
            },
            {
              "character": "f",
              "start": 24.543,
              "end": 24.601
            },
            {
              "character": "o",
              "start": 24.601,
              "end": 24.648
            },
            {
              "character": "r",
              "start": 24.648,
              "end": 24.706
            },
            {
              "character": "e",
              "start": 24.706,
              "end": 24.741
            },
            {
              "character": " ",
              "start": 24.741,
              "end": 24.776
            },
            {
              "character": "s",
              "start": 24.776,
              "end": 24.81
            },
            {
              "character": "h",
              "start": 24.81,
              "end": 24.868
            },
            {
              "character": "e",
              "start": 24.868,
              "end": 24.892
            },
            {
              "character": " ",
              "start": 24.892,
              "end": 24.973
            },
            {
              "character": "h",
              "start": 24.973,
              "end": 25.008
            },
            {
              "character": "a",
              "start": 25.008,
              "end": 25.089
            },
            {
              "character": "n",
              "start": 25.089,
              "end": 25.135
            },
            {
              "character": "d",
              "start": 25.135,
              "end": 25.205
            },
            {
              "character": "e",
              "start": 25.205,
              "end": 25.275
            },
            {
              "character": "d",
              "start": 25.275,
              "end": 25.298
            },
            {
              "character": " ",
              "start": 25.298,
              "end": 25.333
            },
            {
              "character": "t",
              "start": 25.333,
              "end": 25.356
            },
            {
              "character": "h",
              "start": 25.356,
              "end": 25.379
            },
            {
              "character": "e",
              "start": 25.379,
              "end": 25.402
            },
            {
              "character": " ",
              "start": 25.402,
              "end": 25.449
            },
            {
              "character": "p",
              "start": 25.449,
              "end": 25.495
            },
            {
              "character": "r",
              "start": 25.495,
              "end": 25.542
            },
            {
              "character": "e",
              "start": 25.542,
              "end": 25.6
            },
            {
              "character": "s",
              "start": 25.6,
              "end": 25.658
            },
            {
              "character": "e",
              "start": 25.658,
              "end": 25.716
            },
            {
              "character": "n",
              "start": 25.716,
              "end": 25.751
            },
            {
              "character": "t",
              "start": 25.751,
              "end": 25.786
            },
            {
              "character": " ",
              "start": 25.786,
              "end": 25.82
            },
            {
              "character": "t",
              "start": 25.82,
              "end": 25.844
            },
            {
              "character": "o",
              "start": 25.844,
              "end": 25.867
            },
            {
              "character": " ",
              "start": 25.867,
              "end": 25.948
            },
            {
              "character": "m",
              "start": 25.948,
              "end": 25.995
            },
            {
              "character": "y",
              "start": 25.995,
              "end": 26.053
            },
            {
              "character": " ",
              "start": 26.053,
              "end": 26.122
            },
            {
              "character": "d",
              "start": 26.122,
              "end": 26.169
            },
            {
              "character": "a",
              "start": 26.169,
              "end": 26.25
            },
            {
              "character": "u",
              "start": 26.25,
              "end": 26.285
            },
            {
              "character": "g",
              "start": 26.285,
              "end": 26.32
            },
            {
              "character": "h",
              "start": 26.32,
              "end": 26.343
            },
            {
              "character": "t",
              "start": 26.343,
              "end": 26.378
            },
            {
              "character": "e",
              "start": 26.378,
              "end": 26.424
            },
            {
              "character": "r",
              "start": 26.424,
              "end": 26.494
            },
            {
              "character": ",",
              "start": 26.494,
              "end": 26.645
            },
            {
              "character": " ",
              "start": 26.645,
              "end": 26.819
            },
            {
              "character": "s",
              "start": 26.819,
              "end": 26.877
            },
            {
              "character": "h",
              "start": 26.877,
              "end": 26.935
            },
            {
              "character": "e",
              "start": 26.935,
              "end": 26.958
            },
            {
              "character": " ",
              "start": 26.958,
              "end": 26.981
            },
            {
              "character": "‘",
              "start": 26.981,
              "end": 27.016
            },
            {
              "character": "d",
              "start": 27.016,
              "end": 27.063
            },
            {
              "character": "e",
              "start": 27.063,
              "end": 27.132
            },
            {
              "character": "m",
              "start": 27.132,
              "end": 27.202
            },
            {
              "character": "a",
              "start": 27.202,
              "end": 27.318
            },
            {
              "character": "n",
              "start": 27.318,
              "end": 27.365
            },
            {
              "character": "d",
              "start": 27.365,
              "end": 27.446
            },
            {
              "character": "e",
              "start": 27.446,
              "end": 27.527
            },
            {
              "character": "d",
              "start": 27.527,
              "end": 27.55
            },
            {
              "character": "’",
              "start": 27.55,
              "end": 27.597
            },
            {
              "character": " ",
              "start": 27.597,
              "end": 27.632
            },
            {
              "character": "m",
              "start": 27.632,
              "end": 27.69
            },
            {
              "character": "y",
              "start": 27.69,
              "end": 27.759
            },
            {
              "character": " ",
              "start": 27.759,
              "end": 27.852
            },
            {
              "character": "g",
              "start": 27.852,
              "end": 27.899
            },
            {
              "character": "i",
              "start": 27.899,
              "end": 27.992
            },
            {
              "character": "r",
              "start": 27.992,
              "end": 28.061
            },
            {
              "character": "l",
              "start": 28.061,
              "end": 28.177
            },
            {
              "character": ",",
              "start": 28.177,
              "end": 28.351
            },
            {
              "character": " ",
              "start": 28.351,
              "end": 28.595
            },
            {
              "character": "“",
              "start": 28.595,
              "end": 28.711
            },
            {
              "character": "S",
              "start": 28.711,
              "end": 28.804
            },
            {
              "character": "a",
              "start": 28.804,
              "end": 28.92
            },
            {
              "character": "y",
              "start": 28.92,
              "end": 28.967
            },
            {
              "character": " ",
              "start": 28.967,
              "end": 29.002
            },
            {
              "character": "‘",
              "start": 29.002,
              "end": 29.048
            },
            {
              "character": "p",
              "start": 29.048,
              "end": 29.129
            },
            {
              "character": "l",
              "start": 29.129,
              "end": 29.211
            },
            {
              "character": "e",
              "start": 29.211,
              "end": 29.303
            },
            {
              "character": "a",
              "start": 29.303,
              "end": 29.385
            },
            {
              "character": "s",
              "start": 29.385,
              "end": 29.501
            },
            {
              "character": "e",
              "start": 29.501,
              "end": 29.547
            },
            {
              "character": "’",
              "start": 29.547,
              "end": 29.582
            },
            {
              "character": " ",
              "start": 29.582,
              "end": 29.617
            },
            {
              "character": "a",
              "start": 29.617,
              "end": 29.675
            },
            {
              "character": "n",
              "start": 29.675,
              "end": 29.745
            },
            {
              "character": "d",
              "start": 29.745,
              "end": 29.791
            },
            {
              "character": " ",
              "start": 29.791,
              "end": 29.884
            },
            {
              "character": "b",
              "start": 29.884,
              "end": 29.954
            },
            {
              "character": "o",
              "start": 29.954,
              "end": 30.128
            },
            {
              "character": "w",
              "start": 30.128,
              "end": 30.198
            },
            {
              "character": ",",
              "start": 30.198,
              "end": 30.256
            },
            {
              "character": " ",
              "start": 30.256,
              "end": 30.291
            },
            {
              "character": "s",
              "start": 30.291,
              "end": 30.349
            },
            {
              "character": "o",
              "start": 30.349,
              "end": 30.43
            },
            {
              "character": " ",
              "start": 30.43,
              "end": 30.523
            },
            {
              "character": "a",
              "start": 30.523,
              "end": 30.581
            },
            {
              "character": "u",
              "start": 30.581,
              "end": 30.639
            },
            {
              "character": "n",
              "start": 30.639,
              "end": 30.685
            },
            {
              "character": "t",
              "start": 30.685,
              "end": 30.743
            },
            {
              "character": "i",
              "start": 30.743,
              "end": 30.79
            },
            {
              "character": "e",
              "start": 30.79,
              "end": 30.813
            },
            {
              "character": " ",
              "start": 30.813,
              "end": 30.848
            },
            {
              "character": "w",
              "start": 30.848,
              "end": 30.894
            },
            {
              "character": "i",
              "start": 30.894,
              "end": 30.941
            },
            {
              "character": "l",
              "start": 30.941,
              "end": 30.976
            },
            {
              "character": "l",
              "start": 30.976,
              "end": 30.999
            },
            {
              "character": " ",
              "start": 30.999,
              "end": 31.045
            },
            {
              "character": "g",
              "start": 31.045,
              "end": 31.08
            },
            {
              "character": "i",
              "start": 31.08,
              "end": 31.115
            },
            {
              "character": "v",
              "start": 31.115,
              "end": 31.15
            },
            {
              "character": "e",
              "start": 31.15,
              "end": 31.185
            },
            {
              "character": " ",
              "start": 31.185,
              "end": 31.219
            },
            {
              "character": "y",
              "start": 31.219,
              "end": 31.243
            },
            {
              "character": "o",
              "start": 31.243,
              "end": 31.266
            },
            {
              "character": "u",
              "start": 31.266,
              "end": 31.301
            },
            {
              "character": " ",
              "start": 31.301,
              "end": 31.37
            },
            {
              "character": "t",
              "start": 31.37,
              "end": 31.394
            },
            {
              "character": "h",
              "start": 31.394,
              "end": 31.417
            },
            {
              "character": "e",
              "start": 31.417,
              "end": 31.44
            },
            {
              "character": " ",
              "start": 31.44,
              "end": 31.486
            },
            {
              "character": "g",
              "start": 31.486,
              "end": 31.533
            },
            {
              "character": "i",
              "start": 31.533,
              "end": 31.649
            },
            {
              "character": "f",
              "start": 31.649,
              "end": 31.73
            },
            {
              "character": "t",
              "start": 31.73,
              "end": 31.846
            },
            {
              "character": "!",
              "start": 31.846,
              "end": 31.963
            },
            {
              "character": "”",
              "start": 31.963,
              "end": 32.079
            },
            {
              "character": ".",
              "start": 32.079,
              "end": 32.288
            },
            {
              "character": " ",
              "start": 32.288,
              "end": 33.1
            },
            {
              "character": "I",
              "start": 33.1,
              "end": 33.147
            },
            {
              "character": " ",
              "start": 33.147,
              "end": 33.24
            },
            {
              "character": "t",
              "start": 33.24,
              "end": 33.263
            },
            {
              "character": "h",
              "start": 33.263,
              "end": 33.298
            },
            {
              "character": "o",
              "start": 33.298,
              "end": 33.321
            },
            {
              "character": "u",
              "start": 33.321,
              "end": 33.356
            },
            {
              "character": "g",
              "start": 33.356,
              "end": 33.379
            },
            {
              "character": "h",
              "start": 33.379,
              "end": 33.414
            },
            {
              "character": "t",
              "start": 33.414,
              "end": 33.449
            },
            {
              "character": " ",
              "start": 33.449,
              "end": 33.495
            },
            {
              "character": "s",
              "start": 33.495,
              "end": 33.518
            },
            {
              "character": "h",
              "start": 33.518,
              "end": 33.553
            },
            {
              "character": "e",
              "start": 33.553,
              "end": 33.576
            },
            {
              "character": " ",
              "start": 33.576,
              "end": 33.634
            },
            {
              "character": "w",
              "start": 33.634,
              "end": 33.669
            },
            {
              "character": "a",
              "start": 33.669,
              "end": 33.704
            },
            {
              "character": "s",
              "start": 33.704,
              "end": 33.739
            },
            {
              "character": " ",
              "start": 33.739,
              "end": 33.797
            },
            {
              "character": "j",
              "start": 33.797,
              "end": 33.855
            },
            {
              "character": "o",
              "start": 33.855,
              "end": 33.971
            },
            {
              "character": "k",
              "start": 33.971,
              "end": 34.052
            },
            {
              "character": "i",
              "start": 34.052,
              "end": 34.122
            },
            {
              "character": "n",
              "start": 34.122,
              "end": 34.157
            },
            {
              "character": "g",
              "start": 34.157,
              "end": 34.215
            },
            {
              "character": ",",
              "start": 34.215,
              "end": 34.273
            },
            {
              "character": " ",
              "start": 34.273,
              "end": 34.308
            },
            {
              "character": "s",
              "start": 34.308,
              "end": 34.377
            },
            {
              "character": "o",
              "start": 34.377,
              "end": 34.459
            },
            {
              "character": " ",
              "start": 34.459,
              "end": 34.54
            },
            {
              "character": "I",
              "start": 34.54,
              "end": 34.575
            },
            {
              "character": " ",
              "start": 34.575,
              "end": 34.691
            },
            {
              "character": "i",
              "start": 34.691,
              "end": 34.737
            },
            {
              "character": "n",
              "start": 34.737,
              "end": 34.807
            },
            {
              "character": "t",
              "start": 34.807,
              "end": 34.865
            },
            {
              "character": "e",
              "start": 34.865,
              "end": 34.911
            },
            {
              "character": "r",
              "start": 34.911,
              "end": 34.969
            },
            {
              "character": "r",
              "start": 34.969,
              "end": 35.016
            },
            {
              "character": "u",
              "start": 35.016,
              "end": 35.062
            },
            {
              "character": "p",
              "start": 35.062,
              "end": 35.109
            },
            {
              "character": "t",
              "start": 35.109,
              "end": 35.167
            },
            {
              "character": "e",
              "start": 35.167,
              "end": 35.225
            },
            {
              "character": "d",
              "start": 35.225,
              "end": 35.248
            },
            {
              "character": " ",
              "start": 35.248,
              "end": 35.295
            },
            {
              "character": "a",
              "start": 35.295,
              "end": 35.318
            },
            {
              "character": "n",
              "start": 35.318,
              "end": 35.341
            },
            {
              "character": "d",
              "start": 35.341,
              "end": 35.376
            },
            {
              "character": " ",
              "start": 35.376,
              "end": 35.422
            },
            {
              "character": "t",
              "start": 35.422,
              "end": 35.457
            },
            {
              "character": "o",
              "start": 35.457,
              "end": 35.538
            },
            {
              "character": "l",
              "start": 35.538,
              "end": 35.608
            },
            {
              "character": "d",
              "start": 35.608,
              "end": 35.643
            },
            {
              "character": " ",
              "start": 35.643,
              "end": 35.701
            },
            {
              "character": "m",
              "start": 35.701,
              "end": 35.747
            },
            {
              "character": "y",
              "start": 35.747,
              "end": 35.794
            },
            {
              "character": " ",
              "start": 35.794,
              "end": 35.852
            },
            {
              "character": "d",
              "start": 35.852,
              "end": 35.898
            },
            {
              "character": "a",
              "start": 35.898,
              "end": 35.945
            },
            {
              "character": "u",
              "start": 35.945,
              "end": 35.98
            },
            {
              "character": "g",
              "start": 35.98,
              "end": 36.014
            },
            {
              "character": "h",
              "start": 36.014,
              "end": 36.038
            },
            {
              "character": "t",
              "start": 36.038,
              "end": 36.072
            },
            {
              "character": "e",
              "start": 36.072,
              "end": 36.107
            },
            {
              "character": "r",
              "start": 36.107,
              "end": 36.177
            },
            {
              "character": ",",
              "start": 36.177,
              "end": 36.328
            },
            {
              "character": " ",
              "start": 36.328,
              "end": 36.409
            },
            {
              "character": "“",
              "start": 36.409,
              "end": 36.479
            },
            {
              "character": "A",
              "start": 36.479,
              "end": 36.525
            },
            {
              "character": "u",
              "start": 36.525,
              "end": 36.595
            },
            {
              "character": "n",
              "start": 36.595,
              "end": 36.641
            },
            {
              "character": "t",
              "start": 36.641,
              "end": 36.699
            },
            {
              "character": "i",
              "start": 36.699,
              "end": 36.746
            },
            {
              "character": "e",
              "start": 36.746,
              "end": 36.769
            },
            {
              "character": " ",
              "start": 36.769,
              "end": 36.827
            },
            {
              "character": "g",
              "start": 36.827,
              "end": 36.862
            },
            {
              "character": "o",
              "start": 36.862,
              "end": 36.943
            },
            {
              "character": "t",
              "start": 36.943,
              "end": 36.978
            },
            {
              "character": " ",
              "start": 36.978,
              "end": 37.036
            },
            {
              "character": "y",
              "start": 37.036,
              "end": 37.059
            },
            {
              "character": "o",
              "start": 37.059,
              "end": 37.083
            },
            {
              "character": "u",
              "start": 37.083,
              "end": 37.117
            },
            {
              "character": " ",
              "start": 37.117,
              "end": 37.187
            },
            {
              "character": "a",
              "start": 37.187,
              "end": 37.21
            },
            {
              "character": " ",
              "start": 37.21,
              "end": 37.268
            },
            {
              "character": "p",
              "start": 37.268,
              "end": 37.303
            },
            {
              "character": "r",
              "start": 37.303,
              "end": 37.361
            },
            {
              "character": "e",
              "start": 37.361,
              "end": 37.419
            },
            {
              "character": "s",
              "start": 37.419,
              "end": 37.477
            },
            {
              "character": "e",
              "start": 37.477,
              "end": 37.535
            },
            {
              "character": "n",
              "start": 37.535,
              "end": 37.57
            },
            {
              "character": "t",
              "start": 37.57,
              "end": 37.605
            },
            {
              "character": ",",
              "start": 37.605,
              "end": 37.628
            },
            {
              "character": " ",
              "start": 37.628,
              "end": 37.651
            },
            {
              "character": "y",
              "start": 37.651,
              "end": 37.675
            },
            {
              "character": "o",
              "start": 37.675,
              "end": 37.698
            },
            {
              "character": "u",
              "start": 37.698,
              "end": 37.721
            },
            {
              "character": " ",
              "start": 37.721,
              "end": 37.791
            },
            {
              "character": "s",
              "start": 37.791,
              "end": 37.837
            },
            {
              "character": "a",
              "start": 37.837,
              "end": 37.918
            },
            {
              "character": "y",
              "start": 37.918,
              "end": 38
            },
            {
              "character": " ",
              "start": 38,
              "end": 38.069
            },
            {
              "character": "‘",
              "start": 38.069,
              "end": 38.093
            },
            {
              "character": "T",
              "start": 38.093,
              "end": 38.139
            },
            {
              "character": "h",
              "start": 38.139,
              "end": 38.209
            },
            {
              "character": "a",
              "start": 38.209,
              "end": 38.255
            },
            {
              "character": "n",
              "start": 38.255,
              "end": 38.313
            },
            {
              "character": "k",
              "start": 38.313,
              "end": 38.36
            },
            {
              "character": " ",
              "start": 38.36,
              "end": 38.406
            },
            {
              "character": "y",
              "start": 38.406,
              "end": 38.429
            },
            {
              "character": "o",
              "start": 38.429,
              "end": 38.464
            },
            {
              "character": "u",
              "start": 38.464,
              "end": 38.499
            },
            {
              "character": "’",
              "start": 38.499,
              "end": 38.534
            },
            {
              "character": " ",
              "start": 38.534,
              "end": 38.569
            },
            {
              "character": "o",
              "start": 38.569,
              "end": 38.627
            },
            {
              "character": "u",
              "start": 38.627,
              "end": 38.673
            },
            {
              "character": "t",
              "start": 38.673,
              "end": 38.708
            },
            {
              "character": " ",
              "start": 38.708,
              "end": 38.778
            },
            {
              "character": "l",
              "start": 38.778,
              "end": 38.836
            },
            {
              "character": "o",
              "start": 38.836,
              "end": 39.01
            },
            {
              "character": "u",
              "start": 39.01,
              "end": 39.091
            },
            {
              "character": "d",
              "start": 39.091,
              "end": 39.242
            },
            {
              "character": "!",
              "start": 39.242,
              "end": 39.323
            },
            {
              "character": "”",
              "start": 39.323,
              "end": 39.381
            },
            {
              "character": ".",
              "start": 39.381,
              "end": 39.532
            },
            {
              "character": " ",
              "start": 39.532,
              "end": 40.345
            },
            {
              "character": "M",
              "start": 40.345,
              "end": 40.426
            },
            {
              "character": "y",
              "start": 40.426,
              "end": 40.473
            },
            {
              "character": " ",
              "start": 40.473,
              "end": 40.519
            },
            {
              "character": "d",
              "start": 40.519,
              "end": 40.565
            },
            {
              "character": "a",
              "start": 40.565,
              "end": 40.612
            },
            {
              "character": "u",
              "start": 40.612,
              "end": 40.647
            },
            {
              "character": "g",
              "start": 40.647,
              "end": 40.67
            },
            {
              "character": "h",
              "start": 40.67,
              "end": 40.705
            },
            {
              "character": "t",
              "start": 40.705,
              "end": 40.74
            },
            {
              "character": "e",
              "start": 40.74,
              "end": 40.774
            },
            {
              "character": "r",
              "start": 40.774,
              "end": 40.798
            },
            {
              "character": " ",
              "start": 40.798,
              "end": 40.867
            },
            {
              "character": "e",
              "start": 40.867,
              "end": 40.914
            },
            {
              "character": "x",
              "start": 40.914,
              "end": 40.983
            },
            {
              "character": "c",
              "start": 40.983,
              "end": 41.076
            },
            {
              "character": "l",
              "start": 41.076,
              "end": 41.134
            },
            {
              "character": "a",
              "start": 41.134,
              "end": 41.181
            },
            {
              "character": "i",
              "start": 41.181,
              "end": 41.239
            },
            {
              "character": "m",
              "start": 41.239,
              "end": 41.285
            },
            {
              "character": "e",
              "start": 41.285,
              "end": 41.355
            },
            {
              "character": "d",
              "start": 41.355,
              "end": 41.413
            },
            {
              "character": ",",
              "start": 41.413,
              "end": 41.529
            },
            {
              "character": " ",
              "start": 41.529,
              "end": 41.703
            },
            {
              "character": "“",
              "start": 41.703,
              "end": 41.819
            },
            {
              "character": "T",
              "start": 41.819,
              "end": 41.866
            },
            {
              "character": "h",
              "start": 41.866,
              "end": 41.935
            },
            {
              "character": "a",
              "start": 41.935,
              "end": 41.97
            },
            {
              "character": "n",
              "start": 41.97,
              "end": 42.028
            },
            {
              "character": "k",
              "start": 42.028,
              "end": 42.063
            },
            {
              "character": " ",
              "start": 42.063,
              "end": 42.11
            },
            {
              "character": "y",
              "start": 42.11,
              "end": 42.133
            },
            {
              "character": "o",
              "start": 42.133,
              "end": 42.156
            },
            {
              "character": "u",
              "start": 42.156,
              "end": 42.191
            },
            {
              "character": " ",
              "start": 42.191,
              "end": 42.272
            },
            {
              "character": "a",
              "start": 42.272,
              "end": 42.307
            },
            {
              "character": "u",
              "start": 42.307,
              "end": 42.365
            },
            {
              "character": "n",
              "start": 42.365,
              "end": 42.423
            },
            {
              "character": "t",
              "start": 42.423,
              "end": 42.504
            },
            {
              "character": "i",
              "start": 42.504,
              "end": 42.574
            },
            {
              "character": "e",
              "start": 42.574,
              "end": 42.748
            },
            {
              "character": "!",
              "start": 42.748,
              "end": 42.795
            },
            {
              "character": "”",
              "start": 42.795,
              "end": 42.911
            },
            {
              "character": ",",
              "start": 42.911,
              "end": 43.294
            },
            {
              "character": " ",
              "start": 43.294,
              "end": 43.538
            },
            {
              "character": "t",
              "start": 43.538,
              "end": 43.572
            },
            {
              "character": "h",
              "start": 43.572,
              "end": 43.607
            },
            {
              "character": "e",
              "start": 43.607,
              "end": 43.689
            },
            {
              "character": "n",
              "start": 43.689,
              "end": 43.747
            },
            {
              "character": " ",
              "start": 43.747,
              "end": 43.828
            },
            {
              "character": "o",
              "start": 43.828,
              "end": 43.944
            },
            {
              "character": "p",
              "start": 43.944,
              "end": 44.014
            },
            {
              "character": "e",
              "start": 44.014,
              "end": 44.06
            },
            {
              "character": "n",
              "start": 44.06,
              "end": 44.095
            },
            {
              "character": "e",
              "start": 44.095,
              "end": 44.153
            },
            {
              "character": "d",
              "start": 44.153,
              "end": 44.176
            },
            {
              "character": " ",
              "start": 44.176,
              "end": 44.211
            },
            {
              "character": "t",
              "start": 44.211,
              "end": 44.234
            },
            {
              "character": "h",
              "start": 44.234,
              "end": 44.257
            },
            {
              "character": "e",
              "start": 44.257,
              "end": 44.28
            },
            {
              "character": " ",
              "start": 44.28,
              "end": 44.327
            },
            {
              "character": "p",
              "start": 44.327,
              "end": 44.373
            },
            {
              "character": "r",
              "start": 44.373,
              "end": 44.431
            },
            {
              "character": "e",
              "start": 44.431,
              "end": 44.489
            },
            {
              "character": "s",
              "start": 44.489,
              "end": 44.547
            },
            {
              "character": "e",
              "start": 44.547,
              "end": 44.629
            },
            {
              "character": "n",
              "start": 44.629,
              "end": 44.663
            },
            {
              "character": "t",
              "start": 44.663,
              "end": 44.779
            },
            {
              "character": ".",
              "start": 44.779,
              "end": 44.954
            },
            {
              "character": " ",
              "start": 44.954,
              "end": 45.557
            },
            {
              "character": "I",
              "start": 45.557,
              "end": 45.627
            },
            {
              "character": "t",
              "start": 45.627,
              "end": 45.685
            },
            {
              "character": " ",
              "start": 45.685,
              "end": 45.72
            },
            {
              "character": "w",
              "start": 45.72,
              "end": 45.755
            },
            {
              "character": "a",
              "start": 45.755,
              "end": 45.79
            },
            {
              "character": "s",
              "start": 45.79,
              "end": 45.824
            },
            {
              "character": " ",
              "start": 45.824,
              "end": 45.882
            },
            {
              "character": "a",
              "start": 45.882,
              "end": 45.906
            },
            {
              "character": " ",
              "start": 45.906,
              "end": 45.964
            },
            {
              "character": "L",
              "start": 45.964,
              "end": 46.022
            },
            {
              "character": "e",
              "start": 46.022,
              "end": 46.115
            },
            {
              "character": "g",
              "start": 46.115,
              "end": 46.196
            },
            {
              "character": "o",
              "start": 46.196,
              "end": 46.277
            },
            {
              "character": " ",
              "start": 46.277,
              "end": 46.37
            },
            {
              "character": "F",
              "start": 46.37,
              "end": 46.416
            },
            {
              "character": "r",
              "start": 46.416,
              "end": 46.486
            },
            {
              "character": "i",
              "start": 46.486,
              "end": 46.533
            },
            {
              "character": "e",
              "start": 46.533,
              "end": 46.579
            },
            {
              "character": "n",
              "start": 46.579,
              "end": 46.637
            },
            {
              "character": "d",
              "start": 46.637,
              "end": 46.707
            },
            {
              "character": "s",
              "start": 46.707,
              "end": 46.742
            },
            {
              "character": " ",
              "start": 46.742,
              "end": 46.776
            },
            {
              "character": "s",
              "start": 46.776,
              "end": 46.846
            },
            {
              "character": "e",
              "start": 46.846,
              "end": 47.02
            },
            {
              "character": "t",
              "start": 47.02,
              "end": 47.148
            },
            {
              "character": ".",
              "start": 47.148,
              "end": 47.322
            },
            {
              "character": " ",
              "start": 47.322,
              "end": 47.926
            },
            {
              "character": "N",
              "start": 47.926,
              "end": 48.007
            },
            {
              "character": "e",
              "start": 48.007,
              "end": 48.077
            },
            {
              "character": "e",
              "start": 48.077,
              "end": 48.123
            },
            {
              "character": "d",
              "start": 48.123,
              "end": 48.181
            },
            {
              "character": "l",
              "start": 48.181,
              "end": 48.239
            },
            {
              "character": "e",
              "start": 48.239,
              "end": 48.286
            },
            {
              "character": "s",
              "start": 48.286,
              "end": 48.332
            },
            {
              "character": "s",
              "start": 48.332,
              "end": 48.379
            },
            {
              "character": " ",
              "start": 48.379,
              "end": 48.413
            },
            {
              "character": "t",
              "start": 48.413,
              "end": 48.437
            },
            {
              "character": "o",
              "start": 48.437,
              "end": 48.471
            },
            {
              "character": " ",
              "start": 48.471,
              "end": 48.553
            },
            {
              "character": "s",
              "start": 48.553,
              "end": 48.611
            },
            {
              "character": "a",
              "start": 48.611,
              "end": 48.762
            },
            {
              "character": "y",
              "start": 48.762,
              "end": 48.843
            },
            {
              "character": ",",
              "start": 48.843,
              "end": 48.878
            },
            {
              "character": " ",
              "start": 48.878,
              "end": 48.924
            },
            {
              "character": "m",
              "start": 48.924,
              "end": 48.982
            },
            {
              "character": "y",
              "start": 48.982,
              "end": 49.04
            },
            {
              "character": " ",
              "start": 49.04,
              "end": 49.098
            },
            {
              "character": "d",
              "start": 49.098,
              "end": 49.145
            },
            {
              "character": "a",
              "start": 49.145,
              "end": 49.203
            },
            {
              "character": "u",
              "start": 49.203,
              "end": 49.238
            },
            {
              "character": "g",
              "start": 49.238,
              "end": 49.273
            },
            {
              "character": "h",
              "start": 49.273,
              "end": 49.307
            },
            {
              "character": "t",
              "start": 49.307,
              "end": 49.331
            },
            {
              "character": "e",
              "start": 49.331,
              "end": 49.365
            },
            {
              "character": "r",
              "start": 49.365,
              "end": 49.389
            },
            {
              "character": " ",
              "start": 49.389,
              "end": 49.447
            },
            {
              "character": "w",
              "start": 49.447,
              "end": 49.481
            },
            {
              "character": "a",
              "start": 49.481,
              "end": 49.528
            },
            {
              "character": "s",
              "start": 49.528,
              "end": 49.563
            },
            {
              "character": " ",
              "start": 49.563,
              "end": 49.609
            },
            {
              "character": "s",
              "start": 49.609,
              "end": 49.656
            },
            {
              "character": "o",
              "start": 49.656,
              "end": 49.772
            },
            {
              "character": " ",
              "start": 49.772,
              "end": 49.853
            },
            {
              "character": "h",
              "start": 49.853,
              "end": 49.899
            },
            {
              "character": "a",
              "start": 49.899,
              "end": 49.981
            },
            {
              "character": "p",
              "start": 49.981,
              "end": 50.05
            },
            {
              "character": "p",
              "start": 50.05,
              "end": 50.132
            },
            {
              "character": "y",
              "start": 50.132,
              "end": 50.283
            },
            {
              "character": ",",
              "start": 50.283,
              "end": 50.434
            },
            {
              "character": " ",
              "start": 50.434,
              "end": 50.642
            },
            {
              "character": "a",
              "start": 50.642,
              "end": 50.712
            },
            {
              "character": "n",
              "start": 50.712,
              "end": 50.759
            },
            {
              "character": "d",
              "start": 50.759,
              "end": 50.805
            },
            {
              "character": " ",
              "start": 50.805,
              "end": 50.875
            },
            {
              "character": "j",
              "start": 50.875,
              "end": 50.933
            },
            {
              "character": "u",
              "start": 50.933,
              "end": 50.979
            },
            {
              "character": "m",
              "start": 50.979,
              "end": 51.037
            },
            {
              "character": "p",
              "start": 51.037,
              "end": 51.084
            },
            {
              "character": "e",
              "start": 51.084,
              "end": 51.13
            },
            {
              "character": "d",
              "start": 51.13,
              "end": 51.153
            },
            {
              "character": " ",
              "start": 51.153,
              "end": 51.2
            },
            {
              "character": "u",
              "start": 51.2,
              "end": 51.235
            },
            {
              "character": "p",
              "start": 51.235,
              "end": 51.281
            },
            {
              "character": " ",
              "start": 51.281,
              "end": 51.327
            },
            {
              "character": "a",
              "start": 51.327,
              "end": 51.351
            },
            {
              "character": "n",
              "start": 51.351,
              "end": 51.374
            },
            {
              "character": "d",
              "start": 51.374,
              "end": 51.409
            },
            {
              "character": " ",
              "start": 51.409,
              "end": 51.467
            },
            {
              "character": "d",
              "start": 51.467,
              "end": 51.513
            },
            {
              "character": "o",
              "start": 51.513,
              "end": 51.629
            },
            {
              "character": "w",
              "start": 51.629,
              "end": 51.676
            },
            {
              "character": "n",
              "start": 51.676,
              "end": 51.734
            },
            {
              "character": " ",
              "start": 51.734,
              "end": 51.792
            },
            {
              "character": "w",
              "start": 51.792,
              "end": 51.827
            },
            {
              "character": "i",
              "start": 51.827,
              "end": 51.862
            },
            {
              "character": "t",
              "start": 51.862,
              "end": 51.896
            },
            {
              "character": "h",
              "start": 51.896,
              "end": 51.931
            },
            {
              "character": " ",
              "start": 51.931,
              "end": 51.966
            },
            {
              "character": "t",
              "start": 51.966,
              "end": 51.989
            },
            {
              "character": "h",
              "start": 51.989,
              "end": 52.012
            },
            {
              "character": "e",
              "start": 52.012,
              "end": 52.036
            },
            {
              "character": " ",
              "start": 52.036,
              "end": 52.094
            },
            {
              "character": "L",
              "start": 52.094,
              "end": 52.14
            },
            {
              "character": "e",
              "start": 52.14,
              "end": 52.221
            },
            {
              "character": "g",
              "start": 52.221,
              "end": 52.303
            },
            {
              "character": "o",
              "start": 52.303,
              "end": 52.384
            },
            {
              "character": " ",
              "start": 52.384,
              "end": 52.465
            },
            {
              "character": "s",
              "start": 52.465,
              "end": 52.523
            },
            {
              "character": "e",
              "start": 52.523,
              "end": 52.697
            },
            {
              "character": "t",
              "start": 52.697,
              "end": 52.848
            },
            {
              "character": ".",
              "start": 52.848,
              "end": 52.999
            },
            {
              "character": " ",
              "start": 52.999,
              "end": 53.603
            },
            {
              "character": "T",
              "start": 53.603,
              "end": 53.649
            },
            {
              "character": "h",
              "start": 53.649,
              "end": 53.708
            },
            {
              "character": "e",
              "start": 53.708,
              "end": 53.766
            },
            {
              "character": "n",
              "start": 53.766,
              "end": 53.812
            },
            {
              "character": " ",
              "start": 53.812,
              "end": 53.893
            },
            {
              "character": "s",
              "start": 53.893,
              "end": 53.951
            },
            {
              "character": "u",
              "start": 53.951,
              "end": 54.033
            },
            {
              "character": "d",
              "start": 54.033,
              "end": 54.102
            },
            {
              "character": "d",
              "start": 54.102,
              "end": 54.149
            },
            {
              "character": "e",
              "start": 54.149,
              "end": 54.195
            },
            {
              "character": "n",
              "start": 54.195,
              "end": 54.253
            },
            {
              "character": "l",
              "start": 54.253,
              "end": 54.323
            },
            {
              "character": "y",
              "start": 54.323,
              "end": 54.439
            },
            {
              "character": ",",
              "start": 54.439,
              "end": 54.648
            },
            {
              "character": " ",
              "start": 54.648,
              "end": 54.857
            },
            {
              "character": "t",
              "start": 54.857,
              "end": 54.892
            },
            {
              "character": "h",
              "start": 54.892,
              "end": 54.938
            },
            {
              "character": "e",
              "start": 54.938,
              "end": 54.973
            },
            {
              "character": " ",
              "start": 54.973,
              "end": 55.043
            },
            {
              "character": "a",
              "start": 55.043,
              "end": 55.077
            },
            {
              "character": "u",
              "start": 55.077,
              "end": 55.124
            },
            {
              "character": "n",
              "start": 55.124,
              "end": 55.17
            },
            {
              "character": "t",
              "start": 55.17,
              "end": 55.228
            },
            {
              "character": "i",
              "start": 55.228,
              "end": 55.286
            },
            {
              "character": "e",
              "start": 55.286,
              "end": 55.333
            },
            {
              "character": " ",
              "start": 55.333,
              "end": 55.368
            },
            {
              "character": "s",
              "start": 55.368,
              "end": 55.449
            },
            {
              "character": "n",
              "start": 55.449,
              "end": 55.519
            },
            {
              "character": "a",
              "start": 55.519,
              "end": 55.577
            },
            {
              "character": "t",
              "start": 55.577,
              "end": 55.623
            },
            {
              "character": "c",
              "start": 55.623,
              "end": 55.67
            },
            {
              "character": "h",
              "start": 55.67,
              "end": 55.704
            },
            {
              "character": "e",
              "start": 55.704,
              "end": 55.739
            },
            {
              "character": "d",
              "start": 55.739,
              "end": 55.762
            },
            {
              "character": " ",
              "start": 55.762,
              "end": 55.797
            },
            {
              "character": "t",
              "start": 55.797,
              "end": 55.821
            },
            {
              "character": "h",
              "start": 55.821,
              "end": 55.844
            },
            {
              "character": "e",
              "start": 55.844,
              "end": 55.867
            },
            {
              "character": " ",
              "start": 55.867,
              "end": 55.925
            },
            {
              "character": "L",
              "start": 55.925,
              "end": 55.971
            },
            {
              "character": "e",
              "start": 55.971,
              "end": 56.053
            },
            {
              "character": "g",
              "start": 56.053,
              "end": 56.134
            },
            {
              "character": "o",
              "start": 56.134,
              "end": 56.227
            },
            {
              "character": " ",
              "start": 56.227,
              "end": 56.297
            },
            {
              "character": "s",
              "start": 56.297,
              "end": 56.343
            },
            {
              "character": "e",
              "start": 56.343,
              "end": 56.494
            },
            {
              "character": "t",
              "start": 56.494,
              "end": 56.54
            },
            {
              "character": " ",
              "start": 56.54,
              "end": 56.598
            },
            {
              "character": "f",
              "start": 56.598,
              "end": 56.633
            },
            {
              "character": "r",
              "start": 56.633,
              "end": 56.68
            },
            {
              "character": "o",
              "start": 56.68,
              "end": 56.726
            },
            {
              "character": "m",
              "start": 56.726,
              "end": 56.761
            },
            {
              "character": " ",
              "start": 56.761,
              "end": 56.831
            },
            {
              "character": "m",
              "start": 56.831,
              "end": 56.877
            },
            {
              "character": "y",
              "start": 56.877,
              "end": 56.923
            },
            {
              "character": " ",
              "start": 56.923,
              "end": 56.982
            },
            {
              "character": "d",
              "start": 56.982,
              "end": 57.028
            },
            {
              "character": "a",
              "start": 57.028,
              "end": 57.074
            },
            {
              "character": "u",
              "start": 57.074,
              "end": 57.109
            },
            {
              "character": "g",
              "start": 57.109,
              "end": 57.144
            },
            {
              "character": "h",
              "start": 57.144,
              "end": 57.179
            },
            {
              "character": "t",
              "start": 57.179,
              "end": 57.202
            },
            {
              "character": "e",
              "start": 57.202,
              "end": 57.237
            },
            {
              "character": "r",
              "start": 57.237,
              "end": 57.272
            },
            {
              "character": "’",
              "start": 57.272,
              "end": 57.318
            },
            {
              "character": "s",
              "start": 57.318,
              "end": 57.341
            },
            {
              "character": " ",
              "start": 57.341,
              "end": 57.388
            },
            {
              "character": "h",
              "start": 57.388,
              "end": 57.434
            },
            {
              "character": "a",
              "start": 57.434,
              "end": 57.55
            },
            {
              "character": "n",
              "start": 57.55,
              "end": 57.585
            },
            {
              "character": "d",
              "start": 57.585,
              "end": 57.643
            },
            {
              "character": "s",
              "start": 57.643,
              "end": 57.69
            },
            {
              "character": " ",
              "start": 57.69,
              "end": 57.736
            },
            {
              "character": "a",
              "start": 57.736,
              "end": 57.794
            },
            {
              "character": "g",
              "start": 57.794,
              "end": 57.864
            },
            {
              "character": "a",
              "start": 57.864,
              "end": 57.945
            },
            {
              "character": "i",
              "start": 57.945,
              "end": 58.003
            },
            {
              "character": "n",
              "start": 58.003,
              "end": 58.119
            },
            {
              "character": ",",
              "start": 58.119,
              "end": 58.293
            },
            {
              "character": " ",
              "start": 58.293,
              "end": 58.468
            },
            {
              "character": "h",
              "start": 58.468,
              "end": 58.514
            },
            {
              "character": "e",
              "start": 58.514,
              "end": 58.572
            },
            {
              "character": "l",
              "start": 58.572,
              "end": 58.642
            },
            {
              "character": "d",
              "start": 58.642,
              "end": 58.688
            },
            {
              "character": " ",
              "start": 58.688,
              "end": 58.735
            },
            {
              "character": "i",
              "start": 58.735,
              "end": 58.769
            },
            {
              "character": "t",
              "start": 58.769,
              "end": 58.804
            },
            {
              "character": " ",
              "start": 58.804,
              "end": 58.851
            },
            {
              "character": "u",
              "start": 58.851,
              "end": 58.897
            },
            {
              "character": "p",
              "start": 58.897,
              "end": 58.944
            },
            {
              "character": " ",
              "start": 58.944,
              "end": 59.002
            },
            {
              "character": "a",
              "start": 59.002,
              "end": 59.048
            },
            {
              "character": "b",
              "start": 59.048,
              "end": 59.106
            },
            {
              "character": "o",
              "start": 59.106,
              "end": 59.164
            },
            {
              "character": "v",
              "start": 59.164,
              "end": 59.211
            },
            {
              "character": "e",
              "start": 59.211,
              "end": 59.234
            },
            {
              "character": " ",
              "start": 59.234,
              "end": 59.269
            },
            {
              "character": "h",
              "start": 59.269,
              "end": 59.304
            },
            {
              "character": "e",
              "start": 59.304,
              "end": 59.327
            },
            {
              "character": "r",
              "start": 59.327,
              "end": 59.362
            },
            {
              "character": " ",
              "start": 59.362,
              "end": 59.42
            },
            {
              "character": "h",
              "start": 59.42,
              "end": 59.454
            },
            {
              "character": "e",
              "start": 59.454,
              "end": 59.547
            },
            {
              "character": "a",
              "start": 59.547,
              "end": 59.605
            },
            {
              "character": "d",
              "start": 59.605,
              "end": 59.756
            },
            {
              "character": ",",
              "start": 59.756,
              "end": 59.872
            },
            {
              "character": " ",
              "start": 59.872,
              "end": 59.965
            },
            {
              "character": "a",
              "start": 59.965,
              "end": 60.058
            },
            {
              "character": "n",
              "start": 60.058,
              "end": 60.116
            },
            {
              "character": "d",
              "start": 60.116,
              "end": 60.151
            },
            {
              "character": " ",
              "start": 60.151,
              "end": 60.209
            },
            {
              "character": "d",
              "start": 60.209,
              "end": 60.244
            },
            {
              "character": "e",
              "start": 60.244,
              "end": 60.302
            },
            {
              "character": "m",
              "start": 60.302,
              "end": 60.371
            },
            {
              "character": "a",
              "start": 60.371,
              "end": 60.441
            },
            {
              "character": "n",
              "start": 60.441,
              "end": 60.476
            },
            {
              "character": "d",
              "start": 60.476,
              "end": 60.534
            },
            {
              "character": "e",
              "start": 60.534,
              "end": 60.604
            },
            {
              "character": "d",
              "start": 60.604,
              "end": 60.627
            },
            {
              "character": " ",
              "start": 60.627,
              "end": 60.685
            },
            {
              "character": "m",
              "start": 60.685,
              "end": 60.743
            },
            {
              "character": "y",
              "start": 60.743,
              "end": 60.801
            },
            {
              "character": " ",
              "start": 60.801,
              "end": 60.871
            },
            {
              "character": "d",
              "start": 60.871,
              "end": 60.917
            },
            {
              "character": "a",
              "start": 60.917,
              "end": 60.987
            },
            {
              "character": "u",
              "start": 60.987,
              "end": 61.021
            },
            {
              "character": "g",
              "start": 61.021,
              "end": 61.056
            },
            {
              "character": "h",
              "start": 61.056,
              "end": 61.091
            },
            {
              "character": "t",
              "start": 61.091,
              "end": 61.138
            },
            {
              "character": "e",
              "start": 61.138,
              "end": 61.172
            },
            {
              "character": "r",
              "start": 61.172,
              "end": 61.254
            },
            {
              "character": ",",
              "start": 61.254,
              "end": 61.428
            },
            {
              "character": " ",
              "start": 61.428,
              "end": 61.753
            },
            {
              "character": "“",
              "start": 61.753,
              "end": 61.927
            },
            {
              "character": "S",
              "start": 61.927,
              "end": 62.043
            },
            {
              "character": "a",
              "start": 62.043,
              "end": 62.217
            },
            {
              "character": "y",
              "start": 62.217,
              "end": 62.275
            },
            {
              "character": " ",
              "start": 62.275,
              "end": 62.299
            },
            {
              "character": "‘",
              "start": 62.299,
              "end": 62.415
            },
            {
              "character": "p",
              "start": 62.415,
              "end": 62.531
            },
            {
              "character": "l",
              "start": 62.531,
              "end": 62.658
            },
            {
              "character": "e",
              "start": 62.658,
              "end": 62.809
            },
            {
              "character": "a",
              "start": 62.809,
              "end": 62.937
            },
            {
              "character": "s",
              "start": 62.937,
              "end": 63.053
            },
            {
              "character": "e",
              "start": 63.053,
              "end": 63.123
            },
            {
              "character": "’",
              "start": 63.123,
              "end": 63.181
            },
            {
              "character": " ",
              "start": 63.181,
              "end": 63.216
            },
            {
              "character": "a",
              "start": 63.216,
              "end": 63.309
            },
            {
              "character": "n",
              "start": 63.309,
              "end": 63.367
            },
            {
              "character": "d",
              "start": 63.367,
              "end": 63.413
            },
            {
              "character": " ",
              "start": 63.413,
              "end": 63.529
            },
            {
              "character": "b",
              "start": 63.529,
              "end": 63.611
            },
            {
              "character": "o",
              "start": 63.611,
              "end": 63.854
            },
            {
              "character": "w",
              "start": 63.854,
              "end": 63.97
            },
            {
              "character": ",",
              "start": 63.97,
              "end": 64.017
            },
            {
              "character": " ",
              "start": 64.017,
              "end": 64.052
            },
            {
              "character": "o",
              "start": 64.052,
              "end": 64.145
            },
            {
              "character": "r",
              "start": 64.145,
              "end": 64.191
            },
            {
              "character": " ",
              "start": 64.191,
              "end": 64.272
            },
            {
              "character": "a",
              "start": 64.272,
              "end": 64.319
            },
            {
              "character": "u",
              "start": 64.319,
              "end": 64.365
            },
            {
              "character": "n",
              "start": 64.365,
              "end": 64.412
            },
            {
              "character": "t",
              "start": 64.412,
              "end": 64.47
            },
            {
              "character": "i",
              "start": 64.47,
              "end": 64.516
            },
            {
              "character": "e",
              "start": 64.516,
              "end": 64.539
            },
            {
              "character": "’",
              "start": 64.539,
              "end": 64.574
            },
            {
              "character": "s",
              "start": 64.574,
              "end": 64.597
            },
            {
              "character": " ",
              "start": 64.597,
              "end": 64.632
            },
            {
              "character": "g",
              "start": 64.632,
              "end": 64.667
            },
            {
              "character": "o",
              "start": 64.667,
              "end": 64.725
            },
            {
              "character": "n",
              "start": 64.725,
              "end": 64.76
            },
            {
              "character": "n",
              "start": 64.76,
              "end": 64.795
            },
            {
              "character": "a",
              "start": 64.795,
              "end": 64.853
            },
            {
              "character": " ",
              "start": 64.853,
              "end": 64.899
            },
            {
              "character": "t",
              "start": 64.899,
              "end": 64.957
            },
            {
              "character": "a",
              "start": 64.957,
              "end": 65.015
            },
            {
              "character": "k",
              "start": 65.015,
              "end": 65.073
            },
            {
              "character": "e",
              "start": 65.073,
              "end": 65.108
            },
            {
              "character": " ",
              "start": 65.108,
              "end": 65.155
            },
            {
              "character": "i",
              "start": 65.155,
              "end": 65.189
            },
            {
              "character": "t",
              "start": 65.189,
              "end": 65.224
            },
            {
              "character": " ",
              "start": 65.224,
              "end": 65.282
            },
            {
              "character": "b",
              "start": 65.282,
              "end": 65.34
            },
            {
              "character": "a",
              "start": 65.34,
              "end": 65.468
            },
            {
              "character": "c",
              "start": 65.468,
              "end": 65.526
            },
            {
              "character": "k",
              "start": 65.526,
              "end": 65.642
            },
            {
              "character": "!",
              "start": 65.642,
              "end": 65.816
            },
            {
              "character": "”",
              "start": 65.816,
              "end": 65.851
            },
            {
              "character": ".",
              "start": 65.851,
              "end": 65.886
            },
            {
              "character": " ",
              "start": 65.886,
              "end": 66.699
            },
            {
              "character": "T",
              "start": 66.699,
              "end": 66.757
            },
            {
              "character": "h",
              "start": 66.757,
              "end": 66.826
            },
            {
              "character": "i",
              "start": 66.826,
              "end": 66.873
            },
            {
              "character": "s",
              "start": 66.873,
              "end": 66.908
            },
            {
              "character": " ",
              "start": 66.908,
              "end": 66.966
            },
            {
              "character": "t",
              "start": 66.966,
              "end": 67.024
            },
            {
              "character": "i",
              "start": 67.024,
              "end": 67.175
            },
            {
              "character": "m",
              "start": 67.175,
              "end": 67.233
            },
            {
              "character": "e",
              "start": 67.233,
              "end": 67.291
            },
            {
              "character": ",",
              "start": 67.291,
              "end": 67.314
            },
            {
              "character": " ",
              "start": 67.314,
              "end": 67.349
            },
            {
              "character": "I",
              "start": 67.349,
              "end": 67.384
            },
            {
              "character": " ",
              "start": 67.384,
              "end": 67.5
            },
            {
              "character": "k",
              "start": 67.5,
              "end": 67.535
            },
            {
              "character": "n",
              "start": 67.535,
              "end": 67.581
            },
            {
              "character": "e",
              "start": 67.581,
              "end": 67.628
            },
            {
              "character": "w",
              "start": 67.628,
              "end": 67.662
            },
            {
              "character": " ",
              "start": 67.662,
              "end": 67.72
            },
            {
              "character": "s",
              "start": 67.72,
              "end": 67.755
            },
            {
              "character": "h",
              "start": 67.755,
              "end": 67.802
            },
            {
              "character": "e",
              "start": 67.802,
              "end": 67.825
            },
            {
              "character": " ",
              "start": 67.825,
              "end": 67.883
            },
            {
              "character": "w",
              "start": 67.883,
              "end": 67.929
            },
            {
              "character": "a",
              "start": 67.929,
              "end": 67.976
            },
            {
              "character": "s",
              "start": 67.976,
              "end": 68.046
            },
            {
              "character": "n",
              "start": 68.046,
              "end": 68.092
            },
            {
              "character": "’",
              "start": 68.092,
              "end": 68.127
            },
            {
              "character": "t",
              "start": 68.127,
              "end": 68.15
            },
            {
              "character": " ",
              "start": 68.15,
              "end": 68.196
            },
            {
              "character": "j",
              "start": 68.196,
              "end": 68.243
            },
            {
              "character": "o",
              "start": 68.243,
              "end": 68.359
            },
            {
              "character": "k",
              "start": 68.359,
              "end": 68.44
            },
            {
              "character": "i",
              "start": 68.44,
              "end": 68.498
            },
            {
              "character": "n",
              "start": 68.498,
              "end": 68.522
            },
            {
              "character": "g",
              "start": 68.522,
              "end": 68.591
            },
            {
              "character": ".",
              "start": 68.591,
              "end": 68.8
            },
            {
              "character": " ",
              "start": 68.8,
              "end": 69.079
            },
            {
              "character": " ",
              "start": 69.079,
              "end": 69.079
            },
            {
              "character": "I",
              "start": 69.079,
              "end": 69.125
            },
            {
              "character": " ",
              "start": 69.125,
              "end": 69.207
            },
            {
              "character": "g",
              "start": 69.207,
              "end": 69.241
            },
            {
              "character": "o",
              "start": 69.241,
              "end": 69.311
            },
            {
              "character": "t",
              "start": 69.311,
              "end": 69.357
            },
            {
              "character": " ",
              "start": 69.357,
              "end": 69.415
            },
            {
              "character": "a",
              "start": 69.415,
              "end": 69.45
            },
            {
              "character": "n",
              "start": 69.45,
              "end": 69.543
            },
            {
              "character": "g",
              "start": 69.543,
              "end": 69.601
            },
            {
              "character": "r",
              "start": 69.601,
              "end": 69.683
            },
            {
              "character": "y",
              "start": 69.683,
              "end": 69.799
            },
            {
              "character": " ",
              "start": 69.799,
              "end": 70.008
            },
            {
              "character": "b",
              "start": 70.008,
              "end": 70.089
            },
            {
              "character": "u",
              "start": 70.089,
              "end": 70.147
            },
            {
              "character": "t",
              "start": 70.147,
              "end": 70.182
            },
            {
              "character": " ",
              "start": 70.182,
              "end": 70.217
            },
            {
              "character": "t",
              "start": 70.217,
              "end": 70.275
            },
            {
              "character": "r",
              "start": 70.275,
              "end": 70.344
            },
            {
              "character": "i",
              "start": 70.344,
              "end": 70.46
            },
            {
              "character": "e",
              "start": 70.46,
              "end": 70.53
            },
            {
              "character": "d",
              "start": 70.53,
              "end": 70.553
            },
            {
              "character": " ",
              "start": 70.553,
              "end": 70.623
            },
            {
              "character": "v",
              "start": 70.623,
              "end": 70.693
            },
            {
              "character": "e",
              "start": 70.693,
              "end": 70.774
            },
            {
              "character": "r",
              "start": 70.774,
              "end": 70.844
            },
            {
              "character": "y",
              "start": 70.844,
              "end": 70.902
            },
            {
              "character": " ",
              "start": 70.902,
              "end": 70.971
            },
            {
              "character": "h",
              "start": 70.971,
              "end": 71.018
            },
            {
              "character": "a",
              "start": 71.018,
              "end": 71.134
            },
            {
              "character": "r",
              "start": 71.134,
              "end": 71.192
            },
            {
              "character": "d",
              "start": 71.192,
              "end": 71.25
            },
            {
              "character": " ",
              "start": 71.25,
              "end": 71.285
            },
            {
              "character": "t",
              "start": 71.285,
              "end": 71.308
            },
            {
              "character": "o",
              "start": 71.308,
              "end": 71.331
            },
            {
              "character": " ",
              "start": 71.331,
              "end": 71.378
            },
            {
              "character": "k",
              "start": 71.378,
              "end": 71.412
            },
            {
              "character": "e",
              "start": 71.412,
              "end": 71.459
            },
            {
              "character": "e",
              "start": 71.459,
              "end": 71.505
            },
            {
              "character": "p",
              "start": 71.505,
              "end": 71.54
            },
            {
              "character": " ",
              "start": 71.54,
              "end": 71.598
            },
            {
              "character": "m",
              "start": 71.598,
              "end": 71.645
            },
            {
              "character": "y",
              "start": 71.645,
              "end": 71.691
            },
            {
              "character": " ",
              "start": 71.691,
              "end": 71.761
            },
            {
              "character": "v",
              "start": 71.761,
              "end": 71.807
            },
            {
              "character": "o",
              "start": 71.807,
              "end": 71.865
            },
            {
              "character": "i",
              "start": 71.865,
              "end": 71.923
            },
            {
              "character": "c",
              "start": 71.923,
              "end": 71.97
            },
            {
              "character": "e",
              "start": 71.97,
              "end": 72.005
            },
            {
              "character": " ",
              "start": 72.005,
              "end": 72.039
            },
            {
              "character": "c",
              "start": 72.039,
              "end": 72.086
            },
            {
              "character": "a",
              "start": 72.086,
              "end": 72.237
            },
            {
              "character": "l",
              "start": 72.237,
              "end": 72.306
            },
            {
              "character": "m",
              "start": 72.306,
              "end": 72.422
            },
            {
              "character": ",",
              "start": 72.422,
              "end": 72.573
            },
            {
              "character": " ",
              "start": 72.573,
              "end": 72.724
            },
            {
              "character": "“",
              "start": 72.724,
              "end": 72.84
            },
            {
              "character": "N",
              "start": 72.84,
              "end": 72.922
            },
            {
              "character": "o",
              "start": 72.922,
              "end": 72.991
            },
            {
              "character": " ",
              "start": 72.991,
              "end": 73.061
            },
            {
              "character": "o",
              "start": 73.061,
              "end": 73.096
            },
            {
              "character": "n",
              "start": 73.096,
              "end": 73.154
            },
            {
              "character": "e",
              "start": 73.154,
              "end": 73.189
            },
            {
              "character": " ",
              "start": 73.189,
              "end": 73.224
            },
            {
              "character": "d",
              "start": 73.224,
              "end": 73.258
            },
            {
              "character": "e",
              "start": 73.258,
              "end": 73.328
            },
            {
              "character": "m",
              "start": 73.328,
              "end": 73.398
            },
            {
              "character": "a",
              "start": 73.398,
              "end": 73.514
            },
            {
              "character": "n",
              "start": 73.514,
              "end": 73.549
            },
            {
              "character": "d",
              "start": 73.549,
              "end": 73.595
            },
            {
              "character": "s",
              "start": 73.595,
              "end": 73.642
            },
            {
              "character": " ",
              "start": 73.642,
              "end": 73.711
            },
            {
              "character": "m",
              "start": 73.711,
              "end": 73.758
            },
            {
              "character": "y",
              "start": 73.758,
              "end": 73.804
            },
            {
              "character": " ",
              "start": 73.804,
              "end": 73.874
            },
            {
              "character": "d",
              "start": 73.874,
              "end": 73.92
            },
            {
              "character": "a",
              "start": 73.92,
              "end": 73.978
            },
            {
              "character": "u",
              "start": 73.978,
              "end": 74.001
            },
            {
              "character": "g",
              "start": 74.001,
              "end": 74.036
            },
            {
              "character": "h",
              "start": 74.036,
              "end": 74.059
            },
            {
              "character": "t",
              "start": 74.059,
              "end": 74.094
            },
            {
              "character": "e",
              "start": 74.094,
              "end": 74.129
            },
            {
              "character": "r",
              "start": 74.129,
              "end": 74.152
            },
            {
              "character": " ",
              "start": 74.152,
              "end": 74.199
            },
            {
              "character": "t",
              "start": 74.199,
              "end": 74.222
            },
            {
              "character": "o",
              "start": 74.222,
              "end": 74.257
            },
            {
              "character": " ",
              "start": 74.257,
              "end": 74.327
            },
            {
              "character": "b",
              "start": 74.327,
              "end": 74.373
            },
            {
              "character": "e",
              "start": 74.373,
              "end": 74.547
            },
            {
              "character": "g",
              "start": 74.547,
              "end": 74.698
            },
            {
              "character": ".",
              "start": 74.698,
              "end": 74.814
            },
            {
              "character": " ",
              "start": 74.814,
              "end": 74.988
            },
            {
              "character": "W",
              "start": 74.988,
              "end": 75.046
            },
            {
              "character": "e",
              "start": 75.046,
              "end": 75.104
            },
            {
              "character": "’",
              "start": 75.104,
              "end": 75.151
            },
            {
              "character": "r",
              "start": 75.151,
              "end": 75.186
            },
            {
              "character": "e",
              "start": 75.186,
              "end": 75.209
            },
            {
              "character": " ",
              "start": 75.209,
              "end": 75.244
            },
            {
              "character": "p",
              "start": 75.244,
              "end": 75.29
            },
            {
              "character": "o",
              "start": 75.29,
              "end": 75.441
            },
            {
              "character": "o",
              "start": 75.441,
              "end": 75.557
            },
            {
              "character": "r",
              "start": 75.557,
              "end": 75.673
            },
            {
              "character": " ",
              "start": 75.673,
              "end": 75.998
            },
            {
              "character": "b",
              "start": 75.998,
              "end": 76.08
            },
            {
              "character": "u",
              "start": 76.08,
              "end": 76.138
            },
            {
              "character": "t",
              "start": 76.138,
              "end": 76.172
            },
            {
              "character": " ",
              "start": 76.172,
              "end": 76.231
            },
            {
              "character": "w",
              "start": 76.231,
              "end": 76.265
            },
            {
              "character": "e",
              "start": 76.265,
              "end": 76.335
            },
            {
              "character": " ",
              "start": 76.335,
              "end": 76.393
            },
            {
              "character": "a",
              "start": 76.393,
              "end": 76.428
            },
            {
              "character": "r",
              "start": 76.428,
              "end": 76.474
            },
            {
              "character": "e",
              "start": 76.474,
              "end": 76.509
            },
            {
              "character": " ",
              "start": 76.509,
              "end": 76.555
            },
            {
              "character": "n",
              "start": 76.555,
              "end": 76.59
            },
            {
              "character": "o",
              "start": 76.59,
              "end": 76.648
            },
            {
              "character": "t",
              "start": 76.648,
              "end": 76.706
            },
            {
              "character": " ",
              "start": 76.706,
              "end": 76.764
            },
            {
              "character": "c",
              "start": 76.764,
              "end": 76.822
            },
            {
              "character": "h",
              "start": 76.822,
              "end": 76.88
            },
            {
              "character": "e",
              "start": 76.88,
              "end": 76.938
            },
            {
              "character": "a",
              "start": 76.938,
              "end": 76.996
            },
            {
              "character": "p",
              "start": 76.996,
              "end": 77.113
            },
            {
              "character": "”",
              "start": 77.113,
              "end": 77.287
            },
            {
              "character": ".",
              "start": 77.287,
              "end": 77.368
            },
            {
              "character": " ",
              "start": 77.368,
              "end": 78.32
            },
            {
              "character": "“",
              "start": 78.32,
              "end": 78.494
            },
            {
              "character": "I",
              "start": 78.494,
              "end": 78.564
            },
            {
              "character": " ",
              "start": 78.564,
              "end": 78.68
            },
            {
              "character": "w",
              "start": 78.68,
              "end": 78.715
            },
            {
              "character": "a",
              "start": 78.715,
              "end": 78.773
            },
            {
              "character": "s",
              "start": 78.773,
              "end": 78.808
            },
            {
              "character": " ",
              "start": 78.808,
              "end": 78.889
            },
            {
              "character": "j",
              "start": 78.889,
              "end": 78.935
            },
            {
              "character": "u",
              "start": 78.935,
              "end": 79.005
            },
            {
              "character": "s",
              "start": 79.005,
              "end": 79.051
            },
            {
              "character": "t",
              "start": 79.051,
              "end": 79.086
            },
            {
              "character": " ",
              "start": 79.086,
              "end": 79.156
            },
            {
              "character": "j",
              "start": 79.156,
              "end": 79.226
            },
            {
              "character": "o",
              "start": 79.226,
              "end": 79.376
            },
            {
              "character": "k",
              "start": 79.376,
              "end": 79.469
            },
            {
              "character": "i",
              "start": 79.469,
              "end": 79.562
            },
            {
              "character": "n",
              "start": 79.562,
              "end": 79.597
            },
            {
              "character": "g",
              "start": 79.597,
              "end": 79.678
            },
            {
              "character": "!",
              "start": 79.678,
              "end": 79.794
            },
            {
              "character": "”",
              "start": 79.794,
              "end": 79.852
            },
            {
              "character": ",",
              "start": 79.852,
              "end": 79.969
            },
            {
              "character": " ",
              "start": 79.969,
              "end": 80.178
            },
            {
              "character": "s",
              "start": 80.178,
              "end": 80.236
            },
            {
              "character": "h",
              "start": 80.236,
              "end": 80.294
            },
            {
              "character": "e",
              "start": 80.294,
              "end": 80.317
            },
            {
              "character": " ",
              "start": 80.317,
              "end": 80.387
            },
            {
              "character": "s",
              "start": 80.387,
              "end": 80.456
            },
            {
              "character": "a",
              "start": 80.456,
              "end": 80.549
            },
            {
              "character": "i",
              "start": 80.549,
              "end": 80.607
            },
            {
              "character": "d",
              "start": 80.607,
              "end": 80.758
            },
            {
              "character": ".",
              "start": 80.758,
              "end": 80.932
            },
            {
              "character": " ",
              "start": 80.932,
              "end": 81.629
            },
            {
              "character": "“",
              "start": 81.629,
              "end": 81.78
            },
            {
              "character": "N",
              "start": 81.78,
              "end": 81.849
            },
            {
              "character": "o",
              "start": 81.849,
              "end": 81.931
            },
            {
              "character": ",",
              "start": 81.931,
              "end": 81.965
            },
            {
              "character": " ",
              "start": 81.965,
              "end": 82
            },
            {
              "character": "y",
              "start": 82,
              "end": 82.024
            },
            {
              "character": "o",
              "start": 82.024,
              "end": 82.047
            },
            {
              "character": "u",
              "start": 82.047,
              "end": 82.082
            },
            {
              "character": " ",
              "start": 82.082,
              "end": 82.128
            },
            {
              "character": "w",
              "start": 82.128,
              "end": 82.163
            },
            {
              "character": "e",
              "start": 82.163,
              "end": 82.233
            },
            {
              "character": "r",
              "start": 82.233,
              "end": 82.279
            },
            {
              "character": "e",
              "start": 82.279,
              "end": 82.314
            },
            {
              "character": "n",
              "start": 82.314,
              "end": 82.36
            },
            {
              "character": "’",
              "start": 82.36,
              "end": 82.395
            },
            {
              "character": "t",
              "start": 82.395,
              "end": 82.511
            },
            {
              "character": ".",
              "start": 82.511,
              "end": 82.639
            },
            {
              "character": " ",
              "start": 82.639,
              "end": 83.452
            },
            {
              "character": "T",
              "start": 83.452,
              "end": 83.498
            },
            {
              "character": "h",
              "start": 83.498,
              "end": 83.556
            },
            {
              "character": "a",
              "start": 83.556,
              "end": 83.579
            },
            {
              "character": "t",
              "start": 83.579,
              "end": 83.614
            },
            {
              "character": "’",
              "start": 83.614,
              "end": 83.649
            },
            {
              "character": "s",
              "start": 83.649,
              "end": 83.684
            },
            {
              "character": " ",
              "start": 83.684,
              "end": 83.719
            },
            {
              "character": "t",
              "start": 83.719,
              "end": 83.742
            },
            {
              "character": "h",
              "start": 83.742,
              "end": 83.765
            },
            {
              "character": "e",
              "start": 83.765,
              "end": 83.788
            },
            {
              "character": " ",
              "start": 83.788,
              "end": 83.846
            },
            {
              "character": "s",
              "start": 83.846,
              "end": 83.893
            },
            {
              "character": "e",
              "start": 83.893,
              "end": 83.962
            },
            {
              "character": "c",
              "start": 83.962,
              "end": 84.02
            },
            {
              "character": "o",
              "start": 84.02,
              "end": 84.055
            },
            {
              "character": "n",
              "start": 84.055,
              "end": 84.102
            },
            {
              "character": "d",
              "start": 84.102,
              "end": 84.125
            },
            {
              "character": " ",
              "start": 84.125,
              "end": 84.171
            },
            {
              "character": "t",
              "start": 84.171,
              "end": 84.229
            },
            {
              "character": "i",
              "start": 84.229,
              "end": 84.346
            },
            {
              "character": "m",
              "start": 84.346,
              "end": 84.404
            },
            {
              "character": "e",
              "start": 84.404,
              "end": 84.438
            },
            {
              "character": " ",
              "start": 84.438,
              "end": 84.473
            },
            {
              "character": "a",
              "start": 84.473,
              "end": 84.508
            },
            {
              "character": "n",
              "start": 84.508,
              "end": 84.543
            },
            {
              "character": "d",
              "start": 84.543,
              "end": 84.566
            },
            {
              "character": " ",
              "start": 84.566,
              "end": 84.624
            },
            {
              "character": "I",
              "start": 84.624,
              "end": 84.647
            },
            {
              "character": " ",
              "start": 84.647,
              "end": 84.705
            },
            {
              "character": "d",
              "start": 84.705,
              "end": 84.74
            },
            {
              "character": "o",
              "start": 84.74,
              "end": 84.775
            },
            {
              "character": "n",
              "start": 84.775,
              "end": 84.81
            },
            {
              "character": "’",
              "start": 84.81,
              "end": 84.845
            },
            {
              "character": "t",
              "start": 84.845,
              "end": 84.88
            },
            {
              "character": " ",
              "start": 84.88,
              "end": 84.926
            },
            {
              "character": "l",
              "start": 84.926,
              "end": 84.961
            },
            {
              "character": "i",
              "start": 84.961,
              "end": 85.031
            },
            {
              "character": "k",
              "start": 85.031,
              "end": 85.089
            },
            {
              "character": "e",
              "start": 85.089,
              "end": 85.135
            },
            {
              "character": " ",
              "start": 85.135,
              "end": 85.181
            },
            {
              "character": "i",
              "start": 85.181,
              "end": 85.216
            },
            {
              "character": "t",
              "start": 85.216,
              "end": 85.298
            },
            {
              "character": "”",
              "start": 85.298,
              "end": 85.367
            },
            {
              "character": ",",
              "start": 85.367,
              "end": 85.425
            },
            {
              "character": " ",
              "start": 85.425,
              "end": 85.541
            },
            {
              "character": "I",
              "start": 85.541,
              "end": 85.588
            },
            {
              "character": " ",
              "start": 85.588,
              "end": 85.704
            },
            {
              "character": "t",
              "start": 85.704,
              "end": 85.75
            },
            {
              "character": "o",
              "start": 85.75,
              "end": 85.832
            },
            {
              "character": "l",
              "start": 85.832,
              "end": 85.901
            },
            {
              "character": "d",
              "start": 85.901,
              "end": 85.936
            },
            {
              "character": " ",
              "start": 85.936,
              "end": 85.983
            },
            {
              "character": "h",
              "start": 85.983,
              "end": 86.006
            },
            {
              "character": "e",
              "start": 86.006,
              "end": 86.041
            },
            {
              "character": "r",
              "start": 86.041,
              "end": 86.122
            },
            {
              "character": ".",
              "start": 86.122,
              "end": 86.296
            },
            {
              "character": " ",
              "start": 86.296,
              "end": 86.9
            },
            {
              "character": "N",
              "start": 86.9,
              "end": 86.981
            },
            {
              "character": "o",
              "start": 86.981,
              "end": 87.062
            },
            {
              "character": "w",
              "start": 87.062,
              "end": 87.097
            },
            {
              "character": " ",
              "start": 87.097,
              "end": 87.167
            },
            {
              "character": "s",
              "start": 87.167,
              "end": 87.202
            },
            {
              "character": "h",
              "start": 87.202,
              "end": 87.248
            },
            {
              "character": "e",
              "start": 87.248,
              "end": 87.271
            },
            {
              "character": " ",
              "start": 87.271,
              "end": 87.341
            },
            {
              "character": "g",
              "start": 87.341,
              "end": 87.387
            },
            {
              "character": "o",
              "start": 87.387,
              "end": 87.469
            },
            {
              "character": "t",
              "start": 87.469,
              "end": 87.527
            },
            {
              "character": " ",
              "start": 87.527,
              "end": 87.585
            },
            {
              "character": "a",
              "start": 87.585,
              "end": 87.631
            },
            {
              "character": "n",
              "start": 87.631,
              "end": 87.712
            },
            {
              "character": "g",
              "start": 87.712,
              "end": 87.77
            },
            {
              "character": "r",
              "start": 87.77,
              "end": 87.84
            },
            {
              "character": "y",
              "start": 87.84,
              "end": 87.956
            },
            {
              "character": ",",
              "start": 87.956,
              "end": 88.072
            },
            {
              "character": " ",
              "start": 88.072,
              "end": 88.246
            },
            {
              "character": "r",
              "start": 88.246,
              "end": 88.316
            },
            {
              "character": "a",
              "start": 88.316,
              "end": 88.386
            },
            {
              "character": "i",
              "start": 88.386,
              "end": 88.444
            },
            {
              "character": "s",
              "start": 88.444,
              "end": 88.49
            },
            {
              "character": "e",
              "start": 88.49,
              "end": 88.548
            },
            {
              "character": "d",
              "start": 88.548,
              "end": 88.572
            },
            {
              "character": " ",
              "start": 88.572,
              "end": 88.606
            },
            {
              "character": "h",
              "start": 88.606,
              "end": 88.641
            },
            {
              "character": "e",
              "start": 88.641,
              "end": 88.664
            },
            {
              "character": "r",
              "start": 88.664,
              "end": 88.688
            },
            {
              "character": " ",
              "start": 88.688,
              "end": 88.734
            },
            {
              "character": "v",
              "start": 88.734,
              "end": 88.781
            },
            {
              "character": "o",
              "start": 88.781,
              "end": 88.85
            },
            {
              "character": "i",
              "start": 88.85,
              "end": 88.908
            },
            {
              "character": "c",
              "start": 88.908,
              "end": 88.955
            },
            {
              "character": "e",
              "start": 88.955,
              "end": 88.99
            },
            {
              "character": " ",
              "start": 88.99,
              "end": 89.013
            },
            {
              "character": "w",
              "start": 89.013,
              "end": 89.048
            },
            {
              "character": "i",
              "start": 89.048,
              "end": 89.082
            },
            {
              "character": "t",
              "start": 89.082,
              "end": 89.117
            },
            {
              "character": "h",
              "start": 89.117,
              "end": 89.152
            },
            {
              "character": " ",
              "start": 89.152,
              "end": 89.199
            },
            {
              "character": "m",
              "start": 89.199,
              "end": 89.245
            },
            {
              "character": "e",
              "start": 89.245,
              "end": 89.419
            },
            {
              "character": ",",
              "start": 89.419,
              "end": 89.535
            },
            {
              "character": " ",
              "start": 89.535,
              "end": 89.651
            },
            {
              "character": "“",
              "start": 89.651,
              "end": 89.802
            },
            {
              "character": "E",
              "start": 89.802,
              "end": 89.918
            },
            {
              "character": "v",
              "start": 89.918,
              "end": 89.976
            },
            {
              "character": "e",
              "start": 89.976,
              "end": 90.046
            },
            {
              "character": "n",
              "start": 90.046,
              "end": 90.081
            },
            {
              "character": " ",
              "start": 90.081,
              "end": 90.162
            },
            {
              "character": "s",
              "start": 90.162,
              "end": 90.243
            },
            {
              "character": "o",
              "start": 90.243,
              "end": 90.452
            },
            {
              "character": ",",
              "start": 90.452,
              "end": 90.51
            },
            {
              "character": " ",
              "start": 90.51,
              "end": 90.557
            },
            {
              "character": "t",
              "start": 90.557,
              "end": 90.58
            },
            {
              "character": "h",
              "start": 90.58,
              "end": 90.638
            },
            {
              "character": "i",
              "start": 90.638,
              "end": 90.685
            },
            {
              "character": "s",
              "start": 90.685,
              "end": 90.731
            },
            {
              "character": " ",
              "start": 90.731,
              "end": 90.789
            },
            {
              "character": "i",
              "start": 90.789,
              "end": 90.836
            },
            {
              "character": "s",
              "start": 90.836,
              "end": 90.882
            },
            {
              "character": " ",
              "start": 90.882,
              "end": 90.928
            },
            {
              "character": "a",
              "start": 90.928,
              "end": 90.952
            },
            {
              "character": "n",
              "start": 90.952,
              "end": 90.986
            },
            {
              "character": " ",
              "start": 90.986,
              "end": 91.033
            },
            {
              "character": "e",
              "start": 91.033,
              "end": 91.079
            },
            {
              "character": "x",
              "start": 91.079,
              "end": 91.149
            },
            {
              "character": "p",
              "start": 91.149,
              "end": 91.23
            },
            {
              "character": "e",
              "start": 91.23,
              "end": 91.288
            },
            {
              "character": "n",
              "start": 91.288,
              "end": 91.335
            },
            {
              "character": "s",
              "start": 91.335,
              "end": 91.404
            },
            {
              "character": "i",
              "start": 91.404,
              "end": 91.462
            },
            {
              "character": "v",
              "start": 91.462,
              "end": 91.497
            },
            {
              "character": "e",
              "start": 91.497,
              "end": 91.532
            },
            {
              "character": " ",
              "start": 91.532,
              "end": 91.567
            },
            {
              "character": "t",
              "start": 91.567,
              "end": 91.613
            },
            {
              "character": "o",
              "start": 91.613,
              "end": 91.788
            },
            {
              "character": "y",
              "start": 91.788,
              "end": 91.938
            },
            {
              "character": ",",
              "start": 91.938,
              "end": 92.089
            },
            {
              "character": " ",
              "start": 92.089,
              "end": 92.264
            },
            {
              "character": "w",
              "start": 92.264,
              "end": 92.322
            },
            {
              "character": "h",
              "start": 92.322,
              "end": 92.38
            },
            {
              "character": "a",
              "start": 92.38,
              "end": 92.414
            },
            {
              "character": "t",
              "start": 92.414,
              "end": 92.449
            },
            {
              "character": " ",
              "start": 92.449,
              "end": 92.484
            },
            {
              "character": "w",
              "start": 92.484,
              "end": 92.519
            },
            {
              "character": "r",
              "start": 92.519,
              "end": 92.577
            },
            {
              "character": "o",
              "start": 92.577,
              "end": 92.623
            },
            {
              "character": "n",
              "start": 92.623,
              "end": 92.681
            },
            {
              "character": "g",
              "start": 92.681,
              "end": 92.705
            },
            {
              "character": " ",
              "start": 92.705,
              "end": 92.74
            },
            {
              "character": "w",
              "start": 92.74,
              "end": 92.774
            },
            {
              "character": "i",
              "start": 92.774,
              "end": 92.809
            },
            {
              "character": "t",
              "start": 92.809,
              "end": 92.832
            },
            {
              "character": "h",
              "start": 92.832,
              "end": 92.867
            },
            {
              "character": " ",
              "start": 92.867,
              "end": 92.925
            },
            {
              "character": "b",
              "start": 92.925,
              "end": 92.96
            },
            {
              "character": "e",
              "start": 92.96,
              "end": 93.018
            },
            {
              "character": "g",
              "start": 93.018,
              "end": 93.076
            },
            {
              "character": "g",
              "start": 93.076,
              "end": 93.123
            },
            {
              "character": "i",
              "start": 93.123,
              "end": 93.181
            },
            {
              "character": "n",
              "start": 93.181,
              "end": 93.204
            },
            {
              "character": "g",
              "start": 93.204,
              "end": 93.227
            },
            {
              "character": " ",
              "start": 93.227,
              "end": 93.285
            },
            {
              "character": "a",
              "start": 93.285,
              "end": 93.308
            },
            {
              "character": " ",
              "start": 93.308,
              "end": 93.367
            },
            {
              "character": "l",
              "start": 93.367,
              "end": 93.401
            },
            {
              "character": "i",
              "start": 93.401,
              "end": 93.459
            },
            {
              "character": "t",
              "start": 93.459,
              "end": 93.494
            },
            {
              "character": "t",
              "start": 93.494,
              "end": 93.541
            },
            {
              "character": "l",
              "start": 93.541,
              "end": 93.587
            },
            {
              "character": "e",
              "start": 93.587,
              "end": 93.715
            },
            {
              "character": "?",
              "start": 93.715,
              "end": 93.738
            },
            {
              "character": "”",
              "start": 93.738,
              "end": 93.761
            },
            {
              "character": ".",
              "start": 93.761,
              "end": 93.831
            },
            {
              "character": " ",
              "start": 93.831,
              "end": 94.644
            },
            {
              "character": "“",
              "start": 94.644,
              "end": 94.76
            },
            {
              "character": "Y",
              "start": 94.76,
              "end": 94.818
            },
            {
              "character": "o",
              "start": 94.818,
              "end": 94.853
            },
            {
              "character": "u",
              "start": 94.853,
              "end": 94.887
            },
            {
              "character": " ",
              "start": 94.887,
              "end": 94.969
            },
            {
              "character": "t",
              "start": 94.969,
              "end": 95.015
            },
            {
              "character": "a",
              "start": 95.015,
              "end": 95.073
            },
            {
              "character": "k",
              "start": 95.073,
              "end": 95.12
            },
            {
              "character": "e",
              "start": 95.12,
              "end": 95.166
            },
            {
              "character": " ",
              "start": 95.166,
              "end": 95.201
            },
            {
              "character": "t",
              "start": 95.201,
              "end": 95.224
            },
            {
              "character": "h",
              "start": 95.224,
              "end": 95.247
            },
            {
              "character": "e",
              "start": 95.247,
              "end": 95.271
            },
            {
              "character": " ",
              "start": 95.271,
              "end": 95.329
            },
            {
              "character": "g",
              "start": 95.329,
              "end": 95.375
            },
            {
              "character": "i",
              "start": 95.375,
              "end": 95.445
            },
            {
              "character": "f",
              "start": 95.445,
              "end": 95.503
            },
            {
              "character": "t",
              "start": 95.503,
              "end": 95.549
            },
            {
              "character": " ",
              "start": 95.549,
              "end": 95.619
            },
            {
              "character": "b",
              "start": 95.619,
              "end": 95.677
            },
            {
              "character": "a",
              "start": 95.677,
              "end": 95.77
            },
            {
              "character": "c",
              "start": 95.77,
              "end": 95.816
            },
            {
              "character": "k",
              "start": 95.816,
              "end": 95.863
            },
            {
              "character": " ",
              "start": 95.863,
              "end": 95.921
            },
            {
              "character": "a",
              "start": 95.921,
              "end": 95.944
            },
            {
              "character": "n",
              "start": 95.944,
              "end": 95.967
            },
            {
              "character": "d",
              "start": 95.967,
              "end": 96.002
            },
            {
              "character": " ",
              "start": 96.002,
              "end": 96.072
            },
            {
              "character": "p",
              "start": 96.072,
              "end": 96.13
            },
            {
              "character": "l",
              "start": 96.13,
              "end": 96.188
            },
            {
              "character": "e",
              "start": 96.188,
              "end": 96.246
            },
            {
              "character": "a",
              "start": 96.246,
              "end": 96.292
            },
            {
              "character": "s",
              "start": 96.292,
              "end": 96.35
            },
            {
              "character": "e",
              "start": 96.35,
              "end": 96.385
            },
            {
              "character": " ",
              "start": 96.385,
              "end": 96.443
            },
            {
              "character": "l",
              "start": 96.443,
              "end": 96.501
            },
            {
              "character": "e",
              "start": 96.501,
              "end": 96.571
            },
            {
              "character": "a",
              "start": 96.571,
              "end": 96.641
            },
            {
              "character": "v",
              "start": 96.641,
              "end": 96.687
            },
            {
              "character": "e",
              "start": 96.687,
              "end": 96.861
            },
            {
              "character": "”",
              "start": 96.861,
              "end": 96.884
            },
            {
              "character": ",",
              "start": 96.884,
              "end": 97.035
            },
            {
              "character": " ",
              "start": 97.035,
              "end": 97.151
            },
            {
              "character": "I",
              "start": 97.151,
              "end": 97.198
            },
            {
              "character": " ",
              "start": 97.198,
              "end": 97.314
            },
            {
              "character": "t",
              "start": 97.314,
              "end": 97.36
            },
            {
              "character": "o",
              "start": 97.36,
              "end": 97.453
            },
            {
              "character": "l",
              "start": 97.453,
              "end": 97.511
            },
            {
              "character": "d",
              "start": 97.511,
              "end": 97.546
            },
            {
              "character": " ",
              "start": 97.546,
              "end": 97.593
            },
            {
              "character": "h",
              "start": 97.593,
              "end": 97.616
            },
            {
              "character": "e",
              "start": 97.616,
              "end": 97.639
            },
            {
              "character": "r",
              "start": 97.639,
              "end": 97.72
            },
            {
              "character": ",",
              "start": 97.72,
              "end": 97.836
            },
            {
              "character": " ",
              "start": 97.836,
              "end": 98.08
            },
            {
              "character": "w",
              "start": 98.08,
              "end": 98.138
            },
            {
              "character": "h",
              "start": 98.138,
              "end": 98.196
            },
            {
              "character": "i",
              "start": 98.196,
              "end": 98.243
            },
            {
              "character": "l",
              "start": 98.243,
              "end": 98.278
            },
            {
              "character": "e",
              "start": 98.278,
              "end": 98.312
            },
            {
              "character": " ",
              "start": 98.312,
              "end": 98.359
            },
            {
              "character": "g",
              "start": 98.359,
              "end": 98.394
            },
            {
              "character": "e",
              "start": 98.394,
              "end": 98.44
            },
            {
              "character": "t",
              "start": 98.44,
              "end": 98.475
            },
            {
              "character": "t",
              "start": 98.475,
              "end": 98.51
            },
            {
              "character": "i",
              "start": 98.51,
              "end": 98.545
            },
            {
              "character": "n",
              "start": 98.545,
              "end": 98.568
            },
            {
              "character": "g",
              "start": 98.568,
              "end": 98.591
            },
            {
              "character": " ",
              "start": 98.591,
              "end": 98.649
            },
            {
              "character": "u",
              "start": 98.649,
              "end": 98.707
            },
            {
              "character": "p",
              "start": 98.707,
              "end": 98.754
            },
            {
              "character": " ",
              "start": 98.754,
              "end": 98.8
            },
            {
              "character": "a",
              "start": 98.8,
              "end": 98.823
            },
            {
              "character": "n",
              "start": 98.823,
              "end": 98.846
            },
            {
              "character": "d",
              "start": 98.846,
              "end": 98.881
            },
            {
              "character": " ",
              "start": 98.881,
              "end": 98.939
            },
            {
              "character": "h",
              "start": 98.939,
              "end": 98.974
            },
            {
              "character": "o",
              "start": 98.974,
              "end": 99.032
            },
            {
              "character": "l",
              "start": 99.032,
              "end": 99.09
            },
            {
              "character": "d",
              "start": 99.09,
              "end": 99.125
            },
            {
              "character": "i",
              "start": 99.125,
              "end": 99.172
            },
            {
              "character": "n",
              "start": 99.172,
              "end": 99.195
            },
            {
              "character": "g",
              "start": 99.195,
              "end": 99.218
            },
            {
              "character": " ",
              "start": 99.218,
              "end": 99.264
            },
            {
              "character": "t",
              "start": 99.264,
              "end": 99.288
            },
            {
              "character": "h",
              "start": 99.288,
              "end": 99.311
            },
            {
              "character": "e",
              "start": 99.311,
              "end": 99.334
            },
            {
              "character": " ",
              "start": 99.334,
              "end": 99.369
            },
            {
              "character": "d",
              "start": 99.369,
              "end": 99.404
            },
            {
              "character": "o",
              "start": 99.404,
              "end": 99.462
            },
            {
              "character": "o",
              "start": 99.462,
              "end": 99.531
            },
            {
              "character": "r",
              "start": 99.531,
              "end": 99.566
            },
            {
              "character": " ",
              "start": 99.566,
              "end": 99.636
            },
            {
              "character": "o",
              "start": 99.636,
              "end": 99.706
            },
            {
              "character": "p",
              "start": 99.706,
              "end": 99.775
            },
            {
              "character": "e",
              "start": 99.775,
              "end": 99.845
            },
            {
              "character": "n",
              "start": 99.845,
              "end": 99.926
            },
            {
              "character": ".",
              "start": 99.926,
              "end": 100.077
            },
            {
              "character": " ",
              "start": 100.077,
              "end": 100.774
            },
            {
              "character": "S",
              "start": 100.774,
              "end": 100.832
            },
            {
              "character": "h",
              "start": 100.832,
              "end": 100.89
            },
            {
              "character": "e",
              "start": 100.89,
              "end": 100.925
            },
            {
              "character": " ",
              "start": 100.925,
              "end": 101.018
            },
            {
              "character": "l",
              "start": 101.018,
              "end": 101.076
            },
            {
              "character": "e",
              "start": 101.076,
              "end": 101.192
            },
            {
              "character": "f",
              "start": 101.192,
              "end": 101.261
            },
            {
              "character": "t",
              "start": 101.261,
              "end": 101.377
            },
            {
              "character": " ",
              "start": 101.377,
              "end": 101.528
            },
            {
              "character": "a",
              "start": 101.528,
              "end": 101.644
            },
            {
              "character": "n",
              "start": 101.644,
              "end": 101.691
            },
            {
              "character": "d",
              "start": 101.691,
              "end": 101.726
            },
            {
              "character": " ",
              "start": 101.726,
              "end": 101.795
            },
            {
              "character": "n",
              "start": 101.795,
              "end": 101.83
            },
            {
              "character": "e",
              "start": 101.83,
              "end": 101.888
            },
            {
              "character": "v",
              "start": 101.888,
              "end": 101.923
            },
            {
              "character": "e",
              "start": 101.923,
              "end": 101.97
            },
            {
              "character": "r",
              "start": 101.97,
              "end": 101.993
            },
            {
              "character": " ",
              "start": 101.993,
              "end": 102.051
            },
            {
              "character": "c",
              "start": 102.051,
              "end": 102.086
            },
            {
              "character": "a",
              "start": 102.086,
              "end": 102.155
            },
            {
              "character": "m",
              "start": 102.155,
              "end": 102.213
            },
            {
              "character": "e",
              "start": 102.213,
              "end": 102.248
            },
            {
              "character": " ",
              "start": 102.248,
              "end": 102.295
            },
            {
              "character": "b",
              "start": 102.295,
              "end": 102.341
            },
            {
              "character": "a",
              "start": 102.341,
              "end": 102.434
            },
            {
              "character": "c",
              "start": 102.434,
              "end": 102.48
            },
            {
              "character": "k",
              "start": 102.48,
              "end": 102.573
            },
            {
              "character": ".",
              "start": 102.573,
              "end": 102.747
            },
            {
              "character": " ",
              "start": 102.747,
              "end": 104.048
            },
            {
              "character": " ",
              "start": 104.048,
              "end": 104.048
            },
            {
              "character": "T",
              "start": 104.048,
              "end": 104.106
            },
            {
              "character": "h",
              "start": 104.106,
              "end": 104.152
            },
            {
              "character": "e",
              "start": 104.152,
              "end": 104.175
            },
            {
              "character": " ",
              "start": 104.175,
              "end": 104.233
            },
            {
              "character": "n",
              "start": 104.233,
              "end": 104.28
            },
            {
              "character": "e",
              "start": 104.28,
              "end": 104.35
            },
            {
              "character": "x",
              "start": 104.35,
              "end": 104.408
            },
            {
              "character": "t",
              "start": 104.408,
              "end": 104.454
            },
            {
              "character": " ",
              "start": 104.454,
              "end": 104.512
            },
            {
              "character": "d",
              "start": 104.512,
              "end": 104.559
            },
            {
              "character": "a",
              "start": 104.559,
              "end": 104.709
            },
            {
              "character": "y",
              "start": 104.709,
              "end": 104.86
            },
            {
              "character": ",",
              "start": 104.86,
              "end": 104.977
            },
            {
              "character": " ",
              "start": 104.977,
              "end": 105.069
            },
            {
              "character": "I",
              "start": 105.069,
              "end": 105.116
            },
            {
              "character": " ",
              "start": 105.116,
              "end": 105.209
            },
            {
              "character": "t",
              "start": 105.209,
              "end": 105.232
            },
            {
              "character": "o",
              "start": 105.232,
              "end": 105.29
            },
            {
              "character": "o",
              "start": 105.29,
              "end": 105.336
            },
            {
              "character": "k",
              "start": 105.336,
              "end": 105.383
            },
            {
              "character": " ",
              "start": 105.383,
              "end": 105.441
            },
            {
              "character": "m",
              "start": 105.441,
              "end": 105.487
            },
            {
              "character": "y",
              "start": 105.487,
              "end": 105.534
            },
            {
              "character": " ",
              "start": 105.534,
              "end": 105.603
            },
            {
              "character": "d",
              "start": 105.603,
              "end": 105.65
            },
            {
              "character": "a",
              "start": 105.65,
              "end": 105.708
            },
            {
              "character": "u",
              "start": 105.708,
              "end": 105.743
            },
            {
              "character": "g",
              "start": 105.743,
              "end": 105.778
            },
            {
              "character": "h",
              "start": 105.778,
              "end": 105.801
            },
            {
              "character": "t",
              "start": 105.801,
              "end": 105.836
            },
            {
              "character": "e",
              "start": 105.836,
              "end": 105.87
            },
            {
              "character": "r",
              "start": 105.87,
              "end": 105.894
            },
            {
              "character": " ",
              "start": 105.894,
              "end": 105.952
            },
            {
              "character": "t",
              "start": 105.952,
              "end": 105.987
            },
            {
              "character": "o",
              "start": 105.987,
              "end": 106.033
            },
            {
              "character": " ",
              "start": 106.033,
              "end": 106.103
            },
            {
              "character": "t",
              "start": 106.103,
              "end": 106.126
            },
            {
              "character": "h",
              "start": 106.126,
              "end": 106.149
            },
            {
              "character": "e",
              "start": 106.149,
              "end": 106.172
            },
            {
              "character": " ",
              "start": 106.172,
              "end": 106.219
            },
            {
              "character": "t",
              "start": 106.219,
              "end": 106.265
            },
            {
              "character": "o",
              "start": 106.265,
              "end": 106.381
            },
            {
              "character": "y",
              "start": 106.381,
              "end": 106.439
            },
            {
              "character": " ",
              "start": 106.439,
              "end": 106.497
            },
            {
              "character": "s",
              "start": 106.497,
              "end": 106.532
            },
            {
              "character": "t",
              "start": 106.532,
              "end": 106.59
            },
            {
              "character": "o",
              "start": 106.59,
              "end": 106.672
            },
            {
              "character": "r",
              "start": 106.672,
              "end": 106.73
            },
            {
              "character": "e",
              "start": 106.73,
              "end": 106.764
            },
            {
              "character": " ",
              "start": 106.764,
              "end": 106.799
            },
            {
              "character": "t",
              "start": 106.799,
              "end": 106.822
            },
            {
              "character": "o",
              "start": 106.822,
              "end": 106.846
            },
            {
              "character": " ",
              "start": 106.846,
              "end": 106.904
            },
            {
              "character": "g",
              "start": 106.904,
              "end": 106.95
            },
            {
              "character": "e",
              "start": 106.95,
              "end": 107.008
            },
            {
              "character": "t",
              "start": 107.008,
              "end": 107.055
            },
            {
              "character": " ",
              "start": 107.055,
              "end": 107.09
            },
            {
              "character": "t",
              "start": 107.09,
              "end": 107.113
            },
            {
              "character": "h",
              "start": 107.113,
              "end": 107.159
            },
            {
              "character": "a",
              "start": 107.159,
              "end": 107.206
            },
            {
              "character": "t",
              "start": 107.206,
              "end": 107.24
            },
            {
              "character": " ",
              "start": 107.24,
              "end": 107.31
            },
            {
              "character": "L",
              "start": 107.31,
              "end": 107.368
            },
            {
              "character": "e",
              "start": 107.368,
              "end": 107.449
            },
            {
              "character": "g",
              "start": 107.449,
              "end": 107.531
            },
            {
              "character": "o",
              "start": 107.531,
              "end": 107.624
            },
            {
              "character": " ",
              "start": 107.624,
              "end": 107.705
            },
            {
              "character": "s",
              "start": 107.705,
              "end": 107.751
            },
            {
              "character": "e",
              "start": 107.751,
              "end": 107.902
            },
            {
              "character": "t",
              "start": 107.902,
              "end": 108.018
            },
            {
              "character": ".",
              "start": 108.018,
              "end": 108.169
            },
            {
              "character": " ",
              "start": 108.169,
              "end": 108.552
            },
            {
              "character": "M",
              "start": 108.552,
              "end": 108.622
            },
            {
              "character": "y",
              "start": 108.622,
              "end": 108.68
            },
            {
              "character": " ",
              "start": 108.68,
              "end": 108.738
            },
            {
              "character": "f",
              "start": 108.738,
              "end": 108.773
            },
            {
              "character": "r",
              "start": 108.773,
              "end": 108.819
            },
            {
              "character": "i",
              "start": 108.819,
              "end": 108.854
            },
            {
              "character": "e",
              "start": 108.854,
              "end": 108.877
            },
            {
              "character": "n",
              "start": 108.877,
              "end": 108.912
            },
            {
              "character": "d",
              "start": 108.912,
              "end": 108.936
            },
            {
              "character": " ",
              "start": 108.936,
              "end": 108.982
            },
            {
              "character": "w",
              "start": 108.982,
              "end": 109.017
            },
            {
              "character": "a",
              "start": 109.017,
              "end": 109.052
            },
            {
              "character": "s",
              "start": 109.052,
              "end": 109.086
            },
            {
              "character": " ",
              "start": 109.086,
              "end": 109.156
            },
            {
              "character": "r",
              "start": 109.156,
              "end": 109.225
            },
            {
              "character": "i",
              "start": 109.225,
              "end": 109.295
            },
            {
              "character": "g",
              "start": 109.295,
              "end": 109.341
            },
            {
              "character": "h",
              "start": 109.341,
              "end": 109.376
            },
            {
              "character": "t",
              "start": 109.376,
              "end": 109.469
            },
            {
              "character": ".",
              "start": 109.469,
              "end": 109.62
            },
            {
              "character": " ",
              "start": 109.62,
              "end": 109.945
            },
            {
              "character": "I",
              "start": 109.945,
              "end": 110.015
            },
            {
              "character": "t",
              "start": 110.015,
              "end": 110.073
            },
            {
              "character": " ",
              "start": 110.073,
              "end": 110.108
            },
            {
              "character": "w",
              "start": 110.108,
              "end": 110.131
            },
            {
              "character": "a",
              "start": 110.131,
              "end": 110.166
            },
            {
              "character": "s",
              "start": 110.166,
              "end": 110.201
            },
            {
              "character": " ",
              "start": 110.201,
              "end": 110.247
            },
            {
              "character": "a",
              "start": 110.247,
              "end": 110.27
            },
            {
              "character": " ",
              "start": 110.27,
              "end": 110.34
            },
            {
              "character": "d",
              "start": 110.34,
              "end": 110.386
            },
            {
              "character": "a",
              "start": 110.386,
              "end": 110.537
            },
            {
              "character": "m",
              "start": 110.537,
              "end": 110.584
            },
            {
              "character": "n",
              "start": 110.584,
              "end": 110.63
            },
            {
              "character": " ",
              "start": 110.63,
              "end": 110.665
            },
            {
              "character": "e",
              "start": 110.665,
              "end": 110.711
            },
            {
              "character": "x",
              "start": 110.711,
              "end": 110.793
            },
            {
              "character": "p",
              "start": 110.793,
              "end": 110.874
            },
            {
              "character": "e",
              "start": 110.874,
              "end": 110.944
            },
            {
              "character": "n",
              "start": 110.944,
              "end": 110.99
            },
            {
              "character": "s",
              "start": 110.99,
              "end": 111.06
            },
            {
              "character": "i",
              "start": 111.06,
              "end": 111.129
            },
            {
              "character": "v",
              "start": 111.129,
              "end": 111.176
            },
            {
              "character": "e",
              "start": 111.176,
              "end": 111.211
            },
            {
              "character": " ",
              "start": 111.211,
              "end": 111.245
            },
            {
              "character": "t",
              "start": 111.245,
              "end": 111.304
            },
            {
              "character": "o",
              "start": 111.304,
              "end": 111.512
            },
            {
              "character": "y",
              "start": 111.512,
              "end": 111.582
            },
            {
              "character": ",",
              "start": 111.582,
              "end": 111.605
            },
            {
              "character": " ",
              "start": 111.605,
              "end": 111.629
            },
            {
              "character": "i",
              "start": 111.629,
              "end": 111.663
            },
            {
              "character": "t",
              "start": 111.663,
              "end": 111.687
            },
            {
              "character": " ",
              "start": 111.687,
              "end": 111.733
            },
            {
              "character": "c",
              "start": 111.733,
              "end": 111.78
            },
            {
              "character": "o",
              "start": 111.78,
              "end": 111.896
            },
            {
              "character": "s",
              "start": 111.896,
              "end": 111.954
            },
            {
              "character": "t",
              "start": 111.954,
              "end": 111.988
            },
            {
              "character": " ",
              "start": 111.988,
              "end": 112.035
            },
            {
              "character": "m",
              "start": 112.035,
              "end": 112.07
            },
            {
              "character": "e",
              "start": 112.07,
              "end": 112.116
            },
            {
              "character": " ",
              "start": 112.116,
              "end": 112.163
            },
            {
              "character": "a",
              "start": 112.163,
              "end": 112.197
            },
            {
              "character": " ",
              "start": 112.197,
              "end": 112.279
            },
            {
              "character": "b",
              "start": 112.279,
              "end": 112.337
            },
            {
              "character": "i",
              "start": 112.337,
              "end": 112.43
            },
            {
              "character": "g",
              "start": 112.43,
              "end": 112.488
            },
            {
              "character": " ",
              "start": 112.488,
              "end": 112.557
            },
            {
              "character": "c",
              "start": 112.557,
              "end": 112.604
            },
            {
              "character": "h",
              "start": 112.604,
              "end": 112.662
            },
            {
              "character": "u",
              "start": 112.662,
              "end": 112.708
            },
            {
              "character": "n",
              "start": 112.708,
              "end": 112.755
            },
            {
              "character": "k",
              "start": 112.755,
              "end": 112.801
            },
            {
              "character": " ",
              "start": 112.801,
              "end": 112.836
            },
            {
              "character": "o",
              "start": 112.836,
              "end": 112.859
            },
            {
              "character": "f",
              "start": 112.859,
              "end": 112.882
            },
            {
              "character": " ",
              "start": 112.882,
              "end": 112.929
            },
            {
              "character": "m",
              "start": 112.929,
              "end": 112.964
            },
            {
              "character": "y",
              "start": 112.964,
              "end": 113.01
            },
            {
              "character": " ",
              "start": 113.01,
              "end": 113.057
            },
            {
              "character": "s",
              "start": 113.057,
              "end": 113.115
            },
            {
              "character": "k",
              "start": 113.115,
              "end": 113.184
            },
            {
              "character": "i",
              "start": 113.184,
              "end": 113.231
            },
            {
              "character": "n",
              "start": 113.231,
              "end": 113.266
            },
            {
              "character": "n",
              "start": 113.266,
              "end": 113.312
            },
            {
              "character": "y",
              "start": 113.312,
              "end": 113.37
            },
            {
              "character": " ",
              "start": 113.37,
              "end": 113.428
            },
            {
              "character": "p",
              "start": 113.428,
              "end": 113.475
            },
            {
              "character": "a",
              "start": 113.475,
              "end": 113.567
            },
            {
              "character": "y",
              "start": 113.567,
              "end": 113.637
            },
            {
              "character": "c",
              "start": 113.637,
              "end": 113.695
            },
            {
              "character": "h",
              "start": 113.695,
              "end": 113.753
            },
            {
              "character": "e",
              "start": 113.753,
              "end": 113.811
            },
            {
              "character": "c",
              "start": 113.811,
              "end": 113.858
            },
            {
              "character": "k",
              "start": 113.858,
              "end": 113.893
            },
            {
              "character": " ",
              "start": 113.893,
              "end": 113.939
            },
            {
              "character": "a",
              "start": 113.939,
              "end": 113.962
            },
            {
              "character": "n",
              "start": 113.962,
              "end": 113.985
            },
            {
              "character": "d",
              "start": 113.985,
              "end": 114.009
            },
            {
              "character": " ",
              "start": 114.009,
              "end": 114.043
            },
            {
              "character": "a",
              "start": 114.043,
              "end": 114.067
            },
            {
              "character": " ",
              "start": 114.067,
              "end": 114.125
            },
            {
              "character": "f",
              "start": 114.125,
              "end": 114.171
            },
            {
              "character": "r",
              "start": 114.171,
              "end": 114.218
            },
            {
              "character": "i",
              "start": 114.218,
              "end": 114.264
            },
            {
              "character": "e",
              "start": 114.264,
              "end": 114.299
            },
            {
              "character": "n",
              "start": 114.299,
              "end": 114.334
            },
            {
              "character": "d",
              "start": 114.334,
              "end": 114.38
            },
            {
              "character": "s",
              "start": 114.38,
              "end": 114.438
            },
            {
              "character": "h",
              "start": 114.438,
              "end": 114.485
            },
            {
              "character": "i",
              "start": 114.485,
              "end": 114.554
            },
            {
              "character": "p",
              "start": 114.554,
              "end": 114.647
            },
            {
              "character": ".",
              "start": 114.647,
              "end": 114.937
            }
          ],
          "words": [
            {
              "word": "It",
              "start": 0,
              "end": 0.128,
              "characters": [
                {
                  "character": "I",
                  "start": 0,
                  "end": 0.081
                },
                {
                  "character": "t",
                  "start": 0.081,
                  "end": 0.128
                }
              ]
            },
            {
              "word": "was",
              "start": 0.174,
              "end": 0.267,
              "characters": [
                {
                  "character": "w",
                  "start": 0.174,
                  "end": 0.197
                },
                {
                  "character": "a",
                  "start": 0.197,
                  "end": 0.232
                },
                {
                  "character": "s",
                  "start": 0.232,
                  "end": 0.267
                }
              ]
            },
            {
              "word": "my",
              "start": 0.337,
              "end": 0.453,
              "characters": [
                {
                  "character": "m",
                  "start": 0.337,
                  "end": 0.383
                },
                {
                  "character": "y",
                  "start": 0.383,
                  "end": 0.453
                }
              ]
            },
            {
              "word": "daughter’s",
              "start": 0.534,
              "end": 0.952,
              "characters": [
                {
                  "character": "d",
                  "start": 0.534,
                  "end": 0.592
                },
                {
                  "character": "a",
                  "start": 0.592,
                  "end": 0.662
                },
                {
                  "character": "u",
                  "start": 0.662,
                  "end": 0.697
                },
                {
                  "character": "g",
                  "start": 0.697,
                  "end": 0.731
                },
                {
                  "character": "h",
                  "start": 0.731,
                  "end": 0.766
                },
                {
                  "character": "t",
                  "start": 0.766,
                  "end": 0.801
                },
                {
                  "character": "e",
                  "start": 0.801,
                  "end": 0.836
                },
                {
                  "character": "r",
                  "start": 0.836,
                  "end": 0.871
                },
                {
                  "character": "’",
                  "start": 0.871,
                  "end": 0.917
                },
                {
                  "character": "s",
                  "start": 0.917,
                  "end": 0.952
                }
              ]
            },
            {
              "word": "5th",
              "start": 1.033,
              "end": 1.265,
              "characters": [
                {
                  "character": "5",
                  "start": 1.033,
                  "end": 1.184
                },
                {
                  "character": "t",
                  "start": 1.184,
                  "end": 1.231
                },
                {
                  "character": "h",
                  "start": 1.231,
                  "end": 1.265
                }
              ]
            },
            {
              "word": "birthday.",
              "start": 1.335,
              "end": 2.043,
              "characters": [
                {
                  "character": "b",
                  "start": 1.335,
                  "end": 1.382
                },
                {
                  "character": "i",
                  "start": 1.382,
                  "end": 1.451
                },
                {
                  "character": "r",
                  "start": 1.451,
                  "end": 1.509
                },
                {
                  "character": "t",
                  "start": 1.509,
                  "end": 1.567
                },
                {
                  "character": "h",
                  "start": 1.567,
                  "end": 1.614
                },
                {
                  "character": "d",
                  "start": 1.614,
                  "end": 1.695
                },
                {
                  "character": "a",
                  "start": 1.695,
                  "end": 1.811
                },
                {
                  "character": "y",
                  "start": 1.811,
                  "end": 1.927
                },
                {
                  "character": ".",
                  "start": 1.927,
                  "end": 2.043
                }
              ]
            },
            {
              "word": "",
              "start": 2.043,
              "end": 2.485,
              "characters": []
            },
            {
              "word": "Because",
              "start": 2.485,
              "end": 2.786,
              "characters": [
                {
                  "character": "B",
                  "start": 2.485,
                  "end": 2.543
                },
                {
                  "character": "e",
                  "start": 2.543,
                  "end": 2.601
                },
                {
                  "character": "c",
                  "start": 2.601,
                  "end": 2.647
                },
                {
                  "character": "a",
                  "start": 2.647,
                  "end": 2.682
                },
                {
                  "character": "u",
                  "start": 2.682,
                  "end": 2.717
                },
                {
                  "character": "s",
                  "start": 2.717,
                  "end": 2.752
                },
                {
                  "character": "e",
                  "start": 2.752,
                  "end": 2.786
                }
              ]
            },
            {
              "word": "I",
              "start": 2.821,
              "end": 2.844,
              "characters": [
                {
                  "character": "I",
                  "start": 2.821,
                  "end": 2.844
                }
              ]
            },
            {
              "word": "got",
              "start": 2.926,
              "end": 3.088,
              "characters": [
                {
                  "character": "g",
                  "start": 2.926,
                  "end": 2.961
                },
                {
                  "character": "o",
                  "start": 2.961,
                  "end": 3.042
                },
                {
                  "character": "t",
                  "start": 3.042,
                  "end": 3.088
                }
              ]
            },
            {
              "word": "married",
              "start": 3.158,
              "end": 3.518,
              "characters": [
                {
                  "character": "m",
                  "start": 3.158,
                  "end": 3.204
                },
                {
                  "character": "a",
                  "start": 3.204,
                  "end": 3.286
                },
                {
                  "character": "r",
                  "start": 3.286,
                  "end": 3.344
                },
                {
                  "character": "r",
                  "start": 3.344,
                  "end": 3.39
                },
                {
                  "character": "i",
                  "start": 3.39,
                  "end": 3.437
                },
                {
                  "character": "e",
                  "start": 3.437,
                  "end": 3.495
                },
                {
                  "character": "d",
                  "start": 3.495,
                  "end": 3.518
                }
              ]
            },
            {
              "word": "and",
              "start": 3.553,
              "end": 3.622,
              "characters": [
                {
                  "character": "a",
                  "start": 3.553,
                  "end": 3.576
                },
                {
                  "character": "n",
                  "start": 3.576,
                  "end": 3.599
                },
                {
                  "character": "d",
                  "start": 3.599,
                  "end": 3.622
                }
              ]
            },
            {
              "word": "had",
              "start": 3.68,
              "end": 3.82,
              "characters": [
                {
                  "character": "h",
                  "start": 3.68,
                  "end": 3.727
                },
                {
                  "character": "a",
                  "start": 3.727,
                  "end": 3.773
                },
                {
                  "character": "d",
                  "start": 3.773,
                  "end": 3.82
                }
              ]
            },
            {
              "word": "her",
              "start": 3.866,
              "end": 3.936,
              "characters": [
                {
                  "character": "h",
                  "start": 3.866,
                  "end": 3.889
                },
                {
                  "character": "e",
                  "start": 3.889,
                  "end": 3.913
                },
                {
                  "character": "r",
                  "start": 3.913,
                  "end": 3.936
                }
              ]
            },
            {
              "word": "very",
              "start": 3.982,
              "end": 4.203,
              "characters": [
                {
                  "character": "v",
                  "start": 3.982,
                  "end": 4.029
                },
                {
                  "character": "e",
                  "start": 4.029,
                  "end": 4.087
                },
                {
                  "character": "r",
                  "start": 4.087,
                  "end": 4.156
                },
                {
                  "character": "y",
                  "start": 4.156,
                  "end": 4.203
                }
              ]
            },
            {
              "word": "early",
              "start": 4.272,
              "end": 4.54,
              "characters": [
                {
                  "character": "e",
                  "start": 4.272,
                  "end": 4.319
                },
                {
                  "character": "a",
                  "start": 4.319,
                  "end": 4.365
                },
                {
                  "character": "r",
                  "start": 4.365,
                  "end": 4.423
                },
                {
                  "character": "l",
                  "start": 4.423,
                  "end": 4.493
                },
                {
                  "character": "y",
                  "start": 4.493,
                  "end": 4.54
                }
              ]
            },
            {
              "word": "in",
              "start": 4.586,
              "end": 4.644,
              "characters": [
                {
                  "character": "i",
                  "start": 4.586,
                  "end": 4.609
                },
                {
                  "character": "n",
                  "start": 4.609,
                  "end": 4.644
                }
              ]
            },
            {
              "word": "my",
              "start": 4.702,
              "end": 4.818,
              "characters": [
                {
                  "character": "m",
                  "start": 4.702,
                  "end": 4.748
                },
                {
                  "character": "y",
                  "start": 4.748,
                  "end": 4.818
                }
              ]
            },
            {
              "word": "20s,",
              "start": 4.911,
              "end": 5.515,
              "characters": [
                {
                  "character": "2",
                  "start": 4.911,
                  "end": 5.062
                },
                {
                  "character": "0",
                  "start": 5.062,
                  "end": 5.271
                },
                {
                  "character": "s",
                  "start": 5.271,
                  "end": 5.422
                },
                {
                  "character": ",",
                  "start": 5.422,
                  "end": 5.515
                }
              ]
            },
            {
              "word": "at",
              "start": 5.666,
              "end": 5.817,
              "characters": [
                {
                  "character": "a",
                  "start": 5.666,
                  "end": 5.782
                },
                {
                  "character": "t",
                  "start": 5.782,
                  "end": 5.817
                }
              ]
            },
            {
              "word": "that",
              "start": 5.875,
              "end": 6.072,
              "characters": [
                {
                  "character": "t",
                  "start": 5.875,
                  "end": 5.898
                },
                {
                  "character": "h",
                  "start": 5.898,
                  "end": 5.968
                },
                {
                  "character": "a",
                  "start": 5.968,
                  "end": 6.026
                },
                {
                  "character": "t",
                  "start": 6.026,
                  "end": 6.072
                }
              ]
            },
            {
              "word": "time,",
              "start": 6.13,
              "end": 6.571,
              "characters": [
                {
                  "character": "t",
                  "start": 6.13,
                  "end": 6.2
                },
                {
                  "character": "i",
                  "start": 6.2,
                  "end": 6.351
                },
                {
                  "character": "m",
                  "start": 6.351,
                  "end": 6.42
                },
                {
                  "character": "e",
                  "start": 6.42,
                  "end": 6.536
                },
                {
                  "character": ",",
                  "start": 6.536,
                  "end": 6.571
                }
              ]
            },
            {
              "word": "none",
              "start": 6.722,
              "end": 6.896,
              "characters": [
                {
                  "character": "n",
                  "start": 6.722,
                  "end": 6.792
                },
                {
                  "character": "o",
                  "start": 6.792,
                  "end": 6.838
                },
                {
                  "character": "n",
                  "start": 6.838,
                  "end": 6.873
                },
                {
                  "character": "e",
                  "start": 6.873,
                  "end": 6.896
                }
              ]
            },
            {
              "word": "of",
              "start": 6.92,
              "end": 6.966,
              "characters": [
                {
                  "character": "o",
                  "start": 6.92,
                  "end": 6.943
                },
                {
                  "character": "f",
                  "start": 6.943,
                  "end": 6.966
                }
              ]
            },
            {
              "word": "my",
              "start": 7.012,
              "end": 7.094,
              "characters": [
                {
                  "character": "m",
                  "start": 7.012,
                  "end": 7.047
                },
                {
                  "character": "y",
                  "start": 7.047,
                  "end": 7.094
                }
              ]
            },
            {
              "word": "friends",
              "start": 7.163,
              "end": 7.43,
              "characters": [
                {
                  "character": "f",
                  "start": 7.163,
                  "end": 7.21
                },
                {
                  "character": "r",
                  "start": 7.21,
                  "end": 7.256
                },
                {
                  "character": "i",
                  "start": 7.256,
                  "end": 7.291
                },
                {
                  "character": "e",
                  "start": 7.291,
                  "end": 7.326
                },
                {
                  "character": "n",
                  "start": 7.326,
                  "end": 7.349
                },
                {
                  "character": "d",
                  "start": 7.349,
                  "end": 7.396
                },
                {
                  "character": "s",
                  "start": 7.396,
                  "end": 7.43
                }
              ]
            },
            {
              "word": "had",
              "start": 7.465,
              "end": 7.605,
              "characters": [
                {
                  "character": "h",
                  "start": 7.465,
                  "end": 7.5
                },
                {
                  "character": "a",
                  "start": 7.5,
                  "end": 7.558
                },
                {
                  "character": "d",
                  "start": 7.558,
                  "end": 7.605
                }
              ]
            },
            {
              "word": "kids.",
              "start": 7.686,
              "end": 8.359,
              "characters": [
                {
                  "character": "k",
                  "start": 7.686,
                  "end": 7.744
                },
                {
                  "character": "i",
                  "start": 7.744,
                  "end": 7.918
                },
                {
                  "character": "d",
                  "start": 7.918,
                  "end": 8.034
                },
                {
                  "character": "s",
                  "start": 8.034,
                  "end": 8.185
                },
                {
                  "character": ".",
                  "start": 8.185,
                  "end": 8.359
                }
              ]
            },
            {
              "word": "My",
              "start": 8.87,
              "end": 9.009,
              "characters": [
                {
                  "character": "M",
                  "start": 8.87,
                  "end": 8.951
                },
                {
                  "character": "y",
                  "start": 8.951,
                  "end": 9.009
                }
              ]
            },
            {
              "word": "baby",
              "start": 9.079,
              "end": 9.334,
              "characters": [
                {
                  "character": "b",
                  "start": 9.079,
                  "end": 9.114
                },
                {
                  "character": "a",
                  "start": 9.114,
                  "end": 9.207
                },
                {
                  "character": "b",
                  "start": 9.207,
                  "end": 9.288
                },
                {
                  "character": "y",
                  "start": 9.288,
                  "end": 9.334
                }
              ]
            },
            {
              "word": "was",
              "start": 9.392,
              "end": 9.532,
              "characters": [
                {
                  "character": "w",
                  "start": 9.392,
                  "end": 9.439
                },
                {
                  "character": "a",
                  "start": 9.439,
                  "end": 9.485
                },
                {
                  "character": "s",
                  "start": 9.485,
                  "end": 9.532
                }
              ]
            },
            {
              "word": "the",
              "start": 9.601,
              "end": 9.683,
              "characters": [
                {
                  "character": "t",
                  "start": 9.601,
                  "end": 9.625
                },
                {
                  "character": "h",
                  "start": 9.625,
                  "end": 9.659
                },
                {
                  "character": "e",
                  "start": 9.659,
                  "end": 9.683
                }
              ]
            },
            {
              "word": "sweetheart",
              "start": 9.741,
              "end": 10.263,
              "characters": [
                {
                  "character": "s",
                  "start": 9.741,
                  "end": 9.799
                },
                {
                  "character": "w",
                  "start": 9.799,
                  "end": 9.857
                },
                {
                  "character": "e",
                  "start": 9.857,
                  "end": 9.927
                },
                {
                  "character": "e",
                  "start": 9.927,
                  "end": 9.996
                },
                {
                  "character": "t",
                  "start": 9.996,
                  "end": 10.054
                },
                {
                  "character": "h",
                  "start": 10.054,
                  "end": 10.077
                },
                {
                  "character": "e",
                  "start": 10.077,
                  "end": 10.124
                },
                {
                  "character": "a",
                  "start": 10.124,
                  "end": 10.17
                },
                {
                  "character": "r",
                  "start": 10.17,
                  "end": 10.217
                },
                {
                  "character": "t",
                  "start": 10.217,
                  "end": 10.263
                }
              ]
            },
            {
              "word": "for",
              "start": 10.31,
              "end": 10.414,
              "characters": [
                {
                  "character": "f",
                  "start": 10.31,
                  "end": 10.344
                },
                {
                  "character": "o",
                  "start": 10.344,
                  "end": 10.379
                },
                {
                  "character": "r",
                  "start": 10.379,
                  "end": 10.414
                }
              ]
            },
            {
              "word": "all",
              "start": 10.472,
              "end": 10.612,
              "characters": [
                {
                  "character": "a",
                  "start": 10.472,
                  "end": 10.519
                },
                {
                  "character": "l",
                  "start": 10.519,
                  "end": 10.565
                },
                {
                  "character": "l",
                  "start": 10.565,
                  "end": 10.612
                }
              ]
            },
            {
              "word": "the",
              "start": 10.67,
              "end": 10.739,
              "characters": [
                {
                  "character": "t",
                  "start": 10.67,
                  "end": 10.693
                },
                {
                  "character": "h",
                  "start": 10.693,
                  "end": 10.716
                },
                {
                  "character": "e",
                  "start": 10.716,
                  "end": 10.739
                }
              ]
            },
            {
              "word": "aunties",
              "start": 10.82,
              "end": 11.285,
              "characters": [
                {
                  "character": "a",
                  "start": 10.82,
                  "end": 10.879
                },
                {
                  "character": "u",
                  "start": 10.879,
                  "end": 10.925
                },
                {
                  "character": "n",
                  "start": 10.925,
                  "end": 10.983
                },
                {
                  "character": "t",
                  "start": 10.983,
                  "end": 11.053
                },
                {
                  "character": "i",
                  "start": 11.053,
                  "end": 11.134
                },
                {
                  "character": "e",
                  "start": 11.134,
                  "end": 11.204
                },
                {
                  "character": "s",
                  "start": 11.204,
                  "end": 11.285
                }
              ]
            },
            {
              "word": "-",
              "start": 11.459,
              "end": 11.494,
              "characters": [
                {
                  "character": "-",
                  "start": 11.459,
                  "end": 11.494
                }
              ]
            },
            {
              "word": "mom’s",
              "start": 11.773,
              "end": 12.144,
              "characters": [
                {
                  "character": "m",
                  "start": 11.773,
                  "end": 11.831
                },
                {
                  "character": "o",
                  "start": 11.831,
                  "end": 12.005
                },
                {
                  "character": "m",
                  "start": 12.005,
                  "end": 12.051
                },
                {
                  "character": "’",
                  "start": 12.051,
                  "end": 12.121
                },
                {
                  "character": "s",
                  "start": 12.121,
                  "end": 12.144
                }
              ]
            },
            {
              "word": "three",
              "start": 12.214,
              "end": 12.492,
              "characters": [
                {
                  "character": "t",
                  "start": 12.214,
                  "end": 12.237
                },
                {
                  "character": "h",
                  "start": 12.237,
                  "end": 12.307
                },
                {
                  "character": "r",
                  "start": 12.307,
                  "end": 12.365
                },
                {
                  "character": "e",
                  "start": 12.365,
                  "end": 12.434
                },
                {
                  "character": "e",
                  "start": 12.434,
                  "end": 12.492
                }
              ]
            },
            {
              "word": "close",
              "start": 12.55,
              "end": 12.875,
              "characters": [
                {
                  "character": "c",
                  "start": 12.55,
                  "end": 12.608
                },
                {
                  "character": "l",
                  "start": 12.608,
                  "end": 12.678
                },
                {
                  "character": "o",
                  "start": 12.678,
                  "end": 12.771
                },
                {
                  "character": "s",
                  "start": 12.771,
                  "end": 12.829
                },
                {
                  "character": "e",
                  "start": 12.829,
                  "end": 12.875
                }
              ]
            },
            {
              "word": "friends.",
              "start": 12.934,
              "end": 13.607,
              "characters": [
                {
                  "character": "f",
                  "start": 12.934,
                  "end": 12.992
                },
                {
                  "character": "r",
                  "start": 12.992,
                  "end": 13.073
                },
                {
                  "character": "i",
                  "start": 13.073,
                  "end": 13.131
                },
                {
                  "character": "e",
                  "start": 13.131,
                  "end": 13.189
                },
                {
                  "character": "n",
                  "start": 13.189,
                  "end": 13.235
                },
                {
                  "character": "d",
                  "start": 13.235,
                  "end": 13.305
                },
                {
                  "character": "s",
                  "start": 13.305,
                  "end": 13.456
                },
                {
                  "character": ".",
                  "start": 13.456,
                  "end": 13.607
                }
              ]
            },
            {
              "word": "We",
              "start": 13.99,
              "end": 14.129,
              "characters": [
                {
                  "character": "W",
                  "start": 13.99,
                  "end": 14.06
                },
                {
                  "character": "e",
                  "start": 14.06,
                  "end": 14.129
                }
              ]
            },
            {
              "word": "threw",
              "start": 14.187,
              "end": 14.408,
              "characters": [
                {
                  "character": "t",
                  "start": 14.187,
                  "end": 14.211
                },
                {
                  "character": "h",
                  "start": 14.211,
                  "end": 14.257
                },
                {
                  "character": "r",
                  "start": 14.257,
                  "end": 14.303
                },
                {
                  "character": "e",
                  "start": 14.303,
                  "end": 14.362
                },
                {
                  "character": "w",
                  "start": 14.362,
                  "end": 14.408
                }
              ]
            },
            {
              "word": "her",
              "start": 14.478,
              "end": 14.582,
              "characters": [
                {
                  "character": "h",
                  "start": 14.478,
                  "end": 14.512
                },
                {
                  "character": "e",
                  "start": 14.512,
                  "end": 14.547
                },
                {
                  "character": "r",
                  "start": 14.547,
                  "end": 14.582
                }
              ]
            },
            {
              "word": "a",
              "start": 14.64,
              "end": 14.663,
              "characters": [
                {
                  "character": "a",
                  "start": 14.64,
                  "end": 14.663
                }
              ]
            },
            {
              "word": "party.",
              "start": 14.733,
              "end": 15.279,
              "characters": [
                {
                  "character": "p",
                  "start": 14.733,
                  "end": 14.791
                },
                {
                  "character": "a",
                  "start": 14.791,
                  "end": 14.872
                },
                {
                  "character": "r",
                  "start": 14.872,
                  "end": 14.93
                },
                {
                  "character": "t",
                  "start": 14.93,
                  "end": 15.012
                },
                {
                  "character": "y",
                  "start": 15.012,
                  "end": 15.128
                },
                {
                  "character": ".",
                  "start": 15.128,
                  "end": 15.279
                }
              ]
            },
            {
              "word": "",
              "start": 15.279,
              "end": 15.488,
              "characters": []
            },
            {
              "word": "It",
              "start": 15.488,
              "end": 15.627,
              "characters": [
                {
                  "character": "I",
                  "start": 15.488,
                  "end": 15.569
                },
                {
                  "character": "t",
                  "start": 15.569,
                  "end": 15.627
                }
              ]
            },
            {
              "word": "was",
              "start": 15.673,
              "end": 15.789,
              "characters": [
                {
                  "character": "w",
                  "start": 15.673,
                  "end": 15.708
                },
                {
                  "character": "a",
                  "start": 15.708,
                  "end": 15.743
                },
                {
                  "character": "s",
                  "start": 15.743,
                  "end": 15.789
                }
              ]
            },
            {
              "word": "fun.",
              "start": 15.906,
              "end": 16.498,
              "characters": [
                {
                  "character": "f",
                  "start": 15.906,
                  "end": 16.022
                },
                {
                  "character": "u",
                  "start": 16.022,
                  "end": 16.196
                },
                {
                  "character": "n",
                  "start": 16.196,
                  "end": 16.37
                },
                {
                  "character": ".",
                  "start": 16.37,
                  "end": 16.498
                }
              ]
            },
            {
              "word": "Each",
              "start": 17.101,
              "end": 17.322,
              "characters": [
                {
                  "character": "E",
                  "start": 17.101,
                  "end": 17.183
                },
                {
                  "character": "a",
                  "start": 17.183,
                  "end": 17.241
                },
                {
                  "character": "c",
                  "start": 17.241,
                  "end": 17.287
                },
                {
                  "character": "h",
                  "start": 17.287,
                  "end": 17.322
                }
              ]
            },
            {
              "word": "auntie",
              "start": 17.38,
              "end": 17.647,
              "characters": [
                {
                  "character": "a",
                  "start": 17.38,
                  "end": 17.415
                },
                {
                  "character": "u",
                  "start": 17.415,
                  "end": 17.461
                },
                {
                  "character": "n",
                  "start": 17.461,
                  "end": 17.508
                },
                {
                  "character": "t",
                  "start": 17.508,
                  "end": 17.577
                },
                {
                  "character": "i",
                  "start": 17.577,
                  "end": 17.612
                },
                {
                  "character": "e",
                  "start": 17.612,
                  "end": 17.647
                }
              ]
            },
            {
              "word": "got",
              "start": 17.693,
              "end": 17.856,
              "characters": [
                {
                  "character": "g",
                  "start": 17.693,
                  "end": 17.74
                },
                {
                  "character": "o",
                  "start": 17.74,
                  "end": 17.81
                },
                {
                  "character": "t",
                  "start": 17.81,
                  "end": 17.856
                }
              ]
            },
            {
              "word": "her",
              "start": 17.891,
              "end": 17.972,
              "characters": [
                {
                  "character": "h",
                  "start": 17.891,
                  "end": 17.914
                },
                {
                  "character": "e",
                  "start": 17.914,
                  "end": 17.937
                },
                {
                  "character": "r",
                  "start": 17.937,
                  "end": 17.972
                }
              ]
            },
            {
              "word": "a",
              "start": 18.019,
              "end": 18.042,
              "characters": [
                {
                  "character": "a",
                  "start": 18.019,
                  "end": 18.042
                }
              ]
            },
            {
              "word": "present.",
              "start": 18.1,
              "end": 18.68,
              "characters": [
                {
                  "character": "p",
                  "start": 18.1,
                  "end": 18.135
                },
                {
                  "character": "r",
                  "start": 18.135,
                  "end": 18.204
                },
                {
                  "character": "e",
                  "start": 18.204,
                  "end": 18.274
                },
                {
                  "character": "s",
                  "start": 18.274,
                  "end": 18.332
                },
                {
                  "character": "e",
                  "start": 18.332,
                  "end": 18.402
                },
                {
                  "character": "n",
                  "start": 18.402,
                  "end": 18.437
                },
                {
                  "character": "t",
                  "start": 18.437,
                  "end": 18.529
                },
                {
                  "character": ".",
                  "start": 18.529,
                  "end": 18.68
                }
              ]
            },
            {
              "word": "They",
              "start": 18.924,
              "end": 19.098,
              "characters": [
                {
                  "character": "T",
                  "start": 18.924,
                  "end": 18.971
                },
                {
                  "character": "h",
                  "start": 18.971,
                  "end": 19.017
                },
                {
                  "character": "e",
                  "start": 19.017,
                  "end": 19.063
                },
                {
                  "character": "y",
                  "start": 19.063,
                  "end": 19.098
                }
              ]
            },
            {
              "word": "handed",
              "start": 19.156,
              "end": 19.481,
              "characters": [
                {
                  "character": "h",
                  "start": 19.156,
                  "end": 19.191
                },
                {
                  "character": "a",
                  "start": 19.191,
                  "end": 19.261
                },
                {
                  "character": "n",
                  "start": 19.261,
                  "end": 19.307
                },
                {
                  "character": "d",
                  "start": 19.307,
                  "end": 19.377
                },
                {
                  "character": "e",
                  "start": 19.377,
                  "end": 19.458
                },
                {
                  "character": "d",
                  "start": 19.458,
                  "end": 19.481
                }
              ]
            },
            {
              "word": "it",
              "start": 19.528,
              "end": 19.609,
              "characters": [
                {
                  "character": "i",
                  "start": 19.528,
                  "end": 19.563
                },
                {
                  "character": "t",
                  "start": 19.563,
                  "end": 19.609
                }
              ]
            },
            {
              "word": "to",
              "start": 19.644,
              "end": 19.714,
              "characters": [
                {
                  "character": "t",
                  "start": 19.644,
                  "end": 19.679
                },
                {
                  "character": "o",
                  "start": 19.679,
                  "end": 19.714
                }
              ]
            },
            {
              "word": "her",
              "start": 19.795,
              "end": 19.888,
              "characters": [
                {
                  "character": "h",
                  "start": 19.795,
                  "end": 19.83
                },
                {
                  "character": "e",
                  "start": 19.83,
                  "end": 19.853
                },
                {
                  "character": "r",
                  "start": 19.853,
                  "end": 19.888
                }
              ]
            },
            {
              "word": "one",
              "start": 19.969,
              "end": 20.155,
              "characters": [
                {
                  "character": "o",
                  "start": 19.969,
                  "end": 20.027
                },
                {
                  "character": "n",
                  "start": 20.027,
                  "end": 20.108
                },
                {
                  "character": "e",
                  "start": 20.108,
                  "end": 20.155
                }
              ]
            },
            {
              "word": "by",
              "start": 20.201,
              "end": 20.352,
              "characters": [
                {
                  "character": "b",
                  "start": 20.201,
                  "end": 20.259
                },
                {
                  "character": "y",
                  "start": 20.259,
                  "end": 20.352
                }
              ]
            },
            {
              "word": "one",
              "start": 20.445,
              "end": 20.654,
              "characters": [
                {
                  "character": "o",
                  "start": 20.445,
                  "end": 20.538
                },
                {
                  "character": "n",
                  "start": 20.538,
                  "end": 20.608
                },
                {
                  "character": "e",
                  "start": 20.608,
                  "end": 20.654
                }
              ]
            },
            {
              "word": "so",
              "start": 20.7,
              "end": 20.817,
              "characters": [
                {
                  "character": "s",
                  "start": 20.7,
                  "end": 20.747
                },
                {
                  "character": "o",
                  "start": 20.747,
                  "end": 20.817
                }
              ]
            },
            {
              "word": "she",
              "start": 20.886,
              "end": 21.002,
              "characters": [
                {
                  "character": "s",
                  "start": 20.886,
                  "end": 20.921
                },
                {
                  "character": "h",
                  "start": 20.921,
                  "end": 20.967
                },
                {
                  "character": "e",
                  "start": 20.967,
                  "end": 21.002
                }
              ]
            },
            {
              "word": "opened",
              "start": 21.084,
              "end": 21.42,
              "characters": [
                {
                  "character": "o",
                  "start": 21.084,
                  "end": 21.2
                },
                {
                  "character": "p",
                  "start": 21.2,
                  "end": 21.258
                },
                {
                  "character": "e",
                  "start": 21.258,
                  "end": 21.304
                },
                {
                  "character": "n",
                  "start": 21.304,
                  "end": 21.339
                },
                {
                  "character": "e",
                  "start": 21.339,
                  "end": 21.397
                },
                {
                  "character": "d",
                  "start": 21.397,
                  "end": 21.42
                }
              ]
            },
            {
              "word": "it",
              "start": 21.467,
              "end": 21.536,
              "characters": [
                {
                  "character": "i",
                  "start": 21.467,
                  "end": 21.502
                },
                {
                  "character": "t",
                  "start": 21.502,
                  "end": 21.536
                }
              ]
            },
            {
              "word": "and",
              "start": 21.583,
              "end": 21.676,
              "characters": [
                {
                  "character": "a",
                  "start": 21.583,
                  "end": 21.606
                },
                {
                  "character": "n",
                  "start": 21.606,
                  "end": 21.641
                },
                {
                  "character": "d",
                  "start": 21.641,
                  "end": 21.676
                }
              ]
            },
            {
              "word": "got",
              "start": 21.745,
              "end": 21.92,
              "characters": [
                {
                  "character": "g",
                  "start": 21.745,
                  "end": 21.792
                },
                {
                  "character": "o",
                  "start": 21.792,
                  "end": 21.873
                },
                {
                  "character": "t",
                  "start": 21.873,
                  "end": 21.92
                }
              ]
            },
            {
              "word": "excited.",
              "start": 21.966,
              "end": 22.686,
              "characters": [
                {
                  "character": "e",
                  "start": 21.966,
                  "end": 22.001
                },
                {
                  "character": "x",
                  "start": 22.001,
                  "end": 22.07
                },
                {
                  "character": "c",
                  "start": 22.07,
                  "end": 22.152
                },
                {
                  "character": "i",
                  "start": 22.152,
                  "end": 22.268
                },
                {
                  "character": "t",
                  "start": 22.268,
                  "end": 22.337
                },
                {
                  "character": "e",
                  "start": 22.337,
                  "end": 22.419
                },
                {
                  "character": "d",
                  "start": 22.419,
                  "end": 22.512
                },
                {
                  "character": ".",
                  "start": 22.512,
                  "end": 22.686
                }
              ]
            },
            {
              "word": "To",
              "start": 23.382,
              "end": 23.498,
              "characters": [
                {
                  "character": "T",
                  "start": 23.382,
                  "end": 23.452
                },
                {
                  "character": "o",
                  "start": 23.452,
                  "end": 23.498
                }
              ]
            },
            {
              "word": "the",
              "start": 23.568,
              "end": 23.638,
              "characters": [
                {
                  "character": "t",
                  "start": 23.568,
                  "end": 23.591
                },
                {
                  "character": "h",
                  "start": 23.591,
                  "end": 23.615
                },
                {
                  "character": "e",
                  "start": 23.615,
                  "end": 23.638
                }
              ]
            },
            {
              "word": "last",
              "start": 23.696,
              "end": 23.986,
              "characters": [
                {
                  "character": "l",
                  "start": 23.696,
                  "end": 23.742
                },
                {
                  "character": "a",
                  "start": 23.742,
                  "end": 23.858
                },
                {
                  "character": "s",
                  "start": 23.858,
                  "end": 23.94
                },
                {
                  "character": "t",
                  "start": 23.94,
                  "end": 23.986
                }
              ]
            },
            {
              "word": "auntie,",
              "start": 24.056,
              "end": 24.416,
              "characters": [
                {
                  "character": "a",
                  "start": 24.056,
                  "end": 24.102
                },
                {
                  "character": "u",
                  "start": 24.102,
                  "end": 24.16
                },
                {
                  "character": "n",
                  "start": 24.16,
                  "end": 24.218
                },
                {
                  "character": "t",
                  "start": 24.218,
                  "end": 24.288
                },
                {
                  "character": "i",
                  "start": 24.288,
                  "end": 24.346
                },
                {
                  "character": "e",
                  "start": 24.346,
                  "end": 24.392
                },
                {
                  "character": ",",
                  "start": 24.392,
                  "end": 24.416
                }
              ]
            },
            {
              "word": "before",
              "start": 24.439,
              "end": 24.741,
              "characters": [
                {
                  "character": "b",
                  "start": 24.439,
                  "end": 24.474
                },
                {
                  "character": "e",
                  "start": 24.474,
                  "end": 24.543
                },
                {
                  "character": "f",
                  "start": 24.543,
                  "end": 24.601
                },
                {
                  "character": "o",
                  "start": 24.601,
                  "end": 24.648
                },
                {
                  "character": "r",
                  "start": 24.648,
                  "end": 24.706
                },
                {
                  "character": "e",
                  "start": 24.706,
                  "end": 24.741
                }
              ]
            },
            {
              "word": "she",
              "start": 24.776,
              "end": 24.892,
              "characters": [
                {
                  "character": "s",
                  "start": 24.776,
                  "end": 24.81
                },
                {
                  "character": "h",
                  "start": 24.81,
                  "end": 24.868
                },
                {
                  "character": "e",
                  "start": 24.868,
                  "end": 24.892
                }
              ]
            },
            {
              "word": "handed",
              "start": 24.973,
              "end": 25.298,
              "characters": [
                {
                  "character": "h",
                  "start": 24.973,
                  "end": 25.008
                },
                {
                  "character": "a",
                  "start": 25.008,
                  "end": 25.089
                },
                {
                  "character": "n",
                  "start": 25.089,
                  "end": 25.135
                },
                {
                  "character": "d",
                  "start": 25.135,
                  "end": 25.205
                },
                {
                  "character": "e",
                  "start": 25.205,
                  "end": 25.275
                },
                {
                  "character": "d",
                  "start": 25.275,
                  "end": 25.298
                }
              ]
            },
            {
              "word": "the",
              "start": 25.333,
              "end": 25.402,
              "characters": [
                {
                  "character": "t",
                  "start": 25.333,
                  "end": 25.356
                },
                {
                  "character": "h",
                  "start": 25.356,
                  "end": 25.379
                },
                {
                  "character": "e",
                  "start": 25.379,
                  "end": 25.402
                }
              ]
            },
            {
              "word": "present",
              "start": 25.449,
              "end": 25.786,
              "characters": [
                {
                  "character": "p",
                  "start": 25.449,
                  "end": 25.495
                },
                {
                  "character": "r",
                  "start": 25.495,
                  "end": 25.542
                },
                {
                  "character": "e",
                  "start": 25.542,
                  "end": 25.6
                },
                {
                  "character": "s",
                  "start": 25.6,
                  "end": 25.658
                },
                {
                  "character": "e",
                  "start": 25.658,
                  "end": 25.716
                },
                {
                  "character": "n",
                  "start": 25.716,
                  "end": 25.751
                },
                {
                  "character": "t",
                  "start": 25.751,
                  "end": 25.786
                }
              ]
            },
            {
              "word": "to",
              "start": 25.82,
              "end": 25.867,
              "characters": [
                {
                  "character": "t",
                  "start": 25.82,
                  "end": 25.844
                },
                {
                  "character": "o",
                  "start": 25.844,
                  "end": 25.867
                }
              ]
            },
            {
              "word": "my",
              "start": 25.948,
              "end": 26.053,
              "characters": [
                {
                  "character": "m",
                  "start": 25.948,
                  "end": 25.995
                },
                {
                  "character": "y",
                  "start": 25.995,
                  "end": 26.053
                }
              ]
            },
            {
              "word": "daughter,",
              "start": 26.122,
              "end": 26.645,
              "characters": [
                {
                  "character": "d",
                  "start": 26.122,
                  "end": 26.169
                },
                {
                  "character": "a",
                  "start": 26.169,
                  "end": 26.25
                },
                {
                  "character": "u",
                  "start": 26.25,
                  "end": 26.285
                },
                {
                  "character": "g",
                  "start": 26.285,
                  "end": 26.32
                },
                {
                  "character": "h",
                  "start": 26.32,
                  "end": 26.343
                },
                {
                  "character": "t",
                  "start": 26.343,
                  "end": 26.378
                },
                {
                  "character": "e",
                  "start": 26.378,
                  "end": 26.424
                },
                {
                  "character": "r",
                  "start": 26.424,
                  "end": 26.494
                },
                {
                  "character": ",",
                  "start": 26.494,
                  "end": 26.645
                }
              ]
            },
            {
              "word": "she",
              "start": 26.819,
              "end": 26.958,
              "characters": [
                {
                  "character": "s",
                  "start": 26.819,
                  "end": 26.877
                },
                {
                  "character": "h",
                  "start": 26.877,
                  "end": 26.935
                },
                {
                  "character": "e",
                  "start": 26.935,
                  "end": 26.958
                }
              ]
            },
            {
              "word": "‘demanded’",
              "start": 26.981,
              "end": 27.597,
              "characters": [
                {
                  "character": "‘",
                  "start": 26.981,
                  "end": 27.016
                },
                {
                  "character": "d",
                  "start": 27.016,
                  "end": 27.063
                },
                {
                  "character": "e",
                  "start": 27.063,
                  "end": 27.132
                },
                {
                  "character": "m",
                  "start": 27.132,
                  "end": 27.202
                },
                {
                  "character": "a",
                  "start": 27.202,
                  "end": 27.318
                },
                {
                  "character": "n",
                  "start": 27.318,
                  "end": 27.365
                },
                {
                  "character": "d",
                  "start": 27.365,
                  "end": 27.446
                },
                {
                  "character": "e",
                  "start": 27.446,
                  "end": 27.527
                },
                {
                  "character": "d",
                  "start": 27.527,
                  "end": 27.55
                },
                {
                  "character": "’",
                  "start": 27.55,
                  "end": 27.597
                }
              ]
            },
            {
              "word": "my",
              "start": 27.632,
              "end": 27.759,
              "characters": [
                {
                  "character": "m",
                  "start": 27.632,
                  "end": 27.69
                },
                {
                  "character": "y",
                  "start": 27.69,
                  "end": 27.759
                }
              ]
            },
            {
              "word": "girl,",
              "start": 27.852,
              "end": 28.351,
              "characters": [
                {
                  "character": "g",
                  "start": 27.852,
                  "end": 27.899
                },
                {
                  "character": "i",
                  "start": 27.899,
                  "end": 27.992
                },
                {
                  "character": "r",
                  "start": 27.992,
                  "end": 28.061
                },
                {
                  "character": "l",
                  "start": 28.061,
                  "end": 28.177
                },
                {
                  "character": ",",
                  "start": 28.177,
                  "end": 28.351
                }
              ]
            },
            {
              "word": "“Say",
              "start": 28.595,
              "end": 28.967,
              "characters": [
                {
                  "character": "“",
                  "start": 28.595,
                  "end": 28.711
                },
                {
                  "character": "S",
                  "start": 28.711,
                  "end": 28.804
                },
                {
                  "character": "a",
                  "start": 28.804,
                  "end": 28.92
                },
                {
                  "character": "y",
                  "start": 28.92,
                  "end": 28.967
                }
              ]
            },
            {
              "word": "‘please’",
              "start": 29.002,
              "end": 29.582,
              "characters": [
                {
                  "character": "‘",
                  "start": 29.002,
                  "end": 29.048
                },
                {
                  "character": "p",
                  "start": 29.048,
                  "end": 29.129
                },
                {
                  "character": "l",
                  "start": 29.129,
                  "end": 29.211
                },
                {
                  "character": "e",
                  "start": 29.211,
                  "end": 29.303
                },
                {
                  "character": "a",
                  "start": 29.303,
                  "end": 29.385
                },
                {
                  "character": "s",
                  "start": 29.385,
                  "end": 29.501
                },
                {
                  "character": "e",
                  "start": 29.501,
                  "end": 29.547
                },
                {
                  "character": "’",
                  "start": 29.547,
                  "end": 29.582
                }
              ]
            },
            {
              "word": "and",
              "start": 29.617,
              "end": 29.791,
              "characters": [
                {
                  "character": "a",
                  "start": 29.617,
                  "end": 29.675
                },
                {
                  "character": "n",
                  "start": 29.675,
                  "end": 29.745
                },
                {
                  "character": "d",
                  "start": 29.745,
                  "end": 29.791
                }
              ]
            },
            {
              "word": "bow,",
              "start": 29.884,
              "end": 30.256,
              "characters": [
                {
                  "character": "b",
                  "start": 29.884,
                  "end": 29.954
                },
                {
                  "character": "o",
                  "start": 29.954,
                  "end": 30.128
                },
                {
                  "character": "w",
                  "start": 30.128,
                  "end": 30.198
                },
                {
                  "character": ",",
                  "start": 30.198,
                  "end": 30.256
                }
              ]
            },
            {
              "word": "so",
              "start": 30.291,
              "end": 30.43,
              "characters": [
                {
                  "character": "s",
                  "start": 30.291,
                  "end": 30.349
                },
                {
                  "character": "o",
                  "start": 30.349,
                  "end": 30.43
                }
              ]
            },
            {
              "word": "auntie",
              "start": 30.523,
              "end": 30.813,
              "characters": [
                {
                  "character": "a",
                  "start": 30.523,
                  "end": 30.581
                },
                {
                  "character": "u",
                  "start": 30.581,
                  "end": 30.639
                },
                {
                  "character": "n",
                  "start": 30.639,
                  "end": 30.685
                },
                {
                  "character": "t",
                  "start": 30.685,
                  "end": 30.743
                },
                {
                  "character": "i",
                  "start": 30.743,
                  "end": 30.79
                },
                {
                  "character": "e",
                  "start": 30.79,
                  "end": 30.813
                }
              ]
            },
            {
              "word": "will",
              "start": 30.848,
              "end": 30.999,
              "characters": [
                {
                  "character": "w",
                  "start": 30.848,
                  "end": 30.894
                },
                {
                  "character": "i",
                  "start": 30.894,
                  "end": 30.941
                },
                {
                  "character": "l",
                  "start": 30.941,
                  "end": 30.976
                },
                {
                  "character": "l",
                  "start": 30.976,
                  "end": 30.999
                }
              ]
            },
            {
              "word": "give",
              "start": 31.045,
              "end": 31.185,
              "characters": [
                {
                  "character": "g",
                  "start": 31.045,
                  "end": 31.08
                },
                {
                  "character": "i",
                  "start": 31.08,
                  "end": 31.115
                },
                {
                  "character": "v",
                  "start": 31.115,
                  "end": 31.15
                },
                {
                  "character": "e",
                  "start": 31.15,
                  "end": 31.185
                }
              ]
            },
            {
              "word": "you",
              "start": 31.219,
              "end": 31.301,
              "characters": [
                {
                  "character": "y",
                  "start": 31.219,
                  "end": 31.243
                },
                {
                  "character": "o",
                  "start": 31.243,
                  "end": 31.266
                },
                {
                  "character": "u",
                  "start": 31.266,
                  "end": 31.301
                }
              ]
            },
            {
              "word": "the",
              "start": 31.37,
              "end": 31.44,
              "characters": [
                {
                  "character": "t",
                  "start": 31.37,
                  "end": 31.394
                },
                {
                  "character": "h",
                  "start": 31.394,
                  "end": 31.417
                },
                {
                  "character": "e",
                  "start": 31.417,
                  "end": 31.44
                }
              ]
            },
            {
              "word": "gift!”.",
              "start": 31.486,
              "end": 32.288,
              "characters": [
                {
                  "character": "g",
                  "start": 31.486,
                  "end": 31.533
                },
                {
                  "character": "i",
                  "start": 31.533,
                  "end": 31.649
                },
                {
                  "character": "f",
                  "start": 31.649,
                  "end": 31.73
                },
                {
                  "character": "t",
                  "start": 31.73,
                  "end": 31.846
                },
                {
                  "character": "!",
                  "start": 31.846,
                  "end": 31.963
                },
                {
                  "character": "”",
                  "start": 31.963,
                  "end": 32.079
                },
                {
                  "character": ".",
                  "start": 32.079,
                  "end": 32.288
                }
              ]
            },
            {
              "word": "I",
              "start": 33.1,
              "end": 33.147,
              "characters": [
                {
                  "character": "I",
                  "start": 33.1,
                  "end": 33.147
                }
              ]
            },
            {
              "word": "thought",
              "start": 33.24,
              "end": 33.449,
              "characters": [
                {
                  "character": "t",
                  "start": 33.24,
                  "end": 33.263
                },
                {
                  "character": "h",
                  "start": 33.263,
                  "end": 33.298
                },
                {
                  "character": "o",
                  "start": 33.298,
                  "end": 33.321
                },
                {
                  "character": "u",
                  "start": 33.321,
                  "end": 33.356
                },
                {
                  "character": "g",
                  "start": 33.356,
                  "end": 33.379
                },
                {
                  "character": "h",
                  "start": 33.379,
                  "end": 33.414
                },
                {
                  "character": "t",
                  "start": 33.414,
                  "end": 33.449
                }
              ]
            },
            {
              "word": "she",
              "start": 33.495,
              "end": 33.576,
              "characters": [
                {
                  "character": "s",
                  "start": 33.495,
                  "end": 33.518
                },
                {
                  "character": "h",
                  "start": 33.518,
                  "end": 33.553
                },
                {
                  "character": "e",
                  "start": 33.553,
                  "end": 33.576
                }
              ]
            },
            {
              "word": "was",
              "start": 33.634,
              "end": 33.739,
              "characters": [
                {
                  "character": "w",
                  "start": 33.634,
                  "end": 33.669
                },
                {
                  "character": "a",
                  "start": 33.669,
                  "end": 33.704
                },
                {
                  "character": "s",
                  "start": 33.704,
                  "end": 33.739
                }
              ]
            },
            {
              "word": "joking,",
              "start": 33.797,
              "end": 34.273,
              "characters": [
                {
                  "character": "j",
                  "start": 33.797,
                  "end": 33.855
                },
                {
                  "character": "o",
                  "start": 33.855,
                  "end": 33.971
                },
                {
                  "character": "k",
                  "start": 33.971,
                  "end": 34.052
                },
                {
                  "character": "i",
                  "start": 34.052,
                  "end": 34.122
                },
                {
                  "character": "n",
                  "start": 34.122,
                  "end": 34.157
                },
                {
                  "character": "g",
                  "start": 34.157,
                  "end": 34.215
                },
                {
                  "character": ",",
                  "start": 34.215,
                  "end": 34.273
                }
              ]
            },
            {
              "word": "so",
              "start": 34.308,
              "end": 34.459,
              "characters": [
                {
                  "character": "s",
                  "start": 34.308,
                  "end": 34.377
                },
                {
                  "character": "o",
                  "start": 34.377,
                  "end": 34.459
                }
              ]
            },
            {
              "word": "I",
              "start": 34.54,
              "end": 34.575,
              "characters": [
                {
                  "character": "I",
                  "start": 34.54,
                  "end": 34.575
                }
              ]
            },
            {
              "word": "interrupted",
              "start": 34.691,
              "end": 35.248,
              "characters": [
                {
                  "character": "i",
                  "start": 34.691,
                  "end": 34.737
                },
                {
                  "character": "n",
                  "start": 34.737,
                  "end": 34.807
                },
                {
                  "character": "t",
                  "start": 34.807,
                  "end": 34.865
                },
                {
                  "character": "e",
                  "start": 34.865,
                  "end": 34.911
                },
                {
                  "character": "r",
                  "start": 34.911,
                  "end": 34.969
                },
                {
                  "character": "r",
                  "start": 34.969,
                  "end": 35.016
                },
                {
                  "character": "u",
                  "start": 35.016,
                  "end": 35.062
                },
                {
                  "character": "p",
                  "start": 35.062,
                  "end": 35.109
                },
                {
                  "character": "t",
                  "start": 35.109,
                  "end": 35.167
                },
                {
                  "character": "e",
                  "start": 35.167,
                  "end": 35.225
                },
                {
                  "character": "d",
                  "start": 35.225,
                  "end": 35.248
                }
              ]
            },
            {
              "word": "and",
              "start": 35.295,
              "end": 35.376,
              "characters": [
                {
                  "character": "a",
                  "start": 35.295,
                  "end": 35.318
                },
                {
                  "character": "n",
                  "start": 35.318,
                  "end": 35.341
                },
                {
                  "character": "d",
                  "start": 35.341,
                  "end": 35.376
                }
              ]
            },
            {
              "word": "told",
              "start": 35.422,
              "end": 35.643,
              "characters": [
                {
                  "character": "t",
                  "start": 35.422,
                  "end": 35.457
                },
                {
                  "character": "o",
                  "start": 35.457,
                  "end": 35.538
                },
                {
                  "character": "l",
                  "start": 35.538,
                  "end": 35.608
                },
                {
                  "character": "d",
                  "start": 35.608,
                  "end": 35.643
                }
              ]
            },
            {
              "word": "my",
              "start": 35.701,
              "end": 35.794,
              "characters": [
                {
                  "character": "m",
                  "start": 35.701,
                  "end": 35.747
                },
                {
                  "character": "y",
                  "start": 35.747,
                  "end": 35.794
                }
              ]
            },
            {
              "word": "daughter,",
              "start": 35.852,
              "end": 36.328,
              "characters": [
                {
                  "character": "d",
                  "start": 35.852,
                  "end": 35.898
                },
                {
                  "character": "a",
                  "start": 35.898,
                  "end": 35.945
                },
                {
                  "character": "u",
                  "start": 35.945,
                  "end": 35.98
                },
                {
                  "character": "g",
                  "start": 35.98,
                  "end": 36.014
                },
                {
                  "character": "h",
                  "start": 36.014,
                  "end": 36.038
                },
                {
                  "character": "t",
                  "start": 36.038,
                  "end": 36.072
                },
                {
                  "character": "e",
                  "start": 36.072,
                  "end": 36.107
                },
                {
                  "character": "r",
                  "start": 36.107,
                  "end": 36.177
                },
                {
                  "character": ",",
                  "start": 36.177,
                  "end": 36.328
                }
              ]
            },
            {
              "word": "“Auntie",
              "start": 36.409,
              "end": 36.769,
              "characters": [
                {
                  "character": "“",
                  "start": 36.409,
                  "end": 36.479
                },
                {
                  "character": "A",
                  "start": 36.479,
                  "end": 36.525
                },
                {
                  "character": "u",
                  "start": 36.525,
                  "end": 36.595
                },
                {
                  "character": "n",
                  "start": 36.595,
                  "end": 36.641
                },
                {
                  "character": "t",
                  "start": 36.641,
                  "end": 36.699
                },
                {
                  "character": "i",
                  "start": 36.699,
                  "end": 36.746
                },
                {
                  "character": "e",
                  "start": 36.746,
                  "end": 36.769
                }
              ]
            },
            {
              "word": "got",
              "start": 36.827,
              "end": 36.978,
              "characters": [
                {
                  "character": "g",
                  "start": 36.827,
                  "end": 36.862
                },
                {
                  "character": "o",
                  "start": 36.862,
                  "end": 36.943
                },
                {
                  "character": "t",
                  "start": 36.943,
                  "end": 36.978
                }
              ]
            },
            {
              "word": "you",
              "start": 37.036,
              "end": 37.117,
              "characters": [
                {
                  "character": "y",
                  "start": 37.036,
                  "end": 37.059
                },
                {
                  "character": "o",
                  "start": 37.059,
                  "end": 37.083
                },
                {
                  "character": "u",
                  "start": 37.083,
                  "end": 37.117
                }
              ]
            },
            {
              "word": "a",
              "start": 37.187,
              "end": 37.21,
              "characters": [
                {
                  "character": "a",
                  "start": 37.187,
                  "end": 37.21
                }
              ]
            },
            {
              "word": "present,",
              "start": 37.268,
              "end": 37.628,
              "characters": [
                {
                  "character": "p",
                  "start": 37.268,
                  "end": 37.303
                },
                {
                  "character": "r",
                  "start": 37.303,
                  "end": 37.361
                },
                {
                  "character": "e",
                  "start": 37.361,
                  "end": 37.419
                },
                {
                  "character": "s",
                  "start": 37.419,
                  "end": 37.477
                },
                {
                  "character": "e",
                  "start": 37.477,
                  "end": 37.535
                },
                {
                  "character": "n",
                  "start": 37.535,
                  "end": 37.57
                },
                {
                  "character": "t",
                  "start": 37.57,
                  "end": 37.605
                },
                {
                  "character": ",",
                  "start": 37.605,
                  "end": 37.628
                }
              ]
            },
            {
              "word": "you",
              "start": 37.651,
              "end": 37.721,
              "characters": [
                {
                  "character": "y",
                  "start": 37.651,
                  "end": 37.675
                },
                {
                  "character": "o",
                  "start": 37.675,
                  "end": 37.698
                },
                {
                  "character": "u",
                  "start": 37.698,
                  "end": 37.721
                }
              ]
            },
            {
              "word": "say",
              "start": 37.791,
              "end": 38,
              "characters": [
                {
                  "character": "s",
                  "start": 37.791,
                  "end": 37.837
                },
                {
                  "character": "a",
                  "start": 37.837,
                  "end": 37.918
                },
                {
                  "character": "y",
                  "start": 37.918,
                  "end": 38
                }
              ]
            },
            {
              "word": "‘Thank",
              "start": 38.069,
              "end": 38.36,
              "characters": [
                {
                  "character": "‘",
                  "start": 38.069,
                  "end": 38.093
                },
                {
                  "character": "T",
                  "start": 38.093,
                  "end": 38.139
                },
                {
                  "character": "h",
                  "start": 38.139,
                  "end": 38.209
                },
                {
                  "character": "a",
                  "start": 38.209,
                  "end": 38.255
                },
                {
                  "character": "n",
                  "start": 38.255,
                  "end": 38.313
                },
                {
                  "character": "k",
                  "start": 38.313,
                  "end": 38.36
                }
              ]
            },
            {
              "word": "you’",
              "start": 38.406,
              "end": 38.534,
              "characters": [
                {
                  "character": "y",
                  "start": 38.406,
                  "end": 38.429
                },
                {
                  "character": "o",
                  "start": 38.429,
                  "end": 38.464
                },
                {
                  "character": "u",
                  "start": 38.464,
                  "end": 38.499
                },
                {
                  "character": "’",
                  "start": 38.499,
                  "end": 38.534
                }
              ]
            },
            {
              "word": "out",
              "start": 38.569,
              "end": 38.708,
              "characters": [
                {
                  "character": "o",
                  "start": 38.569,
                  "end": 38.627
                },
                {
                  "character": "u",
                  "start": 38.627,
                  "end": 38.673
                },
                {
                  "character": "t",
                  "start": 38.673,
                  "end": 38.708
                }
              ]
            },
            {
              "word": "loud!”.",
              "start": 38.778,
              "end": 39.532,
              "characters": [
                {
                  "character": "l",
                  "start": 38.778,
                  "end": 38.836
                },
                {
                  "character": "o",
                  "start": 38.836,
                  "end": 39.01
                },
                {
                  "character": "u",
                  "start": 39.01,
                  "end": 39.091
                },
                {
                  "character": "d",
                  "start": 39.091,
                  "end": 39.242
                },
                {
                  "character": "!",
                  "start": 39.242,
                  "end": 39.323
                },
                {
                  "character": "”",
                  "start": 39.323,
                  "end": 39.381
                },
                {
                  "character": ".",
                  "start": 39.381,
                  "end": 39.532
                }
              ]
            },
            {
              "word": "My",
              "start": 40.345,
              "end": 40.473,
              "characters": [
                {
                  "character": "M",
                  "start": 40.345,
                  "end": 40.426
                },
                {
                  "character": "y",
                  "start": 40.426,
                  "end": 40.473
                }
              ]
            },
            {
              "word": "daughter",
              "start": 40.519,
              "end": 40.798,
              "characters": [
                {
                  "character": "d",
                  "start": 40.519,
                  "end": 40.565
                },
                {
                  "character": "a",
                  "start": 40.565,
                  "end": 40.612
                },
                {
                  "character": "u",
                  "start": 40.612,
                  "end": 40.647
                },
                {
                  "character": "g",
                  "start": 40.647,
                  "end": 40.67
                },
                {
                  "character": "h",
                  "start": 40.67,
                  "end": 40.705
                },
                {
                  "character": "t",
                  "start": 40.705,
                  "end": 40.74
                },
                {
                  "character": "e",
                  "start": 40.74,
                  "end": 40.774
                },
                {
                  "character": "r",
                  "start": 40.774,
                  "end": 40.798
                }
              ]
            },
            {
              "word": "exclaimed,",
              "start": 40.867,
              "end": 41.529,
              "characters": [
                {
                  "character": "e",
                  "start": 40.867,
                  "end": 40.914
                },
                {
                  "character": "x",
                  "start": 40.914,
                  "end": 40.983
                },
                {
                  "character": "c",
                  "start": 40.983,
                  "end": 41.076
                },
                {
                  "character": "l",
                  "start": 41.076,
                  "end": 41.134
                },
                {
                  "character": "a",
                  "start": 41.134,
                  "end": 41.181
                },
                {
                  "character": "i",
                  "start": 41.181,
                  "end": 41.239
                },
                {
                  "character": "m",
                  "start": 41.239,
                  "end": 41.285
                },
                {
                  "character": "e",
                  "start": 41.285,
                  "end": 41.355
                },
                {
                  "character": "d",
                  "start": 41.355,
                  "end": 41.413
                },
                {
                  "character": ",",
                  "start": 41.413,
                  "end": 41.529
                }
              ]
            },
            {
              "word": "“Thank",
              "start": 41.703,
              "end": 42.063,
              "characters": [
                {
                  "character": "“",
                  "start": 41.703,
                  "end": 41.819
                },
                {
                  "character": "T",
                  "start": 41.819,
                  "end": 41.866
                },
                {
                  "character": "h",
                  "start": 41.866,
                  "end": 41.935
                },
                {
                  "character": "a",
                  "start": 41.935,
                  "end": 41.97
                },
                {
                  "character": "n",
                  "start": 41.97,
                  "end": 42.028
                },
                {
                  "character": "k",
                  "start": 42.028,
                  "end": 42.063
                }
              ]
            },
            {
              "word": "you",
              "start": 42.11,
              "end": 42.191,
              "characters": [
                {
                  "character": "y",
                  "start": 42.11,
                  "end": 42.133
                },
                {
                  "character": "o",
                  "start": 42.133,
                  "end": 42.156
                },
                {
                  "character": "u",
                  "start": 42.156,
                  "end": 42.191
                }
              ]
            },
            {
              "word": "auntie!”,",
              "start": 42.272,
              "end": 43.294,
              "characters": [
                {
                  "character": "a",
                  "start": 42.272,
                  "end": 42.307
                },
                {
                  "character": "u",
                  "start": 42.307,
                  "end": 42.365
                },
                {
                  "character": "n",
                  "start": 42.365,
                  "end": 42.423
                },
                {
                  "character": "t",
                  "start": 42.423,
                  "end": 42.504
                },
                {
                  "character": "i",
                  "start": 42.504,
                  "end": 42.574
                },
                {
                  "character": "e",
                  "start": 42.574,
                  "end": 42.748
                },
                {
                  "character": "!",
                  "start": 42.748,
                  "end": 42.795
                },
                {
                  "character": "”",
                  "start": 42.795,
                  "end": 42.911
                },
                {
                  "character": ",",
                  "start": 42.911,
                  "end": 43.294
                }
              ]
            },
            {
              "word": "then",
              "start": 43.538,
              "end": 43.747,
              "characters": [
                {
                  "character": "t",
                  "start": 43.538,
                  "end": 43.572
                },
                {
                  "character": "h",
                  "start": 43.572,
                  "end": 43.607
                },
                {
                  "character": "e",
                  "start": 43.607,
                  "end": 43.689
                },
                {
                  "character": "n",
                  "start": 43.689,
                  "end": 43.747
                }
              ]
            },
            {
              "word": "opened",
              "start": 43.828,
              "end": 44.176,
              "characters": [
                {
                  "character": "o",
                  "start": 43.828,
                  "end": 43.944
                },
                {
                  "character": "p",
                  "start": 43.944,
                  "end": 44.014
                },
                {
                  "character": "e",
                  "start": 44.014,
                  "end": 44.06
                },
                {
                  "character": "n",
                  "start": 44.06,
                  "end": 44.095
                },
                {
                  "character": "e",
                  "start": 44.095,
                  "end": 44.153
                },
                {
                  "character": "d",
                  "start": 44.153,
                  "end": 44.176
                }
              ]
            },
            {
              "word": "the",
              "start": 44.211,
              "end": 44.28,
              "characters": [
                {
                  "character": "t",
                  "start": 44.211,
                  "end": 44.234
                },
                {
                  "character": "h",
                  "start": 44.234,
                  "end": 44.257
                },
                {
                  "character": "e",
                  "start": 44.257,
                  "end": 44.28
                }
              ]
            },
            {
              "word": "present.",
              "start": 44.327,
              "end": 44.954,
              "characters": [
                {
                  "character": "p",
                  "start": 44.327,
                  "end": 44.373
                },
                {
                  "character": "r",
                  "start": 44.373,
                  "end": 44.431
                },
                {
                  "character": "e",
                  "start": 44.431,
                  "end": 44.489
                },
                {
                  "character": "s",
                  "start": 44.489,
                  "end": 44.547
                },
                {
                  "character": "e",
                  "start": 44.547,
                  "end": 44.629
                },
                {
                  "character": "n",
                  "start": 44.629,
                  "end": 44.663
                },
                {
                  "character": "t",
                  "start": 44.663,
                  "end": 44.779
                },
                {
                  "character": ".",
                  "start": 44.779,
                  "end": 44.954
                }
              ]
            },
            {
              "word": "It",
              "start": 45.557,
              "end": 45.685,
              "characters": [
                {
                  "character": "I",
                  "start": 45.557,
                  "end": 45.627
                },
                {
                  "character": "t",
                  "start": 45.627,
                  "end": 45.685
                }
              ]
            },
            {
              "word": "was",
              "start": 45.72,
              "end": 45.824,
              "characters": [
                {
                  "character": "w",
                  "start": 45.72,
                  "end": 45.755
                },
                {
                  "character": "a",
                  "start": 45.755,
                  "end": 45.79
                },
                {
                  "character": "s",
                  "start": 45.79,
                  "end": 45.824
                }
              ]
            },
            {
              "word": "a",
              "start": 45.882,
              "end": 45.906,
              "characters": [
                {
                  "character": "a",
                  "start": 45.882,
                  "end": 45.906
                }
              ]
            },
            {
              "word": "Lego",
              "start": 45.964,
              "end": 46.277,
              "characters": [
                {
                  "character": "L",
                  "start": 45.964,
                  "end": 46.022
                },
                {
                  "character": "e",
                  "start": 46.022,
                  "end": 46.115
                },
                {
                  "character": "g",
                  "start": 46.115,
                  "end": 46.196
                },
                {
                  "character": "o",
                  "start": 46.196,
                  "end": 46.277
                }
              ]
            },
            {
              "word": "Friends",
              "start": 46.37,
              "end": 46.742,
              "characters": [
                {
                  "character": "F",
                  "start": 46.37,
                  "end": 46.416
                },
                {
                  "character": "r",
                  "start": 46.416,
                  "end": 46.486
                },
                {
                  "character": "i",
                  "start": 46.486,
                  "end": 46.533
                },
                {
                  "character": "e",
                  "start": 46.533,
                  "end": 46.579
                },
                {
                  "character": "n",
                  "start": 46.579,
                  "end": 46.637
                },
                {
                  "character": "d",
                  "start": 46.637,
                  "end": 46.707
                },
                {
                  "character": "s",
                  "start": 46.707,
                  "end": 46.742
                }
              ]
            },
            {
              "word": "set.",
              "start": 46.776,
              "end": 47.322,
              "characters": [
                {
                  "character": "s",
                  "start": 46.776,
                  "end": 46.846
                },
                {
                  "character": "e",
                  "start": 46.846,
                  "end": 47.02
                },
                {
                  "character": "t",
                  "start": 47.02,
                  "end": 47.148
                },
                {
                  "character": ".",
                  "start": 47.148,
                  "end": 47.322
                }
              ]
            },
            {
              "word": "Needless",
              "start": 47.926,
              "end": 48.379,
              "characters": [
                {
                  "character": "N",
                  "start": 47.926,
                  "end": 48.007
                },
                {
                  "character": "e",
                  "start": 48.007,
                  "end": 48.077
                },
                {
                  "character": "e",
                  "start": 48.077,
                  "end": 48.123
                },
                {
                  "character": "d",
                  "start": 48.123,
                  "end": 48.181
                },
                {
                  "character": "l",
                  "start": 48.181,
                  "end": 48.239
                },
                {
                  "character": "e",
                  "start": 48.239,
                  "end": 48.286
                },
                {
                  "character": "s",
                  "start": 48.286,
                  "end": 48.332
                },
                {
                  "character": "s",
                  "start": 48.332,
                  "end": 48.379
                }
              ]
            },
            {
              "word": "to",
              "start": 48.413,
              "end": 48.471,
              "characters": [
                {
                  "character": "t",
                  "start": 48.413,
                  "end": 48.437
                },
                {
                  "character": "o",
                  "start": 48.437,
                  "end": 48.471
                }
              ]
            },
            {
              "word": "say,",
              "start": 48.553,
              "end": 48.878,
              "characters": [
                {
                  "character": "s",
                  "start": 48.553,
                  "end": 48.611
                },
                {
                  "character": "a",
                  "start": 48.611,
                  "end": 48.762
                },
                {
                  "character": "y",
                  "start": 48.762,
                  "end": 48.843
                },
                {
                  "character": ",",
                  "start": 48.843,
                  "end": 48.878
                }
              ]
            },
            {
              "word": "my",
              "start": 48.924,
              "end": 49.04,
              "characters": [
                {
                  "character": "m",
                  "start": 48.924,
                  "end": 48.982
                },
                {
                  "character": "y",
                  "start": 48.982,
                  "end": 49.04
                }
              ]
            },
            {
              "word": "daughter",
              "start": 49.098,
              "end": 49.389,
              "characters": [
                {
                  "character": "d",
                  "start": 49.098,
                  "end": 49.145
                },
                {
                  "character": "a",
                  "start": 49.145,
                  "end": 49.203
                },
                {
                  "character": "u",
                  "start": 49.203,
                  "end": 49.238
                },
                {
                  "character": "g",
                  "start": 49.238,
                  "end": 49.273
                },
                {
                  "character": "h",
                  "start": 49.273,
                  "end": 49.307
                },
                {
                  "character": "t",
                  "start": 49.307,
                  "end": 49.331
                },
                {
                  "character": "e",
                  "start": 49.331,
                  "end": 49.365
                },
                {
                  "character": "r",
                  "start": 49.365,
                  "end": 49.389
                }
              ]
            },
            {
              "word": "was",
              "start": 49.447,
              "end": 49.563,
              "characters": [
                {
                  "character": "w",
                  "start": 49.447,
                  "end": 49.481
                },
                {
                  "character": "a",
                  "start": 49.481,
                  "end": 49.528
                },
                {
                  "character": "s",
                  "start": 49.528,
                  "end": 49.563
                }
              ]
            },
            {
              "word": "so",
              "start": 49.609,
              "end": 49.772,
              "characters": [
                {
                  "character": "s",
                  "start": 49.609,
                  "end": 49.656
                },
                {
                  "character": "o",
                  "start": 49.656,
                  "end": 49.772
                }
              ]
            },
            {
              "word": "happy,",
              "start": 49.853,
              "end": 50.434,
              "characters": [
                {
                  "character": "h",
                  "start": 49.853,
                  "end": 49.899
                },
                {
                  "character": "a",
                  "start": 49.899,
                  "end": 49.981
                },
                {
                  "character": "p",
                  "start": 49.981,
                  "end": 50.05
                },
                {
                  "character": "p",
                  "start": 50.05,
                  "end": 50.132
                },
                {
                  "character": "y",
                  "start": 50.132,
                  "end": 50.283
                },
                {
                  "character": ",",
                  "start": 50.283,
                  "end": 50.434
                }
              ]
            },
            {
              "word": "and",
              "start": 50.642,
              "end": 50.805,
              "characters": [
                {
                  "character": "a",
                  "start": 50.642,
                  "end": 50.712
                },
                {
                  "character": "n",
                  "start": 50.712,
                  "end": 50.759
                },
                {
                  "character": "d",
                  "start": 50.759,
                  "end": 50.805
                }
              ]
            },
            {
              "word": "jumped",
              "start": 50.875,
              "end": 51.153,
              "characters": [
                {
                  "character": "j",
                  "start": 50.875,
                  "end": 50.933
                },
                {
                  "character": "u",
                  "start": 50.933,
                  "end": 50.979
                },
                {
                  "character": "m",
                  "start": 50.979,
                  "end": 51.037
                },
                {
                  "character": "p",
                  "start": 51.037,
                  "end": 51.084
                },
                {
                  "character": "e",
                  "start": 51.084,
                  "end": 51.13
                },
                {
                  "character": "d",
                  "start": 51.13,
                  "end": 51.153
                }
              ]
            },
            {
              "word": "up",
              "start": 51.2,
              "end": 51.281,
              "characters": [
                {
                  "character": "u",
                  "start": 51.2,
                  "end": 51.235
                },
                {
                  "character": "p",
                  "start": 51.235,
                  "end": 51.281
                }
              ]
            },
            {
              "word": "and",
              "start": 51.327,
              "end": 51.409,
              "characters": [
                {
                  "character": "a",
                  "start": 51.327,
                  "end": 51.351
                },
                {
                  "character": "n",
                  "start": 51.351,
                  "end": 51.374
                },
                {
                  "character": "d",
                  "start": 51.374,
                  "end": 51.409
                }
              ]
            },
            {
              "word": "down",
              "start": 51.467,
              "end": 51.734,
              "characters": [
                {
                  "character": "d",
                  "start": 51.467,
                  "end": 51.513
                },
                {
                  "character": "o",
                  "start": 51.513,
                  "end": 51.629
                },
                {
                  "character": "w",
                  "start": 51.629,
                  "end": 51.676
                },
                {
                  "character": "n",
                  "start": 51.676,
                  "end": 51.734
                }
              ]
            },
            {
              "word": "with",
              "start": 51.792,
              "end": 51.931,
              "characters": [
                {
                  "character": "w",
                  "start": 51.792,
                  "end": 51.827
                },
                {
                  "character": "i",
                  "start": 51.827,
                  "end": 51.862
                },
                {
                  "character": "t",
                  "start": 51.862,
                  "end": 51.896
                },
                {
                  "character": "h",
                  "start": 51.896,
                  "end": 51.931
                }
              ]
            },
            {
              "word": "the",
              "start": 51.966,
              "end": 52.036,
              "characters": [
                {
                  "character": "t",
                  "start": 51.966,
                  "end": 51.989
                },
                {
                  "character": "h",
                  "start": 51.989,
                  "end": 52.012
                },
                {
                  "character": "e",
                  "start": 52.012,
                  "end": 52.036
                }
              ]
            },
            {
              "word": "Lego",
              "start": 52.094,
              "end": 52.384,
              "characters": [
                {
                  "character": "L",
                  "start": 52.094,
                  "end": 52.14
                },
                {
                  "character": "e",
                  "start": 52.14,
                  "end": 52.221
                },
                {
                  "character": "g",
                  "start": 52.221,
                  "end": 52.303
                },
                {
                  "character": "o",
                  "start": 52.303,
                  "end": 52.384
                }
              ]
            },
            {
              "word": "set.",
              "start": 52.465,
              "end": 52.999,
              "characters": [
                {
                  "character": "s",
                  "start": 52.465,
                  "end": 52.523
                },
                {
                  "character": "e",
                  "start": 52.523,
                  "end": 52.697
                },
                {
                  "character": "t",
                  "start": 52.697,
                  "end": 52.848
                },
                {
                  "character": ".",
                  "start": 52.848,
                  "end": 52.999
                }
              ]
            },
            {
              "word": "Then",
              "start": 53.603,
              "end": 53.812,
              "characters": [
                {
                  "character": "T",
                  "start": 53.603,
                  "end": 53.649
                },
                {
                  "character": "h",
                  "start": 53.649,
                  "end": 53.708
                },
                {
                  "character": "e",
                  "start": 53.708,
                  "end": 53.766
                },
                {
                  "character": "n",
                  "start": 53.766,
                  "end": 53.812
                }
              ]
            },
            {
              "word": "suddenly,",
              "start": 53.893,
              "end": 54.648,
              "characters": [
                {
                  "character": "s",
                  "start": 53.893,
                  "end": 53.951
                },
                {
                  "character": "u",
                  "start": 53.951,
                  "end": 54.033
                },
                {
                  "character": "d",
                  "start": 54.033,
                  "end": 54.102
                },
                {
                  "character": "d",
                  "start": 54.102,
                  "end": 54.149
                },
                {
                  "character": "e",
                  "start": 54.149,
                  "end": 54.195
                },
                {
                  "character": "n",
                  "start": 54.195,
                  "end": 54.253
                },
                {
                  "character": "l",
                  "start": 54.253,
                  "end": 54.323
                },
                {
                  "character": "y",
                  "start": 54.323,
                  "end": 54.439
                },
                {
                  "character": ",",
                  "start": 54.439,
                  "end": 54.648
                }
              ]
            },
            {
              "word": "the",
              "start": 54.857,
              "end": 54.973,
              "characters": [
                {
                  "character": "t",
                  "start": 54.857,
                  "end": 54.892
                },
                {
                  "character": "h",
                  "start": 54.892,
                  "end": 54.938
                },
                {
                  "character": "e",
                  "start": 54.938,
                  "end": 54.973
                }
              ]
            },
            {
              "word": "auntie",
              "start": 55.043,
              "end": 55.333,
              "characters": [
                {
                  "character": "a",
                  "start": 55.043,
                  "end": 55.077
                },
                {
                  "character": "u",
                  "start": 55.077,
                  "end": 55.124
                },
                {
                  "character": "n",
                  "start": 55.124,
                  "end": 55.17
                },
                {
                  "character": "t",
                  "start": 55.17,
                  "end": 55.228
                },
                {
                  "character": "i",
                  "start": 55.228,
                  "end": 55.286
                },
                {
                  "character": "e",
                  "start": 55.286,
                  "end": 55.333
                }
              ]
            },
            {
              "word": "snatched",
              "start": 55.368,
              "end": 55.762,
              "characters": [
                {
                  "character": "s",
                  "start": 55.368,
                  "end": 55.449
                },
                {
                  "character": "n",
                  "start": 55.449,
                  "end": 55.519
                },
                {
                  "character": "a",
                  "start": 55.519,
                  "end": 55.577
                },
                {
                  "character": "t",
                  "start": 55.577,
                  "end": 55.623
                },
                {
                  "character": "c",
                  "start": 55.623,
                  "end": 55.67
                },
                {
                  "character": "h",
                  "start": 55.67,
                  "end": 55.704
                },
                {
                  "character": "e",
                  "start": 55.704,
                  "end": 55.739
                },
                {
                  "character": "d",
                  "start": 55.739,
                  "end": 55.762
                }
              ]
            },
            {
              "word": "the",
              "start": 55.797,
              "end": 55.867,
              "characters": [
                {
                  "character": "t",
                  "start": 55.797,
                  "end": 55.821
                },
                {
                  "character": "h",
                  "start": 55.821,
                  "end": 55.844
                },
                {
                  "character": "e",
                  "start": 55.844,
                  "end": 55.867
                }
              ]
            },
            {
              "word": "Lego",
              "start": 55.925,
              "end": 56.227,
              "characters": [
                {
                  "character": "L",
                  "start": 55.925,
                  "end": 55.971
                },
                {
                  "character": "e",
                  "start": 55.971,
                  "end": 56.053
                },
                {
                  "character": "g",
                  "start": 56.053,
                  "end": 56.134
                },
                {
                  "character": "o",
                  "start": 56.134,
                  "end": 56.227
                }
              ]
            },
            {
              "word": "set",
              "start": 56.297,
              "end": 56.54,
              "characters": [
                {
                  "character": "s",
                  "start": 56.297,
                  "end": 56.343
                },
                {
                  "character": "e",
                  "start": 56.343,
                  "end": 56.494
                },
                {
                  "character": "t",
                  "start": 56.494,
                  "end": 56.54
                }
              ]
            },
            {
              "word": "from",
              "start": 56.598,
              "end": 56.761,
              "characters": [
                {
                  "character": "f",
                  "start": 56.598,
                  "end": 56.633
                },
                {
                  "character": "r",
                  "start": 56.633,
                  "end": 56.68
                },
                {
                  "character": "o",
                  "start": 56.68,
                  "end": 56.726
                },
                {
                  "character": "m",
                  "start": 56.726,
                  "end": 56.761
                }
              ]
            },
            {
              "word": "my",
              "start": 56.831,
              "end": 56.923,
              "characters": [
                {
                  "character": "m",
                  "start": 56.831,
                  "end": 56.877
                },
                {
                  "character": "y",
                  "start": 56.877,
                  "end": 56.923
                }
              ]
            },
            {
              "word": "daughter’s",
              "start": 56.982,
              "end": 57.341,
              "characters": [
                {
                  "character": "d",
                  "start": 56.982,
                  "end": 57.028
                },
                {
                  "character": "a",
                  "start": 57.028,
                  "end": 57.074
                },
                {
                  "character": "u",
                  "start": 57.074,
                  "end": 57.109
                },
                {
                  "character": "g",
                  "start": 57.109,
                  "end": 57.144
                },
                {
                  "character": "h",
                  "start": 57.144,
                  "end": 57.179
                },
                {
                  "character": "t",
                  "start": 57.179,
                  "end": 57.202
                },
                {
                  "character": "e",
                  "start": 57.202,
                  "end": 57.237
                },
                {
                  "character": "r",
                  "start": 57.237,
                  "end": 57.272
                },
                {
                  "character": "’",
                  "start": 57.272,
                  "end": 57.318
                },
                {
                  "character": "s",
                  "start": 57.318,
                  "end": 57.341
                }
              ]
            },
            {
              "word": "hands",
              "start": 57.388,
              "end": 57.69,
              "characters": [
                {
                  "character": "h",
                  "start": 57.388,
                  "end": 57.434
                },
                {
                  "character": "a",
                  "start": 57.434,
                  "end": 57.55
                },
                {
                  "character": "n",
                  "start": 57.55,
                  "end": 57.585
                },
                {
                  "character": "d",
                  "start": 57.585,
                  "end": 57.643
                },
                {
                  "character": "s",
                  "start": 57.643,
                  "end": 57.69
                }
              ]
            },
            {
              "word": "again,",
              "start": 57.736,
              "end": 58.293,
              "characters": [
                {
                  "character": "a",
                  "start": 57.736,
                  "end": 57.794
                },
                {
                  "character": "g",
                  "start": 57.794,
                  "end": 57.864
                },
                {
                  "character": "a",
                  "start": 57.864,
                  "end": 57.945
                },
                {
                  "character": "i",
                  "start": 57.945,
                  "end": 58.003
                },
                {
                  "character": "n",
                  "start": 58.003,
                  "end": 58.119
                },
                {
                  "character": ",",
                  "start": 58.119,
                  "end": 58.293
                }
              ]
            },
            {
              "word": "held",
              "start": 58.468,
              "end": 58.688,
              "characters": [
                {
                  "character": "h",
                  "start": 58.468,
                  "end": 58.514
                },
                {
                  "character": "e",
                  "start": 58.514,
                  "end": 58.572
                },
                {
                  "character": "l",
                  "start": 58.572,
                  "end": 58.642
                },
                {
                  "character": "d",
                  "start": 58.642,
                  "end": 58.688
                }
              ]
            },
            {
              "word": "it",
              "start": 58.735,
              "end": 58.804,
              "characters": [
                {
                  "character": "i",
                  "start": 58.735,
                  "end": 58.769
                },
                {
                  "character": "t",
                  "start": 58.769,
                  "end": 58.804
                }
              ]
            },
            {
              "word": "up",
              "start": 58.851,
              "end": 58.944,
              "characters": [
                {
                  "character": "u",
                  "start": 58.851,
                  "end": 58.897
                },
                {
                  "character": "p",
                  "start": 58.897,
                  "end": 58.944
                }
              ]
            },
            {
              "word": "above",
              "start": 59.002,
              "end": 59.234,
              "characters": [
                {
                  "character": "a",
                  "start": 59.002,
                  "end": 59.048
                },
                {
                  "character": "b",
                  "start": 59.048,
                  "end": 59.106
                },
                {
                  "character": "o",
                  "start": 59.106,
                  "end": 59.164
                },
                {
                  "character": "v",
                  "start": 59.164,
                  "end": 59.211
                },
                {
                  "character": "e",
                  "start": 59.211,
                  "end": 59.234
                }
              ]
            },
            {
              "word": "her",
              "start": 59.269,
              "end": 59.362,
              "characters": [
                {
                  "character": "h",
                  "start": 59.269,
                  "end": 59.304
                },
                {
                  "character": "e",
                  "start": 59.304,
                  "end": 59.327
                },
                {
                  "character": "r",
                  "start": 59.327,
                  "end": 59.362
                }
              ]
            },
            {
              "word": "head,",
              "start": 59.42,
              "end": 59.872,
              "characters": [
                {
                  "character": "h",
                  "start": 59.42,
                  "end": 59.454
                },
                {
                  "character": "e",
                  "start": 59.454,
                  "end": 59.547
                },
                {
                  "character": "a",
                  "start": 59.547,
                  "end": 59.605
                },
                {
                  "character": "d",
                  "start": 59.605,
                  "end": 59.756
                },
                {
                  "character": ",",
                  "start": 59.756,
                  "end": 59.872
                }
              ]
            },
            {
              "word": "and",
              "start": 59.965,
              "end": 60.151,
              "characters": [
                {
                  "character": "a",
                  "start": 59.965,
                  "end": 60.058
                },
                {
                  "character": "n",
                  "start": 60.058,
                  "end": 60.116
                },
                {
                  "character": "d",
                  "start": 60.116,
                  "end": 60.151
                }
              ]
            },
            {
              "word": "demanded",
              "start": 60.209,
              "end": 60.627,
              "characters": [
                {
                  "character": "d",
                  "start": 60.209,
                  "end": 60.244
                },
                {
                  "character": "e",
                  "start": 60.244,
                  "end": 60.302
                },
                {
                  "character": "m",
                  "start": 60.302,
                  "end": 60.371
                },
                {
                  "character": "a",
                  "start": 60.371,
                  "end": 60.441
                },
                {
                  "character": "n",
                  "start": 60.441,
                  "end": 60.476
                },
                {
                  "character": "d",
                  "start": 60.476,
                  "end": 60.534
                },
                {
                  "character": "e",
                  "start": 60.534,
                  "end": 60.604
                },
                {
                  "character": "d",
                  "start": 60.604,
                  "end": 60.627
                }
              ]
            },
            {
              "word": "my",
              "start": 60.685,
              "end": 60.801,
              "characters": [
                {
                  "character": "m",
                  "start": 60.685,
                  "end": 60.743
                },
                {
                  "character": "y",
                  "start": 60.743,
                  "end": 60.801
                }
              ]
            },
            {
              "word": "daughter,",
              "start": 60.871,
              "end": 61.428,
              "characters": [
                {
                  "character": "d",
                  "start": 60.871,
                  "end": 60.917
                },
                {
                  "character": "a",
                  "start": 60.917,
                  "end": 60.987
                },
                {
                  "character": "u",
                  "start": 60.987,
                  "end": 61.021
                },
                {
                  "character": "g",
                  "start": 61.021,
                  "end": 61.056
                },
                {
                  "character": "h",
                  "start": 61.056,
                  "end": 61.091
                },
                {
                  "character": "t",
                  "start": 61.091,
                  "end": 61.138
                },
                {
                  "character": "e",
                  "start": 61.138,
                  "end": 61.172
                },
                {
                  "character": "r",
                  "start": 61.172,
                  "end": 61.254
                },
                {
                  "character": ",",
                  "start": 61.254,
                  "end": 61.428
                }
              ]
            },
            {
              "word": "“Say",
              "start": 61.753,
              "end": 62.275,
              "characters": [
                {
                  "character": "“",
                  "start": 61.753,
                  "end": 61.927
                },
                {
                  "character": "S",
                  "start": 61.927,
                  "end": 62.043
                },
                {
                  "character": "a",
                  "start": 62.043,
                  "end": 62.217
                },
                {
                  "character": "y",
                  "start": 62.217,
                  "end": 62.275
                }
              ]
            },
            {
              "word": "‘please’",
              "start": 62.299,
              "end": 63.181,
              "characters": [
                {
                  "character": "‘",
                  "start": 62.299,
                  "end": 62.415
                },
                {
                  "character": "p",
                  "start": 62.415,
                  "end": 62.531
                },
                {
                  "character": "l",
                  "start": 62.531,
                  "end": 62.658
                },
                {
                  "character": "e",
                  "start": 62.658,
                  "end": 62.809
                },
                {
                  "character": "a",
                  "start": 62.809,
                  "end": 62.937
                },
                {
                  "character": "s",
                  "start": 62.937,
                  "end": 63.053
                },
                {
                  "character": "e",
                  "start": 63.053,
                  "end": 63.123
                },
                {
                  "character": "’",
                  "start": 63.123,
                  "end": 63.181
                }
              ]
            },
            {
              "word": "and",
              "start": 63.216,
              "end": 63.413,
              "characters": [
                {
                  "character": "a",
                  "start": 63.216,
                  "end": 63.309
                },
                {
                  "character": "n",
                  "start": 63.309,
                  "end": 63.367
                },
                {
                  "character": "d",
                  "start": 63.367,
                  "end": 63.413
                }
              ]
            },
            {
              "word": "bow,",
              "start": 63.529,
              "end": 64.017,
              "characters": [
                {
                  "character": "b",
                  "start": 63.529,
                  "end": 63.611
                },
                {
                  "character": "o",
                  "start": 63.611,
                  "end": 63.854
                },
                {
                  "character": "w",
                  "start": 63.854,
                  "end": 63.97
                },
                {
                  "character": ",",
                  "start": 63.97,
                  "end": 64.017
                }
              ]
            },
            {
              "word": "or",
              "start": 64.052,
              "end": 64.191,
              "characters": [
                {
                  "character": "o",
                  "start": 64.052,
                  "end": 64.145
                },
                {
                  "character": "r",
                  "start": 64.145,
                  "end": 64.191
                }
              ]
            },
            {
              "word": "auntie’s",
              "start": 64.272,
              "end": 64.597,
              "characters": [
                {
                  "character": "a",
                  "start": 64.272,
                  "end": 64.319
                },
                {
                  "character": "u",
                  "start": 64.319,
                  "end": 64.365
                },
                {
                  "character": "n",
                  "start": 64.365,
                  "end": 64.412
                },
                {
                  "character": "t",
                  "start": 64.412,
                  "end": 64.47
                },
                {
                  "character": "i",
                  "start": 64.47,
                  "end": 64.516
                },
                {
                  "character": "e",
                  "start": 64.516,
                  "end": 64.539
                },
                {
                  "character": "’",
                  "start": 64.539,
                  "end": 64.574
                },
                {
                  "character": "s",
                  "start": 64.574,
                  "end": 64.597
                }
              ]
            },
            {
              "word": "gonna",
              "start": 64.632,
              "end": 64.853,
              "characters": [
                {
                  "character": "g",
                  "start": 64.632,
                  "end": 64.667
                },
                {
                  "character": "o",
                  "start": 64.667,
                  "end": 64.725
                },
                {
                  "character": "n",
                  "start": 64.725,
                  "end": 64.76
                },
                {
                  "character": "n",
                  "start": 64.76,
                  "end": 64.795
                },
                {
                  "character": "a",
                  "start": 64.795,
                  "end": 64.853
                }
              ]
            },
            {
              "word": "take",
              "start": 64.899,
              "end": 65.108,
              "characters": [
                {
                  "character": "t",
                  "start": 64.899,
                  "end": 64.957
                },
                {
                  "character": "a",
                  "start": 64.957,
                  "end": 65.015
                },
                {
                  "character": "k",
                  "start": 65.015,
                  "end": 65.073
                },
                {
                  "character": "e",
                  "start": 65.073,
                  "end": 65.108
                }
              ]
            },
            {
              "word": "it",
              "start": 65.155,
              "end": 65.224,
              "characters": [
                {
                  "character": "i",
                  "start": 65.155,
                  "end": 65.189
                },
                {
                  "character": "t",
                  "start": 65.189,
                  "end": 65.224
                }
              ]
            },
            {
              "word": "back!”.",
              "start": 65.282,
              "end": 65.886,
              "characters": [
                {
                  "character": "b",
                  "start": 65.282,
                  "end": 65.34
                },
                {
                  "character": "a",
                  "start": 65.34,
                  "end": 65.468
                },
                {
                  "character": "c",
                  "start": 65.468,
                  "end": 65.526
                },
                {
                  "character": "k",
                  "start": 65.526,
                  "end": 65.642
                },
                {
                  "character": "!",
                  "start": 65.642,
                  "end": 65.816
                },
                {
                  "character": "”",
                  "start": 65.816,
                  "end": 65.851
                },
                {
                  "character": ".",
                  "start": 65.851,
                  "end": 65.886
                }
              ]
            },
            {
              "word": "This",
              "start": 66.699,
              "end": 66.908,
              "characters": [
                {
                  "character": "T",
                  "start": 66.699,
                  "end": 66.757
                },
                {
                  "character": "h",
                  "start": 66.757,
                  "end": 66.826
                },
                {
                  "character": "i",
                  "start": 66.826,
                  "end": 66.873
                },
                {
                  "character": "s",
                  "start": 66.873,
                  "end": 66.908
                }
              ]
            },
            {
              "word": "time,",
              "start": 66.966,
              "end": 67.314,
              "characters": [
                {
                  "character": "t",
                  "start": 66.966,
                  "end": 67.024
                },
                {
                  "character": "i",
                  "start": 67.024,
                  "end": 67.175
                },
                {
                  "character": "m",
                  "start": 67.175,
                  "end": 67.233
                },
                {
                  "character": "e",
                  "start": 67.233,
                  "end": 67.291
                },
                {
                  "character": ",",
                  "start": 67.291,
                  "end": 67.314
                }
              ]
            },
            {
              "word": "I",
              "start": 67.349,
              "end": 67.384,
              "characters": [
                {
                  "character": "I",
                  "start": 67.349,
                  "end": 67.384
                }
              ]
            },
            {
              "word": "knew",
              "start": 67.5,
              "end": 67.662,
              "characters": [
                {
                  "character": "k",
                  "start": 67.5,
                  "end": 67.535
                },
                {
                  "character": "n",
                  "start": 67.535,
                  "end": 67.581
                },
                {
                  "character": "e",
                  "start": 67.581,
                  "end": 67.628
                },
                {
                  "character": "w",
                  "start": 67.628,
                  "end": 67.662
                }
              ]
            },
            {
              "word": "she",
              "start": 67.72,
              "end": 67.825,
              "characters": [
                {
                  "character": "s",
                  "start": 67.72,
                  "end": 67.755
                },
                {
                  "character": "h",
                  "start": 67.755,
                  "end": 67.802
                },
                {
                  "character": "e",
                  "start": 67.802,
                  "end": 67.825
                }
              ]
            },
            {
              "word": "wasn’t",
              "start": 67.883,
              "end": 68.15,
              "characters": [
                {
                  "character": "w",
                  "start": 67.883,
                  "end": 67.929
                },
                {
                  "character": "a",
                  "start": 67.929,
                  "end": 67.976
                },
                {
                  "character": "s",
                  "start": 67.976,
                  "end": 68.046
                },
                {
                  "character": "n",
                  "start": 68.046,
                  "end": 68.092
                },
                {
                  "character": "’",
                  "start": 68.092,
                  "end": 68.127
                },
                {
                  "character": "t",
                  "start": 68.127,
                  "end": 68.15
                }
              ]
            },
            {
              "word": "joking.",
              "start": 68.196,
              "end": 68.8,
              "characters": [
                {
                  "character": "j",
                  "start": 68.196,
                  "end": 68.243
                },
                {
                  "character": "o",
                  "start": 68.243,
                  "end": 68.359
                },
                {
                  "character": "k",
                  "start": 68.359,
                  "end": 68.44
                },
                {
                  "character": "i",
                  "start": 68.44,
                  "end": 68.498
                },
                {
                  "character": "n",
                  "start": 68.498,
                  "end": 68.522
                },
                {
                  "character": "g",
                  "start": 68.522,
                  "end": 68.591
                },
                {
                  "character": ".",
                  "start": 68.591,
                  "end": 68.8
                }
              ]
            },
            {
              "word": "",
              "start": 68.8,
              "end": 69.079,
              "characters": []
            },
            {
              "word": "I",
              "start": 69.079,
              "end": 69.125,
              "characters": [
                {
                  "character": "I",
                  "start": 69.079,
                  "end": 69.125
                }
              ]
            },
            {
              "word": "got",
              "start": 69.207,
              "end": 69.357,
              "characters": [
                {
                  "character": "g",
                  "start": 69.207,
                  "end": 69.241
                },
                {
                  "character": "o",
                  "start": 69.241,
                  "end": 69.311
                },
                {
                  "character": "t",
                  "start": 69.311,
                  "end": 69.357
                }
              ]
            },
            {
              "word": "angry",
              "start": 69.415,
              "end": 69.799,
              "characters": [
                {
                  "character": "a",
                  "start": 69.415,
                  "end": 69.45
                },
                {
                  "character": "n",
                  "start": 69.45,
                  "end": 69.543
                },
                {
                  "character": "g",
                  "start": 69.543,
                  "end": 69.601
                },
                {
                  "character": "r",
                  "start": 69.601,
                  "end": 69.683
                },
                {
                  "character": "y",
                  "start": 69.683,
                  "end": 69.799
                }
              ]
            },
            {
              "word": "but",
              "start": 70.008,
              "end": 70.182,
              "characters": [
                {
                  "character": "b",
                  "start": 70.008,
                  "end": 70.089
                },
                {
                  "character": "u",
                  "start": 70.089,
                  "end": 70.147
                },
                {
                  "character": "t",
                  "start": 70.147,
                  "end": 70.182
                }
              ]
            },
            {
              "word": "tried",
              "start": 70.217,
              "end": 70.553,
              "characters": [
                {
                  "character": "t",
                  "start": 70.217,
                  "end": 70.275
                },
                {
                  "character": "r",
                  "start": 70.275,
                  "end": 70.344
                },
                {
                  "character": "i",
                  "start": 70.344,
                  "end": 70.46
                },
                {
                  "character": "e",
                  "start": 70.46,
                  "end": 70.53
                },
                {
                  "character": "d",
                  "start": 70.53,
                  "end": 70.553
                }
              ]
            },
            {
              "word": "very",
              "start": 70.623,
              "end": 70.902,
              "characters": [
                {
                  "character": "v",
                  "start": 70.623,
                  "end": 70.693
                },
                {
                  "character": "e",
                  "start": 70.693,
                  "end": 70.774
                },
                {
                  "character": "r",
                  "start": 70.774,
                  "end": 70.844
                },
                {
                  "character": "y",
                  "start": 70.844,
                  "end": 70.902
                }
              ]
            },
            {
              "word": "hard",
              "start": 70.971,
              "end": 71.25,
              "characters": [
                {
                  "character": "h",
                  "start": 70.971,
                  "end": 71.018
                },
                {
                  "character": "a",
                  "start": 71.018,
                  "end": 71.134
                },
                {
                  "character": "r",
                  "start": 71.134,
                  "end": 71.192
                },
                {
                  "character": "d",
                  "start": 71.192,
                  "end": 71.25
                }
              ]
            },
            {
              "word": "to",
              "start": 71.285,
              "end": 71.331,
              "characters": [
                {
                  "character": "t",
                  "start": 71.285,
                  "end": 71.308
                },
                {
                  "character": "o",
                  "start": 71.308,
                  "end": 71.331
                }
              ]
            },
            {
              "word": "keep",
              "start": 71.378,
              "end": 71.54,
              "characters": [
                {
                  "character": "k",
                  "start": 71.378,
                  "end": 71.412
                },
                {
                  "character": "e",
                  "start": 71.412,
                  "end": 71.459
                },
                {
                  "character": "e",
                  "start": 71.459,
                  "end": 71.505
                },
                {
                  "character": "p",
                  "start": 71.505,
                  "end": 71.54
                }
              ]
            },
            {
              "word": "my",
              "start": 71.598,
              "end": 71.691,
              "characters": [
                {
                  "character": "m",
                  "start": 71.598,
                  "end": 71.645
                },
                {
                  "character": "y",
                  "start": 71.645,
                  "end": 71.691
                }
              ]
            },
            {
              "word": "voice",
              "start": 71.761,
              "end": 72.005,
              "characters": [
                {
                  "character": "v",
                  "start": 71.761,
                  "end": 71.807
                },
                {
                  "character": "o",
                  "start": 71.807,
                  "end": 71.865
                },
                {
                  "character": "i",
                  "start": 71.865,
                  "end": 71.923
                },
                {
                  "character": "c",
                  "start": 71.923,
                  "end": 71.97
                },
                {
                  "character": "e",
                  "start": 71.97,
                  "end": 72.005
                }
              ]
            },
            {
              "word": "calm,",
              "start": 72.039,
              "end": 72.573,
              "characters": [
                {
                  "character": "c",
                  "start": 72.039,
                  "end": 72.086
                },
                {
                  "character": "a",
                  "start": 72.086,
                  "end": 72.237
                },
                {
                  "character": "l",
                  "start": 72.237,
                  "end": 72.306
                },
                {
                  "character": "m",
                  "start": 72.306,
                  "end": 72.422
                },
                {
                  "character": ",",
                  "start": 72.422,
                  "end": 72.573
                }
              ]
            },
            {
              "word": "“No",
              "start": 72.724,
              "end": 72.991,
              "characters": [
                {
                  "character": "“",
                  "start": 72.724,
                  "end": 72.84
                },
                {
                  "character": "N",
                  "start": 72.84,
                  "end": 72.922
                },
                {
                  "character": "o",
                  "start": 72.922,
                  "end": 72.991
                }
              ]
            },
            {
              "word": "one",
              "start": 73.061,
              "end": 73.189,
              "characters": [
                {
                  "character": "o",
                  "start": 73.061,
                  "end": 73.096
                },
                {
                  "character": "n",
                  "start": 73.096,
                  "end": 73.154
                },
                {
                  "character": "e",
                  "start": 73.154,
                  "end": 73.189
                }
              ]
            },
            {
              "word": "demands",
              "start": 73.224,
              "end": 73.642,
              "characters": [
                {
                  "character": "d",
                  "start": 73.224,
                  "end": 73.258
                },
                {
                  "character": "e",
                  "start": 73.258,
                  "end": 73.328
                },
                {
                  "character": "m",
                  "start": 73.328,
                  "end": 73.398
                },
                {
                  "character": "a",
                  "start": 73.398,
                  "end": 73.514
                },
                {
                  "character": "n",
                  "start": 73.514,
                  "end": 73.549
                },
                {
                  "character": "d",
                  "start": 73.549,
                  "end": 73.595
                },
                {
                  "character": "s",
                  "start": 73.595,
                  "end": 73.642
                }
              ]
            },
            {
              "word": "my",
              "start": 73.711,
              "end": 73.804,
              "characters": [
                {
                  "character": "m",
                  "start": 73.711,
                  "end": 73.758
                },
                {
                  "character": "y",
                  "start": 73.758,
                  "end": 73.804
                }
              ]
            },
            {
              "word": "daughter",
              "start": 73.874,
              "end": 74.152,
              "characters": [
                {
                  "character": "d",
                  "start": 73.874,
                  "end": 73.92
                },
                {
                  "character": "a",
                  "start": 73.92,
                  "end": 73.978
                },
                {
                  "character": "u",
                  "start": 73.978,
                  "end": 74.001
                },
                {
                  "character": "g",
                  "start": 74.001,
                  "end": 74.036
                },
                {
                  "character": "h",
                  "start": 74.036,
                  "end": 74.059
                },
                {
                  "character": "t",
                  "start": 74.059,
                  "end": 74.094
                },
                {
                  "character": "e",
                  "start": 74.094,
                  "end": 74.129
                },
                {
                  "character": "r",
                  "start": 74.129,
                  "end": 74.152
                }
              ]
            },
            {
              "word": "to",
              "start": 74.199,
              "end": 74.257,
              "characters": [
                {
                  "character": "t",
                  "start": 74.199,
                  "end": 74.222
                },
                {
                  "character": "o",
                  "start": 74.222,
                  "end": 74.257
                }
              ]
            },
            {
              "word": "beg.",
              "start": 74.327,
              "end": 74.814,
              "characters": [
                {
                  "character": "b",
                  "start": 74.327,
                  "end": 74.373
                },
                {
                  "character": "e",
                  "start": 74.373,
                  "end": 74.547
                },
                {
                  "character": "g",
                  "start": 74.547,
                  "end": 74.698
                },
                {
                  "character": ".",
                  "start": 74.698,
                  "end": 74.814
                }
              ]
            },
            {
              "word": "We’re",
              "start": 74.988,
              "end": 75.209,
              "characters": [
                {
                  "character": "W",
                  "start": 74.988,
                  "end": 75.046
                },
                {
                  "character": "e",
                  "start": 75.046,
                  "end": 75.104
                },
                {
                  "character": "’",
                  "start": 75.104,
                  "end": 75.151
                },
                {
                  "character": "r",
                  "start": 75.151,
                  "end": 75.186
                },
                {
                  "character": "e",
                  "start": 75.186,
                  "end": 75.209
                }
              ]
            },
            {
              "word": "poor",
              "start": 75.244,
              "end": 75.673,
              "characters": [
                {
                  "character": "p",
                  "start": 75.244,
                  "end": 75.29
                },
                {
                  "character": "o",
                  "start": 75.29,
                  "end": 75.441
                },
                {
                  "character": "o",
                  "start": 75.441,
                  "end": 75.557
                },
                {
                  "character": "r",
                  "start": 75.557,
                  "end": 75.673
                }
              ]
            },
            {
              "word": "but",
              "start": 75.998,
              "end": 76.172,
              "characters": [
                {
                  "character": "b",
                  "start": 75.998,
                  "end": 76.08
                },
                {
                  "character": "u",
                  "start": 76.08,
                  "end": 76.138
                },
                {
                  "character": "t",
                  "start": 76.138,
                  "end": 76.172
                }
              ]
            },
            {
              "word": "we",
              "start": 76.231,
              "end": 76.335,
              "characters": [
                {
                  "character": "w",
                  "start": 76.231,
                  "end": 76.265
                },
                {
                  "character": "e",
                  "start": 76.265,
                  "end": 76.335
                }
              ]
            },
            {
              "word": "are",
              "start": 76.393,
              "end": 76.509,
              "characters": [
                {
                  "character": "a",
                  "start": 76.393,
                  "end": 76.428
                },
                {
                  "character": "r",
                  "start": 76.428,
                  "end": 76.474
                },
                {
                  "character": "e",
                  "start": 76.474,
                  "end": 76.509
                }
              ]
            },
            {
              "word": "not",
              "start": 76.555,
              "end": 76.706,
              "characters": [
                {
                  "character": "n",
                  "start": 76.555,
                  "end": 76.59
                },
                {
                  "character": "o",
                  "start": 76.59,
                  "end": 76.648
                },
                {
                  "character": "t",
                  "start": 76.648,
                  "end": 76.706
                }
              ]
            },
            {
              "word": "cheap”.",
              "start": 76.764,
              "end": 77.368,
              "characters": [
                {
                  "character": "c",
                  "start": 76.764,
                  "end": 76.822
                },
                {
                  "character": "h",
                  "start": 76.822,
                  "end": 76.88
                },
                {
                  "character": "e",
                  "start": 76.88,
                  "end": 76.938
                },
                {
                  "character": "a",
                  "start": 76.938,
                  "end": 76.996
                },
                {
                  "character": "p",
                  "start": 76.996,
                  "end": 77.113
                },
                {
                  "character": "”",
                  "start": 77.113,
                  "end": 77.287
                },
                {
                  "character": ".",
                  "start": 77.287,
                  "end": 77.368
                }
              ]
            },
            {
              "word": "“I",
              "start": 78.32,
              "end": 78.564,
              "characters": [
                {
                  "character": "“",
                  "start": 78.32,
                  "end": 78.494
                },
                {
                  "character": "I",
                  "start": 78.494,
                  "end": 78.564
                }
              ]
            },
            {
              "word": "was",
              "start": 78.68,
              "end": 78.808,
              "characters": [
                {
                  "character": "w",
                  "start": 78.68,
                  "end": 78.715
                },
                {
                  "character": "a",
                  "start": 78.715,
                  "end": 78.773
                },
                {
                  "character": "s",
                  "start": 78.773,
                  "end": 78.808
                }
              ]
            },
            {
              "word": "just",
              "start": 78.889,
              "end": 79.086,
              "characters": [
                {
                  "character": "j",
                  "start": 78.889,
                  "end": 78.935
                },
                {
                  "character": "u",
                  "start": 78.935,
                  "end": 79.005
                },
                {
                  "character": "s",
                  "start": 79.005,
                  "end": 79.051
                },
                {
                  "character": "t",
                  "start": 79.051,
                  "end": 79.086
                }
              ]
            },
            {
              "word": "joking!”,",
              "start": 79.156,
              "end": 79.969,
              "characters": [
                {
                  "character": "j",
                  "start": 79.156,
                  "end": 79.226
                },
                {
                  "character": "o",
                  "start": 79.226,
                  "end": 79.376
                },
                {
                  "character": "k",
                  "start": 79.376,
                  "end": 79.469
                },
                {
                  "character": "i",
                  "start": 79.469,
                  "end": 79.562
                },
                {
                  "character": "n",
                  "start": 79.562,
                  "end": 79.597
                },
                {
                  "character": "g",
                  "start": 79.597,
                  "end": 79.678
                },
                {
                  "character": "!",
                  "start": 79.678,
                  "end": 79.794
                },
                {
                  "character": "”",
                  "start": 79.794,
                  "end": 79.852
                },
                {
                  "character": ",",
                  "start": 79.852,
                  "end": 79.969
                }
              ]
            },
            {
              "word": "she",
              "start": 80.178,
              "end": 80.317,
              "characters": [
                {
                  "character": "s",
                  "start": 80.178,
                  "end": 80.236
                },
                {
                  "character": "h",
                  "start": 80.236,
                  "end": 80.294
                },
                {
                  "character": "e",
                  "start": 80.294,
                  "end": 80.317
                }
              ]
            },
            {
              "word": "said.",
              "start": 80.387,
              "end": 80.932,
              "characters": [
                {
                  "character": "s",
                  "start": 80.387,
                  "end": 80.456
                },
                {
                  "character": "a",
                  "start": 80.456,
                  "end": 80.549
                },
                {
                  "character": "i",
                  "start": 80.549,
                  "end": 80.607
                },
                {
                  "character": "d",
                  "start": 80.607,
                  "end": 80.758
                },
                {
                  "character": ".",
                  "start": 80.758,
                  "end": 80.932
                }
              ]
            },
            {
              "word": "“No,",
              "start": 81.629,
              "end": 81.965,
              "characters": [
                {
                  "character": "“",
                  "start": 81.629,
                  "end": 81.78
                },
                {
                  "character": "N",
                  "start": 81.78,
                  "end": 81.849
                },
                {
                  "character": "o",
                  "start": 81.849,
                  "end": 81.931
                },
                {
                  "character": ",",
                  "start": 81.931,
                  "end": 81.965
                }
              ]
            },
            {
              "word": "you",
              "start": 82,
              "end": 82.082,
              "characters": [
                {
                  "character": "y",
                  "start": 82,
                  "end": 82.024
                },
                {
                  "character": "o",
                  "start": 82.024,
                  "end": 82.047
                },
                {
                  "character": "u",
                  "start": 82.047,
                  "end": 82.082
                }
              ]
            },
            {
              "word": "weren’t.",
              "start": 82.128,
              "end": 82.639,
              "characters": [
                {
                  "character": "w",
                  "start": 82.128,
                  "end": 82.163
                },
                {
                  "character": "e",
                  "start": 82.163,
                  "end": 82.233
                },
                {
                  "character": "r",
                  "start": 82.233,
                  "end": 82.279
                },
                {
                  "character": "e",
                  "start": 82.279,
                  "end": 82.314
                },
                {
                  "character": "n",
                  "start": 82.314,
                  "end": 82.36
                },
                {
                  "character": "’",
                  "start": 82.36,
                  "end": 82.395
                },
                {
                  "character": "t",
                  "start": 82.395,
                  "end": 82.511
                },
                {
                  "character": ".",
                  "start": 82.511,
                  "end": 82.639
                }
              ]
            },
            {
              "word": "That’s",
              "start": 83.452,
              "end": 83.684,
              "characters": [
                {
                  "character": "T",
                  "start": 83.452,
                  "end": 83.498
                },
                {
                  "character": "h",
                  "start": 83.498,
                  "end": 83.556
                },
                {
                  "character": "a",
                  "start": 83.556,
                  "end": 83.579
                },
                {
                  "character": "t",
                  "start": 83.579,
                  "end": 83.614
                },
                {
                  "character": "’",
                  "start": 83.614,
                  "end": 83.649
                },
                {
                  "character": "s",
                  "start": 83.649,
                  "end": 83.684
                }
              ]
            },
            {
              "word": "the",
              "start": 83.719,
              "end": 83.788,
              "characters": [
                {
                  "character": "t",
                  "start": 83.719,
                  "end": 83.742
                },
                {
                  "character": "h",
                  "start": 83.742,
                  "end": 83.765
                },
                {
                  "character": "e",
                  "start": 83.765,
                  "end": 83.788
                }
              ]
            },
            {
              "word": "second",
              "start": 83.846,
              "end": 84.125,
              "characters": [
                {
                  "character": "s",
                  "start": 83.846,
                  "end": 83.893
                },
                {
                  "character": "e",
                  "start": 83.893,
                  "end": 83.962
                },
                {
                  "character": "c",
                  "start": 83.962,
                  "end": 84.02
                },
                {
                  "character": "o",
                  "start": 84.02,
                  "end": 84.055
                },
                {
                  "character": "n",
                  "start": 84.055,
                  "end": 84.102
                },
                {
                  "character": "d",
                  "start": 84.102,
                  "end": 84.125
                }
              ]
            },
            {
              "word": "time",
              "start": 84.171,
              "end": 84.438,
              "characters": [
                {
                  "character": "t",
                  "start": 84.171,
                  "end": 84.229
                },
                {
                  "character": "i",
                  "start": 84.229,
                  "end": 84.346
                },
                {
                  "character": "m",
                  "start": 84.346,
                  "end": 84.404
                },
                {
                  "character": "e",
                  "start": 84.404,
                  "end": 84.438
                }
              ]
            },
            {
              "word": "and",
              "start": 84.473,
              "end": 84.566,
              "characters": [
                {
                  "character": "a",
                  "start": 84.473,
                  "end": 84.508
                },
                {
                  "character": "n",
                  "start": 84.508,
                  "end": 84.543
                },
                {
                  "character": "d",
                  "start": 84.543,
                  "end": 84.566
                }
              ]
            },
            {
              "word": "I",
              "start": 84.624,
              "end": 84.647,
              "characters": [
                {
                  "character": "I",
                  "start": 84.624,
                  "end": 84.647
                }
              ]
            },
            {
              "word": "don’t",
              "start": 84.705,
              "end": 84.88,
              "characters": [
                {
                  "character": "d",
                  "start": 84.705,
                  "end": 84.74
                },
                {
                  "character": "o",
                  "start": 84.74,
                  "end": 84.775
                },
                {
                  "character": "n",
                  "start": 84.775,
                  "end": 84.81
                },
                {
                  "character": "’",
                  "start": 84.81,
                  "end": 84.845
                },
                {
                  "character": "t",
                  "start": 84.845,
                  "end": 84.88
                }
              ]
            },
            {
              "word": "like",
              "start": 84.926,
              "end": 85.135,
              "characters": [
                {
                  "character": "l",
                  "start": 84.926,
                  "end": 84.961
                },
                {
                  "character": "i",
                  "start": 84.961,
                  "end": 85.031
                },
                {
                  "character": "k",
                  "start": 85.031,
                  "end": 85.089
                },
                {
                  "character": "e",
                  "start": 85.089,
                  "end": 85.135
                }
              ]
            },
            {
              "word": "it”,",
              "start": 85.181,
              "end": 85.425,
              "characters": [
                {
                  "character": "i",
                  "start": 85.181,
                  "end": 85.216
                },
                {
                  "character": "t",
                  "start": 85.216,
                  "end": 85.298
                },
                {
                  "character": "”",
                  "start": 85.298,
                  "end": 85.367
                },
                {
                  "character": ",",
                  "start": 85.367,
                  "end": 85.425
                }
              ]
            },
            {
              "word": "I",
              "start": 85.541,
              "end": 85.588,
              "characters": [
                {
                  "character": "I",
                  "start": 85.541,
                  "end": 85.588
                }
              ]
            },
            {
              "word": "told",
              "start": 85.704,
              "end": 85.936,
              "characters": [
                {
                  "character": "t",
                  "start": 85.704,
                  "end": 85.75
                },
                {
                  "character": "o",
                  "start": 85.75,
                  "end": 85.832
                },
                {
                  "character": "l",
                  "start": 85.832,
                  "end": 85.901
                },
                {
                  "character": "d",
                  "start": 85.901,
                  "end": 85.936
                }
              ]
            },
            {
              "word": "her.",
              "start": 85.983,
              "end": 86.296,
              "characters": [
                {
                  "character": "h",
                  "start": 85.983,
                  "end": 86.006
                },
                {
                  "character": "e",
                  "start": 86.006,
                  "end": 86.041
                },
                {
                  "character": "r",
                  "start": 86.041,
                  "end": 86.122
                },
                {
                  "character": ".",
                  "start": 86.122,
                  "end": 86.296
                }
              ]
            },
            {
              "word": "Now",
              "start": 86.9,
              "end": 87.097,
              "characters": [
                {
                  "character": "N",
                  "start": 86.9,
                  "end": 86.981
                },
                {
                  "character": "o",
                  "start": 86.981,
                  "end": 87.062
                },
                {
                  "character": "w",
                  "start": 87.062,
                  "end": 87.097
                }
              ]
            },
            {
              "word": "she",
              "start": 87.167,
              "end": 87.271,
              "characters": [
                {
                  "character": "s",
                  "start": 87.167,
                  "end": 87.202
                },
                {
                  "character": "h",
                  "start": 87.202,
                  "end": 87.248
                },
                {
                  "character": "e",
                  "start": 87.248,
                  "end": 87.271
                }
              ]
            },
            {
              "word": "got",
              "start": 87.341,
              "end": 87.527,
              "characters": [
                {
                  "character": "g",
                  "start": 87.341,
                  "end": 87.387
                },
                {
                  "character": "o",
                  "start": 87.387,
                  "end": 87.469
                },
                {
                  "character": "t",
                  "start": 87.469,
                  "end": 87.527
                }
              ]
            },
            {
              "word": "angry,",
              "start": 87.585,
              "end": 88.072,
              "characters": [
                {
                  "character": "a",
                  "start": 87.585,
                  "end": 87.631
                },
                {
                  "character": "n",
                  "start": 87.631,
                  "end": 87.712
                },
                {
                  "character": "g",
                  "start": 87.712,
                  "end": 87.77
                },
                {
                  "character": "r",
                  "start": 87.77,
                  "end": 87.84
                },
                {
                  "character": "y",
                  "start": 87.84,
                  "end": 87.956
                },
                {
                  "character": ",",
                  "start": 87.956,
                  "end": 88.072
                }
              ]
            },
            {
              "word": "raised",
              "start": 88.246,
              "end": 88.572,
              "characters": [
                {
                  "character": "r",
                  "start": 88.246,
                  "end": 88.316
                },
                {
                  "character": "a",
                  "start": 88.316,
                  "end": 88.386
                },
                {
                  "character": "i",
                  "start": 88.386,
                  "end": 88.444
                },
                {
                  "character": "s",
                  "start": 88.444,
                  "end": 88.49
                },
                {
                  "character": "e",
                  "start": 88.49,
                  "end": 88.548
                },
                {
                  "character": "d",
                  "start": 88.548,
                  "end": 88.572
                }
              ]
            },
            {
              "word": "her",
              "start": 88.606,
              "end": 88.688,
              "characters": [
                {
                  "character": "h",
                  "start": 88.606,
                  "end": 88.641
                },
                {
                  "character": "e",
                  "start": 88.641,
                  "end": 88.664
                },
                {
                  "character": "r",
                  "start": 88.664,
                  "end": 88.688
                }
              ]
            },
            {
              "word": "voice",
              "start": 88.734,
              "end": 88.99,
              "characters": [
                {
                  "character": "v",
                  "start": 88.734,
                  "end": 88.781
                },
                {
                  "character": "o",
                  "start": 88.781,
                  "end": 88.85
                },
                {
                  "character": "i",
                  "start": 88.85,
                  "end": 88.908
                },
                {
                  "character": "c",
                  "start": 88.908,
                  "end": 88.955
                },
                {
                  "character": "e",
                  "start": 88.955,
                  "end": 88.99
                }
              ]
            },
            {
              "word": "with",
              "start": 89.013,
              "end": 89.152,
              "characters": [
                {
                  "character": "w",
                  "start": 89.013,
                  "end": 89.048
                },
                {
                  "character": "i",
                  "start": 89.048,
                  "end": 89.082
                },
                {
                  "character": "t",
                  "start": 89.082,
                  "end": 89.117
                },
                {
                  "character": "h",
                  "start": 89.117,
                  "end": 89.152
                }
              ]
            },
            {
              "word": "me,",
              "start": 89.199,
              "end": 89.535,
              "characters": [
                {
                  "character": "m",
                  "start": 89.199,
                  "end": 89.245
                },
                {
                  "character": "e",
                  "start": 89.245,
                  "end": 89.419
                },
                {
                  "character": ",",
                  "start": 89.419,
                  "end": 89.535
                }
              ]
            },
            {
              "word": "“Even",
              "start": 89.651,
              "end": 90.081,
              "characters": [
                {
                  "character": "“",
                  "start": 89.651,
                  "end": 89.802
                },
                {
                  "character": "E",
                  "start": 89.802,
                  "end": 89.918
                },
                {
                  "character": "v",
                  "start": 89.918,
                  "end": 89.976
                },
                {
                  "character": "e",
                  "start": 89.976,
                  "end": 90.046
                },
                {
                  "character": "n",
                  "start": 90.046,
                  "end": 90.081
                }
              ]
            },
            {
              "word": "so,",
              "start": 90.162,
              "end": 90.51,
              "characters": [
                {
                  "character": "s",
                  "start": 90.162,
                  "end": 90.243
                },
                {
                  "character": "o",
                  "start": 90.243,
                  "end": 90.452
                },
                {
                  "character": ",",
                  "start": 90.452,
                  "end": 90.51
                }
              ]
            },
            {
              "word": "this",
              "start": 90.557,
              "end": 90.731,
              "characters": [
                {
                  "character": "t",
                  "start": 90.557,
                  "end": 90.58
                },
                {
                  "character": "h",
                  "start": 90.58,
                  "end": 90.638
                },
                {
                  "character": "i",
                  "start": 90.638,
                  "end": 90.685
                },
                {
                  "character": "s",
                  "start": 90.685,
                  "end": 90.731
                }
              ]
            },
            {
              "word": "is",
              "start": 90.789,
              "end": 90.882,
              "characters": [
                {
                  "character": "i",
                  "start": 90.789,
                  "end": 90.836
                },
                {
                  "character": "s",
                  "start": 90.836,
                  "end": 90.882
                }
              ]
            },
            {
              "word": "an",
              "start": 90.928,
              "end": 90.986,
              "characters": [
                {
                  "character": "a",
                  "start": 90.928,
                  "end": 90.952
                },
                {
                  "character": "n",
                  "start": 90.952,
                  "end": 90.986
                }
              ]
            },
            {
              "word": "expensive",
              "start": 91.033,
              "end": 91.532,
              "characters": [
                {
                  "character": "e",
                  "start": 91.033,
                  "end": 91.079
                },
                {
                  "character": "x",
                  "start": 91.079,
                  "end": 91.149
                },
                {
                  "character": "p",
                  "start": 91.149,
                  "end": 91.23
                },
                {
                  "character": "e",
                  "start": 91.23,
                  "end": 91.288
                },
                {
                  "character": "n",
                  "start": 91.288,
                  "end": 91.335
                },
                {
                  "character": "s",
                  "start": 91.335,
                  "end": 91.404
                },
                {
                  "character": "i",
                  "start": 91.404,
                  "end": 91.462
                },
                {
                  "character": "v",
                  "start": 91.462,
                  "end": 91.497
                },
                {
                  "character": "e",
                  "start": 91.497,
                  "end": 91.532
                }
              ]
            },
            {
              "word": "toy,",
              "start": 91.567,
              "end": 92.089,
              "characters": [
                {
                  "character": "t",
                  "start": 91.567,
                  "end": 91.613
                },
                {
                  "character": "o",
                  "start": 91.613,
                  "end": 91.788
                },
                {
                  "character": "y",
                  "start": 91.788,
                  "end": 91.938
                },
                {
                  "character": ",",
                  "start": 91.938,
                  "end": 92.089
                }
              ]
            },
            {
              "word": "what",
              "start": 92.264,
              "end": 92.449,
              "characters": [
                {
                  "character": "w",
                  "start": 92.264,
                  "end": 92.322
                },
                {
                  "character": "h",
                  "start": 92.322,
                  "end": 92.38
                },
                {
                  "character": "a",
                  "start": 92.38,
                  "end": 92.414
                },
                {
                  "character": "t",
                  "start": 92.414,
                  "end": 92.449
                }
              ]
            },
            {
              "word": "wrong",
              "start": 92.484,
              "end": 92.705,
              "characters": [
                {
                  "character": "w",
                  "start": 92.484,
                  "end": 92.519
                },
                {
                  "character": "r",
                  "start": 92.519,
                  "end": 92.577
                },
                {
                  "character": "o",
                  "start": 92.577,
                  "end": 92.623
                },
                {
                  "character": "n",
                  "start": 92.623,
                  "end": 92.681
                },
                {
                  "character": "g",
                  "start": 92.681,
                  "end": 92.705
                }
              ]
            },
            {
              "word": "with",
              "start": 92.74,
              "end": 92.867,
              "characters": [
                {
                  "character": "w",
                  "start": 92.74,
                  "end": 92.774
                },
                {
                  "character": "i",
                  "start": 92.774,
                  "end": 92.809
                },
                {
                  "character": "t",
                  "start": 92.809,
                  "end": 92.832
                },
                {
                  "character": "h",
                  "start": 92.832,
                  "end": 92.867
                }
              ]
            },
            {
              "word": "begging",
              "start": 92.925,
              "end": 93.227,
              "characters": [
                {
                  "character": "b",
                  "start": 92.925,
                  "end": 92.96
                },
                {
                  "character": "e",
                  "start": 92.96,
                  "end": 93.018
                },
                {
                  "character": "g",
                  "start": 93.018,
                  "end": 93.076
                },
                {
                  "character": "g",
                  "start": 93.076,
                  "end": 93.123
                },
                {
                  "character": "i",
                  "start": 93.123,
                  "end": 93.181
                },
                {
                  "character": "n",
                  "start": 93.181,
                  "end": 93.204
                },
                {
                  "character": "g",
                  "start": 93.204,
                  "end": 93.227
                }
              ]
            },
            {
              "word": "a",
              "start": 93.285,
              "end": 93.308,
              "characters": [
                {
                  "character": "a",
                  "start": 93.285,
                  "end": 93.308
                }
              ]
            },
            {
              "word": "little?”.",
              "start": 93.367,
              "end": 93.831,
              "characters": [
                {
                  "character": "l",
                  "start": 93.367,
                  "end": 93.401
                },
                {
                  "character": "i",
                  "start": 93.401,
                  "end": 93.459
                },
                {
                  "character": "t",
                  "start": 93.459,
                  "end": 93.494
                },
                {
                  "character": "t",
                  "start": 93.494,
                  "end": 93.541
                },
                {
                  "character": "l",
                  "start": 93.541,
                  "end": 93.587
                },
                {
                  "character": "e",
                  "start": 93.587,
                  "end": 93.715
                },
                {
                  "character": "?",
                  "start": 93.715,
                  "end": 93.738
                },
                {
                  "character": "”",
                  "start": 93.738,
                  "end": 93.761
                },
                {
                  "character": ".",
                  "start": 93.761,
                  "end": 93.831
                }
              ]
            },
            {
              "word": "“You",
              "start": 94.644,
              "end": 94.887,
              "characters": [
                {
                  "character": "“",
                  "start": 94.644,
                  "end": 94.76
                },
                {
                  "character": "Y",
                  "start": 94.76,
                  "end": 94.818
                },
                {
                  "character": "o",
                  "start": 94.818,
                  "end": 94.853
                },
                {
                  "character": "u",
                  "start": 94.853,
                  "end": 94.887
                }
              ]
            },
            {
              "word": "take",
              "start": 94.969,
              "end": 95.166,
              "characters": [
                {
                  "character": "t",
                  "start": 94.969,
                  "end": 95.015
                },
                {
                  "character": "a",
                  "start": 95.015,
                  "end": 95.073
                },
                {
                  "character": "k",
                  "start": 95.073,
                  "end": 95.12
                },
                {
                  "character": "e",
                  "start": 95.12,
                  "end": 95.166
                }
              ]
            },
            {
              "word": "the",
              "start": 95.201,
              "end": 95.271,
              "characters": [
                {
                  "character": "t",
                  "start": 95.201,
                  "end": 95.224
                },
                {
                  "character": "h",
                  "start": 95.224,
                  "end": 95.247
                },
                {
                  "character": "e",
                  "start": 95.247,
                  "end": 95.271
                }
              ]
            },
            {
              "word": "gift",
              "start": 95.329,
              "end": 95.549,
              "characters": [
                {
                  "character": "g",
                  "start": 95.329,
                  "end": 95.375
                },
                {
                  "character": "i",
                  "start": 95.375,
                  "end": 95.445
                },
                {
                  "character": "f",
                  "start": 95.445,
                  "end": 95.503
                },
                {
                  "character": "t",
                  "start": 95.503,
                  "end": 95.549
                }
              ]
            },
            {
              "word": "back",
              "start": 95.619,
              "end": 95.863,
              "characters": [
                {
                  "character": "b",
                  "start": 95.619,
                  "end": 95.677
                },
                {
                  "character": "a",
                  "start": 95.677,
                  "end": 95.77
                },
                {
                  "character": "c",
                  "start": 95.77,
                  "end": 95.816
                },
                {
                  "character": "k",
                  "start": 95.816,
                  "end": 95.863
                }
              ]
            },
            {
              "word": "and",
              "start": 95.921,
              "end": 96.002,
              "characters": [
                {
                  "character": "a",
                  "start": 95.921,
                  "end": 95.944
                },
                {
                  "character": "n",
                  "start": 95.944,
                  "end": 95.967
                },
                {
                  "character": "d",
                  "start": 95.967,
                  "end": 96.002
                }
              ]
            },
            {
              "word": "please",
              "start": 96.072,
              "end": 96.385,
              "characters": [
                {
                  "character": "p",
                  "start": 96.072,
                  "end": 96.13
                },
                {
                  "character": "l",
                  "start": 96.13,
                  "end": 96.188
                },
                {
                  "character": "e",
                  "start": 96.188,
                  "end": 96.246
                },
                {
                  "character": "a",
                  "start": 96.246,
                  "end": 96.292
                },
                {
                  "character": "s",
                  "start": 96.292,
                  "end": 96.35
                },
                {
                  "character": "e",
                  "start": 96.35,
                  "end": 96.385
                }
              ]
            },
            {
              "word": "leave”,",
              "start": 96.443,
              "end": 97.035,
              "characters": [
                {
                  "character": "l",
                  "start": 96.443,
                  "end": 96.501
                },
                {
                  "character": "e",
                  "start": 96.501,
                  "end": 96.571
                },
                {
                  "character": "a",
                  "start": 96.571,
                  "end": 96.641
                },
                {
                  "character": "v",
                  "start": 96.641,
                  "end": 96.687
                },
                {
                  "character": "e",
                  "start": 96.687,
                  "end": 96.861
                },
                {
                  "character": "”",
                  "start": 96.861,
                  "end": 96.884
                },
                {
                  "character": ",",
                  "start": 96.884,
                  "end": 97.035
                }
              ]
            },
            {
              "word": "I",
              "start": 97.151,
              "end": 97.198,
              "characters": [
                {
                  "character": "I",
                  "start": 97.151,
                  "end": 97.198
                }
              ]
            },
            {
              "word": "told",
              "start": 97.314,
              "end": 97.546,
              "characters": [
                {
                  "character": "t",
                  "start": 97.314,
                  "end": 97.36
                },
                {
                  "character": "o",
                  "start": 97.36,
                  "end": 97.453
                },
                {
                  "character": "l",
                  "start": 97.453,
                  "end": 97.511
                },
                {
                  "character": "d",
                  "start": 97.511,
                  "end": 97.546
                }
              ]
            },
            {
              "word": "her,",
              "start": 97.593,
              "end": 97.836,
              "characters": [
                {
                  "character": "h",
                  "start": 97.593,
                  "end": 97.616
                },
                {
                  "character": "e",
                  "start": 97.616,
                  "end": 97.639
                },
                {
                  "character": "r",
                  "start": 97.639,
                  "end": 97.72
                },
                {
                  "character": ",",
                  "start": 97.72,
                  "end": 97.836
                }
              ]
            },
            {
              "word": "while",
              "start": 98.08,
              "end": 98.312,
              "characters": [
                {
                  "character": "w",
                  "start": 98.08,
                  "end": 98.138
                },
                {
                  "character": "h",
                  "start": 98.138,
                  "end": 98.196
                },
                {
                  "character": "i",
                  "start": 98.196,
                  "end": 98.243
                },
                {
                  "character": "l",
                  "start": 98.243,
                  "end": 98.278
                },
                {
                  "character": "e",
                  "start": 98.278,
                  "end": 98.312
                }
              ]
            },
            {
              "word": "getting",
              "start": 98.359,
              "end": 98.591,
              "characters": [
                {
                  "character": "g",
                  "start": 98.359,
                  "end": 98.394
                },
                {
                  "character": "e",
                  "start": 98.394,
                  "end": 98.44
                },
                {
                  "character": "t",
                  "start": 98.44,
                  "end": 98.475
                },
                {
                  "character": "t",
                  "start": 98.475,
                  "end": 98.51
                },
                {
                  "character": "i",
                  "start": 98.51,
                  "end": 98.545
                },
                {
                  "character": "n",
                  "start": 98.545,
                  "end": 98.568
                },
                {
                  "character": "g",
                  "start": 98.568,
                  "end": 98.591
                }
              ]
            },
            {
              "word": "up",
              "start": 98.649,
              "end": 98.754,
              "characters": [
                {
                  "character": "u",
                  "start": 98.649,
                  "end": 98.707
                },
                {
                  "character": "p",
                  "start": 98.707,
                  "end": 98.754
                }
              ]
            },
            {
              "word": "and",
              "start": 98.8,
              "end": 98.881,
              "characters": [
                {
                  "character": "a",
                  "start": 98.8,
                  "end": 98.823
                },
                {
                  "character": "n",
                  "start": 98.823,
                  "end": 98.846
                },
                {
                  "character": "d",
                  "start": 98.846,
                  "end": 98.881
                }
              ]
            },
            {
              "word": "holding",
              "start": 98.939,
              "end": 99.218,
              "characters": [
                {
                  "character": "h",
                  "start": 98.939,
                  "end": 98.974
                },
                {
                  "character": "o",
                  "start": 98.974,
                  "end": 99.032
                },
                {
                  "character": "l",
                  "start": 99.032,
                  "end": 99.09
                },
                {
                  "character": "d",
                  "start": 99.09,
                  "end": 99.125
                },
                {
                  "character": "i",
                  "start": 99.125,
                  "end": 99.172
                },
                {
                  "character": "n",
                  "start": 99.172,
                  "end": 99.195
                },
                {
                  "character": "g",
                  "start": 99.195,
                  "end": 99.218
                }
              ]
            },
            {
              "word": "the",
              "start": 99.264,
              "end": 99.334,
              "characters": [
                {
                  "character": "t",
                  "start": 99.264,
                  "end": 99.288
                },
                {
                  "character": "h",
                  "start": 99.288,
                  "end": 99.311
                },
                {
                  "character": "e",
                  "start": 99.311,
                  "end": 99.334
                }
              ]
            },
            {
              "word": "door",
              "start": 99.369,
              "end": 99.566,
              "characters": [
                {
                  "character": "d",
                  "start": 99.369,
                  "end": 99.404
                },
                {
                  "character": "o",
                  "start": 99.404,
                  "end": 99.462
                },
                {
                  "character": "o",
                  "start": 99.462,
                  "end": 99.531
                },
                {
                  "character": "r",
                  "start": 99.531,
                  "end": 99.566
                }
              ]
            },
            {
              "word": "open.",
              "start": 99.636,
              "end": 100.077,
              "characters": [
                {
                  "character": "o",
                  "start": 99.636,
                  "end": 99.706
                },
                {
                  "character": "p",
                  "start": 99.706,
                  "end": 99.775
                },
                {
                  "character": "e",
                  "start": 99.775,
                  "end": 99.845
                },
                {
                  "character": "n",
                  "start": 99.845,
                  "end": 99.926
                },
                {
                  "character": ".",
                  "start": 99.926,
                  "end": 100.077
                }
              ]
            },
            {
              "word": "She",
              "start": 100.774,
              "end": 100.925,
              "characters": [
                {
                  "character": "S",
                  "start": 100.774,
                  "end": 100.832
                },
                {
                  "character": "h",
                  "start": 100.832,
                  "end": 100.89
                },
                {
                  "character": "e",
                  "start": 100.89,
                  "end": 100.925
                }
              ]
            },
            {
              "word": "left",
              "start": 101.018,
              "end": 101.377,
              "characters": [
                {
                  "character": "l",
                  "start": 101.018,
                  "end": 101.076
                },
                {
                  "character": "e",
                  "start": 101.076,
                  "end": 101.192
                },
                {
                  "character": "f",
                  "start": 101.192,
                  "end": 101.261
                },
                {
                  "character": "t",
                  "start": 101.261,
                  "end": 101.377
                }
              ]
            },
            {
              "word": "and",
              "start": 101.528,
              "end": 101.726,
              "characters": [
                {
                  "character": "a",
                  "start": 101.528,
                  "end": 101.644
                },
                {
                  "character": "n",
                  "start": 101.644,
                  "end": 101.691
                },
                {
                  "character": "d",
                  "start": 101.691,
                  "end": 101.726
                }
              ]
            },
            {
              "word": "never",
              "start": 101.795,
              "end": 101.993,
              "characters": [
                {
                  "character": "n",
                  "start": 101.795,
                  "end": 101.83
                },
                {
                  "character": "e",
                  "start": 101.83,
                  "end": 101.888
                },
                {
                  "character": "v",
                  "start": 101.888,
                  "end": 101.923
                },
                {
                  "character": "e",
                  "start": 101.923,
                  "end": 101.97
                },
                {
                  "character": "r",
                  "start": 101.97,
                  "end": 101.993
                }
              ]
            },
            {
              "word": "came",
              "start": 102.051,
              "end": 102.248,
              "characters": [
                {
                  "character": "c",
                  "start": 102.051,
                  "end": 102.086
                },
                {
                  "character": "a",
                  "start": 102.086,
                  "end": 102.155
                },
                {
                  "character": "m",
                  "start": 102.155,
                  "end": 102.213
                },
                {
                  "character": "e",
                  "start": 102.213,
                  "end": 102.248
                }
              ]
            },
            {
              "word": "back.",
              "start": 102.295,
              "end": 102.747,
              "characters": [
                {
                  "character": "b",
                  "start": 102.295,
                  "end": 102.341
                },
                {
                  "character": "a",
                  "start": 102.341,
                  "end": 102.434
                },
                {
                  "character": "c",
                  "start": 102.434,
                  "end": 102.48
                },
                {
                  "character": "k",
                  "start": 102.48,
                  "end": 102.573
                },
                {
                  "character": ".",
                  "start": 102.573,
                  "end": 102.747
                }
              ]
            },
            {
              "word": "",
              "start": 102.747,
              "end": 104.048,
              "characters": []
            },
            {
              "word": "The",
              "start": 104.048,
              "end": 104.175,
              "characters": [
                {
                  "character": "T",
                  "start": 104.048,
                  "end": 104.106
                },
                {
                  "character": "h",
                  "start": 104.106,
                  "end": 104.152
                },
                {
                  "character": "e",
                  "start": 104.152,
                  "end": 104.175
                }
              ]
            },
            {
              "word": "next",
              "start": 104.233,
              "end": 104.454,
              "characters": [
                {
                  "character": "n",
                  "start": 104.233,
                  "end": 104.28
                },
                {
                  "character": "e",
                  "start": 104.28,
                  "end": 104.35
                },
                {
                  "character": "x",
                  "start": 104.35,
                  "end": 104.408
                },
                {
                  "character": "t",
                  "start": 104.408,
                  "end": 104.454
                }
              ]
            },
            {
              "word": "day,",
              "start": 104.512,
              "end": 104.977,
              "characters": [
                {
                  "character": "d",
                  "start": 104.512,
                  "end": 104.559
                },
                {
                  "character": "a",
                  "start": 104.559,
                  "end": 104.709
                },
                {
                  "character": "y",
                  "start": 104.709,
                  "end": 104.86
                },
                {
                  "character": ",",
                  "start": 104.86,
                  "end": 104.977
                }
              ]
            },
            {
              "word": "I",
              "start": 105.069,
              "end": 105.116,
              "characters": [
                {
                  "character": "I",
                  "start": 105.069,
                  "end": 105.116
                }
              ]
            },
            {
              "word": "took",
              "start": 105.209,
              "end": 105.383,
              "characters": [
                {
                  "character": "t",
                  "start": 105.209,
                  "end": 105.232
                },
                {
                  "character": "o",
                  "start": 105.232,
                  "end": 105.29
                },
                {
                  "character": "o",
                  "start": 105.29,
                  "end": 105.336
                },
                {
                  "character": "k",
                  "start": 105.336,
                  "end": 105.383
                }
              ]
            },
            {
              "word": "my",
              "start": 105.441,
              "end": 105.534,
              "characters": [
                {
                  "character": "m",
                  "start": 105.441,
                  "end": 105.487
                },
                {
                  "character": "y",
                  "start": 105.487,
                  "end": 105.534
                }
              ]
            },
            {
              "word": "daughter",
              "start": 105.603,
              "end": 105.894,
              "characters": [
                {
                  "character": "d",
                  "start": 105.603,
                  "end": 105.65
                },
                {
                  "character": "a",
                  "start": 105.65,
                  "end": 105.708
                },
                {
                  "character": "u",
                  "start": 105.708,
                  "end": 105.743
                },
                {
                  "character": "g",
                  "start": 105.743,
                  "end": 105.778
                },
                {
                  "character": "h",
                  "start": 105.778,
                  "end": 105.801
                },
                {
                  "character": "t",
                  "start": 105.801,
                  "end": 105.836
                },
                {
                  "character": "e",
                  "start": 105.836,
                  "end": 105.87
                },
                {
                  "character": "r",
                  "start": 105.87,
                  "end": 105.894
                }
              ]
            },
            {
              "word": "to",
              "start": 105.952,
              "end": 106.033,
              "characters": [
                {
                  "character": "t",
                  "start": 105.952,
                  "end": 105.987
                },
                {
                  "character": "o",
                  "start": 105.987,
                  "end": 106.033
                }
              ]
            },
            {
              "word": "the",
              "start": 106.103,
              "end": 106.172,
              "characters": [
                {
                  "character": "t",
                  "start": 106.103,
                  "end": 106.126
                },
                {
                  "character": "h",
                  "start": 106.126,
                  "end": 106.149
                },
                {
                  "character": "e",
                  "start": 106.149,
                  "end": 106.172
                }
              ]
            },
            {
              "word": "toy",
              "start": 106.219,
              "end": 106.439,
              "characters": [
                {
                  "character": "t",
                  "start": 106.219,
                  "end": 106.265
                },
                {
                  "character": "o",
                  "start": 106.265,
                  "end": 106.381
                },
                {
                  "character": "y",
                  "start": 106.381,
                  "end": 106.439
                }
              ]
            },
            {
              "word": "store",
              "start": 106.497,
              "end": 106.764,
              "characters": [
                {
                  "character": "s",
                  "start": 106.497,
                  "end": 106.532
                },
                {
                  "character": "t",
                  "start": 106.532,
                  "end": 106.59
                },
                {
                  "character": "o",
                  "start": 106.59,
                  "end": 106.672
                },
                {
                  "character": "r",
                  "start": 106.672,
                  "end": 106.73
                },
                {
                  "character": "e",
                  "start": 106.73,
                  "end": 106.764
                }
              ]
            },
            {
              "word": "to",
              "start": 106.799,
              "end": 106.846,
              "characters": [
                {
                  "character": "t",
                  "start": 106.799,
                  "end": 106.822
                },
                {
                  "character": "o",
                  "start": 106.822,
                  "end": 106.846
                }
              ]
            },
            {
              "word": "get",
              "start": 106.904,
              "end": 107.055,
              "characters": [
                {
                  "character": "g",
                  "start": 106.904,
                  "end": 106.95
                },
                {
                  "character": "e",
                  "start": 106.95,
                  "end": 107.008
                },
                {
                  "character": "t",
                  "start": 107.008,
                  "end": 107.055
                }
              ]
            },
            {
              "word": "that",
              "start": 107.09,
              "end": 107.24,
              "characters": [
                {
                  "character": "t",
                  "start": 107.09,
                  "end": 107.113
                },
                {
                  "character": "h",
                  "start": 107.113,
                  "end": 107.159
                },
                {
                  "character": "a",
                  "start": 107.159,
                  "end": 107.206
                },
                {
                  "character": "t",
                  "start": 107.206,
                  "end": 107.24
                }
              ]
            },
            {
              "word": "Lego",
              "start": 107.31,
              "end": 107.624,
              "characters": [
                {
                  "character": "L",
                  "start": 107.31,
                  "end": 107.368
                },
                {
                  "character": "e",
                  "start": 107.368,
                  "end": 107.449
                },
                {
                  "character": "g",
                  "start": 107.449,
                  "end": 107.531
                },
                {
                  "character": "o",
                  "start": 107.531,
                  "end": 107.624
                }
              ]
            },
            {
              "word": "set.",
              "start": 107.705,
              "end": 108.169,
              "characters": [
                {
                  "character": "s",
                  "start": 107.705,
                  "end": 107.751
                },
                {
                  "character": "e",
                  "start": 107.751,
                  "end": 107.902
                },
                {
                  "character": "t",
                  "start": 107.902,
                  "end": 108.018
                },
                {
                  "character": ".",
                  "start": 108.018,
                  "end": 108.169
                }
              ]
            },
            {
              "word": "My",
              "start": 108.552,
              "end": 108.68,
              "characters": [
                {
                  "character": "M",
                  "start": 108.552,
                  "end": 108.622
                },
                {
                  "character": "y",
                  "start": 108.622,
                  "end": 108.68
                }
              ]
            },
            {
              "word": "friend",
              "start": 108.738,
              "end": 108.936,
              "characters": [
                {
                  "character": "f",
                  "start": 108.738,
                  "end": 108.773
                },
                {
                  "character": "r",
                  "start": 108.773,
                  "end": 108.819
                },
                {
                  "character": "i",
                  "start": 108.819,
                  "end": 108.854
                },
                {
                  "character": "e",
                  "start": 108.854,
                  "end": 108.877
                },
                {
                  "character": "n",
                  "start": 108.877,
                  "end": 108.912
                },
                {
                  "character": "d",
                  "start": 108.912,
                  "end": 108.936
                }
              ]
            },
            {
              "word": "was",
              "start": 108.982,
              "end": 109.086,
              "characters": [
                {
                  "character": "w",
                  "start": 108.982,
                  "end": 109.017
                },
                {
                  "character": "a",
                  "start": 109.017,
                  "end": 109.052
                },
                {
                  "character": "s",
                  "start": 109.052,
                  "end": 109.086
                }
              ]
            },
            {
              "word": "right.",
              "start": 109.156,
              "end": 109.62,
              "characters": [
                {
                  "character": "r",
                  "start": 109.156,
                  "end": 109.225
                },
                {
                  "character": "i",
                  "start": 109.225,
                  "end": 109.295
                },
                {
                  "character": "g",
                  "start": 109.295,
                  "end": 109.341
                },
                {
                  "character": "h",
                  "start": 109.341,
                  "end": 109.376
                },
                {
                  "character": "t",
                  "start": 109.376,
                  "end": 109.469
                },
                {
                  "character": ".",
                  "start": 109.469,
                  "end": 109.62
                }
              ]
            },
            {
              "word": "It",
              "start": 109.945,
              "end": 110.073,
              "characters": [
                {
                  "character": "I",
                  "start": 109.945,
                  "end": 110.015
                },
                {
                  "character": "t",
                  "start": 110.015,
                  "end": 110.073
                }
              ]
            },
            {
              "word": "was",
              "start": 110.108,
              "end": 110.201,
              "characters": [
                {
                  "character": "w",
                  "start": 110.108,
                  "end": 110.131
                },
                {
                  "character": "a",
                  "start": 110.131,
                  "end": 110.166
                },
                {
                  "character": "s",
                  "start": 110.166,
                  "end": 110.201
                }
              ]
            },
            {
              "word": "a",
              "start": 110.247,
              "end": 110.27,
              "characters": [
                {
                  "character": "a",
                  "start": 110.247,
                  "end": 110.27
                }
              ]
            },
            {
              "word": "damn",
              "start": 110.34,
              "end": 110.63,
              "characters": [
                {
                  "character": "d",
                  "start": 110.34,
                  "end": 110.386
                },
                {
                  "character": "a",
                  "start": 110.386,
                  "end": 110.537
                },
                {
                  "character": "m",
                  "start": 110.537,
                  "end": 110.584
                },
                {
                  "character": "n",
                  "start": 110.584,
                  "end": 110.63
                }
              ]
            },
            {
              "word": "expensive",
              "start": 110.665,
              "end": 111.211,
              "characters": [
                {
                  "character": "e",
                  "start": 110.665,
                  "end": 110.711
                },
                {
                  "character": "x",
                  "start": 110.711,
                  "end": 110.793
                },
                {
                  "character": "p",
                  "start": 110.793,
                  "end": 110.874
                },
                {
                  "character": "e",
                  "start": 110.874,
                  "end": 110.944
                },
                {
                  "character": "n",
                  "start": 110.944,
                  "end": 110.99
                },
                {
                  "character": "s",
                  "start": 110.99,
                  "end": 111.06
                },
                {
                  "character": "i",
                  "start": 111.06,
                  "end": 111.129
                },
                {
                  "character": "v",
                  "start": 111.129,
                  "end": 111.176
                },
                {
                  "character": "e",
                  "start": 111.176,
                  "end": 111.211
                }
              ]
            },
            {
              "word": "toy,",
              "start": 111.245,
              "end": 111.605,
              "characters": [
                {
                  "character": "t",
                  "start": 111.245,
                  "end": 111.304
                },
                {
                  "character": "o",
                  "start": 111.304,
                  "end": 111.512
                },
                {
                  "character": "y",
                  "start": 111.512,
                  "end": 111.582
                },
                {
                  "character": ",",
                  "start": 111.582,
                  "end": 111.605
                }
              ]
            },
            {
              "word": "it",
              "start": 111.629,
              "end": 111.687,
              "characters": [
                {
                  "character": "i",
                  "start": 111.629,
                  "end": 111.663
                },
                {
                  "character": "t",
                  "start": 111.663,
                  "end": 111.687
                }
              ]
            },
            {
              "word": "cost",
              "start": 111.733,
              "end": 111.988,
              "characters": [
                {
                  "character": "c",
                  "start": 111.733,
                  "end": 111.78
                },
                {
                  "character": "o",
                  "start": 111.78,
                  "end": 111.896
                },
                {
                  "character": "s",
                  "start": 111.896,
                  "end": 111.954
                },
                {
                  "character": "t",
                  "start": 111.954,
                  "end": 111.988
                }
              ]
            },
            {
              "word": "me",
              "start": 112.035,
              "end": 112.116,
              "characters": [
                {
                  "character": "m",
                  "start": 112.035,
                  "end": 112.07
                },
                {
                  "character": "e",
                  "start": 112.07,
                  "end": 112.116
                }
              ]
            },
            {
              "word": "a",
              "start": 112.163,
              "end": 112.197,
              "characters": [
                {
                  "character": "a",
                  "start": 112.163,
                  "end": 112.197
                }
              ]
            },
            {
              "word": "big",
              "start": 112.279,
              "end": 112.488,
              "characters": [
                {
                  "character": "b",
                  "start": 112.279,
                  "end": 112.337
                },
                {
                  "character": "i",
                  "start": 112.337,
                  "end": 112.43
                },
                {
                  "character": "g",
                  "start": 112.43,
                  "end": 112.488
                }
              ]
            },
            {
              "word": "chunk",
              "start": 112.557,
              "end": 112.801,
              "characters": [
                {
                  "character": "c",
                  "start": 112.557,
                  "end": 112.604
                },
                {
                  "character": "h",
                  "start": 112.604,
                  "end": 112.662
                },
                {
                  "character": "u",
                  "start": 112.662,
                  "end": 112.708
                },
                {
                  "character": "n",
                  "start": 112.708,
                  "end": 112.755
                },
                {
                  "character": "k",
                  "start": 112.755,
                  "end": 112.801
                }
              ]
            },
            {
              "word": "of",
              "start": 112.836,
              "end": 112.882,
              "characters": [
                {
                  "character": "o",
                  "start": 112.836,
                  "end": 112.859
                },
                {
                  "character": "f",
                  "start": 112.859,
                  "end": 112.882
                }
              ]
            },
            {
              "word": "my",
              "start": 112.929,
              "end": 113.01,
              "characters": [
                {
                  "character": "m",
                  "start": 112.929,
                  "end": 112.964
                },
                {
                  "character": "y",
                  "start": 112.964,
                  "end": 113.01
                }
              ]
            },
            {
              "word": "skinny",
              "start": 113.057,
              "end": 113.37,
              "characters": [
                {
                  "character": "s",
                  "start": 113.057,
                  "end": 113.115
                },
                {
                  "character": "k",
                  "start": 113.115,
                  "end": 113.184
                },
                {
                  "character": "i",
                  "start": 113.184,
                  "end": 113.231
                },
                {
                  "character": "n",
                  "start": 113.231,
                  "end": 113.266
                },
                {
                  "character": "n",
                  "start": 113.266,
                  "end": 113.312
                },
                {
                  "character": "y",
                  "start": 113.312,
                  "end": 113.37
                }
              ]
            },
            {
              "word": "paycheck",
              "start": 113.428,
              "end": 113.893,
              "characters": [
                {
                  "character": "p",
                  "start": 113.428,
                  "end": 113.475
                },
                {
                  "character": "a",
                  "start": 113.475,
                  "end": 113.567
                },
                {
                  "character": "y",
                  "start": 113.567,
                  "end": 113.637
                },
                {
                  "character": "c",
                  "start": 113.637,
                  "end": 113.695
                },
                {
                  "character": "h",
                  "start": 113.695,
                  "end": 113.753
                },
                {
                  "character": "e",
                  "start": 113.753,
                  "end": 113.811
                },
                {
                  "character": "c",
                  "start": 113.811,
                  "end": 113.858
                },
                {
                  "character": "k",
                  "start": 113.858,
                  "end": 113.893
                }
              ]
            },
            {
              "word": "and",
              "start": 113.939,
              "end": 114.009,
              "characters": [
                {
                  "character": "a",
                  "start": 113.939,
                  "end": 113.962
                },
                {
                  "character": "n",
                  "start": 113.962,
                  "end": 113.985
                },
                {
                  "character": "d",
                  "start": 113.985,
                  "end": 114.009
                }
              ]
            },
            {
              "word": "a",
              "start": 114.043,
              "end": 114.067,
              "characters": [
                {
                  "character": "a",
                  "start": 114.043,
                  "end": 114.067
                }
              ]
            },
            {
              "word": "friendship.",
              "start": 114.125,
              "end": 114.937,
              "characters": [
                {
                  "character": "f",
                  "start": 114.125,
                  "end": 114.171
                },
                {
                  "character": "r",
                  "start": 114.171,
                  "end": 114.218
                },
                {
                  "character": "i",
                  "start": 114.218,
                  "end": 114.264
                },
                {
                  "character": "e",
                  "start": 114.264,
                  "end": 114.299
                },
                {
                  "character": "n",
                  "start": 114.299,
                  "end": 114.334
                },
                {
                  "character": "d",
                  "start": 114.334,
                  "end": 114.38
                },
                {
                  "character": "s",
                  "start": 114.38,
                  "end": 114.438
                },
                {
                  "character": "h",
                  "start": 114.438,
                  "end": 114.485
                },
                {
                  "character": "i",
                  "start": 114.485,
                  "end": 114.554
                },
                {
                  "character": "p",
                  "start": 114.554,
                  "end": 114.647
                },
                {
                  "character": ".",
                  "start": 114.647,
                  "end": 114.937
                }
              ]
            }
          ],
          "sentences": [
            {
              "sentence": "It was my",
              "start": 0,
              "end": 0.453,
              "words": [
                {
                  "word": "It",
                  "start": 0,
                  "end": 0.128,
                  "characters": [
                    {
                      "character": "I",
                      "start": 0,
                      "end": 0.081
                    },
                    {
                      "character": "t",
                      "start": 0.081,
                      "end": 0.128
                    }
                  ]
                },
                {
                  "word": "was",
                  "start": 0.174,
                  "end": 0.267,
                  "characters": [
                    {
                      "character": "w",
                      "start": 0.174,
                      "end": 0.197
                    },
                    {
                      "character": "a",
                      "start": 0.197,
                      "end": 0.232
                    },
                    {
                      "character": "s",
                      "start": 0.232,
                      "end": 0.267
                    }
                  ]
                },
                {
                  "word": "my",
                  "start": 0.337,
                  "end": 0.453,
                  "characters": [
                    {
                      "character": "m",
                      "start": 0.337,
                      "end": 0.383
                    },
                    {
                      "character": "y",
                      "start": 0.383,
                      "end": 0.453
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "daughter’s 5th",
              "start": 0.534,
              "end": 1.265,
              "words": [
                {
                  "word": "daughter’s",
                  "start": 0.534,
                  "end": 0.952,
                  "characters": [
                    {
                      "character": "d",
                      "start": 0.534,
                      "end": 0.592
                    },
                    {
                      "character": "a",
                      "start": 0.592,
                      "end": 0.662
                    },
                    {
                      "character": "u",
                      "start": 0.662,
                      "end": 0.697
                    },
                    {
                      "character": "g",
                      "start": 0.697,
                      "end": 0.731
                    },
                    {
                      "character": "h",
                      "start": 0.731,
                      "end": 0.766
                    },
                    {
                      "character": "t",
                      "start": 0.766,
                      "end": 0.801
                    },
                    {
                      "character": "e",
                      "start": 0.801,
                      "end": 0.836
                    },
                    {
                      "character": "r",
                      "start": 0.836,
                      "end": 0.871
                    },
                    {
                      "character": "’",
                      "start": 0.871,
                      "end": 0.917
                    },
                    {
                      "character": "s",
                      "start": 0.917,
                      "end": 0.952
                    }
                  ]
                },
                {
                  "word": "5th",
                  "start": 1.033,
                  "end": 1.265,
                  "characters": [
                    {
                      "character": "5",
                      "start": 1.033,
                      "end": 1.184
                    },
                    {
                      "character": "t",
                      "start": 1.184,
                      "end": 1.231
                    },
                    {
                      "character": "h",
                      "start": 1.231,
                      "end": 1.265
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "birthday. ",
              "start": 1.335,
              "end": 2.485,
              "words": [
                {
                  "word": "birthday.",
                  "start": 1.335,
                  "end": 2.043,
                  "characters": [
                    {
                      "character": "b",
                      "start": 1.335,
                      "end": 1.382
                    },
                    {
                      "character": "i",
                      "start": 1.382,
                      "end": 1.451
                    },
                    {
                      "character": "r",
                      "start": 1.451,
                      "end": 1.509
                    },
                    {
                      "character": "t",
                      "start": 1.509,
                      "end": 1.567
                    },
                    {
                      "character": "h",
                      "start": 1.567,
                      "end": 1.614
                    },
                    {
                      "character": "d",
                      "start": 1.614,
                      "end": 1.695
                    },
                    {
                      "character": "a",
                      "start": 1.695,
                      "end": 1.811
                    },
                    {
                      "character": "y",
                      "start": 1.811,
                      "end": 1.927
                    },
                    {
                      "character": ".",
                      "start": 1.927,
                      "end": 2.043
                    }
                  ]
                },
                {
                  "word": "",
                  "start": 2.043,
                  "end": 2.485,
                  "characters": []
                }
              ]
            },
            {
              "sentence": "Because I got",
              "start": 2.485,
              "end": 3.088,
              "words": [
                {
                  "word": "Because",
                  "start": 2.485,
                  "end": 2.786,
                  "characters": [
                    {
                      "character": "B",
                      "start": 2.485,
                      "end": 2.543
                    },
                    {
                      "character": "e",
                      "start": 2.543,
                      "end": 2.601
                    },
                    {
                      "character": "c",
                      "start": 2.601,
                      "end": 2.647
                    },
                    {
                      "character": "a",
                      "start": 2.647,
                      "end": 2.682
                    },
                    {
                      "character": "u",
                      "start": 2.682,
                      "end": 2.717
                    },
                    {
                      "character": "s",
                      "start": 2.717,
                      "end": 2.752
                    },
                    {
                      "character": "e",
                      "start": 2.752,
                      "end": 2.786
                    }
                  ]
                },
                {
                  "word": "I",
                  "start": 2.821,
                  "end": 2.844,
                  "characters": [
                    {
                      "character": "I",
                      "start": 2.821,
                      "end": 2.844
                    }
                  ]
                },
                {
                  "word": "got",
                  "start": 2.926,
                  "end": 3.088,
                  "characters": [
                    {
                      "character": "g",
                      "start": 2.926,
                      "end": 2.961
                    },
                    {
                      "character": "o",
                      "start": 2.961,
                      "end": 3.042
                    },
                    {
                      "character": "t",
                      "start": 3.042,
                      "end": 3.088
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "married and had",
              "start": 3.158,
              "end": 3.82,
              "words": [
                {
                  "word": "married",
                  "start": 3.158,
                  "end": 3.518,
                  "characters": [
                    {
                      "character": "m",
                      "start": 3.158,
                      "end": 3.204
                    },
                    {
                      "character": "a",
                      "start": 3.204,
                      "end": 3.286
                    },
                    {
                      "character": "r",
                      "start": 3.286,
                      "end": 3.344
                    },
                    {
                      "character": "r",
                      "start": 3.344,
                      "end": 3.39
                    },
                    {
                      "character": "i",
                      "start": 3.39,
                      "end": 3.437
                    },
                    {
                      "character": "e",
                      "start": 3.437,
                      "end": 3.495
                    },
                    {
                      "character": "d",
                      "start": 3.495,
                      "end": 3.518
                    }
                  ]
                },
                {
                  "word": "and",
                  "start": 3.553,
                  "end": 3.622,
                  "characters": [
                    {
                      "character": "a",
                      "start": 3.553,
                      "end": 3.576
                    },
                    {
                      "character": "n",
                      "start": 3.576,
                      "end": 3.599
                    },
                    {
                      "character": "d",
                      "start": 3.599,
                      "end": 3.622
                    }
                  ]
                },
                {
                  "word": "had",
                  "start": 3.68,
                  "end": 3.82,
                  "characters": [
                    {
                      "character": "h",
                      "start": 3.68,
                      "end": 3.727
                    },
                    {
                      "character": "a",
                      "start": 3.727,
                      "end": 3.773
                    },
                    {
                      "character": "d",
                      "start": 3.773,
                      "end": 3.82
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "her very early",
              "start": 3.866,
              "end": 4.54,
              "words": [
                {
                  "word": "her",
                  "start": 3.866,
                  "end": 3.936,
                  "characters": [
                    {
                      "character": "h",
                      "start": 3.866,
                      "end": 3.889
                    },
                    {
                      "character": "e",
                      "start": 3.889,
                      "end": 3.913
                    },
                    {
                      "character": "r",
                      "start": 3.913,
                      "end": 3.936
                    }
                  ]
                },
                {
                  "word": "very",
                  "start": 3.982,
                  "end": 4.203,
                  "characters": [
                    {
                      "character": "v",
                      "start": 3.982,
                      "end": 4.029
                    },
                    {
                      "character": "e",
                      "start": 4.029,
                      "end": 4.087
                    },
                    {
                      "character": "r",
                      "start": 4.087,
                      "end": 4.156
                    },
                    {
                      "character": "y",
                      "start": 4.156,
                      "end": 4.203
                    }
                  ]
                },
                {
                  "word": "early",
                  "start": 4.272,
                  "end": 4.54,
                  "characters": [
                    {
                      "character": "e",
                      "start": 4.272,
                      "end": 4.319
                    },
                    {
                      "character": "a",
                      "start": 4.319,
                      "end": 4.365
                    },
                    {
                      "character": "r",
                      "start": 4.365,
                      "end": 4.423
                    },
                    {
                      "character": "l",
                      "start": 4.423,
                      "end": 4.493
                    },
                    {
                      "character": "y",
                      "start": 4.493,
                      "end": 4.54
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "in my 20s, at",
              "start": 4.586,
              "end": 5.817,
              "words": [
                {
                  "word": "in",
                  "start": 4.586,
                  "end": 4.644,
                  "characters": [
                    {
                      "character": "i",
                      "start": 4.586,
                      "end": 4.609
                    },
                    {
                      "character": "n",
                      "start": 4.609,
                      "end": 4.644
                    }
                  ]
                },
                {
                  "word": "my",
                  "start": 4.702,
                  "end": 4.818,
                  "characters": [
                    {
                      "character": "m",
                      "start": 4.702,
                      "end": 4.748
                    },
                    {
                      "character": "y",
                      "start": 4.748,
                      "end": 4.818
                    }
                  ]
                },
                {
                  "word": "20s,",
                  "start": 4.911,
                  "end": 5.515,
                  "characters": [
                    {
                      "character": "2",
                      "start": 4.911,
                      "end": 5.062
                    },
                    {
                      "character": "0",
                      "start": 5.062,
                      "end": 5.271
                    },
                    {
                      "character": "s",
                      "start": 5.271,
                      "end": 5.422
                    },
                    {
                      "character": ",",
                      "start": 5.422,
                      "end": 5.515
                    }
                  ]
                },
                {
                  "word": "at",
                  "start": 5.666,
                  "end": 5.817,
                  "characters": [
                    {
                      "character": "a",
                      "start": 5.666,
                      "end": 5.782
                    },
                    {
                      "character": "t",
                      "start": 5.782,
                      "end": 5.817
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "that time, none",
              "start": 5.875,
              "end": 6.896,
              "words": [
                {
                  "word": "that",
                  "start": 5.875,
                  "end": 6.072,
                  "characters": [
                    {
                      "character": "t",
                      "start": 5.875,
                      "end": 5.898
                    },
                    {
                      "character": "h",
                      "start": 5.898,
                      "end": 5.968
                    },
                    {
                      "character": "a",
                      "start": 5.968,
                      "end": 6.026
                    },
                    {
                      "character": "t",
                      "start": 6.026,
                      "end": 6.072
                    }
                  ]
                },
                {
                  "word": "time,",
                  "start": 6.13,
                  "end": 6.571,
                  "characters": [
                    {
                      "character": "t",
                      "start": 6.13,
                      "end": 6.2
                    },
                    {
                      "character": "i",
                      "start": 6.2,
                      "end": 6.351
                    },
                    {
                      "character": "m",
                      "start": 6.351,
                      "end": 6.42
                    },
                    {
                      "character": "e",
                      "start": 6.42,
                      "end": 6.536
                    },
                    {
                      "character": ",",
                      "start": 6.536,
                      "end": 6.571
                    }
                  ]
                },
                {
                  "word": "none",
                  "start": 6.722,
                  "end": 6.896,
                  "characters": [
                    {
                      "character": "n",
                      "start": 6.722,
                      "end": 6.792
                    },
                    {
                      "character": "o",
                      "start": 6.792,
                      "end": 6.838
                    },
                    {
                      "character": "n",
                      "start": 6.838,
                      "end": 6.873
                    },
                    {
                      "character": "e",
                      "start": 6.873,
                      "end": 6.896
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "of my friends",
              "start": 6.92,
              "end": 7.43,
              "words": [
                {
                  "word": "of",
                  "start": 6.92,
                  "end": 6.966,
                  "characters": [
                    {
                      "character": "o",
                      "start": 6.92,
                      "end": 6.943
                    },
                    {
                      "character": "f",
                      "start": 6.943,
                      "end": 6.966
                    }
                  ]
                },
                {
                  "word": "my",
                  "start": 7.012,
                  "end": 7.094,
                  "characters": [
                    {
                      "character": "m",
                      "start": 7.012,
                      "end": 7.047
                    },
                    {
                      "character": "y",
                      "start": 7.047,
                      "end": 7.094
                    }
                  ]
                },
                {
                  "word": "friends",
                  "start": 7.163,
                  "end": 7.43,
                  "characters": [
                    {
                      "character": "f",
                      "start": 7.163,
                      "end": 7.21
                    },
                    {
                      "character": "r",
                      "start": 7.21,
                      "end": 7.256
                    },
                    {
                      "character": "i",
                      "start": 7.256,
                      "end": 7.291
                    },
                    {
                      "character": "e",
                      "start": 7.291,
                      "end": 7.326
                    },
                    {
                      "character": "n",
                      "start": 7.326,
                      "end": 7.349
                    },
                    {
                      "character": "d",
                      "start": 7.349,
                      "end": 7.396
                    },
                    {
                      "character": "s",
                      "start": 7.396,
                      "end": 7.43
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "had kids. My",
              "start": 7.465,
              "end": 9.009,
              "words": [
                {
                  "word": "had",
                  "start": 7.465,
                  "end": 7.605,
                  "characters": [
                    {
                      "character": "h",
                      "start": 7.465,
                      "end": 7.5
                    },
                    {
                      "character": "a",
                      "start": 7.5,
                      "end": 7.558
                    },
                    {
                      "character": "d",
                      "start": 7.558,
                      "end": 7.605
                    }
                  ]
                },
                {
                  "word": "kids.",
                  "start": 7.686,
                  "end": 8.359,
                  "characters": [
                    {
                      "character": "k",
                      "start": 7.686,
                      "end": 7.744
                    },
                    {
                      "character": "i",
                      "start": 7.744,
                      "end": 7.918
                    },
                    {
                      "character": "d",
                      "start": 7.918,
                      "end": 8.034
                    },
                    {
                      "character": "s",
                      "start": 8.034,
                      "end": 8.185
                    },
                    {
                      "character": ".",
                      "start": 8.185,
                      "end": 8.359
                    }
                  ]
                },
                {
                  "word": "My",
                  "start": 8.87,
                  "end": 9.009,
                  "characters": [
                    {
                      "character": "M",
                      "start": 8.87,
                      "end": 8.951
                    },
                    {
                      "character": "y",
                      "start": 8.951,
                      "end": 9.009
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "baby was the",
              "start": 9.079,
              "end": 9.683,
              "words": [
                {
                  "word": "baby",
                  "start": 9.079,
                  "end": 9.334,
                  "characters": [
                    {
                      "character": "b",
                      "start": 9.079,
                      "end": 9.114
                    },
                    {
                      "character": "a",
                      "start": 9.114,
                      "end": 9.207
                    },
                    {
                      "character": "b",
                      "start": 9.207,
                      "end": 9.288
                    },
                    {
                      "character": "y",
                      "start": 9.288,
                      "end": 9.334
                    }
                  ]
                },
                {
                  "word": "was",
                  "start": 9.392,
                  "end": 9.532,
                  "characters": [
                    {
                      "character": "w",
                      "start": 9.392,
                      "end": 9.439
                    },
                    {
                      "character": "a",
                      "start": 9.439,
                      "end": 9.485
                    },
                    {
                      "character": "s",
                      "start": 9.485,
                      "end": 9.532
                    }
                  ]
                },
                {
                  "word": "the",
                  "start": 9.601,
                  "end": 9.683,
                  "characters": [
                    {
                      "character": "t",
                      "start": 9.601,
                      "end": 9.625
                    },
                    {
                      "character": "h",
                      "start": 9.625,
                      "end": 9.659
                    },
                    {
                      "character": "e",
                      "start": 9.659,
                      "end": 9.683
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "sweetheart for",
              "start": 9.741,
              "end": 10.414,
              "words": [
                {
                  "word": "sweetheart",
                  "start": 9.741,
                  "end": 10.263,
                  "characters": [
                    {
                      "character": "s",
                      "start": 9.741,
                      "end": 9.799
                    },
                    {
                      "character": "w",
                      "start": 9.799,
                      "end": 9.857
                    },
                    {
                      "character": "e",
                      "start": 9.857,
                      "end": 9.927
                    },
                    {
                      "character": "e",
                      "start": 9.927,
                      "end": 9.996
                    },
                    {
                      "character": "t",
                      "start": 9.996,
                      "end": 10.054
                    },
                    {
                      "character": "h",
                      "start": 10.054,
                      "end": 10.077
                    },
                    {
                      "character": "e",
                      "start": 10.077,
                      "end": 10.124
                    },
                    {
                      "character": "a",
                      "start": 10.124,
                      "end": 10.17
                    },
                    {
                      "character": "r",
                      "start": 10.17,
                      "end": 10.217
                    },
                    {
                      "character": "t",
                      "start": 10.217,
                      "end": 10.263
                    }
                  ]
                },
                {
                  "word": "for",
                  "start": 10.31,
                  "end": 10.414,
                  "characters": [
                    {
                      "character": "f",
                      "start": 10.31,
                      "end": 10.344
                    },
                    {
                      "character": "o",
                      "start": 10.344,
                      "end": 10.379
                    },
                    {
                      "character": "r",
                      "start": 10.379,
                      "end": 10.414
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "all the aunties",
              "start": 10.472,
              "end": 11.285,
              "words": [
                {
                  "word": "all",
                  "start": 10.472,
                  "end": 10.612,
                  "characters": [
                    {
                      "character": "a",
                      "start": 10.472,
                      "end": 10.519
                    },
                    {
                      "character": "l",
                      "start": 10.519,
                      "end": 10.565
                    },
                    {
                      "character": "l",
                      "start": 10.565,
                      "end": 10.612
                    }
                  ]
                },
                {
                  "word": "the",
                  "start": 10.67,
                  "end": 10.739,
                  "characters": [
                    {
                      "character": "t",
                      "start": 10.67,
                      "end": 10.693
                    },
                    {
                      "character": "h",
                      "start": 10.693,
                      "end": 10.716
                    },
                    {
                      "character": "e",
                      "start": 10.716,
                      "end": 10.739
                    }
                  ]
                },
                {
                  "word": "aunties",
                  "start": 10.82,
                  "end": 11.285,
                  "characters": [
                    {
                      "character": "a",
                      "start": 10.82,
                      "end": 10.879
                    },
                    {
                      "character": "u",
                      "start": 10.879,
                      "end": 10.925
                    },
                    {
                      "character": "n",
                      "start": 10.925,
                      "end": 10.983
                    },
                    {
                      "character": "t",
                      "start": 10.983,
                      "end": 11.053
                    },
                    {
                      "character": "i",
                      "start": 11.053,
                      "end": 11.134
                    },
                    {
                      "character": "e",
                      "start": 11.134,
                      "end": 11.204
                    },
                    {
                      "character": "s",
                      "start": 11.204,
                      "end": 11.285
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "- mom’s three",
              "start": 11.459,
              "end": 12.492,
              "words": [
                {
                  "word": "-",
                  "start": 11.459,
                  "end": 11.494,
                  "characters": [
                    {
                      "character": "-",
                      "start": 11.459,
                      "end": 11.494
                    }
                  ]
                },
                {
                  "word": "mom’s",
                  "start": 11.773,
                  "end": 12.144,
                  "characters": [
                    {
                      "character": "m",
                      "start": 11.773,
                      "end": 11.831
                    },
                    {
                      "character": "o",
                      "start": 11.831,
                      "end": 12.005
                    },
                    {
                      "character": "m",
                      "start": 12.005,
                      "end": 12.051
                    },
                    {
                      "character": "’",
                      "start": 12.051,
                      "end": 12.121
                    },
                    {
                      "character": "s",
                      "start": 12.121,
                      "end": 12.144
                    }
                  ]
                },
                {
                  "word": "three",
                  "start": 12.214,
                  "end": 12.492,
                  "characters": [
                    {
                      "character": "t",
                      "start": 12.214,
                      "end": 12.237
                    },
                    {
                      "character": "h",
                      "start": 12.237,
                      "end": 12.307
                    },
                    {
                      "character": "r",
                      "start": 12.307,
                      "end": 12.365
                    },
                    {
                      "character": "e",
                      "start": 12.365,
                      "end": 12.434
                    },
                    {
                      "character": "e",
                      "start": 12.434,
                      "end": 12.492
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "close friends.",
              "start": 12.55,
              "end": 13.607,
              "words": [
                {
                  "word": "close",
                  "start": 12.55,
                  "end": 12.875,
                  "characters": [
                    {
                      "character": "c",
                      "start": 12.55,
                      "end": 12.608
                    },
                    {
                      "character": "l",
                      "start": 12.608,
                      "end": 12.678
                    },
                    {
                      "character": "o",
                      "start": 12.678,
                      "end": 12.771
                    },
                    {
                      "character": "s",
                      "start": 12.771,
                      "end": 12.829
                    },
                    {
                      "character": "e",
                      "start": 12.829,
                      "end": 12.875
                    }
                  ]
                },
                {
                  "word": "friends.",
                  "start": 12.934,
                  "end": 13.607,
                  "characters": [
                    {
                      "character": "f",
                      "start": 12.934,
                      "end": 12.992
                    },
                    {
                      "character": "r",
                      "start": 12.992,
                      "end": 13.073
                    },
                    {
                      "character": "i",
                      "start": 13.073,
                      "end": 13.131
                    },
                    {
                      "character": "e",
                      "start": 13.131,
                      "end": 13.189
                    },
                    {
                      "character": "n",
                      "start": 13.189,
                      "end": 13.235
                    },
                    {
                      "character": "d",
                      "start": 13.235,
                      "end": 13.305
                    },
                    {
                      "character": "s",
                      "start": 13.305,
                      "end": 13.456
                    },
                    {
                      "character": ".",
                      "start": 13.456,
                      "end": 13.607
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "We threw her a",
              "start": 13.99,
              "end": 14.663,
              "words": [
                {
                  "word": "We",
                  "start": 13.99,
                  "end": 14.129,
                  "characters": [
                    {
                      "character": "W",
                      "start": 13.99,
                      "end": 14.06
                    },
                    {
                      "character": "e",
                      "start": 14.06,
                      "end": 14.129
                    }
                  ]
                },
                {
                  "word": "threw",
                  "start": 14.187,
                  "end": 14.408,
                  "characters": [
                    {
                      "character": "t",
                      "start": 14.187,
                      "end": 14.211
                    },
                    {
                      "character": "h",
                      "start": 14.211,
                      "end": 14.257
                    },
                    {
                      "character": "r",
                      "start": 14.257,
                      "end": 14.303
                    },
                    {
                      "character": "e",
                      "start": 14.303,
                      "end": 14.362
                    },
                    {
                      "character": "w",
                      "start": 14.362,
                      "end": 14.408
                    }
                  ]
                },
                {
                  "word": "her",
                  "start": 14.478,
                  "end": 14.582,
                  "characters": [
                    {
                      "character": "h",
                      "start": 14.478,
                      "end": 14.512
                    },
                    {
                      "character": "e",
                      "start": 14.512,
                      "end": 14.547
                    },
                    {
                      "character": "r",
                      "start": 14.547,
                      "end": 14.582
                    }
                  ]
                },
                {
                  "word": "a",
                  "start": 14.64,
                  "end": 14.663,
                  "characters": [
                    {
                      "character": "a",
                      "start": 14.64,
                      "end": 14.663
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "party.  It was",
              "start": 14.733,
              "end": 15.789,
              "words": [
                {
                  "word": "party.",
                  "start": 14.733,
                  "end": 15.279,
                  "characters": [
                    {
                      "character": "p",
                      "start": 14.733,
                      "end": 14.791
                    },
                    {
                      "character": "a",
                      "start": 14.791,
                      "end": 14.872
                    },
                    {
                      "character": "r",
                      "start": 14.872,
                      "end": 14.93
                    },
                    {
                      "character": "t",
                      "start": 14.93,
                      "end": 15.012
                    },
                    {
                      "character": "y",
                      "start": 15.012,
                      "end": 15.128
                    },
                    {
                      "character": ".",
                      "start": 15.128,
                      "end": 15.279
                    }
                  ]
                },
                {
                  "word": "",
                  "start": 15.279,
                  "end": 15.488,
                  "characters": []
                },
                {
                  "word": "It",
                  "start": 15.488,
                  "end": 15.627,
                  "characters": [
                    {
                      "character": "I",
                      "start": 15.488,
                      "end": 15.569
                    },
                    {
                      "character": "t",
                      "start": 15.569,
                      "end": 15.627
                    }
                  ]
                },
                {
                  "word": "was",
                  "start": 15.673,
                  "end": 15.789,
                  "characters": [
                    {
                      "character": "w",
                      "start": 15.673,
                      "end": 15.708
                    },
                    {
                      "character": "a",
                      "start": 15.708,
                      "end": 15.743
                    },
                    {
                      "character": "s",
                      "start": 15.743,
                      "end": 15.789
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "fun. Each",
              "start": 15.906,
              "end": 17.322,
              "words": [
                {
                  "word": "fun.",
                  "start": 15.906,
                  "end": 16.498,
                  "characters": [
                    {
                      "character": "f",
                      "start": 15.906,
                      "end": 16.022
                    },
                    {
                      "character": "u",
                      "start": 16.022,
                      "end": 16.196
                    },
                    {
                      "character": "n",
                      "start": 16.196,
                      "end": 16.37
                    },
                    {
                      "character": ".",
                      "start": 16.37,
                      "end": 16.498
                    }
                  ]
                },
                {
                  "word": "Each",
                  "start": 17.101,
                  "end": 17.322,
                  "characters": [
                    {
                      "character": "E",
                      "start": 17.101,
                      "end": 17.183
                    },
                    {
                      "character": "a",
                      "start": 17.183,
                      "end": 17.241
                    },
                    {
                      "character": "c",
                      "start": 17.241,
                      "end": 17.287
                    },
                    {
                      "character": "h",
                      "start": 17.287,
                      "end": 17.322
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "auntie got her",
              "start": 17.38,
              "end": 17.972,
              "words": [
                {
                  "word": "auntie",
                  "start": 17.38,
                  "end": 17.647,
                  "characters": [
                    {
                      "character": "a",
                      "start": 17.38,
                      "end": 17.415
                    },
                    {
                      "character": "u",
                      "start": 17.415,
                      "end": 17.461
                    },
                    {
                      "character": "n",
                      "start": 17.461,
                      "end": 17.508
                    },
                    {
                      "character": "t",
                      "start": 17.508,
                      "end": 17.577
                    },
                    {
                      "character": "i",
                      "start": 17.577,
                      "end": 17.612
                    },
                    {
                      "character": "e",
                      "start": 17.612,
                      "end": 17.647
                    }
                  ]
                },
                {
                  "word": "got",
                  "start": 17.693,
                  "end": 17.856,
                  "characters": [
                    {
                      "character": "g",
                      "start": 17.693,
                      "end": 17.74
                    },
                    {
                      "character": "o",
                      "start": 17.74,
                      "end": 17.81
                    },
                    {
                      "character": "t",
                      "start": 17.81,
                      "end": 17.856
                    }
                  ]
                },
                {
                  "word": "her",
                  "start": 17.891,
                  "end": 17.972,
                  "characters": [
                    {
                      "character": "h",
                      "start": 17.891,
                      "end": 17.914
                    },
                    {
                      "character": "e",
                      "start": 17.914,
                      "end": 17.937
                    },
                    {
                      "character": "r",
                      "start": 17.937,
                      "end": 17.972
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "a present. They",
              "start": 18.019,
              "end": 19.098,
              "words": [
                {
                  "word": "a",
                  "start": 18.019,
                  "end": 18.042,
                  "characters": [
                    {
                      "character": "a",
                      "start": 18.019,
                      "end": 18.042
                    }
                  ]
                },
                {
                  "word": "present.",
                  "start": 18.1,
                  "end": 18.68,
                  "characters": [
                    {
                      "character": "p",
                      "start": 18.1,
                      "end": 18.135
                    },
                    {
                      "character": "r",
                      "start": 18.135,
                      "end": 18.204
                    },
                    {
                      "character": "e",
                      "start": 18.204,
                      "end": 18.274
                    },
                    {
                      "character": "s",
                      "start": 18.274,
                      "end": 18.332
                    },
                    {
                      "character": "e",
                      "start": 18.332,
                      "end": 18.402
                    },
                    {
                      "character": "n",
                      "start": 18.402,
                      "end": 18.437
                    },
                    {
                      "character": "t",
                      "start": 18.437,
                      "end": 18.529
                    },
                    {
                      "character": ".",
                      "start": 18.529,
                      "end": 18.68
                    }
                  ]
                },
                {
                  "word": "They",
                  "start": 18.924,
                  "end": 19.098,
                  "characters": [
                    {
                      "character": "T",
                      "start": 18.924,
                      "end": 18.971
                    },
                    {
                      "character": "h",
                      "start": 18.971,
                      "end": 19.017
                    },
                    {
                      "character": "e",
                      "start": 19.017,
                      "end": 19.063
                    },
                    {
                      "character": "y",
                      "start": 19.063,
                      "end": 19.098
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "handed it to",
              "start": 19.156,
              "end": 19.714,
              "words": [
                {
                  "word": "handed",
                  "start": 19.156,
                  "end": 19.481,
                  "characters": [
                    {
                      "character": "h",
                      "start": 19.156,
                      "end": 19.191
                    },
                    {
                      "character": "a",
                      "start": 19.191,
                      "end": 19.261
                    },
                    {
                      "character": "n",
                      "start": 19.261,
                      "end": 19.307
                    },
                    {
                      "character": "d",
                      "start": 19.307,
                      "end": 19.377
                    },
                    {
                      "character": "e",
                      "start": 19.377,
                      "end": 19.458
                    },
                    {
                      "character": "d",
                      "start": 19.458,
                      "end": 19.481
                    }
                  ]
                },
                {
                  "word": "it",
                  "start": 19.528,
                  "end": 19.609,
                  "characters": [
                    {
                      "character": "i",
                      "start": 19.528,
                      "end": 19.563
                    },
                    {
                      "character": "t",
                      "start": 19.563,
                      "end": 19.609
                    }
                  ]
                },
                {
                  "word": "to",
                  "start": 19.644,
                  "end": 19.714,
                  "characters": [
                    {
                      "character": "t",
                      "start": 19.644,
                      "end": 19.679
                    },
                    {
                      "character": "o",
                      "start": 19.679,
                      "end": 19.714
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "her one by one",
              "start": 19.795,
              "end": 20.654,
              "words": [
                {
                  "word": "her",
                  "start": 19.795,
                  "end": 19.888,
                  "characters": [
                    {
                      "character": "h",
                      "start": 19.795,
                      "end": 19.83
                    },
                    {
                      "character": "e",
                      "start": 19.83,
                      "end": 19.853
                    },
                    {
                      "character": "r",
                      "start": 19.853,
                      "end": 19.888
                    }
                  ]
                },
                {
                  "word": "one",
                  "start": 19.969,
                  "end": 20.155,
                  "characters": [
                    {
                      "character": "o",
                      "start": 19.969,
                      "end": 20.027
                    },
                    {
                      "character": "n",
                      "start": 20.027,
                      "end": 20.108
                    },
                    {
                      "character": "e",
                      "start": 20.108,
                      "end": 20.155
                    }
                  ]
                },
                {
                  "word": "by",
                  "start": 20.201,
                  "end": 20.352,
                  "characters": [
                    {
                      "character": "b",
                      "start": 20.201,
                      "end": 20.259
                    },
                    {
                      "character": "y",
                      "start": 20.259,
                      "end": 20.352
                    }
                  ]
                },
                {
                  "word": "one",
                  "start": 20.445,
                  "end": 20.654,
                  "characters": [
                    {
                      "character": "o",
                      "start": 20.445,
                      "end": 20.538
                    },
                    {
                      "character": "n",
                      "start": 20.538,
                      "end": 20.608
                    },
                    {
                      "character": "e",
                      "start": 20.608,
                      "end": 20.654
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "so she opened",
              "start": 20.7,
              "end": 21.42,
              "words": [
                {
                  "word": "so",
                  "start": 20.7,
                  "end": 20.817,
                  "characters": [
                    {
                      "character": "s",
                      "start": 20.7,
                      "end": 20.747
                    },
                    {
                      "character": "o",
                      "start": 20.747,
                      "end": 20.817
                    }
                  ]
                },
                {
                  "word": "she",
                  "start": 20.886,
                  "end": 21.002,
                  "characters": [
                    {
                      "character": "s",
                      "start": 20.886,
                      "end": 20.921
                    },
                    {
                      "character": "h",
                      "start": 20.921,
                      "end": 20.967
                    },
                    {
                      "character": "e",
                      "start": 20.967,
                      "end": 21.002
                    }
                  ]
                },
                {
                  "word": "opened",
                  "start": 21.084,
                  "end": 21.42,
                  "characters": [
                    {
                      "character": "o",
                      "start": 21.084,
                      "end": 21.2
                    },
                    {
                      "character": "p",
                      "start": 21.2,
                      "end": 21.258
                    },
                    {
                      "character": "e",
                      "start": 21.258,
                      "end": 21.304
                    },
                    {
                      "character": "n",
                      "start": 21.304,
                      "end": 21.339
                    },
                    {
                      "character": "e",
                      "start": 21.339,
                      "end": 21.397
                    },
                    {
                      "character": "d",
                      "start": 21.397,
                      "end": 21.42
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "it and got",
              "start": 21.467,
              "end": 21.92,
              "words": [
                {
                  "word": "it",
                  "start": 21.467,
                  "end": 21.536,
                  "characters": [
                    {
                      "character": "i",
                      "start": 21.467,
                      "end": 21.502
                    },
                    {
                      "character": "t",
                      "start": 21.502,
                      "end": 21.536
                    }
                  ]
                },
                {
                  "word": "and",
                  "start": 21.583,
                  "end": 21.676,
                  "characters": [
                    {
                      "character": "a",
                      "start": 21.583,
                      "end": 21.606
                    },
                    {
                      "character": "n",
                      "start": 21.606,
                      "end": 21.641
                    },
                    {
                      "character": "d",
                      "start": 21.641,
                      "end": 21.676
                    }
                  ]
                },
                {
                  "word": "got",
                  "start": 21.745,
                  "end": 21.92,
                  "characters": [
                    {
                      "character": "g",
                      "start": 21.745,
                      "end": 21.792
                    },
                    {
                      "character": "o",
                      "start": 21.792,
                      "end": 21.873
                    },
                    {
                      "character": "t",
                      "start": 21.873,
                      "end": 21.92
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "excited. To the",
              "start": 21.966,
              "end": 23.638,
              "words": [
                {
                  "word": "excited.",
                  "start": 21.966,
                  "end": 22.686,
                  "characters": [
                    {
                      "character": "e",
                      "start": 21.966,
                      "end": 22.001
                    },
                    {
                      "character": "x",
                      "start": 22.001,
                      "end": 22.07
                    },
                    {
                      "character": "c",
                      "start": 22.07,
                      "end": 22.152
                    },
                    {
                      "character": "i",
                      "start": 22.152,
                      "end": 22.268
                    },
                    {
                      "character": "t",
                      "start": 22.268,
                      "end": 22.337
                    },
                    {
                      "character": "e",
                      "start": 22.337,
                      "end": 22.419
                    },
                    {
                      "character": "d",
                      "start": 22.419,
                      "end": 22.512
                    },
                    {
                      "character": ".",
                      "start": 22.512,
                      "end": 22.686
                    }
                  ]
                },
                {
                  "word": "To",
                  "start": 23.382,
                  "end": 23.498,
                  "characters": [
                    {
                      "character": "T",
                      "start": 23.382,
                      "end": 23.452
                    },
                    {
                      "character": "o",
                      "start": 23.452,
                      "end": 23.498
                    }
                  ]
                },
                {
                  "word": "the",
                  "start": 23.568,
                  "end": 23.638,
                  "characters": [
                    {
                      "character": "t",
                      "start": 23.568,
                      "end": 23.591
                    },
                    {
                      "character": "h",
                      "start": 23.591,
                      "end": 23.615
                    },
                    {
                      "character": "e",
                      "start": 23.615,
                      "end": 23.638
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "last auntie,",
              "start": 23.696,
              "end": 24.416,
              "words": [
                {
                  "word": "last",
                  "start": 23.696,
                  "end": 23.986,
                  "characters": [
                    {
                      "character": "l",
                      "start": 23.696,
                      "end": 23.742
                    },
                    {
                      "character": "a",
                      "start": 23.742,
                      "end": 23.858
                    },
                    {
                      "character": "s",
                      "start": 23.858,
                      "end": 23.94
                    },
                    {
                      "character": "t",
                      "start": 23.94,
                      "end": 23.986
                    }
                  ]
                },
                {
                  "word": "auntie,",
                  "start": 24.056,
                  "end": 24.416,
                  "characters": [
                    {
                      "character": "a",
                      "start": 24.056,
                      "end": 24.102
                    },
                    {
                      "character": "u",
                      "start": 24.102,
                      "end": 24.16
                    },
                    {
                      "character": "n",
                      "start": 24.16,
                      "end": 24.218
                    },
                    {
                      "character": "t",
                      "start": 24.218,
                      "end": 24.288
                    },
                    {
                      "character": "i",
                      "start": 24.288,
                      "end": 24.346
                    },
                    {
                      "character": "e",
                      "start": 24.346,
                      "end": 24.392
                    },
                    {
                      "character": ",",
                      "start": 24.392,
                      "end": 24.416
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "before she",
              "start": 24.439,
              "end": 24.892,
              "words": [
                {
                  "word": "before",
                  "start": 24.439,
                  "end": 24.741,
                  "characters": [
                    {
                      "character": "b",
                      "start": 24.439,
                      "end": 24.474
                    },
                    {
                      "character": "e",
                      "start": 24.474,
                      "end": 24.543
                    },
                    {
                      "character": "f",
                      "start": 24.543,
                      "end": 24.601
                    },
                    {
                      "character": "o",
                      "start": 24.601,
                      "end": 24.648
                    },
                    {
                      "character": "r",
                      "start": 24.648,
                      "end": 24.706
                    },
                    {
                      "character": "e",
                      "start": 24.706,
                      "end": 24.741
                    }
                  ]
                },
                {
                  "word": "she",
                  "start": 24.776,
                  "end": 24.892,
                  "characters": [
                    {
                      "character": "s",
                      "start": 24.776,
                      "end": 24.81
                    },
                    {
                      "character": "h",
                      "start": 24.81,
                      "end": 24.868
                    },
                    {
                      "character": "e",
                      "start": 24.868,
                      "end": 24.892
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "handed the",
              "start": 24.973,
              "end": 25.402,
              "words": [
                {
                  "word": "handed",
                  "start": 24.973,
                  "end": 25.298,
                  "characters": [
                    {
                      "character": "h",
                      "start": 24.973,
                      "end": 25.008
                    },
                    {
                      "character": "a",
                      "start": 25.008,
                      "end": 25.089
                    },
                    {
                      "character": "n",
                      "start": 25.089,
                      "end": 25.135
                    },
                    {
                      "character": "d",
                      "start": 25.135,
                      "end": 25.205
                    },
                    {
                      "character": "e",
                      "start": 25.205,
                      "end": 25.275
                    },
                    {
                      "character": "d",
                      "start": 25.275,
                      "end": 25.298
                    }
                  ]
                },
                {
                  "word": "the",
                  "start": 25.333,
                  "end": 25.402,
                  "characters": [
                    {
                      "character": "t",
                      "start": 25.333,
                      "end": 25.356
                    },
                    {
                      "character": "h",
                      "start": 25.356,
                      "end": 25.379
                    },
                    {
                      "character": "e",
                      "start": 25.379,
                      "end": 25.402
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "present to my",
              "start": 25.449,
              "end": 26.053,
              "words": [
                {
                  "word": "present",
                  "start": 25.449,
                  "end": 25.786,
                  "characters": [
                    {
                      "character": "p",
                      "start": 25.449,
                      "end": 25.495
                    },
                    {
                      "character": "r",
                      "start": 25.495,
                      "end": 25.542
                    },
                    {
                      "character": "e",
                      "start": 25.542,
                      "end": 25.6
                    },
                    {
                      "character": "s",
                      "start": 25.6,
                      "end": 25.658
                    },
                    {
                      "character": "e",
                      "start": 25.658,
                      "end": 25.716
                    },
                    {
                      "character": "n",
                      "start": 25.716,
                      "end": 25.751
                    },
                    {
                      "character": "t",
                      "start": 25.751,
                      "end": 25.786
                    }
                  ]
                },
                {
                  "word": "to",
                  "start": 25.82,
                  "end": 25.867,
                  "characters": [
                    {
                      "character": "t",
                      "start": 25.82,
                      "end": 25.844
                    },
                    {
                      "character": "o",
                      "start": 25.844,
                      "end": 25.867
                    }
                  ]
                },
                {
                  "word": "my",
                  "start": 25.948,
                  "end": 26.053,
                  "characters": [
                    {
                      "character": "m",
                      "start": 25.948,
                      "end": 25.995
                    },
                    {
                      "character": "y",
                      "start": 25.995,
                      "end": 26.053
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "daughter, she",
              "start": 26.122,
              "end": 26.958,
              "words": [
                {
                  "word": "daughter,",
                  "start": 26.122,
                  "end": 26.645,
                  "characters": [
                    {
                      "character": "d",
                      "start": 26.122,
                      "end": 26.169
                    },
                    {
                      "character": "a",
                      "start": 26.169,
                      "end": 26.25
                    },
                    {
                      "character": "u",
                      "start": 26.25,
                      "end": 26.285
                    },
                    {
                      "character": "g",
                      "start": 26.285,
                      "end": 26.32
                    },
                    {
                      "character": "h",
                      "start": 26.32,
                      "end": 26.343
                    },
                    {
                      "character": "t",
                      "start": 26.343,
                      "end": 26.378
                    },
                    {
                      "character": "e",
                      "start": 26.378,
                      "end": 26.424
                    },
                    {
                      "character": "r",
                      "start": 26.424,
                      "end": 26.494
                    },
                    {
                      "character": ",",
                      "start": 26.494,
                      "end": 26.645
                    }
                  ]
                },
                {
                  "word": "she",
                  "start": 26.819,
                  "end": 26.958,
                  "characters": [
                    {
                      "character": "s",
                      "start": 26.819,
                      "end": 26.877
                    },
                    {
                      "character": "h",
                      "start": 26.877,
                      "end": 26.935
                    },
                    {
                      "character": "e",
                      "start": 26.935,
                      "end": 26.958
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "‘demanded’ my",
              "start": 26.981,
              "end": 27.759,
              "words": [
                {
                  "word": "‘demanded’",
                  "start": 26.981,
                  "end": 27.597,
                  "characters": [
                    {
                      "character": "‘",
                      "start": 26.981,
                      "end": 27.016
                    },
                    {
                      "character": "d",
                      "start": 27.016,
                      "end": 27.063
                    },
                    {
                      "character": "e",
                      "start": 27.063,
                      "end": 27.132
                    },
                    {
                      "character": "m",
                      "start": 27.132,
                      "end": 27.202
                    },
                    {
                      "character": "a",
                      "start": 27.202,
                      "end": 27.318
                    },
                    {
                      "character": "n",
                      "start": 27.318,
                      "end": 27.365
                    },
                    {
                      "character": "d",
                      "start": 27.365,
                      "end": 27.446
                    },
                    {
                      "character": "e",
                      "start": 27.446,
                      "end": 27.527
                    },
                    {
                      "character": "d",
                      "start": 27.527,
                      "end": 27.55
                    },
                    {
                      "character": "’",
                      "start": 27.55,
                      "end": 27.597
                    }
                  ]
                },
                {
                  "word": "my",
                  "start": 27.632,
                  "end": 27.759,
                  "characters": [
                    {
                      "character": "m",
                      "start": 27.632,
                      "end": 27.69
                    },
                    {
                      "character": "y",
                      "start": 27.69,
                      "end": 27.759
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "girl, “Say",
              "start": 27.852,
              "end": 28.967,
              "words": [
                {
                  "word": "girl,",
                  "start": 27.852,
                  "end": 28.351,
                  "characters": [
                    {
                      "character": "g",
                      "start": 27.852,
                      "end": 27.899
                    },
                    {
                      "character": "i",
                      "start": 27.899,
                      "end": 27.992
                    },
                    {
                      "character": "r",
                      "start": 27.992,
                      "end": 28.061
                    },
                    {
                      "character": "l",
                      "start": 28.061,
                      "end": 28.177
                    },
                    {
                      "character": ",",
                      "start": 28.177,
                      "end": 28.351
                    }
                  ]
                },
                {
                  "word": "“Say",
                  "start": 28.595,
                  "end": 28.967,
                  "characters": [
                    {
                      "character": "“",
                      "start": 28.595,
                      "end": 28.711
                    },
                    {
                      "character": "S",
                      "start": 28.711,
                      "end": 28.804
                    },
                    {
                      "character": "a",
                      "start": 28.804,
                      "end": 28.92
                    },
                    {
                      "character": "y",
                      "start": 28.92,
                      "end": 28.967
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "‘please’ and",
              "start": 29.002,
              "end": 29.791,
              "words": [
                {
                  "word": "‘please’",
                  "start": 29.002,
                  "end": 29.582,
                  "characters": [
                    {
                      "character": "‘",
                      "start": 29.002,
                      "end": 29.048
                    },
                    {
                      "character": "p",
                      "start": 29.048,
                      "end": 29.129
                    },
                    {
                      "character": "l",
                      "start": 29.129,
                      "end": 29.211
                    },
                    {
                      "character": "e",
                      "start": 29.211,
                      "end": 29.303
                    },
                    {
                      "character": "a",
                      "start": 29.303,
                      "end": 29.385
                    },
                    {
                      "character": "s",
                      "start": 29.385,
                      "end": 29.501
                    },
                    {
                      "character": "e",
                      "start": 29.501,
                      "end": 29.547
                    },
                    {
                      "character": "’",
                      "start": 29.547,
                      "end": 29.582
                    }
                  ]
                },
                {
                  "word": "and",
                  "start": 29.617,
                  "end": 29.791,
                  "characters": [
                    {
                      "character": "a",
                      "start": 29.617,
                      "end": 29.675
                    },
                    {
                      "character": "n",
                      "start": 29.675,
                      "end": 29.745
                    },
                    {
                      "character": "d",
                      "start": 29.745,
                      "end": 29.791
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "bow, so auntie",
              "start": 29.884,
              "end": 30.813,
              "words": [
                {
                  "word": "bow,",
                  "start": 29.884,
                  "end": 30.256,
                  "characters": [
                    {
                      "character": "b",
                      "start": 29.884,
                      "end": 29.954
                    },
                    {
                      "character": "o",
                      "start": 29.954,
                      "end": 30.128
                    },
                    {
                      "character": "w",
                      "start": 30.128,
                      "end": 30.198
                    },
                    {
                      "character": ",",
                      "start": 30.198,
                      "end": 30.256
                    }
                  ]
                },
                {
                  "word": "so",
                  "start": 30.291,
                  "end": 30.43,
                  "characters": [
                    {
                      "character": "s",
                      "start": 30.291,
                      "end": 30.349
                    },
                    {
                      "character": "o",
                      "start": 30.349,
                      "end": 30.43
                    }
                  ]
                },
                {
                  "word": "auntie",
                  "start": 30.523,
                  "end": 30.813,
                  "characters": [
                    {
                      "character": "a",
                      "start": 30.523,
                      "end": 30.581
                    },
                    {
                      "character": "u",
                      "start": 30.581,
                      "end": 30.639
                    },
                    {
                      "character": "n",
                      "start": 30.639,
                      "end": 30.685
                    },
                    {
                      "character": "t",
                      "start": 30.685,
                      "end": 30.743
                    },
                    {
                      "character": "i",
                      "start": 30.743,
                      "end": 30.79
                    },
                    {
                      "character": "e",
                      "start": 30.79,
                      "end": 30.813
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "will give you",
              "start": 30.848,
              "end": 31.301,
              "words": [
                {
                  "word": "will",
                  "start": 30.848,
                  "end": 30.999,
                  "characters": [
                    {
                      "character": "w",
                      "start": 30.848,
                      "end": 30.894
                    },
                    {
                      "character": "i",
                      "start": 30.894,
                      "end": 30.941
                    },
                    {
                      "character": "l",
                      "start": 30.941,
                      "end": 30.976
                    },
                    {
                      "character": "l",
                      "start": 30.976,
                      "end": 30.999
                    }
                  ]
                },
                {
                  "word": "give",
                  "start": 31.045,
                  "end": 31.185,
                  "characters": [
                    {
                      "character": "g",
                      "start": 31.045,
                      "end": 31.08
                    },
                    {
                      "character": "i",
                      "start": 31.08,
                      "end": 31.115
                    },
                    {
                      "character": "v",
                      "start": 31.115,
                      "end": 31.15
                    },
                    {
                      "character": "e",
                      "start": 31.15,
                      "end": 31.185
                    }
                  ]
                },
                {
                  "word": "you",
                  "start": 31.219,
                  "end": 31.301,
                  "characters": [
                    {
                      "character": "y",
                      "start": 31.219,
                      "end": 31.243
                    },
                    {
                      "character": "o",
                      "start": 31.243,
                      "end": 31.266
                    },
                    {
                      "character": "u",
                      "start": 31.266,
                      "end": 31.301
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "the gift!”. I",
              "start": 31.37,
              "end": 33.147,
              "words": [
                {
                  "word": "the",
                  "start": 31.37,
                  "end": 31.44,
                  "characters": [
                    {
                      "character": "t",
                      "start": 31.37,
                      "end": 31.394
                    },
                    {
                      "character": "h",
                      "start": 31.394,
                      "end": 31.417
                    },
                    {
                      "character": "e",
                      "start": 31.417,
                      "end": 31.44
                    }
                  ]
                },
                {
                  "word": "gift!”.",
                  "start": 31.486,
                  "end": 32.288,
                  "characters": [
                    {
                      "character": "g",
                      "start": 31.486,
                      "end": 31.533
                    },
                    {
                      "character": "i",
                      "start": 31.533,
                      "end": 31.649
                    },
                    {
                      "character": "f",
                      "start": 31.649,
                      "end": 31.73
                    },
                    {
                      "character": "t",
                      "start": 31.73,
                      "end": 31.846
                    },
                    {
                      "character": "!",
                      "start": 31.846,
                      "end": 31.963
                    },
                    {
                      "character": "”",
                      "start": 31.963,
                      "end": 32.079
                    },
                    {
                      "character": ".",
                      "start": 32.079,
                      "end": 32.288
                    }
                  ]
                },
                {
                  "word": "I",
                  "start": 33.1,
                  "end": 33.147,
                  "characters": [
                    {
                      "character": "I",
                      "start": 33.1,
                      "end": 33.147
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "thought she was",
              "start": 33.24,
              "end": 33.739,
              "words": [
                {
                  "word": "thought",
                  "start": 33.24,
                  "end": 33.449,
                  "characters": [
                    {
                      "character": "t",
                      "start": 33.24,
                      "end": 33.263
                    },
                    {
                      "character": "h",
                      "start": 33.263,
                      "end": 33.298
                    },
                    {
                      "character": "o",
                      "start": 33.298,
                      "end": 33.321
                    },
                    {
                      "character": "u",
                      "start": 33.321,
                      "end": 33.356
                    },
                    {
                      "character": "g",
                      "start": 33.356,
                      "end": 33.379
                    },
                    {
                      "character": "h",
                      "start": 33.379,
                      "end": 33.414
                    },
                    {
                      "character": "t",
                      "start": 33.414,
                      "end": 33.449
                    }
                  ]
                },
                {
                  "word": "she",
                  "start": 33.495,
                  "end": 33.576,
                  "characters": [
                    {
                      "character": "s",
                      "start": 33.495,
                      "end": 33.518
                    },
                    {
                      "character": "h",
                      "start": 33.518,
                      "end": 33.553
                    },
                    {
                      "character": "e",
                      "start": 33.553,
                      "end": 33.576
                    }
                  ]
                },
                {
                  "word": "was",
                  "start": 33.634,
                  "end": 33.739,
                  "characters": [
                    {
                      "character": "w",
                      "start": 33.634,
                      "end": 33.669
                    },
                    {
                      "character": "a",
                      "start": 33.669,
                      "end": 33.704
                    },
                    {
                      "character": "s",
                      "start": 33.704,
                      "end": 33.739
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "joking, so I",
              "start": 33.797,
              "end": 34.575,
              "words": [
                {
                  "word": "joking,",
                  "start": 33.797,
                  "end": 34.273,
                  "characters": [
                    {
                      "character": "j",
                      "start": 33.797,
                      "end": 33.855
                    },
                    {
                      "character": "o",
                      "start": 33.855,
                      "end": 33.971
                    },
                    {
                      "character": "k",
                      "start": 33.971,
                      "end": 34.052
                    },
                    {
                      "character": "i",
                      "start": 34.052,
                      "end": 34.122
                    },
                    {
                      "character": "n",
                      "start": 34.122,
                      "end": 34.157
                    },
                    {
                      "character": "g",
                      "start": 34.157,
                      "end": 34.215
                    },
                    {
                      "character": ",",
                      "start": 34.215,
                      "end": 34.273
                    }
                  ]
                },
                {
                  "word": "so",
                  "start": 34.308,
                  "end": 34.459,
                  "characters": [
                    {
                      "character": "s",
                      "start": 34.308,
                      "end": 34.377
                    },
                    {
                      "character": "o",
                      "start": 34.377,
                      "end": 34.459
                    }
                  ]
                },
                {
                  "word": "I",
                  "start": 34.54,
                  "end": 34.575,
                  "characters": [
                    {
                      "character": "I",
                      "start": 34.54,
                      "end": 34.575
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "interrupted and",
              "start": 34.691,
              "end": 35.376,
              "words": [
                {
                  "word": "interrupted",
                  "start": 34.691,
                  "end": 35.248,
                  "characters": [
                    {
                      "character": "i",
                      "start": 34.691,
                      "end": 34.737
                    },
                    {
                      "character": "n",
                      "start": 34.737,
                      "end": 34.807
                    },
                    {
                      "character": "t",
                      "start": 34.807,
                      "end": 34.865
                    },
                    {
                      "character": "e",
                      "start": 34.865,
                      "end": 34.911
                    },
                    {
                      "character": "r",
                      "start": 34.911,
                      "end": 34.969
                    },
                    {
                      "character": "r",
                      "start": 34.969,
                      "end": 35.016
                    },
                    {
                      "character": "u",
                      "start": 35.016,
                      "end": 35.062
                    },
                    {
                      "character": "p",
                      "start": 35.062,
                      "end": 35.109
                    },
                    {
                      "character": "t",
                      "start": 35.109,
                      "end": 35.167
                    },
                    {
                      "character": "e",
                      "start": 35.167,
                      "end": 35.225
                    },
                    {
                      "character": "d",
                      "start": 35.225,
                      "end": 35.248
                    }
                  ]
                },
                {
                  "word": "and",
                  "start": 35.295,
                  "end": 35.376,
                  "characters": [
                    {
                      "character": "a",
                      "start": 35.295,
                      "end": 35.318
                    },
                    {
                      "character": "n",
                      "start": 35.318,
                      "end": 35.341
                    },
                    {
                      "character": "d",
                      "start": 35.341,
                      "end": 35.376
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "told my",
              "start": 35.422,
              "end": 35.794,
              "words": [
                {
                  "word": "told",
                  "start": 35.422,
                  "end": 35.643,
                  "characters": [
                    {
                      "character": "t",
                      "start": 35.422,
                      "end": 35.457
                    },
                    {
                      "character": "o",
                      "start": 35.457,
                      "end": 35.538
                    },
                    {
                      "character": "l",
                      "start": 35.538,
                      "end": 35.608
                    },
                    {
                      "character": "d",
                      "start": 35.608,
                      "end": 35.643
                    }
                  ]
                },
                {
                  "word": "my",
                  "start": 35.701,
                  "end": 35.794,
                  "characters": [
                    {
                      "character": "m",
                      "start": 35.701,
                      "end": 35.747
                    },
                    {
                      "character": "y",
                      "start": 35.747,
                      "end": 35.794
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "daughter,",
              "start": 35.852,
              "end": 36.328,
              "words": [
                {
                  "word": "daughter,",
                  "start": 35.852,
                  "end": 36.328,
                  "characters": [
                    {
                      "character": "d",
                      "start": 35.852,
                      "end": 35.898
                    },
                    {
                      "character": "a",
                      "start": 35.898,
                      "end": 35.945
                    },
                    {
                      "character": "u",
                      "start": 35.945,
                      "end": 35.98
                    },
                    {
                      "character": "g",
                      "start": 35.98,
                      "end": 36.014
                    },
                    {
                      "character": "h",
                      "start": 36.014,
                      "end": 36.038
                    },
                    {
                      "character": "t",
                      "start": 36.038,
                      "end": 36.072
                    },
                    {
                      "character": "e",
                      "start": 36.072,
                      "end": 36.107
                    },
                    {
                      "character": "r",
                      "start": 36.107,
                      "end": 36.177
                    },
                    {
                      "character": ",",
                      "start": 36.177,
                      "end": 36.328
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "“Auntie got you",
              "start": 36.409,
              "end": 37.117,
              "words": [
                {
                  "word": "“Auntie",
                  "start": 36.409,
                  "end": 36.769,
                  "characters": [
                    {
                      "character": "“",
                      "start": 36.409,
                      "end": 36.479
                    },
                    {
                      "character": "A",
                      "start": 36.479,
                      "end": 36.525
                    },
                    {
                      "character": "u",
                      "start": 36.525,
                      "end": 36.595
                    },
                    {
                      "character": "n",
                      "start": 36.595,
                      "end": 36.641
                    },
                    {
                      "character": "t",
                      "start": 36.641,
                      "end": 36.699
                    },
                    {
                      "character": "i",
                      "start": 36.699,
                      "end": 36.746
                    },
                    {
                      "character": "e",
                      "start": 36.746,
                      "end": 36.769
                    }
                  ]
                },
                {
                  "word": "got",
                  "start": 36.827,
                  "end": 36.978,
                  "characters": [
                    {
                      "character": "g",
                      "start": 36.827,
                      "end": 36.862
                    },
                    {
                      "character": "o",
                      "start": 36.862,
                      "end": 36.943
                    },
                    {
                      "character": "t",
                      "start": 36.943,
                      "end": 36.978
                    }
                  ]
                },
                {
                  "word": "you",
                  "start": 37.036,
                  "end": 37.117,
                  "characters": [
                    {
                      "character": "y",
                      "start": 37.036,
                      "end": 37.059
                    },
                    {
                      "character": "o",
                      "start": 37.059,
                      "end": 37.083
                    },
                    {
                      "character": "u",
                      "start": 37.083,
                      "end": 37.117
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "a present, you",
              "start": 37.187,
              "end": 37.721,
              "words": [
                {
                  "word": "a",
                  "start": 37.187,
                  "end": 37.21,
                  "characters": [
                    {
                      "character": "a",
                      "start": 37.187,
                      "end": 37.21
                    }
                  ]
                },
                {
                  "word": "present,",
                  "start": 37.268,
                  "end": 37.628,
                  "characters": [
                    {
                      "character": "p",
                      "start": 37.268,
                      "end": 37.303
                    },
                    {
                      "character": "r",
                      "start": 37.303,
                      "end": 37.361
                    },
                    {
                      "character": "e",
                      "start": 37.361,
                      "end": 37.419
                    },
                    {
                      "character": "s",
                      "start": 37.419,
                      "end": 37.477
                    },
                    {
                      "character": "e",
                      "start": 37.477,
                      "end": 37.535
                    },
                    {
                      "character": "n",
                      "start": 37.535,
                      "end": 37.57
                    },
                    {
                      "character": "t",
                      "start": 37.57,
                      "end": 37.605
                    },
                    {
                      "character": ",",
                      "start": 37.605,
                      "end": 37.628
                    }
                  ]
                },
                {
                  "word": "you",
                  "start": 37.651,
                  "end": 37.721,
                  "characters": [
                    {
                      "character": "y",
                      "start": 37.651,
                      "end": 37.675
                    },
                    {
                      "character": "o",
                      "start": 37.675,
                      "end": 37.698
                    },
                    {
                      "character": "u",
                      "start": 37.698,
                      "end": 37.721
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "say ‘Thank you’",
              "start": 37.791,
              "end": 38.534,
              "words": [
                {
                  "word": "say",
                  "start": 37.791,
                  "end": 38,
                  "characters": [
                    {
                      "character": "s",
                      "start": 37.791,
                      "end": 37.837
                    },
                    {
                      "character": "a",
                      "start": 37.837,
                      "end": 37.918
                    },
                    {
                      "character": "y",
                      "start": 37.918,
                      "end": 38
                    }
                  ]
                },
                {
                  "word": "‘Thank",
                  "start": 38.069,
                  "end": 38.36,
                  "characters": [
                    {
                      "character": "‘",
                      "start": 38.069,
                      "end": 38.093
                    },
                    {
                      "character": "T",
                      "start": 38.093,
                      "end": 38.139
                    },
                    {
                      "character": "h",
                      "start": 38.139,
                      "end": 38.209
                    },
                    {
                      "character": "a",
                      "start": 38.209,
                      "end": 38.255
                    },
                    {
                      "character": "n",
                      "start": 38.255,
                      "end": 38.313
                    },
                    {
                      "character": "k",
                      "start": 38.313,
                      "end": 38.36
                    }
                  ]
                },
                {
                  "word": "you’",
                  "start": 38.406,
                  "end": 38.534,
                  "characters": [
                    {
                      "character": "y",
                      "start": 38.406,
                      "end": 38.429
                    },
                    {
                      "character": "o",
                      "start": 38.429,
                      "end": 38.464
                    },
                    {
                      "character": "u",
                      "start": 38.464,
                      "end": 38.499
                    },
                    {
                      "character": "’",
                      "start": 38.499,
                      "end": 38.534
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "out loud!”. My",
              "start": 38.569,
              "end": 40.473,
              "words": [
                {
                  "word": "out",
                  "start": 38.569,
                  "end": 38.708,
                  "characters": [
                    {
                      "character": "o",
                      "start": 38.569,
                      "end": 38.627
                    },
                    {
                      "character": "u",
                      "start": 38.627,
                      "end": 38.673
                    },
                    {
                      "character": "t",
                      "start": 38.673,
                      "end": 38.708
                    }
                  ]
                },
                {
                  "word": "loud!”.",
                  "start": 38.778,
                  "end": 39.532,
                  "characters": [
                    {
                      "character": "l",
                      "start": 38.778,
                      "end": 38.836
                    },
                    {
                      "character": "o",
                      "start": 38.836,
                      "end": 39.01
                    },
                    {
                      "character": "u",
                      "start": 39.01,
                      "end": 39.091
                    },
                    {
                      "character": "d",
                      "start": 39.091,
                      "end": 39.242
                    },
                    {
                      "character": "!",
                      "start": 39.242,
                      "end": 39.323
                    },
                    {
                      "character": "”",
                      "start": 39.323,
                      "end": 39.381
                    },
                    {
                      "character": ".",
                      "start": 39.381,
                      "end": 39.532
                    }
                  ]
                },
                {
                  "word": "My",
                  "start": 40.345,
                  "end": 40.473,
                  "characters": [
                    {
                      "character": "M",
                      "start": 40.345,
                      "end": 40.426
                    },
                    {
                      "character": "y",
                      "start": 40.426,
                      "end": 40.473
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "daughter",
              "start": 40.519,
              "end": 40.798,
              "words": [
                {
                  "word": "daughter",
                  "start": 40.519,
                  "end": 40.798,
                  "characters": [
                    {
                      "character": "d",
                      "start": 40.519,
                      "end": 40.565
                    },
                    {
                      "character": "a",
                      "start": 40.565,
                      "end": 40.612
                    },
                    {
                      "character": "u",
                      "start": 40.612,
                      "end": 40.647
                    },
                    {
                      "character": "g",
                      "start": 40.647,
                      "end": 40.67
                    },
                    {
                      "character": "h",
                      "start": 40.67,
                      "end": 40.705
                    },
                    {
                      "character": "t",
                      "start": 40.705,
                      "end": 40.74
                    },
                    {
                      "character": "e",
                      "start": 40.74,
                      "end": 40.774
                    },
                    {
                      "character": "r",
                      "start": 40.774,
                      "end": 40.798
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "exclaimed,",
              "start": 40.867,
              "end": 41.529,
              "words": [
                {
                  "word": "exclaimed,",
                  "start": 40.867,
                  "end": 41.529,
                  "characters": [
                    {
                      "character": "e",
                      "start": 40.867,
                      "end": 40.914
                    },
                    {
                      "character": "x",
                      "start": 40.914,
                      "end": 40.983
                    },
                    {
                      "character": "c",
                      "start": 40.983,
                      "end": 41.076
                    },
                    {
                      "character": "l",
                      "start": 41.076,
                      "end": 41.134
                    },
                    {
                      "character": "a",
                      "start": 41.134,
                      "end": 41.181
                    },
                    {
                      "character": "i",
                      "start": 41.181,
                      "end": 41.239
                    },
                    {
                      "character": "m",
                      "start": 41.239,
                      "end": 41.285
                    },
                    {
                      "character": "e",
                      "start": 41.285,
                      "end": 41.355
                    },
                    {
                      "character": "d",
                      "start": 41.355,
                      "end": 41.413
                    },
                    {
                      "character": ",",
                      "start": 41.413,
                      "end": 41.529
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "“Thank you",
              "start": 41.703,
              "end": 42.191,
              "words": [
                {
                  "word": "“Thank",
                  "start": 41.703,
                  "end": 42.063,
                  "characters": [
                    {
                      "character": "“",
                      "start": 41.703,
                      "end": 41.819
                    },
                    {
                      "character": "T",
                      "start": 41.819,
                      "end": 41.866
                    },
                    {
                      "character": "h",
                      "start": 41.866,
                      "end": 41.935
                    },
                    {
                      "character": "a",
                      "start": 41.935,
                      "end": 41.97
                    },
                    {
                      "character": "n",
                      "start": 41.97,
                      "end": 42.028
                    },
                    {
                      "character": "k",
                      "start": 42.028,
                      "end": 42.063
                    }
                  ]
                },
                {
                  "word": "you",
                  "start": 42.11,
                  "end": 42.191,
                  "characters": [
                    {
                      "character": "y",
                      "start": 42.11,
                      "end": 42.133
                    },
                    {
                      "character": "o",
                      "start": 42.133,
                      "end": 42.156
                    },
                    {
                      "character": "u",
                      "start": 42.156,
                      "end": 42.191
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "auntie!”, then",
              "start": 42.272,
              "end": 43.747,
              "words": [
                {
                  "word": "auntie!”,",
                  "start": 42.272,
                  "end": 43.294,
                  "characters": [
                    {
                      "character": "a",
                      "start": 42.272,
                      "end": 42.307
                    },
                    {
                      "character": "u",
                      "start": 42.307,
                      "end": 42.365
                    },
                    {
                      "character": "n",
                      "start": 42.365,
                      "end": 42.423
                    },
                    {
                      "character": "t",
                      "start": 42.423,
                      "end": 42.504
                    },
                    {
                      "character": "i",
                      "start": 42.504,
                      "end": 42.574
                    },
                    {
                      "character": "e",
                      "start": 42.574,
                      "end": 42.748
                    },
                    {
                      "character": "!",
                      "start": 42.748,
                      "end": 42.795
                    },
                    {
                      "character": "”",
                      "start": 42.795,
                      "end": 42.911
                    },
                    {
                      "character": ",",
                      "start": 42.911,
                      "end": 43.294
                    }
                  ]
                },
                {
                  "word": "then",
                  "start": 43.538,
                  "end": 43.747,
                  "characters": [
                    {
                      "character": "t",
                      "start": 43.538,
                      "end": 43.572
                    },
                    {
                      "character": "h",
                      "start": 43.572,
                      "end": 43.607
                    },
                    {
                      "character": "e",
                      "start": 43.607,
                      "end": 43.689
                    },
                    {
                      "character": "n",
                      "start": 43.689,
                      "end": 43.747
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "opened the",
              "start": 43.828,
              "end": 44.28,
              "words": [
                {
                  "word": "opened",
                  "start": 43.828,
                  "end": 44.176,
                  "characters": [
                    {
                      "character": "o",
                      "start": 43.828,
                      "end": 43.944
                    },
                    {
                      "character": "p",
                      "start": 43.944,
                      "end": 44.014
                    },
                    {
                      "character": "e",
                      "start": 44.014,
                      "end": 44.06
                    },
                    {
                      "character": "n",
                      "start": 44.06,
                      "end": 44.095
                    },
                    {
                      "character": "e",
                      "start": 44.095,
                      "end": 44.153
                    },
                    {
                      "character": "d",
                      "start": 44.153,
                      "end": 44.176
                    }
                  ]
                },
                {
                  "word": "the",
                  "start": 44.211,
                  "end": 44.28,
                  "characters": [
                    {
                      "character": "t",
                      "start": 44.211,
                      "end": 44.234
                    },
                    {
                      "character": "h",
                      "start": 44.234,
                      "end": 44.257
                    },
                    {
                      "character": "e",
                      "start": 44.257,
                      "end": 44.28
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "present. It was",
              "start": 44.327,
              "end": 45.824,
              "words": [
                {
                  "word": "present.",
                  "start": 44.327,
                  "end": 44.954,
                  "characters": [
                    {
                      "character": "p",
                      "start": 44.327,
                      "end": 44.373
                    },
                    {
                      "character": "r",
                      "start": 44.373,
                      "end": 44.431
                    },
                    {
                      "character": "e",
                      "start": 44.431,
                      "end": 44.489
                    },
                    {
                      "character": "s",
                      "start": 44.489,
                      "end": 44.547
                    },
                    {
                      "character": "e",
                      "start": 44.547,
                      "end": 44.629
                    },
                    {
                      "character": "n",
                      "start": 44.629,
                      "end": 44.663
                    },
                    {
                      "character": "t",
                      "start": 44.663,
                      "end": 44.779
                    },
                    {
                      "character": ".",
                      "start": 44.779,
                      "end": 44.954
                    }
                  ]
                },
                {
                  "word": "It",
                  "start": 45.557,
                  "end": 45.685,
                  "characters": [
                    {
                      "character": "I",
                      "start": 45.557,
                      "end": 45.627
                    },
                    {
                      "character": "t",
                      "start": 45.627,
                      "end": 45.685
                    }
                  ]
                },
                {
                  "word": "was",
                  "start": 45.72,
                  "end": 45.824,
                  "characters": [
                    {
                      "character": "w",
                      "start": 45.72,
                      "end": 45.755
                    },
                    {
                      "character": "a",
                      "start": 45.755,
                      "end": 45.79
                    },
                    {
                      "character": "s",
                      "start": 45.79,
                      "end": 45.824
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "a Lego Friends",
              "start": 45.882,
              "end": 46.742,
              "words": [
                {
                  "word": "a",
                  "start": 45.882,
                  "end": 45.906,
                  "characters": [
                    {
                      "character": "a",
                      "start": 45.882,
                      "end": 45.906
                    }
                  ]
                },
                {
                  "word": "Lego",
                  "start": 45.964,
                  "end": 46.277,
                  "characters": [
                    {
                      "character": "L",
                      "start": 45.964,
                      "end": 46.022
                    },
                    {
                      "character": "e",
                      "start": 46.022,
                      "end": 46.115
                    },
                    {
                      "character": "g",
                      "start": 46.115,
                      "end": 46.196
                    },
                    {
                      "character": "o",
                      "start": 46.196,
                      "end": 46.277
                    }
                  ]
                },
                {
                  "word": "Friends",
                  "start": 46.37,
                  "end": 46.742,
                  "characters": [
                    {
                      "character": "F",
                      "start": 46.37,
                      "end": 46.416
                    },
                    {
                      "character": "r",
                      "start": 46.416,
                      "end": 46.486
                    },
                    {
                      "character": "i",
                      "start": 46.486,
                      "end": 46.533
                    },
                    {
                      "character": "e",
                      "start": 46.533,
                      "end": 46.579
                    },
                    {
                      "character": "n",
                      "start": 46.579,
                      "end": 46.637
                    },
                    {
                      "character": "d",
                      "start": 46.637,
                      "end": 46.707
                    },
                    {
                      "character": "s",
                      "start": 46.707,
                      "end": 46.742
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "set. Needless",
              "start": 46.776,
              "end": 48.379,
              "words": [
                {
                  "word": "set.",
                  "start": 46.776,
                  "end": 47.322,
                  "characters": [
                    {
                      "character": "s",
                      "start": 46.776,
                      "end": 46.846
                    },
                    {
                      "character": "e",
                      "start": 46.846,
                      "end": 47.02
                    },
                    {
                      "character": "t",
                      "start": 47.02,
                      "end": 47.148
                    },
                    {
                      "character": ".",
                      "start": 47.148,
                      "end": 47.322
                    }
                  ]
                },
                {
                  "word": "Needless",
                  "start": 47.926,
                  "end": 48.379,
                  "characters": [
                    {
                      "character": "N",
                      "start": 47.926,
                      "end": 48.007
                    },
                    {
                      "character": "e",
                      "start": 48.007,
                      "end": 48.077
                    },
                    {
                      "character": "e",
                      "start": 48.077,
                      "end": 48.123
                    },
                    {
                      "character": "d",
                      "start": 48.123,
                      "end": 48.181
                    },
                    {
                      "character": "l",
                      "start": 48.181,
                      "end": 48.239
                    },
                    {
                      "character": "e",
                      "start": 48.239,
                      "end": 48.286
                    },
                    {
                      "character": "s",
                      "start": 48.286,
                      "end": 48.332
                    },
                    {
                      "character": "s",
                      "start": 48.332,
                      "end": 48.379
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "to say, my",
              "start": 48.413,
              "end": 49.04,
              "words": [
                {
                  "word": "to",
                  "start": 48.413,
                  "end": 48.471,
                  "characters": [
                    {
                      "character": "t",
                      "start": 48.413,
                      "end": 48.437
                    },
                    {
                      "character": "o",
                      "start": 48.437,
                      "end": 48.471
                    }
                  ]
                },
                {
                  "word": "say,",
                  "start": 48.553,
                  "end": 48.878,
                  "characters": [
                    {
                      "character": "s",
                      "start": 48.553,
                      "end": 48.611
                    },
                    {
                      "character": "a",
                      "start": 48.611,
                      "end": 48.762
                    },
                    {
                      "character": "y",
                      "start": 48.762,
                      "end": 48.843
                    },
                    {
                      "character": ",",
                      "start": 48.843,
                      "end": 48.878
                    }
                  ]
                },
                {
                  "word": "my",
                  "start": 48.924,
                  "end": 49.04,
                  "characters": [
                    {
                      "character": "m",
                      "start": 48.924,
                      "end": 48.982
                    },
                    {
                      "character": "y",
                      "start": 48.982,
                      "end": 49.04
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "daughter was so",
              "start": 49.098,
              "end": 49.772,
              "words": [
                {
                  "word": "daughter",
                  "start": 49.098,
                  "end": 49.389,
                  "characters": [
                    {
                      "character": "d",
                      "start": 49.098,
                      "end": 49.145
                    },
                    {
                      "character": "a",
                      "start": 49.145,
                      "end": 49.203
                    },
                    {
                      "character": "u",
                      "start": 49.203,
                      "end": 49.238
                    },
                    {
                      "character": "g",
                      "start": 49.238,
                      "end": 49.273
                    },
                    {
                      "character": "h",
                      "start": 49.273,
                      "end": 49.307
                    },
                    {
                      "character": "t",
                      "start": 49.307,
                      "end": 49.331
                    },
                    {
                      "character": "e",
                      "start": 49.331,
                      "end": 49.365
                    },
                    {
                      "character": "r",
                      "start": 49.365,
                      "end": 49.389
                    }
                  ]
                },
                {
                  "word": "was",
                  "start": 49.447,
                  "end": 49.563,
                  "characters": [
                    {
                      "character": "w",
                      "start": 49.447,
                      "end": 49.481
                    },
                    {
                      "character": "a",
                      "start": 49.481,
                      "end": 49.528
                    },
                    {
                      "character": "s",
                      "start": 49.528,
                      "end": 49.563
                    }
                  ]
                },
                {
                  "word": "so",
                  "start": 49.609,
                  "end": 49.772,
                  "characters": [
                    {
                      "character": "s",
                      "start": 49.609,
                      "end": 49.656
                    },
                    {
                      "character": "o",
                      "start": 49.656,
                      "end": 49.772
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "happy, and",
              "start": 49.853,
              "end": 50.805,
              "words": [
                {
                  "word": "happy,",
                  "start": 49.853,
                  "end": 50.434,
                  "characters": [
                    {
                      "character": "h",
                      "start": 49.853,
                      "end": 49.899
                    },
                    {
                      "character": "a",
                      "start": 49.899,
                      "end": 49.981
                    },
                    {
                      "character": "p",
                      "start": 49.981,
                      "end": 50.05
                    },
                    {
                      "character": "p",
                      "start": 50.05,
                      "end": 50.132
                    },
                    {
                      "character": "y",
                      "start": 50.132,
                      "end": 50.283
                    },
                    {
                      "character": ",",
                      "start": 50.283,
                      "end": 50.434
                    }
                  ]
                },
                {
                  "word": "and",
                  "start": 50.642,
                  "end": 50.805,
                  "characters": [
                    {
                      "character": "a",
                      "start": 50.642,
                      "end": 50.712
                    },
                    {
                      "character": "n",
                      "start": 50.712,
                      "end": 50.759
                    },
                    {
                      "character": "d",
                      "start": 50.759,
                      "end": 50.805
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "jumped up and",
              "start": 50.875,
              "end": 51.409,
              "words": [
                {
                  "word": "jumped",
                  "start": 50.875,
                  "end": 51.153,
                  "characters": [
                    {
                      "character": "j",
                      "start": 50.875,
                      "end": 50.933
                    },
                    {
                      "character": "u",
                      "start": 50.933,
                      "end": 50.979
                    },
                    {
                      "character": "m",
                      "start": 50.979,
                      "end": 51.037
                    },
                    {
                      "character": "p",
                      "start": 51.037,
                      "end": 51.084
                    },
                    {
                      "character": "e",
                      "start": 51.084,
                      "end": 51.13
                    },
                    {
                      "character": "d",
                      "start": 51.13,
                      "end": 51.153
                    }
                  ]
                },
                {
                  "word": "up",
                  "start": 51.2,
                  "end": 51.281,
                  "characters": [
                    {
                      "character": "u",
                      "start": 51.2,
                      "end": 51.235
                    },
                    {
                      "character": "p",
                      "start": 51.235,
                      "end": 51.281
                    }
                  ]
                },
                {
                  "word": "and",
                  "start": 51.327,
                  "end": 51.409,
                  "characters": [
                    {
                      "character": "a",
                      "start": 51.327,
                      "end": 51.351
                    },
                    {
                      "character": "n",
                      "start": 51.351,
                      "end": 51.374
                    },
                    {
                      "character": "d",
                      "start": 51.374,
                      "end": 51.409
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "down with the",
              "start": 51.467,
              "end": 52.036,
              "words": [
                {
                  "word": "down",
                  "start": 51.467,
                  "end": 51.734,
                  "characters": [
                    {
                      "character": "d",
                      "start": 51.467,
                      "end": 51.513
                    },
                    {
                      "character": "o",
                      "start": 51.513,
                      "end": 51.629
                    },
                    {
                      "character": "w",
                      "start": 51.629,
                      "end": 51.676
                    },
                    {
                      "character": "n",
                      "start": 51.676,
                      "end": 51.734
                    }
                  ]
                },
                {
                  "word": "with",
                  "start": 51.792,
                  "end": 51.931,
                  "characters": [
                    {
                      "character": "w",
                      "start": 51.792,
                      "end": 51.827
                    },
                    {
                      "character": "i",
                      "start": 51.827,
                      "end": 51.862
                    },
                    {
                      "character": "t",
                      "start": 51.862,
                      "end": 51.896
                    },
                    {
                      "character": "h",
                      "start": 51.896,
                      "end": 51.931
                    }
                  ]
                },
                {
                  "word": "the",
                  "start": 51.966,
                  "end": 52.036,
                  "characters": [
                    {
                      "character": "t",
                      "start": 51.966,
                      "end": 51.989
                    },
                    {
                      "character": "h",
                      "start": 51.989,
                      "end": 52.012
                    },
                    {
                      "character": "e",
                      "start": 52.012,
                      "end": 52.036
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "Lego set. Then",
              "start": 52.094,
              "end": 53.812,
              "words": [
                {
                  "word": "Lego",
                  "start": 52.094,
                  "end": 52.384,
                  "characters": [
                    {
                      "character": "L",
                      "start": 52.094,
                      "end": 52.14
                    },
                    {
                      "character": "e",
                      "start": 52.14,
                      "end": 52.221
                    },
                    {
                      "character": "g",
                      "start": 52.221,
                      "end": 52.303
                    },
                    {
                      "character": "o",
                      "start": 52.303,
                      "end": 52.384
                    }
                  ]
                },
                {
                  "word": "set.",
                  "start": 52.465,
                  "end": 52.999,
                  "characters": [
                    {
                      "character": "s",
                      "start": 52.465,
                      "end": 52.523
                    },
                    {
                      "character": "e",
                      "start": 52.523,
                      "end": 52.697
                    },
                    {
                      "character": "t",
                      "start": 52.697,
                      "end": 52.848
                    },
                    {
                      "character": ".",
                      "start": 52.848,
                      "end": 52.999
                    }
                  ]
                },
                {
                  "word": "Then",
                  "start": 53.603,
                  "end": 53.812,
                  "characters": [
                    {
                      "character": "T",
                      "start": 53.603,
                      "end": 53.649
                    },
                    {
                      "character": "h",
                      "start": 53.649,
                      "end": 53.708
                    },
                    {
                      "character": "e",
                      "start": 53.708,
                      "end": 53.766
                    },
                    {
                      "character": "n",
                      "start": 53.766,
                      "end": 53.812
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "suddenly, the",
              "start": 53.893,
              "end": 54.973,
              "words": [
                {
                  "word": "suddenly,",
                  "start": 53.893,
                  "end": 54.648,
                  "characters": [
                    {
                      "character": "s",
                      "start": 53.893,
                      "end": 53.951
                    },
                    {
                      "character": "u",
                      "start": 53.951,
                      "end": 54.033
                    },
                    {
                      "character": "d",
                      "start": 54.033,
                      "end": 54.102
                    },
                    {
                      "character": "d",
                      "start": 54.102,
                      "end": 54.149
                    },
                    {
                      "character": "e",
                      "start": 54.149,
                      "end": 54.195
                    },
                    {
                      "character": "n",
                      "start": 54.195,
                      "end": 54.253
                    },
                    {
                      "character": "l",
                      "start": 54.253,
                      "end": 54.323
                    },
                    {
                      "character": "y",
                      "start": 54.323,
                      "end": 54.439
                    },
                    {
                      "character": ",",
                      "start": 54.439,
                      "end": 54.648
                    }
                  ]
                },
                {
                  "word": "the",
                  "start": 54.857,
                  "end": 54.973,
                  "characters": [
                    {
                      "character": "t",
                      "start": 54.857,
                      "end": 54.892
                    },
                    {
                      "character": "h",
                      "start": 54.892,
                      "end": 54.938
                    },
                    {
                      "character": "e",
                      "start": 54.938,
                      "end": 54.973
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "auntie snatched",
              "start": 55.043,
              "end": 55.762,
              "words": [
                {
                  "word": "auntie",
                  "start": 55.043,
                  "end": 55.333,
                  "characters": [
                    {
                      "character": "a",
                      "start": 55.043,
                      "end": 55.077
                    },
                    {
                      "character": "u",
                      "start": 55.077,
                      "end": 55.124
                    },
                    {
                      "character": "n",
                      "start": 55.124,
                      "end": 55.17
                    },
                    {
                      "character": "t",
                      "start": 55.17,
                      "end": 55.228
                    },
                    {
                      "character": "i",
                      "start": 55.228,
                      "end": 55.286
                    },
                    {
                      "character": "e",
                      "start": 55.286,
                      "end": 55.333
                    }
                  ]
                },
                {
                  "word": "snatched",
                  "start": 55.368,
                  "end": 55.762,
                  "characters": [
                    {
                      "character": "s",
                      "start": 55.368,
                      "end": 55.449
                    },
                    {
                      "character": "n",
                      "start": 55.449,
                      "end": 55.519
                    },
                    {
                      "character": "a",
                      "start": 55.519,
                      "end": 55.577
                    },
                    {
                      "character": "t",
                      "start": 55.577,
                      "end": 55.623
                    },
                    {
                      "character": "c",
                      "start": 55.623,
                      "end": 55.67
                    },
                    {
                      "character": "h",
                      "start": 55.67,
                      "end": 55.704
                    },
                    {
                      "character": "e",
                      "start": 55.704,
                      "end": 55.739
                    },
                    {
                      "character": "d",
                      "start": 55.739,
                      "end": 55.762
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "the Lego set",
              "start": 55.797,
              "end": 56.54,
              "words": [
                {
                  "word": "the",
                  "start": 55.797,
                  "end": 55.867,
                  "characters": [
                    {
                      "character": "t",
                      "start": 55.797,
                      "end": 55.821
                    },
                    {
                      "character": "h",
                      "start": 55.821,
                      "end": 55.844
                    },
                    {
                      "character": "e",
                      "start": 55.844,
                      "end": 55.867
                    }
                  ]
                },
                {
                  "word": "Lego",
                  "start": 55.925,
                  "end": 56.227,
                  "characters": [
                    {
                      "character": "L",
                      "start": 55.925,
                      "end": 55.971
                    },
                    {
                      "character": "e",
                      "start": 55.971,
                      "end": 56.053
                    },
                    {
                      "character": "g",
                      "start": 56.053,
                      "end": 56.134
                    },
                    {
                      "character": "o",
                      "start": 56.134,
                      "end": 56.227
                    }
                  ]
                },
                {
                  "word": "set",
                  "start": 56.297,
                  "end": 56.54,
                  "characters": [
                    {
                      "character": "s",
                      "start": 56.297,
                      "end": 56.343
                    },
                    {
                      "character": "e",
                      "start": 56.343,
                      "end": 56.494
                    },
                    {
                      "character": "t",
                      "start": 56.494,
                      "end": 56.54
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "from my",
              "start": 56.598,
              "end": 56.923,
              "words": [
                {
                  "word": "from",
                  "start": 56.598,
                  "end": 56.761,
                  "characters": [
                    {
                      "character": "f",
                      "start": 56.598,
                      "end": 56.633
                    },
                    {
                      "character": "r",
                      "start": 56.633,
                      "end": 56.68
                    },
                    {
                      "character": "o",
                      "start": 56.68,
                      "end": 56.726
                    },
                    {
                      "character": "m",
                      "start": 56.726,
                      "end": 56.761
                    }
                  ]
                },
                {
                  "word": "my",
                  "start": 56.831,
                  "end": 56.923,
                  "characters": [
                    {
                      "character": "m",
                      "start": 56.831,
                      "end": 56.877
                    },
                    {
                      "character": "y",
                      "start": 56.877,
                      "end": 56.923
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "daughter’s",
              "start": 56.982,
              "end": 57.341,
              "words": [
                {
                  "word": "daughter’s",
                  "start": 56.982,
                  "end": 57.341,
                  "characters": [
                    {
                      "character": "d",
                      "start": 56.982,
                      "end": 57.028
                    },
                    {
                      "character": "a",
                      "start": 57.028,
                      "end": 57.074
                    },
                    {
                      "character": "u",
                      "start": 57.074,
                      "end": 57.109
                    },
                    {
                      "character": "g",
                      "start": 57.109,
                      "end": 57.144
                    },
                    {
                      "character": "h",
                      "start": 57.144,
                      "end": 57.179
                    },
                    {
                      "character": "t",
                      "start": 57.179,
                      "end": 57.202
                    },
                    {
                      "character": "e",
                      "start": 57.202,
                      "end": 57.237
                    },
                    {
                      "character": "r",
                      "start": 57.237,
                      "end": 57.272
                    },
                    {
                      "character": "’",
                      "start": 57.272,
                      "end": 57.318
                    },
                    {
                      "character": "s",
                      "start": 57.318,
                      "end": 57.341
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "hands again,",
              "start": 57.388,
              "end": 58.293,
              "words": [
                {
                  "word": "hands",
                  "start": 57.388,
                  "end": 57.69,
                  "characters": [
                    {
                      "character": "h",
                      "start": 57.388,
                      "end": 57.434
                    },
                    {
                      "character": "a",
                      "start": 57.434,
                      "end": 57.55
                    },
                    {
                      "character": "n",
                      "start": 57.55,
                      "end": 57.585
                    },
                    {
                      "character": "d",
                      "start": 57.585,
                      "end": 57.643
                    },
                    {
                      "character": "s",
                      "start": 57.643,
                      "end": 57.69
                    }
                  ]
                },
                {
                  "word": "again,",
                  "start": 57.736,
                  "end": 58.293,
                  "characters": [
                    {
                      "character": "a",
                      "start": 57.736,
                      "end": 57.794
                    },
                    {
                      "character": "g",
                      "start": 57.794,
                      "end": 57.864
                    },
                    {
                      "character": "a",
                      "start": 57.864,
                      "end": 57.945
                    },
                    {
                      "character": "i",
                      "start": 57.945,
                      "end": 58.003
                    },
                    {
                      "character": "n",
                      "start": 58.003,
                      "end": 58.119
                    },
                    {
                      "character": ",",
                      "start": 58.119,
                      "end": 58.293
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "held it up",
              "start": 58.468,
              "end": 58.944,
              "words": [
                {
                  "word": "held",
                  "start": 58.468,
                  "end": 58.688,
                  "characters": [
                    {
                      "character": "h",
                      "start": 58.468,
                      "end": 58.514
                    },
                    {
                      "character": "e",
                      "start": 58.514,
                      "end": 58.572
                    },
                    {
                      "character": "l",
                      "start": 58.572,
                      "end": 58.642
                    },
                    {
                      "character": "d",
                      "start": 58.642,
                      "end": 58.688
                    }
                  ]
                },
                {
                  "word": "it",
                  "start": 58.735,
                  "end": 58.804,
                  "characters": [
                    {
                      "character": "i",
                      "start": 58.735,
                      "end": 58.769
                    },
                    {
                      "character": "t",
                      "start": 58.769,
                      "end": 58.804
                    }
                  ]
                },
                {
                  "word": "up",
                  "start": 58.851,
                  "end": 58.944,
                  "characters": [
                    {
                      "character": "u",
                      "start": 58.851,
                      "end": 58.897
                    },
                    {
                      "character": "p",
                      "start": 58.897,
                      "end": 58.944
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "above her head,",
              "start": 59.002,
              "end": 59.872,
              "words": [
                {
                  "word": "above",
                  "start": 59.002,
                  "end": 59.234,
                  "characters": [
                    {
                      "character": "a",
                      "start": 59.002,
                      "end": 59.048
                    },
                    {
                      "character": "b",
                      "start": 59.048,
                      "end": 59.106
                    },
                    {
                      "character": "o",
                      "start": 59.106,
                      "end": 59.164
                    },
                    {
                      "character": "v",
                      "start": 59.164,
                      "end": 59.211
                    },
                    {
                      "character": "e",
                      "start": 59.211,
                      "end": 59.234
                    }
                  ]
                },
                {
                  "word": "her",
                  "start": 59.269,
                  "end": 59.362,
                  "characters": [
                    {
                      "character": "h",
                      "start": 59.269,
                      "end": 59.304
                    },
                    {
                      "character": "e",
                      "start": 59.304,
                      "end": 59.327
                    },
                    {
                      "character": "r",
                      "start": 59.327,
                      "end": 59.362
                    }
                  ]
                },
                {
                  "word": "head,",
                  "start": 59.42,
                  "end": 59.872,
                  "characters": [
                    {
                      "character": "h",
                      "start": 59.42,
                      "end": 59.454
                    },
                    {
                      "character": "e",
                      "start": 59.454,
                      "end": 59.547
                    },
                    {
                      "character": "a",
                      "start": 59.547,
                      "end": 59.605
                    },
                    {
                      "character": "d",
                      "start": 59.605,
                      "end": 59.756
                    },
                    {
                      "character": ",",
                      "start": 59.756,
                      "end": 59.872
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "and demanded my",
              "start": 59.965,
              "end": 60.801,
              "words": [
                {
                  "word": "and",
                  "start": 59.965,
                  "end": 60.151,
                  "characters": [
                    {
                      "character": "a",
                      "start": 59.965,
                      "end": 60.058
                    },
                    {
                      "character": "n",
                      "start": 60.058,
                      "end": 60.116
                    },
                    {
                      "character": "d",
                      "start": 60.116,
                      "end": 60.151
                    }
                  ]
                },
                {
                  "word": "demanded",
                  "start": 60.209,
                  "end": 60.627,
                  "characters": [
                    {
                      "character": "d",
                      "start": 60.209,
                      "end": 60.244
                    },
                    {
                      "character": "e",
                      "start": 60.244,
                      "end": 60.302
                    },
                    {
                      "character": "m",
                      "start": 60.302,
                      "end": 60.371
                    },
                    {
                      "character": "a",
                      "start": 60.371,
                      "end": 60.441
                    },
                    {
                      "character": "n",
                      "start": 60.441,
                      "end": 60.476
                    },
                    {
                      "character": "d",
                      "start": 60.476,
                      "end": 60.534
                    },
                    {
                      "character": "e",
                      "start": 60.534,
                      "end": 60.604
                    },
                    {
                      "character": "d",
                      "start": 60.604,
                      "end": 60.627
                    }
                  ]
                },
                {
                  "word": "my",
                  "start": 60.685,
                  "end": 60.801,
                  "characters": [
                    {
                      "character": "m",
                      "start": 60.685,
                      "end": 60.743
                    },
                    {
                      "character": "y",
                      "start": 60.743,
                      "end": 60.801
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "daughter, “Say",
              "start": 60.871,
              "end": 62.275,
              "words": [
                {
                  "word": "daughter,",
                  "start": 60.871,
                  "end": 61.428,
                  "characters": [
                    {
                      "character": "d",
                      "start": 60.871,
                      "end": 60.917
                    },
                    {
                      "character": "a",
                      "start": 60.917,
                      "end": 60.987
                    },
                    {
                      "character": "u",
                      "start": 60.987,
                      "end": 61.021
                    },
                    {
                      "character": "g",
                      "start": 61.021,
                      "end": 61.056
                    },
                    {
                      "character": "h",
                      "start": 61.056,
                      "end": 61.091
                    },
                    {
                      "character": "t",
                      "start": 61.091,
                      "end": 61.138
                    },
                    {
                      "character": "e",
                      "start": 61.138,
                      "end": 61.172
                    },
                    {
                      "character": "r",
                      "start": 61.172,
                      "end": 61.254
                    },
                    {
                      "character": ",",
                      "start": 61.254,
                      "end": 61.428
                    }
                  ]
                },
                {
                  "word": "“Say",
                  "start": 61.753,
                  "end": 62.275,
                  "characters": [
                    {
                      "character": "“",
                      "start": 61.753,
                      "end": 61.927
                    },
                    {
                      "character": "S",
                      "start": 61.927,
                      "end": 62.043
                    },
                    {
                      "character": "a",
                      "start": 62.043,
                      "end": 62.217
                    },
                    {
                      "character": "y",
                      "start": 62.217,
                      "end": 62.275
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "‘please’ and",
              "start": 62.299,
              "end": 63.413,
              "words": [
                {
                  "word": "‘please’",
                  "start": 62.299,
                  "end": 63.181,
                  "characters": [
                    {
                      "character": "‘",
                      "start": 62.299,
                      "end": 62.415
                    },
                    {
                      "character": "p",
                      "start": 62.415,
                      "end": 62.531
                    },
                    {
                      "character": "l",
                      "start": 62.531,
                      "end": 62.658
                    },
                    {
                      "character": "e",
                      "start": 62.658,
                      "end": 62.809
                    },
                    {
                      "character": "a",
                      "start": 62.809,
                      "end": 62.937
                    },
                    {
                      "character": "s",
                      "start": 62.937,
                      "end": 63.053
                    },
                    {
                      "character": "e",
                      "start": 63.053,
                      "end": 63.123
                    },
                    {
                      "character": "’",
                      "start": 63.123,
                      "end": 63.181
                    }
                  ]
                },
                {
                  "word": "and",
                  "start": 63.216,
                  "end": 63.413,
                  "characters": [
                    {
                      "character": "a",
                      "start": 63.216,
                      "end": 63.309
                    },
                    {
                      "character": "n",
                      "start": 63.309,
                      "end": 63.367
                    },
                    {
                      "character": "d",
                      "start": 63.367,
                      "end": 63.413
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "bow, or",
              "start": 63.529,
              "end": 64.191,
              "words": [
                {
                  "word": "bow,",
                  "start": 63.529,
                  "end": 64.017,
                  "characters": [
                    {
                      "character": "b",
                      "start": 63.529,
                      "end": 63.611
                    },
                    {
                      "character": "o",
                      "start": 63.611,
                      "end": 63.854
                    },
                    {
                      "character": "w",
                      "start": 63.854,
                      "end": 63.97
                    },
                    {
                      "character": ",",
                      "start": 63.97,
                      "end": 64.017
                    }
                  ]
                },
                {
                  "word": "or",
                  "start": 64.052,
                  "end": 64.191,
                  "characters": [
                    {
                      "character": "o",
                      "start": 64.052,
                      "end": 64.145
                    },
                    {
                      "character": "r",
                      "start": 64.145,
                      "end": 64.191
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "auntie’s gonna",
              "start": 64.272,
              "end": 64.853,
              "words": [
                {
                  "word": "auntie’s",
                  "start": 64.272,
                  "end": 64.597,
                  "characters": [
                    {
                      "character": "a",
                      "start": 64.272,
                      "end": 64.319
                    },
                    {
                      "character": "u",
                      "start": 64.319,
                      "end": 64.365
                    },
                    {
                      "character": "n",
                      "start": 64.365,
                      "end": 64.412
                    },
                    {
                      "character": "t",
                      "start": 64.412,
                      "end": 64.47
                    },
                    {
                      "character": "i",
                      "start": 64.47,
                      "end": 64.516
                    },
                    {
                      "character": "e",
                      "start": 64.516,
                      "end": 64.539
                    },
                    {
                      "character": "’",
                      "start": 64.539,
                      "end": 64.574
                    },
                    {
                      "character": "s",
                      "start": 64.574,
                      "end": 64.597
                    }
                  ]
                },
                {
                  "word": "gonna",
                  "start": 64.632,
                  "end": 64.853,
                  "characters": [
                    {
                      "character": "g",
                      "start": 64.632,
                      "end": 64.667
                    },
                    {
                      "character": "o",
                      "start": 64.667,
                      "end": 64.725
                    },
                    {
                      "character": "n",
                      "start": 64.725,
                      "end": 64.76
                    },
                    {
                      "character": "n",
                      "start": 64.76,
                      "end": 64.795
                    },
                    {
                      "character": "a",
                      "start": 64.795,
                      "end": 64.853
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "take it back!”.",
              "start": 64.899,
              "end": 65.886,
              "words": [
                {
                  "word": "take",
                  "start": 64.899,
                  "end": 65.108,
                  "characters": [
                    {
                      "character": "t",
                      "start": 64.899,
                      "end": 64.957
                    },
                    {
                      "character": "a",
                      "start": 64.957,
                      "end": 65.015
                    },
                    {
                      "character": "k",
                      "start": 65.015,
                      "end": 65.073
                    },
                    {
                      "character": "e",
                      "start": 65.073,
                      "end": 65.108
                    }
                  ]
                },
                {
                  "word": "it",
                  "start": 65.155,
                  "end": 65.224,
                  "characters": [
                    {
                      "character": "i",
                      "start": 65.155,
                      "end": 65.189
                    },
                    {
                      "character": "t",
                      "start": 65.189,
                      "end": 65.224
                    }
                  ]
                },
                {
                  "word": "back!”.",
                  "start": 65.282,
                  "end": 65.886,
                  "characters": [
                    {
                      "character": "b",
                      "start": 65.282,
                      "end": 65.34
                    },
                    {
                      "character": "a",
                      "start": 65.34,
                      "end": 65.468
                    },
                    {
                      "character": "c",
                      "start": 65.468,
                      "end": 65.526
                    },
                    {
                      "character": "k",
                      "start": 65.526,
                      "end": 65.642
                    },
                    {
                      "character": "!",
                      "start": 65.642,
                      "end": 65.816
                    },
                    {
                      "character": "”",
                      "start": 65.816,
                      "end": 65.851
                    },
                    {
                      "character": ".",
                      "start": 65.851,
                      "end": 65.886
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "This time, I",
              "start": 66.699,
              "end": 67.384,
              "words": [
                {
                  "word": "This",
                  "start": 66.699,
                  "end": 66.908,
                  "characters": [
                    {
                      "character": "T",
                      "start": 66.699,
                      "end": 66.757
                    },
                    {
                      "character": "h",
                      "start": 66.757,
                      "end": 66.826
                    },
                    {
                      "character": "i",
                      "start": 66.826,
                      "end": 66.873
                    },
                    {
                      "character": "s",
                      "start": 66.873,
                      "end": 66.908
                    }
                  ]
                },
                {
                  "word": "time,",
                  "start": 66.966,
                  "end": 67.314,
                  "characters": [
                    {
                      "character": "t",
                      "start": 66.966,
                      "end": 67.024
                    },
                    {
                      "character": "i",
                      "start": 67.024,
                      "end": 67.175
                    },
                    {
                      "character": "m",
                      "start": 67.175,
                      "end": 67.233
                    },
                    {
                      "character": "e",
                      "start": 67.233,
                      "end": 67.291
                    },
                    {
                      "character": ",",
                      "start": 67.291,
                      "end": 67.314
                    }
                  ]
                },
                {
                  "word": "I",
                  "start": 67.349,
                  "end": 67.384,
                  "characters": [
                    {
                      "character": "I",
                      "start": 67.349,
                      "end": 67.384
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "knew she wasn’t",
              "start": 67.5,
              "end": 68.15,
              "words": [
                {
                  "word": "knew",
                  "start": 67.5,
                  "end": 67.662,
                  "characters": [
                    {
                      "character": "k",
                      "start": 67.5,
                      "end": 67.535
                    },
                    {
                      "character": "n",
                      "start": 67.535,
                      "end": 67.581
                    },
                    {
                      "character": "e",
                      "start": 67.581,
                      "end": 67.628
                    },
                    {
                      "character": "w",
                      "start": 67.628,
                      "end": 67.662
                    }
                  ]
                },
                {
                  "word": "she",
                  "start": 67.72,
                  "end": 67.825,
                  "characters": [
                    {
                      "character": "s",
                      "start": 67.72,
                      "end": 67.755
                    },
                    {
                      "character": "h",
                      "start": 67.755,
                      "end": 67.802
                    },
                    {
                      "character": "e",
                      "start": 67.802,
                      "end": 67.825
                    }
                  ]
                },
                {
                  "word": "wasn’t",
                  "start": 67.883,
                  "end": 68.15,
                  "characters": [
                    {
                      "character": "w",
                      "start": 67.883,
                      "end": 67.929
                    },
                    {
                      "character": "a",
                      "start": 67.929,
                      "end": 67.976
                    },
                    {
                      "character": "s",
                      "start": 67.976,
                      "end": 68.046
                    },
                    {
                      "character": "n",
                      "start": 68.046,
                      "end": 68.092
                    },
                    {
                      "character": "’",
                      "start": 68.092,
                      "end": 68.127
                    },
                    {
                      "character": "t",
                      "start": 68.127,
                      "end": 68.15
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "joking.  I got",
              "start": 68.196,
              "end": 69.357,
              "words": [
                {
                  "word": "joking.",
                  "start": 68.196,
                  "end": 68.8,
                  "characters": [
                    {
                      "character": "j",
                      "start": 68.196,
                      "end": 68.243
                    },
                    {
                      "character": "o",
                      "start": 68.243,
                      "end": 68.359
                    },
                    {
                      "character": "k",
                      "start": 68.359,
                      "end": 68.44
                    },
                    {
                      "character": "i",
                      "start": 68.44,
                      "end": 68.498
                    },
                    {
                      "character": "n",
                      "start": 68.498,
                      "end": 68.522
                    },
                    {
                      "character": "g",
                      "start": 68.522,
                      "end": 68.591
                    },
                    {
                      "character": ".",
                      "start": 68.591,
                      "end": 68.8
                    }
                  ]
                },
                {
                  "word": "",
                  "start": 68.8,
                  "end": 69.079,
                  "characters": []
                },
                {
                  "word": "I",
                  "start": 69.079,
                  "end": 69.125,
                  "characters": [
                    {
                      "character": "I",
                      "start": 69.079,
                      "end": 69.125
                    }
                  ]
                },
                {
                  "word": "got",
                  "start": 69.207,
                  "end": 69.357,
                  "characters": [
                    {
                      "character": "g",
                      "start": 69.207,
                      "end": 69.241
                    },
                    {
                      "character": "o",
                      "start": 69.241,
                      "end": 69.311
                    },
                    {
                      "character": "t",
                      "start": 69.311,
                      "end": 69.357
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "angry but tried",
              "start": 69.415,
              "end": 70.553,
              "words": [
                {
                  "word": "angry",
                  "start": 69.415,
                  "end": 69.799,
                  "characters": [
                    {
                      "character": "a",
                      "start": 69.415,
                      "end": 69.45
                    },
                    {
                      "character": "n",
                      "start": 69.45,
                      "end": 69.543
                    },
                    {
                      "character": "g",
                      "start": 69.543,
                      "end": 69.601
                    },
                    {
                      "character": "r",
                      "start": 69.601,
                      "end": 69.683
                    },
                    {
                      "character": "y",
                      "start": 69.683,
                      "end": 69.799
                    }
                  ]
                },
                {
                  "word": "but",
                  "start": 70.008,
                  "end": 70.182,
                  "characters": [
                    {
                      "character": "b",
                      "start": 70.008,
                      "end": 70.089
                    },
                    {
                      "character": "u",
                      "start": 70.089,
                      "end": 70.147
                    },
                    {
                      "character": "t",
                      "start": 70.147,
                      "end": 70.182
                    }
                  ]
                },
                {
                  "word": "tried",
                  "start": 70.217,
                  "end": 70.553,
                  "characters": [
                    {
                      "character": "t",
                      "start": 70.217,
                      "end": 70.275
                    },
                    {
                      "character": "r",
                      "start": 70.275,
                      "end": 70.344
                    },
                    {
                      "character": "i",
                      "start": 70.344,
                      "end": 70.46
                    },
                    {
                      "character": "e",
                      "start": 70.46,
                      "end": 70.53
                    },
                    {
                      "character": "d",
                      "start": 70.53,
                      "end": 70.553
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "very hard to",
              "start": 70.623,
              "end": 71.331,
              "words": [
                {
                  "word": "very",
                  "start": 70.623,
                  "end": 70.902,
                  "characters": [
                    {
                      "character": "v",
                      "start": 70.623,
                      "end": 70.693
                    },
                    {
                      "character": "e",
                      "start": 70.693,
                      "end": 70.774
                    },
                    {
                      "character": "r",
                      "start": 70.774,
                      "end": 70.844
                    },
                    {
                      "character": "y",
                      "start": 70.844,
                      "end": 70.902
                    }
                  ]
                },
                {
                  "word": "hard",
                  "start": 70.971,
                  "end": 71.25,
                  "characters": [
                    {
                      "character": "h",
                      "start": 70.971,
                      "end": 71.018
                    },
                    {
                      "character": "a",
                      "start": 71.018,
                      "end": 71.134
                    },
                    {
                      "character": "r",
                      "start": 71.134,
                      "end": 71.192
                    },
                    {
                      "character": "d",
                      "start": 71.192,
                      "end": 71.25
                    }
                  ]
                },
                {
                  "word": "to",
                  "start": 71.285,
                  "end": 71.331,
                  "characters": [
                    {
                      "character": "t",
                      "start": 71.285,
                      "end": 71.308
                    },
                    {
                      "character": "o",
                      "start": 71.308,
                      "end": 71.331
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "keep my voice",
              "start": 71.378,
              "end": 72.005,
              "words": [
                {
                  "word": "keep",
                  "start": 71.378,
                  "end": 71.54,
                  "characters": [
                    {
                      "character": "k",
                      "start": 71.378,
                      "end": 71.412
                    },
                    {
                      "character": "e",
                      "start": 71.412,
                      "end": 71.459
                    },
                    {
                      "character": "e",
                      "start": 71.459,
                      "end": 71.505
                    },
                    {
                      "character": "p",
                      "start": 71.505,
                      "end": 71.54
                    }
                  ]
                },
                {
                  "word": "my",
                  "start": 71.598,
                  "end": 71.691,
                  "characters": [
                    {
                      "character": "m",
                      "start": 71.598,
                      "end": 71.645
                    },
                    {
                      "character": "y",
                      "start": 71.645,
                      "end": 71.691
                    }
                  ]
                },
                {
                  "word": "voice",
                  "start": 71.761,
                  "end": 72.005,
                  "characters": [
                    {
                      "character": "v",
                      "start": 71.761,
                      "end": 71.807
                    },
                    {
                      "character": "o",
                      "start": 71.807,
                      "end": 71.865
                    },
                    {
                      "character": "i",
                      "start": 71.865,
                      "end": 71.923
                    },
                    {
                      "character": "c",
                      "start": 71.923,
                      "end": 71.97
                    },
                    {
                      "character": "e",
                      "start": 71.97,
                      "end": 72.005
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "calm, “No one",
              "start": 72.039,
              "end": 73.189,
              "words": [
                {
                  "word": "calm,",
                  "start": 72.039,
                  "end": 72.573,
                  "characters": [
                    {
                      "character": "c",
                      "start": 72.039,
                      "end": 72.086
                    },
                    {
                      "character": "a",
                      "start": 72.086,
                      "end": 72.237
                    },
                    {
                      "character": "l",
                      "start": 72.237,
                      "end": 72.306
                    },
                    {
                      "character": "m",
                      "start": 72.306,
                      "end": 72.422
                    },
                    {
                      "character": ",",
                      "start": 72.422,
                      "end": 72.573
                    }
                  ]
                },
                {
                  "word": "“No",
                  "start": 72.724,
                  "end": 72.991,
                  "characters": [
                    {
                      "character": "“",
                      "start": 72.724,
                      "end": 72.84
                    },
                    {
                      "character": "N",
                      "start": 72.84,
                      "end": 72.922
                    },
                    {
                      "character": "o",
                      "start": 72.922,
                      "end": 72.991
                    }
                  ]
                },
                {
                  "word": "one",
                  "start": 73.061,
                  "end": 73.189,
                  "characters": [
                    {
                      "character": "o",
                      "start": 73.061,
                      "end": 73.096
                    },
                    {
                      "character": "n",
                      "start": 73.096,
                      "end": 73.154
                    },
                    {
                      "character": "e",
                      "start": 73.154,
                      "end": 73.189
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "demands my",
              "start": 73.224,
              "end": 73.804,
              "words": [
                {
                  "word": "demands",
                  "start": 73.224,
                  "end": 73.642,
                  "characters": [
                    {
                      "character": "d",
                      "start": 73.224,
                      "end": 73.258
                    },
                    {
                      "character": "e",
                      "start": 73.258,
                      "end": 73.328
                    },
                    {
                      "character": "m",
                      "start": 73.328,
                      "end": 73.398
                    },
                    {
                      "character": "a",
                      "start": 73.398,
                      "end": 73.514
                    },
                    {
                      "character": "n",
                      "start": 73.514,
                      "end": 73.549
                    },
                    {
                      "character": "d",
                      "start": 73.549,
                      "end": 73.595
                    },
                    {
                      "character": "s",
                      "start": 73.595,
                      "end": 73.642
                    }
                  ]
                },
                {
                  "word": "my",
                  "start": 73.711,
                  "end": 73.804,
                  "characters": [
                    {
                      "character": "m",
                      "start": 73.711,
                      "end": 73.758
                    },
                    {
                      "character": "y",
                      "start": 73.758,
                      "end": 73.804
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "daughter to",
              "start": 73.874,
              "end": 74.257,
              "words": [
                {
                  "word": "daughter",
                  "start": 73.874,
                  "end": 74.152,
                  "characters": [
                    {
                      "character": "d",
                      "start": 73.874,
                      "end": 73.92
                    },
                    {
                      "character": "a",
                      "start": 73.92,
                      "end": 73.978
                    },
                    {
                      "character": "u",
                      "start": 73.978,
                      "end": 74.001
                    },
                    {
                      "character": "g",
                      "start": 74.001,
                      "end": 74.036
                    },
                    {
                      "character": "h",
                      "start": 74.036,
                      "end": 74.059
                    },
                    {
                      "character": "t",
                      "start": 74.059,
                      "end": 74.094
                    },
                    {
                      "character": "e",
                      "start": 74.094,
                      "end": 74.129
                    },
                    {
                      "character": "r",
                      "start": 74.129,
                      "end": 74.152
                    }
                  ]
                },
                {
                  "word": "to",
                  "start": 74.199,
                  "end": 74.257,
                  "characters": [
                    {
                      "character": "t",
                      "start": 74.199,
                      "end": 74.222
                    },
                    {
                      "character": "o",
                      "start": 74.222,
                      "end": 74.257
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "beg. We’re poor",
              "start": 74.327,
              "end": 75.673,
              "words": [
                {
                  "word": "beg.",
                  "start": 74.327,
                  "end": 74.814,
                  "characters": [
                    {
                      "character": "b",
                      "start": 74.327,
                      "end": 74.373
                    },
                    {
                      "character": "e",
                      "start": 74.373,
                      "end": 74.547
                    },
                    {
                      "character": "g",
                      "start": 74.547,
                      "end": 74.698
                    },
                    {
                      "character": ".",
                      "start": 74.698,
                      "end": 74.814
                    }
                  ]
                },
                {
                  "word": "We’re",
                  "start": 74.988,
                  "end": 75.209,
                  "characters": [
                    {
                      "character": "W",
                      "start": 74.988,
                      "end": 75.046
                    },
                    {
                      "character": "e",
                      "start": 75.046,
                      "end": 75.104
                    },
                    {
                      "character": "’",
                      "start": 75.104,
                      "end": 75.151
                    },
                    {
                      "character": "r",
                      "start": 75.151,
                      "end": 75.186
                    },
                    {
                      "character": "e",
                      "start": 75.186,
                      "end": 75.209
                    }
                  ]
                },
                {
                  "word": "poor",
                  "start": 75.244,
                  "end": 75.673,
                  "characters": [
                    {
                      "character": "p",
                      "start": 75.244,
                      "end": 75.29
                    },
                    {
                      "character": "o",
                      "start": 75.29,
                      "end": 75.441
                    },
                    {
                      "character": "o",
                      "start": 75.441,
                      "end": 75.557
                    },
                    {
                      "character": "r",
                      "start": 75.557,
                      "end": 75.673
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "but we are not",
              "start": 75.998,
              "end": 76.706,
              "words": [
                {
                  "word": "but",
                  "start": 75.998,
                  "end": 76.172,
                  "characters": [
                    {
                      "character": "b",
                      "start": 75.998,
                      "end": 76.08
                    },
                    {
                      "character": "u",
                      "start": 76.08,
                      "end": 76.138
                    },
                    {
                      "character": "t",
                      "start": 76.138,
                      "end": 76.172
                    }
                  ]
                },
                {
                  "word": "we",
                  "start": 76.231,
                  "end": 76.335,
                  "characters": [
                    {
                      "character": "w",
                      "start": 76.231,
                      "end": 76.265
                    },
                    {
                      "character": "e",
                      "start": 76.265,
                      "end": 76.335
                    }
                  ]
                },
                {
                  "word": "are",
                  "start": 76.393,
                  "end": 76.509,
                  "characters": [
                    {
                      "character": "a",
                      "start": 76.393,
                      "end": 76.428
                    },
                    {
                      "character": "r",
                      "start": 76.428,
                      "end": 76.474
                    },
                    {
                      "character": "e",
                      "start": 76.474,
                      "end": 76.509
                    }
                  ]
                },
                {
                  "word": "not",
                  "start": 76.555,
                  "end": 76.706,
                  "characters": [
                    {
                      "character": "n",
                      "start": 76.555,
                      "end": 76.59
                    },
                    {
                      "character": "o",
                      "start": 76.59,
                      "end": 76.648
                    },
                    {
                      "character": "t",
                      "start": 76.648,
                      "end": 76.706
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "cheap”. “I was",
              "start": 76.764,
              "end": 78.808,
              "words": [
                {
                  "word": "cheap”.",
                  "start": 76.764,
                  "end": 77.368,
                  "characters": [
                    {
                      "character": "c",
                      "start": 76.764,
                      "end": 76.822
                    },
                    {
                      "character": "h",
                      "start": 76.822,
                      "end": 76.88
                    },
                    {
                      "character": "e",
                      "start": 76.88,
                      "end": 76.938
                    },
                    {
                      "character": "a",
                      "start": 76.938,
                      "end": 76.996
                    },
                    {
                      "character": "p",
                      "start": 76.996,
                      "end": 77.113
                    },
                    {
                      "character": "”",
                      "start": 77.113,
                      "end": 77.287
                    },
                    {
                      "character": ".",
                      "start": 77.287,
                      "end": 77.368
                    }
                  ]
                },
                {
                  "word": "“I",
                  "start": 78.32,
                  "end": 78.564,
                  "characters": [
                    {
                      "character": "“",
                      "start": 78.32,
                      "end": 78.494
                    },
                    {
                      "character": "I",
                      "start": 78.494,
                      "end": 78.564
                    }
                  ]
                },
                {
                  "word": "was",
                  "start": 78.68,
                  "end": 78.808,
                  "characters": [
                    {
                      "character": "w",
                      "start": 78.68,
                      "end": 78.715
                    },
                    {
                      "character": "a",
                      "start": 78.715,
                      "end": 78.773
                    },
                    {
                      "character": "s",
                      "start": 78.773,
                      "end": 78.808
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "just joking!”,",
              "start": 78.889,
              "end": 79.969,
              "words": [
                {
                  "word": "just",
                  "start": 78.889,
                  "end": 79.086,
                  "characters": [
                    {
                      "character": "j",
                      "start": 78.889,
                      "end": 78.935
                    },
                    {
                      "character": "u",
                      "start": 78.935,
                      "end": 79.005
                    },
                    {
                      "character": "s",
                      "start": 79.005,
                      "end": 79.051
                    },
                    {
                      "character": "t",
                      "start": 79.051,
                      "end": 79.086
                    }
                  ]
                },
                {
                  "word": "joking!”,",
                  "start": 79.156,
                  "end": 79.969,
                  "characters": [
                    {
                      "character": "j",
                      "start": 79.156,
                      "end": 79.226
                    },
                    {
                      "character": "o",
                      "start": 79.226,
                      "end": 79.376
                    },
                    {
                      "character": "k",
                      "start": 79.376,
                      "end": 79.469
                    },
                    {
                      "character": "i",
                      "start": 79.469,
                      "end": 79.562
                    },
                    {
                      "character": "n",
                      "start": 79.562,
                      "end": 79.597
                    },
                    {
                      "character": "g",
                      "start": 79.597,
                      "end": 79.678
                    },
                    {
                      "character": "!",
                      "start": 79.678,
                      "end": 79.794
                    },
                    {
                      "character": "”",
                      "start": 79.794,
                      "end": 79.852
                    },
                    {
                      "character": ",",
                      "start": 79.852,
                      "end": 79.969
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "she said. “No,",
              "start": 80.178,
              "end": 81.965,
              "words": [
                {
                  "word": "she",
                  "start": 80.178,
                  "end": 80.317,
                  "characters": [
                    {
                      "character": "s",
                      "start": 80.178,
                      "end": 80.236
                    },
                    {
                      "character": "h",
                      "start": 80.236,
                      "end": 80.294
                    },
                    {
                      "character": "e",
                      "start": 80.294,
                      "end": 80.317
                    }
                  ]
                },
                {
                  "word": "said.",
                  "start": 80.387,
                  "end": 80.932,
                  "characters": [
                    {
                      "character": "s",
                      "start": 80.387,
                      "end": 80.456
                    },
                    {
                      "character": "a",
                      "start": 80.456,
                      "end": 80.549
                    },
                    {
                      "character": "i",
                      "start": 80.549,
                      "end": 80.607
                    },
                    {
                      "character": "d",
                      "start": 80.607,
                      "end": 80.758
                    },
                    {
                      "character": ".",
                      "start": 80.758,
                      "end": 80.932
                    }
                  ]
                },
                {
                  "word": "“No,",
                  "start": 81.629,
                  "end": 81.965,
                  "characters": [
                    {
                      "character": "“",
                      "start": 81.629,
                      "end": 81.78
                    },
                    {
                      "character": "N",
                      "start": 81.78,
                      "end": 81.849
                    },
                    {
                      "character": "o",
                      "start": 81.849,
                      "end": 81.931
                    },
                    {
                      "character": ",",
                      "start": 81.931,
                      "end": 81.965
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "you weren’t.",
              "start": 82,
              "end": 82.639,
              "words": [
                {
                  "word": "you",
                  "start": 82,
                  "end": 82.082,
                  "characters": [
                    {
                      "character": "y",
                      "start": 82,
                      "end": 82.024
                    },
                    {
                      "character": "o",
                      "start": 82.024,
                      "end": 82.047
                    },
                    {
                      "character": "u",
                      "start": 82.047,
                      "end": 82.082
                    }
                  ]
                },
                {
                  "word": "weren’t.",
                  "start": 82.128,
                  "end": 82.639,
                  "characters": [
                    {
                      "character": "w",
                      "start": 82.128,
                      "end": 82.163
                    },
                    {
                      "character": "e",
                      "start": 82.163,
                      "end": 82.233
                    },
                    {
                      "character": "r",
                      "start": 82.233,
                      "end": 82.279
                    },
                    {
                      "character": "e",
                      "start": 82.279,
                      "end": 82.314
                    },
                    {
                      "character": "n",
                      "start": 82.314,
                      "end": 82.36
                    },
                    {
                      "character": "’",
                      "start": 82.36,
                      "end": 82.395
                    },
                    {
                      "character": "t",
                      "start": 82.395,
                      "end": 82.511
                    },
                    {
                      "character": ".",
                      "start": 82.511,
                      "end": 82.639
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "That’s the",
              "start": 83.452,
              "end": 83.788,
              "words": [
                {
                  "word": "That’s",
                  "start": 83.452,
                  "end": 83.684,
                  "characters": [
                    {
                      "character": "T",
                      "start": 83.452,
                      "end": 83.498
                    },
                    {
                      "character": "h",
                      "start": 83.498,
                      "end": 83.556
                    },
                    {
                      "character": "a",
                      "start": 83.556,
                      "end": 83.579
                    },
                    {
                      "character": "t",
                      "start": 83.579,
                      "end": 83.614
                    },
                    {
                      "character": "’",
                      "start": 83.614,
                      "end": 83.649
                    },
                    {
                      "character": "s",
                      "start": 83.649,
                      "end": 83.684
                    }
                  ]
                },
                {
                  "word": "the",
                  "start": 83.719,
                  "end": 83.788,
                  "characters": [
                    {
                      "character": "t",
                      "start": 83.719,
                      "end": 83.742
                    },
                    {
                      "character": "h",
                      "start": 83.742,
                      "end": 83.765
                    },
                    {
                      "character": "e",
                      "start": 83.765,
                      "end": 83.788
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "second time and",
              "start": 83.846,
              "end": 84.566,
              "words": [
                {
                  "word": "second",
                  "start": 83.846,
                  "end": 84.125,
                  "characters": [
                    {
                      "character": "s",
                      "start": 83.846,
                      "end": 83.893
                    },
                    {
                      "character": "e",
                      "start": 83.893,
                      "end": 83.962
                    },
                    {
                      "character": "c",
                      "start": 83.962,
                      "end": 84.02
                    },
                    {
                      "character": "o",
                      "start": 84.02,
                      "end": 84.055
                    },
                    {
                      "character": "n",
                      "start": 84.055,
                      "end": 84.102
                    },
                    {
                      "character": "d",
                      "start": 84.102,
                      "end": 84.125
                    }
                  ]
                },
                {
                  "word": "time",
                  "start": 84.171,
                  "end": 84.438,
                  "characters": [
                    {
                      "character": "t",
                      "start": 84.171,
                      "end": 84.229
                    },
                    {
                      "character": "i",
                      "start": 84.229,
                      "end": 84.346
                    },
                    {
                      "character": "m",
                      "start": 84.346,
                      "end": 84.404
                    },
                    {
                      "character": "e",
                      "start": 84.404,
                      "end": 84.438
                    }
                  ]
                },
                {
                  "word": "and",
                  "start": 84.473,
                  "end": 84.566,
                  "characters": [
                    {
                      "character": "a",
                      "start": 84.473,
                      "end": 84.508
                    },
                    {
                      "character": "n",
                      "start": 84.508,
                      "end": 84.543
                    },
                    {
                      "character": "d",
                      "start": 84.543,
                      "end": 84.566
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "I don’t like",
              "start": 84.624,
              "end": 85.135,
              "words": [
                {
                  "word": "I",
                  "start": 84.624,
                  "end": 84.647,
                  "characters": [
                    {
                      "character": "I",
                      "start": 84.624,
                      "end": 84.647
                    }
                  ]
                },
                {
                  "word": "don’t",
                  "start": 84.705,
                  "end": 84.88,
                  "characters": [
                    {
                      "character": "d",
                      "start": 84.705,
                      "end": 84.74
                    },
                    {
                      "character": "o",
                      "start": 84.74,
                      "end": 84.775
                    },
                    {
                      "character": "n",
                      "start": 84.775,
                      "end": 84.81
                    },
                    {
                      "character": "’",
                      "start": 84.81,
                      "end": 84.845
                    },
                    {
                      "character": "t",
                      "start": 84.845,
                      "end": 84.88
                    }
                  ]
                },
                {
                  "word": "like",
                  "start": 84.926,
                  "end": 85.135,
                  "characters": [
                    {
                      "character": "l",
                      "start": 84.926,
                      "end": 84.961
                    },
                    {
                      "character": "i",
                      "start": 84.961,
                      "end": 85.031
                    },
                    {
                      "character": "k",
                      "start": 85.031,
                      "end": 85.089
                    },
                    {
                      "character": "e",
                      "start": 85.089,
                      "end": 85.135
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "it”, I told",
              "start": 85.181,
              "end": 85.936,
              "words": [
                {
                  "word": "it”,",
                  "start": 85.181,
                  "end": 85.425,
                  "characters": [
                    {
                      "character": "i",
                      "start": 85.181,
                      "end": 85.216
                    },
                    {
                      "character": "t",
                      "start": 85.216,
                      "end": 85.298
                    },
                    {
                      "character": "”",
                      "start": 85.298,
                      "end": 85.367
                    },
                    {
                      "character": ",",
                      "start": 85.367,
                      "end": 85.425
                    }
                  ]
                },
                {
                  "word": "I",
                  "start": 85.541,
                  "end": 85.588,
                  "characters": [
                    {
                      "character": "I",
                      "start": 85.541,
                      "end": 85.588
                    }
                  ]
                },
                {
                  "word": "told",
                  "start": 85.704,
                  "end": 85.936,
                  "characters": [
                    {
                      "character": "t",
                      "start": 85.704,
                      "end": 85.75
                    },
                    {
                      "character": "o",
                      "start": 85.75,
                      "end": 85.832
                    },
                    {
                      "character": "l",
                      "start": 85.832,
                      "end": 85.901
                    },
                    {
                      "character": "d",
                      "start": 85.901,
                      "end": 85.936
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "her. Now she",
              "start": 85.983,
              "end": 87.271,
              "words": [
                {
                  "word": "her.",
                  "start": 85.983,
                  "end": 86.296,
                  "characters": [
                    {
                      "character": "h",
                      "start": 85.983,
                      "end": 86.006
                    },
                    {
                      "character": "e",
                      "start": 86.006,
                      "end": 86.041
                    },
                    {
                      "character": "r",
                      "start": 86.041,
                      "end": 86.122
                    },
                    {
                      "character": ".",
                      "start": 86.122,
                      "end": 86.296
                    }
                  ]
                },
                {
                  "word": "Now",
                  "start": 86.9,
                  "end": 87.097,
                  "characters": [
                    {
                      "character": "N",
                      "start": 86.9,
                      "end": 86.981
                    },
                    {
                      "character": "o",
                      "start": 86.981,
                      "end": 87.062
                    },
                    {
                      "character": "w",
                      "start": 87.062,
                      "end": 87.097
                    }
                  ]
                },
                {
                  "word": "she",
                  "start": 87.167,
                  "end": 87.271,
                  "characters": [
                    {
                      "character": "s",
                      "start": 87.167,
                      "end": 87.202
                    },
                    {
                      "character": "h",
                      "start": 87.202,
                      "end": 87.248
                    },
                    {
                      "character": "e",
                      "start": 87.248,
                      "end": 87.271
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "got angry,",
              "start": 87.341,
              "end": 88.072,
              "words": [
                {
                  "word": "got",
                  "start": 87.341,
                  "end": 87.527,
                  "characters": [
                    {
                      "character": "g",
                      "start": 87.341,
                      "end": 87.387
                    },
                    {
                      "character": "o",
                      "start": 87.387,
                      "end": 87.469
                    },
                    {
                      "character": "t",
                      "start": 87.469,
                      "end": 87.527
                    }
                  ]
                },
                {
                  "word": "angry,",
                  "start": 87.585,
                  "end": 88.072,
                  "characters": [
                    {
                      "character": "a",
                      "start": 87.585,
                      "end": 87.631
                    },
                    {
                      "character": "n",
                      "start": 87.631,
                      "end": 87.712
                    },
                    {
                      "character": "g",
                      "start": 87.712,
                      "end": 87.77
                    },
                    {
                      "character": "r",
                      "start": 87.77,
                      "end": 87.84
                    },
                    {
                      "character": "y",
                      "start": 87.84,
                      "end": 87.956
                    },
                    {
                      "character": ",",
                      "start": 87.956,
                      "end": 88.072
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "raised her",
              "start": 88.246,
              "end": 88.688,
              "words": [
                {
                  "word": "raised",
                  "start": 88.246,
                  "end": 88.572,
                  "characters": [
                    {
                      "character": "r",
                      "start": 88.246,
                      "end": 88.316
                    },
                    {
                      "character": "a",
                      "start": 88.316,
                      "end": 88.386
                    },
                    {
                      "character": "i",
                      "start": 88.386,
                      "end": 88.444
                    },
                    {
                      "character": "s",
                      "start": 88.444,
                      "end": 88.49
                    },
                    {
                      "character": "e",
                      "start": 88.49,
                      "end": 88.548
                    },
                    {
                      "character": "d",
                      "start": 88.548,
                      "end": 88.572
                    }
                  ]
                },
                {
                  "word": "her",
                  "start": 88.606,
                  "end": 88.688,
                  "characters": [
                    {
                      "character": "h",
                      "start": 88.606,
                      "end": 88.641
                    },
                    {
                      "character": "e",
                      "start": 88.641,
                      "end": 88.664
                    },
                    {
                      "character": "r",
                      "start": 88.664,
                      "end": 88.688
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "voice with me,",
              "start": 88.734,
              "end": 89.535,
              "words": [
                {
                  "word": "voice",
                  "start": 88.734,
                  "end": 88.99,
                  "characters": [
                    {
                      "character": "v",
                      "start": 88.734,
                      "end": 88.781
                    },
                    {
                      "character": "o",
                      "start": 88.781,
                      "end": 88.85
                    },
                    {
                      "character": "i",
                      "start": 88.85,
                      "end": 88.908
                    },
                    {
                      "character": "c",
                      "start": 88.908,
                      "end": 88.955
                    },
                    {
                      "character": "e",
                      "start": 88.955,
                      "end": 88.99
                    }
                  ]
                },
                {
                  "word": "with",
                  "start": 89.013,
                  "end": 89.152,
                  "characters": [
                    {
                      "character": "w",
                      "start": 89.013,
                      "end": 89.048
                    },
                    {
                      "character": "i",
                      "start": 89.048,
                      "end": 89.082
                    },
                    {
                      "character": "t",
                      "start": 89.082,
                      "end": 89.117
                    },
                    {
                      "character": "h",
                      "start": 89.117,
                      "end": 89.152
                    }
                  ]
                },
                {
                  "word": "me,",
                  "start": 89.199,
                  "end": 89.535,
                  "characters": [
                    {
                      "character": "m",
                      "start": 89.199,
                      "end": 89.245
                    },
                    {
                      "character": "e",
                      "start": 89.245,
                      "end": 89.419
                    },
                    {
                      "character": ",",
                      "start": 89.419,
                      "end": 89.535
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "“Even so, this",
              "start": 89.651,
              "end": 90.731,
              "words": [
                {
                  "word": "“Even",
                  "start": 89.651,
                  "end": 90.081,
                  "characters": [
                    {
                      "character": "“",
                      "start": 89.651,
                      "end": 89.802
                    },
                    {
                      "character": "E",
                      "start": 89.802,
                      "end": 89.918
                    },
                    {
                      "character": "v",
                      "start": 89.918,
                      "end": 89.976
                    },
                    {
                      "character": "e",
                      "start": 89.976,
                      "end": 90.046
                    },
                    {
                      "character": "n",
                      "start": 90.046,
                      "end": 90.081
                    }
                  ]
                },
                {
                  "word": "so,",
                  "start": 90.162,
                  "end": 90.51,
                  "characters": [
                    {
                      "character": "s",
                      "start": 90.162,
                      "end": 90.243
                    },
                    {
                      "character": "o",
                      "start": 90.243,
                      "end": 90.452
                    },
                    {
                      "character": ",",
                      "start": 90.452,
                      "end": 90.51
                    }
                  ]
                },
                {
                  "word": "this",
                  "start": 90.557,
                  "end": 90.731,
                  "characters": [
                    {
                      "character": "t",
                      "start": 90.557,
                      "end": 90.58
                    },
                    {
                      "character": "h",
                      "start": 90.58,
                      "end": 90.638
                    },
                    {
                      "character": "i",
                      "start": 90.638,
                      "end": 90.685
                    },
                    {
                      "character": "s",
                      "start": 90.685,
                      "end": 90.731
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "is an expensive",
              "start": 90.789,
              "end": 91.532,
              "words": [
                {
                  "word": "is",
                  "start": 90.789,
                  "end": 90.882,
                  "characters": [
                    {
                      "character": "i",
                      "start": 90.789,
                      "end": 90.836
                    },
                    {
                      "character": "s",
                      "start": 90.836,
                      "end": 90.882
                    }
                  ]
                },
                {
                  "word": "an",
                  "start": 90.928,
                  "end": 90.986,
                  "characters": [
                    {
                      "character": "a",
                      "start": 90.928,
                      "end": 90.952
                    },
                    {
                      "character": "n",
                      "start": 90.952,
                      "end": 90.986
                    }
                  ]
                },
                {
                  "word": "expensive",
                  "start": 91.033,
                  "end": 91.532,
                  "characters": [
                    {
                      "character": "e",
                      "start": 91.033,
                      "end": 91.079
                    },
                    {
                      "character": "x",
                      "start": 91.079,
                      "end": 91.149
                    },
                    {
                      "character": "p",
                      "start": 91.149,
                      "end": 91.23
                    },
                    {
                      "character": "e",
                      "start": 91.23,
                      "end": 91.288
                    },
                    {
                      "character": "n",
                      "start": 91.288,
                      "end": 91.335
                    },
                    {
                      "character": "s",
                      "start": 91.335,
                      "end": 91.404
                    },
                    {
                      "character": "i",
                      "start": 91.404,
                      "end": 91.462
                    },
                    {
                      "character": "v",
                      "start": 91.462,
                      "end": 91.497
                    },
                    {
                      "character": "e",
                      "start": 91.497,
                      "end": 91.532
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "toy, what wrong",
              "start": 91.567,
              "end": 92.705,
              "words": [
                {
                  "word": "toy,",
                  "start": 91.567,
                  "end": 92.089,
                  "characters": [
                    {
                      "character": "t",
                      "start": 91.567,
                      "end": 91.613
                    },
                    {
                      "character": "o",
                      "start": 91.613,
                      "end": 91.788
                    },
                    {
                      "character": "y",
                      "start": 91.788,
                      "end": 91.938
                    },
                    {
                      "character": ",",
                      "start": 91.938,
                      "end": 92.089
                    }
                  ]
                },
                {
                  "word": "what",
                  "start": 92.264,
                  "end": 92.449,
                  "characters": [
                    {
                      "character": "w",
                      "start": 92.264,
                      "end": 92.322
                    },
                    {
                      "character": "h",
                      "start": 92.322,
                      "end": 92.38
                    },
                    {
                      "character": "a",
                      "start": 92.38,
                      "end": 92.414
                    },
                    {
                      "character": "t",
                      "start": 92.414,
                      "end": 92.449
                    }
                  ]
                },
                {
                  "word": "wrong",
                  "start": 92.484,
                  "end": 92.705,
                  "characters": [
                    {
                      "character": "w",
                      "start": 92.484,
                      "end": 92.519
                    },
                    {
                      "character": "r",
                      "start": 92.519,
                      "end": 92.577
                    },
                    {
                      "character": "o",
                      "start": 92.577,
                      "end": 92.623
                    },
                    {
                      "character": "n",
                      "start": 92.623,
                      "end": 92.681
                    },
                    {
                      "character": "g",
                      "start": 92.681,
                      "end": 92.705
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "with begging a",
              "start": 92.74,
              "end": 93.308,
              "words": [
                {
                  "word": "with",
                  "start": 92.74,
                  "end": 92.867,
                  "characters": [
                    {
                      "character": "w",
                      "start": 92.74,
                      "end": 92.774
                    },
                    {
                      "character": "i",
                      "start": 92.774,
                      "end": 92.809
                    },
                    {
                      "character": "t",
                      "start": 92.809,
                      "end": 92.832
                    },
                    {
                      "character": "h",
                      "start": 92.832,
                      "end": 92.867
                    }
                  ]
                },
                {
                  "word": "begging",
                  "start": 92.925,
                  "end": 93.227,
                  "characters": [
                    {
                      "character": "b",
                      "start": 92.925,
                      "end": 92.96
                    },
                    {
                      "character": "e",
                      "start": 92.96,
                      "end": 93.018
                    },
                    {
                      "character": "g",
                      "start": 93.018,
                      "end": 93.076
                    },
                    {
                      "character": "g",
                      "start": 93.076,
                      "end": 93.123
                    },
                    {
                      "character": "i",
                      "start": 93.123,
                      "end": 93.181
                    },
                    {
                      "character": "n",
                      "start": 93.181,
                      "end": 93.204
                    },
                    {
                      "character": "g",
                      "start": 93.204,
                      "end": 93.227
                    }
                  ]
                },
                {
                  "word": "a",
                  "start": 93.285,
                  "end": 93.308,
                  "characters": [
                    {
                      "character": "a",
                      "start": 93.285,
                      "end": 93.308
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "little?”. “You",
              "start": 93.367,
              "end": 94.887,
              "words": [
                {
                  "word": "little?”.",
                  "start": 93.367,
                  "end": 93.831,
                  "characters": [
                    {
                      "character": "l",
                      "start": 93.367,
                      "end": 93.401
                    },
                    {
                      "character": "i",
                      "start": 93.401,
                      "end": 93.459
                    },
                    {
                      "character": "t",
                      "start": 93.459,
                      "end": 93.494
                    },
                    {
                      "character": "t",
                      "start": 93.494,
                      "end": 93.541
                    },
                    {
                      "character": "l",
                      "start": 93.541,
                      "end": 93.587
                    },
                    {
                      "character": "e",
                      "start": 93.587,
                      "end": 93.715
                    },
                    {
                      "character": "?",
                      "start": 93.715,
                      "end": 93.738
                    },
                    {
                      "character": "”",
                      "start": 93.738,
                      "end": 93.761
                    },
                    {
                      "character": ".",
                      "start": 93.761,
                      "end": 93.831
                    }
                  ]
                },
                {
                  "word": "“You",
                  "start": 94.644,
                  "end": 94.887,
                  "characters": [
                    {
                      "character": "“",
                      "start": 94.644,
                      "end": 94.76
                    },
                    {
                      "character": "Y",
                      "start": 94.76,
                      "end": 94.818
                    },
                    {
                      "character": "o",
                      "start": 94.818,
                      "end": 94.853
                    },
                    {
                      "character": "u",
                      "start": 94.853,
                      "end": 94.887
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "take the gift",
              "start": 94.969,
              "end": 95.549,
              "words": [
                {
                  "word": "take",
                  "start": 94.969,
                  "end": 95.166,
                  "characters": [
                    {
                      "character": "t",
                      "start": 94.969,
                      "end": 95.015
                    },
                    {
                      "character": "a",
                      "start": 95.015,
                      "end": 95.073
                    },
                    {
                      "character": "k",
                      "start": 95.073,
                      "end": 95.12
                    },
                    {
                      "character": "e",
                      "start": 95.12,
                      "end": 95.166
                    }
                  ]
                },
                {
                  "word": "the",
                  "start": 95.201,
                  "end": 95.271,
                  "characters": [
                    {
                      "character": "t",
                      "start": 95.201,
                      "end": 95.224
                    },
                    {
                      "character": "h",
                      "start": 95.224,
                      "end": 95.247
                    },
                    {
                      "character": "e",
                      "start": 95.247,
                      "end": 95.271
                    }
                  ]
                },
                {
                  "word": "gift",
                  "start": 95.329,
                  "end": 95.549,
                  "characters": [
                    {
                      "character": "g",
                      "start": 95.329,
                      "end": 95.375
                    },
                    {
                      "character": "i",
                      "start": 95.375,
                      "end": 95.445
                    },
                    {
                      "character": "f",
                      "start": 95.445,
                      "end": 95.503
                    },
                    {
                      "character": "t",
                      "start": 95.503,
                      "end": 95.549
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "back and please",
              "start": 95.619,
              "end": 96.385,
              "words": [
                {
                  "word": "back",
                  "start": 95.619,
                  "end": 95.863,
                  "characters": [
                    {
                      "character": "b",
                      "start": 95.619,
                      "end": 95.677
                    },
                    {
                      "character": "a",
                      "start": 95.677,
                      "end": 95.77
                    },
                    {
                      "character": "c",
                      "start": 95.77,
                      "end": 95.816
                    },
                    {
                      "character": "k",
                      "start": 95.816,
                      "end": 95.863
                    }
                  ]
                },
                {
                  "word": "and",
                  "start": 95.921,
                  "end": 96.002,
                  "characters": [
                    {
                      "character": "a",
                      "start": 95.921,
                      "end": 95.944
                    },
                    {
                      "character": "n",
                      "start": 95.944,
                      "end": 95.967
                    },
                    {
                      "character": "d",
                      "start": 95.967,
                      "end": 96.002
                    }
                  ]
                },
                {
                  "word": "please",
                  "start": 96.072,
                  "end": 96.385,
                  "characters": [
                    {
                      "character": "p",
                      "start": 96.072,
                      "end": 96.13
                    },
                    {
                      "character": "l",
                      "start": 96.13,
                      "end": 96.188
                    },
                    {
                      "character": "e",
                      "start": 96.188,
                      "end": 96.246
                    },
                    {
                      "character": "a",
                      "start": 96.246,
                      "end": 96.292
                    },
                    {
                      "character": "s",
                      "start": 96.292,
                      "end": 96.35
                    },
                    {
                      "character": "e",
                      "start": 96.35,
                      "end": 96.385
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "leave”, I told",
              "start": 96.443,
              "end": 97.546,
              "words": [
                {
                  "word": "leave”,",
                  "start": 96.443,
                  "end": 97.035,
                  "characters": [
                    {
                      "character": "l",
                      "start": 96.443,
                      "end": 96.501
                    },
                    {
                      "character": "e",
                      "start": 96.501,
                      "end": 96.571
                    },
                    {
                      "character": "a",
                      "start": 96.571,
                      "end": 96.641
                    },
                    {
                      "character": "v",
                      "start": 96.641,
                      "end": 96.687
                    },
                    {
                      "character": "e",
                      "start": 96.687,
                      "end": 96.861
                    },
                    {
                      "character": "”",
                      "start": 96.861,
                      "end": 96.884
                    },
                    {
                      "character": ",",
                      "start": 96.884,
                      "end": 97.035
                    }
                  ]
                },
                {
                  "word": "I",
                  "start": 97.151,
                  "end": 97.198,
                  "characters": [
                    {
                      "character": "I",
                      "start": 97.151,
                      "end": 97.198
                    }
                  ]
                },
                {
                  "word": "told",
                  "start": 97.314,
                  "end": 97.546,
                  "characters": [
                    {
                      "character": "t",
                      "start": 97.314,
                      "end": 97.36
                    },
                    {
                      "character": "o",
                      "start": 97.36,
                      "end": 97.453
                    },
                    {
                      "character": "l",
                      "start": 97.453,
                      "end": 97.511
                    },
                    {
                      "character": "d",
                      "start": 97.511,
                      "end": 97.546
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "her, while",
              "start": 97.593,
              "end": 98.312,
              "words": [
                {
                  "word": "her,",
                  "start": 97.593,
                  "end": 97.836,
                  "characters": [
                    {
                      "character": "h",
                      "start": 97.593,
                      "end": 97.616
                    },
                    {
                      "character": "e",
                      "start": 97.616,
                      "end": 97.639
                    },
                    {
                      "character": "r",
                      "start": 97.639,
                      "end": 97.72
                    },
                    {
                      "character": ",",
                      "start": 97.72,
                      "end": 97.836
                    }
                  ]
                },
                {
                  "word": "while",
                  "start": 98.08,
                  "end": 98.312,
                  "characters": [
                    {
                      "character": "w",
                      "start": 98.08,
                      "end": 98.138
                    },
                    {
                      "character": "h",
                      "start": 98.138,
                      "end": 98.196
                    },
                    {
                      "character": "i",
                      "start": 98.196,
                      "end": 98.243
                    },
                    {
                      "character": "l",
                      "start": 98.243,
                      "end": 98.278
                    },
                    {
                      "character": "e",
                      "start": 98.278,
                      "end": 98.312
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "getting up and",
              "start": 98.359,
              "end": 98.881,
              "words": [
                {
                  "word": "getting",
                  "start": 98.359,
                  "end": 98.591,
                  "characters": [
                    {
                      "character": "g",
                      "start": 98.359,
                      "end": 98.394
                    },
                    {
                      "character": "e",
                      "start": 98.394,
                      "end": 98.44
                    },
                    {
                      "character": "t",
                      "start": 98.44,
                      "end": 98.475
                    },
                    {
                      "character": "t",
                      "start": 98.475,
                      "end": 98.51
                    },
                    {
                      "character": "i",
                      "start": 98.51,
                      "end": 98.545
                    },
                    {
                      "character": "n",
                      "start": 98.545,
                      "end": 98.568
                    },
                    {
                      "character": "g",
                      "start": 98.568,
                      "end": 98.591
                    }
                  ]
                },
                {
                  "word": "up",
                  "start": 98.649,
                  "end": 98.754,
                  "characters": [
                    {
                      "character": "u",
                      "start": 98.649,
                      "end": 98.707
                    },
                    {
                      "character": "p",
                      "start": 98.707,
                      "end": 98.754
                    }
                  ]
                },
                {
                  "word": "and",
                  "start": 98.8,
                  "end": 98.881,
                  "characters": [
                    {
                      "character": "a",
                      "start": 98.8,
                      "end": 98.823
                    },
                    {
                      "character": "n",
                      "start": 98.823,
                      "end": 98.846
                    },
                    {
                      "character": "d",
                      "start": 98.846,
                      "end": 98.881
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "holding the",
              "start": 98.939,
              "end": 99.334,
              "words": [
                {
                  "word": "holding",
                  "start": 98.939,
                  "end": 99.218,
                  "characters": [
                    {
                      "character": "h",
                      "start": 98.939,
                      "end": 98.974
                    },
                    {
                      "character": "o",
                      "start": 98.974,
                      "end": 99.032
                    },
                    {
                      "character": "l",
                      "start": 99.032,
                      "end": 99.09
                    },
                    {
                      "character": "d",
                      "start": 99.09,
                      "end": 99.125
                    },
                    {
                      "character": "i",
                      "start": 99.125,
                      "end": 99.172
                    },
                    {
                      "character": "n",
                      "start": 99.172,
                      "end": 99.195
                    },
                    {
                      "character": "g",
                      "start": 99.195,
                      "end": 99.218
                    }
                  ]
                },
                {
                  "word": "the",
                  "start": 99.264,
                  "end": 99.334,
                  "characters": [
                    {
                      "character": "t",
                      "start": 99.264,
                      "end": 99.288
                    },
                    {
                      "character": "h",
                      "start": 99.288,
                      "end": 99.311
                    },
                    {
                      "character": "e",
                      "start": 99.311,
                      "end": 99.334
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "door open. She",
              "start": 99.369,
              "end": 100.925,
              "words": [
                {
                  "word": "door",
                  "start": 99.369,
                  "end": 99.566,
                  "characters": [
                    {
                      "character": "d",
                      "start": 99.369,
                      "end": 99.404
                    },
                    {
                      "character": "o",
                      "start": 99.404,
                      "end": 99.462
                    },
                    {
                      "character": "o",
                      "start": 99.462,
                      "end": 99.531
                    },
                    {
                      "character": "r",
                      "start": 99.531,
                      "end": 99.566
                    }
                  ]
                },
                {
                  "word": "open.",
                  "start": 99.636,
                  "end": 100.077,
                  "characters": [
                    {
                      "character": "o",
                      "start": 99.636,
                      "end": 99.706
                    },
                    {
                      "character": "p",
                      "start": 99.706,
                      "end": 99.775
                    },
                    {
                      "character": "e",
                      "start": 99.775,
                      "end": 99.845
                    },
                    {
                      "character": "n",
                      "start": 99.845,
                      "end": 99.926
                    },
                    {
                      "character": ".",
                      "start": 99.926,
                      "end": 100.077
                    }
                  ]
                },
                {
                  "word": "She",
                  "start": 100.774,
                  "end": 100.925,
                  "characters": [
                    {
                      "character": "S",
                      "start": 100.774,
                      "end": 100.832
                    },
                    {
                      "character": "h",
                      "start": 100.832,
                      "end": 100.89
                    },
                    {
                      "character": "e",
                      "start": 100.89,
                      "end": 100.925
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "left and never",
              "start": 101.018,
              "end": 101.993,
              "words": [
                {
                  "word": "left",
                  "start": 101.018,
                  "end": 101.377,
                  "characters": [
                    {
                      "character": "l",
                      "start": 101.018,
                      "end": 101.076
                    },
                    {
                      "character": "e",
                      "start": 101.076,
                      "end": 101.192
                    },
                    {
                      "character": "f",
                      "start": 101.192,
                      "end": 101.261
                    },
                    {
                      "character": "t",
                      "start": 101.261,
                      "end": 101.377
                    }
                  ]
                },
                {
                  "word": "and",
                  "start": 101.528,
                  "end": 101.726,
                  "characters": [
                    {
                      "character": "a",
                      "start": 101.528,
                      "end": 101.644
                    },
                    {
                      "character": "n",
                      "start": 101.644,
                      "end": 101.691
                    },
                    {
                      "character": "d",
                      "start": 101.691,
                      "end": 101.726
                    }
                  ]
                },
                {
                  "word": "never",
                  "start": 101.795,
                  "end": 101.993,
                  "characters": [
                    {
                      "character": "n",
                      "start": 101.795,
                      "end": 101.83
                    },
                    {
                      "character": "e",
                      "start": 101.83,
                      "end": 101.888
                    },
                    {
                      "character": "v",
                      "start": 101.888,
                      "end": 101.923
                    },
                    {
                      "character": "e",
                      "start": 101.923,
                      "end": 101.97
                    },
                    {
                      "character": "r",
                      "start": 101.97,
                      "end": 101.993
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "came back.  The",
              "start": 102.051,
              "end": 104.175,
              "words": [
                {
                  "word": "came",
                  "start": 102.051,
                  "end": 102.248,
                  "characters": [
                    {
                      "character": "c",
                      "start": 102.051,
                      "end": 102.086
                    },
                    {
                      "character": "a",
                      "start": 102.086,
                      "end": 102.155
                    },
                    {
                      "character": "m",
                      "start": 102.155,
                      "end": 102.213
                    },
                    {
                      "character": "e",
                      "start": 102.213,
                      "end": 102.248
                    }
                  ]
                },
                {
                  "word": "back.",
                  "start": 102.295,
                  "end": 102.747,
                  "characters": [
                    {
                      "character": "b",
                      "start": 102.295,
                      "end": 102.341
                    },
                    {
                      "character": "a",
                      "start": 102.341,
                      "end": 102.434
                    },
                    {
                      "character": "c",
                      "start": 102.434,
                      "end": 102.48
                    },
                    {
                      "character": "k",
                      "start": 102.48,
                      "end": 102.573
                    },
                    {
                      "character": ".",
                      "start": 102.573,
                      "end": 102.747
                    }
                  ]
                },
                {
                  "word": "",
                  "start": 102.747,
                  "end": 104.048,
                  "characters": []
                },
                {
                  "word": "The",
                  "start": 104.048,
                  "end": 104.175,
                  "characters": [
                    {
                      "character": "T",
                      "start": 104.048,
                      "end": 104.106
                    },
                    {
                      "character": "h",
                      "start": 104.106,
                      "end": 104.152
                    },
                    {
                      "character": "e",
                      "start": 104.152,
                      "end": 104.175
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "next day, I",
              "start": 104.233,
              "end": 105.116,
              "words": [
                {
                  "word": "next",
                  "start": 104.233,
                  "end": 104.454,
                  "characters": [
                    {
                      "character": "n",
                      "start": 104.233,
                      "end": 104.28
                    },
                    {
                      "character": "e",
                      "start": 104.28,
                      "end": 104.35
                    },
                    {
                      "character": "x",
                      "start": 104.35,
                      "end": 104.408
                    },
                    {
                      "character": "t",
                      "start": 104.408,
                      "end": 104.454
                    }
                  ]
                },
                {
                  "word": "day,",
                  "start": 104.512,
                  "end": 104.977,
                  "characters": [
                    {
                      "character": "d",
                      "start": 104.512,
                      "end": 104.559
                    },
                    {
                      "character": "a",
                      "start": 104.559,
                      "end": 104.709
                    },
                    {
                      "character": "y",
                      "start": 104.709,
                      "end": 104.86
                    },
                    {
                      "character": ",",
                      "start": 104.86,
                      "end": 104.977
                    }
                  ]
                },
                {
                  "word": "I",
                  "start": 105.069,
                  "end": 105.116,
                  "characters": [
                    {
                      "character": "I",
                      "start": 105.069,
                      "end": 105.116
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "took my",
              "start": 105.209,
              "end": 105.534,
              "words": [
                {
                  "word": "took",
                  "start": 105.209,
                  "end": 105.383,
                  "characters": [
                    {
                      "character": "t",
                      "start": 105.209,
                      "end": 105.232
                    },
                    {
                      "character": "o",
                      "start": 105.232,
                      "end": 105.29
                    },
                    {
                      "character": "o",
                      "start": 105.29,
                      "end": 105.336
                    },
                    {
                      "character": "k",
                      "start": 105.336,
                      "end": 105.383
                    }
                  ]
                },
                {
                  "word": "my",
                  "start": 105.441,
                  "end": 105.534,
                  "characters": [
                    {
                      "character": "m",
                      "start": 105.441,
                      "end": 105.487
                    },
                    {
                      "character": "y",
                      "start": 105.487,
                      "end": 105.534
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "daughter to the",
              "start": 105.603,
              "end": 106.172,
              "words": [
                {
                  "word": "daughter",
                  "start": 105.603,
                  "end": 105.894,
                  "characters": [
                    {
                      "character": "d",
                      "start": 105.603,
                      "end": 105.65
                    },
                    {
                      "character": "a",
                      "start": 105.65,
                      "end": 105.708
                    },
                    {
                      "character": "u",
                      "start": 105.708,
                      "end": 105.743
                    },
                    {
                      "character": "g",
                      "start": 105.743,
                      "end": 105.778
                    },
                    {
                      "character": "h",
                      "start": 105.778,
                      "end": 105.801
                    },
                    {
                      "character": "t",
                      "start": 105.801,
                      "end": 105.836
                    },
                    {
                      "character": "e",
                      "start": 105.836,
                      "end": 105.87
                    },
                    {
                      "character": "r",
                      "start": 105.87,
                      "end": 105.894
                    }
                  ]
                },
                {
                  "word": "to",
                  "start": 105.952,
                  "end": 106.033,
                  "characters": [
                    {
                      "character": "t",
                      "start": 105.952,
                      "end": 105.987
                    },
                    {
                      "character": "o",
                      "start": 105.987,
                      "end": 106.033
                    }
                  ]
                },
                {
                  "word": "the",
                  "start": 106.103,
                  "end": 106.172,
                  "characters": [
                    {
                      "character": "t",
                      "start": 106.103,
                      "end": 106.126
                    },
                    {
                      "character": "h",
                      "start": 106.126,
                      "end": 106.149
                    },
                    {
                      "character": "e",
                      "start": 106.149,
                      "end": 106.172
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "toy store to",
              "start": 106.219,
              "end": 106.846,
              "words": [
                {
                  "word": "toy",
                  "start": 106.219,
                  "end": 106.439,
                  "characters": [
                    {
                      "character": "t",
                      "start": 106.219,
                      "end": 106.265
                    },
                    {
                      "character": "o",
                      "start": 106.265,
                      "end": 106.381
                    },
                    {
                      "character": "y",
                      "start": 106.381,
                      "end": 106.439
                    }
                  ]
                },
                {
                  "word": "store",
                  "start": 106.497,
                  "end": 106.764,
                  "characters": [
                    {
                      "character": "s",
                      "start": 106.497,
                      "end": 106.532
                    },
                    {
                      "character": "t",
                      "start": 106.532,
                      "end": 106.59
                    },
                    {
                      "character": "o",
                      "start": 106.59,
                      "end": 106.672
                    },
                    {
                      "character": "r",
                      "start": 106.672,
                      "end": 106.73
                    },
                    {
                      "character": "e",
                      "start": 106.73,
                      "end": 106.764
                    }
                  ]
                },
                {
                  "word": "to",
                  "start": 106.799,
                  "end": 106.846,
                  "characters": [
                    {
                      "character": "t",
                      "start": 106.799,
                      "end": 106.822
                    },
                    {
                      "character": "o",
                      "start": 106.822,
                      "end": 106.846
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "get that Lego",
              "start": 106.904,
              "end": 107.624,
              "words": [
                {
                  "word": "get",
                  "start": 106.904,
                  "end": 107.055,
                  "characters": [
                    {
                      "character": "g",
                      "start": 106.904,
                      "end": 106.95
                    },
                    {
                      "character": "e",
                      "start": 106.95,
                      "end": 107.008
                    },
                    {
                      "character": "t",
                      "start": 107.008,
                      "end": 107.055
                    }
                  ]
                },
                {
                  "word": "that",
                  "start": 107.09,
                  "end": 107.24,
                  "characters": [
                    {
                      "character": "t",
                      "start": 107.09,
                      "end": 107.113
                    },
                    {
                      "character": "h",
                      "start": 107.113,
                      "end": 107.159
                    },
                    {
                      "character": "a",
                      "start": 107.159,
                      "end": 107.206
                    },
                    {
                      "character": "t",
                      "start": 107.206,
                      "end": 107.24
                    }
                  ]
                },
                {
                  "word": "Lego",
                  "start": 107.31,
                  "end": 107.624,
                  "characters": [
                    {
                      "character": "L",
                      "start": 107.31,
                      "end": 107.368
                    },
                    {
                      "character": "e",
                      "start": 107.368,
                      "end": 107.449
                    },
                    {
                      "character": "g",
                      "start": 107.449,
                      "end": 107.531
                    },
                    {
                      "character": "o",
                      "start": 107.531,
                      "end": 107.624
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "set. My friend",
              "start": 107.705,
              "end": 108.936,
              "words": [
                {
                  "word": "set.",
                  "start": 107.705,
                  "end": 108.169,
                  "characters": [
                    {
                      "character": "s",
                      "start": 107.705,
                      "end": 107.751
                    },
                    {
                      "character": "e",
                      "start": 107.751,
                      "end": 107.902
                    },
                    {
                      "character": "t",
                      "start": 107.902,
                      "end": 108.018
                    },
                    {
                      "character": ".",
                      "start": 108.018,
                      "end": 108.169
                    }
                  ]
                },
                {
                  "word": "My",
                  "start": 108.552,
                  "end": 108.68,
                  "characters": [
                    {
                      "character": "M",
                      "start": 108.552,
                      "end": 108.622
                    },
                    {
                      "character": "y",
                      "start": 108.622,
                      "end": 108.68
                    }
                  ]
                },
                {
                  "word": "friend",
                  "start": 108.738,
                  "end": 108.936,
                  "characters": [
                    {
                      "character": "f",
                      "start": 108.738,
                      "end": 108.773
                    },
                    {
                      "character": "r",
                      "start": 108.773,
                      "end": 108.819
                    },
                    {
                      "character": "i",
                      "start": 108.819,
                      "end": 108.854
                    },
                    {
                      "character": "e",
                      "start": 108.854,
                      "end": 108.877
                    },
                    {
                      "character": "n",
                      "start": 108.877,
                      "end": 108.912
                    },
                    {
                      "character": "d",
                      "start": 108.912,
                      "end": 108.936
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "was right. It",
              "start": 108.982,
              "end": 110.073,
              "words": [
                {
                  "word": "was",
                  "start": 108.982,
                  "end": 109.086,
                  "characters": [
                    {
                      "character": "w",
                      "start": 108.982,
                      "end": 109.017
                    },
                    {
                      "character": "a",
                      "start": 109.017,
                      "end": 109.052
                    },
                    {
                      "character": "s",
                      "start": 109.052,
                      "end": 109.086
                    }
                  ]
                },
                {
                  "word": "right.",
                  "start": 109.156,
                  "end": 109.62,
                  "characters": [
                    {
                      "character": "r",
                      "start": 109.156,
                      "end": 109.225
                    },
                    {
                      "character": "i",
                      "start": 109.225,
                      "end": 109.295
                    },
                    {
                      "character": "g",
                      "start": 109.295,
                      "end": 109.341
                    },
                    {
                      "character": "h",
                      "start": 109.341,
                      "end": 109.376
                    },
                    {
                      "character": "t",
                      "start": 109.376,
                      "end": 109.469
                    },
                    {
                      "character": ".",
                      "start": 109.469,
                      "end": 109.62
                    }
                  ]
                },
                {
                  "word": "It",
                  "start": 109.945,
                  "end": 110.073,
                  "characters": [
                    {
                      "character": "I",
                      "start": 109.945,
                      "end": 110.015
                    },
                    {
                      "character": "t",
                      "start": 110.015,
                      "end": 110.073
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "was a damn",
              "start": 110.108,
              "end": 110.63,
              "words": [
                {
                  "word": "was",
                  "start": 110.108,
                  "end": 110.201,
                  "characters": [
                    {
                      "character": "w",
                      "start": 110.108,
                      "end": 110.131
                    },
                    {
                      "character": "a",
                      "start": 110.131,
                      "end": 110.166
                    },
                    {
                      "character": "s",
                      "start": 110.166,
                      "end": 110.201
                    }
                  ]
                },
                {
                  "word": "a",
                  "start": 110.247,
                  "end": 110.27,
                  "characters": [
                    {
                      "character": "a",
                      "start": 110.247,
                      "end": 110.27
                    }
                  ]
                },
                {
                  "word": "damn",
                  "start": 110.34,
                  "end": 110.63,
                  "characters": [
                    {
                      "character": "d",
                      "start": 110.34,
                      "end": 110.386
                    },
                    {
                      "character": "a",
                      "start": 110.386,
                      "end": 110.537
                    },
                    {
                      "character": "m",
                      "start": 110.537,
                      "end": 110.584
                    },
                    {
                      "character": "n",
                      "start": 110.584,
                      "end": 110.63
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "expensive toy,",
              "start": 110.665,
              "end": 111.605,
              "words": [
                {
                  "word": "expensive",
                  "start": 110.665,
                  "end": 111.211,
                  "characters": [
                    {
                      "character": "e",
                      "start": 110.665,
                      "end": 110.711
                    },
                    {
                      "character": "x",
                      "start": 110.711,
                      "end": 110.793
                    },
                    {
                      "character": "p",
                      "start": 110.793,
                      "end": 110.874
                    },
                    {
                      "character": "e",
                      "start": 110.874,
                      "end": 110.944
                    },
                    {
                      "character": "n",
                      "start": 110.944,
                      "end": 110.99
                    },
                    {
                      "character": "s",
                      "start": 110.99,
                      "end": 111.06
                    },
                    {
                      "character": "i",
                      "start": 111.06,
                      "end": 111.129
                    },
                    {
                      "character": "v",
                      "start": 111.129,
                      "end": 111.176
                    },
                    {
                      "character": "e",
                      "start": 111.176,
                      "end": 111.211
                    }
                  ]
                },
                {
                  "word": "toy,",
                  "start": 111.245,
                  "end": 111.605,
                  "characters": [
                    {
                      "character": "t",
                      "start": 111.245,
                      "end": 111.304
                    },
                    {
                      "character": "o",
                      "start": 111.304,
                      "end": 111.512
                    },
                    {
                      "character": "y",
                      "start": 111.512,
                      "end": 111.582
                    },
                    {
                      "character": ",",
                      "start": 111.582,
                      "end": 111.605
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "it cost me a",
              "start": 111.629,
              "end": 112.197,
              "words": [
                {
                  "word": "it",
                  "start": 111.629,
                  "end": 111.687,
                  "characters": [
                    {
                      "character": "i",
                      "start": 111.629,
                      "end": 111.663
                    },
                    {
                      "character": "t",
                      "start": 111.663,
                      "end": 111.687
                    }
                  ]
                },
                {
                  "word": "cost",
                  "start": 111.733,
                  "end": 111.988,
                  "characters": [
                    {
                      "character": "c",
                      "start": 111.733,
                      "end": 111.78
                    },
                    {
                      "character": "o",
                      "start": 111.78,
                      "end": 111.896
                    },
                    {
                      "character": "s",
                      "start": 111.896,
                      "end": 111.954
                    },
                    {
                      "character": "t",
                      "start": 111.954,
                      "end": 111.988
                    }
                  ]
                },
                {
                  "word": "me",
                  "start": 112.035,
                  "end": 112.116,
                  "characters": [
                    {
                      "character": "m",
                      "start": 112.035,
                      "end": 112.07
                    },
                    {
                      "character": "e",
                      "start": 112.07,
                      "end": 112.116
                    }
                  ]
                },
                {
                  "word": "a",
                  "start": 112.163,
                  "end": 112.197,
                  "characters": [
                    {
                      "character": "a",
                      "start": 112.163,
                      "end": 112.197
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "big chunk of my",
              "start": 112.279,
              "end": 113.01,
              "words": [
                {
                  "word": "big",
                  "start": 112.279,
                  "end": 112.488,
                  "characters": [
                    {
                      "character": "b",
                      "start": 112.279,
                      "end": 112.337
                    },
                    {
                      "character": "i",
                      "start": 112.337,
                      "end": 112.43
                    },
                    {
                      "character": "g",
                      "start": 112.43,
                      "end": 112.488
                    }
                  ]
                },
                {
                  "word": "chunk",
                  "start": 112.557,
                  "end": 112.801,
                  "characters": [
                    {
                      "character": "c",
                      "start": 112.557,
                      "end": 112.604
                    },
                    {
                      "character": "h",
                      "start": 112.604,
                      "end": 112.662
                    },
                    {
                      "character": "u",
                      "start": 112.662,
                      "end": 112.708
                    },
                    {
                      "character": "n",
                      "start": 112.708,
                      "end": 112.755
                    },
                    {
                      "character": "k",
                      "start": 112.755,
                      "end": 112.801
                    }
                  ]
                },
                {
                  "word": "of",
                  "start": 112.836,
                  "end": 112.882,
                  "characters": [
                    {
                      "character": "o",
                      "start": 112.836,
                      "end": 112.859
                    },
                    {
                      "character": "f",
                      "start": 112.859,
                      "end": 112.882
                    }
                  ]
                },
                {
                  "word": "my",
                  "start": 112.929,
                  "end": 113.01,
                  "characters": [
                    {
                      "character": "m",
                      "start": 112.929,
                      "end": 112.964
                    },
                    {
                      "character": "y",
                      "start": 112.964,
                      "end": 113.01
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "skinny paycheck",
              "start": 113.057,
              "end": 113.893,
              "words": [
                {
                  "word": "skinny",
                  "start": 113.057,
                  "end": 113.37,
                  "characters": [
                    {
                      "character": "s",
                      "start": 113.057,
                      "end": 113.115
                    },
                    {
                      "character": "k",
                      "start": 113.115,
                      "end": 113.184
                    },
                    {
                      "character": "i",
                      "start": 113.184,
                      "end": 113.231
                    },
                    {
                      "character": "n",
                      "start": 113.231,
                      "end": 113.266
                    },
                    {
                      "character": "n",
                      "start": 113.266,
                      "end": 113.312
                    },
                    {
                      "character": "y",
                      "start": 113.312,
                      "end": 113.37
                    }
                  ]
                },
                {
                  "word": "paycheck",
                  "start": 113.428,
                  "end": 113.893,
                  "characters": [
                    {
                      "character": "p",
                      "start": 113.428,
                      "end": 113.475
                    },
                    {
                      "character": "a",
                      "start": 113.475,
                      "end": 113.567
                    },
                    {
                      "character": "y",
                      "start": 113.567,
                      "end": 113.637
                    },
                    {
                      "character": "c",
                      "start": 113.637,
                      "end": 113.695
                    },
                    {
                      "character": "h",
                      "start": 113.695,
                      "end": 113.753
                    },
                    {
                      "character": "e",
                      "start": 113.753,
                      "end": 113.811
                    },
                    {
                      "character": "c",
                      "start": 113.811,
                      "end": 113.858
                    },
                    {
                      "character": "k",
                      "start": 113.858,
                      "end": 113.893
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "and a",
              "start": 113.939,
              "end": 114.067,
              "words": [
                {
                  "word": "and",
                  "start": 113.939,
                  "end": 114.009,
                  "characters": [
                    {
                      "character": "a",
                      "start": 113.939,
                      "end": 113.962
                    },
                    {
                      "character": "n",
                      "start": 113.962,
                      "end": 113.985
                    },
                    {
                      "character": "d",
                      "start": 113.985,
                      "end": 114.009
                    }
                  ]
                },
                {
                  "word": "a",
                  "start": 114.043,
                  "end": 114.067,
                  "characters": [
                    {
                      "character": "a",
                      "start": 114.043,
                      "end": 114.067
                    }
                  ]
                }
              ]
            },
            {
              "sentence": "friendship.",
              "start": 114.125,
              "end": 114.937,
              "words": [
                {
                  "word": "friendship.",
                  "start": 114.125,
                  "end": 114.937,
                  "characters": [
                    {
                      "character": "f",
                      "start": 114.125,
                      "end": 114.171
                    },
                    {
                      "character": "r",
                      "start": 114.171,
                      "end": 114.218
                    },
                    {
                      "character": "i",
                      "start": 114.218,
                      "end": 114.264
                    },
                    {
                      "character": "e",
                      "start": 114.264,
                      "end": 114.299
                    },
                    {
                      "character": "n",
                      "start": 114.299,
                      "end": 114.334
                    },
                    {
                      "character": "d",
                      "start": 114.334,
                      "end": 114.38
                    },
                    {
                      "character": "s",
                      "start": 114.38,
                      "end": 114.438
                    },
                    {
                      "character": "h",
                      "start": 114.438,
                      "end": 114.485
                    },
                    {
                      "character": "i",
                      "start": 114.485,
                      "end": 114.554
                    },
                    {
                      "character": "p",
                      "start": 114.554,
                      "end": 114.647
                    },
                    {
                      "character": ".",
                      "start": 114.647,
                      "end": 114.937
                    }
                  ]
                }
              ]
            }
          ]
        },
        "duration": 114.96489795918367
      }
    }
  },
  "formValues": {
    "storySettings": {
      "title": "What was the moment you cancelled the friendship with your best friend?",
      "content": "It was my daughter’s 5th birthday.\n\nBecause I got married and had her very early in my 20s, at that time, none of my friends had kids. My baby was the sweetheart for all the aunties - mom’s three close friends. We threw her a party.\n\nIt was fun. Each auntie got her a present. They handed it to her one by one so she opened it and got excited. To the last auntie, before she handed the present to my daughter, she ‘demanded’ my girl, “Say ‘please’ and bow, so auntie will give you the gift!”. I thought she was joking, so I interrupted and told my daughter, “Auntie got you a present, you say ‘Thank you’ out loud!”. My daughter exclaimed, “Thank you auntie!”, then opened the present. It was a Lego Friends set. Needless to say, my daughter was so happy, and jumped up and down with the Lego set. Then suddenly, the auntie snatched the Lego set from my daughter’s hands again, held it up above her head, and demanded my daughter, “Say ‘please’ and bow, or auntie’s gonna take it back!”. This time, I knew she wasn’t joking.\n\nI got angry but tried very hard to keep my voice calm, “No one demands my daughter to beg. We’re poor but we are not cheap”. “I was just joking!”, she said. “No, you weren’t. That’s the second time and I don’t like it”, I told her. Now she got angry, raised her voice with me, “Even so, this is an expensive toy, what wrong with begging a little?”. “You take the gift back and please leave”, I told her, while getting up and holding the door open. She left and never came back.\n\nThe next day, I took my daughter to the toy store to get that Lego set. My friend was right. It was a damn expensive toy, it cost me a big chunk of my skinny paycheck and a friendship."
    },
    "voiceSettings": {
      "service": "elevenlabs",
      "languageCode": "en-US",
      "elevenlabsVoiceId": "pNInz6obpgDQGcFmaJgB",
      "pollyVoiceId": "Matthew",
      "advanced": {
        "speed": 1.2,
        "isActive": false,
        "stability": 0.5,
        "similarity": 0.5,
        "styleExaggeration": 0,
        "speakerBoost": true
      }
    },
    "backgroundSettings": {
      "fileName": "clipmagic-files/trackmania/I+have+build+the+Longest+Press+Forward+Map+in+Trackmania2020.mp4"
    },
    "subtitlesSettings": {
      "text": {
        "fontPath": "/fonts/TheBoldFont.ttf",
        "fontWeight": "700",
        "isItalic": false,
        "size": "16",
        "textColor": {
          "r": 255,
          "g": 255,
          "b": 255
        },
        "stroke": {
          "isActive": true,
          "color": {
            "r": 0,
            "g": 0,
            "b": 0
          },
          "width": 10
        },
        "shadow": {
          "isActive": true,
          "color": {
            "r": 0,
            "g": 0,
            "b": 0
          },
          "opacity": 80,
          "blurRadius": 20,
          "offsetX": 0,
          "offsetY": 0
        }
      },
      "subtitling": {
        "maxChar": 15,
        "maxDuration": 2,
        "startAdjust": 0,
        "endAdjust": 0
      },
      "animation": {
        "fadeInDuration": 0,
        "fadeOutDuration": 0
      }
    }
  },
  "videoConfig": {
    "fps": 60,
    "durationInFrames": 5942,
    "width": 1080,
    "height": 1920
  }
}

export default defaultProject;