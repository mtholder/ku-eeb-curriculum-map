////////////////////////////////////////////////////////////////////////
// HARD-CODED CONSTANTS
var CANVAS_WIDTH;
var CANVAS_HEIGHT;
var TIMELINE_X;
var TIMELINE_Y;
var TL_TEXT_PUSH_Y;
var TIMELINE_WIDTH;
var TIMELINE_TEXT_WIDTH;
var MID_TIMELINE_X;
var EEB_X;
var EEB_Y;
var EEB_TEXT_PUSH_Y;
var EEB_WIDTH;
var EEB_TEXT_WIDTH;
var MID_EEB_X;
var CLASS_WIDTH;
var CLASS_X;
var CLASS_Y;
var CLASS_TEXT_PUSH_Y;
var CLASS_TEXT_WIDTH;
var MID_CLASS_X;
var FIRST_MONTH_Y;
var FIRST_SEMESTER_Y;
var SEM_GAP_Y;
var FIRST_FALL_Y;
var FIRST_SPRING_Y;
var THIRD_SEM_Y;
var START_THIRD_SEMESTER_Y;
var BEFORE_ORALS_Y;
var CANDIDACY_Y;
var FOURTH_SEM_Y;
var EARLY_FOURTH_SEMESTER_Y;
var AFTER_CANDIDACY_Y;
var THIRD_YEAR_Y;
var FOURTH_YEAR_Y;
var EARLY_FIFTH_SEMESTER_Y;
var DEFENSE_Y;
var BEFORE_DEFENSE_Y;
var UNTIMED_EEB_Y;
var UNTIMED_CLASS_Y;
var timeline_y;

///////////////////////////////////////////////////////////////////////////
var lo_visible = true;
var canvas_root;

var class_by_sem = [];
var untimed_event_list = [];
var untimed_class_list = [];

var classFill = "#FFF";
var gID = 1;
var ugID = 1;
var non_class_events = [];
var classes = [];
var timeline_objs = [{
    "time_offset": 0,
    "text": "1st month"
  }, {
    "time_offset": 1,
    "text": "1st Fall"
  }, {
    "time_offset": 2,
    "text": "1st Spring"
  }, {
    "time_offset": 3,
    "text": "3rd Semester"
  },{
    "time_offset": 4,
    "text": "4th Semester"
  }
];

var biodiv_classes = [];
var ecology_classes = [];
var mechanisms_classes = [];
var computing_classes = [];
var stats_classes = [];

///////////////////////////////////////////////////////////////////////////
var set_constants = function(lev) {
  CANVAS_WIDTH = 1500;
  if (lev == "phd") {
    CANVAS_HEIGHT = 1520;
  } else {
    CANVAS_HEIGHT = 1520;
  }

  TIMELINE_X = 5;
  TIMELINE_Y = 5;
  TL_TEXT_PUSH_Y = 10;
  TIMELINE_WIDTH = 100;
  TIMELINE_TEXT_WIDTH = TIMELINE_WIDTH - 10;
  MID_TIMELINE_X = TIMELINE_X  + (TIMELINE_WIDTH/2);

  EEB_X = TIMELINE_X + TIMELINE_WIDTH + 40;
  EEB_Y = TIMELINE_Y;
  EEB_TEXT_PUSH_Y = TL_TEXT_PUSH_Y;
  EEB_WIDTH = 180;
  EEB_TEXT_WIDTH = EEB_WIDTH - 10;
  MID_EEB_X = EEB_X  + (EEB_WIDTH/2);

  CLASS_WIDTH = 2* EEB_WIDTH;
  CLASS_X = EEB_X + (EEB_WIDTH + CLASS_WIDTH)/2 ;
  CLASS_Y = EEB_Y;
  CLASS_TEXT_PUSH_Y = EEB_TEXT_PUSH_Y + 4;
  CLASS_TEXT_WIDTH = CLASS_WIDTH - 10;
  MID_CLASS_X = CLASS_X  + (CLASS_WIDTH/2);

  FIRST_MONTH_Y = TIMELINE_Y + 20;
  FIRST_SEMESTER_Y = FIRST_MONTH_Y + 20;
  SEM_GAP_Y = 50;
  FIRST_FALL_Y = FIRST_SEMESTER_Y;
  FIRST_SPRING_Y = FIRST_FALL_Y + SEM_GAP_Y;
  THIRD_SEM_Y = FIRST_SPRING_Y + SEM_GAP_Y;
  START_THIRD_SEMESTER_Y = THIRD_SEM_Y - 40;
  BEFORE_ORALS_Y = THIRD_SEM_Y - 20;
  CANDIDACY_Y = THIRD_SEM_Y + 15;
  FOURTH_SEM_Y = THIRD_SEM_Y + SEM_GAP_Y;
  EARLY_FOURTH_SEMESTER_Y = FOURTH_SEM_Y - 20;
  THIRD_YEAR_Y = FOURTH_SEM_Y + SEM_GAP_Y;
  if (lev == "phd") {
    AFTER_CANDIDACY_Y = FOURTH_SEM_Y + 25;
    FOURTH_YEAR_Y = THIRD_YEAR_Y + 2*SEM_GAP_Y;
    EARLY_FIFTH_SEMESTER_Y = THIRD_YEAR_Y - 20;
    DEFENSE_Y = 500;
  } else {
    DEFENSE_Y = FOURTH_SEM_Y + 20;
  }
  BEFORE_DEFENSE_Y = DEFENSE_Y - 20;
  if (lev == "phd") {
    UNTIMED_EEB_Y = DEFENSE_Y + 20;
  } else {
    UNTIMED_EEB_Y = DEFENSE_Y + 10;
  }
  UNTIMED_CLASS_Y = UNTIMED_EEB_Y + 20;
  timeline_y = [FIRST_MONTH_Y, FIRST_FALL_Y, FIRST_SPRING_Y, THIRD_SEM_Y, FOURTH_SEM_Y];
}

function isInteger(value) {
  return /^\d+$/.test(value);
}

var parse_timing = function(ts) {
  var name_to_num = {
    "AFTER_CANDIDACY": AFTER_CANDIDACY_Y,
    "BEFORE_ORALS": BEFORE_ORALS_Y,
    "DEFENSE_DATE": DEFENSE_Y,
    "FIFTH_SEMESTER": THIRD_YEAR_Y,
    "FIRST_FALL": FIRST_FALL_Y,
    "FIRST_MONTH": FIRST_MONTH_Y,
    "FIRST_SPRING": FIRST_SPRING_Y,
    "FOURTH_SEMESTER": FOURTH_SEM_Y,
    "THIRD_SEMESTER": THIRD_SEM_Y,
    "START_THIRD_SEMESTER": START_THIRD_SEMESTER_Y,
    "EARLY_FOURTH_SEMESTER": EARLY_FOURTH_SEMESTER_Y,
    "EARLY_FIFTH_SEMESTER": EARLY_FIFTH_SEMESTER_Y,
    "BEFORE_DEFENSE_DATE": BEFORE_DEFENSE_Y,
  }
  if (isInteger(ts)) {
    return parseInt(ts, 10);
  }
  if (ts in name_to_num) {
    return name_to_num[ts];
  }
  throw new Error("Key " + ts + " not recognized as a time.");
}

var do_parse_all_data = function(event_list) {
  non_class_events.length = 0;
  classes.length = 0;
  var unc_el;
  for (unc_el of event_list) {
    if (unc_el.timing) {
      unc_el.timing = parse_timing(unc_el.timing)
    }
    if (unc_el.type == "class") {
      classes[classes.length] = unc_el;
    } else if (unc_el.type == "event") {
      non_class_events[non_class_events.length] = unc_el;
    } else {
      throw new Error("event/class object type should be class or event")
    }
  }
};

var add_timeline_text = function(y, text_val) {
  canvas_root.append('text')
    .attr("x", MID_TIMELINE_X)
    .attr("y",  y + TL_TEXT_PUSH_Y)
    .attr("class", "timelinepoint")
    .text(text_val)
      .attr("text-anchor", "middle");
};

var add_timeline_obj = function(o) {
  var y_var = timeline_y[o.time_offset];
  add_timeline_text(y_var, o.text);
};

var do_draw_timeline = function(lev) {
  if (lev == "phd") {
    canvas_root.append("rect")
      .attr('x', TIMELINE_X)
      .attr('y', TIMELINE_Y)
      .attr('height', CANDIDACY_Y - TIMELINE_Y)
      .attr('width', TIMELINE_WIDTH)
      .attr('fill', "white")
      .attr('stroke', "black");
    canvas_root.append('text')
      .attr("x", MID_TIMELINE_X)
      .attr("y", TIMELINE_Y + 15)
      .attr("font-size", "10pt")
      .attr("fill", "grey")
      .attr("text-anchor", "middle")
      .text("pre-candidacy");
    canvas_root.append("rect")
      .attr('x', TIMELINE_X)
      .attr('y', CANDIDACY_Y)
      .attr('height', DEFENSE_Y - CANDIDACY_Y)
      .attr('width', TIMELINE_WIDTH)
      .attr('fill', "white")
      .attr('stroke', "black");
    canvas_root.append('text')
      .attr("x", MID_TIMELINE_X)
      .attr( "y", DEFENSE_Y - 15)
      .attr("font-size", "10pt")
      .attr( "fill", "grey")
      .attr("text-anchor", "middle")
      .text("candidacy");
  } else {
    canvas_root.append("rect")
      .attr('x', TIMELINE_X)
      .attr('y', TIMELINE_Y)
      .attr('height', DEFENSE_Y - TIMELINE_Y)
      .attr('width', TIMELINE_WIDTH)
      .attr('fill', "white")
      .attr('stroke', "black");
  }
  var o;
  for (o of timeline_objs) {
    add_timeline_obj(o);
  }
};

var add_eeb_text = function(group_el, y, text_val, lg_vec) {
  canvas_root.append('text')
    .attr("x", MID_EEB_X)
    .attr("y", y + EEB_TEXT_PUSH_Y)
    .attr("class", "eebevent")
    .text(text_val)
      .attr("text-anchor", "middle");
};

var dragcontainer = d3.drag()
  .on("drag", function(event, d, i) {
    d3.select(this).attr("transform", "translate(" + (d.x = event.x) + "," + (d.y = event.y) + ")");
  });

var get_fading_color_code = function(level, max_fade) {
  var proportion = 1.0 - (3.000 - level)/3.0;
  var scaled = Math.floor(255 - max_fade*proportion);
  var color_code;
  if (scaled < 1) {
    scaled = 0;
    color_code = "0";
  } else {
    color_code = scaled.toString(16).toUpperCase();
  }
  if (color_code.length < 2) {
    color_code = "0".concat(color_code)
  } if (color_code.length > 2) {
    color_code = "FF";
  }
  return color_code;
}

var get_outcome_fill = function(lo_indx, level) {
  // If you change the colors, change the key in learningoutcomes.pt too!
  //                 ];
  var str_code;
  // our main color codes blend from FF to 00 as the level goes from 0 to 3
  var color_code = get_fading_color_code(level, 255);
  if (lo_indx == 0) {
    // ["#FFF", "#FAA", "#F77", "#F00", ]
    // R stays FF, G and B move together from FF to 00
    str_code = "#FF".concat(color_code, color_code);
  } else if (lo_indx == 1) {
    //["#FFF", "#FFB", "#FF7", "#FF0", ]
    // R and G stay at FF, B moves together from FF to 00
    str_code = "#FFFF".concat(color_code);
  } else if (lo_indx == 2) {
    // ["#FFF", "#BBF", "#77F", "#00F", ]
    // B stays FF, R and G move together from FF to 00
    str_code = "#".concat(color_code, color_code, "FF");
  } else if (lo_indx == 3) {
    // ["#FFF", "#BFF", "#8DD", "#0BB", ]
    // R moves together from FF to 00
    // G and B move from FF to B0 which is a max of 79 steps
    var alt_color_code = get_fading_color_code(level, 79);
    str_code = "#".concat(color_code, alt_color_code, alt_color_code);
  } else {
    console.log("Unrecognized lo_indx");
    return "#FFF"
  }
  return str_code;
}

var add_outcomes_boxes = function(group_el, o, x, y, height, full_width) {
  var outcomes = o.outcomes;
  var ov;
  var oid = 0;
  var width = full_width/4;
  for (ov of outcomes) {
    group_el.append('rect')
      .attr("x", x + width*oid)
      .attr("y", y)
      .attr("height", height)
      .attr("width", width)
      .attr("fill", get_outcome_fill(oid, ov));
    oid += 1;
  }
};

var display_eeb_obj = function(group_el, o, x, y, width, height) {
  group_el.append('rect')
    .attr("x", x)
    .attr("y", y)
    .attr("height", height)
    .attr("width", width)
    .attr("fill", "transparent")
    .attr("stroke", "#000");
  var half_height = height/2;
  add_outcomes_boxes(group_el, o, x+1, y + half_height + 2, half_height - 3, width-2);
};


var add_eeb_obj = function(o) {
  var y = o.timing - 2;
  var x = MID_EEB_X - (EEB_WIDTH/2) + 5;
  var width = EEB_WIDTH;
  var height = (SEM_GAP_Y - 10)/2;
  var group_el = canvas_root.append("g");
  display_eeb_obj(group_el, o, x, y, width, height);
  add_eeb_text(group_el, o.timing, o.title, o.outcomes);
};

var add_untimed_eeb_obj = function(o) {
  var x = TIMELINE_X + EEB_WIDTH*(untimed_event_list.length % 4);
  var row_ind = Math.floor(untimed_event_list.length / 4);
  var y = UNTIMED_EEB_Y + SEM_GAP_Y*(1+row_ind);
  UNTIMED_CLASS_Y = y + SEM_GAP_Y;
  var width = EEB_WIDTH;
  var height = (SEM_GAP_Y - 10)/2;
  var group_id = "groupeeb" + ugID;
  ugID += 1;
  var group_el = canvas_root.append("g")
    .attr("id", group_id)
    .attr("x", 0)
    .attr("y", 0);
  display_eeb_obj(group_el, o, x + 1, y - 2, width, height);
  //add_eeb_text(y, o.title, o.outcomes);
  //console.log("x=" + x + ", y=" + y + ", text=" +o.title + "\n");
  group_el.append('text')
    .attr("x", TIMELINE_X + EEB_WIDTH*(untimed_event_list.length % 4) + EEB_WIDTH/2)
    .attr("y", y + 10)
    .attr("class", "eebevent")
    .text(o.title).attr("text-anchor", "middle");
  untimed_event_list[untimed_event_list.length] = o;
  d3.select("#" + group_id).datum({"x": 0, "y": 0}).call(dragcontainer);
};

var display_class_obj = function(group_el, o, x, y, width, height) {
  group_el.append('rect')
    .attr("x", x)
    .attr("y", y)
    .attr("height", height)
    .attr("width", width)
    .attr("fill", classFill)
    .attr("stroke", "#000");
  var half_height = height/2;
  add_outcomes_boxes(group_el, o, x + 2, y + half_height + 2, half_height - 4, width -4);
};

var add_untimed_class_obj = function(o) {
  var x = TIMELINE_X + CLASS_WIDTH*(untimed_class_list.length % 4);
  var row_ind = Math.floor(untimed_class_list.length / 4);
  var y = UNTIMED_CLASS_Y - 40 + SEM_GAP_Y*(1+row_ind);
  var width = CLASS_WIDTH;
  var height = (SEM_GAP_Y - 10);

  var group_id = "group" + gID;
  gID += 1;
  var group_el = canvas_root.append("g")
    .attr("id", group_id)
    .attr("x", 0)
    .attr("y", 0);
  display_class_obj(group_el, o, x, y, width, height);
  //add_eeb_text(y, o.title, o.outcomes);
  //console.log("x=" + x + ", y=" + y + ", text=" +o.title + "\n");
  group_el.append('text')
    .attr("x", TIMELINE_X + CLASS_WIDTH*(untimed_class_list.length % 4) + CLASS_WIDTH/2)
    .attr("y", y + 12)
    .attr("class", "eebevent")
    .text(o.title).attr("text-anchor", "middle");
  untimed_class_list[untimed_class_list.length] = o;

  d3.select("#" + group_id).datum({"x": 0, "y": 0}).call(dragcontainer);
  return group_el;
};

var do_draw_eeb_events = function() {
  canvas_root.append('text')
    .attr("x", MID_EEB_X)
    .attr("y", EEB_Y + 15)
    .attr("font-size", "10pt")
    .attr("fill", "grey")
    .attr("text-anchor", "middle")
    .text("Non-class events");

  var o;
  for (o of non_class_events) {
    if (o.timing !== undefined) {
      add_eeb_obj(o);
    } else {
      add_untimed_eeb_obj(o);
    }
  }
}


var add_class_obj = function(o) {
  var semester_num = o.timing;
  while (semester_num >= class_by_sem.length) {
    class_by_sem[class_by_sem.length] = [];
  }
  var rel_sem = class_by_sem[semester_num];
  var x_offset = CLASS_WIDTH * rel_sem.length;
  rel_sem[rel_sem.length] = o;
  var sem_index = semester_num - 1;
  var y = sem_index * SEM_GAP_Y + FIRST_SEMESTER_Y;
  var x = MID_CLASS_X + x_offset - (CLASS_WIDTH/2) + 5;
  var height = SEM_GAP_Y - 10;
  var width = CLASS_WIDTH - 10;
  var group_id = "group" + gID;
  gID += 1;
  var group_el = canvas_root.append("g")
    .attr("id", group_id)
    .attr("x", 0)
    .attr("y", 0);
  display_class_obj(group_el, o, x, y, width, height);
  console.log(o.title + " at (" + x + ", " + y + ")")
  group_el.append('text')
    .attr("x", MID_CLASS_X + x_offset)
    .attr("y", y + CLASS_TEXT_PUSH_Y)
    .attr("class", "eebclass")
    .text(o.title)
      .attr("text-anchor", "middle");
  d3.select("#" + group_id).datum({"x": 0, "y": 0}).call(dragcontainer);
  return group_el;
}

var do_draw_classes = function() {
  canvas_root.append('text')
    .attr("x", MID_CLASS_X)
    .attr("y", CLASS_Y + 15)
    .attr("font-size", "10pt")
    .attr("fill", "grey")
    .attr("text-anchor", "middle")
    .text("Classes");

  var o;
  var new_group;
  var wrapper;
  for (o of classes) {
    if (o.timing !== undefined) {
      new_group = add_class_obj(o);
    } else {
      new_group = add_untimed_class_obj(o);
    }
    wrapper = {
      "html_group": new_group,
      "data_class": o
    };
    if (o.hasOwnProperty("foci")) {
      var foc_str = o["foci"];
      var foc_list = foc_str.split(";")
      for (var foc_el of foc_list) {
        var sfoc_el = foc_el.trim();
        if (sfoc_el == "biodiversity") {
          biodiv_classes[biodiv_classes.length] = wrapper;
        } else if (sfoc_el == "ecology") {
          ecology_classes[ecology_classes.length] = wrapper;
        } else if (sfoc_el == "mechanisms") {
          mechanisms_classes[mechanisms_classes.length] = wrapper;
        } else if (sfoc_el == "computing") {
          computing_classes[computing_classes.length] = wrapper;
        } else if (sfoc_el == "stats") {
          stats_classes[stats_classes.length] = wrapper;
        } else {
          console.log("Unexpected " + sfoc_el + " in foci listing.\n")
        }
      }
    } else {
      biodiv_classes[biodiv_classes.length] = wrapper;
      ecology_classes[ecology_classes.length] = wrapper;
      mechanisms_classes[mechanisms_classes.length] = wrapper;
      computing_classes[computing_classes.length] = wrapper;
      stats_classes[stats_classes.length] = wrapper;
    }
  }
}

var fill_all_events = function(lev) {
  var all_events = []
  if (lev == "mant") {
    all_events = in_ma_nonthesis.concat(in_all_levels);
  } else if (lev == "mat") {
    all_events = in_ma_thesis.concat(in_all_levels);
  } else if (lev == "phd") {
    all_events = in_phd.concat(in_all_levels);
  } else {
    console.log("No events shown because show_level is set to " + lev);
  }
  return all_events;
}

var main_func = function(lev) {
  show_level = lev;
  set_constants(lev);
  canvas_root = d3.select('#canvas').append('svg')
    .attr('width', CANVAS_WIDTH)
    .attr('height', CANVAS_HEIGHT)
    .style('background', 'white');
  var all_events = fill_all_events(lev);
  do_parse_all_data(all_events);
  do_draw_timeline(lev);
  do_draw_eeb_events();
  do_draw_classes();
}
