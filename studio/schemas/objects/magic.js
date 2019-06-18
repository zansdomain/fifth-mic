export default {
  type: 'object',
  name: 'mystic',
  title: 'Mystic',
  fields: [
     {
       title: "Power",
       name: "power",
       type: "boolean"
     },
              {
                 title: "Ability",
                 name: "ability",
                 type: "string",
              },
              {
  type: 'array',
  name: 'arraytest',
  of: [
    {
      type: 'frrrrr',
      title: 'Fridays'
    },
    {
      type: 'grrrtt',
      title: 'Another author'
    }
  ]
},
              {
                 title: "Class",
                 name: "abilityclass",
                 type: "array",
                 of:  
                 [
                     {title: 'Psychic', type: 'psychic'},
                     {title: 'Tech', type: 'tech'},
                     {title: 'Soundwave', type: 'soundwave'},
                     {title: 'Emotional', type: 'emotional'}
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
                   of: [{type: 'string'}],
                      options: {
                      list:
                      fields: [
                     {title: 'Roots', value: 'roots'},
                     {title: 'Lyricist', value: 'lyricist'},
                     {title: 'Club', value: 'club'},
                     {title: 'Backpack', value: 'backpack'},
                     {title: 'Gangsta', value: 'gangsta'},
                     {title: 'Trap', value: 'trap'},
                     {title: 'Spoken word', value: 'spoken'},
                     {title: 'Freestyle', value: 'freestyle'},
                     {title: 'Conscious', value: 'conscious'},
                     {title: 'Top 40', value: 'top40'},
                        ]
                      }
                   },
                   {
                   title: "Stylo",
                   name: "stylo",
                   type: "string",
                   },
             ]
         }
