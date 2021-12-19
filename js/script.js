var $cont_box = [
  ["E8_2_300x300_black.png", "E8", "BEOPLAY E8 3RD GEN", "€350"],
  ["P6_300x300_black.png", "P6", "BEOPLAY P6", "€550"],
  ["M3_black_300x300_new.png", "M3", "BEOPLAY E8 M3", "€650"],
  ["SOUND AND STYLE FOR EVERY HOME", "Find the right connected speaker<br>for you", "Bang & Olufsen connected speakers give you an<br>immersive listening experience throughout the home.<br>Our diverse selection means there's a perfect speaker<br>to match any space and taste - from bold living rooms<br>to minimal kitchens. Find yours now.", "Get Started"],
  ["H9i_natural_300x300_new.png", "H9i", "BEOPLAY H9i", "€500"],
  ["P2_natural_300x300.png", "P2", "BEOSOUND P2", "€250"],
  ["H4_300x300_violet.png", "H4", "BEOPLAY H4", "€400"],
  ["E8_CHARCOALGREY_300X300.png", "E8", "BEOPLAY E8 3RD GEN", "€250"],
  ["A9_300x300.png", "A9", "BEOPLAY A9", "€2,500"],
  ["Form2_300x300.png", "FORM 2i", "BEOPLAY FORM 2ND GEN", "€200"],
  ["HEADPHONE ACCESSORIES"]
];

console.log($cont_box[3]);

var $contBox2 = document.querySelector("#product .content .contents_box");
var $contBox2_wrap = ""

for(i in $cont_box){
  console.log(i);
  if(i == 3){
    $contBox2_wrap += `
  <div class="cont_box04">
    <div class="img_box"><div class="img"></div></div>
    <div class="txt_box">
      <span>${$cont_box[i][0]}</span>
      <h4>${$cont_box[i][1]}</h4>
      <p>${$cont_box[i][2]}</p>
      <div class="btn"><a href="#">${$cont_box[i][3]}</a></div>
    </div>
  </div>
    `;
  }else if(i == 10){
    $contBox2_wrap += `
    <div class="cont_box10">
      <div class="bg"></div>
      <div class="img_box"></div>
      <h3>${$cont_box[i][0]}</h3>
    </div>
    `;
  }else if(i !== 4){
    $contBox2_wrap += `
      <div class="cont_box">
        <div class="num">${$cont_box[i][1]}</div>
        <img class="img_box" src="./img/${$cont_box[i][0]}" alt="">
        <div class="txt_box">
          <h3>${$cont_box[i][2]}</h3>
          <p>${$cont_box[i][3]}</p>
        </div>
      </div>
    `;
  }
}
$contBox2.innerHTML = $contBox2_wrap;


var $cont_box2 = [
  ["Speakers"],
  ["Headphones"],
  ["Earphones"],
];

var $contBox3 = document.querySelector("#categories article");
var $contBox3_wrap = ""

for(v of $cont_box2){
  console.log(v)
  $contBox3_wrap += `
  <div class="cont_box">
    <h3>${v[0]}</h3>
    <div class="img_box"></div>
    <div class="btn"><a href="#">View All</a></div>
  </div>
  `;
}
$contBox3.innerHTML = $contBox3_wrap;