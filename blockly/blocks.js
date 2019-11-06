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

Blockly.Blocks['pixycam_tx'] = {
    init: function() {
        this.appendValueInput("pixycam_data")
            .setCheck(null)
            .appendField(new Blockly.FieldVariable("pixycam"), "pixycam")
            .appendField(Blockly.Msg.WEBDUINO_pixycam_TX, "傳送資料")
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(75);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['pixycam_tx_x'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("X座標");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['pixycam_tx_y'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Y座標");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['pixycam_tx_w'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("寬度");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['pixycam_tx_h'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("高度");
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
            .appendField("取得資料")
            .appendField(new Blockly.FieldDropdown([
                ["list", "list"]
            ]), "dataType");
        this.setOutput(true, null);
        this.setColour(75);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};