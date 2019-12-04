
// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#dwe33p
Blockly.JavaScript['pixycam_new'] = function(block) {
    var dropdown_baud_rate = block.getFieldValue('baud_rate');
    var code = 'getpixycam(board,"' + dropdown_baud_rate + '")';
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['pixycam_x'] = function(block) {
  
    var variable_pixycam = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('pixycam'), Blockly.Variables.NAME_TYPE);
    console.log(variable_pixycam);
    var dropdown_dataType = "string";
    var code = variable_pixycam + '.' + dropdown_dataType;
    var PIXY_X=0;
    if(code>=1000 && code<2000){
        PIXY_X=code%1000;
    }
  // TODO: Change ORDER_NONE to the correct strength.
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

//https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#d9sohf
Blockly.JavaScript['pixycam_data'] = function(block) {
    var variable_pixycam = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('pixycam'), Blockly.Variables.NAME_TYPE);
    //var dropdown_dataType = block.getFieldValue('dataType');
    var code = variable_pixycam + '.' + "string";
    if(code>=7000){
        code=code%1000;
    }else if(code>=6000){
        code=code%1000;
    }else if(code>=5000){
        code=code%1000;
    }else if(code>=4000){
        code=code%1000;
    }else if(code>=3000){
        code=code%1000;
    }else if(code>=2000){
        code=code%1000;
    }else if(code>=1000){
        code=code%1000;
    }
    return [code, Blockly.JavaScript.ORDER_NONE];
};

