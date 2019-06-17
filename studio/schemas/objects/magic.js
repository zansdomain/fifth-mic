export default {
  type: 'object',
  name: 'magic',
  title: 'Magic',
  fields: [
     {
       title: "Mystic",
       name: "mystic",
       type: "boolean",
       {"if" : [ true, "yes", "no" ],
       
           {collapsible: true,
             {
                 title: "Ability",
                 name: "ability",
                 type: "string",
              },
              {
                 title: "Class",
                 name: "abilityclass",
                 type: "array",
                 fields: [
                     {name: 'psychic', type: 'string', title: 'Psychic'},
                     {name: 'tech', type: 'string', title: 'Tech'}, 
                       ]
                 },
              {
              	title: "Ability Level",
                  name: "abilitylevel",
                  type: "number",
               },
               {
               	title: "Clique",
                   name: "clique",
                   type: "string",
                },
                {
                   title: "Trinkets",
                   name: "trinkets",
                   type: "string",
                 },
                 {
                   title: "Musical",
                   name: "musical",
                   type: "boolean",
                  },
                 {
                    title: "Genre",
                   name: "genre",
                   type: "array",
                   fields: [
                     {name: 'roots', type: 'string', title: 'Roots'},
                     {name: 'lyricist', type: 'string', title: 'Lyricist'},
                     {name: 'club', type: 'string', title: 'Club'},
                     {name: 'backpack', type: 'string', title: 'Backpack'},
                     {name: 'gangsta', type: 'string', title: 'Gangsta'},
                     {name: 'trap', type: 'string', title: 'Trap'},
                     {name: 'spokenword', type: 'string', title: 'Spoken word'},
                     {name: 'freestyle', type: 'string', title: 'Freestyle'},
                     {name: 'conscious', type: 'string', title: 'Conscious'},
                     {name: 'top40', type: 'string', title: 'Top 40'},
                        ]
                 },
                   title: "Stylo",
                   name: "stylo",
                   type: "string",
                 },
                 {
                   title: "Enabler",
                   name: "enabler",
                   type: "reference",
                  },
                  {
               	title: "Booster",
                   name: "booster",
                   type: "reference",
                  },
