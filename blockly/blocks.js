Blockly.Blocks['pixycam_new'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.WEBDUINO_pixycam_SETTING, "設定 pixycam baud rate:")
            .appendField(new Blockly.FieldDropdown([
                ["9600", "9600"]
            ]), "baud_rate");
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['pixycam_ansys'] = {
  init: function() {
    this.appendValueInput("rawdata")
      .appendField(new Blockly.FieldVariable("pixycam"), "pixycam")
        .setCheck("Number")
        .appendField("pixycam資料分析");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['pixycam_rawdata'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("pixycam"), "pixycam")
        .appendField("物件資料");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['pixycam_x'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("pixycam"), "pixycam")
        .appendField("物件X座標");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['pixycam_y'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("pixycam"), "pixycam")
        .appendField("物件Y座標");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['pixycam_w'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("pixycam"), "pixycam")
        .appendField("物件寬度");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['pixycam_h'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("pixycam"), "pixycam")
        .appendField("物件高度");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['pixycam_r'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("pixycam"), "pixycam")
        .appendField("物件紅色值");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['pixycam_g'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("pixycam"), "pixycam")
        .appendField("物件綠色值");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['pixycam_b'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("pixycam"), "pixycam")
        .appendField("物件藍色值");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['pixycam_rx'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldVariable("pixycam"), "pixycam")
            .appendField(Blockly.Msg.WEBDUINO_pixycam_RX, "接收資料")
        this.appendStatementInput("rx")
            .setCheck(null)
            .appendField("執行");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(30);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['pixycam_data'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldVariable("pixycam"), "pixycam")
            .appendField("資料分析")
            .appendField(new Blockly.FieldDropdown([
                ["string", "string"]
            ]), "dataType");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(75);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


