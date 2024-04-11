import { inputValid } from "./modules/helpers/inputvalid";
import { timer } from "./modules/timer";
import { modalMenu } from "./modules/menu";
import { modalWind } from "./modules/modal";
import { scrollLink } from "./modules/scrolllink";
import { tabFunc } from "./modules/tab";
import { sliderFunc } from "./modules/slider";
import { calcFunc } from "./modules/calc";
import { sendForm } from "./modules/sendform";

timer('20 april 2024')

inputValid("#form1")
inputValid("#form2")
inputValid("#form3")
modalMenu()
modalWind()
scrollLink()
tabFunc()
sliderFunc(['.portfolio-content', '.portfolio-item', 'portfolio-item-active', 'dot', 'dot-active', '.prev', '.next', 2000])
calcFunc(890)
sendForm('form1')
sendForm('form2')
sendForm('form3')

