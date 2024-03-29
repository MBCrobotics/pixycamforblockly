
// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#dwe33p
Blockly.JavaScript['pixycam_new'] = function(block) {
    var dropdown_baud_rate = block.getFieldValue('baud_rate');
    var code = 'getpixycam(board,"' + dropdown_baud_rate + '")';
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['pixycam_rawdata'] = function(block) {
  
    var variable_pixycam_rawdata = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('pixycam'), Blockly.Variables.NAME_TYPE);
    var code = variable_pixycam_rawdata + '.' + "string";
  return [code , Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['pixycam_x'] = function(block) {
    
    var code = '(PIXYCAM_RAWDATA>=1000 && PIXYCAM_RAWDATA<2000)?PIXYCAM_RAWDATA%1000:pixy_X';
    
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['pixycam_y'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '(PIXYCAM_RAWDATA>=2000 && PIXYCAM_RAWDATA<3000)?PIXYCAM_RAWDATA%1000:pixy_Y';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['pixycam_w'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '(PIXYCAM_RAWDATA>=3000 && PIXYCAM_RAWDATA<4000)?PIXYCAM_RAWDATA%1000:pixy_W';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['pixycam_h'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '(PIXYCAM_RAWDATA>=4000 && PIXYCAM_RAWDATA<5000)?PIXYCAM_RAWDATA%1000:pixy_H';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['pixycam_r'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '(PIXYCAM_RAWDATA>=5000 && PIXYCAM_RAWDATA<6000)?PIXYCAM_RAWDATA%1000:pixy_R';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['pixycam_g'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '(PIXYCAM_RAWDATA>=6000 && PIXYCAM_RAWDATA<7000)?PIXYCAM_RAWDATA%1000:pixy_G';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['pixycam_b'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '(PIXYCAM_RAWDATA>=7000)?PIXYCAM_RAWDATA%1000:pixy_B';
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



