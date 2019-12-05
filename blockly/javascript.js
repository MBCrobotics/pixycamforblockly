
// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#dwe33p
Blockly.JavaScript['pixycam_new'] = function(block) {
    var dropdown_baud_rate = block.getFieldValue('baud_rate');
    var code = 'getpixycam(board,"' + dropdown_baud_rate + '")';
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

let PIXY_X=111;
let PIXY_Y=222;
let PIXY_W=333;
let PIXY_H=444;
let PIXY_R=555;
let PIXY_G=666;
let PIXY_B=777;

//https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#
Blockly.JavaScript['pixycam_ansys'] = function(block) {
    console.log('start :1 ');
   var variable_pixy = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('pixycam'), Blockly.Variables.NAME_TYPE);
    console.log('start :pixycam_1 : ' + block.getFieldValue('pixycam'));
    console.log('start :pixycam_2 : ' + Blockly.Variables.NAME_TYPE);
    console.log('start :pixycam_3 : ' + variable_pixy);
    console.log('start :2 ');
    var value_uart_data = Blockly.JavaScript.valueToCode(block, 'rawdata', Blockly.JavaScript.ORDER_ATOMIC);
    console.log('start :rawdata_1 : ' + block);
    console.log('start :rawdata_2 : ' + 'rawdata');
    console.log('start :rawdata_3 : ' + Blockly.JavaScript.ORDER_ATOMIC);
    console.log('start :3 ');
    var code = variable_pixy + '.ansys(' + value_uart_data + ');\n';
    console.log('start :4 ');
    var value_rawdata = rawdata;
    console.log('start :5 ');
    console.log('final : ' + value_rawdata + ' : ' + PIXY_X);
    if(value_rawdata>=7000){
         PIXY_X=value_rawdata % 1000;
        console.log(PIXY_X);
    }else if(value_rawdata>=6000){
         PIXY_Y=value_rawdata % 1000;
        console.log(PIXY_Y);
    }else if(value_rawdata>=5000){
         PIXY_W=value_rawdata % 1000;
        console.log(PIXY_W);
    }else if(value_rawdata>=4000){
         PIXY_H=value_rawdata % 1000;
        console.log(PIXY_H);
    }else if(value_rawdata>=3000){
         PIXY_R=value_rawdata % 1000;
        console.log(PIXY_R);
    }else if(value_rawdata>=2000){
         PIXY_G=value_rawdata % 1000;
        console.log(PIXY_G);
    }else if(value_rawdata>=1000){
         PIXY_B=value_rawdata % 1000;
        console.log(PIXY_B);
    }else{
        console.log('final_else : ' + value_rawdata);
    }
    //console.log('final_1 : '+value_rawdata + ' : ' + PIXY_X);
    console.log('start :6 ');
    return code;
};

    //console.log('start_2 : '+PIXY_X);
//console.log("Blockly.JavaScript['pixycam_ansys'] : " + Blockly.JavaScript['pixycam_ansys']);

//function camansys(){};

Blockly.JavaScript['pixycam_rawdata'] = function(block) {
  
    var variable_pixycam_rawdata = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('pixycam'), Blockly.Variables.NAME_TYPE);
    var code = variable_pixycam_rawdata + '.' + "string";
  return [code , Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['pixycam_x'] = function(block) {
    
    return [PIXY_X, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['pixycam_y'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = PIXY_Y;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['pixycam_w'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = PIXY_W;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['pixycam_tx_h'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = PIXY_H;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['pixycam_r'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = PIXY_R;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['pixycam_g'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = PIXY_G;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['pixycam_b'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = PIXY_B;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#b9pxdq
Blockly.JavaScript['pixycam_rx'] = function(block) {
    var variable_pixycam = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('pixycam'), Blockly.Variables.NAME_TYPE);
    var statements_rx = Blockly.JavaScript.statementToCode(block, 'rx');
    var code = variable_pixycam + '.rx(';
    code += "async function () {\n" + statements_rx + "});\n";
    return code;
};



