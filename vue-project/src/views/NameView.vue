<template>
    <h2> Here are some of Mel and I's favorite names. </h2>
    <button class="button-3">Generate</button>
</template>

<script>
const names = [
    {name: "Kai",
    japanese: "かい"
    },
    {name: "Sakura",
    japanese: "さくら"
    },
    {name: "Mochi",
    japanese: "もち"
    },
    {name: "Bakugou",
    japanese: "爆豪"
    },
    {name: "Ash Ketchum"
    },
    {name: "Kawaii"
    },
    {name: "Lettuce"
    },
    {name: "Deku"
    },
    {name: "Sugoi"
    },
    {name: "Naruto"
    },
    {name: "Sasuke"
    },
]

function randomize (array) {
    const randomInt = Math.floor(Math.random() * array.length);
    return array[randomInt]
}

const randomName = randomize(names)
console.log(randomName)

</script>


<style>
.button-3 {
    background-color: #4ca3ea;
    border-radius: 8px;
    border-style: none;
    box-sizing: border-box;
    color: #FFFFFF;
    cursor: pointer;
    font-size: 14px;
    height: 40px;
    margin: 0;
    outline: none;
    padding: 10px 16px;
    width: 100px;
    text-align: center;
    transition: color 100ms;
  }
  
  .button-3:hover,
  .button-3:focus {
    background-color: #82bbf0;
  }
</style>