// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#dwe33p
Blockly.JavaScript['pixycam_new'] = function(block) {
    var dropdown_baud_rate = block.getFieldValue('baud_rate');
    var code = 'getpixycam(board,"' + dropdown_baud_rate + '")';
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

//https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#4bu9f9
Blockly.JavaScript['pixycam_tx'] = function(block) {
    var variable_pixycam = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('pixycam'), Blockly.Variables.NAME_TYPE);
    var value_pixycam_data = Blockly.JavaScript.valueToCode(block, 'pixycam_data', Blockly.JavaScript.ORDER_ATOMIC);
    var code = variable_pixycam + '.tx(' + value_pixycam_data + ');\n';
    return code;
};

Blockly.JavaScript['pixycam_tx_x'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '\'X\'';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['pixycam_tx_y'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '\'Y\'';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['pixycam_tx_w'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '\'W\'';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['pixycam_tx_h'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '\'H\'';
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
    var dropdown_dataType = block.getFieldValue('dataType');
    var code = variable_pixycam + '.' + dropdown_dataType;
    return [code, Blockly.JavaScript.ORDER_NONE];
};
