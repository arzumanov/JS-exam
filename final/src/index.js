"use strict";

import { calc } from "./calc";
import { form } from "./form";
import { img } from "./img";
import { modals } from "./modals";
import { tabs } from "./tabs";
import { timer } from "./timer";

window.addEventListener("DOMContentLoaded", function() {
  calc();
  form();
  img();
  modals();
  tabs();
  timer();
});
