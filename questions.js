// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1.,
    question: " Ikinyabiziga cyose cyangwa ibinyabiziga bigenda bigomba kugira:",
    answer: "(a) Umuyobozi",
    options: [
      "(a) Umuyobozi",
      "b) Umuherekeza",
      "c)A na B ni ibisubizo by’ukuri",
      "d) Nta gisubizo cy’ukuri kirimo"
    ]
  },
    {
    numb: 2.,
    question: "Ijambo “akayira” bivuga inzira nyabagendwa ifunganye yagenewe gusa:",
    answer: "(c) A na B ni ibisubizo by’ukuri",
    options: [
      "a) Abanyamaguru",
      "b) Ibinyabiziga bigendera ku biziga bibiri",
      "(c) A na B ni ibisubizo by’ukuri",
      "d) Nta gisubizo cy’ukuri kirimo"
    ]
  },
    {
    numb: 3.,
    question: " Umurongo uciyemo uduce umenyesha ahegereye umurongo ushobora kuzuzwa n’uturanga gukata tw’ibara ryera utwo turanga cyerekezo tumenyesha :",
    answer: "(c) Igabanurwa ry’umubare w’ibisate by’umuhanda mu cyerekezo bajyamo",
    options: [
      "a) Igisate cy’umuhanda abayobozi bagomba gukurikira",
      "b) Ahegereye umurongo ukomeje",
      "(c) Igabanurwa ry’umubare w’ibisate by’umuhanda mu cyerekezo bajyamo",
      "d) A na C nibyo"
    ]
  },
    {
    numb: 4.,
    question: "Ahantu ho kugendera mu muhanda herekanwa n’ibimenyetso bimurika ibinyabiziga ntibishobora kuhagenda :",
    answer: "(d) Nta gisubizo cy’ukuri kirimo",
    options: [
      "a) Biteganye",
      "b) Ku murongo umwe",
      "c) A na B nibyo",
      "(d) Nta gisubizo cy’ukuri kirimo"
    ]
  },
    {
    numb: 5.,
    question: "Ibinyabiziga bikurikira bigomba gukorerwa isuzumwa buri mwaka:",
    answer: "(d) Nta gisubizo cy’ukuri kirimo",
    options: [
      "a) Ibinyabiziga bigenewe gutwara abagenzi muri rusange",
      "b) Ibinyabiziga bigenewe gutwara ibintu birengeje toni 3.5",
      "c) Ibinyabiziga bigenewe kwigisha gutwara",
      "(d) Nta gisubizo cy’ukuri kirimo"
    ]
  },
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },

  {
    numb: 6.,
    question: "Ubugari bwa romoruki ikuruwe n’ikinyamitende itatu ntibugomba kurenza ibipimo bikurikira:",
    answer: "d) Nta gisubizo cy’ukuri kirimo",
    options: [
      "a) cm75",
      "b) cm125",
      "c) cm265",
      "d) Nta gisubizo cy’ukuri kirimo"
    ]
  },
    {
    numb: 7.,
    question: "Uburebure bw’ibinyabiziga bikurikira ntibugomba kurenga metero 11 :",
    answer: "d) Nta gisubizo cy’ukuri kirimo",
    options: [
      "a) Ibifite umutambiko umwe uhuza imipira",
      "b) Ibifite imitambiko ibiri ikurikiranye mu bugari bwayo",
      "c) Makuzungu",
      "d) Nta gisubizo cy’ukuri kirimo"
    ]
  },
    {
    numb: 8.,
    question: " Ikinyabiziga kibujijwe guhagarara akanya kanini aha hakurikira :",
    answer: "(d) Ibisubizo byose nibyo",
    options: [
      "a)Ahatarengeje metero 1 imbere cyangwa inyuma y’ikinyabiziga gihagaze akanya gato cyangwa kanini",
      "b)Ahantu hari ibimenyetso bibuza byabugenewe",
      "(c)Aho abanyamaguru banyura mu muhanda ngo bakikire inkomyi",
      "(d) Ibisubizo byose nibyo"
    ]
  },
    {
    numb: 9.,
    question: " Kunyuranaho bikorerwa:",
    answer: "(d) Nta gisubizo cy’ukuri kirimo",
    options: [
      "a) Mu ruhande rw’iburyo gusa",
      "b)Igihe cyose ni ibumoso",
      "c) Iburyo iyo unyura ku nyamaswa",
      "(d) Nta gisubizo cy’ukuri kirimo"
    ]
  },
    {
    numb: 10.,
    question: "Icyapa cyerekana umuvuduko ntarengwa ikinyabiziga kitagomba kurenza gishyirwa gusa ku binyabiziga bifite uburemere ntarengwa bukurikira:",
    answer: "(d) Nta gisubizo cy’ukuri kirimo",
    options: [
      "a) Burenga toni 1",
      "b) Burenga toni 2",
      "c) Burenga toni 24",
      "(d) Nta gisubizo cy’ukuri kirimo"
    ]
  },

  {
    numb: 11.,
    question: " Ahatari mu nsisiro umuvuduko ntarengwa mu isaha wa velomoteri ni:",
    answer: "(a) Km50",
    options: [
      "(a) Km50",
      "b) Km40",
      "c) Km30",
      "d) Nta gisubizo cy’ukuri"
    ]
  },
    {
    numb: 12.,
    question: "Umuyobozi ugenda mu muhanda igihe ubugari bwawo budatuma anyuranaho nta nkomyi ashobora kunyura mu kayira k’abanyamaguru ariko amaze kureba ibi bikurikira:",
    answer: "d) Nta gisubizo cy’ukuri kirimo",
    options: [
      "a) Umuvuduko w’abanyamaguru",
      "b) Ubugari bw’umuhanda",
      "c) Umubare w’abanyamaguru",
      "d) Nta gisubizo cy’ukuri kirimo"
    ]
  },
    {
    numb: 13.,
    question: " UKu byerekeye kwerekana ibinyabiziga n’ukumurika kwabyo ndetse no kwerekana ihindura ry’ibyerekezo byabyo. Birabujijwe gukora andi matara cyangwa utugarurarumuri uretse ibitegetswe ariko ntibireba amatara akurikira:",
    answer: "(b) Amatara ari imbere mu modoka",
    options: [
      "a) Amatara ndanga",
      "(b) Amatara ari imbere mu modoka",
      "c) Amatara ndangaburambarare",
      "d) Ibisubizo byose nibyo"
    ]
  },
    {
    numb: 14.,
    question: "Iyo nta mategeko awugabanya by’umwihariko umuvuduko ntarengwa w’amapikipiki mu isaha ni:",
    answer: "(d) Nta gisubizo cy’ukuri kirimo",
    options: [
      "a) Km25",
      "b)Km70",
      "c) Km40",
      "(d) Nta gisubizo cy’ukuri kirimo"
    ]
  },
    {
    numb: 15.,
    question: "Uburyo bukoreshwa kugirango ikinyabiziga kigende gahoro igihe feri idakora neza babwita:",
    answer: "(c) Feri yo gutabara",
    options: [
      "a) Feri y’urugendo",
      "b) Feri yo guhagarara umwanya munini",
      "(c) Feri yo gutabara",
      "(d) Nta gisubizo cy’ukuri kirimo"
    ]
  },

  {
    numb: 16.,
    question: " Nibura ikinyabiziga gitegetswe kugira uduhanagurakirahure tungahe:",
    answer: "(c) 1",
    options: [
      "a) 2",
      "b) 3",
      "(c) 1",
      "d) Nta gisubizo cy’ukuri kirimo"
    ]
  },
    {
    numb: 17.,
    question: "Amatara maremare y’ikinyabiziga agomba kuzimwa mu bihe bikurikira:",
    answer: "(b) Iyo ikinyabiziga kigiye kubisikana n’ibindi",
    options: [
      "a) Iyo umuhanda umurikiye umuyobozi abasha kureba muri metero 20",
      "(b) Iyo ikinyabiziga kigiye kubisikana n’ibindi",
      "c) Iyo ari mu nsisiro",
      "d) Ibisubizo byose ni ukuri"
    ]
  },
    {
    numb: 18.,
    question: " Ikinyabiziga ntigishobora kugira amatara arenga abiri y’ubwoko bumwe keretse kubyerekeye amatara akurikira:",
    answer: "(d) Ibisubizo byose ni ukuri",
    options: [
      "a) Itara ndangamubyimba",
      "b) Itara ryerekana icyerekezo",
      "c) Itara ndangaburumbarare",
      "(d) Ibisubizo byose ni ukuri"
    ]
  },
    {
    numb: 19.,
    question: "Ubugari bwa romoruki ikuruwe n’igare cyangwa velomoteri ntiburenza ibipimo bikurikira:",
    answer: "(d) Nta gisubizo cy’ukuri kirimo",
    options: [
      "a) cm25",
      "b) cm125",
      "c) cm45",
      "(d) Nta gisubizo cy’ukuri kirimo"
    ]
  },
    {
    numb: 20.,
    question: "Ibinyabiziga bikoreshwa nka tagisi, bitegerereza abantu mu nzira nyabagendwa, bishobora gushyirwaho itara ryerekana ko ikinyabiziga kitakodeshejwe. Iryo tara rishyirwaho ku buryo bukurikira:",
    answer: "(a) Ni itara ry’icyatsi rishyirwa imbere ku kinyabiziga",
    options: [
      "(a) Ni itara ry’icyatsi rishyirwa imbere ku kinyabiziga",
      "b) Ni itara ry’icyatsi rishyirwa ibumoso",
      "c) Ni itara ry’umuhondo rishyirwa inyuma",
      "(d) Nta gisubizo cy’ukuri kirimo"
    ]
  },
];