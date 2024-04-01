import { inputValid } from "./modules/helpers/inputvalid";
import { timer } from "./modules/timer";
import { modalMenu } from "./modules/menu";
import { modalWind } from "./modules/modal";
import { scrollLink } from "./modules/scrolllink";
import { tabFunc } from "./modules/tab";
import { sliderFunc } from "./modules/slider";

timer('1 april 2024')

inputValid("#form1")
inputValid("#form2")
inputValid("#form3")
modalMenu()
modalWind()
scrollLink()
tabFunc()
sliderFunc()

