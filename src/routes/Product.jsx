import { Button, Image } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const Product = () => {
  const {id} = useParams()
  const products = [
    {
      "sku": "А112Т4",
      "name": "Боксерская груша",
      "unitofmeasurement": "шт.",
      "price": 778,
      "maxdiscountsize": 30,
      "manufacturer": "X-Match",
      "supplier": "Спортмастер",
      "category": "Спортивный инвентарь",
      "currentdiscount": 5,
      "stockquantity": 6,
      "description": "Боксерская груша X-Match черная",
      "image": "А112Т4.jpg"
    },
    {
      "sku": "G598Y6",
      "name": "Спортивный мат",
      "unitofmeasurement": "шт.",
      "price": 2390,
      "maxdiscountsize": 15,
      "manufacturer": "Perfetto Sport",
      "supplier": "Декатлон",
      "category": "Спортивный инвентарь",
      "currentdiscount": 2,
      "stockquantity": 16,
      "description": "Спортивный мат 100x100x10 см Perfetto Sport № 3 бежевый",
      "image": "G598Y6.jpg"
    },
    {
      "sku": "F746E6",
      "name": "Шведская стенка",
      "unitofmeasurement": "шт.",
      "price": 9900,
      "maxdiscountsize": 10,
      "manufacturer": "ROMANANext",
      "supplier": "Декатлон",
      "category": "Спортивный инвентарь",
      "currentdiscount": 3,
      "stockquantity": 5,
      "description": "Шведская стенка ROMANA Next, pastel",
      "image": "F746E6.jpg"
    },
    {
      "sku": "D830R5",
      "name": "Тренажерпрыжков",
      "unitofmeasurement": "шт.",
      "price": 1120,
      "maxdiscountsize": 15,
      "manufacturer": "MobyKids",
      "supplier": "Спортмастер",
      "category": "Спортивный инвентарь",
      "currentdiscount": 4,
      "stockquantity": 8,
      "description": "Тренажердляпрыжков MobyKids Moby-Jumper со счетчиком",
      "image": "D830R5.jpg"
    },
    {
      "sku": "B538G6",
      "name": "Спортивныйкостюм",
      "unitofmeasurement": "шт.",
      "price": 839,
      "maxdiscountsize": 5,
      "manufacturer": "playToday",
      "supplier": "Спортмастер",
      "category": "Одежда",
      "currentdiscount": 3,
      "stockquantity": 17,
      "description": "СпортивныйкостюмplayToday(футболка+шорты)",
      "image": "B538G6.jpg"
    },
    {
      "sku": "D648N7",
      "name": "Набордляхоккея",
      "unitofmeasurement": "шт.",
      "price": 350,
      "maxdiscountsize": 10,
      "manufacturer": "Совтехстром",
      "supplier": "Декатлон",
      "category": "Спортивный инвентарь",
      "currentdiscount": 4,
      "stockquantity": 7,
      "description": "НабордляхоккеяСовтехстром",
      "image": "D648N7.jpg"
    },
    {
      "sku": "F735B6",
      "name": "Игровойнабор",
      "unitofmeasurement": "шт.",
      "price": 320,
      "maxdiscountsize": 15,
      "manufacturer": "Совтехстром",
      "supplier": "Декатлон",
      "category": "Спортивный инвентарь",
      "currentdiscount": 2,
      "stockquantity": 9,
      "description": "ИгровойнаборСовтехстромКеглиишары",
      "image": "F735B6.jpg"
    },
    {
      "sku": "F937G4",
      "name": "Игровойнабор",
      "unitofmeasurement": "шт.",
      "price": 480,
      "maxdiscountsize": 10,
      "manufacturer": "Abtoys",
      "supplier": "Спортмастер",
      "category": "Спортивный инвентарь",
      "currentdiscount": 4,
      "stockquantity": 12,
      "description": "НаборAbtoysБадминтонитеннис",
      "image": "F937G4.jpg"
    },
    {
      "sku": "E324U7",
      "name": "Велотренажер",
      "unitofmeasurement": "шт.",
      "price": 6480,
      "maxdiscountsize": 25,
      "manufacturer": "DFC",
      "supplier": "Спортмастер",
      "category": "Спортивный инвентарь",
      "currentdiscount": 5,
      "stockquantity": 5,
      "description": "ВелотренажердвойнойDFCB804dualbike",
      "image": "E324U7.jpg"
    },
    {
      "sku": "G403T5",
      "name": "Тюбинг",
      "unitofmeasurement": "шт.",
      "price": 1450,
      "maxdiscountsize": 15,
      "manufacturer": "Nordway",
      "supplier": "Спортмастер",
      "category": "Спортивный инвентарь",
      "currentdiscount": 4,
      "stockquantity": 13,
      "description": "ТюбингNordway,73см",
      "image": "G403T5.jpg"
    },
    {
      "sku": "N483G5",
      "name": "Клюшка",
      "unitofmeasurement": "шт.",
      "price": 1299,
      "maxdiscountsize": 10,
      "manufacturer": "Nordway",
      "supplier": "Декатлон",
      "category": "Спортивный инвентарь",
      "currentdiscount": 3,
      "stockquantity": 4,
      "description": "КлюшкаNordwayNDW300(2019/2020)SRлев.19150см",
      "image": "N483G5.jpg"
    },
    {
      "sku": "D038G6",
      "name": "Лыжныйкомплект",
      "unitofmeasurement": "шт.",
      "price": 3000,
      "maxdiscountsize": 30,
      "manufacturer": "Nordway",
      "supplier": "Декатлон",
      "category": "Спортивный инвентарь",
      "currentdiscount": 4,
      "stockquantity": 23,
      "description": "ЛыжныйкомплектбеговыеNORDWAYXCClassic,45-45-45мм,160см",
      "image": "D038G6.jpg"
    },
    {
      "sku": "G480F5",
      "name": "Ролики",
      "unitofmeasurement": "шт.",
      "price": 1600,
      "maxdiscountsize": 15,
      "manufacturer": "Ridex",
      "supplier": "Спортмастер",
      "category": "Спортивный инвентарь",
      "currentdiscount": 4,
      "stockquantity": 7,
      "description": "КонькироликовыеRidexCricketжен.ABEC3кол.:72ммр.:3942синий",
      "image": "G480F5.jpg"
    },
    {
      "sku": "C324S5",
      "name": "Шлем",
      "unitofmeasurement": "шт.",
      "price": 4000,
      "maxdiscountsize": 10,
      "manufacturer": "Salomon",
      "supplier": "Декатлон",
      "category": "Спортивный инвентарь",
      "currentdiscount": 5,
      "stockquantity": 16,
      "description": "Шлемг.л./сноуб.SalomonGromр.:KSчерный(L40836800)",
      "image": "C324S5.jpg"
    },
    {
      "sku": "V312R4",
      "name": "Мяч",
      "unitofmeasurement": "шт.",
      "price": 4150,
      "maxdiscountsize": 20,
      "manufacturer": "Mikasa",
      "supplier": "Декатлон",
      "category": "Спортивный инвентарь",
      "currentdiscount": 2,
      "stockquantity": 5,
      "description": "МячволейбольныйMIKASAVT370W,длязала,5-йразмер,желтый/синий",
      "image": "V312R4.jpg"
    },
    {
      "sku": "J4DF5E",
      "name": "Насос",
      "unitofmeasurement": "шт.",
      "price": 300,
      "maxdiscountsize": 5,
      "manufacturer": "Molten",
      "supplier": "Спортмастер",
      "category": "Спортивный инвентарь",
      "currentdiscount": 4,
      "stockquantity": 12,
      "description": "НасосMoltenHP-18-Bдлямячеймультиколор",
      "image": "J4DF5E.jpg"
    },
    {
      "sku": "G522B5",
      "name": "Ласты",
      "unitofmeasurement": "шт.",
      "price": 1980,
      "maxdiscountsize": 15,
      "manufacturer": "Colton",
      "supplier": "Декатлон",
      "category": "Спортивный инвентарь",
      "currentdiscount": 3,
      "stockquantity": 6,
      "description": "ЛастыColtonCF-02дляплаванияр.:3334серый/голубой",
      "image": "G522B5.jpg"
    },
    {
      "sku": "K432G6",
      "name": "Шапочкадляплавания",
      "unitofmeasurement": "шт.",
      "price": 440,
      "maxdiscountsize": 25,
      "manufacturer": "Atemi",
      "supplier": "Декатлон",
      "category": "Спортивный инвентарь",
      "currentdiscount": 5,
      "stockquantity": 17,
      "description": "ШапочкадляплаванияAtemiPU140тканьспокрытиемжелтый",
      "image": "K432G6.jpg"
    },
    {
      "sku": "J532D4",
      "name": "Перчаткидлякаратэ",
      "unitofmeasurement": "шт.",
      "price": 1050,
      "maxdiscountsize": 15,
      "manufacturer": "Green Hill",
      "supplier": "Спортмастер",
      "category": "Спортивный инвентарь",
      "currentdiscount": 3,
      "stockquantity": 5,
      "description": "ПерчаткидлякаратэGreenHillKMС-6083Lкрасный",
      "image": "J532D4.jpg"
    },
    {
      "sku": "G873H4",
      "name": "Велосипед",
      "unitofmeasurement": "шт.",
      "price": 14930,
      "maxdiscountsize": 5,
      "manufacturer": "SKIF",
      "supplier": "Спортмастер",
      "category": "Спортивный инвентарь",
      "currentdiscount": 4,
      "stockquantity": 6,
      "description": "ВелосипедSKIF29Disc(2021),горный(взрослый),рама:17,колеса:29,темно-серый",
      "image": "G873H4.jpg"
    },
    {
      "sku": "V423D4",
      "name": "Штанга",
      "unitofmeasurement": "шт.",
      "price": 5600,
      "maxdiscountsize": 10,
      "manufacturer": "Starfit",
      "supplier": "Декатлон",
      "category": "Спортивный инвентарь",
      "currentdiscount": 3,
      "stockquantity": 8,
      "description": "ШтангаStarfitBB-40130кгпласт.черный",
      "image": "V423D4.jpg"
    },
    {
      "sku": "K937A5",
      "name": "Гиря",
      "unitofmeasurement": "шт.",
      "price": 890,
      "maxdiscountsize": 5,
      "manufacturer": "Starfit",
      "supplier": "Декатлон",
      "category": "Спортивный инвентарь",
      "currentdiscount": 4,
      "stockquantity": 10,
      "description": "ГиряStarfitГМБ4мягкое4кгсиний/оранжевый",
      "image": "K937A5.jpg"
    },
    {
      "sku": "F047J7",
      "name": "Коврик",
      "unitofmeasurement": "шт.",
      "price": 720,
      "maxdiscountsize": 15,
      "manufacturer": "Bradex",
      "supplier": "Спортмастер",
      "category": "Спортивный инвентарь",
      "currentdiscount": 5,
      "stockquantity": 11,
      "description": "КоврикBradexдлямягкоййогидл.:1730ммш.:610ммт.:3ммсерый",
      "image": "F047J7.jpg"
    },
    {
      "sku": "S374B5",
      "name": "Роликдляйоги",
      "unitofmeasurement": "шт.",
      "price": 700,
      "maxdiscountsize": 10,
      "manufacturer": "Bradex",
      "supplier": "Спортмастер",
      "category": "Спортивный инвентарь",
      "currentdiscount": 3,
      "stockquantity": 12,
      "description": "РоликдляйогиBradexТубаd=14смш.:33сморанжевый",
      "image": "S374B5.jpg"
    },
    {
      "sku": "F687G5",
      "name": "Защитаголени",
      "unitofmeasurement": "шт.",
      "price": 1900,
      "maxdiscountsize": 15,
      "manufacturer": "Green Hill",
      "supplier": "Спортмастер",
      "category": "Спортивный инвентарь",
      "currentdiscount": 4,
      "stockquantity": 6,
      "description": "ЗащитаголениGREENHILLPanther,L,синий/черный",
      "image": "F687G5.jpg"
    },
    {
      "sku": "N892G6",
      "name": "Очкидляплавания",
      "unitofmeasurement": "шт.",
      "price": 500,
      "maxdiscountsize": 5,
      "manufacturer": "Atemi",
      "supplier": "Декатлон",
      "category": "Спортивный инвентарь",
      "currentdiscount": 5,
      "stockquantity": 14,
      "description": "ОчкидляплаванияAtemiN8401синий",
      "image": "N892G6.jpg"
    },
    {
      "sku": "D893W4",
      "name": "Мяч",
      "unitofmeasurement": "шт.",
      "price": 900,
      "maxdiscountsize": 5,
      "manufacturer": "Demix",
      "supplier": "Спортмастер",
      "category": "Спортивный инвентарь",
      "currentdiscount": 2,
      "stockquantity": 5,
      "description": "МячфутбольныйDEMIX1STLS1JWWW,универсальный,4-йразмер,белый/зеленый",
      "image": "D893W4.jpg"
    },
    {
      "sku": "N836R5",
      "name": "Коньки",
      "unitofmeasurement": "шт.",
      "price": 2000,
      "maxdiscountsize": 10,
      "manufacturer": "Atemi",
      "supplier": "Декатлон",
      "category": "Спортивный инвентарь",
      "currentdiscount": 3,
      "stockquantity": 16,
      "description": "КонькиATEMIAKSK01DXS,раздвижные,прогулочные,унисекс,27-30,черный/зеленый",
      "image": "N836R5.jpg"
    },
    {
      "sku": "D927K3",
      "name": "Перчатки",
      "unitofmeasurement": "шт.",
      "price": 660,
      "maxdiscountsize": 15,
      "manufacturer": "Starfit",
      "supplier": "Декатлон",
      "category": "Спортивный инвентарь",
      "currentdiscount": 4,
      "stockquantity": 3,
      "description": "ПерчаткиStarfitSU-125атлетическиеSчерный",
      "image": "D927K3.jpg"
    },
    {
      "sku": "V392H7",
      "name": "Степ-платформа",
      "unitofmeasurement": "шт.",
      "price": 4790,
      "maxdiscountsize": 10,
      "manufacturer": "Starfit",
      "supplier": "Спортмастер",
      "category": "Спортивный инвентарь",
      "currentdiscount": 3,
      "stockquantity": 15,
      "description": "Степ-платформаStarfitSP-204серый/черный",
      "image": "V392H7.jpg"
    }
  ];
  const product = products.find(product => product.sku === id)
  console.log(product)
  return (
    <div className='shadow-[0px_0px_10px_-2px_rgba(34,60,80,0.2)] p-5 ml-auto mr-auto mt-10 mb-10 max-w-[1000px] w-[1000px]'>
      <p className='font-medium text-xl mb-10'>{product.name}</p>
      <div className='flex flex-row gap-3'>
        <Image src={`/images/${product.image}`} objectFit="contain" onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src="/images/picture.png";
        }} />
        <div className='flex flex-col gap-4 w-full'>
          <p>{product.description}</p>
          <p>{product.manufacturer}</p>
          <p>{product.price}</p>
          <p>Наличие на складе: {product.stockquantity}</p>
          <Button borderColor="rgb(118, 227, 131)" variant={'outline'} >Добавить в корзину</Button>
        </div>
      </div>
    </div>
  )
}

export default Product