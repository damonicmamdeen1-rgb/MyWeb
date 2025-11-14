document.addEventListener('DOMContentLoaded', () => {
  const appsList = [
    {
      name: "! Request A Game [UPDATED]",
      link: "https://forms.gle/ukohvaY885We9cub6",
      image: "/images/icons/request.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "Bullet Force Multiplayer",
      link: "https://www.crazygames.com/game/bullet-force-multiplayer",
      image: "/images/icons/BFM.png",
      categories: ['all,', '2P'],
      error: false
    },
    {
      name: "Crazy Games",
      link: "https://www.crazygames.com/",
      image: "/images/icons/crazy.png",
      categories: ['all,', 'emu,', '2P,', 'sports,', 'flash' ],
      error: false
    },
    {
      name: "Cubes 2048",
      link: "https://www.crazygames.com/game/cubes-2048-io",
      image: "/images/icons/C2048.jpg",
      categories: ['all,', '2P'],
      error: false
    },
              {
      name: "DOOM",
      link: "https://archive.org/details/doom-play",
      image: "/images/icons/DOOM.jpg",
      categories: ['all,', 'emu'],
      error: false
    },
    {
      name: "FNAF 2",
      link: "https://sussygamedeveloper.github.io/FNAF2/",
      image: "/images/icons/FNAF2.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "FNAF 3",
      link: "https://sussygamedeveloper.github.io/fnaf3/",
      image: "/images/icons/FNAF3.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "FNAF Web",
      link: "https://wellsousaaa.github.io/Five-Nights-at-Freddys-Web/",
      image: "/images/icons/FNAFWeb.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "GBA Emulator",
      link: "https://ds.44670.org/gba/",
      image: "/images/icons/gba.jpg",
      categories: ['all,', 'emu'],
      error: false
    },
    {
      name: "Itch.io",
      link: "https://itch.io",
      image: "/images/icons/itch.png",
      categories: ['all,', 'emu,', '2P'],
      error: false
    },
            {
      name: "N-Gon",
      link: "https://landgreen.github.io/sidescroller/",
      image: "/images/icons/NGON.png",
      categories: ['all'],
      error: false
    },
    {
      name: "Nintendo DS Emulator",
      link: "https://ds.44670.org/",
      image: "/images/icons/ds.png",
      categories: ['all,', 'emu'],
      error: false
    },
        {
      name: "Nintendo 64 Emulator",
      link: "https://www.neilb.net/n64wasm/",
      image: "/images/icons/N64.png",
      categories: ['all,', 'emu'],
      error: false
    },
        {
      name: "Playstation 2 Emulator",
      link: "https://ds.44670.org/",
      image: "/images/icons/PS2.webp",
      categories: ['all,', 'emu'],
      error: false
    },
    {
      name: "Run 3",
      link: "https://www.coolmathgames.com/0-run-3/play",
      image: "/images/icons/run3.png",
      categories: ['all,', 'flash'],
      error: false
    },
    {
      name: "Subway Surfers: San Francisco ",
      link: "https://raw.githack.com/3kh0/3kh0-assets/main/subway-surfers/index.html",
      image: "/images/icons/SF.webp",
      categories: ['all,', 'emu'],
      error: false
    },
                  {
      name: "Super Mario Bros",
      link: "http://topoi.pooq.com/hendrik/notmine/FullScreenMario/mario.html",
      image: "/images/icons/SMB.jpg",
      categories: ['all,', 'emu'],
      error: false
    },
    {
      name: "Survivor.io",
      link: "https://html5.gamedistribution.com/rvvASMiM/f1c451e586c04b4c8cba01b0c50d9090/index.html",
      image: "/images/icons/SVI.png",
      categories: ['all,', 'emu'],
      error: false
    },
          {
      name: "Web Retro",
      link: "https://binbashbanana.github.io/webretro/",
      image: "/images/icons/webretro.png",
      categories: ['all,', 'emu'],
      error: false
    },
    {
      name: "Slope",
      link: "https://watchdocumentaries.com/wp-content/uploads/games/slope/",
      image: "/images/icons/slope.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "Fortnite",
      link: "https://play.geforcenow.com/mall/#/deeplink?game-id=46bfab06-d864-465d-9e56-2d9e45cdee0a",
      image: "/images/icons/fortnite.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "Bomb Party",
      link: "https://jklm.fun",
      image: "/images/icons/BP.png",
      categories: ['all,', '2P'],
      error: false
    },
  {
    name: "1",
    link: "https://hgentry.github.io/1/",
    image: "/images/icons/1.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "BUGGED",
    link: "about:blank",
    image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTExMVFhUXGB4YGRcYFxofHRogHhgXGBgeGhgaHSggHR0lIBkbITEjJSktLi4uGB8zODMtNygtLisBCgoKDg0OGxAQGy0mICUtLy0uNTAtLS0wLy8uLTAtLS8tLS01Li8tLS81MSsrLy8tLy0tLS0tLS0vLS0vLS0vLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAgMEBgcAAQj/xABJEAABAgMFBAYGBwUGBgMAAAABAhEAAyEEEjFBUQUiYXEGEzKBkaFCUrHB0fAHFCNikuHxFTNTcoJzk6KywtIWNENjg6NkdMP/xAAbAQACAwEBAQAAAAAAAAAAAAADBAECBQYAB//EADkRAAEDAQYDBgUDBAEFAAAAAAEAAgMRBBIhMUHwE1FhBTJxgaGxIpHB0fEUM+EjUnKy0gYkNEJi/9oADAMBAAIRAxEAPwAkqWUkgpDpBBGBBzDZRa+iu37jSJr3aBCzl90nTjlywjzUy7cklIQm0iihgJoGnEfNKgAuUQSClSTeY101GXKOWD32Z4kYag+vQ9V1bwy0sMcgoR6dR0Vk6ZbGuEzkAXVMFAigJOPI+3nFbuY0xIFFZD5wi1dGtuJUkWeeSQpwkqGI9VXuMBts7KMibdYFJdSVYP8AEh2Pcc4m1sa4ceLI5jkf5Q7LI9h4EmYyPMfwoMtZBBBUDecU000FHeJaJqQtE1ITdUoqYZEY3eRII4ERDSGbtBgTr+ph2WuhSSGujtBmPoknTI8zCAxFE08VVltBvXJoSoXklZuqcXmAUOLu45xGExhVeCHN9OuBJFAzEEQzsqaShckg4bjKYuHcDQsT5aRJUTWqhVKQ6XGWHA4EmAz/ABOvc/fX7+az7t03eXt67CcCXlKSEpJQAwSWO9RYHqhwgiGlgi8xWKJSCz94Fdak6Q7ZyCojcIWq5pgM9VBQfuhASXFFB1EllOKCjvkWFBnFXmrQfL5boqjAne9V7PIOaC5CWUNKkcS1REa3y3STd9MFwrSjn2MIkpX2XUfSVvJq3kzOIaVLdOCDulW6czoNDWsUrirMN0jf2QcczicR5cBEm3EFaMD9nLP/AKkVHjDDMPSDJ5/mSIftlVkOCbiAxH/bT7dIOD8B8R9U2e8PA/RR5UtykMRyL4nDiYm7fmPaJpcULVFMAkV7sIRYZTzUBjVaBQ5Xg/JoTa1Xpi1OazDlTF6c4uD/AEj1I9Afuq1rJXp7kfZPbPk7q90GgTRTFsxw1ETVvWqxVKQWccwK0qxJ0hixpFxPYLqfw9qgREhKcKKFSaKcZ48DiwhUnFLvNXHe8khRBcOgutmIbs1I+8QxIj0IcvdNVuSlWgYE82AYRyZmDqyKjeSxbiaAM8eJQzbqSQkndLVOLDIHV4hV3vLop+yEs81RVdQ5ZQDuXYd2XMRClK6xaCoyySCsqFCH9IDRn8Il2xXVyhKF4EJClFrxc0AzJIz5iBs1YExKSQ5Z6VCQLzHmz+EPPFLsOgxPidPLAfNBbjV/PLw2aqRalAHdCwlEtkpSQSBlu4lWb8TA3adqugpCgTdCTeTg+ZOb4MIz3obaBOt060kElQKrwJCheXuh37LHBvRDRcpswqUSSXKsxpkNBSCWyz8KehNdT4o9h/qtvkYb/lJlWZS1XEJBUpkgAseL6NjyjSdk7PTIlhIxxUrU5nlAvonsfq09asC+uop2U5P945+GsDelG3r56qUTcreUPS+6OHtbTHUszW2OLjSd45Dfqg2l7rXLwY+6Mzv0UfpN0g649VKUOrvMo132xbgPOK6hBJDJNVE7pflzfSFJcsAXLYFNSTQYeDCLNY7HLsUsTpqQqfd3JYOD48uJywHFL47S8veaDU6AbyGq0PgsrAxgxOQ1J3mdED/YVr/gzvFHxjoMf8XWj1Jfgf8AdHQX/subvRU4ts/tb80Lm2e6UrQutVsU3VAA4jRoIAptiQTdTakpoQWTNDeSm+WwXMWwVvkMlKd9LhzmTmTgREW22C8VKRccMlkli+J/lIxDRmw2i78LsQc96HHP6KL16lTQjI/Q5YYoWtJS6VXklIYhQdjx1Iix2K2JtUo2acodYA0tZzLUCuJ8xxxjFYtO4vctAoleAmN6KtFZA54QJWkhV00N5mUGIbLmGd4Za8wm83Fp9eh5H8hXcBMKHBwx8Oo5jZXs+QpClJUlQIISWPz+cePxxU1R4t8YJrmfWEAqbrkZg/vEh/FYHiH0gcg4drAmvvMLStAPw4jTfPeSIx5IxzGaVLXUKDPedwdMDxNAINyZgVdULwclRDuBqk8K0A0gGnLskgPpj7AYl2KZcLMpilqHDkDR+JgD8QqTMvBE0r7JvCiSreDHgfutgaQuYmr3fRdknNVVACgxzMeLOO9oN5NHPg7uBHqkgvRJqE0LFsanUEqLQMHAje8Ul139EhZYGqgyQKh65HUnWB+09qy5UqbNmC8lN1F1OJJ9EnkX5PE20qOAvOVcDl5At5xQ/pDtwHV2YKBKHXMb1jRIPEB/EQ1YYOLKAckOV91tdUqZ08RVrJTXrS/+VnjzpD09lS0gWXfnLSCVqFJYZmbNVMMBmThFV2RYE2iaJKlLSCMUM4OVSD7Mokz+iSPrSJPXKZYLbgJAGLl2HNu6OkZ2dCSCBlvFJPtMgFCc0/srpxb0qQqZMExCW3VJSL1Xe8A4VofIxItvT21KWCi4hANJYSCDwUTU9zRLmbPskomWJF+6WKlLU58KR5LsViJrZyl8xNmFu54kxWe9jT5YfZSBLStCi1n6fSuqdclXWigQCLnO8agcGPfAJX0iWkTCppakYdWzAD7qhvPxc8oi7d6MKl1RMBlmoKlJSQ+DlTAwAt2xZkogTLySQ4di44EFoq2wQsqLuarxnO1Wo7H6cWWfRSzIWQABMYofULz/AKmwi12RCFqKjcUgMS2YDEAnNyQ3OMHsux7yCRPkheSJhUl/6rhSH4nwi9fRVt/rJJsyiN37RL43c0jS6ov/AFcIzbVYY4gZY/8A1zHt5V9Ko8czj8J1V9IKlKUq8HVeLKxZm5AszDWA9pXemuokg3yQzFghVBg3AwUNAN0UBUbqqOfB8TU8YBbdWZMidNUsIHUqSm+oOVKACe8e+M2AOfIG9cfHf1TLiGtJ6KqdBLE0rrCkOsljmyd0c63o0PorsfrFCYsG4jI1vKxY6gfOcV/oZskzZUlCWumUklQ0PaIOYJw1MWvb+1BLR9WkOAAElScsiAddT78NU3TM+0Td0HAczoPLX8qwJETIIsyMTyBzKR0p2+96TKUGA31PrS6Dpqe6Kt1RwCS7BICTWuQGsOMSWFSVBIF3yGrwdloTYxeISq0qwGUsNidVN8tUrOe+0vMjzQD5DoOZTTGtszAxgqT69T0S5UpFhT1kzenqACEYhGTlvM9wzMV60TVz5hKmWpSgNMMu7SHUImTVuSskkqUTXxOQ0AghZJaE3WUgm6pZKkspsjXsgOxgM1pwuMFGjIfU9dhS0CKrnYvO6dB75qN+zZn3fxR0J6j/ALdm/GY6Fsee/mr3nc/b7oo5fGYl5mYBDAZaJLYx4hQUU1lqdRVUMaUBAzIoHjpYuhO7MDJUogKvBziNVHSPStgXWN1Fb6WqcCo6UYgQFK+G94aqPOsIUAQm6reUSlTh9Dq7vwhImdaAiaSmaE7sxYa9omYddFeOsS1SsWSKJCRdUx4geq1CITapAU73xUJBZ+8cKsX0gscxbgcQVYP5+XT3QdUtSFEEALQGbAg+7CFTS5JqHbD2gRNWyvs5pTeBuomHh6KzmBVj6PLCIuUUqIUkg3q18H4GmGsEfgKg4Jhrq55pKs6jEBiPEcYUE8MTkdNfhHqcqnM1Hy0eoGGBzpx08YCrEonYp14AEqd6+HkIefDsnFWFeBA72J48YGWdZSQa0HP9TBMmmINBiNdeekDKTkbQ4Kv7a2pMkyZypYAWEODi28L5GpAJV/TGYCxz5p3EKUpVbx45knGNW2jLurdqEXS2hBBphQEwNlbLmvdAJIoWdnz4R0fYxY5jgc1nWskEEBCOjuxRZk35n7zIO7ZOWz0HyJsqxFM76yXvXbrZAO5PM5wcsuwVkgrUBwx/KCf7GQ1VK8R8I2g4Nwak3XnmrlU7Zs5K1X0rSl6kHXOGpeyA+9MS2d137ni0K6PIyWsd4+ENno8Mpqu8fnFDHCTUhFE0wFAVS+nMwqkC6k3UqF5skgKYnvIgNs60/WZH1ZR+1QL0hROLCqCeWH5Re9qhNnATOupQrdByNMPDWM92/sk2dSZ0kvJJBSpJ7BdxXTQ90HDg/wCEpehbig6bUQsIUGelcj80gp0alrRbZKpagkldSQSKghTgesHHMvAu22e+gTbzm8QoZgmqTxdjXUQuVaVApUKKSQX4guD4iFZWEtLeYojNdjVbVtaZ6IAdTIDFjXVsGd++MY6e2zrdoWgu6UL6tPAIASoDTeBMahs3aYtBlTyAAxmEercBdtWUMYxObPMxSphxWorPNRKj7Yy+xYS17ycxhv5Jq3OF1oGuK1P6JdpzJVknoSoi/OZLmiQEBS7gyJKvJ8YscuUSQAlyVeicchzfSAX0fWUiySgA6l3lMBi6iE+QEXIqFmDJuqtF0hShhLfFKPvHM5QpbHmadxcaNaafjqfzgn7KBFE0NHxEV/PQJaVpsgbtWggkk1EoaOKFVfnMXZ5CphvKUkliokliSc64A5mH5NiJcqvigbMlzjmSRm8T5rbwdBDpQyhTJxxcGkIyz3vhbgBkN5nmUUODK0xJzO9+abTJuJYJWAlDbhepxYHFQbEx7OX2hfFAlO+mjnU+k74Q4qW5O7ioAlKqsGqdGwYR4CXFVh1mhSDQDDgks4MLV3uqHXU79+qe+rp9VP4RHRD/AGpL/io/CqOj1x+6qOHJ19V5LmpVeASoFkpF1VW4DAM/NokqUXO8oOsAApcUDluBrUwCQl2omqiXB0wPExMs1sUm699qkg17ia6uBwixajvh5b3REAAr1C68qdn2qBELQDSig6iTVxmK8DiwhmRaApjeSSEk7wY1wPAYvDoQwokhkMLp8QAWGQYmKFLkUwKSoBQAUaMVbyWLZHK6zxFVJYJStqDdWMn9Ej1eOWWYicos+8cAKhw+vHEZx4tIN6iS7JPtIJ1DkgRLXlqlrqIQpBS4Lhhz5Hj+cekY4HKvv8YmT5BGt16HG7n+H55xwPbp7PjFjTMJhr6iq8u/LxNsc30XzpTxHviIkctaQ4ijGozihVXioovdqSgUvTH574q/SuZtUmR9TvmUZIcp6obwUtJdSy5LJGEWy2THRk7ecJ2xY5hsBlSVFM4S1XCkgMt1FIc0Z6HgY1+xq8U+H1WdasGeaz2zbY25ZyL8qZNBPZUhK/8AFKLjvLCL/t23WtNjEyRIvTyEvLNbjh15h7uEVLoHsjasu0mZbZxVLuEBPWXt4qSQbopgDWNHmYHlHSEUSAKyGbsTbFsLz1lCdFrYd0uU48WME+jP0fT5Nolz1T0gIUCQi8FKGN19CWcZh4F7S+ji3zZ82Z9aAQuYpQTemUBUSBoKGNW2fZUypSUIDJSGA0AoI8QAvBDuluyPrVmVLBZQ30H7wBZ+BcjvjI9jW9I3JtZKwykq7IdqtlzGrxuS8IyP6N7CF2tlofqkEkKGCgUpFDmHPhFNVbRA9ubIVZy6SVSlYK0zuq40oc4AqnspPNvKN96S7Ns67NPM1ICRLUoqFCLqSp+YZ66R86WldU+MG7wqUKl1aHsLaN3ZdsW7GWhcoc5pSEt3qMZ+Sw5CJsvaa0yZtnHYnKlrNcLhUaDi4/CI7Y9mM2fJlgPfmIT3FQB8ngUEQhvuOpr6flWlfxC0chRbpsaULNZ5cmWSZgloQpYD3d0AhHHVXhrEyz2MYquk3gGOTVI4qFTD9lswS2LuXPzgDDoXg51VUMW9zPHFyzOkNVt3roo1eXa4KqrEK0FCa0BZmGseJXUbxqSWUnIZcGpU4xyEszJFATunM1YCgL1qY8JYYrDIzF6pz1UoN5wFRveaTKANwsg4rdJbHAgZuCXJjwboFJgZBLPeqcsypQyj2bW8NwlgljTHEE6Fwwhi02hKbwAU+6kXFZDPROLHOLDFWAJO96r3q5n8aZ/dD4R0d+0z6o8fyjomp5eyvdfyHp9kMA/lJCeRr7AYVdZ6KFAAxfwGo1MTV2iVMe+lKVEteSmhOO8gmpxLp8DDS7MRUMpJV2kKpTC9gRgzEQZzKYg1G9Njqjh/PBNE41zAqPl3iXKtGN4AuRUFjTU8DlEZOWOJNR5cBHqGLdk4n4EDvgRVXAHNFZcwHAqqrhl7AW849Cw4DgkkkBq9w4OKwMQ4ICQb2QBzOUQukfSIWRPVpN+0EMVUaW/v7uJ0g1msj7Q+61JTubEKkqwXkg3SpAV6oWHc8KPjEedZ2qHwqD8+UY9OtC7wnEnrEqcqzxd/YqNf2LtET5KJopeAcaEdocnhvtHs79KGvaag4HxQLPaS8lNAcoW0Sp0kGoZ38fziFaFXRGTmnw6qi2u3plJmTph+zlJvnifRA4k+bR30c29c+wS5swuta5pVwJnzC3IAgDg0UT6VtrXUS7Ek1P207/8ANJ9vcmDP0IW29ZZ0onsTbwGgWlPvCo6vsyzcOG+cz7LJtMt6Sg0WkR0eKJakNpKo0UCiXMWAHJYQ2ZwIcEHlDdvlKUlg2MV3aU9SCAHSXx9z4R5QrEZkB7amTZE2i0oSEzJjOdVNdTTmXPeYZ2ftYqIQsOTgR7xAfptayTLRW6HVQ4nDyH+Yx5oq6hUk/DUKt2i3zlJIXPmLBG8klTEZip0iN0P2UFJnhaUrCZgSAoChCTV+IIhSjzbifnI+UEuhtrQVT7P6ZIXh2mCUEP3IP9XCBdp3hZnXenupshHFFVRelNgTItk6WgMgKBQNEqSlaQH0Cm7oK/RvZr+0JP3AuYe5BSPNQhv6RZ4VtCcBhLCJY/pQl/Mkd0HvoesoM+fMLbstKA+G+pyP/WPGKWiUtsJcc7o9RT6qGNBnoOa1i6wwNE5HyA1piY8Wca5AVDhznk8KUMeYqDkNe96RHmWpsLzv3U9xbzjjAtcAlOrSDeok4JNWLYkE8HcCI861gEtecqGBDUbmwOBiLMnFTOQakszYaDUUrDQThTU0NPzd4sAjti5r2faVLoVBirAjTTkzvDCU4UGJLg+B4vC7zDEhkuXHtPDSFSrKpb3UpN1LEvdAfVRokGCtaTgEcUaOQUO8r1JniPjHsEf2Sj+LK/HM/wBsdBrm6j7qeOzYK9+rENvZFW8li3HIM8Ily1JYgBwkl0lsdOBrnBJRYHeWGSBUOHOB1UdY5bG8Nw4JY04kE8i4HGFbxS3FO99UNJ5hk5V8syIUcw4OArx15uKQRXJBJdJqoVB0avAZGGzZwcCQ5NCNMhho7xF6qkShBbeVJIUmhBDMdKxTNu2W6tWJSvfSTiQSXc5kFwTqI0S0WIqTS6XcuD4HjFU2zYVFF26bySVJf/EnvoR/K2ca3ZNqEUt12Rw+yTtsYkZUZhUCTtJJcnIVfMZH51ET+hG37Qi1ypaJhElUwBUs1Sx3dHfDDMB6QD2rYylbpG6qtMtfjEuzWW4mlFir/OWUdTLG2RhY7VY7XFpqFv4NHeBW07VLlhc6ZSXJSVqPKoHMmKp0b6fpmmXZ1oV1qt3rHTdJAJDgl3LNTEmmMDfpY2xdly7GDvLabN4AH7NPiH/oGscjF2bILSInjr5LUM7eGXtWdbX2gu0Tpk5famKKiNNAOADDujUPoW2cUImzS4M1LpGqUFg/O8o8gIzHYmzVWm0S5CcVqYnROKj3AHyjeJezjJCRK3AlN0NkGZuTRt9o20We4wefgN+iVs0V+rjsqxpmiOMwQARtOYjtpcaih+EE7TaLmKVPoOT6wSC1xzCrCpfE5pxUhU6B9rlAg3gCM3iPMtsw9lITxOMR12dS+2onhgPCCly8GKLY7GlKiUEk5Amg72jL5e351otBVNLAhkoyRm3Ohc5nuA2CQkCgjMFdD7R9YmndQjrFlKiXpfJTQcGxaI4zIvieaKHRl2DVD2xNUJbpLMoORph74l/R2Qq3Ba23nDnByQfYlu+Iu1pCpZXKmBi3iCHBHAisC5ExpJQBUlyfI9zQ09gmjLa4EJVpLHV5KFtW0mbPnTD6cxa+5SiR5ERp/wBEcsos0xbVXNLckoSP8xVGY2izFyRXhn3RsfQKzXLBIx3kFf41FfsIjL7adcswYNSB8thN2Ft6Wp5I8pRUzsc/0HfDbcDhz/MmHFjHDSvvjwoJdgchT5pjHJgraCZUWzwGY8CT7oSpGNMmoWPHlErqFcQ5ao+HLGPU2MFqpLqy4e0ghotVTfAUQKAehxAD4c6V/SEzppXQlJF5glmAbEAYPR6CCKLIkNuqxJNXGePA4sIXLUA1QN0qN5LFsicLrO0Wv4UCrxRmAhrHSPYcuH/4vgY6PXUS8iJQX9IOvIgig5lklvOEpU93eBck1SxYacqVgNLmrAFVBgTRRIriOMOi1rA7Zon0h5ktXlEFvJC4B3sorLTgWGat00c+13Jj0Fh6QZLlw/iRiRoDnA36wqvZNLuh4imAh362qvcP0HtipCqYipxz7JIHLHxYFoG7UslHAOWHuh0244MC5YBj4DXB4at+2LMhRlTJyETGBIN5g4o6gGwy5QSKKR5+AVQn/B3lnfSixdWrrQGQosaUSrEjkcR3jKKnbp/op8eByjRemstM2xLEu1S1JQoLEuWpJKyVMynqwd88OEZXNSpCilYKVAsQQxB0Mdn2fI58Iv5jBY9oaGvN3Jc8PWy2zJyiucorUcSqpoABXKgGEMEw3PUwbWHKCtUFab9EfR4oCrWsD7QXZdQWQ7klsCSAGxF2NLfLGM06N9MZVl2dJR1ZXPAUOrwSN4sVKbMVo/dELafS+12lkJIkIbeEslzrv4gHQd5Mc1P2baLTO578BX0GS0GTxsYAFpE9MqapUsTpYWkOoOCRzALxOtYCphILileQAiv9E9hJkSEml5YClHmHA5B/EmDqBD1msbLPW7qofIXZpuZKhq7Eow1MTDVFQFQVYkR1snWZEq9OWZZdrzOCSaUFf0eFbTnCTKmTilSriSohLOQOcZftTbky2KClgJQnsSwaVzUfSPgOEDkszZm0fkp4t3LNS/pAVImCUuRNEwi9LUyVA3RvJJcYOVB83DYRT5CmLHPCDcImSgcRDNnpCwMGQQJBfJcgNoWb7cHjf9iyR9Xkm6UvLRujLdFOQwjCp9j+1SHopkvpvZ+MfQUopSAKBuPdGP8A9QOBbGB1+iYsIILvJKCB55j50j0DCgxeh7geMI69PrZQlU9OqSQNCMfFgW8o5paNHFOJy7QxJz7ia60A0hN7ikkJeoY1wPAUMNqtCa1UKAAj3A5iEzLamtcwKppx0d4mikMPJOmWwok0QwunxAFBRgxjlk1AURgkOlw5z4u7HKI6rWgvR3UKgthrxByjz6+l/wDqB1PkcBhjQGJoVa47kiXV8PZHQJ/bKPvfhjotwzyO/JRwJOSgFONNBQsW9zPDj8xXT5oYaQxbslyTTwB4nKHEZUIxOL9x8YuU6UoMdDX2e0giHZEsqLJGZJL0GOPPSI65jBycEvUN3nSK701txlWSXKBuqnqKlNTcTRqZEkHxhiyWYzyhiWtM3CjLkQ2x0qkyAUWdaZ0/AroUy+TUJ4eOkUG0zySVrU5Jck4knGBclJqoFi7cPDvjjJK1pBJILk90dTBZooBdasGS0OkNSvLVtIYI8fnCB0xeZiXtOSkKZIAYfGIrUhxlKVCATVeCsObOKLxWoOEsw5u3sMNT1MOcPyLKsJSAneUt25BgD4xYqAiXWlRcsNAInWFFCdfdDMnZs1nujk4ibZ0boHD9Yq7JWC1rY1rlzZSTLU4ACTqCAKEZROuxlOzrZMlKC5aikt3HgQaEQfs/TKcO2hCuTpPvHlCV8aowkCu12PCmKdP6aTD2JSR/Mon2NAfaXSK0TAxXdGiAz8zj5x68NFPECP8ATLpMmRLKJSgZyqUIPVjMnjoOL5Rky7eElgzuA0FLfLBSTmMIDKkADDjDcbBTFCe8ovKmAhxDkDdmzasYJxRwoVdpqE0ZN5SeBfyi9bG6TqDItDzBgFjtjmfSHOvGKVLO8OcEUmByQsmZdeKqQ9zHVaVpiu+G192OfzWJSbMSAQcaw2qQryJ+dI4YLfD2qMRwzyPt8MIQ/PM4fLQ6ZRHo5PTjpwMMqp61Bz/MkRZFGKSC7dk0J+BEIZmoaA4F+7iYXMONRkKjXXV3hCk40zAocvc0XCIEjqj66/L4R5EmOj14r14qSLEmrrBITnu1OD4sC0SPqSACAg4ABlV4sDQNrDqlu4vCqwkBSdA5A1wJePUpBqAkutyUq0oCdTQBoHUpMvdqd+iibRYJU1KgdmmWGrvjGb/SIiaZ8tShuqkpCGIoASDnSteRGkaTbS4AF5ySbtD3FnYZiM/6aylFUuYVPu9UW9EpJIHeFDvCo1ux3Fs1ehSVrbWNUw2tCAEkuRiwhyTb5Sd4qDszVzbhwiNb7NvvTCIdo2dNuhYlrKM13SzYvy44cY6YsYczmsq6U/a5t5RUM/g0MpEe5QmcWHODgUFFRIkyxMmBJdqu3ItycwflyV4oFRQfJixfR90OM6Spa1Xb6RNChiEgboL03nfh5RI2tYZciaUI7ISCXNXI/Q98BjnbISG6H2RXRloqVW5KJ4UAtSg44eRglLlgBtI5SyovkMB74dAizioCSEkYecc/AwsR0BdE0qaJBeG1iHjDS4s1gbkvKDb+wWHPxgSsUMWOURhnjAra6kpQpmCiG4nXyg7cAqOxKhokkLJyYRPlriuSJhShJFD+sFrBab4dmqx+e+BOaQFdh0RGTVae8+UEkiBQoQS9C5bFs2i8nodNKQqVNRMSQCHBS4IcNiMIgGisRVWvZNoC5MtQ9QUBzaoA5iJiqPU4AYP36mK/sWzKlyghbXgS7ZVdnzasEUzlDM48/wBBSOGnaBK4NyqVtsjJaD0U1bF+yahLHxIJ1q4EeTJYOKTVQz0zrgKMQIjItuF7UnCrcBkzisOyZqSzNmaFqnhR3cwKlFJa5qSqzoLZOo0IOT0GDYO5hhNgSq6QUlyVOD4EDPGtYl3mFSsMly4fxIxIbAHOPJmfYJCWrQudTkDSkWBKkPcMihf1KZ/DX+NP+6Ogp9Rl+oPOOi3EG/yifqN0/lQztAhmvAVJvjyLYM9IlWewLUlMycpKJYGLMok+onj8vElYkWTWbOAAzKU92vnygPbbYqaolagqoSxFBqBDhhjh7+LuQyHiR7D5qrayftig56nwH1PyUi22sBBlykFEtsaFauZx7sK5xUdvoR9VnPU9ZLCRod5z3pJEWJSXemJGB0zPsaBarEiYpUqYlRTNdAIoUKcFCgcKEDHInlE2ab+s1zzr8lE0f9IgLL7enPJotdg29ZVWGYZ6XmXOqEkqP2hugBYOITmfVIP3YkdIujljkWeYq+uYtmSCtOJo7JAdse6KDN0jppYWTAV0NVitkcytNUykARZ+i3RNNqQZ00rEsKKUhJAvAdpziz0p6pgV0c2cLTaZck4EurkKtTXDvjXBMlWaUs3AmVZ5ZN3U+imup84W7Stb4w2KPvHXp91azQhxL3ZBFbHITZbGlCUs6b13RCRuJ8B5mMq21NWuYFlR3wVtk5Lt5gd0QbT0vti5qp3WlJUACgfu2AZghT+OPGOFu62oDBIAAd+fuhyxx8Ngac91QpnXjVPonrHqnxHxh5Ns1Se4g/CIyY9hu6EGpUwWtPHwPwjjak6nwPwiETHCIuBTeUpVrHqk+HxhlVqPq+cNmEGJuBRUrwTpilshIcVx0Hz4wL6Rk3hoxbxgnZrUEKUDQKAF7T8oF7XnpWQBVjj5Uj1KLyHF7uMFej1hnKllYlqKSosQMWoW7w0Q7XLF3CLN0K6USpMkSZiF7hO8ACDeUV4OCMYVme8MqwVRmNbexS5Wy56sJS+8N7Y0HofOnS5KJM0MUuE1BLOWByoPJoCf8XSG3UzD3Ae0wmydLb06WBKYFTElVaggNTVoTEk5OLaDVGut0Ku06U5cM9SRno44V84iENkaDI56cYmyJwUl8AaVwrQDvhydJCn3dA4LFvczmOctzQy0OAyz+a0rPKbgvIWpTZ4DMeBOvKOuAuN12bFu4n0fnCH59mUML2LYfNDrEQkH1Tvaae8GF2lONIIwTypkxBI30lwNe8AvTjCxtB6Kul1Zp0xABxNHBhNntDAJWi8hyWvdnilWIfTDhClWElHWSlFaACVAjfTnvpGmopBRFeFWY+/8+XnRQbtfiHmpP7Ul6x0V+8fWlfh/OOinCbzV/wBKxSgK4EOrI6a8DpDkl1EAE4ksRkPY3GHrNs80Kk0CSWQrM5DnrE1O4CAVJAQMUuHOBLVUoZ1iHEaKr5RkEzZbGN0m6qhVumlcGGbuaxG2nJYBgoMnDGumpI4awQnEb3YLAJY0xxBOhBDCBW3tsS7KjrlgqUotKlv2mGLZAPU8tRExMdI8BqWc8nErO+m9hQi2TWSE3mWwLsVJBVy3npyirTUsYk2u2zFzFrmF1LUVKxxJej5ZDlHgKVNeBKXDgFiz1Y5Fnjso7zQA7FJyxMczDAhW3odstEiSq2z6OHQDknI81ZcDxiCNoTbVZRYpb3xMVNUVrczEBX2abxq6byccborjDXSPbyrQEpCRLlIwQC/AElhlgMqwnozJXLtFnWUlImmYkOGcBCVAjg/siXsDsXZjEJJppggVrscyUq7NQpCtFDHkcCOIhuzTSCQCQ8bsqxy5qLsxCVpOSgCPOKJ0j6BSgoKs6yhzVCnUkcj2h3v3RImbGLzsl4xF2AVPE9frQoWpeoj3aFiXImGVMxDEEYEEAg+B9sMQ80hwBGSWIINCnja16D574ULarQQxHGJooT5tytBCTbToIYMIWY9ReXLtF9RBoY86nSGFoqCMcoIJISzwN5oKosTL7w1RrYghNRBKxbDUqVK6pnUnrFXjiVMAzDAAecR7Syklou0yyiTY0zUspctCSz5AgEKGRYE+EIvkNKDNOyWcMdXRC7F0ZtBLG4Bq59jRY9m9GJcshSiVqBBGQBGFB7yYAyOmqseoH94f9sMW3btom4rup9VFB44nxhcstD8DgFSsYyWl7KnpJKEqDpLKHOofxgili3ZLklx4AjU4Axl/QvafUWkA9iaLquBFUHm7j+qNPUrGqSQnOlTqcgW0jD7VjLJWj/5H1TVnNWnxSk0aihiTVxyOZxo2kR5yEkbyqhDkqDGuBJoBgXDQ8pDOyTgEi6rLgMA2sctWNSN4JDpcZEtqDg8ZoTIONRv3QyfYVJdkhTJbdLGuIbLnDEuepCryFLSoMARX9eLwXLKfsKdYGLHd11UCMIam2QKNUrSSolwQcBR+BbAQRryDVHbLo9O/8QzvufhEdAq4NZn9yqPIa/V2j+8+qj9PD/aPkii0A391B7KKKYtmCcmdwBC1O5/eB1gZGgArmySzGG5awq4XlqdSlVDFg4BA1GBMNgF0JCSCbyqLdIJ11xeE6ab3ghnDPe6ck3arSi4qZMWBKQp1Ep0oEji7VjIulG1JlpnqnF7uCE+qkYBtTieJ4CDfTzpBfWLPKVelSu0r111BLjEDDmTwiqCeDjSOlsFj4Lb5GJS3GjcaVTThY0MGujFmsQStVrWoKvMlCQrACpJSMyWx9HjAlVnvEBPaJAHEksI0ro7PFlAlqSFIwJui8C1SDm+LQ3JaGREB2ql8L5Gmn5Q6zWnY6S4BcVBUmYquVC4hm3bbk2i02VMq8SmaSSUtQy1Bg9f0jTCiXMQFAJWkilARAS19GrMZyZ6ZYRMTgUUD5EpFCYNULOAoURG6muQiMqzFSSou5Pz3Q9evKCaUqfnT4xKCGAocCaFw+Y4+Ec/2raqkRN0zTsDKfEVmvTnZ16WmaO1LNw09EklHgq8P6kxSRGt7ckvKtKan7BRqM0kLB0fdyjLF2cmoja7HmL7PQ6GiStjKSVGqYjwwtUpQyhB7/CNZKLww2oQ6x0PgY4SSSKEDMx5eXtllel4fGHrKLwdQGeWT0h8MMIZ6kpqC8KTrSsIwOGS8TZ3mISMFqCPEge+NXs1hR9vKWKLkkADDtJfvAfueM76OIEy0yBT94DXCm9XwjT9oySlQmIAJSQ1cdQeDE04xhW+fhzR10xTzm1BbzWNiUUKUg4pJB5gsfZEyUaRetk7EkzbVaFrk3pSmUkq9FXppLHEu/cdDFnsfRixoVeTIQ/FyO4KJEbLZGvFWrKLC00KzPZWyLTNIVKlKIBCgo0TQv2jQ4ZRo1ltxFCXSSKEYat4RYgmKrMUASxN11GoyelYxu2G1uHx+i0ezwHXmnojaGUxASQVO6VaYE6mgBEcgnd7YqokFjrQmrCrgDSA1ltJQQd1TA8MdNHgpLWLrpC2CABdL9wB9IamMFzaJp8Zb4JSJgN0lSCySuoY1wP3RVjHiUMAyDuoPYVmcQAcdQTHs5faF8eijfTRzx9J3jxaAbzJSXUlO6piwxc5EVoIje8lXe8uab+qH17R+MR0EXjyIvlV4rlB3i6UkKUJeCktU5qOQpURUumHSFEiTckKBmzAUFaXAQlOITxL04F9Ise3drhaTJkumXeYqIrMb2JilbT2eFggsQS7jENRxxjVszIYZBfx58vLn9fez7PK+IkYHQffeCoUeGJdvsK5RZQocDkfz4REjqAQReaahYRBBukYqzdBdm35hmkG6gsnS8zk9wb8UXibJBAqczUfLNEPYNg6mShDOQlyQcVGqvPAwUlpJoCoUAdn79SRHKWyfiyl2mi6SzxcKINPmmdlSZ6aS1sntEA0JODA66wSRZ5xcqVMACXLV7gBir4xOEtLFIuHBDHEk4gnN3cCJdpS24Ae0LxScx30Aw41hds8lK3jQdd/hKyFpdlmoiEgXnKcAGUMzQOc3oGh5ScaaChYt5MzmPAquJqqgKdMQOFHcwlJBY7hclTg6UB4nAGFSSTUr1KIdaLPfVMFWUhaa/eQRThGRy42O02uVJkmfNvABVAC5JqWqcMTjGMSrQku3hHWdisLIzXWh36LLthBd4J9o65HiVQuNpJpF2PCmFmPFR5eUecphCBaNYRaFOrlT4/PCGTC8gqcUzDM6MfCVbfo9sl+2pUD2UKXzwTTuUfCNPmICwHulyT4UDDMigeMT2DtOZZpyZsssRQhgQQe0GPCNnsdtTMliYlSSCgHe1NKnBnBGEc32xA4OEmmS0IpuIaUQoIMmYFYIUWXVwAT2u4l+8iDp2nIArOl4esIZn2NJcFDpCQlknI0IAoAwqIAWzZPVLUgvQgAtQjEEcCDA7JbnRR0pXHe+iMYGzOxOKLbQ24C6JW9TtOwrpx44c4GGg9IUAGfeISlA+6at4e0iFNwNVZH28DpAZ7Q+Z1XJ6CBsQo1e3xUFiCQGI+XMLSpSFUzUDuqLKAwPkzQyFYVOZqMvc0OWZQICVXWqpKh6JP8ApOemPMYFRRFIwRizWoLZlLBKySCkFgBg+ScwY9lqBuF5SqqW+B0BA8iTAMKXKV6aVJFRj3HU+UE5VsC0qdUu8EBJCw1TiSfVOggL4y1LPhpi3Le80jf/AIA/v49ib+zpf8OX4R0V4jd1+6rxWbr/AMlXOyz3gwJL17idRDagCKlJZL1DY+wR6QzsFCgAavgOEerViHGISxHjzhpaFELtuywoEFDhsBXwGo1gfZujUoTAveF0ggGqScsamvGLLdd6AuoYHTXiNIUnEdoOo8f0EFZaJGAhpQHwRvILhiEpgXok1AxrTXiNIN2GzFIqFhSl5EGgrXRJaucQdlSgVJUSgiqg4Ylsxy1gzs+zXijdupCVLUpKnSHxp6Tu4pCbgXOuNzQbRJQUT9lmAJC1FypSurCksd01LfdyPGIspPZN1JqVOlVHOB+84MOWy1uSXKEpl0CkuAPRc5kNUPnDK09oNLUQkJYFjXEH1QaERWUjutyHrzPnh5USrWnM676c0tKmAJvhkkkEP4kO5GgiPbZrJNUFQRnQufYC2ESJiSL3bHZSCC/eBVsWJOkRbSoleoCnYp9Vi3GufGKMbecAvE0FVVfpJtQly5dnT6CQCOKqn/CP8UVLZdkkiUZk0CpZyHYUGHOCH0hKX9aUFYuT4sUv/S0NKssoSEJmLUgEDk53tI7iBoa0AaBYshJz1KjWjZkq6ZkpdEhyAXHgfjAn6yv1fOH7XIQhTIWFhsQ3hSGYu6Vy81gSevX6o8YSqavgIXHiorxXKbgTNc6x4YcUIKHo+sgFC0kEOLzg+QMEYb7aFDcLpqEKlikab9HFoWbMUki6Jl1L1yCiGyBGB4RnSbOQSk+iSDzBrFt6DbW6md1ai0uawPBQe4fMjvGkI22zuks76Z5jyxTEUgbIFogANWQXXiC3ZwJ1UCGaFbSsxmyRMAIXKJChQuhzdfgMobSvAuhRCCqoumuB+6DV4l7LZKwkpISUXCyqbxrThTe0JjlrORfuuyOH2Pzp5VWq4lvxDTfsqqF4VGBNQx/KEgYUwB7J10HvibtmyGTMWhywYAqTSvHN3iCsO9EmoFCx4vy0ghaWmhWmxwc0OGRXKUwNVBkjEP38THkwY9k0A05gmPS7+kHVzw9gjpSwWCiGKiQ4wb5rw5RLQr9VMlJ64dXUTAwlqB7QFbh0Pqvy0aBfIOJBvYFOmIjjLIIBSxBJLHP3vBBf26L4cTkJdaW/eJ9cN6Y9IDHHWCht8U1Hr/Pv7j7ngfT+D6eGTf7cX66PCOgR1n30/h/KOgfCZv8ACL+nj5b+Sk2Xtn+ceyHzlHsdHn6KHZqGntI/mVEmy9kfOcdHR6TLfVWflvqjv/S/8SvYIe2Z+5nf2En2rj2Oitk7x8Hf6lZT+4fEf7BShAzaeCv7SX7Ux0dCcfeVYe/vmpNn7Uz+1V7BCl9ru94jo6DQ/vBDmyWW9Ov+btH8w/yJhnpH+6RzH+Ux0dHbs/aH+IWOe95lV9ELjo6Aoq6PFR0dHl5Ji5bM/dS/5B7BHR0GhzKHJkgVu/er/mPthEntJ5j2x0dDGiCth2r+7mfyH3wzL7c7/wAfsjo6Pno7p3yXSM7m+bUT6ZYp7v8AVFMm4j+090dHRo2j/wAh/iUbs79kJVnw/qV7TDq46Ohd2acPeTFqxR/9dP8AkEFOjH/MSef+lUdHQ2399v8AkPdDn/Yd/ifZTI6OjoZSS//Z",
    categories: ['all,', '2P'],
    error: false
  },
  {
    name: "2D Rocket League",
    link: "https://v6p9d9t4.ssl.hwcdn.net/html/3325334/index.html",
    image: "/images/icons/2D-Rocket-League.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "3D Dino Game",
    link: "https://lagged.com/api/play2/t-rex-3d2/",
    image: "/images/icons/trex-run-3D.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "60 Sec. Burger Run",
    link: "https://www.coolmathgames.com/0-60-second-burger-run/play",
    image: "/images/icons/60-second-burger-run.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "8 Ball Pool",
    link: "https://8ball-pool.io",
    image: "/images/icons/8ball.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "A Dark Room",
    link: "https://adarkroom.doublespeakgames.com",
    image: "/images/icons/ADR.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Ace Attorney",
    link: "http://web.aceattorneyonline.com/",
    image: "/images/icons/aa.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "AC - Wild World",
    link: "https://static.arcadespot.com/retroemulator.php?system=nds&game=2017/10/animal-crossing-wild-world1.zip",
    image: "/images/icons/acww.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Adventure Capitalist",
    link: "https://than1089.github.io/adventure-capitalist/",
    image: "/images/icons/adventure-capitalist.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Agar.io",
    link: "https://agar.io",
    image: "/images/icons/agario.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Among Us (Scratch)",
    link: "https://turbowarp.org/523967150/fullscreen",
    image: "/images/icons/scratch-among-us.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Apex Legends",
    link: "https://play.geforcenow.com/games?game-id=cb2b1b5f-54ba-45fd-9839-96bbfe1376cd&lang=en_US&asset-id=01_c6efce00-e91e-402a-8b72-f4971f89c528",
    image: "/images/icons/apex.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Basket Random",
    link: "https://html5.gamedistribution.com/rvvASMiM/bf1268dccb5d43e7970bb3edaa54afc8/index.html",
    image: "/images/icons/br.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Basketball Stars",
    link: "https://html5.gamedistribution.com/69d78d071f704fa183d75b4114ae40ec/",
    image: "/images/icons/basketball-stars.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Basketball Bros",
    link: "https://www.basketbros.io/",
    image: "/images/icons/basket-bros.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Basketball Legends",
    link: "https://www.basketballlegends.fun/gamedata/basketball-legends-2020",
    image: "/images/icons/basketball-legends.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Biggie Cheese Fight",
    link: "https://scratch.mit.edu/projects/163771748/fullscreen",
    image: "/images/icons/biggiecheese.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Bitlife",
    link: "https://xlegends.github.io/bitlife/",
    image: "/images/icons/bitlife.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "BTD 4",
    link: "https://en.gameslol.net/data/bloons-td-4/index.html",
    image: "/images/icons/btd4.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "BuildNow.GG",
    link: "https://games.crazygames.com/en_US/buildnow-gg/index.html",
    image: "/images/icons/build-now.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Cat Ninja",
    link: "https://4iapq88o5f3gc1dij3it0mp5jojnm3jr-a-sites-opensocial.googleusercontent.com/gadgets/ifr?url=https://s3.amazonaws.com/production-assetsbucket-8ljvyr1xczmb/1ee20621-61bc-4ec8-a8ec-5e839c2e6edc%252Fcat-ninja.xml",
    image: "/images/icons/cat-ninja.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Candy Box",
    link: "https://candybox2.net",
    image: "/images/icons/candybox.webp",
    categories: ["all"],
    error: false
  },
    {
      name: "Celeste PICO-8",
      link: "https://exok.com/minigames/celeste.html",
      image: "/images/icons/celeste.webp",
      categories: ["all"],
      error: false
    },
    {
      name: "Clicker Heros",
      link: "https://www.clickerheroes.com/play.html",
      image: "/images/icons/clickerheros.webp",
      categories: ["all"],
      error: false
    },
    {
      name: "Chess.com (Fixed)",
      link: "https://chess.com",
      image: "/images/icons/chess.webp",
      categories: ["all"],
      error: false
    },
    {
      name: "Cluster Rush",
      link: "https://interstellarnetwork.github.io/Interstellar-Assets/play/cluster-rush/index.html",
      image: "/images/icons/cluster-rush.webp",
      categories: ["all"],
      error: false
    },
    {
      name: "Cookie Clicker",
      link: "https://orteil.dashnet.org/cookieclicker/",
      image: "/images/icons/cookieclicker.webp",
      categories: ["all"],
      error: false
    },
    {
      name: "Crossy Road",
      link: "https://5dd2e1e3-015f-11ea-ad56-9cb6d0d995f7.poki-gdn.com/169dc11d-e718-4b36-9e60-d5ed5bc07a31/index.html",
      image: "/images/icons/cr.webp",
      categories: ["all"],
      error: false
    },
    {
      name: "Deepest Sword",
      link: "https://v6p9d9t4.ssl.hwcdn.net/html/4017918/index.html",
      image: "/images/icons/deepest-sword.webp",
      categories: ["all"],
      error: false
    },
    {
      name: "Diep.io",
      link: "https://diep.io/",
      image: "/images/icons/diep.webp",
      categories: ["all"],
      error: false
    },
    {
      name: "Doge Miner 1",
      link: "https://dogeminer.se/",
      image: "/images/icons/doge-miner-1.webp",
      categories: ["all"],
      error: false
    },
    {
      name: "Doom 1",
      link: "https://browncha023.github.io/GBA/launcher.html#dm",
      image: "/images/icons/doom1.webp",
      categories: ["all"],
      error: false
    },
    {
      name: "Doom 2",
      link: "https://browncha023.github.io/GBA/launcher.html#dm2",
      image: "/images/icons/doom2.webp",
      categories: ["all"],
      error: false
    },
    {
      name: "Dreader",
      link: "https://donitz.itch.io/dreader",
      image: "/images/icons/dreader.webp",
      categories: ["all"],
      error: false
    },
    {
      name: "Drift Boss",
      link: "https://watchdocumentaries.com/wp-content/uploads/games/drift-boss/",
      image: "/images/icons/db.webp",
      categories: ["all"],
      error: false
    },
    {
      name: "Drift Hunters",
      link: "https://webglmath.github.io/drift-hunters/",
      image: "/images/icons/drift-hunters.webp",
      categories: ["all"],
      error: false
    },
    {
      name: "Drive Mad",
      link: "https://raw.githack.com/3kh0/3kh0-assets/main/drive-mad/index.html",
      image: "/images/icons/dm.webp",
      categories: ["all"],
      error: false
    },
    {
      name: "Eaglercraft 1.8",
      link: "https://adfree3kh0.github.io/projects/precision-client/index.html",
      image: "/images/icons/mc.webp",
      categories: ["all"],
      error: false
    },
    {
      name: "Fallout 2",
      link: "https://jonasz-o.itch.io/fallout2remake3d",
      image: "/images/icons/fallout2.gif",
      categories: ["all"],
      error: false
    },
    {
      name: "FNAF 2 (Scratch)",
      link: "https://scratch.mit.edu/projects/469219637/embed/",
      image: "/images/icons/fnaf2.webp",
      categories: ["all"],
      error: false
    },
    {
      name: "Friday Night Funkin'",
      link: "https://w8.snokido.com/games/html5/friday-night-funkin/0281/index.html",
      image: "/images/icons/fnf.webp",
      categories: ["all"],
      error: false
    },
    {
      name: "FNF - Lofi Mod",
      link: "https://fnf.kdata1.com/lofi-funkin/2/",
      image: "/images/icons/lofi.webp",
      categories: ["all"],
      error: false
    },
    {
      name: "FNF VS. Snorlax",
      link: "https://fnf.kdata1.com/snorlax/1/",
      image: "/images/icons/snorlax.webp",
      categories: ["all"],
      error: false
    },
      {
        name: "JustFall.LOL",
        link: "https://justfall.lol",
        image: "/images/icons/just-fall-lol.webp",
        categories: ["all"],
        error: false
      },
      {
        name: "Kirby Mirror (GBA)",
        link: "https://www.retrogames.onl/gba/kirby-mirror-gba.html",
        image: "/images/icons/kirby.webp",
        categories: ["all"],
        error: false
      },
      {
        name: "Krunker",
        link: "https://krunker.io",
        image: "/images/icons/krunker.webp",
        categories: ["all"],
        error: false
      },
      {
        name: "G-Switch",
        link: "https://5dd24442-015f-11ea-ad56-9cb6d0d995f7.poki-gdn.com/4f2c69b4-3edc-4cd7-a078-efd3d1ea9fb5/index.html",
        image: "/images/icons/gswitch.webp",
        categories: ["all"],
        error: false
      },
      {
        name: "G-Switch 2",
        link: "https://5dd27095-015f-11ea-ad56-9cb6d0d995f7.poki-gdn.com/e0e70ee4-fdd4-4de8-931d-fde7d1cb408b/index.html",
        image: "/images/icons/gswitch2.webp",
        categories: ["all"],
        error: false
      },
      {
        name: "G-Switch 3",
        link: "https://5dd2b395-015f-11ea-ad56-9cb6d0d995f7.poki-gdn.com/120fdec6-7eeb-470f-a43c-9bcdace0dacb/index.html",
        image: "/images/icons/gswitch3.webp",
        categories: ["all"],
        error: false
      },
      {
        name: "Golden Eye 007",
        link: "https://f.kbhgames.com/r/n64/game.php?file=007-golden-eye.zip",
        image: "/images/icons/golden-eye-007.webp",
        categories: ["all"],
        error: false
      },
      {
        name: "GBA Games 2",
        link: "https://cattn.github.io/gba/",
        image: "/images/icons/gba.webp",
        categories: ["all"],
        error: false
      },
      {
        name: "Geforce NOW",
        link: "https://play.geforcenow.com",
        image: "/images/icons/apps/geforce-now.webp",
        categories: ["all"],
        error: false
      },
      {
        name: "Haunted School 1",
        link: "https://games.crazygames.com/en_US/haunted-school---horror-game/index.html",
        image: "/images/icons/na.webp",
        categories: ["all"],
        error: false
      },
      {
        name: "Helixteus 3",
        link: "https://hole-io.com/",
        image: "/images/icons/helixteus.webp",
        categories: ["all"],
        error: false
      },
      {
        name: "Hole.IO",
        link: "https://hole-io.com/",
        image: "/images/icons/hole.webp",
        categories: ["all"],
        error: false
      },
      {
        name: "Idle Breakout",
        link: "https://interstellarnetwork.github.io/Interstellar-Assets/play/idle-breakout/index.html",
        image: "/images/icons/idle.webp",
        categories: ["all"],
        error: false
      },
      {
        name: "Isleward",
        link: "https://play.isleward.com",
        image: "/images/icons/isleward.webp",
        categories: ["all"],
        error: false
      },
      {
        name: "Interactive Buddy",
        link: "https://f.silvergames.com/ruffle/player.php?id=204",
        image: "/images/icons/interactive-buddy.webp",
        categories: ["all"],
        error: false
      },
      {
        name: "Jacksmith",
        link: "https://www.coolmathgames.com/0-jacksmith/play",
        image: "/images/icons/jacksmith.webp",
        categories: ["all"],
        error: false
      },
      {
        name: "Learn To Fly Idle",
        link: "https://www.gameslol.net/data/waflash/index.php?g=635",
        image: "/images/icons/ltf_idle.webp",
        categories: ["all"],
        error: false
      },
      {
        name: "Lordz.io",
        link: "https://lordz.io/",
        image: "/images/icons/lordz.webp",
        categories: ["all"],
        error: false
      },
      {
        name: "Masked IO",
        link: "https://unblocked-games.s3.amazonaws.com/games/masked-io/index.html",
        image: "/images/icons/masked-forces.webp",
        categories: ["all"],
        error: false
      },
      {
        name: "Mario Kart 64",
        link: "https://static.arcadespot.com/retroemulator.php?system=n64&game=2017/06/mario-kart-64.zip",
        image: "/images/icons/mario-kart-64.webp",
        categories: ["all"],
        error: false
      },
      {
        name: "Mobs Inc",
        link: "https://overboy.itch.io/mobs-inc",
        image: "/images/icons/mobsinc.webp",
        categories: ["all"],
        error: false
      },  
      {
        name: "Monkey Mart",
        link: "https://html5.gamemonetize.co/ugi7ftbv2kgodcq7vful9u9v34wein5z/",
        image: "/images/icons/mm.webp",
        categories: ['all'],
        error: false
      },
      {
        name: "MooMoo.io",
        link: "https:/moomoo.io",
        image: "/images/icons/moo.webp",
        categories: ['all'],
        error: false
      },
      {
        name: "Mortal Kombat 4",
        link: "https://f.kbhgames.com/r/n64/game.php?file=Mortal-Kombat-4-U.zip",
        image: "/images/icons/na.webp",
        categories: ['all'],
        error: false
      },
      {
        name: "Mr.Mine",
        link: "https://www.coolmathgames.com/0-mr-mine/play",
        image: "/images/icons/mrmine.webp",
        categories: ['all'],
        error: false
      },
      {
        name: "Moto X3M",
        link: "https://html5.gamedistribution.com/rvvASMiM/5b0abd4c0faa4f5eb190a9a16d5a1b4c/index.html",
        image: "/images/icons/mx3m.webp",
        categories: ['all'],
        error: false
      },
      {
        name: "MX3M: Pool Party",
        link: "https://h0jokl1egt0fd4oc8qv3j0tltl9jbqhn-a-sites-opensocial.googleusercontent.com/gadgets/ifr?url=https://649025137-174029463385024710.preview.editmysite.com/uploads/b/139890129-767696982876512205/files/mx3mpp.xml",
        image: "/images/icons/mx3m.webp",
        categories: ['all'],
        error: false
      },
      {
        name: "MX3M: Spooky Land",
        link: "https://html5.gamedistribution.com/rvvASMiM/b8a342904608470a9f3382337aca3558/index.html",
        image: "/images/icons/mx3m-spooky.webp",
        categories: ['all'],
        error: false
      },
      {
        name: "MX3M: Winter",
        link: "https://www-sites-opensocial.googleusercontent.com/gadgets/ifr?url=https://sites.google.com/site/s017q3e/moto-x3m-4-winter.xml",
        image: "/images/icons/mx3m-winter.webp",
        categories: ['all'],
        error: false
      },
      {
        name: "Saul Run",
        link: "https://complex-ify.itch.io/saul-goodman",
        image: "/images/icons/saulrun.webp",
        categories: ['all'],
        error: false
      },
      {
        name: "NG Space Company",
        link: "https://interstellarnetwork.github.io/interstellar-assets/play/ng-space-company/frontend/dist/index.html",
        image: "/images/icons/ng.webp",
        categories: ['all'],
        error: false
      },
      {
        name: "Ninja Cat Exploit",
        link: "https://html5.gamedistribution.com/rvvASMiM/903ba9346b9d437e9c7e81d672cead44/index.html",
        image: "/images/icons/ninja-cat.webp",
        categories: ['all'],
        error: false
      },
      {
        name: "Now.GG - Astroid",
        link: "https://nowgg.wtf",
        image: "/images/icons/now-gg.webp",
        categories: ['all'],
        error: false
      },
      {
        name: "OvO",
        link: "https://8rlfg0ch3417et18dp8lvps6uo7c3b2c-a-sites-opensocial.googleusercontent.com/gadgets/ifr?url=https://427396048-642845047394716217.preview.editmysite.com/uploads/b/139890129-761103484729797659/files/ovo.xml",
        image: "/images/icons/ovo.webp",
        categories: ['all'],
        error: false
      },
      {
        name: "Online Racing Game!",
        link: "https://jchabin.github.io/cars/",
        image: "/images/icons/OR.png",
        categories: ['all'],
        error: false
      },
      {
        name: "Online Soccer M.",
        link: "https://www.onlinesoccermanager.com/",
        image: "/images/icons/osm.webp",
        categories: ['all'],
        error: false
      },
      {
        name: "Papa's Bakeria",
        link: "https://f.silvergames.com/emu/waffle/?id=5458",
        image: "/images/icons/bakeria.webp",
        categories: ['all'],
        error: false
      },
      {
        name: "Papa's Cupcakeria",
        link: "https://f.silvergames.com/emu/waffle/?id=3246",
        image: "/images/icons/cupcakeria.webp",
        categories: ['all'],
        error: false
      },
      {
        name: "Papa Louie 1",
        link: "https://f.silvergames.com/ruffle/player.php?id=1373",
        image: "/images/icons/louie1.webp",
        categories: ['all'],
        error: false
      },
      {
        name: "Papa Louie 2",
        link: "https://f.silvergames.com/emu/waffle/?id=3042",
        image: "/images/icons/louie2.webp",
        categories: ['all'],
        error: false
      },
      {
        name: "Papa Louie 3",
        link: "https://f.silvergames.com/emu/waffle/?id=4693",
        image: "/images/icons/papa-louie-3.webp",
        categories: ['all'],
        error: false
      },
      {
        name: "Papa's Pizzeria",
        link: "https://f.silvergames.com/ruffle/player.php?id=1360",
        image: "/images/icons/pizzeria.webp",
        categories: ['all'],
        error: false
      },
      {
        name: "Paper Mario 64",
        link: "https://f.kbhgames.com/r/n64/game.php?file=Paper%20Mario%20(USA).zip",
        image: "/images/icons/paper-mario-64.webp",
        categories: ['all'],
        error: false
      },    
      {
    name: "Paper Mario 64",
    link: "https://f.kbhgames.com/r/n64/game.php?file=Paper%20Mario%20(USA).zip",
    image: "/images/icons/paper-mario-64.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Paper.io",
    link: "https://paper-io.com/",
    image: "/images/icons/paperio.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Pixel Shooter",
    link: "https://94bfktj403i6m18as4vkvtreqd0ohci4-a-sites-opensocial.googleusercontent.com/gadgets/ifr?url=https://274019683-173520394482650759.preview.editmysite.com/uploads/b/139890129-131715539788281629/files/ps.xml",
    image: "/images/icons/pixel-shooter.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Pizza Tower",
    link: "https://gamaverse.com/c/f/g/pizza-tower-1678640389/index.html",
    image: "/images/icons/pizza-tower.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Pokemon Heart Gold",
    link: "https://static.arcadespot.com/retroemulator.php?system=nds&game=2017/10/pokemon-heartgold-version1.zip",
    image: "/images/icons/heartgold.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Pokemon Showdown",
    link: "https://play.pokemonshowdown.com",
    image: "/images/icons/showdown.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "PM: Light Platinum",
    link: "https://browncha023.github.io/GBA/launcher.html#pokemonlp",
    image: "/images/icons/lp.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Precision Client",
    link: "http://raw.githack.com/3kh0/3kh0-assets/main/precision-client/index.html",
    image: "/images/icons/precision.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Rainbow Six Siege",
    link: "https://play.geforcenow.com/games?game-id=1dd07d47-6601-42f7-80e9-e4d8db08ea1b&lang=en_US&asset-id=01_44417-48c3d8e642e2",
    image: "/images/icons/r6.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Red Ball 1",
    link: "https://www.algebrashelper.com/redball",
    image: "/images/icons/redball1.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Red Ball 2",
    link: "https://www.algebrashelper.com/redball-2",
    image: "/images/icons/redball2.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Red Ball 4",
    link: "https://www.algebrashelper.com/redball-4",
    image: "/images/icons/redball4.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Red Ball 4 Vol. 2",
    link: "https://www.algebrashelper.com/read-ball-4v2",
    image: "/images/icons/redball4vol2.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Red Ball 4 Vol. 3",
    link: "https://www.algebrashelper.com/red-ball-4v3",
    image: "/images/icons/redball4vol3.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Retro Arch",
    link: "https://binbashbanana.github.io/webretro/",
    image: "/images/icons/retroarch.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Riddle School 2 [FIXED]",
    link: "https://f.silvergames.com/ruffle/player.php?id=8564",
    image: "/images/icons/rs1.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Rocket Pult",
    link: "https://v6p9d9t4.ssl.hwcdn.net/html/565140/index.html",
    image: "/images/icons/rocketpult.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Rooftop Snipers",
    link: "https://html5.gamedistribution.com/rvvASMiM/c3a70ae98547407a92ebedca8b79fdfa/index.html",
    image: "/images/icons/rooftop.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Sand Spiel",
    link: "https://sandspiel.club/",
    image: "/images/icons/sand.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Sandboxels",
    link: "https://v6p9d9t4.ssl.hwcdn.net/html/5808591/index.html",
    image: "/images/icons/sandboxels.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Shapez.IO",
    link: "https://shapez.io",
    image: "/images/icons/shapezio.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Shell Shockers",
    link: "https://shellshock.io/",
    image: "/images/icons/shell-shockers.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Slither Io",
    link: "http://slither.io/",
    image: "/images/icons/slither.webp",
    categories: ['all'],
    error: false
  },
    {
      name: "Smash Bros 64",
      link: "https://emulatorgames.online/games/n64/super-smash-bros",
      image: "/images/icons/super-smash-bros-64.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "Smash Karts",
      link: "https://smashkarts.io/",
      image: "/images/icons/smashkarts.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "Snowball.io",
      link: "https://games.crazygames.com/en_US/snowball-io/index.html",
      image: "/images/icons/snowball.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "Space Plan",
      link: "http://jhollands.co.uk/spaceplan/",
      image: "/images/icons/spaceplan.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "Stumble Guys",
      link: "https://www.stumbleguys.com/play",
      image: "/images/icons/stumble-guys.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "Stumble Guys Clone",
      link: "https://stumble-guys.io/stumble-guys.embed",
      image: "/images/icons/stumble-guys.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "Sugar Sugar HTML5",
      link: "https://66564262-37c6-4095-a731-535342e4bbe4.poki-gdn.com/5bd6e8c6-381d-4de5-9823-96662d29afaf/index.html",
      image: "/images/icons/sugarsugar.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "Super Mario 63",
      link: "https://www.numuki.com/gameframe/super-mario-63",
      image: "/images/icons/sm63.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "Super Mario 64",
      link: "https://f.kbhgames.com/r/n64/game.php?file=32112_super-mario-64-usa.zip",
      image: "/images/icons/sm64.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "Super Smash Flash",
      link: "https://f.kbhgames.com/RS/game.php?r=//f.kbhgames.com/2018/swf/smashflash.swf&w=1521&h=753",
      image: "/images/icons/ssf1.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "Supply Chain Idle",
      link: "http://chat.kongregate.com/gamez/0027/1653/live/index.html?kongregate_game_version=1554392772",
      image: "/images/icons/na.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "Taming.io",
      link: "https://taming.io/",
      image: "/images/icons/tamingio.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "Tanuki Sunset",
      link: "https://watchdocumentaries.com/wp-content/uploads/games/tanuki-sunset",
      image: "/images/icons/tanuki.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "The Simpsons",
      link: "https://static.arcadespot.com/retroemulator.php?system=nds&game=2017/11/the-simpsons-game.zip",
      image: "/images/icons/the-simpsons-game.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "Temple Run 2",
      link: "https://watchdocumentaries.com/wp-content/uploads/games/temple-run-2/",
      image: "/images/icons/temple-run-2.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "Twitch Tetris",
      link: "https://www.rossipotti.de/ausgabe28/tetris/controls.html",
      image: "/images/icons/na.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "Vex 5",
      link: "https://raw.githack.com/3kh0/3kh0-assets/main/vex5/index.html",
      image: "/images/icons/vex5.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "Vex 7",
      link: "https://interstellarnetwork.github.io/interstellar-assets/play/vex7/index.html",
      image: "/images/icons/vex7.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "Voxiom.io",
      link: "https://voxiom.io/",
      image: "/images/icons/voxiom.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "Zombs.io",
      link: "https://zombs.io/",
      image: "/images/icons/zombs-io.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "Zombs Royale",
      link: "https://zombsroyale.io",
      image: "/images/icons/zombs-royale.webp",
      categories: ['all,', '2P'],
      error: false
    },
    {
    name: "GBA Games",
    link: "https://real-sgs.vercel.app/Tools/GBA-Emulator",
    image: "/images/icons/gba.webp",
    categories: ["all"],
    error: false
      },
  ];
  
  appsList.sort((a, b) => a.name.localeCompare(b.name));
  
  const nonPinnedApps = document.querySelector('.container-apps');
  const pinnedApps = document.querySelector('.pinned-apps');
  var pinList = localStorage.getItem("pinnedGames");
  try{
    pinList=pinList.split(",").map(Number)
    } catch {}
  var appInd = 0;
  appsList.forEach(app => {
    let pinNum = appInd
    const columnDiv = document.createElement('div');
    columnDiv.classList.add('column');
    columnDiv.setAttribute('data-category', app.categories.join(' '));

    const pinIcon = document.createElement('i');
    pinIcon.classList.add("fa");
    pinIcon.classList.add("fa-map-pin");
    pinIcon.ariaHidden = true;

    const btn = document.createElement('button');
    btn.appendChild(pinIcon);
    btn.style.float = "right";
    btn.style.backgroundColor="rgb(45,45,45)";
    btn.style.borderRadius="50%";
    btn.style.borderColor="transparent";
    btn.style.color="white";
    btn.style.top="-200px";
    btn.style.position="relative";
    btn.onclick = function () {
      setPin(pinNum);
    };
    btn.title="Pin";

    const link = document.createElement('a');
    link.setAttribute('onclick', `go('${app.link}')`);

    const image = document.createElement('img');
    image.width = 145;
    image.height = 145;
    image.src = app.image;

    const paragraph = document.createElement('p');
    paragraph.textContent = app.name;
    if (app.error) {
      paragraph.style.color = 'red';
    }

    link.appendChild(image);
    link.appendChild(paragraph);
    columnDiv.appendChild(link);
    if(appInd != 0) {
      columnDiv.appendChild(btn);
    }

    if(pinList!=null && appInd != 0) {
      if(pinContains(appInd,pinList)) {
        pinnedApps.appendChild(columnDiv);
      }
      else {
        nonPinnedApps.appendChild(columnDiv);
      }
    }
    else {
      nonPinnedApps.appendChild(columnDiv);
    }
    appInd++;
  });
  appsContainer.appendChild(pinnedApps);
  appsContainer.appendChild(nonPinnedApps);
});
function setPin(index) {
  pins = localStorage.getItem("pinnedGames");
  if(pins == null) {
    pins = [];
  }
  if(pins == "") {
    pins = [];
  }
  else {
    pins = pins.split(",").map(Number);
  }
  if(pinContains(index,pins)) {
    let remove = pins.indexOf(index);

    pins.splice(remove, 1);

  }
  else {
    pins.push(index);
  }
  localStorage.setItem("pinnedGames", pins);
  location.reload();
}
function pinContains(i,p) {
  if(p=="") {return false;}
  for(var x = 0; x < p.length; x++) {if(p[x]===i) {
    return true;
  }}
  return false;
}

function showImages() {
  var selectedCategories = Array.from(document.querySelectorAll("#category option:checked")).map(option => option.value);
  var games = document.getElementsByClassName("column");

  for (var i = 0; i < games.length; i++) {
    var game = games[i];
    var categories = game.getAttribute("data-category").split(" ");

    if (selectedCategories.length === 0 || selectedCategories.some(category => categories.includes(category))) {
      game.style.display = "block";
    } else {
      game.style.display = "none";
    }
  }
}

function search_game() {
  var input = document.getElementById("searchbarbottom");
  var filter = input.value.toLowerCase();
  var games = document.getElementsByClassName("column");

  for (var i = 0; i < games.length; i++) {
    var game = games[i];
    var name = game.getElementsByTagName("p")[0].textContent.toLowerCase();

    if (name.includes(filter)) {
      game.style.display = "block";
    } else {
      game.style.display = "none";
    }
  }
}
