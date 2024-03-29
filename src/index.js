import { timer } from "./modules/timer";
import { modalMenu } from "./modules/menu";
import { modalWind } from "./modules/modal";
import { scrollLink } from "./modules/scrolllink";
import { sliderFunc } from "./modules/slider";

timer('1 april 2024')

modalMenu()
modalWind()
scrollLink()
sliderFunc(['.portfolio-content', '.portfolio-item', 'portfolio-item-active', 'dot', 'dot-active', '.prev', '.next', 2000])
