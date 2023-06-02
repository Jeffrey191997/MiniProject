This repository contain backend and frontend as lukeandsnowy

## To run the frontend and backend in developmode 
use
```
    npm run start
```

# Personal lifestyle blog App

### All of the responses will be wrapped with this data before sending

| Parameter | Type | Description |
|-----|:----:|:-----|
| success| boolean | the status of request|
| msg | string | message for each request |
| data | JSON | the actual data |

#### http://localhost:8000/login
`POST /login`

 
#### Request Body 
| Parameter | Type | Description |
|----------|:-------------:|:------|
|usernameString|username
|password|String| password|


Example
```
   {
    "username": "Luke",
    "password": "12345678"
}


```


#### Success
Response

```
**noted: If success, the Response will be sent with cookie named UserToken**

### getAllPosts
#### http://localhost:8000/posts/allpost
`GET /posts/allpost` , 

#### Request Body 
No Request Body

#### Success

Response
#### Articles
the blog object
| Parameter | Type | Description |
|----------|:-------------:|:------|
| id | string | id of note |
| author_id | int | id of author |
| title | string | blog title |
| updatedAt | Date | latest updated time |
| published_at | Date | create Time |
| content | varchar | blog content |
| image_url | string | title image |
| category_id | int | id of category |

Example
```
["success": true,
    "data": [
        {
            "id": 1,
            "author_id": 1,
            "title": "Nigo ကို A Bathing Ape နဲ့ပဲ တွဲသိတာဆို အများကြီး သိဖို့ ကျန်သေးတယ် ",
            "published_at": "2023-04-04T17:00:00.000Z",
            "content": "Nigo တစ်ယောက်က A Bathing Ape လို Streetwear Scene မှာတင်မဟုတ်ပဲ collecting လို့ပဲ လွယ်လွယ် ပြောလို့ရတဲ့ figure collecting , art collecting , archival clothing piece collecting , artist merch collecting မှာလဲ တန်ဖိုးကြီး piece များစွာကို ပိုင်ဆိုင်သူ တစ်ယောက်ဖြစ်ပါတယ် \nအထူးသဖြင့် ရှေးခေတ်က American fashion ကို ရူးသွပ်သူ တစ်ယောက်လို့ ပြောလို့ရပြီး ဒီ ဝါသနာကို HUMAN MADE brand မှာ အတိအကျ ဖော်ပြထားတယ် \nဒါကြောင့်လဲ a bathing ape မဟုတ်တဲ့ သူ့ရဲ့ ဝါသနာကို ဖော်ပြချင်လို့ human made ကို ဖန်တီးခဲ့တာဖြစ်ပါတယ် \nအခု အောက်က ပုံတွေမှာတော့ HUAMN MADE ရဲ့ ဖန်တီးထားတဲ့ piece တွေနဲ့ Nigo တစ်ယောက် တိုက်ရိုက်သော်လည်းကောင်း သွယ်ဝိုက်သော်လည်းကောင်း မှီငြမ်းထားတဲ့ ရှေးက အဝတ်အစား piece , ကြေငြာ , graphic တွေကို ဗဟုသုတ ရအောင် ပြန်လည် share ပေးလိုက်ပါတယ်။",
            "image_url": "image1.jpeg",
            "category_id": 1
        },
]

```

### http://localhost:8000/post/detail?id=3
`GET /post/detail/`

### Parameter
| Parameter | Type | Description |
|----------|:-------------:|:------|
|id |String| id of blog


the blog object
| Parameter | Type | Description |
|----------|:-------------:|:------|
| id | string | id of note |
| author_id | int | id of author |
| title | string | blog title |
| updatedAt | Date | latest updated time |
| published_at | Date | create Time |
| content | varchar | blog content |
| image_url | string | title image |
| category_id | int | id of category |

Example
```
    {
    "success": true,
    "data": {
        "id": 2,
        "author_id": 2,
        "title": "Save the date for propose moment",
        "created_at": "2023-04-01T17:00:00.000Z",
        "updated_at": null,
        "published_at": "2023-04-01T17:00:00.000Z",
        "content": "တကယ်တော့ သူနဲ့ တူတူရှိခဲ့တာ ၁၀ စုနှစ် တစ်ခု ကျော်သွားပင်မဲ့ \nသော်တာနှင်း နဲ့ မင်းသက်စံ ရန်ဖြစ်လား မေးရင် နေ့တိုင်း စကားများ တဲ့ အတွဲထဲမှာ ပါတယ် \nဒါပင်မဲ့ ရန်ဖြစ်တာလားဆိုတော့ လည်းမဟုတ် ဘူး စကားများကြတာ \nကိုယ်ကလည်း ခေါင်းအရမ်းမာ ရွဲ့တတ် စကားနိုင်အရမ်း လုတတ်တဲ့ လူ\nသူကကြတော့လည်း ဘာမှန်းကို မသိတဲ့ လူ\nအဲ့မှာတင် တစ်နေ့ တစ်မျိုး စကားများတာ \nစကားများပြီး မခေါ်တာလည်းမရှိ အခု စကားများ အခု ပုံမှန်အတိုင်းပြန်ဖြစ်သွားတာ 😌\nအကြိုက်လည်း တူလားဆို လုံးဝ မတူ \nဟိုနေ့ကပဲ သူက သူရန်ကုန်ရောက်ရင် BurmeseHype အတွက် ရိုက်ကူးရေး လုပ်ဖို့တွေ တန်းစီ ကျန်နေကြောင်း ပြီးတော့ ဘယ်လိုလေးတွေ ရိုက်မယ်ဆိုတဲ့ အကြောင်းပြောရင်း \nကိုယ်က လည်း သူ့ကို စတာ ကိုကိုနဲ့ သဲလေး Luke & Snowy ဆိုပြီး ပေ့ချ်ထောင်ပီး blog ဘာညာ ရိုက်ရအောင်လို့ ( စတာ နော် ကိုယ်က အဲ့နေရာမှာ လုံးဝ talented မဖြစ်ပါ ) \nသူကလည်း လုပ်မယ်လေ တဲ့ ပြီးလည်းပြီးရော သူက ဘယ် လို မရိုက်ချင်ဘူး ရိုက်ချင်တယ် ငါက ဘယ်လို ရိုက်မယ် ဆိုတာနဲ့ တစ်ပွဲ ချပြီး \nစတဲ့ဇာတ်လမ်းက နေ တစ်ပွဲ ချ တဲ့ အဆင့် ရောက်ပြီး အဆုံးသတ်သွား တာပဲ \nအဲ့လိုပဲ ဇာတ်လမ်းစလိုက် တစ်ပွဲ ချ လိုက်နဲ့ ကိုယ်တွေ ဘဝကြီး က ပြောချင်တာကတော့ အချစ်တွေ ငြီးငွေ့မသွားပဲ သွေးပူနေဆဲ အချစ်တွေ ပေါ့ ",
        "image_url": "lifestyle3.jpeg",
        "category_id": 2,
        "deleted": 0,
        "category": "LifeStyle"
    },
    "error": null
}

```

### getAllPostsByPublishedDate
#### http://localhost:8000/latestpost/all
`GET /latestpost/all` , 

#### Request Body 
No Request Body

#### Success

Response
#### Articles
the blog object
| Parameter | Type | Description |
|----------|:-------------:|:------|
| id | string | id of note |
| author_id | int | id of author |
| title | string | blog title |
| updatedAt | Date | latest updated time |
| published_at | Date | create Time |
| content | varchar | blog content |
| image_url | string | title image |
| category_id | int | id of category |

Example
```
{
    "success": true,
    "data": [
        {
            "id": 3,
            "author_id": 2,
            "title": "Puppy's Mommy",
            "created_at": "2023-05-13T17:00:00.000Z",
            "updated_at": null,
            "published_at": "2023-05-14T17:00:00.000Z",
            "content": "ဘဝမှာ ခွေးအမေ လို့ ပထမ ဆုံး ခေါ်ခံရတုန်းကတော့ စိတ်ထဲက တစ်မျိုးကြီး ပေါ့ \nတစ်ခါတစ်လေတော့ လူတွေက ခွေးအမေလို့ ခေါ်တဲ့အခါ ကောင်းသော ခေါ်ခြင်းနဲ့ ခေါ်သလို တစ်ခါတစ်လေ တော့ ဒီ ခွေး အမေ က ခွေးတစ်ကောင်နဲ့ ရူးနေတာ ဘာ ဖြစ်တယ် ညာဖြစ်တယ် နဲ့ ဆိုး သော ခေါ်ခြင်း မျိုးနဲ့ လည်း ခေါ်တတ်ကြတယ်\nဒါပင်မဲ့ ဘယ်လို ခေါ်ခြင်းမျိုး နဲ့ ခေါ်ခေါ်\n• အရွယ်အစား သေးသေးကြီးကြီး ကျွေးမွေးပြုစုထားတဲ့ မိဘ ကို ဘယ်လို ပြန်ကာကွယ်ရမလဲ ဆိုတာ သိတာ \n• ဘဝ မှာ ကောင်းခြင်းဆိုးခြင်း တွေ မှန်သမျှကို ဘေးမှာ အတူတူရှိပေးတာ\n• မပြီးဆုံးတဲ့ ချစ် ခြင်းတွေ မရေမတွက်နိုင်တဲ့ နွေးထွေးမှု တွေ ပေးတာ\n• အဆုံးထိ ပြောရရင် လူတွေလို ငြီးငွေ့တာမျိုး မရှိပဲ သခင်ကို ဘယ်တော့ မဆို ရွေးချယ်တာ \nတစ်ဖြည်းဖြည်းနဲ့ သူတို့ နဲ့ နေတာကြာလာတာအမျှ ဒီလို ခွေးလေး တွေ မျိုးရဲ့ အမေ • ခွေးအမေ • လို့ ပြော တဲ့အခါ ဂုဏ်ယူတတ်လာတယ် \nဒါကြောင့် ခွေးအမေ ဘဝကို နှစ်သက်တယ် သဘောကျတယ် လူတွေက ကောင်းသော ခေါ်ချင်းနဲ့ပဲ ခေါ်ခေါ် မကောင်းသော ခေါ်ခေါ် ခွေးအမေ လို့ ခေါ်ခံရခြင်းဟာ ရှက်စရာမဟုတ်ပါ",
            "image_url": "puppy's_mommy1.jpeg",
            "category_id": 3,
            "deleted": 0,
            "category": "PetParenting"
        },
        {
            "id": 3,
            "author_id": 1,
            "title": "ဒီတစ်ခါ ငွေဆောင် ခရီးစဉ်လေး အကြောင်း ပြောပြချင်ပါတယ်",
            "created_at": "2023-04-16T17:00:00.000Z",
            "updated_at": null,
            "published_at": "2023-04-18T17:00:00.000Z",
            "content": "ငွေဆောင် နဲ့ ချောင်းသာက ရန်ကုန်ကနေ ဆို အရမ်း အဝေးကြီး သွားရတဲ့ ကမ်းခြေ တွေ မဟုတ်တဲ့အတွက် \nသွားလာရ လွယ်ကူလို့ ခလေးတွေ ခေါ်သွားသင့်တဲ့ ကမ်းခြေ မျိုးတွေ လည်း ဖြစ်ပါတယ် \nချူချူတို့ ဘန်ငယ်တို့ ငွေဆောင်ကို ရောက်တာ ဒါနဲ့ဆို ၂ ခါ မြောက်ပါ\nဒီ တစ်ခေါက်ကိုတော့ Ngwe Saung Yacht Club & Resort မှာ နေ ဖြစ်ပါတယ်\nNSYC က pet friendly လုပ်လိုက်ပြီလို့ စကြား ကတည်းက အရမ်း ပျော်ပြီး သွားချင်နေခဲ့တာ ပါ \nအရင်ကလည်း pet friendly မဖြစ်ခင်က တည်းနေကြမလို့ အခု pet friendly လုပ်လိုက်တဲ့အခါ အရမ်းကို ဝမ်းသာမိပါတယ်\nဒါပင်မဲ့ သူတို့မှာလည်း သူတို့ pet policy ရှိပါတယ် ( ဥပမာ pets allowed room types တွေ ရှိသလို weight up to 10 kg အထိ pets များပဲ ခွင့်ပြုပါတယ် ) \nကိုယ်တွေတည်း ခဲ့တာ VILLA ROOM ပါ ၂ ညကို USD 380 ကျခဲ့ပါတယ် \nသန့်ရှင်းမှု - 9/10 \ncustomer service - 9/10 \nbreakfast buffet - 8/10\npet friendly - 8/10 \nနဲ့ 24 hours aircon ရပါတယ် \noverall အနေနဲ့ နေရတာ အဆင်ပြေလားဆိုရင် ပြေပါတယ် ဒါပင်မဲ့ house keeping department နဲ့ စကားပြောဆိုရတာ လေး နည်းနည်းရှိပါတယ် \nဒါမဲ့ ထပ်သွားမှာလားဆိုရင် ထပ်သွားဦးမှာပါ \nပထမ တစ်ခေါက် ငွေဆောင်သွားတုန်းက တည်းတဲ့ ဟိုတယ်ဆို တော်တော် အဆင်မပြေပါဘူး , ဟိုတယ်ကြီးဖြစ်ပြီး သန့်ရှင်းမှု မရှိ , မနက်စာ ချာတူးလန် pet friendly , pet allowed မလို့သာ တည်းခဲ့ရတာပါ \nအခုတော့ pet allowed ဖြစ်ဖို့တင်မကပဲ ဟူးမန်းတွေပါ နေရတာ အဆင်ပြေတဲ့ resort , နောက်ပြီး ခလေးတွေ အတွက်လည်း ကျယ်ကျယ်ဝန်းဝန်း နေလို့ ရတဲ့ resort မလို့ recommend ပေးပါတယ် 💯\n( public area မှာ on leashed လုပ်ပါ ) 🙏🏻\n( tip : ခလေးတွေ နဲ့ သွားတဲ့အခါ ဘယ်ဟိုတယ် သွားသွား အခန်းထဲ မဝင်ခင် ဗီဒီယို ဓာတ်ပုံ ရိုက်ထားတဲ့ အကျင့်လေး ထား ပါ \n- နောက်ပြီး အခန်းထဲက လူအတွက်ပေးထားတဲ့ amenities ( ဥပမာ towels ) များကို ခလေးများအတွက် ယူမသုံးသင့်ပါ \n- အညစ်အကြေးများကို ကိုယ်တိုင် ပြန်လည် သန့်ရှင်းပေးပါ , ချူချူတို့ အတွက် ဘယ်သွားသွား သေးဗန်း ယူ ပါတယ် )\nဒါမှသာ pet friendly / pet allowed hotels များ မြန်မာနိုင်ငံမှာ ပိုပြီး ပေါများလာမှာ ဖြစ်တဲ့အတွက် be a responsible owner ဖြစ်ဖို့တော့ မမေ့ပါနဲ့နော် ",
            "image_url": "image14.jpeg",
            "category_id": 3,
            "deleted": 0,
            "category": "PetParenting"
        },

```

### Create Blog


#### http://localhost:8000/post/create
`POST /post/create`

 
#### Request Body 
| Parameter | Type | Description |
|----------|:-------------:|:------|
| author_id | string | id of author |
| title | string | blog title |
| updated_at | Date | latest updated time |
| published_at | Date| publish Time |
| content | varchar |body content |
| category_id | int| id of category |

#### Success
Response

###### Status Code
` 200`  success

| Parameter | Type | Description |
|----------|:-------------:|:------|
| author_id | string | id of author |
| title | string | blog title |
| updated_at | Date | latest updated time |
| published_at | Date| publish Time |
| content | varchar |body content |
| category_id | int| id of category |
Example
```
    {
    "authorId" : 2,
    "title": "My lovely Family",
    "createdAt": null,
    "updatedAt": null,
    "publishedAt": "2023-05-04",
    "url": "fashion1",
    "content": "Sneaker Fair ဒုတိယ နေ့ကို ရောက်ခဲ့ပါတယ် ပွဲလာတဲ့ သူတွေရဲ့ Energy ကိုလည်း မြင်ခဲ့ရပါတယ် ပွဲက ရောင်းတာ၀ယ်တာ လောက်ပဲ မဟုတ်ပဲ Vlog ရိုက်တဲ့ သူတွေ ပွဲအတွက် ၀တ်ဖို့ ဖက်ရှင်တွေ ပြင်ဆင်လာတဲ့ သူတွေ စသဖြင့် Activity ပေါင်းစုံနဲ့ မလို့ တကယ်လည်း ပျော်ဖို့ကောင်းပါတယ် ကျွန်တော်လည်း MeetUp ပြီးကတည်းက မတွေ့ဖြစ်တော့တဲ့ ပေ့ချ်ကို အားပေးတဲ့ သူတွေ သူငယ်ချင်းတွေနဲ့ ပြန်ဆုံဖြစ်ပြီး Panel Discussion လေး ၀င် Join ဖြစ်ပါတယ် ပွဲမှာ နှုတ်ဆက်ဖို့ ကျန်ခဲ့တဲ့သူတွေရှိရင်လည်း ကျွန်တော် ဒီကနေပဲ​တောင်းပန်ပါတယ် ပွဲရဲ့ ပုံရိပ်လေးတွေ အမှတ်တရ တင်ပေးလိုက်ပါတယ်ဗျာနောင်နှစ်တွေမှာ​ ဒီလို ပွဲတွေ ထပ်လုပ်ပေးဖို့ မျှော်လင့်ပါတယ် Big Congratulations Sneaker Fair Team ",
    "categoryId": "1"
}

```

#### http://localhost:8000/post/update
`PATCH /post/update`

 
#### Request Body 
| Parameter | Type | Description |
|----------|:-------------:|:------|
| id | string | id of note |
| title | string | note title |
| updated_at | Date | latest updated time |
| published_at | Date | publish Time |
| content | varchar | blog body |


#### Success
Response

###### Status Code
` 200`  success

| Parameter | Type | Description |
|----------|:-------------:|:------|
| id | string | id of note |
| title | string | note title |
| updated_at | Date | latest updated time |
| published_at | Date | publish Time |
| content | varchar | blog body |

Example
```
    {
    "post_id": 7,
    "title": "ချူဝီ တို့ရဲ့ ညီငေး အသစ် FRIDAY ",
    "updatedAt": "2023-03-22",
    "content": "လမ်းပေါ်မှာ တွေ့ လို့ ခေါ်လာတဲ့ FRIDAY သောကြာနေ့မှာ တွေ့လို့ FRIDAY ဆိုတဲ့ နာမည်နဲ့ အိမ်ကိုရောက်တာတော့ ၂ လ လောက်ရှိပါပြီ အခုမှ အကုန်လုံးနဲ့ မိတ်ဆက်ပေးပါရစေ ရောက်စကတော့ 3 kg ပါ အခုတော့ 9 kg ဖြစ်နေပါပြီ 😅လမ်းမှာ တွေ့လို့ ခေါ်လာတာ ဆိုပင်မဲ့ အခုတော့ Gentle Pup Collars , Zee Dog Collars Kin and Kind Shampoos တွေနဲ့ မွှေးနေတဲ့ ပေါက်စ ဖြစ်နေပါပြီ အသက်ကတော့ အခု ၄ လ ကျော် ၅ လထဲပါ တွေ့ခါစက ၂ လ ကျော် ပါ ဘာအမျိုးမှန်းတော့ အခုထိ မသိသေးပါပူး 🤣သေချာတာကတော့ ဝူခုန်း နဲ့ တူတယ်ဆိုတာပါပဲ 🤣"
}

```

### Delete Post

#### http://localhost:8000/post/delete?id=11
`DELETE /post/delete`

### Parameter
| Parameter | Type | Description |
|----------|:-------------:|:------|
|postId |String| id of blog
 
#### Request Body 
No Request Body

#### Success
Response

no response body

If you want to go to the login page, pls write login page url because I didn't use modal or register and the navigator for the login page. I pre added two users. 