function KEYboard_allScript(thisObj) {
    function runKeyboard(thisObj) {
        function createUIMenu(menuData, settingJson2Obj) {
            var AEversion = app.version.substring(0, 4);
            if (AEversion < 13 || settingJson2Obj.prefs_AutoClose === false) {
                w = new Window("palette", "KEYboard", undefined, {
                    borderless: false
                });
            } else {
                w = new Window("palette", "KEYboard", undefined, {
                    borderless: true
                });
            }
            w.margins = 0;
            w.spacing = 0;
            w.alignChildren = ["fill", ""];
            var winGraphics = w.graphics;
            var gray = winGraphics.newPen(winGraphics.BrushType.SOLID_COLOR, menuData.gray, 1);
            var blue = winGraphics.newPen(winGraphics.BrushType.SOLID_COLOR, menuData.blue, 1);
            var balck = winGraphics.newPen(winGraphics.BrushType.SOLID_COLOR, menuData.black, 1);
            var chk = 1;
            if (chk) {
                if (AEversion < 12) {
                    w.graphics.backgroundColor = w.graphics.newBrush(w.graphics.BrushType.SOLID_COLOR, menuData.darkGray);
                } else {
                    w.graphics.backgroundColor = w.graphics.newBrush(w.graphics.BrushType.SOLID_COLOR, menuData.white);
                }
                var btnSize = [50, 50];
                var btnSizeWide = (AEversion >= 14 ? [65, 50] : [50, 50]);
                var grpSpacing = (AEversion >= 14 ? 1 : 3);
                var leftGrp = w.add("group");
                var rightGrp = w.add("group");
                w.orientation = "row";
                leftGrp.orientation = "column";
                leftGrp.spacing = 0;
                leftGrp.alignChildren = ["fill", "fill"];
                rightGrp.orientation = "column";
                rightGrp.spacing = 0;
                rightGrp.alignChildren = ["fill", "fill"];
                rightGrp.margins = 0;
                var rowFnParent = leftGrp.add("group");
                rowFnParent.spacing = 2;
                var row2parent = leftGrp.add("group");
                row2parent.spacing = 0;
                row2parent.alignChildren = ["fill", "fill"];
                var row3 = leftGrp.add("group");
                var rowFn = rowFnParent.add("group");
                rowFnParent.alignChildren = ["center", "fill"];
                rowFn.margins = 5;
                rowFn.spacing = 2;
                rowFn.orientation = "row";
                var row1 = rowFnParent.add("group");
                row1.margins = 5;
                row1.spacing = grpSpacing;
                row1.orientation = "row";
                var rowInOut = rowFnParent.add("group");
                rowInOut.margins = 5;
                rowInOut.spacing = grpSpacing;
                rowInOut.orientation = "row";
                var rowExpBtn = rowFnParent.add("group");
                rowExpBtn.alignChildren = ["left", ""];
                rowExpBtn.margins = 5;
                rowExpBtn.spacing = grpSpacing;
                rowExpBtn.orientation = "row";
                var createButton = function (btnObj, btnGrp, menuData) {
                    switch (btnObj.mode) {
                        case "easeIn":
                            if (btnObj.expStr <= 33) {
                                newBtn = btnGrp.add("iconbutton", undefined, menuData.in1);
                            } else {
                                if (btnObj.expStr <= 66) {
                                    newBtn = btnGrp.add("iconbutton", undefined, menuData.in2);
                                } else {
                                    newBtn = btnGrp.add("iconbutton", undefined, menuData.in3);
                                }
                            }
                            newBtn.helpTip = "easeIn : " + btnObj.expStr + "%";
                            amountStr = btnGrp.add("statictext", undefined, btnObj.expStr);
                            amountStr.alignment = ["", "bottom"];
                            break;
                        case "easeOut":
                            if (btnObj.expStr <= 33) {
                                newBtn = btnGrp.add("iconbutton", undefined, menuData.out1);
                            } else {
                                if (btnObj.expStr <= 66) {
                                    newBtn = btnGrp.add("iconbutton", undefined, menuData.out2);
                                } else {
                                    newBtn = btnGrp.add("iconbutton", undefined, menuData.out3);
                                }
                            }
                            newBtn.helpTip = "easeOut : " + btnObj.expStr + "%";
                            amountStr = btnGrp.add("statictext", undefined, btnObj.expStr);
                            amountStr.alignment = ["", "bottom"];
                            break;
                        case "easeInOut":
                            if (btnObj.expStr <= 33) {
                                newBtn = btnGrp.add("iconbutton", undefined, menuData.inOut1);
                            } else {
                                if (btnObj.expStr <= 66) {
                                    newBtn = btnGrp.add("iconbutton", undefined, menuData.inOut2);
                                } else {
                                    newBtn = btnGrp.add("iconbutton", undefined, menuData.inOut3);
                                }
                            }
                            newBtn.helpTip = "easeInOut : " + btnObj.expStr + "%";
                            amountStr = btnGrp.add("statictext", undefined, btnObj.expStr);
                            amountStr.alignment = ["", "bottom"];
                            break;
                        case "expression":
                            newBtn = btnGrp.add("button", undefined, btnObj.title);
                            newBtn.helpTip = btnObj.title;
                            break;
                        case "JavaScript":
                            newBtn = btnGrp.add("button", undefined, btnObj.title);
                            newBtn.helpTip = btnObj.title;
                            break;
                    }
                    newBtn.preferredSize = btnSize;
                    return newBtn;
                };
                var btn_01Grp = rowExpBtn.add("group");
                btn_01Grp.orientation = "stack";
                var btn_01 = createButton(settingJson2Obj.btn01, btn_01Grp, menuData);
                var btn_01_num = btn_01Grp.add("image", undefined, menuData.num01);
                btn_01_num.alignment = ["", "top"];
                var btn_02Grp = rowExpBtn.add("group");
                btn_02Grp.orientation = "stack";
                var btn_02 = createButton(settingJson2Obj.btn02, btn_02Grp, menuData);
                var btn_02_num = btn_02Grp.add("image", undefined, menuData.num02);
                btn_02_num.alignment = ["", "top"];
                var btn_03Grp = rowExpBtn.add("group");
                btn_03Grp.orientation = "stack";
                var btn_03 = createButton(settingJson2Obj.btn03, btn_03Grp, menuData);
                var btn_03_num = btn_03Grp.add("image", undefined, menuData.num03);
                btn_03_num.alignment = ["", "top"];
                var btn_04Grp = rowExpBtn.add("group");
                btn_04Grp.orientation = "stack";
                var btn_04 = createButton(settingJson2Obj.btn04, btn_04Grp, menuData);
                var btn_04_num = btn_04Grp.add("image", undefined, menuData.num04);
                btn_04_num.alignment = ["", "top"];
                var btn_05Grp = rowExpBtn.add("group");
                btn_05Grp.orientation = "stack";
                var btn_05 = createButton(settingJson2Obj.btn05, btn_05Grp, menuData);
                var btn_05_num = btn_05Grp.add("image", undefined, menuData.num05);
                btn_05_num.alignment = ["", "top"];
                var btn_06Grp = rowExpBtn.add("group");
                btn_06Grp.orientation = "stack";
                var btn_06 = createButton(settingJson2Obj.btn06, btn_06Grp, menuData);
                var btn_06_num = btn_06Grp.add("image", undefined, menuData.num06);
                btn_06_num.alignment = ["", "top"];
                var btn_07Grp = rowExpBtn.add("group");
                btn_07Grp.orientation = "stack";
                var btn_07 = createButton(settingJson2Obj.btn07, btn_07Grp, menuData);
                var btn_07_num = btn_07Grp.add("image", undefined, menuData.num07);
                btn_07_num.alignment = ["", "top"];
                var btn_08Grp = rowExpBtn.add("group");
                btn_08Grp.orientation = "stack";
                var btn_08 = createButton(settingJson2Obj.btn08, btn_08Grp, menuData);
                var btn_08_num = btn_08Grp.add("image", undefined, menuData.num08);
                btn_08_num.alignment = ["", "top"];
                var btn_09Grp = rowExpBtn.add("group");
                btn_09Grp.orientation = "stack";
                var btn_09 = createButton(settingJson2Obj.btn09, btn_09Grp, menuData);
                var btn_09_num = btn_09Grp.add("image", undefined, menuData.num09);
                btn_09_num.alignment = ["", "top"];
                btn_01.onClick = function () {
                    applyExpression(settingJson2Obj.btn01);
                    w.hide();
                };
                btn_02.onClick = function () {
                    applyExpression(settingJson2Obj.btn02);
                    w.hide();
                };
                btn_03.onClick = function () {
                    applyExpression(settingJson2Obj.btn03);
                    w.hide();
                };
                btn_04.onClick = function () {
                    applyExpression(settingJson2Obj.btn04);
                    w.hide();
                };
                btn_05.onClick = function () {
                    applyExpression(settingJson2Obj.btn05);
                    w.hide();
                };
                btn_06.onClick = function () {
                    applyExpression(settingJson2Obj.btn06);
                    w.hide();
                };
                btn_07.onClick = function () {
                    applyExpression(settingJson2Obj.btn07);
                    w.hide();
                };
                btn_08.onClick = function () {
                    applyExpression(settingJson2Obj.btn08);
                    w.hide();
                };
                btn_09.onClick = function () {
                    applyExpression(settingJson2Obj.btn09);
                    w.hide();
                };
                var row2 = row2parent.add("group");
                row2.graphics.backgroundColor = row2.graphics.newBrush(row2.graphics.BrushType.SOLID_COLOR, menuData.green);
                row2.alignChildren = ["fill", "fill"];
                row2.margins = 5;
                row2.spacing = grpSpacing;
                row2.orientation = "row";
                var row2button = row2.add("iconbutton", undefined, menuData.Qrow1);
                var row2button2 = row2.add("iconbutton", undefined, menuData.Qrow2);
                var row2button4 = row2.add("iconbutton", undefined, menuData.Qrow4);
                var row2button3 = row2.add("iconbutton", undefined, menuData.Qrow3);
                var row2button5 = row2.add("iconbutton", undefined, menuData.Qrow5);
                var row2button6 = row2.add("iconbutton", undefined, menuData.Qrow6);
                var row2button7 = row2.add("iconbutton", undefined, menuData.Qrow7);
                var row2button8 = row2.add("iconbutton", undefined, menuData.Qrow8);
                var row2button9 = row2.add("iconbutton", undefined, menuData.Qrow9);
                var row2button10 = row2.add("iconbutton", undefined, menuData.Qrow10);
                row2button.helpTip = "Copy selected keyframes and\rpaste to current comp’s time.";
                row2button2.helpTip = "Copy selected keyframes and\rmirror to current comp’s time.";
                row2button3.helpTip = "Time-Reverse keyframes.";
                row2button4.helpTip = "Move selected keyframes to\rcurrent comp’s time.";
                row2button5.helpTip = "Move selected keyframes which of \rtime are not integer frames.";
                row2button6.helpTip = "Set spatial interpolation of \rselected keyframes to  Linaer.";
                row2button7.helpTip = "Shift selected keyframes \rby frames or seconds.";
                row2button8.helpTip = "Shift selected keyframes \rby frames or seconds.";
                row2button9.helpTip = "Random selected keyframes \rby frames or seconds.";
                row2button.preferredSize = btnSizeWide;
                row2button2.preferredSize = btnSizeWide;
                row2button3.preferredSize = btnSizeWide;
                row2button4.preferredSize = btnSizeWide;
                row2button5.preferredSize = btnSizeWide;
                row2button6.preferredSize = btnSizeWide;
                row2button7.preferredSize = btnSizeWide;
                row2button8.preferredSize = btnSizeWide;
                row2button9.preferredSize = btnSizeWide;
                row2button10.preferredSize = btnSizeWide;
                row2button.onClick = function () {
                    cloneKey();
                    w.hide();
                };
                row2button2.onClick = function () {
                    mirrorKey();
                    w.hide();
                };
                row2button3.onClick = function () {
                    app.executeCommand(3693);
                    w.hide();
                };
                row2button4.onClick = function () {
                    alignKey(settingJson2Obj);
                    w.hide();
                };
                row2button5.onClick = function () {
                    organizeKey();
                    w.hide();
                };
                row2button6.onClick = function () {
                    setLinearInter();
                    w.hide();
                };
                row2button7.onClick = function () {
                    shiftUpKey(settingJson2Obj);
                    w.hide();
                };
                row2button8.onClick = function () {
                    shiftDownKey(settingJson2Obj);
                    w.hide();
                };
                row2button9.onClick = function () {
                    randomKey(settingJson2Obj);
                    w.hide();
                };
                row2button10.onClick = function () {
                    alignLayers();
                    w.hide();
                };
                row3.graphics.backgroundColor = row3.graphics.newBrush(row3.graphics.BrushType.SOLID_COLOR, menuData.yellow);
                row3.alignChildren = ["fill", "fill"];
                row3.margins = 5;
                row3.spacing = grpSpacing;
                row3.orientation = "row";
                var row3button = row3.add("button", undefined, "A: FoolParent");
                var row3button2 = row3.add("button", undefined, "S: QuickVal");
                var row3button3 = row3.add("button", undefined, "D: Reverse Layer Order");
                var row3button4 = row3.add("button", undefined, "F: Purge All");
                var rowSettingbutton = row3.add("button", undefined, "L: Options");
                row3button.helpTip = "Set Parent thorugh comp viewer.";
                row3button2.helpTip = "Modify keyframes’ value with keyboard\rIt’s useful after shifting keys.";
                row3button3.helpTip = "Reverse Layer Order.";
                row3button4.helpTip = "Purge all memory and disk cache.";
                row3button.onClick = function () {
                    runFoolParent();
                    w.hide();
                };
                row3button2.onClick = function () {
                    runQuickVal(settingJson2Obj, 0, settingJson2Obj.quickVal_preVal);
                    w.hide();
                };
                row3button3.onClick = function () {
                    reverseLayerOrder();
                    w.hide();
                };
                row3button4.onClick = function () {
                    app.executeCommand(10200);
                    w.hide();
                };
                rowSettingbutton.onClick = function () {
                    modifyShortcut(menuData, settingJson2Obj);
                    w.hide();
                };
                var row4 = leftGrp.add("group");
                row4.graphics.backgroundColor = row4.graphics.newBrush(row4.graphics.BrushType.SOLID_COLOR, menuData.red);
                row4.margins = 5;
                row4.spacing = grpSpacing;
                row4.orientation = "row";
                var row4button = row4.add("button", undefined, "Z: Path");
                var row4button2 = row4.add("button", undefined, "X: 0»100");
                var row4button3 = row4.add("button", undefined, "C: 100»0");
                var row4button4 = row4.add("button", undefined, "V: Fool Paste");
                row4button.preferredSize[0] = 40;
                row4button2.preferredSize[0] = 40;
                row4button3.preferredSize[0] = 40;
                row4button4.preferredSize[0] = 60;
                row4button.helpTip = "Add keys for selected layers’ Path property.";
                row4button2.helpTip = "Add 2 keys which of value are [0 & 100] \rfor selected properties.";
                row4button3.helpTip = "Add 2 keys which of value are [100 & 0] \rfor selected properties.";
                row4button.alignment = ["fill", "fill"];
                row4button2.alignment = ["fill", "fill"];
                row4button3.alignment = ["fill", "fill"];
                row4button.onClick = function () {
                    addPathKey();
                    w.hide();
                };
                row4button2.onClick = function () {
                    add2Keys(0, 100);
                    w.hide();
                };
                row4button3.onClick = function () {
                    add2Keys(100, 0);
                    w.hide();
                };
                row4button4.onClick = function () {
                    runFoolPaste();
                    w.hide();
                };
                if (isTrial) {
                    var row5 = leftGrp.add("group");
                    row5.graphics.backgroundColor = row4.graphics.newBrush(row5.graphics.BrushType.SOLID_COLOR, menuData.black);
                    row5.alignChildren = ["center", ""];
                    var registration = sx2K("p") + "  ||  Click 'Options' to activate the license.";
                    var registrationText = row5.add("statictext", undefined, registration, {
                        multiline: false
                    });
                    row2button6.enabled = false;
                    row2button7.enabled = false;
                    row2button8.enabled = false;
                    row2button9.enabled = false;
                    row2button10.enabled = false;
                    row3button.enabled = false;
                    row3button2.enabled = false;
                    row3button3.enabled = false;
                    row3button4.enabled = false;
                    row4button4.enabled = false;
                }
                if (AEversion < 13) {
                    var rowInput = leftGrp.add("group");
                    rowInput.graphics.backgroundColor = rowInput.graphics.newBrush(rowInput.graphics.BrushType.SOLID_COLOR, menuData.darkGray);
                    rowInput.alignment = ["fill", ""];
                    rowInput.margins = 3;
                    var inputText = rowInput.add("edittext", undefined, "press down shortcut...");
                    inputText.alignment = ["fill", ""];
                    inputText.active = true;
                }
            } else {
                w.graphics.backgroundColor = w.graphics.newBrush(w.graphics.BrushType.SOLID_COLOR, menuData.gray);
                var titleGrp = w.add("group");
                titleGrp.alignChildren = ["center", ""];
                titleGrp.margins = 3;
                titleGrp.graphics.backgroundColor = titleGrp.graphics.newBrush(titleGrp.graphics.BrushType.SOLID_COLOR, menuData.blue);
                var titleStr = [];
                titleStr[0] = "σ`∀´)σ~~~~";
                titleStr[1] = "~~~ヽ(●´∀`●)ﾉ~~~";
                titleStr[2] = "(,,・ω・,,)";
                titleStr[3] = "(((ﾟдﾟ)))";
                titleStr[4] = "~~~ლ(・´ｪ`・ლ)";
                titleStr[5] = "ε≡ﾍ( ´∀`)ﾉ";
                titleStr[6] = "(´･д･｀)ﾊ(･д･｀*)";
                var index = Math.floor(Math.random() * 7);
                var title = titleGrp.add("statictext", [0, 0, 180, 15], titleStr[index], {
                    multiline: true
                });
                title.graphics.foregroundColor = gray;
                var commandAllGrp = w.add("group");
                commandAllGrp.alignChildren = ["top", "fill"];
                commandAllGrp.spacing = 0;
                var commandGrp1 = commandAllGrp.add("group");
                var commandGrp2 = commandAllGrp.add("group");
                var commandGrp3 = commandAllGrp.add("group");
                var commandGrp5 = commandAllGrp.add("group");
                commandGrp1.alignChildren = ["top", "fill"];
                commandGrp2.alignChildren = ["top", "fill"];
                commandGrp3.alignChildren = ["top", "fill"];
                commandGrp5.alignChildren = ["top", "fill"];
                commandGrp1.margins.left = 5;
                commandGrp2.margins.left = 5;
                commandGrp3.margins.left = 5;
                commandGrp5.margins.left = 5;
                var infoStrAll = menuData.infoStrGrp1 + menuData.infoStrGrp2 + menuData.infoStrGrp3 + menuData.infoStrGrp4;
                var command1 = commandGrp1.add("statictext", [0, 0, 100, 100], menuData.infoStrGrp1, {
                    multiline: true
                });
                var command2 = commandGrp2.add("statictext", [0, 0, 150, 120], menuData.infoStrGrp2, {
                    multiline: true
                });
                var command3 = commandGrp3.add("statictext", [0, 0, 130, 100], menuData.infoStrGrp3, {
                    multiline: true
                });
                var command5 = commandGrp5.add("statictext", [0, 0, 80, 100], menuData.infoStrGrp5, {
                    multiline: true
                });
                commandAllGrp.graphics.foregroundColor = gray;
                commandGrp1.graphics.backgroundColor = commandGrp1.graphics.newBrush(commandGrp1.graphics.BrushType.SOLID_COLOR, menuData.lightGray);
                commandGrp2.graphics.backgroundColor = commandGrp2.graphics.newBrush(commandGrp2.graphics.BrushType.SOLID_COLOR, menuData.darkGray);
                commandGrp3.graphics.backgroundColor = commandGrp3.graphics.newBrush(commandGrp3.graphics.BrushType.SOLID_COLOR, menuData.lightGray);
                commandGrp5.graphics.backgroundColor = commandGrp5.graphics.newBrush(commandGrp5.graphics.BrushType.SOLID_COLOR, menuData.darkGray);
            }
            if (AEversion < 12 || settingJson2Obj.prefs_AutoClose === false) {

            } else {
                w.addEventListener("blur", function () {
                    w.hide();
                });
                w.onDeactivate = function () {
                    w.hide();
                };
            }
            w.addEventListener("keydown", function (event) {
                handle_key(event, menuData, settingJson2Obj);
                var myComp = app.project.activeItem;
                w.hide();
            }, false);
            w.show();
        }

        function handle_key(key, menuData, settingJson2Obj) {
            switch (key.keyName) {
                case "A":
                    if (!isTrial) {
                        runFoolParent();
                    }
                    break;
                case "S":
                    if (!isTrial) {
                        runQuickVal(settingJson2Obj, 0, settingJson2Obj.quickVal_preVal);
                    }
                    break;
                case "D":
                    if (!isTrial) {
                        reverseLayerOrder();
                    }
                    break;
                case "F":
                    if (!isTrial) {
                        app.executeCommand(10200);
                    }
                    break;
                case "G":
                    break;
                case "Q":
                    cloneKey();
                    break;
                case "W":
                    mirrorKey();
                    break;
                case "R":
                    app.executeCommand(3693);
                    break;
                case "E":
                    alignKey(settingJson2Obj);
                    break;
                case "T":
                    organizeKey();
                    break;
                case "Y":
                    if (!isTrial) {
                        setLinearInter();
                    }
                    break;
                case "U":
                    if (!isTrial) {
                        shiftUpKey(settingJson2Obj);
                    }
                    break;
                case "I":
                    if (!isTrial) {
                        shiftDownKey(settingJson2Obj);
                    }
                    break;
                case "O":
                    if (!isTrial) {
                        randomKey(settingJson2Obj);
                    }
                    break;
                case "P":
                    if (!isTrial) {
                        alignLayers();
                    }
                    break;
                case "Z":
                    addPathKey();
                    break;
                case "X":
                    add2Keys(0, 100);
                    break;
                case "C":
                    add2Keys(100, 0);
                    break;
                case "V":
                    if (!isTrial) {
                        runFoolPaste();
                    }
                    break;
                case "1":
                    applyExpression(settingJson2Obj.btn01);
                    break;
                case "2":
                    applyExpression(settingJson2Obj.btn02);
                    break;
                case "3":
                    applyExpression(settingJson2Obj.btn03);
                    break;
                case "4":
                    applyExpression(settingJson2Obj.btn04);
                    break;
                case "5":
                    applyExpression(settingJson2Obj.btn05);
                    break;
                case "6":
                    applyExpression(settingJson2Obj.btn06);
                    break;
                case "7":
                    applyExpression(settingJson2Obj.btn07);
                    break;
                case "8":
                    applyExpression(settingJson2Obj.btn08);
                    break;
                case "9":
                    applyExpression(settingJson2Obj.btn09);
                    break;
                case "F1":
                    break;
                case "F2":
                    break;
                case "F3":
                    break;
                case "L":
                    modifyShortcut(menuData, settingJson2Obj);
                    break;
            }
        }

        function handle_shortcut(key, input) {
            var osName = $.os.substring(0, 3);
            input.text = "";
            if (key.ctrlKey) {
                input.text += (osName == "Mac" ? "macControl+" : "Ctrl+");
            }
            if (key.metaKey) {
                input.text += "Cmd+";
            }
            if (key.altKey) {
                input.text += (osName == "Mac" ? "Option+" : "Alt+");
            }
            if (key.shiftKey) {
                input.text += "Shift+";
            }
            input.text += key.keyName;
        }

        function createResourceFile(filename, binaryString) {
            try {
                var userFolder = Folder(Folder.userData.absoluteURI + "/Ola script UI");
                if (!userFolder.exists) {
                    userFolder.create();
                }
                var myFile = new File(Folder.userData.absoluteURI + "/Ola script UI/" + filename);
                myFile.encoding = "BINARY";
                myFile.open("w");
                myFile.write(binaryString);
                myFile.close();
                return myFile;
            } catch (err) {
                alert("Error in createResourceFile function\n" + err.toString());
            }
        }

        function createJsonFile(filename, inputObj) {
            try {
                var userFolder = Folder(Folder.userData.absoluteURI + "/Ola script UI");
                if (!userFolder.exists) {
                    userFolder.create();
                }
                var myFile = new File(Folder.userData.absoluteURI + "/Ola script UI/" + filename);
                if (myFile.open("w")) {
                    myFile.encoding = "UTF-8";
                    myFile.write(JSON.stringify(inputObj, undefined, "\r\n"));
                    myFile.close();
                }
                return myFile;
            } catch (err) {
                alert("Error in createResourceFile function\n" + err.toString());
            }
        }

        function testIO(prefFile, shortcut) {
            var osName = $.os.substring(0, 3);
            var AEversion = Number(app.version.substring(0, 4));
            var textFile = prefFile;
            var matchStr = "";
            var pathname = $.fileName;
            var leafname = pathname.split("\\").pop().split("/").pop();
            var itemIndex = Number(leafname.substring(1, 2));
            if (osName == "Mac") {
                if (AEversion >= 14 && AEversion <= 14.1) {
                    matchStr = "\t\"ExecuteScriptMenuItem0" + itemIndex + "\" = ";
                } else {
                    matchStr = "\t\"ExecuteScriptMenuItem0" + itemIndex + 1 + "\" = ";
                }
            } else {
                matchStr = "\t\"ExecuteScriptMenuItem0" + itemIndex + "\" = ";
            }
            textFile.copy(textFile.fsName + ".bak");
            if (textFile !== null) {
                var textLines = [];
                textFile.open("r", "TEXT", undefined);
                var frontStr = [];
                var backStr = [];
                var chk = 0;
                while (!textFile.eof) {
                    var txt = textFile.readln();
                    if (chk === 0) {
                        frontStr.push(txt);
                    } else {
                        backStr.push(txt);
                    }
                    if (txt.match(matchStr) !== null) {
                        chk = 1;
                    }
                }
                textFile.close();
                textFile.open("w", undefined, undefined);
                textFile.encoding = "UTF-8";
                if (osName == "Mac") {
                    textFile.lineFeed = "Macintosh";
                } else {
                    textFile.lineFeed = "Windows";
                }
                for (var i = 0; i < frontStr.length - 1; i += 1) {
                    textFile.writeln(frontStr[i]);
                }
                textFile.writeln(matchStr + "\"(" + shortcut + ")\"");
                for (var j = 0; j < backStr.length; j += 1) {
                    textFile.writeln(backStr[j]);
                }
                textFile.close();
            }
        }

        function runScript(thisObj) {
            function createDefaultJson() {
                var defaultSettingObj = {};
                defaultSettingObj.btn01 = {};
                defaultSettingObj.btn02 = {};
                defaultSettingObj.btn03 = {};
                defaultSettingObj.btn04 = {};
                defaultSettingObj.btn05 = {};
                defaultSettingObj.btn06 = {};
                defaultSettingObj.btn07 = {};
                defaultSettingObj.btn08 = {};
                defaultSettingObj.btn09 = {};
                defaultSettingObj.btn01.title = "easeOut";
                defaultSettingObj.btn01.mode = "easeOut";
                defaultSettingObj.btn01.expStr = "50";
                defaultSettingObj.btn01.index = "1";
                defaultSettingObj.btn02.title = "easeOut";
                defaultSettingObj.btn02.mode = "easeOut";
                defaultSettingObj.btn02.expStr = "90";
                defaultSettingObj.btn02.index = "2";
                defaultSettingObj.btn03.title = "easeIn";
                defaultSettingObj.btn03.mode = "easeIn";
                defaultSettingObj.btn03.expStr = "50";
                defaultSettingObj.btn03.index = "3";
                defaultSettingObj.btn04.title = "easeIn";
                defaultSettingObj.btn04.mode = "easeIn";
                defaultSettingObj.btn04.expStr = "90";
                defaultSettingObj.btn04.index = "4";
                defaultSettingObj.btn05.title = "easeInOut";
                defaultSettingObj.btn05.mode = "easeInOut";
                defaultSettingObj.btn05.expStr = "90";
                defaultSettingObj.btn05.index = "5";
                defaultSettingObj.btn06.title = "wiggle";
                defaultSettingObj.btn06.mode = "expression";
                defaultSettingObj.btn06.expStr = "wiggle(3,50);";
                defaultSettingObj.btn06.index = "6";
                defaultSettingObj.btn07.title = "time";
                defaultSettingObj.btn07.mode = "expression";
                defaultSettingObj.btn07.expStr = "time*5;";
                defaultSettingObj.btn07.index = "7";
                defaultSettingObj.btn08.title = "loop";
                defaultSettingObj.btn08.mode = "expression";
                defaultSettingObj.btn08.expStr = "loopOut('cycle');";
                defaultSettingObj.btn08.index = "8";
                defaultSettingObj.btn09.title = "separate D";
                defaultSettingObj.btn09.mode = "JavaScript";
                defaultSettingObj.btn09.expStr = "try {\n for (var i=0;i<app.project.activeItem.selectedLayers.length;i++) \n  app.project.activeItem.selectedLayers[i].property(\"ADBE Transform Group\").property(\"ADBE Position\").dimensionsSeparated = (app.project.activeItem.selectedLayers[i].property(\"ADBE Transform Group\").property(\"ADBE Position\").dimensionsSeparated)?false:true;\n    }\n catch (e) {\n     alert (e);\n     }";
                defaultSettingObj.btn09.index = "9";
                defaultSettingObj.randomKeys_preVal = [0, 5];
                defaultSettingObj.randomKeys_preUnit = "Frames";
                defaultSettingObj.shiftUpKeys_preVal = 5;
                defaultSettingObj.shiftUpKeys_preUnit = "Frames";
                defaultSettingObj.shiftDownKeys_preVal = 5;
                defaultSettingObj.shiftDownKeys_preUnit = "Frames";
                defaultSettingObj.quickVal_preVal = 10;
                defaultSettingObj.prefs_AutoClose = true;
                defaultSettingObj.prefs_AlignLeft = false;
                return defaultSettingObj;
            }
            var menuData = {};
            menuData.gray = [0.9, 0.9, 0.9, 1];
            menuData.blue = [0.2, 0.3, 0.4, 1];
            menuData.lightGray = HexToRGB("#d0d0d0");
            menuData.brown = HexToRGB("#E1D9C6");
            menuData.darkGray = HexToRGB("#727171");
            menuData.darkGray2 = HexToRGB("#4b4b4b");
            menuData.black = HexToRGB("#222222");
            menuData.red = HexToRGB("#D66EA7");
            menuData.purple = HexToRGB("#79519a");
            menuData.white = HexToRGB("#fefdee");
            menuData.green = HexToRGB("#6fc2a0");
            menuData.darkGreen = HexToRGB("#39868E");
            menuData.yellow = HexToRGB("#EBAE6D");
            menuData.orange = HexToRGB("#D08965");
            menuData.infoStrGrp1 = "<<Add>>\r1...Null\r2...Square\r3...Ellipse\r4...Vertical Line\r5...Horizonal Line";
            menuData.infoStrGrp2 = "<<Key>>\rQ...Clone\rW...Mirror\rE...Time Reverse\rR...Align...\rT...Organize\rY...Add Path Key\rU...Set Linear Interpolation";
            menuData.infoStrGrp3 = "<<Layer>>\rA...Fool Parent\rS...Reverse Layer Order\rD...Select Last Layer\rF...Mode: Difference";
            menuData.infoStrGrp4 = "<<Expression>>\rZ...wiggle\rX...toComp";
            menuData.infoStrGrp5 = "<<Other>>\rP...Purge\rO...Options";
            menuData.btn01 = {};
            menuData.btn02 = {};
            menuData.btn03 = {};
            menuData.btn04 = {};
            menuData.btn05 = {};
            menuData.btn06 = {};
            menuData.btn07 = {};
            menuData.btn08 = {};
            menuData.btn09 = {};
            var settingJson2Obj = {};
            var myFile = new File(Folder.userData.absoluteURI + "/Ola script UI/KEYboard_setting.json");
            if (File(myFile).exists) {
                var modifiedFlag = 0;
                if (myFile.open("r")) {
                    myFile.encoding = "UTF-8";
                    var myJson = myFile.read();
                    try {
                        settingJson2Obj = JSON.parse(myJson);
                    } catch (e) {
                        alert("Preference file is missing, KEYboard will back to default setting");
                        settingJson2Obj = createDefaultJson();
                        settingJson = createJsonFile("KEYboard_setting.json", settingJson2Obj);
                    }
                    myFile.close();
                    modifiedFlag = 0;
                }
                if (settingJson2Obj.btn01 === undefined) {
                    settingJson2Obj.btn01 = {};
                    settingJson2Obj.btn02 = {};
                    settingJson2Obj.btn03 = {};
                    settingJson2Obj.btn04 = {};
                    settingJson2Obj.btn01.title = "easeOut";
                    settingJson2Obj.btn01.mode = "easeOut";
                    settingJson2Obj.btn01.expStr = "50";
                    settingJson2Obj.btn01.index = "1";
                    settingJson2Obj.btn02.title = "easeOut";
                    settingJson2Obj.btn02.mode = "easeOut";
                    settingJson2Obj.btn02.expStr = "90";
                    settingJson2Obj.btn02.index = "2";
                    settingJson2Obj.btn03.title = "easeIn";
                    settingJson2Obj.btn03.mode = "easeIn";
                    settingJson2Obj.btn03.expStr = "50";
                    settingJson2Obj.btn03.index = "3";
                    settingJson2Obj.btn04.title = "easeIn";
                    settingJson2Obj.btn04.mode = "easeIn";
                    settingJson2Obj.btn04.expStr = "90";
                    settingJson2Obj.btn04.index = "4";
                    settingJson2Obj.btn05.title = "easeInOut";
                    settingJson2Obj.btn05.mode = "easeInOut";
                    settingJson2Obj.btn05.expStr = "90";
                    settingJson2Obj.btn05.index = "5";
                    settingJson2Obj.btn06.title = "wiggle";
                    settingJson2Obj.btn06.mode = "expression";
                    settingJson2Obj.btn06.expStr = "wiggle(3,50);";
                    settingJson2Obj.btn06.index = "6";
                    settingJson2Obj.btn07.title = "time";
                    settingJson2Obj.btn07.mode = "expression";
                    settingJson2Obj.btn07.expStr = "time*5;";
                    settingJson2Obj.btn07.index = "7";
                    settingJson2Obj.btn08.title = "loop";
                    settingJson2Obj.btn08.mode = "expression";
                    settingJson2Obj.btn08.expStr = "loopOut('cycle');";
                    settingJson2Obj.btn08.index = "8";
                    settingJson2Obj.btn09.title = "separate D";
                    settingJson2Obj.btn09.mode = "JavaScript";
                    settingJson2Obj.btn09.expStr = "try {\n for (var i=0;i<app.project.activeItem.selectedLayers.length;i++) \n  app.project.activeItem.selectedLayers[i].property(\"ADBE Transform Group\").property(\"ADBE Position\").dimensionsSeparated = (app.project.activeItem.selectedLayers[i].property(\"ADBE Transform Group\").property(\"ADBE Position\").dimensionsSeparated)?false:true;\n    }\n catch (e) {\n     alert (e);\n     }";
                    settingJson2Obj.btn09.index = "9";
                    modifiedFlag = 1;
                }
                if (settingJson2Obj.shiftUpKeys_preUnit === undefined) {
                    settingJson2Obj.randomKeys_preVal = [0, 5];
                    settingJson2Obj.randomKeys_preUnit = "Frames";
                    settingJson2Obj.shiftUpKeys_preVal = 5;
                    settingJson2Obj.shiftUpKeys_preUnit = "Frames";
                    settingJson2Obj.shiftDownKeys_preVal = 5;
                    settingJson2Obj.shiftDownKeys_preUnit = "Frames";
                    settingJson2Obj.quickVal_preVal = 10;
                    modifiedFlag = 1;
                }
                if (settingJson2Obj.prefs_AutoClose === undefined) {
                    settingJson2Obj.prefs_AutoClose = true;
                    modifiedFlag = 1;
                }
                if (settingJson2Obj.prefs_AlignLeft === undefined) {
                    settingJson2Obj.prefs_AlignLeft = false;
                    modifiedFlag = 1;
                }
                if (modifiedFlag == 1) {
                    myFile.remove();
                    settingJson = createJsonFile("KEYboard_setting.json", settingJson2Obj);
                }
            } else {
                settingJson2Obj = createDefaultJson();
                settingJson = createJsonFile("KEYboard_setting.json", settingJson2Obj);
            }
            var binout1 = "PNG\r\n\n\0\0\0\rIHDR\0\0\0\0\0\x002\b\0\0\0¤\0Ñ\0\0\0\tpHYs\0\0\v\0\0\v\0\0\0\0tEXtSoftware\0Adobe ImageReadyqÉe<\0\0JIDATxÚìÏ\tÂ0Æ«xWÁ£¢è\0.à\b¼ðÜSFp¡Ý@\x07Ptãõ<!hQÓôò|Béïýky\x07uE3¨1Îp3á\fw-9N!\b\n\réØCj8¬ÂìàFP¥Ðê|úFÃæ2°v\"\b´³måi§ô>A3@S/5\x07xLi\no\rgÀÒU·­9¥zïüëKJµô:çp­Ç(8ªcÃ­hý®Wr­þ'[ç3½@ªÜíÝN«ó\nuá\\ùv®çúP%øÝùn¡ë;}y'\vâÄ®ÛwV=F6Nó_ê\x07°^Nm£¢²ðe¤lô\rpPÑà÷²1ÖÆóÍ®P+ç)2ÖÃ¹$°øô÷2ãl]÷8EÐ¿n2|uf8ÃÎp3ü5î\f\0ËPhËÕÂ|W\0\0\0\0IEND®B`";
            var binout2 = "PNG\r\n\n\0\0\0\rIHDR\0\0\0\0\0\x002\b\0\0\0¤\0Ñ\0\0\0\tpHYs\0\0\v\0\0\v\0\0\0\0tEXtSoftware\0Adobe ImageReadyqÉe<\0\0IIDATxÚìÁiÃ0ã¢c¡Áq\x07HºAÀ\vdæâ³7h6HzõI#r6h\r»Á¸ÿ+\n&$Ö³êPx9AÒ§ÿéI²£®ëf÷*³;\v\\à¸Àÿ¼ªë%ô<)ÀÒx4Ðr8¹¶xüZ(~Is©­\n\f^£ÚC\r4\x07´¹Ö^rë ÏÕCú©\tê².ÄíàÎôÉÕ±ªr¨£Ó_p¬]_áÖrÆPÌõ=e¯_Çlµ®Æ½Ó¡qJ,@ß&;^cL%ºõ¹ÔuHðMç\t>w^ft&¿µJ5zÑäiÒTkÓLy¥RÔvÎuñÌö23\fð#´èý~rW«ñÝj[&üðë¿ÖßyZæoÜmG®?0½7AW<-ôO¢q÷¹¼½\n\\à¸À>¤|\v0\0Ì\np{«Ñ\0\0\0\0IEND®B`";
            var binout3 = "PNG\r\n\n\0\0\0\rIHDR\0\0\0\0\0\x002\b\0\0\0K^kï\0\0\0\tpHYs\0\0\v\0\0\v\0\0\0\0tEXtSoftware\0Adobe ImageReadyqÉe<\0\0\\IDATxÚbüÿÿ?Ã@\0&£Z<jñ¨Å£Z<Â,¾{ï\b;\0ñ²x]-±ò§»Å@\0Ä\v°Æ1\v\r}[\0ÄôNÕ@A\fôí\\\nXhàÛ\0h¢R [>å[ µ\0¿¸âêC-åÙ ¥\b©g¤FOÉRP¼&Ð¥ÈZäÓbõ±Pe&@R\0ÐÒ¤èGX¼7\rdÀ~,jg@³°ãA(õâLH{Ó ©ûÐ\r$ûh´02D_>Z\nr\\=?hù¢-þÅ&¶_úÙâLÿ}dú÷ãóß¯WÿÿS\0gûxµêc)B·í×«BpPZØÿÔ ¾ÇD½i9Ð(\x07âÐ²«Å 5b1âYÉÞyÖ|Å&ãèPÄ¨Å£Z<jñ¨Å£Ã\0@\0JøsHc±s\0\0\0\0IEND®B`";
            var binin1 = "PNG\r\n\n\0\0\0\rIHDR\0\0\0\0\0\x003\b\0\0\0oÀÓt\0\0\0\tpHYs\0\0\v\0\0\v\0\0\0\0tEXtSoftware\0Adobe ImageReadyqÉe<\0\0^IDATxÚbüÿÿ?Ã@&£Z>jù¨å£ZNUÀOòî½{@J\0ÄVVR:@mË±Õç@K7\0)(÷\"Ôò@ü@ñ PÝr<!¡\0¤8\0ê¸@Ü@®#ÉmÉ@\0Äõ@<èºYæ\rP®Ðèf9#@£ä\vtµÉ 4a@L\bP5-Lå*d@\tO\0\nt\rv¤àwú^_ðÓ¤x ¡0 eûh9@Ëau4\n¤VÛ\0Íz¤×jd½ià¢WCVâ'X\0Ãý³qçY\r¸S;DÓh\röìjçYÈ°äÛýâÎ³ñù|Ôb(½hP\r~7 §1!Æ×UdX.@å bÄoÕª;^ËAíM{\0\r¶@þZfÆÑaQËG-µ|ÔòQËG-ò\0u³¯¼\0\0\0\0IEND®B`";
            var binin2 = "PNG\r\n\n\0\0\0\rIHDR\0\0\0\0\0\x003\b\0\0\0oÀÓt\0\0\0\tpHYs\0\0\v\0\0\v\0\0\0\0tEXtSoftware\0Adobe ImageReadyqÉe<\0\0RIDATxÚbüÿÿ?Ã@&£Z>jù¨å£Z>Ì-¿{ï^\0/\0bðù(}è  åøZ2P/\0b] ¬¤´n#GÔ\x078ètKpPÃâÿÔ1ôñ9PX\0tT]-GJ\v°øw 7)i:²#\n:à]\v \t@ªq {\t\x07tÀP6âý@\x07$Ð-ØÑ¢À@åÁºZu´, ÊÔî«AC`?;p®C ôþÐ\f¯7°þ~ûIjó¬\x07¸-ßr­=¥@Åäç{Ó°ùÊh<4XÐ4@-~ ^ó¡UÊÆG¯:¹¡ù.¸¿LT\fv<ó,Pi\bÄ@H¶Åô.dF[¯£Z>jù¨å£Z>`\0 À\0w36¾ã\0\0\0\0IEND®B`";
            var binin3 = "PNG\r\n\n\0\0\0\rIHDR\0\0\0\0\0\x003\b\0\0\0¸J\0\0\0\tpHYs\0\0\v\0\0\v\0\0\0\0tEXtSoftware\0Adobe ImageReadyqÉe<\0\0vIDATxÚbüÿÿ?Ã@\0&£Z<jñ¨Å£Z<,¾{ï'\f¸Ö3bk\0}üH(+)= wo\0âH\\ \vèn107@<a ²(5\0- «Å@_/\0RhÂ\t   N\0ú:®C³(-\0,t-2¡A²ü\x005-'ª¬F³*ÁÎHJß\tjé(n\0:è],Z®\0µXjù\fE{Ó òÈàó¬Ø-h\0Äü@<¨°\0²HÏxÙ¾7í\0´GÓrh¦Å{Ó@Å{4Å@|_\b¼°²ùÅ*bóËñÿßLÿ~Þ~¿ÏåÏq|³ I(`17\x07à³XðÃ1óÌ_fNÿl*Ì,í;Ïº\0ôõE K*ò]âDWÌ(ÃÔ8,\0\x07hi%\0N@$XJóT=ÚÊµxÔâQG-µxÔbª\0\0-ô<\0\0\0\0IEND®B`";
            var bininOut1 = "PNG\r\n\n\0\0\0\rIHDR\0\0\0\0\0\x003\b\0\0\0oÀÓt\0\0\0\tpHYs\0\0\v\0\0\v\0\0\0\0tEXtSoftware\0Adobe ImageReadyqÉe<\0\0¬IDATxÚì=V@ÇÁg¯e06vÉ\rä=.À¨¶²àr©©r<À>ñÆÂÒ'à\føÖå#Äbæ½y\vËîüøïî\fØeYZ§²3ëÆp3á\fgø¨vÞÔù±Ù8ÐtÞÌçë.Ai¾\vmó³>Êqr\nÁrp×\0z\t¾ËOpÿÐxÛägÐDà!¨XµY¢Jò\0Æ£Àµà8ÕCã\vÂ³Øt{ì.¿Q\0Á¥Dåª\fúñ¥\nèóvÚI1¾PãYX*\x07ô¨©Ví=-µEÐØd\x07-»¢ÕãÞâJ|_<%Ï\r,¥<Fµo}ÀC*\\Fð]LW^©bÍè¦}ßR~OGèU×º?&|ÕSM\n÷w/½¤¾ÛçÏµ~/±[ÆºUvxÉz¿r)|\nüPµÛû~&E¤ÄzmõW¹¨ôNy^å±6\x07+Û¢÷¢Ý/hìÎ@½¿¯Èè%òÊ©jÛ-eWµX*\\DÁgJ÷µ½¢yõó!E@5àbEÃk»NãÌK¢I>,üëÌp3á\fgø¿ÿ\b0\0) ß\t\0\0\0\0IEND®B`";
            var bininOut2 = "PNG\r\n\n\0\0\0\rIHDR\0\0\0\0\0\x003\b\0\0\0oÀÓt\0\0\0\tpHYs\0\0\v\0\0\v\0\0\0\0tEXtSoftware\0Adobe ImageReadyqÉe<\0\0´IDATxÚìVËmÂ@5(ÐA,R\0î\0×\\@$ÏtÀKÜA \0+¦lîPsÈ¼\tÈ,ë?4+VkÏ¾·ovf´ý~o]jt­\v!r!r!ò¿!ßl·^Sp`ôòpºY0Í0+]ØÁ¤`n%ò~?Ñæ\0¨\n±Ç{çÀÉ$·è%go\x07K`N¯æïùvÊ<£XÉæ@É® Ô/°1üâ³d;BLdË¼äâPß!®Tj\01IáBù ­Ô¹ÇU`kªGFü¿&UC¯«8³¶;MùÌál·½r¶¯R!¦\\\b«ªnÒÛ)r·ê¦äüsWûg'ç¯aw\\ÛµÆi|Cº³&\vsÍF¾©-ág`)ü[æ+?8S9=À±×U½T÷ïõdÂ:Vù;§ÇÚ\0=4|{¥ûO­IÈujýõ½ô+\r@/OCC¡ñÑ^Ö\r§9Ø'ä!Îðû¤TÃú=\"d\n´:ò|ÅÍgðUpåî30*,vÍ²]ÎB.äB.äB.äÿüK\0kUýÈ½l\0\0\0\0IEND®B`";
            var bininOut3 = "PNG\r\n\n\0\0\0\rIHDR\0\0\0\0\0\x003\b\0\0\0¸J\0\0\0\tpHYs\0\0\v\0\0\v\0\0\0\0tEXtSoftware\0Adobe ImageReadyqÉe<\0\0ÒIDATxÚì¿JÃ`À\x07!£µÕM°o`ÅÈ¬vt¬ààÖºê` >@ »'ÖvëèT©wõÓ&-ù@;8Bþ|÷»ù.­4NKE\\*HÌ`3Á\fNîõûeÔ<¯²q\r´S`:i\"°ªæV§ºZ©Xp8Ì\tÙ³Dk\bµ©ç\0.vµMÞfÊ`b0>\\ÏØÑ¸~(qf0­·À\\à×ZF°fçêj)Ó¯ÑÙ·AOSîbèðdn \f¦EO Íà&9zH4(ê@ur¼LQ_âÞMuKRÛ69¼R¤¹m¦¡R}ÔÙ 8¹uÈ v':Ñ¨~]w©qÂòÜÛ½Ð¨mpX'[þ\bl-Þ¶f ¿Å~³`Y?kÈé@ÿ÷©²µ±i`_l~üWÙÚ½É¾ì}Ï9ìÉë'o|*îxJæ¢Þk%t#®õA_Ý±ÿÍGÞAÃuÝ½·¥(k`gj\x07¸vqÅ4ØR{\0Çs:¿ûöòæJ\"¦¡Ç»újø¯\b3Á\ff0\v\x07ÿ\n0\0]£V^Q¨Â\0\0\0\0IEND®B`";
            var binQrow1 = "PNG\r\n\n\0\0\0\rIHDR\0\0\0(\0\0\x003\b\0\0\0åïJ5\0\0\0\tpHYs\0\0\v\0\0\v\0\0\0\0tEXtSoftware\0Adobe ImageReadyqÉe<\0\0ÁIDATxÚìX=lÓ@¾DÊFÌÀ\\¹\v[ æ\fagiVµ[3¶['Ôt)]É­C:tC \"X°`éÐ.5ïS¿_ê¸=?ééûóçïÞ{v¾Z¦&d«À­xç.ÌcoIK3o³kw9»!1øícñ§\0* {A\0 4Mñ-am\"~\bÅ×Caà\fYKÄãP\0fBÊâ$£ï,$Æbí¦4«¶ÿÖJì-Ä_ ÛA¤Ù7fÒ WY\vYí¿þà!¿×èÕ×ÌUÀ>4fòûòüFDÀá¨¶Å[i÷É±ÏÃ<\\¬ÅõéÅå#Ys^@ÛãÏ_y Éôø\n»>qÍùÜXnöLÝÇÍ¥Zvjp×£²bð\fh\tß§¬Ùv~õR\0òXZ\nä¾ô­å¬y#Í\v\\/Ök¾q½Ä ÷\rñ¾ï|øËÏ£×ï¾ìÌ²ÆõB¯:&e,ëMÒç\x07E_%Ã7aêÁ!yö,Px~Î$kÐ);&dFÙYñy][}Ö\0Ä-KK}óÈ,ÞW]S3%©ÅrãUì\vÇ [v8ÿ ÌRvJý`u³¸úÜª\0V*þåú_2ñM1¸àÁtÈ»ÔºRtw]69S£Á\fO(\f¥¯£æ©u]ñZ\fâæ¯Ì´; ¢ª\ròïPüo\r7_¦NÓVó;Ôo6\v17ÈÀ¡Üñ-ª\\CóWH%`ÓÌ\x07ô\r»8V±Ç+7Ê÷°&×§óJFl?:Ú?ã&_YMø@5D·(@+BÚjª#³Â9@õ\brq7u?î¹½B\0ytóX=±Ö¥1Lÿi3ÝeLÅãÇÇË`õ.®\0Þ¶ý`\0t\r¤T¼ýtF\0\0\0\0IEND®B`";
            var binQrow2 = "PNG\r\n\n\0\0\0\rIHDR\0\0\0)\0\0\x003\b\0\0\0\n-!\v\0\0\0\tpHYs\0\0\v\0\0\v\0\0\0\0tEXtSoftware\0Adobe ImageReadyqÉe<\0\0~IDATxÚì½NÃ0ÇÓ¨;'¨Ü\x07 s>\0\v¬FØèÊF·´KÛ¹\v;XA;xOîèN[RÛmÈIÅvýñÓÅg§WÉ²Ì+ºùÞ°²ÌkÓ$yõY}bõ>¯oÊHP@eAe´=P¼iÈ@ÐZ ÁÉgd\vYu\0çóZehãÞÞ'ëBDÌc2fõú$En\tÕÒ@FE9êy6¡\0r4.!\f¶D<iD;ñdåß}Á±³\r\n~w#`¯üÀX¸yûÛ®]v.?ç¤mx¼Â3txÏ3H¶hòÐ´\v:Î\vêÿ2éJ 5CN\t(\rA{¶ÄI¶ÛìlÿÕRú\0¬ æM:¶¶éë±\btÂ\0Ðöd½'è\r 4àl\\&ònÚ(Þö26A÷J¿Ô3]\x07åF©ø!çõ\vi_/säXß8\fPn±H­ö§îÎV­Æ\0¿ûÜ\\¾ÁÆG¯YFü¦ß-dN&âê?0èÂ#E²1 Utë¤n*Vÿ\n²R¦£KÈüa3P«èìz?9ÉYuXlàÍòôs§.Dê_I*êQv­S(uG¦®Ï`üÞÂõÛ¶OÆ´À)% pèõÊõ>í0XÁÖi¾î-A9%Î³¤úªÇ0>!|/CÎ¢dkÕñö\tæÔÁ¤´toÀ[ä<K\b.PÚÄ:¢;±Äê!)emÖL4å$G]ý& ²÷ø*ïî²hö)À\0PöLÿT\0\0\0\0IEND®B`";
            var binQrow3 = "PNG\r\n\n\0\0\0\rIHDR\0\0\0)\0\0\x003\b\0\0\0\n-!\v\0\0\0\tpHYs\0\0\v\0\0\v\0\0\0\0tEXtSoftware\0Adobe ImageReadyqÉe<\0\0æIDATxÚìX=oA=GôÄéèàü\x07\"9Jt4×Ä¢ËEHvI¨2¥]ÓØ.É5ô\nö@º¼whX­ïâ}¾[éi?nvçíììÇM%\"§èiËy©$ù_|²ªnÃPïÀpZsÝE´dØ\\ÄÝ\"\fa½\tpÊº[X[\\òÉ*Æ«¬ê07|ò÷Ò+Ò'\\§è>Ùcý <Ì³ZR'«²d¥|$W{°\0ÞÆ á#k\0ÏUóø¼FÀç¹]*C\"N¯w,{ÙÝ$8Îpxß¶iÉ§ªùrÃ¼-)D|(^´]`ð\fKçäÙõ¿ûKÊ7r%\t²læÿ²ìÄ2¤Â#VÒò,DòI*X>Gíý¡EþÙ{ü\vÈO×bIÍ#A&i¿±LhºÖå_±¾HvÎcè&ÉâéJ±ÜYà|øæ/!»\rxYu=s2óÃ«ï×Ãò7Ðí%$w<¾Ms;'%Aáw÷Kâ-¯JM®\byü@@fwªé+ðåøévn³n®w7Æõkà²æäÆõIã,¼¡OëÚ8åßbI²Ð9vªE.+ Í°£Ú$ÞØd.ÇL\rßCÆ\"ûR§DÒ$Ý[0^å£BÖ¾ýÓ7É®ãì±|ArbîJÔ\nâ8ä|#íBqÕmu±{³ oòrKðVA«(\x07TT§H`!)ùe%ûw<¥¢ÎI×ÔÖ¾ñÉ:Ý ¢Eã$³>à2UYüÂñÕ(\vÞ*2}ÓH¼l\x07h³pà-0£|²mÇ/§ÿö8V`L|aß4µ¡Zô'mÍóXÖ¥uû¤ýåÚwËf9µ<3ÎìÚÉØ?~;ä2Æ>ã7¹I~R¶Ð·¼KM÷\f\0RÎÃóÏr\x07\0\0\0\0IEND®B`";
            var binQrow4 = "PNG\r\n\n\0\0\0\rIHDR\0\0\0)\0\0\x003\b\0\0\0\n-!\v\0\0\0\tpHYs\0\0\v\0\0\v\0\0\0\0tEXtSoftware\0Adobe ImageReadyqÉe<\0\0¥IDATxÚìX¿oÓ@>7\nRþpØ©!CÙP²0fa`kFÆvó ]hW\"$f\bÈ\v¨EELHAbDÂ\t$d¾'¥;çì^ÀOútöÕïÞ×÷ËÎsâ8¶ËX\0©HþW$]S\x07MÂ0]\x07MÏ»hIm`Ä×ud\tá½kÃÍâ!ìkáÈÆÂÙö¶z²ïíT-ÈpNFðjh{N>2u¨óO~!>Ð²ýÝMëÕ\x07Æ<$áëúýã\v÷?ü8«\0 <ZÀ\0«5G|ÿËqÿÒ¡ÁD8ÚªúK9\f\b<E÷ªIëCVtôUÃÝ\f\bÉÐÝ2ôH\",>½Ôö[6^¸¾ráÀP/1tÚu&S_óè3Au}*Ü~úîèñ÷Wuõ\x07¯î\0u-]#GI\0´óÌífþüóÏúJnq5X3ïõ¿­¶_F,ÜjDu9%þCik!Mp%Wqhæ×RInbßÏ (¸/e;`Ï¤%y­}d¤Å/$¬\"z\vû»*/õËáìríÓ¹åÚ½×[¿¼£}Ss5óè2úÛÍ(ÂÄ©fæ6ÄOÛõdxJ+ÝÛèIOº¦jXIWÃk[Ò8oÐô¼í)#1Å³³Ð@fCWøgü\fy|3ºÆ<\t£hA`kg4v¤}Oò8ÓQM%<£#<ÅÒfç£)g¥ig:'7jfÒ(ÚÔ8ÚU\f÷îõDCÖi]Ýc¾ì0Ê!ÉGn\"ÁSÃ)-'¹ïsñlHûa×Oäµà\v®ÔvÎÌ®(FL¤;oU¦ä·\0\0]iu®ÊN\0\0\0\0IEND®B`";
            var binQrow5 = "PNG\r\n\n\0\0\0\rIHDR\0\0\0)\0\0\x003\b\0\0\0\n-!\v\0\0\0\tpHYs\0\0\v\0\0\v\0\0\0\0tEXtSoftware\0Adobe ImageReadyqÉe<\0\0½IDATxÚìX1oÓP~n3@jÜÁeO%*&$:\r\t$\fLíÿFb-Þº3ÁÚ\b½H 1µ\"Je`á\x07 ÜJm7dîÊ÷¢ËÃ\tvpÛ¾'Î~þ|÷½»{ÏÉ9I¨²u%y¡HVþÕÀ ê¤6S\v×.E$ÈRKcr¸¤SäDQec>ïÚcIZçdT´Aç\\ÿ\n¢3ñ]ì:ÉâÿH÷X&XµÇ´$ËNÒ\t·«>ì³^Ì½¿µW{öõèÆ©æì5}åÄ¿õéoØYGþLÔíqØÂ\"iä1Ç÷i5±DðÊ8lÑé^ ú$»<»~¢$)Uìà¥1½ò&ö5©Õìß8ä|EÝAMîÁ¾ÐD¯VÁ$ìd§´q¦Çowõ|«¼ÿ¼ûêã{Óúú\\½~YeÊÃk¾×æ*\x07ö0·$-É3Bòi,ßì¿Å\vGÛh¼:AÞ.Ç°&iu\rR!æ¹Ú­fîæÞT¿;¸¸î³&C¸5ºîàÝ6Íh¨ò{õù»êÏ¶ò<4ÑE$lC4Yº!\fÌCëÑc_Õ}¡yØó/É`®\0ð}WâgE^­\v +ëô$¢Ò¥ë¬Ú5¢Ó\x076ÍÁq9:KfMz Ã¨¢9\\CóhÑ¢\"µY7ÑüÊaCâ*\"-\fpT¥¥¦wØ8;[\0ÉzF®(!\x07Ô8?kDR(°ÄbNkÀH+%¢^@r}÷¾(½>I\rá´)W'F©øÂÇ\v$Ã\\GÔsD÷Æû¦HG\néÕ»Û»{ªÏ\"do$ºq-í Ý\t\n½y§¿ýQÔø%À\0=rÔÉ÷\0\0\0\0IEND®B`";
            var binQrow6 = "PNG\r\n\n\0\0\0\rIHDR\0\0\0)\0\0\x003\b\0\0\0\n-!\v\0\0\0\tpHYs\0\0\v\0\0\v\0\0\0\0tEXtSoftware\0Adobe ImageReadyqÉe<\0\0bIDATxÚì½JAÇï\"¨g#¢\\ÄÖ@ BÄ'P°ñ£1/ N±JªÔ ØG¤Õ,EðPì b#ÿ1s°ßaÏÛà\fÛ$¿ÌÎìîML×u\rÕ%b´hH\rù¹t\fôÖçËC/UdjjmzR2jÛ\rÝbÙ:üÇªå$AÚMÒ´Ì4e-æBªVwí²Kç¦^'e#ûM}\núOA}°?©ÀÌ|pkÎMMUôt· 9¶J¾2v'×§³mÉÀ ÞýÓÚý³W6'1}¡®È²$@U¾\\Ç^Pªp\0\n 4È ½ã`Y}éØòp×tO\b`+Û\"AnÌÅ£Ñ1®WF»7\0ü¶ºý;Áîùcìàæ)×ÐCÓ4W±öÍµ-E]ìÌ±ÿ\nP;\fú)¨*^<<»ý0Ð~ä'E.:$rìÍ^ÁÊ\fZVõ<yç.ËY[0ô3\r<IGûúÃ¤ýE\"«ú#-ÁS/Í­Cé1¡uuÉ6L\tJM¬%j¨RÚhö.q=ÏãèýÔl¥ñQøY9é0}IºÈp$Gg4Û¡EMãÂ8OÊ*GøêöRT-ø^ù~Ç4|?t÷ëÝÁ\vSé[S\0-ßx+%Èá}NÁFó_çb*Âá(¼øFêBñÄ9-Á'Òª\t¾¢ñ¾'îøò³XÝ\fç1Y.&ç§?\\04¤jò\"À\0þ\f¸6Ç\t`\0\0\0\0IEND®B`";
            var binQrow7 = "PNG\r\n\n\0\0\0\rIHDR\0\0\0)\0\0\x003\b\0\0\0\n-!\v\0\0\0\tpHYs\0\0\v\0\0\v\0\0\0\0tEXtSoftware\0Adobe ImageReadyqÉe<\0\0ìIDATxÚì=NÃ@7=#8\x07\0):\x07HCZL·é¸Bè(1MÖ) \x07\tZP¸\0'HÄ\t7bBV+\x07ì°¶´#=íî¬ä|ñþdÒÐZ+éÖTÀ<¤,k¯YviË§É/)AI¿O·ôUÛ£çÜñ¶3B3Mÿo­áê@¡´¢vLEAúS:ôñSW4$\04÷hC\fxÂÃq Í ª´h$)ïÆ/b utH0]Ú.û+·Rû$Ò»æêåb~ç.¿³Í =×nV\0H¶Mc¼gh\0*4îÄÚ¦&Hw()&?nô\nP$]J]>ßÍAJÊ<³¶«NãM^Z ØCs3U\b´®ûä[Î±ªxÛqéÍ9VÉNáODÝÌ-ÐÂþ7üyTöQÑ¦Ë14:uGr]¡ôÊ¸OÕ~;\b¨ìÒaUI¥hÎQ­¹ûÏØEm`D95ú1úª\"rÚÐÀJù#hdFÑkp?²úWU¦»Ã)>À\x07=/®S. û-[WÒÄ­î§zW}Ö!S±ZH,q}^óå¶bl3Êê«5s¯îÂDù\vf\f\x000ee,E\0\0\0\0IEND®B`";
            var binQrow8 = "PNG\r\n\n\0\0\0\rIHDR\0\0\0)\0\0\x003\b\0\0\0\n-!\v\0\0\0\tpHYs\0\0\v\0\0\v\0\0\0\0tEXtSoftware\0Adobe ImageReadyqÉe<\0\0ÏIDATxÚìONÂ@Æ§\\À?G(\x07Ð¤Æ5\và¶m7°eçtÇÒ²¶eãÝj4Á8ñ¨'¨ßÄG2´Øþy53É^Iùñ}Ìk©$à>:¢ÃBZÈ¿7)ûPÂÝI×Æm!-¤lRVéØ» ¶B:ÑS5$\0L÷,!\tpN/ý\" \0/4@¡N99ù\0½¦Ô7l ñù'¦¢+òRû$â;Ät\vM\0°É8®\\æ,R8¾si õIPõõSNÍ|¢\n\r4`uí¦¾çk¥%âq2+BZ\røsr8Wâæq%P°ç=AsæQî¸Sâ\f´Êã¦Ëoçt¹cs«ÖïT/|gI±`iÍº´Ý­Ö\nhÿãXÈ\tõàT¯cÕjÏW·î§×´@Ã®ëÞaöHÕ@Â´%W\"ãØê±©¹kë\bëQUNÆäN±Í¨®¾Hç0ÜsèøØXÏªÛ#3|ÐË®õ\n¿üjÙ8CH¹´VRñsÜÝGé1´¢øÙAF´SÕø ±Tq_AÛ][éNeJ]jsDËÞ`XÈVB~\v0\0Oë2ëA\0\0\0\0IEND®B`";
            var binQrow9 = "PNG\r\n\n\0\0\0\rIHDR\0\0\0)\0\0\x003\b\0\0\0\n-!\v\0\0\0\tpHYs\0\0\v\0\0\v\0\0\0\0tEXtSoftware\0Adobe ImageReadyqÉe<\0\0sIDATxÚì1nÛ@E)Á}Ì«ÄÔ.>ÜÆi¤#DG°»´b¤ *\\\x07! À\v OÀü\tþ\tPÄZZÁ\\`@jv5|;³3¢¦WUUúègG0:ÈgyËÐ½÷3\\Æü¸LÎùd<\tÀk\\F·ò-µp\v`Ï-Dp?>O\tÒACKPçÇ8î }JÉiÈÛ2¥THù@­!¥\fál®ñ$`nX@~Q=ufzÝ[Ð!!{³ï §ÉBî\nïÛ}ö[\0~æÇWûíïbiÐ<)0w5úOÉ@V7\\.\fè\x07è¿$u&\rhc@9ËÖyòbní+6vT172Þ·ñèy¥iya¦ gðèêàTç÷Á\0^ìÝðÞK\\6\fº3UKpy°p+a,hÖ0¤\fçïÎôU!¾5\tõç2Fâlb;É@nù¹lU´÷8§\fñ2&`÷§|6÷ÞWªÕ´'],C'j÷C¶I¤]\"}Ei\\sz>pîÒ¬=¿/TéîÆ«¢Ö\vÖÏkìku\f;¼& ´\x07\r57Fp¢\0N)3ó¬vB¯ÝÚ¬7v1eC~À­|a­ÃÇ¶sè=:eT¼PèHKpNÉ5xUÙ)µÍ¦gr\b¿ú¼Éù«iõ=êÕ8ÃãMZxþzið«&¿Ý\rKIÉµÒHëcÁÛe­t»gwÍÃA_pnLÝ?ÞP.¬/½KêsÞoó¦ßÆÒ½`t©?\f\0æR$d£\vö¾\0\0\0\0IEND®B`";
            var binQrow10 = "PNG\r\n\n\0\0\0\rIHDR\0\0\0)\0\0\x003\b\0\0\0\n-!\v\0\0\0\tpHYs\0\0\v\0\0\v\0\0\0\0tEXtSoftware\0Adobe ImageReadyqÉe<\0\0¯IDATxÚbüÿÿ?Ã`\x07L\fC\0\f\tG²PÃ»÷î¹\0©ÝHBg8]YIéì`\nI%(mÅïxÕ nPÈACo5Ã\x07_F½ 2â{*M\"9V¢;lP:Q~oÐånä49ZS\bîÑÒ£u÷¨#+\f´îÕdyèòëºãht:­  Âû¡\0A{ç8@Yg} #Áê\0b2Ð~(í\bÄ\x07FÓä¨#iÜ}hÿ1xv÷>ß¿üïø;!þ\x07(o^X@?G:Ïj\0Q·&ÄhªåGÓä¨#iÑV\0ûÙ£!IG6úèÍ84ªqðf0 å\nåî&'³±Ð)0èHø A*Ð¨.h\05LRÈìnX¨tB¹\nè(!´ÐR\x07J³Ô,(×xÐæn CßÓ\"ä¨êHèL\b:0\rH2@òÏB3òÉ ('Ë¡Ñú=@\x07î2ßa\tÙ{âH £±¹bC.é&\x07mÝ\r-zD£\0 À\0©p×1ÕÄÙ\0\0\0\0IEND®B`";
            var binSetting1 = "PNG\r\n\n\0\0\0\rIHDR\0\0\0(\0\0\x003\b\0\0\0åïJ5\0\0\0\tpHYs\0\0\v\0\0\v\0\0\0\0tEXtSoftware\0Adobe ImageReadyqÉe<\0\0aIDATxÚìX±NÃ0M+v/ ¨;\fì°´+L°ÂDÇ2v¢k;ÁJa ;\b~\0«|Aá\vÊ;xA´u\vrÒS'¾<=ß×¦Ó©ç²Õ=Ç­\"øç\t®äáäU)=Ó&ÀñF\r]S°\vlà¤×\b*¨ö´yßt2¡Ü÷yø«åQ¨kCÉ®3I¢ÅàP¦ÙÕ2£ò&÷ï\nµ*`­ÚÍTkñâµ°K·dôS1\bc\\Öxû4@òý×\bÐ%.\x07À]ÛÆ+·/D=, Èàra9ì${e%É8Ã÷2³ø¥¤1ö1½!.\tÎ\0ÓXcÛ´ÆúÆ KUãÑ\bÄvRH·f÷¸(ýrI/§26,rÇTÁ´pÁ¾Ûd±\"È©\tYãt;`éÑË9½#NïKa1hÄâ³å°uØ[¶Ì4J aLåCË®Åû,Àø{\t1¯ÑW¥®Å\td}ýÙÍPèå`¹lX¹­:¤j#*[ýT+F&?lO]×Ü$Äºy4¬ÌPD û¼ý:Ò¥*wüx õÇ¥ ¶\\Ï¼ïóA5Ç¼#m9kÙ*(NÛDüHSHðuÔË]tL``¼;ÏÏÐL\vzz»ThHºhSëeôs(ôB\nFt0$9Hë·õ5\b¾HS'~6ëÐr®LY,Ò³Ù$&Z_|P÷?ÍX£gúYöð¨Å ØÖí*´\fe$®^¦ö²¿¢\\_ËÚj©³ý«°nfÎï\x07?\0dëâ,ë\0\0\0\0IEND®B`";
            var binSetting2 = "PNG\r\n\n\0\0\0\rIHDR\0\0\0(\0\0\x003\b\0\0\0åïJ5\0\0\0\tpHYs\0\0\v\0\0\v\0\0\0\0tEXtSoftware\0Adobe ImageReadyqÉe<\0\0aIDATxÚìX±NÃ0M+v/ ¨;\fì°´+L°ÂDÇ2v¢k;ÁJa ;\b~\0«|Aá\vÊ;xA´u\vrÒS'¾<=ß×¦Ó©ç²Õ=Ç­\"øç\t®äáäU)=Ó&ÀñF\r]S°\vlà¤×\b*¨ö´yßt2¡Ü÷yø«åQ¨kCÉ®3I¢ÅàP¦ÙÕ2£ò&÷ï\nµ*`­ÚÍTkñâµ°K·dôS1\bc\\Öxû4@òý×\bÐ%.\x07À]ÛÆ+·/D=, Èàra9ì${e%É8Ã÷2³ø¥¤1ö1½!.\tÎ\0ÓXcÛ´ÆúÆ KUãÑ\bÄvRH·f÷¸(ýrI/§26,rÇTÁ´pÁ¾Ûd±\"È©\tYãt;`éÑË9½#NïKa1hÄâ³å°uØ[¶Ì4J aLåCË®Åû,Àø{\t1¯ÑW¥®Å\td}ýÙÍPèå`¹lX¹­:¤j#*[ýT+F&?lO]×Ü$Äºy4¬ÌPD û¼ý:Ò¥*wüx õÇ¥ ¶\\Ï¼ïóA5Ç¼#m9kÙ*(NÛDüHSHðuÔË]tL``¼;ÏÏÐL\vzz»ThHºhSëeôs(ôB\nFt0$9Hë·õ5\b¾HS'~6ëÐr®LY,Ò³Ù$&Z_|P÷?ÍX£gúYöð¨Å ØÖí*´\fe$®^¦ö²¿¢\\_ËÚj©³ý«°nfÎï\x07?\0dëâ,ë\0\0\0\0IEND®B`";
            var binArow1 = "PNG\r\n\n\0\0\0\rIHDR\0\0\0)\0\0\x003\b\0\0\0\n-!\v\0\0\0\tpHYs\0\0\v\0\0\v\0\0\0\0tEXtSoftware\0Adobe ImageReadyqÉe<\0\0$IDATxÚìXm@\fª\v`2!F\b#$#Â\be2BÚÕ½ä~A^_É¬|.gógØ÷}à»½ÿÀ¤|Õ>Û¶\"ïÉ3Üwä~$öRzÈÏ\0ë%Ì^M~#\ttì#Hf¯Nâ¸¥×vÉK(±Æi~Xa¼[äû©æ\x07f'Þ|K7§º!æ¾®/`8ó\rdmÞÐu¹÷¦&U¤T\nRA¾Þ`ð`Î$wåÌîµûNß\v×ìÎhbhñ\\WeÒ\0CWcá­Ð1è>¯Çâ®jÇóK\0 l0|;y$ÿ`G}±ßÐq)Dq' 9m!üGú\0èWÝÅ]oAkä5wë-\x07.\fÅ´Ù(q\0ðÀhp/Â¦\nRA®ØuØØokìV´þö&Yâ¶86¹ziKáêxÄxácgÞ¼qrækèxY¼#\v\x07tKb\r@J¬àøp^MÒs\\¶,\x07l ØâG®ØÔ9\v'KÏ\\ÁqÜ[@÷Cà3 +ü;þ§%/EQ«²¸0óæh5ÜØ©+OuæVã}JD\r ëh·\b»£)ÍÇl³1ét¹OFbÈ³FÜùõfX)Æ.i-;òéXO^×¦<&Kí¤oö%À\0ò5\nTÃþí\0\0\0\0IEND®B`";
            var binArow2 = "PNG\r\n\n\0\0\0\rIHDR\0\0\0)\0\0\x003\b\0\0\0\n-!\v\0\0\0\tpHYs\0\0\v\0\0\v\0\0\0\0tEXtSoftware\0Adobe ImageReadyqÉe<\0\07IDATxÚìX0Õk+KðJÀ°)°(AJ0%%¤n×y{³ñø(bn.;³/o³ÉÛ,Û¶]øno?`ä¿ù>E'gkcºÈ×ä\ry¶ãÚ7& %ÿ$ßóo\0÷\n$3h½9<GS\\N±NkÃ\\Xë[0Ç!Î7ßy8°y°|-Q@MÉhbCúÆ$'ÊàØ8ÔÆ×9y³e^ewØÈ\x002\f ÈÇAÒ~\\·ðãÅw{I]ø¬Ïö('ºlpyÑ§R¨lÐWYF×ÚfÁós}ákð~ZhFÀ¢äöêÞpÇª,X¨?XÿÂ{/¬@\0nèÐº\và#zrh¨af½Òæäl'½\bÜ¡!\nSN¬¥O<»;»­°Â*WíC­ò/Õ¡üÑ%¨BY`äÜ¡uFÞtTßGÞ«@®\"4$\ný\\ê\rjdHo0lÁdpê\tÃï¡|\b È¹@B©NDß$ØÃgc²Æ¶¦w¸çø$;Üµ#$R¬r(+¿jN<KÔ^«Y, 1³¾Åøi ±õòÔ¹t^ÝW(\"L©Å¤çí«@Ê¼dOrNàDllàó(\0ÆÕÏÌè±y­IÜ~HËäH9Ø\n\n }³o\0CÉ·u Ú\0\0\0\0IEND®B`";
            var binArow3 = "PNG\r\n\n\0\0\0\rIHDR\0\0\0)\0\0\x003\b\0\0\0\n-!\v\0\0\0\tpHYs\0\0\v\0\0\v\0\0\0\0tEXtSoftware\0Adobe ImageReadyqÉe<\0\0ZIDATxÚìY=NÃ0M\x07\0.@FFz\":w¡YajGØÊ+aéL\0°\rÆFpÊ\rÊ{âY\nVT©ZWØÒ§8îÏ/ßí¼Ö&Iàz[\t yÿ\näê,²Ì®¾!$Þ¢±k<Ô!{\brãb¸3x.Ü¡ß4ááÈåLuud.£e¨îÔYÈÅ¦<:«3ÄÜ®ë¾!çª»\vyÜ²Ò¹NÎÊpÍµ-\"ï§yÎ}ÕóGµe:ªíÎ% *<7ÊÆ!aUûJá¾~9\tYH¸üÌU t!'/­«[ïÑSûºÝÄý©ß8k3H2|äR mÂ­m_¼.lï\x07\0hXc´©Û7ü.2'ËZ»¤ïHxûó#Eýz\x07ðæ|ÏþäOAþä?Ä<H²zuh\"MB\"¼N]÷¤ðzØ-ÎE=jND¤7.Ðµíz¹\n¾ø¢:±5/m´DÄzÒð©&îkû0Fã$¢Òãu,ö¬H×¶G´õ¤#+Ð8Kdç÷pcRz\";ô\rC¶S\0rëÛº¶=3Nðu¾aâô\\î¯9½qCù1zk]¡&°Þºvk)Ü\0tc=WôÆTÃü«)RQÍ|ã<é¼4C½¡\b0Ì¼]Óx<-HNÉk&áMÐWÓÍ7ãÅ@Eb^ØOGviÇ*Ñ*6Ë<\b¾³¹EºYA¸YïÒm)2±ª»[äI¿w{®µO\0¹ô^Eþ÷\0\0\0\0IEND®B`";
            var binZrow1 = "PNG\r\n\n\0\0\0\rIHDR\0\0\0)\0\0\x003\b\0\0\0\n-!\v\0\0\0\tpHYs\0\0\v\0\0\v\0\0\0\0tEXtSoftware\0Adobe ImageReadyqÉe<\0\0ûIDATxÚìQNÂ@ã»iO`Ú\v@<¡<ã\v=n ¼ ¯ö\búà«@`½Aý'Îum-M¦ºÝd2¡i§_f;»ÿ½²,ëãLýá!O\nò\\\"È!ÏpsërGQè\f$Æ\n¿×°\\*=é%\bYMàîa!2Y¸úMÒÔ/¤\0Å!ùÛT\0\\9W8\fqñ]^¨X2dñQR¤pb¡,Æ»4Ý\tû\x07;\tN.A~ïöÒCzHÇ!±ýZéTî\fë>ì\r6mRK««LFÇO@¸'ØlÛ\0:çX¿7Ý M ²S3c)¦ë\rÌÒìÒÔ£o<3²È×È§±\b: à\bÚ«È&emk\\º+Ó«iMzéqö]Lwí¹@·p×MÇÄú4uóÜéõ¤ôÒCzÈ÷yØN\vC8Éj£%TÝ¼çPSÊê/ÔGkú`<²Ô#YGºo.3I\"0d³6ú1.¹F`Êu¾/a}ÙdÆ­fzáâc¤îÍv`§ÇÀò4f<½#WªÛÌXÁj¦{¨¾þMò§\tG.À:M:I ¯\f·à®æ³«+Y¯\byMv¶5îNr[lÛØ¥þQh3Þ\0÷ØGuVQ9%\0\0\0\0IEND®B`";
            var binZrow2 = "PNG\r\n\n\0\0\0\rIHDR\0\0\0)\0\0\x003\b\0\0\0\n-!\v\0\0\0\tpHYs\0\0\v\0\0\v\0\0\0\0tEXtSoftware\0Adobe ImageReadyqÉe<\0\0IDATxÚìKnÂ0â\0ä9@+ºfA\0ÛîÈà\bp³ê@¬«T¢\x07hÔôqôu,Ymlli=Òh¤ÿ|_cÓªª*\tÝÚÉX>öR#xEQ{¶Á@öÈ6ðF Ïl5±LPO6\x07|ÔP°¯á)|êÄYq¤,¾\nIÝLpcîþ° Õ'84dÜÍ9MZÆ!­S¾,\f«%)%(n2BFÈ\byAØ]ðÔ¸3ÈÇ\x07øÞµh¤¤sÊLÎàÂp¿ï, uÎÛÝ ²C ^Öq9h!lµGQÌPL¨B÷¦¦é ?´BDjºªh¸ã¢¤\x07}úIÙqÉ>áÃ*»ÝjÏ­Sv÷¯£`([Cø³\rÐÔþ¬¥g´\vÀ×& XOFÈ\b!#äìXöiÚc×\\ZQ0q¹-C»7þnnÓñÑ·eRrãAò}ç(\0§ü]á ã¬ß6¼^B¿tÉd#\nIºèøê·-Õ³ºÁUò×zTF¥WMùeÒ1ê{CÎ(R6Gè;OÒÒ.ìé¿ÇÑv_¡ïÉRìjÕÁäðß &¾$Ð3^*hÖnøã9mæÚ'ñÑ9 ïµQÆ1úê&w¥Gî¬Õ±<ùÿü`\0'úA\0\0\0\0IEND®B`";
            var binZrow3 = "PNG\r\n\n\0\0\0\rIHDR\0\0\0)\0\0\x003\b\0\0\0\n-!\v\0\0\0\tpHYs\0\0\v\0\0\v\0\0\0\0tEXtSoftware\0Adobe ImageReadyqÉe<\0\0õIDATxÚìÁMÃ0ªFH\x07\0\tÄ¹2½r##¤#À\bészF­4#6\bÿ~#+Äq\f2ôdùÅ}úôl×¿¨ªªï6ý\v¸Jt(Í»x:MÂJ0Cs¿¦å¾UR*¸Bå6Ñ¬}Là_S\vØ'4QØÝÖh¿÷\rR¦:Öúsm§{³&e\rf¨ÞýCþTeIÐgºT6u d\fÑ@­Ø|2ä/ðWøIß.*Q;6¢¹Á·- Æ¿:Ý 2¨[©S4(Û!6âEkEóäp*0X_\"ñ¾VIÝ²boðY^}tÍázºËz03ÂÛrüTSkÐôd\f2@rb9«ERpÎF5± Þ=¦|Íg[DG§ñã$1µ_Ý$ñ\\ÔKÞ!n²ÎãEUAÕWÔâ§|ô.á[Ü¤tLyLã+)/ä\tVéðy)ÎØEK\\ÖzkÉãdã$GÆÅb~P­müñÊ¼fEÇO9µS¶éyúCj7¾¢aÃéñÁvÚò±æé\r)kIK~·ä¥ú dÃr;ºÏ´åéÙôÃöÿ¶°Å5°UÇ<AòS\0YÝ\f(­Ø\0\0\0\0IEND®B`";
            var binAddKey = "PNG\r\n\n\0\0\0\rIHDR\0\0\0)\0\0\0\b\0\0\0*uõ\0\0\0\tpHYs\0\0\v\0\0\v\0\0\0\0tEXtSoftware\0Adobe ImageReadyqÉe<\0\0\0×IDATxÚbüÿÿ?Ã`\x07L\fC\0:rÔ£uä¨#©äHÆ§&\0±>5wïÝë\0bA<ò 54q$Ðq\vT> àÐr VÂ#¯UC]GBåòáPªF|\r\f cÔ|,R\x07ÿ§9@£ÐHíÆ¢&]YIiTME+PÍ%$Aà\";\0ùKf´ø,4i\f¤Î\0å©Ý@ÇBs!!\x07\"÷dÊH!Ú\0¤&p ýÓäha>êÈQG:rÔCÃ\0\0¸<TÚ5#\0\0\0\0IEND®B`";
            var binNum01 = "PNG\r\n\n\0\0\0\rIHDR\0\0\0\0\0\0\b\0\0\0©¥\0\0\0\tpHYs\0\0\v\0\0\v\0\0\0\0tEXtSoftware\0Adobe ImageReadyqÉe<\0\0\0LIDATxÚbüÿÿ?µ\rÀ¨¡ÄÇ·N¼bª\n4,\rH\t±1êY0ð?Õ½/«fÁ\bÂ£IjhzE£¥Ô¨¡Ô\0\0òÙ='ê¯\0\0\0\0IEND®B`";
            var binNum02 = "PNG\r\n\n\0\0\0\rIHDR\0\0\0\0\0\0\b\0\0\0©¥\0\0\0\tpHYs\0\0\v\0\0\v\0\0\0\0tEXtSoftware\0Adobe ImageReadyqÉe<\0\0\0©IDATxÚbüÿÿ?µ\rÀ\b7Ç·N©@,\bÄ÷8LVÍâ,Ù.\b2hÏb >\våSä}+.«ºn+QêýÕP/Ã\0ÈÀ÷øÁnOâÿ@JH-±ÎFzbb1Æ \"ë0À/ï\rvÃ¢$M\fÐdt)íÒÑeÔPÒ@\0q©ªv½\0\0\0\0IEND®B`";
            var binNum03 = "PNG\r\n\n\0\0\0\rIHDR\0\0\0\0\0\0\b\0\0\0©¥\0\0\0\tpHYs\0\0\v\0\0\v\0\0\0\0tEXtSoftware\0Adobe ImageReadyqÉe<\0\0\0¥IDATxÚbüÿÿ?µ\rÀ\b7Ç·N©@,\bÄgØUVÍâ=Ù.\b2hW\0q:C- Èû CÞ]6\v¡bJyhÐ %uq(Txµ\"ªÉÛ«©b(ÐÅ 0bPì¦ÈP ·]øÔà÷ÐØ¤4I\r\\\rK¨ù.º.\f¦g 1FÈPÆÑRjÔPê\0\0ª{/-ö\0\0\0\0IEND®B`";
            var binNum04 = "PNG\r\n\n\0\0\0\rIHDR\0\0\0\0\0\0\b\0\0\0©¥\0\0\0\tpHYs\0\0\v\0\0\v\0\0\0\0tEXtSoftware\0Adobe ImageReadyqÉe<\0\0\0IDATxÚbüÿÿ?µ\rÀ\b7XoPRwØUVÍbµ\\:J+QÅû@Wºc©.¹²j]Y¤îÃq5U\"\nh  ê\0â0 ÛZa\n3h²Ë\t:÷ÅnÿÄiÔøïRÀ8ZJJ]\0`\0ºñ]Xµ/\0\0\0\0IEND®B`";
            var binNum05 = "PNG\r\n\n\0\0\0\rIHDR\0\0\0\0\0\0\b\0\0\0©¥\0\0\0\tpHYs\0\0\v\0\0\v\0\0\0\0tEXtSoftware\0Adobe ImageReadyqÉe<\0\0\0 IDATxÚbüÿÿ?µ\rÀ\b7Ç·N¬R¡HB«eÕ,Â(2\b¸dbB\rÝtÝYb½ÏH(½ÿê:á Ó\tYÀDÀ@A õê}({&A§\\J,~tóx(ÿ'¤K¡±OÕ$òn(ÐàrPdq&?ñ#Aé@\f2ô\fT8âØ-PF\r%\r\0\0Om×©\x077\0\0\0\0IEND®B`";
            var binNum06 = "PNG\r\n\n\0\0\0\rIHDR\0\0\0\0\0\0\b\0\0\0©¥\0\0\0\tpHYs\0\0\v\0\0\v\0\0\0\0tEXtSoftware\0Adobe ImageReadyqÉe<\0\0\0IDATxÚbüÿÿ?µ\rÀ\b7Ç·N\b©U@ìÄï8LVÍb¥.]¥Mx5<C¡®¹°èº³@º)\nSc(]´\0 Ï\0ñYJ\rUÒ{ Þ¿\x07Ä3)(\0z½³(SW¡aK4`$÷ÞzäÊP²º<Ò$Mg üt]:Z J\0\b0\0Kç0>P\0\0\0\0IEND®B`";
            var binNum07 = "PNG\r\n\n\0\0\0\rIHDR\0\0\0\0\0\0\b\0\0\0©¥\0\0\0\tpHYs\0\0\v\0\0\v\0\0\0\0tEXtSoftware\0Adobe ImageReadyqÉe<\0\0\0}IDATxÚbüÿÿ?µ\rÀ\b7äã['\\ÔntqY5\vF²\rjÞ4ØI¨2¤C]­\f´ì=µÂ´;\tHÐûh®o5c?\r÷ãJR\f\rJµt\nõº ¥fâWÒDÊ8ZJJ]\0`\0aU${K)S\0\0\0\0IEND®B`";
            var binNum08 = "PNG\r\n\n\0\0\0\rIHDR\0\0\0\0\0\0\b\0\0\0©¥\0\0\0\tpHYs\0\0\v\0\0\v\0\0\0\0tEXtSoftware\0Adobe ImageReadyqÉe<\0\0\0IDATxÚbüÿÿ?µ\rÀ\b7Ç·N¸\0©U@,\bÄ²jÔpéL ^\rÄa@\\´D\f9\vtáj$>Åbc \vËø)Ì\bÜ¹l]'\b50\fè}F ½\x07iy?D çYjéj¨;ØjÉY\fºð=4)¥ñhZM'd(ãh)5j(u@\0,¬4/P»\0\0\0\0IEND®B`";
            var binNum09 = "PNG\r\n\n\0\0\0\rIHDR\0\0\0\0\0\0\b\0\0\0©¥\0\0\0\tpHYs\0\0\v\0\0\v\0\0\0\0tEXtSoftware\0Adobe ImageReadyqÉe<\0\0\0IDATxÚbüÿÿ?µ\rÀ\b7Ç·N©U@¬Ä{8LVÍâ=¥.Ý\rÄ«ØjðL¼t¥\vâN ëÎéY@ìB0Eó® ¥azêâhRûPq¡Jì]\bòª Ðp!(¿I\ndèL a ö=¨g2Pu]\x07\vJ:Z J\0\b0\0é{0Çá©,\0\0\0\0IEND®B`";
            var binLogo = "PNG\r\n\n\0\0\0\rIHDR\0\0ô\0\0\0\b\0\0\0§ÿí8\0\0\0\tpHYs\0\0\v\0\0\v\0\0\0\0tEXtSoftware\0Adobe ImageReadyqÉe<\0\0¤IDATxÚìp×Ç\rÅ$\0&±\tÈ%vh\x07}4ØiÈrH:`àæÛmR0s¥ØLÛ+éMnæÊvæjH&36½´ô®¶3sc\x07hÏö$d\"ÃÀEãe\f6Æÿ$ËØH2Èp¿Ý\x07Ë²úkieIö÷ÆH«Ý÷Þ¾]}ßïýö÷Þe±\fÇ\0\0\0^ÌF\0\0\0Ä\0\0\0Ä\0\0\0Ä\0\0\0Ä\0\0\0Ä\0\0 î\0\0\0 î\0\0\0 î\0\0\0 î\0\0\0 î\0\0\0q\x07\0\0\0q\x07\0\0\0q\x07\0\0\0q\x07\0\0\0q\x07\0\0\0q\x07\0\0;\0\0\0;\0\0\0;\0\0\0ûÌÆjµ¶_ºz\0\0øÏTAC²^WW7>>þòßs B\0\0þ0ËbF-D,þù.|\\ºti~AABBj\0\0qJGMuuww·dû¼yóHß-Z*\0@Ü£¾¾>RöO;lÚ¼9##\0¸G\r¡¾®Îçn$î$ñ¨.\0\0Ä=Òq8:Eâîçþ)))ùóçÏGÕ\0 îÕj­©®îïïÔQñññKz\n\b\0¸GÝ]]ÕÕÕããã(I\0\0Ä=âÄ;ÆòåË7mÞ(I\0\0Ä=ü8úººöövYRC$\0\0â~|Æ;@||ük?ü!¢$\0÷ð`0N}úiÀNvï J\0\0qõuuþÇ;¢$¸CÜ§ÀâQ\0@ÜÁTd¼c`¼úÚk«W¯Få\0q\x07!AxÇÀ@$\0w ?òÆ;FJJ\né;¢$¸yèëë#e'»w%\t\0ÄÈCHããÕ«_{í5\\\0 î @N:uöÌ\b,XJJÊ¶ÂB¸à¸Éáp8ªt:]1\nIqüð°lcY%\t\0ÄLPÄ;oMOÿÎ_­¯o1YDI0*3gÎTUUÈÉþÒK/Ê/W:US]Mý\f\\8\0 îÀ=l=kËæBöû=¿X¼8E®ÛÛÛ«tº¾¾>\\A\0 î@\n#Id¨#Ù?ù¤áÆþøÝ»w¬Yó\\Éö÷÷s¿t\t×\0;¿.ÉûøÔ½½ýµµéýÆë\n\n6Êå¢¯©©9ân\x07\0\0â5 ,NY$»ÝîÐéjÉ§÷Ï=·ª¸ø'2ºhÎ9C­\\ð\0@Üg4,Þ1,ì§O=zô#cüÉ'S·®X±\\®»»»ß{÷]¸à¸ÏPHþHI\nÃUÎÎîCÞg.øÂÂ-6­+eêüÇþp&\"_\0 î!ä/ì\nØíÃ?øòË³1¡¬¯«è&©¼(­[÷òºukdI\fy{Ë¹$å>#Ð}øáÙ³g#¶xv»ÌËÿº¯×hdªÀOÌf³ÁÐJo,H=[v±¡á\v\"þ¥^`¦weåGv»ÔÂ¦8zô£ÎÎ©óò¯^é¤7ÿÓóÊº(ºRç¾lÙ¼<cñÜyö¯o¿p}Ô*Ùøô'^}ú{ÂGgßÍÑO\n°`ûÃA\tw/ÿ5fìÔÂúî?Å$x[íöÞÐÅ{&½´Ó­Êõø÷ðÃ÷`9qü8{3<l7o^ll\\ll¬,)××7tv^+(Øøä){öüB§«JwebÂÙãFoïuöñ/ÿùçè÷+ÃCÒ>ó¶§Ïõv¾vY²Z5Ko¹ëpÞî²_¶Yß^t×E¦ïv5qúîEÜ»ï=Â4'aöü4ö¶E¯§{¿[«á¿ÓkkL=&ÔF\fÜ2þí--###££7ïÜ¹#WúmmíÇXôKQÑOd:Yl¶[=Ý]²d¼OËËÚ;:RÝv^²1aNlÁçsbCã¬Eçj¤ßºãôøìúõªTÙy³ô]¸9;:ì*);jâÙ.0>>>44ètÊ¦ïl\0êùóbø¨y2F¿øÉuøÊå¡!©åKÆûô»¦vç[õ®Û\vV<çÅ#ÃOî©µÒMNÇ½¾ÿó(î®_ÙNâ\0Ä]^³]ÌàààØØèÝ»wå»£ºú6\0uÅ\nµ¼P}æÐ@±Ýmøã´4ÞIÙ6ÉÆuéß[¼8¤ùº5Þ]}5÷qXïõµz1Ûð|îíbFGGÉ;wn\\\\¼,Ù>}¶³³»¸x+Z_ÿY¨OpbÂÙÝuÕb6{Ù'ê<ïÞ©o¿àê~ñRñCT(2Ì¯\bÌx¿{é¿¥\">tÑõé]í\0â>õf»ÀíÛ·i·¤¤ññòè{ooÿ¡Cïæ¥§'?£ÃÂS£7ov]íô9&ïÓCß==DÝ´|Õ¤ÒIÈ\\÷TRÆ{W3\tºxã=ÞUÜÝÉÀl\x07~Ù¨`Ìv1y|Ü!£¦²òXCÃiNDâCtvæ¡ÁöKßø9ÚvzxÞ{GGêÚ/HezNìöì=Dõd¼KuÜÚ%{2Û%Za¶ûíê»Åá°ËEÓÐðN÷1Yîô²X¬2ÚÄ³×ÔÃ\"ÙýdxÞÙCTËcðíY\vÊ©,?wí\0â~³]`ddäæÍ\t¹ÊÐÖÖþÎ;ÿNV¼\vd»Æ;úI´ïn¢¬xîéOá·çj¼<ì÷ÆúÜÄ¶Ãl\x07~»g+ÏncCR'ËíÛ·\x07úxâ9òuó{{e[\fdll´ëJg`EµçÝÓCTz¥<n<ï|L$·3Û¿\nØlçzz=Ý½×M÷ó,Q©22259vlÑh·ÛÙeËÔËÔê¬ìì\vúÌú¡Õh4OJJR«¯ÏÍu=ÞÐW¾`Tµè¿¢~0ËzK~J*)!½HvBAgGS!)¨ÄÝ+MMÂÝ\0óçÏOk¢Y0\r\\½r%¢4lÆÓCT2ÛÃÙqv\t¹/îÊ·f¶2<!íqÊÓ«¹©qK^¾ ¡®\"Wé>dªúÈv~L%»~CîÜ\\·ÇL=ÍMnÝ m§×ÖmÜ-f³PZú,ªÃååBÄ²7\tËÑ\nI\téwÊÒ_«Ñ(\nhÄÝÙÞÔÔd\"V«5..î±ÇæÉ5QA0LL8¯z^0÷ÞÑÏ:/ºnÒfýôâìoWvî¿;gÑc2ÞïY»8ÌÐÅÀÌö\x07öÑå®¶«Ò1uk°³o½@BL\r@Ñ®bIÀmâ\n¥OJMöµ§DÙÕ/äå³ÍMMÐ.{hÍv±fhhPÆ(ÉÀ°Ùnuvå>ê÷zð)>é{ÀA2Î¾Qï;Üu81ÞM_q3íLI599«22II9ïb«áÄñOk÷ãÚæ¾h0´usÙ2õÚMFF¦à9´Lé*®¨xøpUªJx¿*È² Æ ¶¶FlêüæÀA·§dÙnKT*&';]PvzO%vV(Ô\va¹p0âsÄ·~ýëA-¸Züã\x07N§S¾íqq±³gÏ5kV8\\1íd|Æ{ëÖ­äääôô§#óò5\\¹è¯:ß½;pk4sQªï~ÕîhôógEæoùå4ëÛOJCÇú$³¾³fVÒ2/¾ñ<*k5îØ±L½\\©ädzªÔÔì³ÛÚÚFoÞäÎÚé´ÛìâþHy¹pÃS\nÿ¼c0?¥£V«323Î;Çöéïï'I¥dhg*IüÏùæ_¦¯Xî1¼3ýùï?/äN¿Jº³[Fðä°Uæ³²²ñË7):0--]ÈåOüQXÔoY}Ër¡¿´µgJ¥âo¾JåÉ4C@´L\bÍv1²GIúéé»q}RñþïÓãZ·\rÞè\fóÐu¶Ìvbë¶B²g]Ò±­MzJîö'»RpMY¥JÝZX(òÃ|\"Ùa·VKY¸}âJ¹%þ°Ðêq¹Ê]Ûlö­Öíáµês@Á îÍöà½ín=JÒ§+¦§»ËÔÓÄ\x07¾þÛéqÅ«¿>Þ¸yøídbÛ½<,%Ù%é>\nóârZ¯ãVÙ³åt±2©X2²Ö:&º ÕÞæNÙùêÅ\n®ÚA\twí¾aQwîÜõYºßQFþëÏÑg¼'Ìu}:ì°¹}Üê×%ññòúß3Ïx4Þem\x07÷\ra©GpU/Q©¼\x07;£¿sêÍfq[bö î¸'Õ7$\rdÊð@uÌv1¤¹!\f>ÞÑ¾þúod¼¯|vU]ßíYçÎï´\fJ25\\¹øýÅK';H5à¹eÜï.³ÍÄÈ=$U­V<ñðVw5áÙT/]Ä\x07ºªùC+í@ÿ¼Dï¸zo<ý*Å÷0Û!îg¶±Z­tÊ%)W¼£ÿÆûßF¸\v#Q7-_¥3´H¾ýKÛ¹]Ï¿^çÌ=ÒwE²!©4½ÎêêÛñnµè9üôIk\0ÆqX³]àÏã?!¾Ûl·L×ºoò1\tSCïâ¨+§/x\\2Z>ëí×hUÏ?Ð)IF­üi¤ÁÐúqM8Q¡P¨T©dì«RUJòÈáòàK(ª\n îe¶á£àbc]q{Ä:ÜalúJ\nãÝu$êV<ðËO%»Õµ_X¼x*ç\f#âÈt£Ñ¸, }\f/ÉËÜá0õÄ\0ÿÀÕðíbÈØ!£;à(ïe÷\b¿¸®µ/P(×¥K'Ow8ï4ôd5Z+£à¹«¼8>Òm¥£áEd­ï.ÑîÖjeTö$/Èn³Ç\0{äí£££Vëp\0ú>>>ÞÝu5DñþïÑxÅ×,}fAôÑÜékÃö:¢øÁ#v£}À#dÌvá·ÃFÊ[lq\t±ì5Ä=jÌv\0¢$ÇÆF;Ú/Z&ó@lÆï®(æÄº]zÉÓ\\ÑÁbpf*5)é~ÌÏuÉ{cSãÃº.~$ë%Ð>ÄC«u{øÍv1þGIC1ô4`ã=ÂfÜ>Ye³ù³ªÏÃ\tKK¦ÌLñ)(%+ë\tÎÊ~Q:æÄñã»µZ·)475\nÏK©=mÅÝSôSC\"ØìTBO>ÊNyXîe¶±Z­d{¨`bÂy­ûjä({ôï1üU×§¯]öå}á'»Ýeñù°NÝp¸¼Ü­é}L§íëtE£wÒPÚÙÕùÞ¢×\\[+|ÜV¸]x/`% 9>tà@0çÅoR\bÝ\v*¡ë>tâGÊË#ÄJå³Ý=·nÝr:sç>æ%9õñÓÛxgOV%s9wêÚ\rÛ3£oÙ#¾#Ë-{¸°ÓQìªÞ'\tWçfÙµKÐß½ÑØ®ÉÉaªmã£×ÅmÃZFìX¢Àf³³Üe¬J¸!7Wh]X\t7änd'B%lnl;âÑf»À8\x07%ÿ0ÒyÄ:Üs­;°E¦Æx®«5K9×Û-³Ú6xãëÞÉ£èDèn±ó°µ5ÜÀYÙkEsx­ïÅÅ¼ÍÎ:$Çb;]dþzjNOp3·;7²T©·mê1\tSHR\t]çvgK2MjÝc¸e`¶\x07ºÇÆFY\rwLe÷h¼\x07¼<Yµ;ïDÑde¿¸§´ÌÓ´$|$ß[=ÌÌÃÏ=àåpÖxxJ¡hW±§é¨­Û\nwkµÁ?¢¬×oÈü3®í\x07å¢'ºÑÈ,ex&ÿÛÚÈwÒÅÅÅ\f[,æÈ¯Ï#ï½Þ2¸ÎæÏ¼1§¯]¶»<ç°ÚíÏýþå{*É)hîY¯J×èð90OÑÈBÕj5óL=-z½0jLfnúçç¬,t¸¡Õ öÝ³å|ê&Bù\nÏW%G\tå/*¬¡*.¿ÏÞ6·Ê«hÞ` p¬°®ý\fÏ}¦;ÝÇ.K2F ×{®E~e¾¹»$J×Î\0â>\r!C ²¢2ÂÆD¸¸'''ï-{'ì6;\0\0â.ºr'üXáâîÊÊÏîÝ÷Nbb\"î\"\0 îÁÐZõ Z\0âî'?zý¿þn\0 îÙl>ZYau6êé*îÊÄÄ·J´±\0\0{b·Ûjkj#-T6ÒÄ=--}oÙ¾äÜ0\0@Ü£¦¦FO8 îWvì,\0{Tb2õ©*\"GÜï\b\0Ä=ê(ÉHwebâÁC¿C¼#\0QfôB¡,Ñj×j4¨+ýàOBÙ¸Oòòò=Íh1Ø¸ióßþNv³Ù,\fm2·SãNÍ)H¶FòÒa4vp¥ î3Ìnæ#ÕL;qebâ²};vEW±I:÷îý¶äNgöo¥*ñ¤(°Í®ó)/g\vDÄðíÓ¢ÿ*¤§/©¹©i}¤tì·Ûmâ]Nz»'ÃO\x07ðúGüùê2ø\\¦Õø`\n`p{¥ îÀ=*U*éû\nëNKK?xèwQwÊd÷ l+Üþ\x07T©*¦&ô¶\vËôÐ¦ql\v½ijj¼`h¥flO:Ð$utí6;é©¡x,f~\né°¤,îcVöËÔj5+\t;íI¯Ô°§éÖÎeù­Ù$bJ¥¢¨xB¡¤3¥óÈN\\ÂªLÒG6';)»Z­v­CvP3º¿[í@ÊÎ¯¹¡×*KS0·ÄY¾ââI®xÑ%¶'û+NpÅ:&ÝÛ\n\vI/\"*J2DDo¼#é¬0G »)\v5Ïô¾ÚÿqMí²oÝVÈl==o¼ÓUæÕshCîÆÙ®P*éÛ=¥e^MÒÁ=¥¥lVÛ\x07öÓþ2[4ãÄñO~sà 3¨5¯¼B_V.\\¸ÊiãÕêVú×\nÂb±üÛþ´CîC^§ìÔeì¡&+a'Â¾ÚY\\LoþPYI¹PiY\f®åà%¿iL\x07é¾¥ÿ.§rèS\nÂzÌÒ§-»°\x077ÕbVöÉã¾S5Úlö#å¿§ª°Ûljõò­TÑÜ\\n1£bµJ'UòèB}$¸G+*(Öø5óqÆÌÏYòöÛT$/åÄçN=Ö¹ÉÈÌä.oû³Ë'ö¼n2Q%P±õI(_úy²\v;`¹\x07¤z½¥¥ÓÛÿÓí|«D¥Nv&Ðâ-¤b$+¤\vôjnjb ©\töKT*ÞÎ&EÈËËgËPíÚEjØÒ¢ß­}{oi©ØIÏ>\\RvNCyëDÒ¡6$&#3[=7~iõë7°Ì¥ªR)ñ¼ô*Éü|Úy0Hå)_N7[ô$X¤¤Þæ?ÁË+vscÓî-ùybeçz©ªÞÔ%¦gn÷Ä+bS×þ\nk¥RFôk]5Þ×ó ÚÐähH.|J»·¬mt[T«´¤þù:·\v²S³Ár7¶·Ó{Ö½ *bÕBe¦3¢KÀ.ýe×o)SÉ©¨ZçË-¯Êí\\¢RAÜtÑì§.ÿttÁ+¼÷þ¦ÍÿÅ,¥BâE¡Þ?6fY3&$\rr»Ô2íF/:ôY²ôÑG~K^gÉÖÖpÓhzqæ$¿æ·L]«A#]i¡Õppÿ~ÚAl1P¾¬ÛAY³Br½7êâhE¥R¡¤2ÒvjEÈV<U«ÕÔÀ¦/ãgH§53^ÖÊ }Ø)»*5ë|PE\tÍ½§¬$®¸ó\"cÖÂ\tÞ*2ó)GJ1´¶ÒWtEXm'=¨sáb±÷T\0Ê\tª.Òqjlb°|é#\x07\nâ¬,i%9=â¹Öôzæù%Þ0H\fï%õ´\"ä9I`oÒ^Té/ýåß­hW1Ù¤øL£I¹èµÊ]CòÀb}\fpRé³Ý¢)eJÌmH:ÊåXNlJÓÍÉYµ-z&îTxú(^7U©TÍCv?g©ñ\f*'{@M+Iþ+ONÉ¹¿\bjM\rÕ]Ö¢3\x078}¥y°þë@Ðµ£=Ùþ,\vº)Õ%Éú6¾n][#vp»Ãç$Ô¿¦u-g²Eýë7mº¨OÆ#Â-÷L]~Ôõ¹¹G++~¥-á­ì|÷ª:yâ8³v¥Øº­ÒáñqÒ&R(2BOßýG;¯ÍÑÐ·ûJK¨1}g&§«1H§sÖ÷W÷Sãíôßï+ÝËûR6r+\x0076Z,*ÄîV«í,G^\"ùê,ß_iµ{ørúY«¤ªt^t«¯ßKÙ­ÊÌ öãhEEFf¦°ê¨ÓëõMMÌN/ªÖ¢â]THuj¨ý`{özEuNéòÑYP°¥8ö?¦ÓQI\\iª|êÇü|Wñª\f¨F¨Ê\0/U:]Hç\fé\bUebâíÄ¤¡»=Hq¶<ð³\tÔDÑÏëîïBmÀ-Y°(É(5X¼#=DPWà÷x&Êî\t²Á©føz§°Ü#ÐÍ%\"Ë}uVÖ[%ocè)\0wà£Ñx´²Bv|(Äý§?ÛÕQ1\0\0ûb·Ûs£BätÁË+îÊÄÄÒ²}+]\0ÄLÚÚæ¦¦\b÷´´tÌ\0ÄN^/W¤\\â>mâ\0÷p\"WdðâxG\0 î@NìvN§»`0QÜÓÒÒß*Ñb©\r\0 î@fN?~\"\t¦wÄ;\0q\x07!$(ÉÅýG¯¿ñã×ß@å\0q\x07!Äl6¾\x07à@Üï\b\0ÄL)U:]KËäÐ¬¸§¥¥ï-ÛÚ\0â¦ÉFINJÜ59¯¼Å\n\0¸£ÂÉÔSYQa±XdwÄ;\0 îáÇÿ(IÄ=99yoÙ;w\0@Ü#¢$};â\0÷Ãg¤wqG¼#\0\0â¡xô$îw\0¸+1E\n\v.,Ñj³²&±^OZZú»ï½e\x07\0ÀrZôúª*OË]óÊEp²\0 îQk¤DÜßÜ]xG\0\0Ä=ú°ÛmF¸#Þ\0\0qz(I&î+W>»wß;pÅ\0\0|2\x07UÉlÈÍU¥ªªt\vñ\0\0XîÓ\n³Ùü¿çÏ¯{õUT\0\0â\0\x003Ä¹\0\0Ä\0\0\0Ä\0\0\0Ä\0\0\0Ä\0\0\0Ä\0\0 î\0\0\0 î\0\0\0 î\0\0\0 î\0\0\0 î\0\0\0qG\0\0\0Ä\0\0\0Ä\0\0\0Ä\0\0\0Ä\0\0\0Ä\0\0 î\0\0\0 î\0\0\0 î\0\0\0BÉÿ\v0\0îG¾óÅ\0\0\0\0IEND®B`";
            var binLogo2 = "PNG\r\n\n\0\0\0\rIHDR\0\0ô\0\0\0\b\0\0\0§ÿí8\0\0\0\tpHYs\0\0\v\0\0\v\0\0\0\0tEXtSoftware\0Adobe ImageReadyqÉe<\0\0$IDATxÚì}pçÇeã·5Lc1iA\"Ý#8mÃa7/\x07m2à´¹Áf.×síqÒKH§3×Þ?uø«þÑÃdæ¦½4r¡¶CAî$\x075y1X,!Û²$K²t¿Ý\x07ÖëÕ«¥Õýý 1Òjwgµ¿ÏwûÛçÉ±Ùî©\0\0\0Ì.rÑ\0\0\0q\x07\0\0\0q\x07\0\0\0q\x07\0\0\0q\x07\0\0\0q\x07\0\0;\0\0\0;\0\0\0;\0\0\0;\0\0\0;\0\0@Ü\0\0@Ü\0\0@Ü\0\0@Ü\0\0@Ü\0\0@Ü\0\0â\0\0\0â\0\0\0â\0\0\0â>ÇqÛÃ½h\0@ìä¡\t2uÿåß©|îåsoF\0\0b!Çf»VÈXü]®©³Uº<wíKª¼\"´\f\0\0âøÜþÿ°È¾çT \0\0÷,#à°²«Üöp+ä®~>§â¯ÑP\0\0{ö(»å\v>ÈõÌUèsW¿æ\0@Ü3ÛådÀÒëÉ+©àCðE¥h9\0\0Ä=SqÛù »Ã2³­òr×~/§ô´\0\0âqì×ýCÎ=Î³,I\0\0Ä=Óå;Æy\"¬æCðÈ\0@ÜÓÏí¿üÛÀðeeö,I\0\0Ä=íDÍw¼¢Ü,I\0\0Ä=MÊnùÂåq\x07Ù£TdI\0q¸§>s¾cçY\0@ÜÑ\n©#¾|Çø@$\0wÌw>¯©Aã\0q\x07IA|Ç8Ï1²$¸åQ6ß1¾Ó\\R³údI\0q\x07ÊpX¤ì©\t²GY\0@Ü2ÊÌ|Ç8Ï·¦$§\0;õÙ§¼¤\"Wÿ\bÁ\0q\x073Äçö÷üZÁPLN~½üNåeE$\0w0#ïXR³+¯¬zâú]N)¸[dI0ÉE(©ìf¿ç?d/|äqRy²ðJíÐåüà6tK\0\0\0qÏ0ù¬ùÛ§ÉüûÂº}ó*Ñ¾¬l\t\0\0qEÝaá%2Éì®Kÿ=9úeN^á'w>²QéÊ÷â<\0q\x07RóÛó;9jqx-}ô[óL±þ;høËß$û²\0\0qÏ°uê\txÝãçÞ'\vOï\v4º]Jhø¿F\b\0ûÜå;¦#}âz·ÃÐðMÌ[¸´ä]ù«ÓwûÀdw\vBð\0@Üç($¼\bÚ\x07ÒÖ³X\x07F;²üüõ/rkU²Ó:÷ËÌ|ü\n\0\0qO¦²\r$i_¼î±?½;qýÏª$eI^þ-B4\0d/xi®öÊIe'Q*Òþmv\"»\"#Or¯ä/\x07Æ\0Î}.`ýäÉ¹^¶ëÙ|ôW8ï\0d#yhX]ûØ=çõ¿ÐÒ2o®BÝ¢ÛôIN~Qá#3ëí0\tÖh6üÃÐê³¤ìxGoûmW*sÌø?\vt²èL:÷'Ùo¯ÒU.Xnýß÷]¸5&·ç«zú«N}ËèØ©8cX¼kªõø|SÇm¹ÃZýBäÙnÃ½ÁwAr459KÅ&¸',v¾/ÇvÕWRªöäæ(c/\"Õ.ÖgÞÂ¥\vëöÿïû©ñ`ü¾Àðõ§ÅÁ>ÚÎÊ.q¿voXÞÂ>O¸Ï\rÝøôæÙBê\t¾Y½bZ¸}[âuË)©ð\x07É´ ×÷\bâ>Ð%OaÊ+Ê}0î[·Á@/ö~_sóÿ;=~¬Í<hFk¨Ý¶Î½õ¶Ê9®Xëy-g°ì&@)ñIK¯Êi:ö÷YyZÆF>¸t^¶°(/ÿÅ5ë¹¼üdÈOdÒùgÃß»Ø¯\x07'§ò#¾=´Ùjµö÷Ø\vª¤ìh\r{<¶}Êmy=ö!×¨½@©\"Ø¨3ÓçÖ<3ýwÌ~Ç°ÊrlL¶Ìûì;§.÷HOÏ×<!£ÀÜòÍAÞÁ°|VÜ¿\"Ûá<Ä]qÛ>M\rïÝç÷+SPÀëvöü{\x005¿b² FÅ68o¸wÔï\tÁæýÛ)[øÔW][^ÔrCw¸\x07\vÜöàì,©m\x07 ¹ÇcÛ¥xÇwnä/®PrÊô×»}Ö'v±\x07PÃ=$~_ÀÒë÷ØG#I¶EÞ#óû¾\vÁ¡ùõÕÒ¨QáôU¹¥\\|æÝùwrî\r¾Aêm\x07÷ÔÛv8z­fÕ¢¥Eó)trÔ2ÚqpþúïæUë¾ðM$ï\0Ý#¾;½~7J;\bæ}vè{¸¨ÛV­Ñ~ôUËÕq÷.ôi×mfC°¸Lm\x071y\b4A\"¶]ÊÈn»5_ÁÃpÄm:Ãÿ=ç&ëènû-Q]4ï³à|ØwA.Óyù»t5IºÎ¼ËÏ¸}@.÷dÛe7ZaÛÄ=e¶]Óæ°~ï\b(U·éñss§ßeWðÐü¾À~íc­ýwvÕíwf»ôsÅ©¬I,wØv\0qO¿m²$n×<¥êàµ\\9õï³G ;8ß1F²Ý¼¼úâÇ¾ºø¡4üíwI=à°Èmm\x071{xoëq¹.Å³¡×k3{KZ°°Ô£Te&G×iÏîóÌÑ¼giä=ÜMTz¥¥>!\"ïBN$¿·ígã¶íV«µÛ`0{nï?ÎS¥ÑètúÚºZ.\v¶m¿Éär¹Ø+µ+µÚ55eeeQ¾`ì1LÒÍÕjµV»jK}}ðæ¬ªô¾¢ý³'ÚÛ»\rgm6+z{Ãf¬ô3Ù9£££Í©´þ~¨Ä=\"cÿ÷ßÿh-»cÞÅ)6P\"Øç$4T\\¦Í»J¶=ÎAi3÷ÅWùøl;)ãÉí²¤òôêêìØ¾£AÔÐ`H¶aª:m¹ðLívËÖú­õõ!·5\x07»::»»CätÒi9½v66ÉJ·Y­bmé+ËùNKØ'±¢¥]røÐ!Y\r©aûß\\[ËsÐ.{Ûî¸øY;uÜqæUæ(5PABG$ÙÝÃæ}hläã«!&MÐ³êÍ-tvÁ³«ó*ÎÈ¼\x07ì|@&hJÛmûÛ\x07Þ*£\fÁ÷¶2\riØÙ· !¦`÷Þ=²+=J0´Rjò×aª'WvæúÅ²¢Ö°«³ÚqO®mHª÷îM%³$ã²_ôÄ3ûÌûïÒc¤ø¤ïq'Éø,cQÎ¾Ûy7Ï³mgÊHX[W·N§'%%Å4öO´$ºÝãÇÚXøBº¡ÑØ#ÕÍ+µëju:½9µ¬ôÑÖÖÝ{öJ7×,Óï×é\b½XuÇµMW?;ðvÈÊÓnÙjUMmmmN>]TvzO5Wæ8®BX)ü\0\f&ôÄ=¶]ÊÈn¯·dáâôhñÇÜá¬Éywû¼\\<·KÎ»!Ì{b¤n®­ÝZ_/j\"½!®ÓëDSLþýd{ûÎ¦&©e~¯µUº\x07ÒMñ#©'íöp°¥Ñ/$÷RûÏ«ùJ-WÌ\v®¬Û ý}¥¹Y,ôdZCgÐnù«5bÝ¤ÿxÛ11OêOûJ,«©¡útuv?v\f\nvß7 \tgÛ¥(%c(føÚÌòc7ï³ã\\_º{ûê½»iþ#\fm&.ÛNìll\"y\r¾kJK¤^»»Û@.~ììèu|·TÙ§¼¹f´? ,[a_s3ò+NN|ê*¡'ì¤\bTº´2æÒÛ§ReÞ±ÕQ¸§È¶(%=Ó«rÜMÆÎÉ¼»n\\güçÓ[9ïñÙö\b7KIvI:Åâ¸¸¼Ö¦2sB*»ÔßïÝm6£qSñrVkÈuHµC)»PCTÁ¹Ô>°\fl{\f=%¹ |þE¾¤E\"ù1rïÌ)®ñÙuròò×Wº1í@ÜÎ¯öÎhTûbmly1<b´Ûö¨ûf¡Âd2± Ù<(ª«4ÈÉÔyÜ4\vÊGÅjµJÝFÜiçáT[ÚÔÖÕB¦ îdÛ§õwÆ=î$fI&ï\väÜéÅMÔ\"ÃÙ¥ßX¹ ôªí®ìQ¦Ó×zÿ¦²z¦©Æ=¶Lhó4ÚJéGRµZíÉNß°ÔÂGki\\ºa°_0öÐ\nô/BöNpô&ôoË)Í¸m¸gm21ê¸ëáÔåÊfI*ï8+Í»ø$ê¶UëZÝ²oß¿tnïú'Ó\t¾Ë}ÒI¥9ÛÔß»ÝØ}FUå;\0¤±CÜ3Ö¶Lº]woªJ+¹âùÊ\f6æ¼Óð;Sv\bYdÞ¥O¢®-¯üÊâ%²§Uéã¹¡ézZ5ühJGÑjã¿i4öok&#r§Ñ,#³¯Y¦)æ¾Óx\rC¦Ù\0{¦Øv)ö!G­@¤cX5Ü;úFË\nóü$êw×¬û3yÂÏ}ÖW¦rlÈ4\"ÍLñ3Eöx4M^á\vó \nâÑ¶]ÓæðN«òÍË'Dã÷l7s3;Ì{ð@í¹â§¾òèékÓuû¼§¯öÎtT÷,BªbäZªòÒüÈØµ¶/\"·¾{ÏÞZ%óÕXËéXÅ\bR!ÓiÛE¼ãÎ»·âÉô¹ý^º]4ïÙxÆ¿Y½bqüÖÜ§7¯¤=í=y1ßi]ºBHú%+\nN¶]¼áÉU¶ÚÒbÚk{ÖØö©:ðYÎ±\\K9í9CFÇ>Þ3óu'ËËiÒÃUí\b,Æ`iÖh©Õ÷s~nÍýõ½³£C|/¦®KoÉFH´Oé£I3Ê¯Ë ,~Û>­&1gIÚoåØ¯dHfcÎ»*ÌU6ÊX,iïQ\x07cé«8}U:Z3\\¦ t`§IðÆ'Ä¡cN´·ïkn¹®Îñ~)õ\x07â½M©¸«@±rêHDÏN5\fÍ§RsÏ,Û.Ï¼a a>ë@æ({öwpg5xá§7¯ÜsEO:òYÆ<¶¨¯I{êÂÄï´´´Þïµ¶JmûéÃöÖÖÕæ4V¾w\fÒa[vï¥,ÒGIEH~à@\"Ç%<ßÄÒp¦\"6&8ú\rsÏ,Û.2évYo,|(78K2õù³Û¼»³úa1½Å\x07\tßÁwZV®Xé(\rUoß±C®Î<³w¯¨¿ÝÝ©¯¶®©¶SÈ^ö\rkk¥ué³QÔ8.Vº5R\r·Ö×½\v«áÖúçØP\r»::¸g´mª×cRyÔ%¥eSãô:U¶«ÉT Aó]¬2¾Y½âÜÐ\rÙ3«îÞ¾xghmye\b¹o\0[#´ÞX³Y2Ô}ÿ`ÏÁ³óÎä8Üð´\x07Ùø3$ôÔ%<blw6f¤´)Tmó Y\fj<¶;)ä!\bËÀ¶gNãîÐ¼I/¢¾¦îÍLeÍ{6þD¸³êòy³è@6Ö<ñúþ7Ã\rHÂGò½3ÌÈ\\*aì\b³Î#ÜvïÝnCÚjgcÓ¾ææÄ?¢¢·l­ã3Áý\x07¤;ºÙHÍvo.ÿ­Öf²¸ßïóóý£*Ï#óÛSóýVT¥·Á.Å2nÌ§7¯¸¼ÞpNÚ]®[ñÕ§`¹:!höëò9:¢,Ðo2±F­V+Öm0Oíe&á¦1ÊB{ÒØ=>)ªnÒ&T®xU¶XOét©âªÒúG¹FÂDÒqÙÅmO´ß¿n\b7# Ä}Nàµ\r|ÔçÈôFðX&2¿1Ë·½4\vfð\0\0â>Kð{\\¤ï·¯AÜã&oº¢áå´{v\0\0Ä]ÎÈùÓ£ÿâ\x07\\õ\nRöÜ\"\f×\x07\0Ä=#q\r\\²iËÌ|Æûâ'Uoz¿<\0@Ü3ßØ½áÓ­^ëm{Tr\vÊ¿ý÷óW}\r¿6\0@Ü³\0¿Çe7|4n:QµÊ4q/XZõpÃËy¥jüÂ\0\0qÏ&Æ.~FqÉÝ%O? ;\0÷¬ÄkºÓ~8CBð#îÈw\0âõdNd&{naQeãï\b\0Ä}`7|4îñgÒ.îÈw »À¿Ñ)­ynÉS¹Es¶mØTÙøC(»ÕjmOp'!ÆMÍ!È$~DÊÒo2õLp¦ îsnùòúÝùeÏ¹ßÂ\"2ìKy>»ªMÒùýo¼ÖüÊ{­­Árn¨kÚ¬Öàñ¶´°\t\"HM¤bÖé6MêáUêêì`Gi!àÏ¼år9¥#ºCÜV%\f\x07÷üGÂñÄ:D¦Õô`\bD\by¦ î 4ùe¤ïóµÍC.XZUÙø£¬Ëd'ßGÒØ´ëg\x07hiÐOZ.NÓCoÆ±%ô¦³³ã±>Z%°5iÃ\bÔßor9]¤_¤ÒA²ý÷Ãve³ñ7Ö<±R«eE³°MØôQüJÜXv Ò}ô¹lagG\x07Õ_MD¬¸½ãéHéx¥²îaNOúÈÆd'e×jµÁmÈ6QvD÷W4³HÙ97¥­Êö)Úmqç¬\\iõdgA:é[ýîpÉ:fÒpêM\r¤ò%$²7ßtV#]ÎE£YFoè«í;·{ C®MÌëóNê#¨çðÖúçNò&²+.¦o_ßÿf³I:øúþýlTÛ·¼EëÓÙ¤'Ú?úÙ·¡®ýÖ·è+ÒÊ²²2ª§SP«\r?õÇÙl¶{ë\0­p´õ S.N?H]_+vÂ}õ={èÍ¯Þ}J¡Ú²\"|Ï!HªJéé õsôÿÁwZ¨$ú´\x07qF=æôi\t.ÎãÁµ¸±æd;¯ïÔN§ë`Ë/¨)\\N§V»jgSµ!´µ¾\fÄd¢]±V¥zeúD}$¸¢°ÎúãÇ±{_yõUª+ÊR\v¥Ó\r»¸ÑéõüÉ¼?;}biÍ[f355Êmljb'wÀ¹Ç¥zk¿QñÂ¿Ìî<Ézù¶²4ÈÎZºTdt^]Ì\0µ¯Òh+]C°cGDd÷Þ½¤ÝÝ}Í¯¾±ÿMR±ác¸¤ì¼\nîDöC}IN¯ãgÏÌ/­³eËVV¹ee´ó¯ãëTí\r\r´`ÊS¹¼nvH°HImç?!È«vWG'Óîí\r;¤ÊNPÍ\x07«K*L/Þn¥3bÓ¥ýçJ¥è=ß»L7ï[\nPkÔÖÕ\"-¡Ú¾ñælaÈ¦ V¥udí/´¹KÜº\rVº©¯Þ³Ë\vj\"Ö,Tg:\":ìdÑOvî²jN-@Í¢V«Åà+M¯Ê¯üJ3\nâgæáïýë¬\fÁçi¾ÿãEoÊÞCà9Y®þ´1gÍTT4(äTË´½h+Ò;ædécüö;x'{¬¨\fFÓ·Âsü4u=ÆÚ:ùHLË=Æ·ßzVNCAå²Ë*U¿pòÓ$>ôn1WLu¤åÔWÝÕjµÔÁ¦¯FH§\v\vêf\"ÌAë°CVjvñA\r%vô²rÌwêHY'F«ÈæS´7ÚÄØÓC_Ña­­~ÐæâÉbï©T.uÔ\\¤ãÔÙÕ`åÒG:\bÄ=ÑMÅ\vûÈÅÏ¦âªWTÿóO³=hÍ``_²ôÅ@TBX4Ü²ûx$1¢ß¤\r#¨Ó_úÉ\v°Úî½{È?â3&å¢×ºPÉÇúp®¸8j¿E;¤=ÓþÉnDÒ±P)ïmZiRLÞÕv¸Såé£tÞÔâbÎjv¹bÙpº¡z²ûÔU°tÎ\vúËÎÈýIPÛÚ¨}è°\v)ª9\v ÑÓWµæÿctîhM¶>+N\"JmI²Þ(´mpoÄN¢\tawÄÜ¤´æ9òïvÃG?STmØuY1áÌ£ÂO÷Lü$©[êë¿{èµæWÝZ iNhgnWTM´A6B\te1ýþ½a\x07­¼¹®¾ýÉþýLÔ¾3Ë,F\fÒ©wx÷}J|hOÿÅOö¿!ÄR#©íìè°ÙlT+ïÖjWL}¬DA\"§}KmBÎ÷µææ×zÆØª¤ªt\\ÔámÙZOÅ­Óë¨ÿ8|èN¯g}\0ur¡³£ÑéEÍº{Ï^ª$É:õOÔ°5\x07ÍâÉ¢6§túè(¨Ø¾§Ö¯µjÜISãÓuÌ?íÝ³N§:á!&ðZ¬gÚ:dRbÊ-,ZòÌ\vT I°» ÛÄÙ\fê¢¶òS]Ð£5É,X$WýWÙXyï\beOt)@v^¸\te\rypj¥9>ß){¦¼±$äÜç¯úZöfÅ\0\0 î©câöµá[Á'CÜ<ý|VgÅ\0\0 î)ÅïqÝi?¬l\b^Yqç\x07xñ¹ê8Y\0@ÜÁÌPv,IÅ½`iUF\0ââfÜtN©,I¥Ä}Öä;\0 îéD©,ÉÄÅù\0@Üø=.Û'm®I£¸,­*ßö&Q\0âfäüéÑÏÿqG¾#\0wDÉ[Ü?ù¬zÓ³h|\0 î øÆî\rn#¸#ß\0;H)¶3mã¦óI÷¥U7¼WªFk\0q\x07©c¦Y3÷º\råÛ^B#\0q\x07iÀkþø¨ÏSûÇ(îÈw\0@ÜÓOìY±{Þ\"uEÃËÈw\0@Ü3X²$£;ò\0÷#jddqG¾#\0\0â¡DÎ\f'îÈw\0@Ü3¿Çe7|2K2¤¸#ß\0\0qÏÆMçlgE÷º\rK~Av\0\0Ä=k\bÎ{ù¶ï\b\0¸g~ô}âö5¸#ß\0\0qÏzÄ,I&î\\õ\nRvb\0\0QÉCd2{ª ¬Òv¦M¥@¾#\0\0Î}Vá»ç¼zy¡¾M\0¸\0ÀÜ%M\0\0\0w\0\0\0w\0\0\0w\0\0\0w\0\0\0w\0\0¸\0\0¸\0\0¸\0\0¸\0\0¸\0\0Ä\0\0\0Ä\0\0\0Ä\0\0\0Ä\0\0\0Ä\0\0\0Ä\0\0 î\0\0\0 î\0\0\0 î\0\0\0Èÿ\v0\0¯îzÕuÎþ}\0\0\0\0IEND®B`";
            var binLogo3 = "PNG\r\n\n\0\0\0\rIHDR\0\0ô\0\0\0\b\0\0\0§ÿí8\0\0\0\tpHYs\0\0\v\0\0\v\0\0\0\0tEXtSoftware\0Adobe ImageReadyqÉe<\0\0^IDATxÚì[TTWÇAÀP(*`\fbyEÊTÊcÀ4\b¹µÒ±×,4Y¥8/z^\"éD}é&®Õ½¤_Z5ky[kbm'°§¶HDÊHBK\tÄPU\\«\nª\næ;gëöpêJqêÿ_×²ërÎÞûìþû¾ó½ãÍfK\0\0¹Åt\0\0@Ü\0\0@Ü\0\0@Ü\0\0@Ü\0\0@Ü\0\0â\0\0\0â\0\0\0â\0\0\0â\0\0\0â\0\0w\0\0\0w\0\0\0w\0\0\0w\0\0\0w\0\0\0w\0\0¸\0\0¸\0\0¸\0\0¸Ïo'¬·ûÐ\0ÀIDD9$ëÞ»>îrüóMÏ¯x\0\bx³Ù^ZþzÿÖÿÞoã×.ZþúÉ\tIè\0\0Ä=&±»§»¿ê}¿4)åõµ;2¢\0\0÷£ß>tºë«!ÕÛ{Wm×¦­AG\0 î1C³¥ûÂ½ë~7Ë[¶úgê¡»\0\0÷hÇîr\\îûV?ØàöO$/}}Íe\vSÐu\0\0{28a=ÝýÕ÷ö¡íõXBéûºEËÑ\0\0{ÔÑ96@Ê>îr·;²$\0÷¨CïdþlÕ%\t\0¸G»Ëñé½oÚû)\rY\0\0{äñï%$½¹Y\0\0{dh¶t_î¿tÝ7È\0@Ü#À§ÆoÏw\fdI\0q¸àòY\0@ÜA8e¾cp¼¼rKAF6:\0;\b\tä;\x07²$¸åQ6ß18H^ú3õvdI\0q\x07ÊÐoúÔx=<Avß K\0;Pæ;Ç3^Y¹§\0;\bË}ß~iêÂ=¼ôÐúg\x07\0âfÝå8u÷ï\nbTIª$ó¸bÏ²\"K\0;¡Èw¬|ª0{IÆÕþ»:[,Y\0Ìa \v¤Ñt§öîßCd/Ê\\O*O.^©ÿ»ïæéî/íÑtK\0\0\0q.Äõ¬¿$¹\fi-äßn/ÉZ´D©ÛûOÝý{$ó\0\0 îQ\x07#Id¨3Ù/tµôZ«¶>W´r½RÅ~/6þÖpÎ#\0wð\bEeoz£wl¸æ;]EBö®Í}=[«TfÜå8ÓýÕå¾oq6¸Ä3a.Æætü©­,<½Ï\\]ùT¡!/M4J!\0Ä}^Ãò#É~µï.Yx»Ë²äOíÜ©TÉ]c'\r_ \0Ä}BòG\"HR©Ü6¸^ÏBð4ù{×å*U2]|tû¯¦;8Ë\0@Üç$|$TÀætTßøÛÕþ»q¡ÉüÔø\rB4\0Ä.xiØ]îûVÙE^Rkè¥HQdäIîlæ\0Î}^pº¥©¹ÏµÍ#/¯líß»ð9Î;\0±H\"º @,6kË÷B2xªã±ÉÅÎxÅÏUbRQæzf½k¾Ó¹k4~~º3l\nÛñô;:îÐÿikaSN\f©&ùåËÞMyY©^¯?>k»qodPöevÚã/eoæýÃ#o×´C;øûÉÛ?R°àÉK^æ£©Ö)£N~Ñ­._¾\0â>kîheoFÆÆ»Hß\vâ)ùBg\v©öëÙÚ¬%G·ü©íáqw\\Î©¾»Þû£ìã~Ý[âÞap»¦ð¶qSo×ÕîÛ²/i$(Z»QúÍ¤Ý9Ñi}ÛâgNºÉôdg ï>Ä½óÊÔèôGä,{ð [£NG/öþ­ªªyþwzþÜYc½°Là¶Tµ;-ñqvÅzï¦¹ÿß]cÙ/äÓ|\0u¦XÇ\\]­ã\\Ùû#£dÞçäií:ÓòµìËäÄ¤×ró¼;=MÜ3·»ô©[qN»We¼+WvÑ¶¾³÷&©½ÝÀ^øS%eGo@Ü±í\tkÔâHSLØ¨M?\b¦cïÚÜÝ*}ñÁàóvËØÀ°|na2ïsïÚSÍ:÷ï_Ë}ÚG\fG?¹u»ä_9íSý×½»ûOdÛIÜ¸+kÛ¥\f\rÛ§,\tSÉÍé;ÍìÔÜ´Le@õË@·ÓÐ6lw8ÝæÝbc/nØ¼eEVHëõhÞÝc5°Nõ7û°í\0x1÷`l»1ûD#!qÙTÂBeBðWûîÞ6ýâ©ìTeçp÷Ë9ÕÙj7\rÛ|lswß|ÖvÃ=4µVzÕ/*íªËTÁ÷É[ÿ%ñV÷¤°í\0â~ÛÎq¸\\SÜ¢eñª)E*í>q½þ&?{IÆkÙyv3t\x078<ä¸Ûfwø©÷¹¡ïÞn¢¾ºiÛÊIÖ®Z¸.=HóÞy]úåQç.îd`ÛA@]0Û>ÍÂ:ãG\fÑÔ|§ûÜ(ÜJN\bÕ<Ðï¸usÄ¯²só>\x07NhïÈÐ¶rNL:WÎî÷©ÁN¹ÜmÝhm\x07÷°Ùv)#£ãñC)¥@â~ÊÐDÎ^qærNÛ'X&{ÌÈ;»jw{à¶ MÎym\x07÷ÈÛvÎ¨}ÜaP2KòØ?.ÿá»k\n.íï ±nÞ=ÞD}-÷éì´Ç#ð·çnÞ%ö©Ñ~¹í°í `s÷åònÞï\rbG1ïZº$ÙµH±ù\0zÇ*jtp²Ã0fwÇéÈ»·¨ôH{<DÞÅHá{Á¶_\vÚ¶L¦FN¯o¾g|ð8Ï*µ:/O[\\R¬\nàíÛn0Øl.sr49MAaaFFßªoè\rt÷ôôtfÓîÒR÷ÝYSé\rýDå³//ÖÕ5ê®ÍfVuÙþ}jõjY\véÅ3ÙU*íN¤rÚÛ¡^w\\íºmÅl-CÃöTçc©MT \bÝÎY16ãí&*ÙöH^8»¥Í<wAå³í¤.ÖÉ¾$§×ú²}û¹ºCüqí)¦ªÓ¾\t¢bwï)ÝSZêq_£±çJ}Cc£N*¾§×å²ÚÍ&o-ýd³Y?¨®æc«Z:$P-ÕÔÈZH£\b+Wq±*Eí¸û±íîZ0SF¬ãIã\tIiSJMT0Ä ûø÷æÙÆvbÑ¼÷\f}~ÇCm}ärëd_÷`S_y21sÉÌûÔ`§h\rÎ¶¿â=©2Êÿ«¶Ù>ù¸É¨GÃÎ~õ\t1\r\0++dW\0Gw¨|Rjò×^'Wvæúy]~[x¥¡Úq­m¢P2K28¬c®ö±q2)1gÞ?sKaâ¾\x07$ãì÷s;zÒî¿Ã=wã5!s&(ÛÎ±¸¤d[Sß¬¿X÷gîvÏ;ËÂÒõúf©næähvçåiyäk7YékkWTJwW¯Vó÷Ûò\b-¯sçÎrÉ¦+_xßcã©X¶Ù*µº¸¸v'ÎÞSËùÆ*®BX-Â\fôÄ=¶]ÊØ S\bÑ,LÏï¨s&çÆï37i#yÒyÝ#©»÷rM¤7äÓó´yÜ¿TWw ¼\\j?©­@ºÉ?zRTÂÉêjF¿¡×ÜKí¿ æ9U ¸²aô÷HU¯ôdZCgP±ÂUEA!oÔã?{\x07ñIý©L~TcFa!µçJCýùsç `|º t¶}Ú%¼ÒYbú:&UvnÞçÆ¹nù¡ïå\bÿºÏ6m','yu¿kJßH½vc£l¨oàºI¾[ªì¼¹zµt< ,Ûà­ª*ªÂãWªø£«f½·öSíÒZ8dÌ¥·O¥Ê>}`+¡1\nqmç(%é7ÓÕ:ÞÓ7ÂÉ¼ÛÛ?7Îø_G¶sÞ³í>nìtò|^\\Aëu2s<*»Ô³÷dÀõú\fðdüù{³ÉóÖ¤Ú\x07=)»ØBTÁUá}(âÛîË5brÄ[B}£çwTÒ¼7]¹ä~Õb·z¼ÝêvÕ¢ç7úx%<óWó®hn»4b0<0ÂFcU¯R«}';J\x07vC sêL&éXbò\"îT¸7Õ$Å%Å©@@Ì=L¶}ZfhBXÎ)dY³Ïw\foûúÉ¼oÍÊ¡ó{H[ºìù\x07Ù£L_t´þSÖÚ>¤ôÜ2Í»Ûl3qJ?ªÑh.]|øúÃ°TvÙTHàÒÝÕü¾6 ÿùÈÞqÞxþ«´Y¥÷°í÷¨³íÓôÝ:®r&Å/q)%©T¾càæý7¯þ$VN.õÕMÛjõ²_O·4Uæ?ÙàÌé»ÌÑìT.ÍÞ|´·Ø/od³6êô5U\0ÆqZÛþ¨º\tGÜ@Üâ´¤¸de&³¹º\röaëxØ!Ì»ôIÔ-+²6¤-=­Jz»\"õ´ª÷?Ð°Î$£Ñ7R¯o>ö¬4Q¥R©Õ«Éì«W«ST)'?¨}\v=¦Ù\0{´Øv)£Gêb²$\x07\x07¥6Âßi1aÞÝD}=7ÿýÿ»,ÛìBÛÜYá_\0+\"H3Ó9!'(}=^$MWøÃØ¥¸Gµm22:¾È¹prkAP÷Y]Î©ûÝeÅÌ\róî>Q{*åÅ\r¿>1\rí_Üié¬î1TyäZªòÒüÈÀµöâ[?\\Q£Q21]\v²Ymq 0-IÛÎ³O8LqAdIOv¶Ú#¥ìÜ¼Çâ/Z»1-Y~kø§½$¿G`¤at¿i\fWp²íü'{jTÙfK[e¯!î1cÛ9AdIN¶éG}/6ós']äÑ¤{« Ö3XôîÒ¬V¯NOósÏhôàØP_ÏßóÔué-Yö³AúhÒòëç3\bËDÞ¶K\t<Krà³£s8J:0¶Òf8ï¬²YÆYLÕïÄadí*vUlÍê-SP:1KAÁ4\t.(ÜÉ§¹XW÷VUÇ®4Ôóû¥4ð{Rq÷ÖYÆÊi áZè-Oµ (ç]¶}dXÇ'-\v|LTàrNuµÚ£GÙc×¼ÇwV=\föÝ·-6ÿé¤ÎþN³ßk0|VTW{´ÞÔÖJmûîéÓösóNJ»\x07ßu:é´-\x07Ëñ÷Ò\fé£¤ã_81ãoRñË\véL8\"6ýÀ¹Gm4ÞL8Z.Yà%þ|Ç¹mÞ½ÝY½Ð¦ìbÁAÂwòêG\vk°9¥¡ê²}ûdéêÂÌ3\\uC[qI\tSm«½.vKëÒg£h\0°Zm¬v'k¤î)-å£\vkáÒ²¡^©o@8âÕ¶3árMX\\©J}4mìà³»ÃjWhæÞP÷Øz`Q´vcSoìÕúnÞïÝ²\"+Ü·M­­áÙîÌá%ußoVT]p¾$ÇÞ¦W¤dóÏÐÓpÂk¼tÑÃÜîlÎHé\b1S¨ÙÆ#_\fZè>·;[Éã!\bËÀ¶G#£ãSIð¾¯cÂÐ6ÊÎÍ{,þ7àãÎª-ÿÛð»ØùÎÑcÞ¦E$á#ù>àef®8qî»³ÁÃ[\t++¼íH{8XþVUÕì?¢ªwï)åñ÷ñj\tÑÝX$Þl¶Ìçã?~åÏö¨ÿNJH0öÛL#1Lü]ÙÞ\rémû,`ÌCp6ÃÛ®A­ù^píY¸.=)h¦ïÊ×èð;°H»ÁÀR5\r=:j,3\t7ý/ÀYYhw}³^»gË'ùÕMÚêå÷We{ñvJKåk¨JÛïçj[\fIç\rfò}/Ö=¸nð¶\" Ä}^Ð;2tªY'»$B¾ëþÎ<òüçÀ\n\0@Üç\btéMú.Ë¸Ï©¿\\qÏ\0xtÙ.P%&Uæ?÷âÍèàØº2ó÷Q\0HA*ä^ÊÞºôLË×öºq~þ´öüíè\x07\0 îÑËY«RÒëzGÐ~Y´pá]EëÖ +\0Bscs:>k»ÑÔÛU­¶ûúôã/<ºÿÁ\0\0ç¨^Ë}:+ué\\@jöh6~örîè\n\0 î1FÑÙi×4ý\r!xÈw &@XÆÑ%\ra²ê¿yõ'È &@*¤/X$¹xtÅÖzc\0ûÜáÕMÛÊó\nçÇÒÙ»õ)òì\b²L&þhû,\vñ85nxAöÍìHYÚ\rv!ÎÄ}^°eEYø¬Ô¥óíÀIÐ½\\òæÎgb«Ù$Ç¾ûËª#ÔÖºË·]üni6Üç;<Y]Í 5.á\rÚ¦Qw-¤Ït¥¡i}¤/é\0}â=Í*ÑÅý|ß8q:ø ×?WÇÛàwVÃÃ)hfÇ3q\x07!e¯È.?kíü9äõédØc.|\tÊÁòC¿:qB½ZÍÔþ¥ïù2=ôiûÞ44ÔßÐ7ÓG¶%íèCÚÛ\r6«ôÔP:I³¼VÙ,|,(Ü£Ñ°ªYKØ.lKúÈâ¥ñ°éÑç²/êë©UÂfâ$b))ÂêÕ*U\n)¯tGvàÒ¶åiIÙì¤ìÆ½Ù.¼eGô`³#Û]\\s#EÚ«¬Ln·yá¬^iódgAºèÛý+-pl0¯²$c7ßtÏÈæ.gÊ¢V¯¦7ôSÙ¾ýçÏ{(C¶\x07Ë×ÓæÔGTÏ=¥?½$È6UJ\nýúÎÑc>Ì&éà;G²Ymß?ñmO%³E3.ÖýùW'Þgºøè'ÒÊ\fj§UT«;¹üK*Êl6ÿû{'hkO:eËËÓöÐ ´JE°a?½YQAoþøáT\vµUÁFQRãÄ~Ò8Gÿòjj'>ÀWÔcN¾¡Úù:ÂTê}§n´Zm'«K]a³Z5M\x07ÊË©©¢=¥¥Âb ÅzêÈôúHp?ª©¡BØàGãÍùsçØÌ½GÞ~Äê¥ºÒÅÚéÊ]ÜäiµÂÉ½?;}¼Á´å=£:º­OBõ,/g'\vwÀ¹\x07CÑG\nJæv\bþÍ;ªvÅh\t´ôR1Òz]ih`Ô¬ý*µZ´Ò¤\bûöígËP®¬$5llÔ½Uõö»G]òÃ%e4TtÇ$Ü$:T$1yÚ<aõ\fÑüÒ6»wïa1[­^M?ûãg©%eû÷Ó,A*Oõ\nºÙ¨#Á\"%5ÿ¢(¬ÙWêvíß'UvZÞ#Z]Raz\tv»Ç(].è_¾V*UDïÑeºyß-6z£¸¤9#c9µöÝcÇØ»z¶õ¿Øç6¾\v);\r¬vC[½gÔE¬[¨ÍtDt\nØÉ¢Ù¹GÊ:j9õ\0uKzz:.±zÙòªÂÆGª T÷ C4ï½2'Cð$è¿+Û»wkn\f_`¥¨dQºúgÒÆ5SaRIÒ K-Ófô¢½Hï¥>\"òeûö\tNöÜY!¢ÒcdM/ÁNkÎ\tËÔ5ëKäK 1-Ó7ëßï=Ú@º\fÕË.;¨jÖHájÀ*ÌéÿQÍ)ªj#}O£\byUÙíYFC\fiz8C:]XÐ0ãc­\fÚ²»R³ê(><Ð{úµÄs¾ÓPDrÌF8­\"O5Ri´¾¹~¢3Âz;ýaóÅÞS¨^$¨»HÇi°áÍ`õÒG:\bÄ}¶!òïs,Krnä;\n\v­ét,òKÞ°H%õ¶\"ì>I\f÷´£Õ`úKÿ\n%nv¸²ü#)>ÓhR.zmó4<t¬;É«RRü[T LåÝ&¤c¡Z>ù¸Vj¥I1WÛ¨câN§ÒuSSRT&ÓÍÐ2ÌÓ%\bµÝ ¡µ¤QwÍ[Ð_vF,zö,õv!E-g4:pú©øáúìÎmÉ¶gUÐI¤J©/IÖ}ë>±h@Ø1÷Yòê¦mäß/´Ý²îÝúTÌeÅx3bZ°Ü3]ò¤î.-ýèÃ_V]ö~Ï½Z}ébs»\\),§rDe\\NÚD\nE&Åô=ø÷ýûhã]%Åôëñ£G¨1}gÓ]¤S\bîûÕâûÐDþÛãGßc)?%©m¨¯7ÍÔ*ïÖh6\fm¬FQ\"§ýJ}BÎ÷UUïí\f°WIUé¸hÀÛ½§ªÛ¦Í£ñã£<­¯úäät:]C}\v£ÓºõpE%5dÆ'?Ø=Æ~²¨Ïé_:}t4Uì§í?©­¥¸ÒÔùtóoÛòò NxBUzGÎ´4t.É>¡ºháÂ7wîÀ¤!Ý-{g\x072hú¸VXê½°LtÁ²$s_gùPöAdçÅ{PvÏ\x07§^çëÂ¹G;W»o(K2DÎ½`ÝØÍ\0ø\x001w%)Z³\\ü©æÆ\bÁ¿¹sGLgÅ\0\0àÜÃÍéø°éoÊàuîdÕ¿\\²5+'\v\0;µÝ¸Ú};\nÅ}}Fú`0\0æ:\bËèÌ3ù\0\0{ÄÈÏZº,ÔY|G\0æ\bËÓqæfSË}³)daõéU»°Ô\0w 0ßiý¢£5\"â|G\0æ!\bË²7g§/äÏÖ¾¿ý\0;\b!õ^D\b>\bç|G\0æ3~ ¬¤©Ra9§õé¿+Û\ve\x07`Þ°Lx-÷éì´å¡Ë,Ñl¬ÚU~\0âÂ\rË<Õ¬³Ø­\n|G\0\01÷Hxd 1÷©¿\\|G\0\0Ä=*\b$KÒ¯¸#ß\0 aÈ3û,Iä;\0àÜ£ßYÞ;ò\0A*d´¦J©ÈnFYÈw\0À¹Ç\fM½]gZ¾öëÜK4?û\fì\0\0 æu%yäù#ß\0\0ç{ØÒ÷ËÌ¹#ß\0\b¹G)ªÄ¤Êüç^Ü°YúåÖ¿/Û\ve\x07\0øa¨æ¥ìÍY©KY\bù\0ÀAX&°Ø¬_÷Ü{A ;\0\0â\0\0óÄÜ\0\0â\0\0\0â\0\0\0â\0\0\0â\0\0\0â\0\0w\0\0\0w\0\0\0w\0\0\0w\0\0\0w\0\0¸£\v\0\0\0â\0\0\0â\0\0\0â\0\0\0â\0\0\0â\0\0w\0\0\0w\0\0\0w\0\0\0¡äÿ\0Q4\x078Ñá\0\0\0\0IEND®B`";
            var binLogo4 = "PNG\r\n\n\0\0\0\rIHDR\0\0ô\0\0\0\b\0\0\0§ÿí8\0\0\0\tpHYs\0\0\v\0\0\v\0\0\0\0tEXtSoftware\0Adobe ImageReadyqÉe<\0\0DIDATxÚìoPTç½ÇA8( ÂÒ(KZ¬ln4ðêÄ%i¥½£Æ¾Pl:S%7w&!Î$ÚéÌmLgîLÕW1¹/®!¾¨Ug®¶h­ØÆÆe*iv\r°¢,Ê.+àeÿÞßG³YÎþï';fÙ=çyóø>ßó;¿ó<éËp\0\0Eº\0\0\0 î\0\0\0 î\0\0\0 î\0\0\0 î\0\0\0 î\0\0\0q\x07\0\0\0q\x07\0\0\0q\x07\0\0\0q\x07\0\0\0q\x07\0\0;\0\0\0;\0\0\0;\0\0\0;\0\0\0;\0\0\0;\0\0@Ü\0\0@Ü\0\0@Ü\0\0@Üg7n+?Þuý\0\0LtAC²þðä7^»kÞKËç¿´\0te½´ýõÆ£¿Þ[V¿íùô,ô\f\0\0âxíNëÑ¯½Ùçsò9Ò÷Ì¢è\"\0\0Ä=Åp\r²»­|°\rlú§)AG\0 î)¯ï9ùMØÍHÜIâÑ]\0\0{²ãµ;GÏv¸G¸}fQ^þ¶Ï¡ë\0\0÷$Åmå­GÿéÚùËÉ$}[V\0@ÜG¯ÝkwE·;²$\0÷¤CïÙÏ-]¸é{È\0@Ü×î|xòñ®û,I\0\0Ä=ñÍwætædæýð;È\0@Ü¯ï={-ê {h%\t\0¸'ßDïÈ\0âqÑå;Fyj%\t\0ÄÄiæ;FGÞË­.Cç\0q\x071A|Çè@$\0w <Êæ;FGfQé;²$¸ep\r²Ç'ÈæL#K\0;Pæ;FGnõÓ$ñ85\0@ÜA¬ÛÚo'aÃ2ò\nv¾<\0w05¼v§å³(Éà2çpYNbÏ²\"K\0;±Èw,i\\Å-[d½xgèT·Å\"KLº@Alí½Ãý#FAöüµß&'¯T£g»qÈ\x07\0ÄFXÏú$1­ü{ÙµÙÅyJ8Þu_ à\f\0q\x07rHI\"cÉ>tª{|`4#'³´©\\¼rç\0;ß{ÊÞ>\rZÑÀhÿ¡GWÐûÅ¯W<µ­R©×î²ýzôì5M\0 îÀ\x07\t\"ÉbÜ2Ù=¼ëîa=»­·ª¸¤q![ûmáBð\0@Üg1$$\tÉd·^¼CÞcw²¼µjÞ¥Jìèµ<8ø7à¸ÏRHþHI\nÕ\0¾g¸wßEÿÖÎªÅ¯W(7h¹Ì\\²µ÷â,\0q]ðü%|RïêÛßN.>-6Y#'¿AÔ1MÉÕ:Iõ]D©àûË\n¾ÿ¬\"E'¹W°mK\08÷YÁµßë\x07¾îOÚæW¶@ÓmëÇy\x07 ÉDDÝb»ßéKçd?åqÏIW¦XË¹\f.å­³dGfÓÐW|Oü.³®ÙÝØèMç½+Ö¥Ð:Ôñì×+ªóÛþÝWúG­²-ZòýeÓgºG¢~BmÑÎ'àN»+wXÏý{ZN~¨KÆ¡k^N~Ñ­ªI_\t>Ä}Úô3²7GÆys<î\fe~èT7©öSÛ*³óÊö¬½{XO÷ÇáñêìÛfûñËSWSKÜoÉ>á]`w\fÜ¾xG¾Bk^>éªÈîRäþyúü\"L{zÛ|úBÜ{/xÇ'ÿáædä?ÃÞ¶ëtôbïßijå§'3õÐi\bËDnÛ\x07/&ÄbÔqÇö0-]©òuÞïÿ¸e¿OWðÔ)_I8=ç¹De'FÌ62ï3ò´>üÃÕ¯dædf½Q¹ËÉÈéEÏûtïPWËTÙ­·äÊ.ØvÒwöÞl6_¿nd/ü©²£7 îÑØv·Ã=0ê|0gRU°ÌhÇ@ð\0ê·~ªQ0û%BzsÃãf«\\hÈ¼Ï¼sÊ»éuþ¿QùBreëå¹ìÞÁ¯»ÿWdÛIÜ¸+kÛ'ET¬ã½\f·W<¼ëÞÑ«ìÔyK}\x005,_9<_Þ{äpWvFwRöa»Möá+Ï~gÅÒâÖÐ¼ûÇjüòY½ú¶` æmd\09z²æ¨²ÒrºÇj½xï.yk{\0UÙ9ÜâðxÏ:Í#ã!¶I¹È{hþØ}Å?4¿ªøiéMÔ°p|.:óîéú?¹]ó¿Aêm\x07÷øÛv·Ó}ÛV4?sBAøñÑÞ}¿µSÃ-[´ôJO,wÿÕ:îp¸CoÆÌûÌÐ÷`7Q_«X9¥rr4%Ñ­få3ï½HÐ¥zM:q$Û\"òèéØöI*9æLW2DÓ¨Ãrî¦ï$åÄj\f¾fw»o\v«ì¢y't`ôá©î+rÎÌÚYU£¨ÁÌ»\\Ç­½r¹'Û.»Ñ\nÛ îq³íRG}évW©XÎõÜýÌ@Î^®a»æðxÿf{É!3 òÎn¢Ú]òivjªq¹ñlI$wØv\0qO¼mQÇGÚXºY7÷^èÿ¸CÁ²ýó#$ÕÍ{À¨oT¾°lÑüíùwIÝ;6 ·¶D\fbîAqñÎ¡o£ØÑít÷9Ýó³¸ÝJ5f|@±Å@ú\\Þ/-ö\bC1Í{FÞÝD¥WBÚ ò.äDú>÷ÙöKQÛv³ÙÜ®Ó\fú~ÓãëÎªªJ£­Ór\\ °}¯<ÿØO«ËÕêêÂÂÂ°U_1èF£t÷µºbC}½ÿî¬©ô¾¢òÙ§[ZÚu,\v«zóÖ-*U©¬ô3Ù9£££Ý©TÎõëP/{HL_ÜrMãNæuÜ7·ØëD\x07õÃsõÞ£é¢i3Án¢mOä³_ÚÌcq÷©¼>:ÛNÊxætìCRyz]hkÝ¼e«¨¡þ\"ÞüSÕI\vÏQ±6Öo¬¯ü÷bê»ÐÚÖÞ §\n¤Ïéµ}G¬vÙ,¶¾âyÛýûÅ1U-¨OµFVþz­Ëå ]÷0¶ÝôÅÍi26êËüöÜ4¥&*,È~wxº±T4ï£ÏõXDp}ôìµP÷`ó~ø\\è95ýÍ»×Úë\vÈ\f]Î¶´ïC©2Ê <òy3Ñ}b\0v5î]Qü¡òI©É_\x07i\\Ùëë\nÛÂ\vmmÐ.{lm»4DsKÑ,Éè°8=ç¢\rÅÌ\0óþG¿ô)>é{ÔI2aÎ$5y7]òeÎDeÛ2 jëêVViHII1\rzÃé?n÷Äñc,|!ÝÑ`ÐKu³¼\\½¾N[U¥#'¢vþ¼¹y×îFéîªRø~e¡« Áàøñc¢dÓÁoö}°ñT,Û¬D¥Òjëhwòé¢²Ó{j¹¸1ÇqtÂjñMÀ`4J@ÜchÛ¥\f¹ÆÌ]âILFßQ)fLÎ»ÝåüCgÇNM\"ïR0ïÓ{$u½V»±¾^ÔDzC>½JS%bòïgZZ¶74H-óæfi\t¤â¤T ppÿ~F¿b0ÜKí¿OÍËÕ\\®OpeÃéï»MMbí¤¿$Ó²:õ]UT×mzüÇA|R*S<Fª±°¦Ús¡­õÄñãP°Ç¾];Û.Eñ,É\bC1:^aeÍûÌ8×WÜí~à?BÿÙf¢²íÄö\r$¯þwMé©×no× ?¶µ¶ºI¾[ªìÞ\\U*È&Ë6x§©ª\bxÇj''>q 7k?Õ.­E¹ôö©TÙ'lu4Æ@Á îq²íþHé,É°¡ó\\×l±(Ì{_÷qÆÿÐùUb0ç=:Ûâf)É.Içé\bm·ë&2s*»Ô?þí²X\f}äÇHÆâ7Ól¸\r©ö@Ê.´P'Up.¾%@ÜaÛÃãËqÓcÞí}.ï9Ý~ÇYnÞs2³üo¢Ûmo·ÓÌ{iy×g\tjÞÍmCÆÇFØdêCÕ%*UèdGéàqÝéS f³Y:;Lµ¥¶N\vÄÜãdÛ¥ÜqØb%9ý|ÇÆî\x07ô*­XBçw§¦º8/¿Çò@ö(Óù×V?=ÕT£[&°y÷m&MéGRÕjõÓO®#e¤²Ëî @îè¯æW\fzÚþ\v½ã½\t|ÉËÛ¤÷°í÷¤³íRÆF½\\VIGÙ,I¥ò#7ïÛ~ùRª\\ñIÔ×*V6ä+½ÚÑ¸j]b3^Òw£Ù#©¢4\x07óÑÁb;!¾%n×ù\\Ð§ÔTß\04v{ÒÚö\t!æ·|ÏÑd-LSæ.«ÅéùÛ¨sô#nBæ]ú$ê¥ÅÏ.Z,{Z~ì¸¨§UÿÆu&µ:ú»þÄ±cÒdDãTªR2ûªRU.{ðÀþé·0`\r¸'m20êäÈìÚ§¥y÷u[åªþ~V¶Ù©î+Kã97df¦Æò¨ô]öx4M^á?RS\nâÔ¶]ÊðÃ>on×UÆáñ~5îQVÌÌ0ïþµ/âr_yö;çoNºjw9Ï÷\\ê¬î©d_$Ê(F®¥*/Í\\[i/ññ\"rë»v7«ÌG,Äx\"Ù2´í¿²·¢ÊsyÎ:¥ì¢yOÅ3¾öéårä·æ.Þ¹ð´÷Øaä·iÝ.F!#*8Ùvñ'{jTÙfK[e¯!î)cÛE¢Èìsy[ÌöÐËãÅÍ¼§ÜIç2³ô`s¤:BÁ_UªÒÇ9?ý&SèÇ¶ÖVñ½º.½%\"Ñ~:HMR~ýlaÄÛv)gI^÷èï?JL­´wVÙ,c,¦vâ0F¦ÓÄé·ËNÌR]=I«kjÅ©cN·´¼ÓÔ°\vm­âýRÄ{RqÖiÆÊi =;µ0X4jAPÎ=¹lû¤HË¨£×b¢ßzÖc®äQöÔ5ïiÂUÿ/Þ¹1Ìt¹éTYÂ¾ÜÖøìßÐzinÚö\r§íÕÖiEóNJû\x07ßÛu:é´-;vï¥,ÒGIEH»oßtKx¾//¤3áLDlFqö\0ç\\¶}B¾yç¹sÊN÷Ï¾ãÌ6ïÁî¬ê6$vB±è á;x`yùÄÂlNGi¨zó-²tußÌ3¢þ¶·ëÆnm]Sm½.ÖkµÒÀºôÙ(\0l6Õ®àdÔÂõõâèÂZ¸±þGì@¨ZÛ¸'µmq;Ü7¿`n×#~Øãð\\¶;Æ]IØàT|`±öéå·eÏ¬^}p·óþÀ¥Å)t ä¾y¶¶F`\v\\]³^2Ô}ÿ|÷nÁ³û/Éq°é©Ùü3$ô459`nw6g¤t*ÔlSI\\\fZè?·;[)à!\bËÀ¶'Ã#^OS\bÑèx÷÷%§²æ=\x07BÜYåýÒNfªkjßß³7Ø´$|$ßÛÌÌ&Ì=bw6x+aWãî`;Ò^Ûw4¼ÓÔ4ýç¨ê\rëÅøÿøAµÄèn*n±\fÏæãÿû³É,î9YsãNK¢³b\"¡á×¯,ýv~bÛà?\vX$óÆ\\¼sw:íè¶ò¼¾?ºöÌ-+d\n¯õ|°³\v\\7Y\n£Z­fÑ©¯]§Ú'ËLÂMÿE8+\vínÐ¤±{¶|RXÝ¤]¨^ñþªl/±ÒåRÅ5T¥í\rä@:o0+PÜ÷tËãë`+BÜgcý#/Ûý&Ìek\nÜ&zõÍÕ3`\0 î3ïì<Üaí1's#\\Üæþøí5\t÷ì\0\0»Þ¿{Ï%ïÝöd÷Ò%¤ìÙ¹Yø- y@*äcÊ~ _² ë÷úäÁ'µ¯}wÍëè\x07\0àÜ»ÅÖy¸cl`Î=,Ù\\Ö«?[]þ|\t~m\0¸§\0.ÞyãÔÕÁË¦¤jU²ûÒÒüMo×.\\<¿0\0$'\bËøõ\bõÜ6Íüâ7R3k;¬¨-ÓþD ;\0÷ÔCµîüeú/!/ù\0¤\bË\"y²$!,ÍemûåKÈw\0â>C¸qòªéâ­Y.îÈw µÀ¿áY¾©rÅOWeæÌÞÖ\v/g²ÍfñÑöipjÜøìé²\\7¯Ép¦ î³Å+4oÕÎ/^0Û<ËÚôv­ö'Ôj6Iç¯ö|ð¦w47ûËY°]Âni1ýç;<¸?[ ÔDº F0hvÝ¥¾Ø¤\vm­LãèGúð·û>äytFÿ#bû¦\tÓÁG½þp¼:±\rai5>f:<Swù%\v4oÕ­VÍC^ZO=å2ÙÉ÷ ìhØù}ûT¥*¦&ô/}..ÓCoÆ±OèM[[ë~4K`[Ò!$éúu#oãI¿H\r¥d1û)Ã²X|?V×Ô«Õ¬jÖ¶\vÛ~¿KÀDZf@Ë>lkm¥Vù6&ËÍõ­^Íq¹t¤t¼ÒÙKKXY¥!}ds²²«Õjÿ>d»Ý(;¢ÇõØ¤ìÂ¹Ò^eev[,Õ+mì,H]b[²¥Îr-3ÎMY©ïH:+ÎÈæ.gÊ¢RÒújó­'\"Cüö\rÌëéóNê#¨çÐÆúñÈn.7¾}ÏÞftðý={Ø¬¶íû¶§Ù¢§[þô}1C­}ùeú´²°°ÚiÔêÅÿõìÏpg±XþëÃ}´ÁçÍ\t:ÅWUiúhHðµ£BØ°¯~¾{7½ùO>¡Z¨µ¬\noä$5Méé sôÿ\x07öS;Iô©qE=æôéª]\\ÇÃ7ÕbuÍ¾S7ÚlüÁý¿£®àm6µºb{Cõ!U´±¾Þ·ÑHE±^¥zwòB}$¸:D°ÁÆÇ³{ß}ï=j«ê*j§+vqS¥ÑøNàýÙéL[öLÔ\tÔEl}ªwGC;ÑX¸Î=TëYÕ´nfàµÛ4¯þluÙ@K?!#Y!] ×¶6f\0IMÈÚ¨T®!EØ²e+[DdWc#©a{»î¦÷>Ø³TìLð.)»OCwLÂM¢CåÐAS¥©ò­!_ÚfÃ¬\"&s¥ªR*|Í¿­¡lÞº6`\fRyª×§í:,RRàùO\vòÇ}¡µi÷æ­[¤Êîû-Uõ\tVT^>»Ýg®Mô¯¸V*UDï}£Ëdó¾Ah\0õ¶NK\\X¸ZûÁÞ½ìÃ]A½JÛÈú_ès^Ü\rV»±»Þ³Ë\vê\"Ö-Ôf:\":ìdÑ¿ìÜ\t#e\vµzº¥  @\f.±zÙòª¾ßmRAÜ£\fÑTï­!øl.«á×¯¼ðJyêËÉ¢(tõÏ¤9k¦Â¤¤AZ¦ÍèE{Þ1'K?ÈoÞ²ÅçdóETúLL£éå³Âs¾eêôm|\t$¦e½á£?¤\r¤ËPP½ì²ªfô]\rØ|ISú$Ë¥6Òç4WÝU«Õ4À¦\v3¤Ó\r3!ÖÊ mØ!û+5»ø \x07zO²øpÎwHÙ\b'F«ÈæSTíbÐëé+:#¬·\vô¹x²Ø{j\0ÕKué8\r6b3X½ô#\x07\nâ>ÝÍª÷Ö©Ö>3ª´bÉ®ÿÞêì¾Öt:ù%KHoX\f$M\bË[Bv$Fô´c\bÕ`úKÿúKØlWãnò¤øL£I¹èµ²*ð}iÁ±ÖçrsÃ[T LåÝ&¤c¡Z|Þ,µÒ¤>WÛ®câN§¥ë¦æærfóÁ\"à¬4!BREíd÷h¨`-i×]\nôÇ ;FýC§]HQËY\0¾Ò>Yÿ]@Ð¹£-Ùö¬\n:T)õ%Éú¡oýG#v\b»#æ>Moª$ãäÕð ë\v/§\\VL0ó(¤ø{¦K~Ô\rõõ~rèMï\n.{k`.U9ÝÂÜ®¨Ûw4P92.&m\"\"ÊbúüûÖ-´ñú:-}û«={¨1}gÓ_¤S\x07|îûÕúÐþ»_íù@¥ü¤¶­µÕb±P«d¾[­®0»YDNúúï/ÞÚa¯ªÒqÑ·ac=U·RSEãÇ§Ui4âªO! AN§Óµµ¶±0:½¨[wín¤F¬ÓøDã\x07Û²ÏÔ',êsúNwo¥í47SKü\x07iê|ºùÆÝ+«ª NxIÆúGºêc:dLbÊæ²HÖ1©@`wA7?³4D}Þì[ê½°LrÁ²$¯(JÅÆ³|G({ K²óÂ=L({`ÈS/ÍòõNáÜÞ£}q+FY1rîË/Þðæxô\x07bîJ¢Z÷\f¹øÎÿ½!xí6MJgÅ\0\0àÜãwê?Ö)WÖ¹gsY?þÏ5¥Kp²\0¸©¡ì\\\n;\v²#ÀÌaXY3&ß\0\0qOE«Kç/ud ßYÂ21ÇÅ;»:\x07§SÈ4Ã2KKó_}s5Q\0â¦÷/ÆÞsÑ?=qG¾#\0³eâDÙÔùË\vã%YûÚw×¼^þ\x07\0ÎÄ»ÅÖy¸#|Îù\0@ÜA\\é:ª¼lÒ.S÷¥¥ùÞ®]¸xzÙ\tÂ2\tà¹müe±Ë\\Q[öêÏV£¸xÃ²$;_¶+üè)ò\0i\bË$È³$#\tË,(ÌýñÛkï\b\0¸'dIwä;\0¤ ,x¦%|G\0\0{:K2sG¾#\0\0âì¸xçSWfIwä;\0 î)Ãàå¾®£°â¾¢¶Lû\rì\0 ætD%ùê«ï\b\0sO=\\¼³ópµÇ,sîÈw\0@ÜS1K{iÅRvb\0\0aAX&©)ûz~É®ßëÓï\b\0saØ-¶ß]÷,º\0\0q\x07\0ÙKº\0\0\0 î\0\0\0 î\0\0\0 î\0\0\0 î\0\0\0 î\0\0\0q\x07\0\0\0q\x07\0\0\0q\x07\0\0\0q\x07\0\0\0q\x07\0\0;\0\0\0;\0\0\0;\0\0\0;\0\0\0;\0\0\0;\0\0@Ü\0\0@Ü\0\0@Ü\0\0Äÿ`\0>;\x07³ëB.\0\0\0\0IEND®B`";
            var binLogo5 = "PNG\r\n\n\0\0\0\rIHDR\0\0ô\0\0\0\b\0\0\0§ÿí8\0\0\0\tpHYs\0\0\v\0\0\v\0\0\0\0tEXtSoftware\0Adobe ImageReadyqÉe<\0\0_IDATxÚì]Pg¾ÆQT\"  0ãG\fc<[ÑëV\tYsJÈª-uÏIÙUëÜ$ìÞ$foÎÆìÕÜ«%9gÕª­ì¢Ú- ÎIÖaÙ0¬FäC@ót¿Ú6óÅ0ÓÃ|ðü2eî~ß~÷éÿû}W8£BÒlB\b¡¸B\b¡¸B\b¡¸B\b¡¸B\b¡¸B\bÅB\bÅB\bÅB\bÅB\bÅB(îB(îB(îB(îB(îB(îBq'Bq'Bq'Bq_Þøf=Þé\t¶!$r2ÙId}zbhnÎ»!kÍ6\b!âòÌLÌ8G/;Gf=ÎgÊV¬XÅ!a$ennÖ5vOQvÄÝ9ÚçóºÙ>{êùCÊ>ÖöyÜØJ00,t@¸§'Âo\r¤Íº6!âìÌÍÍNO>ðFæÊ±ÓëÎÉÓ¯\\µMG\bñadÁ7ëqÝó.&ÞâóN»F{Fo\b!wx ÐiõâÍ¾Ozî:5Â6$¨aX&ñ¨ó£<sÄ7ëÎ^WÂ,IB\b{âuÛbTvwzY{âùeÍº\n9jÏ,IBHÃ2<39<7çÓúVÀÇ,IB\bÅ=1¸'¼ñô×Ì$0,³¤ø¤÷K{½ñ0K;Y\"¢Îw%éq9Øò,CY\"bÏwéÉ\x07èT%I\b;ÑÜAkïÞéIXxfIBq'IÐ.ß1ÚjL3KeÃ2q$NùÑÞ@HYèl²×óÒBq'Q2=9ìq&]ãõ8uë73OHzÃ°L<<ò¬s´WCe_¹råªLÍ2Ö}Þi§½YPÜÉ\"fÂ³wkï_\\ZdØW¸Q»îYPÜIÄ@.!q\n²¯É[_X¢×êÓÜã6ÜgðÂBq'¡¼°ï\b¹k)Y9º\"Ã¶ÕYÙZYPÜIH&ßqÜþÐ33½båÊ\reáâµ«ü´\\ù\t^GB(îDm~'dó÷A ì!Û9å¼Âë7k¢ó¹Ç\x07¦'y5\t¡¸\t\b\"dqÉ2Ù}>ßèð ,<ukó\nJôh<®QùCðPÜ1A9á$ìSãcö!ÛÏ\x07e/,Ñçä®ÕêÈOR}'â¾,&QJhªøÛõ ¿WàóK´Ítö1Kû²Â\x07ùKø >odà\\|F²$'¢!$uYáp²\"vµ³P=m§ÚX_¸v}6½ÎÌ4ä^Ë?3;g]ÉÊÌ^zBèÜÓ;7®ÝïïIÞ¾Ç§ñÍãÁÀWWþ×TEÊ´kêáý~,LM9õÒU«´xkbÔ¾båJ·.}]X¢ÏÊÑÙl3n×ï@_Ï[ÿÀ­ûúíÿBWêüõÿó[ó¯;L¥ë\tµý:;&ÆüVnÏßx`û\vÊÞûã_Ü®>ù'^V}wþ19äï°ÿqFN¸æFnÍÙÌþ7Ýúê^à&¡¸ÇJÏM±ðhltÆãÑëKt:&G·?q¹Öo,^]dØæ\\JÄëñtÞè¹o?ZÛ¿J-qïõÅå\tµñõÁ»_Þ»ã·=Á¾-Ï©×øÜÞ>\r2¯X»É Ó¾¾IßÃ{_ëÜäýù¸9+×omf3>bù­eþwzéâ[¿­Aq_m0Ø÷T,¦&{º{KËJóóµySÔí´yõ>r/.=ã¬7:&9T';ræ=B'ýîæ7~+s2Wÿ¤b·N»a8çû¦ïeôµf¸ÇæóÛ^wFgsc½þÊ.Ûve{»ÝÞÕeå©\0ÊÎÖx|GÈ&XmWõzûïÞÒì­NqMgÈ/ æjý!Ã6Ëµ«jeWÌ{ú]S×óÛvsàúT¼&£ÁÜÖý÷Jî¹ûß´í_Á¶CÜ\t¡¸kkÛÕ<î²vÏÎj2èóùÆPsr×hûêtw~w»ã¯'HC÷4»¬PöQ·ÿ\n?|öE¥q-W2ïöÀXÍ{º±¹ûíal;!¡`X&Û>OøS·ounÙºyíZmÞq»\neeÇ¿d­+^ÇòµyòQ¸¤Ø¼ç¡ùÝ¥[ÔQDWY¶r}4Ï]`Þ}·ï/â#·úhÛ\tÅ}ém»Â¬×Ûs§§´¬lÃÆBM\nõÌL?èïÍ/.ÍÊÑ­ßX¬y£1ÇÈÍ¿Ô°\x07÷ôÐ÷PQ´c×¢SYµ5wGÞmæ@q$CÛN\"òlXl»Á[ÿ !ûmrL\n¯[ð} ¯Çò·¿.¨ìyO\v:8ñèóÎÎ\\}ÂT§¨¡Ì»¿õùË=l»ß8?´íâ¾d¶]Ã>ÒÓs×åÒ,qbÔ>:<çî4<5¯ÇsóÛoD&{¤Aä]<Du{=~ëOTVåër²&DÞiÛ\tÅ=ñ¶]¥Räø¸fs_¸÷ïvÃÅÏHRÔL?êøºMÉdT7ïA¢þ¤â¥íùð·hÞUö¹ÉûArÛiÛIÄ0æÚÛz=ö\x07Qì\bÝ×Ó»±¸¸¤¤X«Êxf4\fÄþ`øvÇß#\fÅ5ï)yõÔ'Hä]ÎÖK¶ýjÔ¶Ýn··ÍKûíqÿ]¦×L5µ5º\bnPÄ¾]V«rZ^n,7«ª«\v\v\v,ºÃÒnµZÕ»;Ö×\x07î.ª|ãÚÌW(úÐÃz½Á¯ø(ùì:gÝQI§«êEqËÐ]k,fùáð0~¹·l1h5P&tw~gëéw?EÓfB=DmOäs@ÚÌcqT¾=:Ûe¼r¹Éo%TÖæC(\bùÓÆß\nU·¾Ë{°®¾®¾>è¾6[ksK[[Nëñ9zì¸_é»]©-¾r¹;§ôI¢huR>9Þ¯øCÇß_S£ËÕQ»(î\vØöÁ{±¾ç69>~ûVç³Û·i5PALgäñ|×~}t$Ö)¼SÑ¼N<ús÷­Àõ1zö/n­Ì\t÷\fvÝ¿<¹)oQæ}n¬O\nÈÜÎ¶pö}µ2ú_;ë³O5ìâÛ0@Ñ<}Êï h\b¥¿Q=e®_)kÁ¶¶´P»(îñµíêMWgYÑv3,×®FIóþôúu÷þOV|î\x071ï¶«RæLT¶](#±¦¶v©J\nÅ´´[.7ýQq».^á\võK»Z7ËËûkkL¦J%r¢h7¬ô§'OVï®7èå]&P©ÎàâÅ\vdãÎàWg?\bZyVlV¦××ÔÔbwøtEÙ±+Ã0á.D\"\rÀ`µªÏPÜãhÛç9Ç·{º¤´8!!e|G­Hw·×ó»×OT&ò)eóÛ+©ûkjêêëMÄ|º©Ò¤bø÷+MMGW[æÏÕGn*?B=q@á£sçD½ÃbÜ«í¿¤æåF]®$¸~Ýô÷í¥tè/dÚ/.Àa¥»ªj¥njéÂE%õÇ1sDÕÕ¨OkKó¥©`} ~¶]æYb:oX´UvÅ¼§Çµ¾ùp¨{ôaÿ\bGÊ¶£ÇC^bÚk·µ!èÊ-Í-Êo&|·ZÙzs½AÝÀ&ûmðVC\búÄ¥Ã?½Kh·ª?JW¢\0c®~|ªVöù[-ú*Å}l»Êðj%¹`(¦ãë¶ûý}ñ9qûý{éqÅwãÄV hÎ{t¶=ÌÃRÈ.¤SùQWÒzóÓÌ Ê®¶çÍÃa±´G~0þ*£cº\rTûX0ekhV+¸ni_J`X¶}aD¤#YßÄêXò#¤ËòUá¦7Rëâæd®ÞYTz}ð®zå¨Ûùçî[Uæ±-4¶ÌªG\t2ÚÌâmûÀ}Ðtïeµ ÍÖ¯ªËôúðÉè<\x07\r7-ò\vÿ6ÚíjA·w<j«;ÚÊÅ=l»á¡¡©©©øeIÆïÑ_ìp?Ì{á¦Í)t}OTV®[ßíxè÷*Ó_zní)Ý²ØT£[&¸ym&CëWRFãËOî½eÔ~A±V\x07ÁÕ;ªy¥à¿0Ù;Ñà·.§:ã¶ât¶}~Ìd¼ËÚ½e«AÛ,I­òÓÒ¼+o¢þhÇ®FKß·ÿsóúéÝ?HlpfúîçèãöJª\"Í¡|t¨ØNo¡ÂmfÈ}QU:\0¦±SÜÖ¶+ÌL»»:»\f[6k5Óäø£ß^w;'ìRÈ¼«ßDÝYTúlþ¿·UñãõÁ»z[5ôè$c4Fÿ4Òbi¿tá:ÆE¯7Àìë\rú\\]îG½AÓl\bÅ=Yl»þ»÷¦&±gIØnw$àÁ`J÷À7Qÿ­b÷\x07_}á·ÙçE¥K96dQg¦+(øÅâ÷z:M^ã[?âÔ¶]Ã>\"\rT°ÕMÍ=îÎïâæ=p ö|]î}á/=ó^u{=é¾µØQÝS\bµ2*kµÊ«ó##×Vì¥¼^·~òÔér£ùªXËéÊ ÁTÈDÚvÕ¯ìTõNYnÓòµ9QÊ®÷T¼âû¶<ãÿhîË{wö?`Ìe%££«7\b~­U(\nÛ®<ðoj[mu\r9ù5Å=el»È^²Ø\fó×ÿ\r?=Þ÷»èºÌÕAMz¨±\nR9Å(Íz½¡ àqÎÏÍÖVß[e%u]ýH6L¢},¨_MZT~ýraÄÛv5gIÞíîê³~$\r9ï!¬QÆ\"I{_pà0ANe®²ln]ÎPêYªªæIpUõ+ÊÐ1Þjh\bzÖfåy)úåÙ¦ZÜCU ÆX9:Å³£¡¢ù(Ay:÷ä²íjDd\n¼OÇ×æäQöÔ5ïòÕÀ_Þ»3ºPô9C8l¦Ï±àgvléÂÄ;ÔzÖØ¨¶í\x07çÛ[S[£wh(6\f¾·Íêa[?¡,«3XÔ¯*@}öl,ç%¿ß¤Sn/Ô#á<uV«2ú\r¡sO.Û®03íîéî--+\rÌ\\ú|Çô6ï¡¬~ÞiIìbÑáûèÃsååO'Öc:ªCÕöKWF9}ZÑß¶6³ÕÚYS[+TÛ)g¯«ûý55êÀºúÝ(t\0N§K®á`¨a]}½Ò»ÖÕ¿.N5lmna8âÔ¶]aÖëYzCéÓ ÍíÎ­ÄuPÍ{j½°*Ø·å¹ëwýÞY½ùpèÆÁE¥)t\"pß.1·Fp\v\\U½_5Ú}ÿìÔ)Ù³KÎrjxEÁoü\b=º¥Ä+í.ÆT÷Õ¶õÛÉ@PÃÀ±ÝÅLA'\faX¶=¹pØGº¬Ý33wÞ°Üîø&9]1ï©ø;æÉª+7Å.^yçÌ{¡EðA¾+C{ Ìî¢ó\bu§OÚ{=vü­Øß?BÑ\x07ëêC½Ô\n 8=ÑMEV8£ËùüÿÖúûÙ¤ÿ^ézôpj|,\\pýyE­Cà¤Kóå½;.'Ô³c.Wû@tõÉÚZÉ4sc½þst,8°èS­VÂh4±ÀÚÌfå­}Xf\b7þpTìni·¨c÷bú¤u» \\åùªß^J=ÕÓ¥*s¨ªë1ÈzÜ`q@eßËMïBÍ\bHq_LMÝnÿjÚíLòzõ&cöL<\baX&X³n½©úµ¼üüU)²±&ÊN\bÅ=ÈÌ\\½s÷~Ã³lè(,6ì{ý§\tÆBæ)@`Ø^ßuóÚlJ=CK8å¦½FÓ÷ÙÐ¹'/EeU\x07 ñl|AVöKûLe'âdëÖTìÞ_TºM¼ü¢Ô¿¹ÉPÎ¦ $IíÀ¿E2W?Wñ2ü{o'Ç'\n~ûÎ÷¼º:+MA\bÅ=Å(Ùl9½q½!x?ïHHJÀ°LH`Þ_ÚWÏ,É§F +ùPÜÓBÎä,ÉÍ,Kù5?>Í|GB(îéÃ¶ß{Þ´wÕòZ3x\v¼°»êµ7d·ÛíÊ«í1$èÐ¸Ks\n~kb?#mé²Z»¬Öd¸R÷eAAQ,ü2Ìù/î©M­jC:yæÝ_4¼ýYcc ÚeÁ-v{àx;'&¨'Ä\b¶i3_ëé+Ujmi±'øë³ï»\\Nõ.g$PöÍzþ#ù|ÍJ¦Õúd\bX\bz¥(î$8Pöå%_T}àËwï ;~âWgÏê\rz¡&øëiz° 4N¬ÁBKKs¥?ÚU-±cIêê²º.èÔP=H°ÊqÄ¡éÇªêWÊFQ´¨ØEl¯£)'¢>fP+V¶47£VÒfò b¹¹ÒìÕ:].Îç«ÞQ¸ú\b»LÐG1&;Ýh4¶¡ØEiF¿3z¼Y¿Ml\0eçÜÈU·ª8¦b·rÕÕó»\nêIÄâ_õ9ÌYLc-§,ÉÔÍwÎ*c±Ë²èõ,à«C\\ºpñ\f¹;.¼Y6ïPY=Gêê_¿\"ÈN]n.¾}çÌ{aÌ&tð3gÄ¨¶}ÛãÈbÒËMüÕÙ¡®yõU|­,,,D=²Z½üò?ñ§+:Îápüçûg±Á§¿uÊe2Uö£Kj¥ÃAÄ¯~vêþëãQ\nj+H=,©òH¿B\x07ÑÏáÿ}xõèã\bÊzÂéc\rJWæñZ¬ª¾Ò$é;Ñét}tî7h\nÓi4î8zü8ÚÕÕ×KX­8hUÔÛó'êà~rþ<\":?ô7.^#÷¾ýó£J¢\\U ;qscª¬.ìýÅåS*-\x07l64HÌOr?..4'î sÍFSÕôÁ¿¸§Ö´·.EìB Õk bè>­--Â\0BM`íËôzÙJWC>\"¦¡<}jØÖf~«áçïy*v%t\fÊ.i¨ì!Ü\x07}$ÆTifÏÍ/¶9x°N$dÎ 7àà{¿¿59tä\b6\f¨<Êt³Í\fÁ:dÏY?QíÖæ¡ÝV+»Ô1ôý²Õ\nã#Ùí~zFlÜ:à_e®Te©woÞÊ@kÔÔÖ@\v\v7 ¶ï¾÷X´)ÐªØÆ¯ýå6w)»@ÙÑmÒ­X·h\"Ñ,¨3Î\b@\\,ü+®ÜS6¡æh4KAA\\åéU¥ßn RQÜ£\fÑ¼´¯>-Cð\"ßqÛ\v»S÷t¹:¿(\nîþ´\tg-T*\t\r\n:Õ26Ã\x07{AïÅa\"òìÅ\vRD¥ß&4ÉNÊsÎIÓÔµ[jjý]\b-³´[>xÿ}l åÛ-*)Ý\r8¥i>9ÿq®.uÄzô\"ðª~gF#:hz¹<B:n,ÐÍ+ÛSTjqóRº\x07,c¥¨I AÇ|GW9=­ÍG8v±´·ã+\\ÑÚOÚ\\¹Xb@¹è$Ð\\Ðqt6J5D¹øçA¢¸Ç¢O³,ÉôÈw&Z3Eä\v\"!e! ¡fð{\x07Qü&v\f£Bñ¯$Xòf'Oâ\vrá³+XGòÄ±¾®ËÍ]°ßÂqdvsA)}Ú¨¶ÒPLÉÕ¶¸£òøQ=ojn®Înq¹\"Æ@ØpÜ ây\0º\nQ6óÕPA¿+òxÔ\vÐ>¸âF\n548¾ªy2ÿ¸ÀµÃb{Q.\"\nE[BÖÉmØheØ1÷Ù¶ã{kÖå÷v~/²Â­§\\VL(ó(§HÓ=ãz°¾þÏÿ¢ámÙe\t.ÐýËMÂí*JqôØqGVÆ\rÐ&(L¨é\x07ñïGcãýµ5øögÎ\bQú.,g \t SJîû*J\tj²OÿÍ/Ï¼+ÇR^Ô¶47;ÔÊÏw;¬ÖNQ¢,ó¾EÀùþ¢¡á¹¶*Tçï`]=ÛUiBÿñÉùó¦ÊJeÖ§0 3Í-Í-\"õä©Ó¨$dýú±e¿­_¹XhsüË³@pèÔlÿYc#jØI£ñqó§Oí2¨NË}&&M»sóþ_q)3+»bO-_=â)è¡'qvâ\x07º¨O¥©®!ôl\re\v%Y°±,+/ò©ìq·°óò3L*{pàÁÑJË|¾S:÷dgè5NYqrîÅòÔÍ!»#ghHÉfcîºõ·Ûÿ!ø÷Ô¦tV\f!$\f\fËhÌ3ùEÉ%]uàß©ì¤1\fËÄÞÎoîuiu4\rÃ2yùE´axYiïH\b¡¸'¢Ò­k¤üWÓngâ¯4ó\tYN0,w¼^Ï×\x07b9Ha¼ü\"ÓÞ:NµAÈòTão3W?_¹×ðlE¢*Pl(¯zí\r*;!ËKyØKa{E^ÁÆ¥Ï,7í5¾Ïö'ÎÄgò*«,Y¤Èw¤²Bq'q'[·ÆTu`\t¦sÊË/úAý6³Í\tY0,\0«xâ¿,Iýö¦½ulgB(îd©S$ó\t!eÄÝTýcIêÖäq|GB\bÅ=\tî´Ë,6ï{ý§Ìw$<6AÂ=Kù:÷d$ê,Iæ;B(îIM¶nMÅîýÊd¾#!$¤óc$ÑÅÈ\\-²$ïÜ¼¶àÆúí;_Üó*Gî%PÜSH²$M{2+e%¿1ð+Ý¼}õoRÙ\t!÷Ô¼¥Ê\\½s÷~¿,ÉÂbó\t!i\b 1l¯ïCðÌw$D'ëH¦]S\x07zôÏ1C\b¡¸BÈ21wB\b¡¸B\b¡¸B\b¡¸B\b¡¸B\b¡¸B\bÅB\bÅB\bÅB\bÅB\bÅB(îlB\b¡¸B\b¡¸B\b¡¸B\b¡¸B\b¡¸B\bÅB\bÅB\bÅBH<ù\0ýùw¹=\0\0\0\0IEND®B`";
            var binFolder = "PNG\r\n\n\0\0\0\rIHDR\0\0\0 \0\0\0 \b\0\0\0szzô\0\0\0\tpHYs\0\0\v\0\0\v\0\0\0\0tEXtSoftware\0Adobe ImageReadyqÉe<\0\0IDATxÚì±n@\f@/Q7´3C24s/\bcºehv@ýöRòdNLéJÿ ©T:°\tfê«\"(>.\b©%\vÁøÙ¾³M'MSÖ¦tYËrhàú¢®ë×p rÐ>.} ¡a2\0ªSQ{ÿ\\w$R\0ãÂSôN2²\x07)ðj qèuÌ\0ÂÀ°\x07Æ0b'»\tYãa|ßgqSzBN\0x?ËçñÞ¶mö0Ö$a÷ãñÙRQT\x07³7·Ãá¯EMÓØl>°d\"dÎ8sKÆ9²öº^3Çqòof·`óõU«[>j(ÎAÛ½ u]%\0¥t*HDÀ¾ã2ç\0Ü\x00625üGÞ¶[ikP®©N5#Q\rÎäý\nÂoI ÈÙHÑø»aTg&(nH1ªYUQ)\0þÐ}©aü]TÕ¿æ\0òLé0±K\b!_TMAÒ\0¹YÁÄ²jf*è Åc%ËÑ¿ø`\0x#,àË\n\0\0\0\0IEND®B`";
            var bin2018info = "PNG\r\n\n\0\0\0\rIHDR\0\0õ\0\0\b\0\0\0|-*]\0\0\0\tpHYs\0\0\v\0\0\v\0\0\0\0tEXtSoftware\0Adobe ImageReadyqÉe<\0\0ïÀIDATxÚì}\x07|Õöÿw¶dÓ{Nè½\n<@ÅBg{v}\nv}¾Ç³÷Þ\v(M¥*J/¡$ô@é¤÷MÙ¾;ÿ;3ÛûnâïËgÈîìÌ;÷{¾ç{î9ÔáS¥{@\nM\"ÿ¸BþÒp-Üî¡­73uoìÎÏÛ=´ù!<x)4¹ÌñÇk)o?º´ÖGe¶k[Dyn0ûÎ4íWhçjìï£(§>wéÇÂq\t ÐK_ºÔÈ\v¾úBW\vä}o=5ÆónÞ¦Ñ-¢º©¢îè93MÑ]êI»û}L!Úù³NehÛÒE´µúg«æê¢yN×¯ü@ÞöoÀé®§¹­Ey¯¢y¢¹è2¡X>F\x07Ý~ô$íÚÚtó!¦:¼ëm û23^÷âñ&¹¼(!BNdÓ=¢Ìà\v|ýùgÅUW]å2á Ð£nj!x//A;ýîõrwTJyî*§¼þ³K\nnDÚ,y\x07uÊ-w¨3cBû\tþ3Q\n].AVAñ½\vbèföá­þqv¡LªëaÇç¯3PÒpÏOLî/°¯GñlõÿÏ}½m§8E~³ýb8åµ\":hê£»<N éN!öPÜü¤MðÂ÷.\"¨S¹zw1@wÍÛÇóAù~¡3ù§ñûöm<i²ûgq=êäÆTpÓm¥,J}QxÈ¥W¨¿`Í=å¯DFÔÅ¤ªÊþôBu#á9´æñÜí,MûÙ\bFÿ½ø2ÂÂÃ}¯£ÁÞ³nÔ«PZ\\\vÕ5¿jÛ*ñÞ«ÏáÁÇß@QKGg¡Ñ Fei)ÊJËÈQBRT5¶±¿U;oºµ4èÈ³ßåY<ôØëhVëìª'åÆ*lÐ*q`Û&¬þáGì9xÔI!¢QWQúQRQ¤¢N³`Þx¡}w¦ÊËKP[ßÎú\\<ÿðc¬¶tbãØ¶7´ý=|\b<!B©Èá øNôÂ£pýµCÙÏ#3qËåºu8¸?mÚóµ~\rååèjé¨ËÃãÇcÇ±\nóÏ?øÄÆj«ª}X`h·?r {­ù÷g8\t\b_Ð©(ghÔr UÉñº²<|üîÇ(WªÐÑR¼×Þ\\¥FD.Ú»åÎ·4Ô ªAå¢ÓNvc?Âw¼½®[$Çã>Æ;ú´n§ý_Zº®½55\r|ËÐêZÙú&_âíÜq[ÚeêòÔWWCe4rHBëPQ\\6ÖÚÿµ5ÕèÐµã»gãÛüªS×^å=óuÊ®Ó\vå?¸×Õ9ö«N£DmCÛk&Oà0iú|I­~ü?!C!++\v\bcÌÉÉÁßfLÇ¿}ÔÇD =°AÚjv¯ÏßÛ|ÉC±ê·!â\vÈ$7bÍÇúzèVímXýé;8PÔg_(Ð0=#ÏÁTû-nYúµÃÂObÛ³Wà«Ï>Äo\x07Î ÃdÔcÍÇã:¨(h÷d6Bïùÿ¢Ï{qù¿îyí'°%ç¸ÕÂ0õ.|õüHù<tÖäaé¡¼#`8ÿùôsË\fÔL|vÛØ¢¢­#4xÂt,¿sJT\\ý-E»QJÅøÏ}ú¬Ñ©xúöaçY¾\v;ø×¢qøá' ß $\froöÙøeóÉ c0¶~ð^þá(ÛL?\nO}ô1¦HðjHñµâÁÐ/ÕÓ®½eÍÚ[58·w%Jé¡5y {¾XeøÃ@ýçÿÛßBQðoà&·U8öçÃ?âö§>u¸fÑucÉ­ñØ¢{¡LY·.ÁÚ÷ÞÇW[÷ |ø\\ÜÎ³¬mÓ~Ì=~\\ý3æ^¿ 8EËî¾ñìè\roß\f¡E;Vg}#ÄÅÕ¬ðCú;¢n=ßvàê¹³I}\rútFRßÅ´¶ÊýxêÃøâÍÿYÏïúïlÃFxTunx°ãS< 0¾ù,ßºW®¥ÿ¸åfÜtÏ+¸iÑö÷w-Ãwß@SIT!u~9¨/`gÞ^\\®zô¢\tÎEohÃçÏ¼'?yÅ&hç­Æë[kñöòg\\çÉÈ:ÏNý^l~ïí7°iãösùùB«òç ©±QÑ1Ì¢½TàfñÆúq÷Î\\ÌZ*\vðÓ±,ü}¿âP9sïDª±_ìÞC´,~^×ÿ¸ñZè;°öoQÝ¬ëþq+£ÅXûñ2\rGöC1s¯¹ÜüHN¾Éè?\f7t¦½Æ\rÆñÍ_ã\\qDi\tSM¼äÙ±i½pý;-Ôb÷ê/q´¨H\"LºvFL!à¯AÁÁmøe÷I!Mu\r\bÇÖU+pðà#\tXÔ°6lýq3êÔ&\bEQób$ÆYûfÿOà×Cç0uÆL<{×cÍoã¯Â1o,ðäÝ¯@{ï\\hQ\vVmþ?wÜwV}¬ØÐlL;Å¡<ÜýÀ39;ÉB\"TáÞÅrÎtc>Ù­¿\0_yK!).<hòn¯¬ÇÜ³ùùvªuì3öM@¯p17¢Óe;~>©\0é}âqó¬tÐµ­hnQáHIc@Ï4ÔøúáÛðs/½³ã¦aëÊñÆ@úù;NÆp;¶ï=Ä¬1<k\"ÄZlûf=ÂS#qèàYddOÄ°>\"Bw[1t®º[z:}ì\bÂÄlÚ¬1Ó1yü@É{iµX¿z-ê[áSfbü¨>`µçaÃ¦ß!ì«æ]ÐÔxäÎ{Õ¯Þýzi!ä;0fÀ\bÜ{c\b\x07-µØôý*T·ªÑätÌþÛ(kp¼¡ÛwÃÈËçbÌà\fër~>0$´Ï!ÔJìÿeN)EtÆ \\{ýU8±c;¢Cï¸ÐöÿþKô¶RU~ýe;Ôt(f]¿\b)Ñ!h«9Ã%´FÆyé'\v¤¬r:ÏGBô\f¼öÅCP\bøDX6@@k°ê«h\"À9}ÒT¶àtY5Ni&A. q6çü¾ë8zSC!äC§¬&\0¾\rm\fzFa{iÿö î¤0sñU:,eÖGÜ:Úu°^Súºf®Æ÷¦`É¸L3}¥iÀÎÝ§ß{8æÎ!W,Ä­©jdÈ»{/áBäî8Óç!;øé»u B²pí\r³!ñÑXrÐÌvyQ¸fÑ\\h/àûµ°çàiPÂ\bL¾â:ü#U^r)T­5ØôÃ÷hÑI1åùè\r]G¡Å½Ò!ÿL%Ò\x07Ç¬+ÆAÂw\\ýb\"úÎBz#NÖ+¶_¼Ã<ìËâp\x07ï\fú%Áh$BôêPTÞ¬1ý²Á8öãwH4©ñ\nØù\f¿íFïqã\"²r(¸èôSF\\Öo;9ýãpáÔö\\Qq.ù:NA~á±\b]öÁD\0*ÄÁcU¨-8ôÝ<\f½ºÛ~üÅÕJdõNµñ£çïÁöÓHHÙs&¡¥`\x07+pÍµ£ ®+D^A'¦NAßfä8qMöÄx½ÂÑ\"µëËÏ`ÍM0ÐB\\võuHuô ¢½º´ò\\L&'óóáÉ{jô¨1Ðc]*óÅOh''­RDÍzã³ã6¾*¶\x07víA~«¥X³vêÊóPP^#­ÄÎ}\x07 ÕVâÅ¹sñÉwk±u÷lØ²/½ñb4Ø½õ'ü÷ñ'ñÑºÍØsø°ËóczaÖ5s0ûkÐ7]½+¿@yºò}Ø²c¾#\f=¿<»¼?ü°\x07Û>xÏ¾½?mÞÍ¿ÿ¥w^suøõÕàîe/áçß~ÇÍñÂËoBÙR¯C5Ñ´NìØ;±xñ]ødí&Áº¿ÁÇ~nºíøåû½H2ÏÿûaL6w=ú4üçÝÈÚ\vçvoD1a M\b¦ÍYg|\f7Þ:2!ß[±ÝÁô½<,\f!\nrC.®µ?ý²Õ¡ºÎº<<óàKD²²b'þýâË]Y\r:Ô*îèèÐ` ñÐ³sðñcã0{F/¬ze&¢Ä|_¦êÙD¸ïX)Ó.ë~¦^ÕóÊ0æîaÂ^ ø\\¾ä^¬^óF%G wõë¸ãÑÿ@%áÃWÇw£VÙ¯?ùo~µ\"ª\n¯½ô\bn¿ç¿%Eaåk¯ãT3gbüþÃqÓíÿÖÔçÝo¶£\n7ÍGA·ÅßÕ²÷,¸å>4ó8ðíkxý¡m)Å\x07~âÚ´4¶ U­BS=ÿãÖ-ì3ÞøïÓø`[9b2S°âµGñÉ®4ÁSÞû]MÀ÷Þ}#z\fDwp8hW±ûÛ×_Â3¯~\x07&÷þº÷~´9;°ìËÝÜÁSXþþ7¨(ÌÁü%ÿÄçGkQ{æn¼özì-kF3a®Ëý·E«Þncmu¼ T¡\"2<Z\x07Ug#k§|îhÖ ÌÆ6ä­{w/ýÚyF¼òï\x07qçíï ½íî=Û@_O?x¡õ¨o#ýÝÐ&\njÁ\tÐÍlç¸9ìJéÎ¦Áµã´ØúÎhLºú£×ðèck KKÂ¦¯_ÅûÛ±ËÁ÷o¯ôÉ_¾ÇC÷=ÆÆ<yï\"Ì¹jÎÚúìÿaÝ{Q±ïc,¼én(M(ÉùoyßNòþFMªvÔÀ*R_+é·^x_ýV\nUý\t\"^wð£O¾x\r?ü²\x07BM)Þ~ùQ¬ýñ£äB¹¡\t7\x07/Alr4Þü[l.ÎCN\rf\"Úð|øÅhV©ðÍ²9ø(bA#ÞxþA|óõNÚö5vý~ÌýR|ôÈ\vXûó:¶?®oôÎÄ<H£\bhÝô\v.hÕ8tè\f&Ü·\fFni²êÄvb£Y!ñÜ>òìmGÐXæ[\"H]å¯½\r½ÉOÞ|\to|¸ZyÖ®ýÎìÀgÂ7]û-/ÄÇ¯?7ßXÖò\\|ðÆÿPß©Ãþ¯ãûÍÂ«,Úõ»÷Í´ã\f4tVÁâ'F±^ð§ÿvhênbýsÚRuª<Kià­ç9nýh¯;Â³¹`0ÛsÐ²k=ÖÛ|êÙ(M·^|½væÄ<¢7á¥ÿâmoa§FfldgõBCY.ÎVb`=QÓ&ÞÝ0¹KònÅ½gö¥°àÉ7qÿÊ¨»óT\r¾ï>0}>¸e.JS¦Ið4Æ,Daòå h®Æ¶ýq\0ùþ\r¥ xr¼öÉJô\t©Ã_m!b\b¾Ý½\tÎì¥âæþ&l\\û)ü(ôê=hâW`øÉV3»QÝsí&Ä­íÈ£1÷ïgkËnp£Ó3¬n)D»îÌ{¾:\r¾ÂªO^ÄÎõ?hä,,º<Ö³æüðâGC¿è8ðçÜò÷W ¸­½ò \b7<%/=ÄI²\"!ðúê|ÌOáýrñÝ¡\nÄ*°jéhNØ!LÖ$¦³!§ÆÅà©×wñ¢=G=\tºÖ4SDã\vµ»\x07y¸ý¼ýx5ninÔw/Gn¸y'8ÆpÇ}Ï`æt¤ó£Hx-n¿y!:z¶'@&Ãg¾Aï\b\t¦¤\tðÈ[\"'{:#áý×_E´L¿Mx_îÞì\tb¢\rK&âÞ·>BXDÆ+ÙçÄõÅ³\0gk&f¡³cje:ZBðëÚ7fÅÃ\0ÿyó;Lx$\v1áµÏ\"V ASÎ¨«núÆÛÖ(7kÕ97ß>Ój¡io83;·Á§Çbõ£_cß\rc Ù¾É#ÿ=§LÁ£ó&Í­\r§¿÷¿ÏÁK$óçÿ²ZvP.B<)¯Ë2\bÊ%ã?÷æ¥¸õ°{ãN\\~Í\\¤¤Gb@¯-^v#þ1!¯<¹ÃçÝý¢!kÅÇ?¬Áî-|´FÇ§¯¾LÆD9{~@³(\f£.¿Q¸cIÐi£¦\t~²\tÙ×=Ñ©ø|éû8^pÆH@,_üöâÅÄÔà»ÓpÕHò^\"±Ù2\"ÆS_¬Çeéb´\\9\x07eSÇóOÎÁÎ°3(moCtÿ9xýålt¨ÛÐ@è+çlbúLÀm÷¢á¥µ¸õDXü\nX\f]{1ÚåX·æ\rHyÄþëzüüöw¸úÍ9ä2,û÷ËÈ\vEoÅ\"TÔ×\r>³¦Å¦ÿ|¼+G dÛnô»âN¤EIQUÄÙþ5\rçðÍ!\ræß>1rÜ&1 ·ä¸ùF|µ;µ\x07¡(e0ê:¡ÑVÁ$\rATT[\x07Ió\tvç7¢¾Eëï-y{q¡Cýßÿ~3l¦k³Ò~5¾ç6N0}p)Ú0ÔBæÎ\x07?}¾Q2ÔNÎÀßÿùo¨\n±â^\\[&öÂ?o^\\»oAß·· ÿLÖÿÚ\bcD4è48¾é;¤'Þ´¾®ú<|â1ó¥ÐÞPAB6êOmD³¢/éMÎ÷FZÑ*ìÌ¯á\vhÜÃ\\ÂÂÃÐXç\bJËJ¼¯7ºá(Î§þø)êu&¬zævë¹­Å÷©vÜÏm^«â¿UU&fÒ£U×EæLùú©×þ\rI\n·+x§\\çº×QÖà3[ñ(³s<ÚfÒ¨;aÔ«¡§õFÄcáÈ]D)ââÂ PÄáÁ'²9)Ë(`ï§\bHb²°rå{øæËo±qóO`ÜxFãÕÿ>Ç4#ø8Zgs0Ñµ\\À¯|áÓOÐiJéÙS ¯âÖ¤OìØ~ËÃ­÷ÿ\vYaKj=ü8®e¥Î¦<'23¡ò\\jç\nØv>-èµ0fXKêðø[6ËILZ4ë0s¤  ÛÑ¦7¹0V^|Ä±H\"Ó±óÕ¸u|ºMhnn!`LF!öaÇ]~<tF¨É\0FFs&p9\x07dà>\vBÌ/Cd(\x07XiY¤¶¡®ªtJ¸óq©Ðó0ðÊg°ºÏT¼óÆ{¸ûëÏ1}æMXvÿ(;SÎ¥k%\fr\t\vè¬P¶¦#P2 â@N´5'B¤ruÀt;¯>~wÂ°IÓE´Â7ø2V¿××ÀØ¦\v¸í¡ÿ¢è Òµºz2vSn¼Ò¤pòø\b!¤þ.?Ñ£ñWÏ·öOgS-të0Äùiñ4\fæ{\f U8M/kæ/ S\tiH±gM¾Þ¬\r)É½]ÛîQ{zruÈýð)|a&ôC[wP¿|$2vìh(zÐ8½ÍG4yäº¸\nd\"Ã<OnzO~ä>#Ý?ð®ý4cpj·QÛÎÒ\n÷<ûFAy¤*2&FZ\tG³û]N¿{ÂÈHk{ïmÎCFY+î|b6á?ç¨ØPSzÂO\t=zF\râ§·ðÛª#HûâÎücy»`\b\rºï¥¸\"Mu?nÆX½\0\"B±\bØ«7üÃ§Û±ô\tWG[±Ð¦<ñ\bMÓ&-(2.ñáP\"\rQØèey«D¦!F@CóR÷û6(`=³W'¶åÅ±\r¸æ³áÞ í~9Ò¿hóU¨;±\n/­)\"¼H\rZÛ³ùÐéi$õDÇë\nÑÆÇÄxôj8õëÖÆÜí>k¤¶kÝqDxóÍ·âºkf³ç¶¡J©uôffª'3p=`2{ö9Ü»xÑÓlÀ¨óìh¤×¡ëTAÙÚ\nÖèÓÅ!$<\n¡â¾¸åþ°ôÑ»ODGËÀÈ|º\tEÅuh8»WOcõí6+DG'Ô-UÈ=×ìÙ·aó5b4Á±=Ç!{t*ªÏåàí§8KÂUØºwêËêÑgü4ö\\îÙ\\\"UXç6nÄþ½¿³f>\x07DÚs¯;ï!7Lë®4ÈGæ,d÷{\fKÉ±äúkÑ+<8-!\\#^«gvÆöã5bWre8:HæËG`X\"ç?ý5Ã©=±×\\}5~:]Kx§\n9ùÐªi>Ýuz0B½e=Õb{t'ëõDKÖX¶¢ø8¹,}2ÐYyízþË!aLÃÕehgà®Ào=Æ*Çºt<VØph»\"âÖNë÷æJD&B¨°{ÖÕ.©Ú´¼·â­cæÐ,3­`æ£ _·M­L\tEXásðÐÃÿÂÒebñ5×bÖÁAè*4+HÚ\vÁnî3û&<òÈ2<üÀ?1÷Ú«Þ;-ùDøçÆ¿pç·Ø¶ç¤YQè|þþ\bë·«Úu~Áûÿ¾Mçlkò4/à`ç'm@ÎÏ=~öþyÇ|ÂkçÃø)\" 2Ó\nCGe§Î#2yb¾ÜØ¿\"Eãë øë7PÑJaP{-{ÎâbÙ²ÇððýwaêøÑÐTÎê0}H:$Ò6¼öÚÇHMÈzÑWWOAÇîoÑ(å,oC3Øòá§hâ÷AjBOEC AGæÓNoÔív½Óg8CÛR\"-×¾ãçà·-k!1ÃÓÂðÑ¿ÿc¼hd$OH&ÇwÔim1Éxøá¥xlÙ2ÜzóbdÆØ{¿\x07^Fýûöz$°ÐÐë´ðÊóÛVbé¨+FNÁM·ÝJ´á648]e-8và¬¬Þ¯oü¾w\rzâ9|þúRÜ9ó,Vo[£y?¡¡ªc¯XÓGéïàøã¬ìÿ}5f)½üÝ5µÐÎ[¬Ì/fN3ùàöÙ× LÁGhB<ü¯'ðèÓKðåºøï²Û@©T0ö*\f!7tÁåwAþ÷ûQ~b3*Abz.íåï8tÆ´û^Á¡òÇ±òÙâÛåBð\b\f=\ts®¿ÉÉ¡xãá\vxkå^\\5u´òØ,\\ô${eä´SÐ¬%¸`--Þ\x07-E\tpþ7jÁ¿°öñ7ðÌ3çÀS·AeJÄK¯?NúÓf4ÍX,»e4;IdÖo8WVâî[³×+úGCg0º°§ðÂ}ü¾Þ[áV¥h÷Â\t\bMw½ñ&\f¬À3wÜô^q(«¬Å\rÂ¼!ñ(kWß{ýÖ\x07u'Ï£ÏÄ+0~X*¾§íD7sß¥¡jL-xùÁGÆÇ±2%n¸ý\f;&Æ³w?HhÅsÕ:<ðÀRÔ]·¿ÞÌlè+1xÊUd\"ó 3?¡×Èéøîýà%'cÑD\v0¾\fôÅ·=>ñ!¨«oÄm=\r¡zhFËà¼Âó\0N´_Ì¼MÓ§þ\vBhÄº}³bñî3O£w5Ð¸åaWßþ?Ý(®B Àæãàòqó¿#5Djµóo{PHóyð\vW0YÇ'$Ïn!}¹ìVGeÌïÍ^\t#\tÑ+°ríßþWßÁÙh>}!fx¦LÈÁò{DDÓjüëQ6$hn¬Æ=;z\n©-ùWòÊëqó}w &*ý®<²oAFoµ,ZçÏù÷ó¹5[fÈÄcèoïíLVËnÓçà¿O<¾PN«å\vPVãµå+qÍd>#mÐÌÀÀááXrûýHéÐ@ÁÍ\\\x071¿Ô+´ÖN1³¼+\f©fì\r÷bÀ¯!ðc¡^ø%l\b:½f\n¾zþAücù|ë¸qþUHJGx<.ëªQ}ñÃÝ4qH$Ó¾S®@Òû;ÌmÍ;\rwFâW#Ú²C\n¯8ãxIÛÅ$df<ÆLgoº\x07°¡îPBJFÞãòë?xOmïÊãuûì}Qý¦!3z-^1½ø¡¿³á!>Tjk\b²³\vÈ°ò8bâ¾¾>ù4\"D4ê«qûcOSÔá³´{§8·\"Ì¶zè!>zÄ©«y?a¿üç¦ÓÞ÷HºF(dc°d5Ô0íP«À#\\*ôÒ¦ SÊa¿ygc#\f\"1\"LGk3t&\"#÷§´hëÐ 4\"\fJàêBJKm%TF\n2y\b\"ÂÃ49ªªjYOT*ô\vHÎ]ú6¢MÙJ$E¨LìõÞûÿs0h^! ÐÀ0Â ùÍ;Ïõù^m­MPÍ:TÔQÖíP*!\r!Lïµì·±½¹ô)üó¥ÿÂ¤êÜ\"Ü;ç ÕædÙP¦!qÏñ<nsÓÄÐ8ædRB;2dÚsn±ä¶S\t-\\nýU£.ÃòÐïÁ·ñ÷ëF³fbFÐv¶9P¹Ô/pæ2nÚ@{h§{ø\vgVæÌí-md®),Â'´Zí3]ÀýOc>1J\rLj¥;ÚËC*ò°PÌ,¬ûÚXÈZÇùéù^Z\rµÆ°P/#è§NwÇ\bxàæ\rZtF\bÒR.º¡]iW¶B*÷:g}?êBlj?1Ë/aarÔÕÖ~*èJ\x070/øúk¯cçï¿!.)\t¨­­EIQ1¦LÖ¾¦%:(kjed\b¢á)f½QR.é@*È££Ýjþ!á¾·ëðö!{@Q®ñÉðdÉ],tg¼DU_Ôg2Ï2jõ5xÃÜÌ2ßCÂÂ|åÂèÓÙ5Y¹µÊ{A\"À©,$pÐ·ÂªÓwsß;iËì;_S,3[o¸u\x07ñü+!bÊ\f\\>{(§]Ó\\¯P-öÇ<çHj³[B`è\"ÊàÍ·²ÛßN¹oßÒ°«ß$Í\0ºeÌW\\LÎzÐôE \0^FDÀQ$\r\bÜaÑÅt{¥B,' \f\rSt¡×ºg ävüÐy ºÍôåNd¦)7ê¥W×Û\v¹h°Ìlÿ»sè/Wl\våS\x07pdÐ>ju16Ä¸x¸h%MÝ«Öî£«©w\x07ûÒÔíC\x07@Y¨Þö}JQ¦î(Êñ.*\rÐ^4Öæ\x07\"P°Åj÷·7,Nâ1öÝv_|Å& 8ÖEwW¹±àÙ×g]©¡ó+0+ý×»TÉe(º;Þöÿ^î<ôOK÷iè®6tSd§ÚêªÏA3î6..M÷AEày.¸N§@÷iî)AÒNÕ:\rÑäæ^7iÔÅyÿn­Õÿ÷¡º¢ÖºD´¼8ïsiÑkÏküÙEðîïÙ­OX¶ºp¦3.9\x07MÖi[}ZUSÅS¢åjË5ïÁ£öÊsl§àÁTàVâp3ì²KYÌ´Ù<OÙ½Eé29yÖ¸¹4¥6Ãå±u'¬÷¸¤a¤lÿS´©ÎßT²{ì3* \rtµöipi;#eÓlX-ÍòÝþvj.÷ú4»Ðº]|0Ðc»©\0gà\\,/È¿\bXDuGðe ºÜPöV:(Ú[m~ÓþvmG?Îzµ;sº¿­ê¢â½kdL\x07TkÐÆ-;Àãñ­\",³5¹é#ÊFç!Ø\0\rÇym²*ÜgÐ³±ÎYviÏ\r¡hË½´ûk­¶\n§íï¥Ü§yuYî³6¶ÈHÖ.¢Ì÷8eþ¤8'J+YÚBY¹«y¦]lrö6Ú.Û¥çw·<¶ûL9MOçasJÚã3Æ\f·N:MGFE¹l¡Í¦Çä\f´G&áÎ,GÜ]gòýK\töW>·ZM6Ã)¬ÃÄÄV7 ­M\t­ôÈæP?0Ëc®û.hAT\0ìé9'A¢|?«Pèc\\ÞÝäNÆñGÐ0yY'îZò)Ù]ëêâç.å°QÓDBÖËgÞ\tÀîW0{ÅS=ØzJåBUõç¶Ö´¶4[2¿¡òð[«`\bKBgj\"#íöÆÓÖ \fLbu1dRPz¡\fjYohÑngÉ\fôe¨Ó×ÃH¾*ø2ÄðãÅò\tê=`I¢ºÃøXº ÖhÁhDGG;z÷ÔÓO=¥§Rpö\fêê\"!p[ím\fóÃô\0{O\t°([ÌééÆ,Ù\0¡E¢Wè(@öW´]1\vcÆp! L¶ÔÌßÐÖÝÈT­E\\\t<)6=\n+ä¨M¸qªç[´|æm6ã$¢BÀ@£\x07M½÷)®D?Ù«XÜê®¦Î\nmf0g¾mÝkF³\0u)GOßîÑv÷R~îãöý´oãîî¹EyÓb>uÆ2\x07ÍÝäöÜÕ>öÝ8¶ÝÛ}z£\b»ÈÉ<v©rZÑ¢ºßMýÿ*ÿ1êPQÝ8·vææfDFFví´\rõmî¶v7Z\t­Gu]\v¢ãc]svÜNÅ£\tãe\x07lÚDf¿qy{ù$B±åWP\rAXFÍ0næèêÞ´ññÉ(6\t TþÉ(Ú²¡ëMÜQ -ÄÏ'¯\0$Z!oBL<Ç5§ai§<Í=Ç¥upãËiçFÑ\nè´ÔMäÅ\nä!Â$Ãù;NKÊÐþ±Û àòpøw=°1&Xöðpt7.õtÃEÜ?¶Ä±Öo9RLóLNGwÃ{Ñ¢®Ï3±<¶òDV(f%\"\0ÛæRt>´UxÿÏ]y¡Ëùj&ª¦ûÎÛð³¾üô¬ë°~ß÷åsøjõ:26F?P]Íe9¸~ñböxì¥÷ØsB<þìëhÕ°vÕ\n<ùÚ*ö³¯ºçÜVÞã5£á I, H+rïä{AeE!ZÃÇÚ²\"UGß¸N.Æ§ÇÒ/ëo%á#Õ´ëüN¢¥GÄñÀ·\vüÈHWrF¤ÚÎ´oê¢äÜSþpÓ»É¦¡³0)#»®n\n\vì<­~'D@Ð¨5ìo\"±Ø1&E¹íìªN¡²Õ±#:å[ÜÈ:/YÖ6-çgdeN\veQá6½\"`¥ô·XGÔys3Ý³¿Î&·ãîÐL¶Vhô4\" P<>¡k!\rLÂÅbW«T.õób7ÂYS×9MgÛ\"h\"tÅ£(\x07MÓØc~w³Uß ¹\vm$ ¬:-;A( DÉòª<ìÈ=\v4WÏ\r\téãæÖv¬üvLs¯©#ûw¡°äø¹näv!sMú6t*ÛðÝ×ëðÜÃP°e~ÚU\v¦ãÄo±1·ÓÜ1b±÷÷-(¯iAßc0rx&ò·¬Æi%øþS0ugufr7Ìs\x07®7¥·Îær¬Z½\t)I\tÐ·âlq=fîË¦¼=¸w\x07Û®Ì¾0~ô\b6ño?­GÆÀ!Á/ß¯×lÇë\rX0s4~]ÿ#\bÆÁU3q<ÊdâLê¶*î<Èy¡²ÓºFm>ÚN\bBYÌsÅÈ1w1Oå u[¤Ò|a<ÚÔ-r®65;Nãsw0Ïï9.ÃhwL60-F`4èõìç »ü\f\r8}99Øwà\0öì;H¤U¬Ú»å;ÅÑ¥Ã$õ\fc¦&2ÙÔÝI\0õ<6FB£Gvî@yu½ùMwvìÜN½Þ}ÁÅÐÖTãGÏY}HþPÔ¤-È\r®îñWç%.'÷|\ríö:{?åÒ6¦ÝÞZ¼§<{÷giøø=(8{\x07öïE\r\nFk:uð\0öäìq¾ªîãâq\x07;_\fæÃ¼De/öó©¿Ø½ª\t_æÔ`Ñ}ðÁæì¹Ûö`ôÌyÝKµÖÄ\nâÛ¶Â\v¯G¨ïn=Ë^WQÒé×.Ä%Þý%:u5ÎUb1ÑÇ÷`ýúÝÏª>ùâÒg ¶p*Õè7k.2\f7bÔ(öóô4êÖ#(®Ózn@ñ±=DyÑ\"÷÷FÄäìk}LrÓù¿á/¾ÀÏ~(4W_6\fiéô¤L\\=ÿ*H\fuÖväR§CáöÏÐ`JÃÂ³Q|x'ûüÞ\nÃGDsi±XxÝåà5£CÏYEÓ¨6$è(´»½ØÑ\tMH¼ÙônÓÔµ\t»Î!À. 8:æsÓ´F)kµLË¶|!DâUðlFJÜ¥äfÑd^íYSÿ«iê&{ÕÔ\r¬ÅóÛ ý^v}\tççÂ(cÊ¶ª¢yGò0aüh\"êÑÜÒ\nÁè8HÅBt(¡£0êTÐ\t\v±PÆr$¦pÉ}ZZPZQX¨ÊmÙxÜ<6ô£m!e6¶·6Ù%\"\\Gê\taÐiP__OÞfs{3»(ÖEÖæ&´«ô\b\rDDéi[Í¦¬[¨.­zÊÇ</5ùN&ì{«Ö­ºá1HN\fÁ±ãçÐÐÒf-AC\x07àüèP©Ù½£§M·VÖÒPó¥Õèëdpl/\vàdN0VNX^²[­¶dõhëL)<C´o®AÝ®_qvJ\bh)R#D0\búB£?Gæ\n±\tr¢§gDù[ Ñ\vI½ãNyav6Ê^=ú>Y¨ilÄ¶_'Ê¨©i2X,ÖFu¾úz+Â³'C&Eî#H¹|$Ñò)Î_ÈD1z+{}åéÃhjâ·í;AÃ #çÔ*&\fË´ÖÇÖ©× Wæ\bÌ1±[²¤hv]faìÖ+ÛkÊ¬í\nä£CÓ?ÅG1põÅlæ8K[äqÀÓýõk~Ö$f1J´ÀhvëHêJÍoHè8¼¥ht¨PéÐhn¨¨·2PP:.jÐM\"éú±¨3OæÂ·uû!O ¬áóÙôif©\bã6yµ·hS_R n¿Vhä,/?\n£ù0Ü`ºýâ\v§õRµLÊæ6dè\x07¡9ÿvrZoÄ'¦ß:±+'Bá2!\n\vÏaÜ\t¨++BIc\x07ÂÂ\"`Ô´¡QÙa\":Á­¯³½}.Û]%\r!ò¬ÌQó·KuA[ÂÁ?LÝ¥Mj$§&¢¥¶­\\ÝgòO¢±C¤ØpT^¨&]=a¹ûöCEn@áùB\fÊ^rñ# þ`§ÝqòËÎn×çº¶ób_ü3Ü¨Â«áèq.¯ý©\\ÄSÇO Ð^Vb4·¾o~¾VÝÜg1 {8D|]Ë\\m_FcWyIzB¾PvK>Ê¾ÿË±Òz<÷ÂRDùßGº_|µCcÈ¯n¿h?z´\b\rj4t¨Qs\n}¯f$*\nP9®¥\x07¡ïåc¨Ð\\6}\nê\vspªAÌö=SÎï[æXºäj×àÇ¯×ßÃHæ/gE¦Ð©å,ÊÉÇ@ÑP©Çcïîýà3IÂÏ,ÖfÛÂÍùåLH_û]gd­Y\vYliW!Û®_·îB¨PI×MÄ¾}\x07Ð{ÎpÞ¿áº%×BC\v \"Beý<D¤\fÆÔQxüg1~æDüäYX6\"Í³f ²CÅjæ\r½¢­Í3§±¿ÃiA^ÃD]èßPSK~Òò&¡]ü\n)¤Ãí÷mGùw¹ ?jÛ¼@³ÖzÔyh¨5¡?/ËÚ!g<ç£[zn;lô`²sl²\b~æõuwr4e¾Ödõðègã¤µ\bæ-Ñ§Ï\0L7å`2MPitì\r<H1tØ3vKS`ÉCJï^\n\b7RÑ¯w_kÝF£*&Í¶§wjh#a\0Êf¨L|\f9\x07\rC¿Ô477ºYè¦Ã\rÐÂ¿`ÀÔÑvóåÆÑ×ÒAðË\vCFÁÄñÃØ°·£'bÿN2z§¹´£º¢\nIâ¢#ì&ð´Õ÷vmóÁÆc{x\fw(\"ø0³ÆÌGÛ¹Í5l ^}ú¬ÜWH4`\v²°ô{±1¿K&¥³×GÆÉñÂ¿ÀÚ#X<¥x(R_'þqûxü/Ð·_°óçÓ8o¬9f:È &ã%Ól¸b µ³¯ü|Ò¸lèJñ;îFi/æ:8á2Û~]{|\b¯|¸Ëè(fb\b¸Ï|g£²kWy}5Äß%ó;pçC1}þ°zõZDgÄöoßÆ÷=ø)GB\v¾³qãFvkÂæ&TAØQ\v<mDC×@§i\vá¬1Mf..Ó#DWE$\"\b¤h¦AÃ°C»hÚ5¨B£©5PÉ)¢\b»%åL=æ÷KRSgiÃ¬¡sëÕÿ³­µ­\rã'Mõ¥\\:°g^}{`a²1á¡6¨\"×èµj ×BD&J]u-²GEKÙITë#0h÷\fàææÄØ±#,\0*ìÙsÆElÌú\"FG÷ìA\\ÿ!Hç¶°t(kp(÷,ÆN3G îô¤X:¶î¡Ù8_Q#±4×UâØd÷Åés8q(DëPÖ¡ ´#f_lûû%J*ï\x07³RCwo_0~¥E¥D+ëDcc+\"£\"ÑÔØØ8È¤\n¤e$³u*pº°ÙÃC*ô!qÇ¶ÍH(\":ÕÒ)ÖQÎ¼gýÇK¦L\\Z\x07ò1£ÊQnh²_1±)W»º)©Ïï¾ðæ\\}|\x07æjbt)·Ë&q`¶>vt~!°z_Z´ïðpr´jW5R\vµO`&Û©hã§88û0+ó7ÿDö`ëµ\b\t0º[ªí)\rë»Mð2¬ú¡Én·ÿ8y\vD\bSh¬oDtx\b;/UmØä8ÒPÝ¢ÃÔqCÉdÐ¢¡ºÓ&m£_ùÀÐ³ÙTf÷'LÆº­ã4ø¶¦zó~\rÚ!æE\bå0ètÖuTÆAËÒHÁ¨×²NÌTu{+>D^·Ùu¹¾TivV´õr:gy¹?´ò5¥Ðí°OV:ê!£w&[ûs`Ñ?%ªÎ=ÞA\"ú=¶Äú0G]dÖWy®^k·ÃêáÞeWK*T,^²3ÙcwÏtÐpõtß;¹kÏ5~²ÒxNß¬Xá$ÆÐNíhÝ1&ÚSÆoÙòüíÜSþ\n\boÙknY0)-»\t.ºÿëÅÇÀ¡Ãp2¿hÃDCâ¡U©DJz_ÄGKPS}'Næ¶\t¹¯ÃÍ9Þ!21Îç2{!.ÖfÏÌóÎt\"~K»©½úC&ºd¥bb^óù\"DKpðÈQÊ jï`\r%m¬ÇC¹\fESsúàuÐ/\0ºT<:¨Éç'¾kí&\r®ªæÎm$42Q¡b/Q AXÇóNPj+Ñ\\_Í:uÑèG4yÇÙêÞ`?Ñö%¬#&@\fÍòØXägbí)=ÅÏÙO%§¤Ð\\ò[3\rGdZ­®§ÿ?4Y,?ï¥gå÷kÃL\x004:Õ,#¤6)ë5fl1cú_¶ò¼È(&¨T*ðøH%ÿLgÑ3æ0¡ÛæG´u¡À3 xÆÒ¿\b8p)léÀ5ð ^§ÕñõÉlc¯RuB\"yWà{\0/\vÀF«E»tö|ï)=%À\"âñ¾p\vÏÊí\"C¸L½`Ö±eR)¤äÐ\fäËÅ\"s\bSãÿùfÞõÏ°º¼ývuËäNy¹k8Ú6kÿú¬}g1íÉå!5Y*pèKÞ×PÝd²·¶u³½«ÇÎÓÆüÙ=¸ÓÝfu ]ûÈK rækþ,1û®Ùõ`=¥§tgXoH\bÇ¼:U6/aNçè1ýÐP]à³bµZÜ÷~Üä¤$$&&àð\\Ö2`4ù¿eaärò\fùkd÷\bª Õi»1D,& (f'h°lì)¾D*éÂ_¶î}o4íÕMËa+íÖ²ç¢#Ã¹+§íj¢ºì-*º\b£áiÜþuLjé\\¹Û»®?h§ýòÎQ\bio]qáS=VÑâ\0êÉG\"g6ìAÝÝäü$Z×ß½®ÃçÄõÆ'²ò2¤§¥aÖìY,¨ß|Ë-Ø¸aý\"æøø8466¡­­öèèhh44·´Ý!r52%!!Áí5­­­hljüCù²z÷fß§©©ýÌóEEBdDõ»ýoþÌÌLÇP«^JSs3kµ\tÈZ#\".6ííí\b\"?J7²D÷¥(O²Ïólï|C{\x07ó~vÚªÀÑrÊîÚïhöÞàÖn«\x000w%ox·Üå%ñ\rM\x07D0Á\tQîúÃù¹~ôíâlI0Â(\n*¢$hµÚ$ê)Ý\x07ê5úú¿ÌA!Ræ¼Møvoeà,h*\t@ZJ4*)³Aß×ôcö\t'&¢¡¡j\r*TG´èê$ ïSdö&'[-fÞÔÜÄJÂÓððpò<Ê6·uB$&%B(pÝÞ¢7vVU³íµPBChñ 0nØá,3°wv¿-d¬ËËËýº6T¡\b¸/CC¹ígbÒo>yù°x1e2ÊÇÖigw/r$*hà´X\n.=³.Õ\rãàH.ÎßÜïÓïªÇ_q0Ð·Ñ0×Ã]m\"µö¦Î¦P\r\taÿÚkêJt\f²ù¢iïKh¨ÌêÁÕÕlä¯ý{÷YPF´äêôïÛD+lhhp¯MËåèhïZ­vÕ¢\tÐÆÆÆ°BJ0ÅÚ<¦þ\"tXL[U\tÇì3íèpo!`æÐÂ'v{[ëLÅ%cÞW*n¯w¶:Á\"*++|ºb¡è®ÂX8e¦¨GÌ_ßÌògÚko/\bqÍµèÐQHb?×<àÑn$×nYü[CöK¾\båB(·¿¹ßóN\x07\bÈÜÖ²ÀÓºÞ\t\foaæð\nZÅ¢aøÅ7D t\tÔGÞYYyNåY_Wß¶ÿþ\x07±Qä]¯;ý¼uË67·Ò{þ'Ðýg¶;MGhL/ú]¢uwþuAÝBÔ2¹ÌÅüî­È$BÐGËº»aÐ®±W×ÖA*\"%Ë¹O\b]Å¾çÎß¬ðx¯D,ñh\nÖÍY§ÔÍ±ç )Üdsmf²µµµ³æowK¾Dò0?5_6nqvc¶rµ:\t\0\fs`\v{ÍýÏ(ÿA||¼5ûH$$G+dùÖ/=\x07±,1Ad¥æBGOrçJlýæ¥\r$ÅÅÚgfO1´tÖ»ø|e\nK$0WÍZ§ëDS\n\tq1n ÊO\rº[ÁÓìÕe9ÁÑWàbkò'Í\fm7×u8¡cFB*¹ò¨R(Õ&¤g¦²Ae`EEE¥JLELX(Û­Í°ºÝ.ÄrBeb Î\nùDè\rOÀ\\CÎYø/³\fØÒ·o?<y§N{Vºn\\|£«ÂÆºîã#Q±qhjQÕvñç#yy¸rÎ'y<7g@gJK}{dô]ø×ÖÔ\0b°ªS°·²\\,D/¢±73ûß;cn#\f¾¨¨h¼UfâëËþ]tÃ\r,0Í?Õä7\f<6\rö&l{@5tÁÙÅ¤MØ[w0NyqüYÿw.LÝz½B$yüIYÏô¸^:\"$1Ë¬©w·Î,9pùÃMfADLÆ<Àh§¬U%:<ú;&AËé\"6;¼©ÐPhd\"úg¥r3´\x07Ð#ÚÈ-ÙZ;zYÙ.¶-ûÈøÛ¿\b\t'ÌYÂúdèß?bÀ!&¼íy\riÐØÜD@=Ö­øb»Ã[²`áòm\rè2½8)[Ýñ\n6k\níîqø³»¶ª¬\bêc9GÐ{À\0ÄFGX¯i%Ì½¦¡¡R\x07÷ÆØqÃqì@¢SQ{í\"3.-­ÐÌ£Jè¾ºªÙC\tÝà¸»ÂõÝB¡¬\"Å8÷ê::´tOÍ«&¤¢¦°òË\"°ï§u¨Ñt]¤\n <Ìª6åEk{ZZ*þýüóÈÌÈðËG¨tý]ìß^ó?&ûj\\ \02`:;Z\fØ[~ÿëjêæµcÖ\t\bxìÔD¢±¯¿hìmÞ\t'&×]·Õ~×®]ë@Ä\nEgdó%å2NqÌºA.÷¸6íOa¼ýÝ\t\vî\nnÝ²½½Õª \f#[æõzfk ·Âô¥RÉJHÌ\bÓÎ»%¡E*¹`)\0paÂ¶É;è¾èÁE.ìl­ÇÜD Ð]IÙ¨´Fôî×QÔ¢CßÖ6ý\bÓ\vA8!ûü\vå¥hV*Q\bD©H¶ÓiÄ%¥!5>\nêöfì;t¸h¤ÇD ®²%j¬´$v«NÓüüð$aHO°Æ¶ïhkFÁÙBh\tóÎèÕ\x07ægðÜ)î²nJû´XÆ×%`¬&×{ÕþiWÊYrnÊjØv÷·ªô\n+7~\f«§1<BÆ7dôHÈ\"Î]ÙíBè.TSujkkÐi0!AÄ7âä^6?Âã\bAJT¸£»÷¹Á\b¼}êL.?kgMï½!×açöß¡&mIí{&Q¡¶k>YÚðá¸û¦QZl]»hÓ0mp2Ä<Íe¹Øt \nWÏp)F2'w~ÿ5ô\"9â(Â'ãúQE¨Éß5ÛaøßbBÿ8Ð¤_È¹v\b¸ÝO=ùþ÷ÂìçÒÒî-^gï\vn4÷¿já±±ÉØØØ *aLñW¾Ø»IùÌ3drÔ².¼Þ£Tz¡²Ò;¨k4ì» Yq\"»Øi;£qw¥0IÊ¬¼låköaVW!©çÏ,bóÚ9ãüC9\t;zÎ}Bs¨L_Y³MF=ÚÉ¥aafqÀyX\f¦M¡IEÀý8:´\bi;r\b-ýf?v&£VâÒö>¾¯ÏL|ÀúÙÛx\tÍ11ÝO_âBì?z\rO{hs:Â\ríu8|ä¤õÏæI$EtD\b\nð Öë¬BÉÙÅ½É¹¿|Õ¬=¨Zûsî®íÎâüLÏ\"°@CyÛ-@»Ïðf4¨QV^á#Yã´\vÄF*pðÐq¨Èø0×GD§ðÒã4k¦ýEçY-:_Ä´,¤Ç:&\0ÒªpXÙøøÄ ûág\f2ÏÿCçoþBèC2qýâkDsñÔbàüî\r(n`üxòúíØµy#Ví8>1q\t·cÇï9Laý3.QáàÆõ8QÞ\v®D\tst{-ÖoØ°Ô^ ÃÆbL¿8ìýu\x07:ø<Ögò·\0zO±uKüöÎN6zV°që=ï}Ä&õ÷bv6à£>b·­éôî@\n\n\vÑèIB©L¨¨HÖk>üf'^rJ\n{)¹'Äýõ\f¨¨¨ðÛèíwÆÙÍu1§3BE\neÚÆxà3\x07ß<ñkÌ?ËôÎt3³%ÙÓÐØÀú5Ø´B»ÀwXrZYS½9|6q}62.ÐhÃ\fÅ°}ÌXFæR(ÃÅ¨qã¡ïTÛC¹:Ù@1©½gÎÒFÙx]e9å|>s\b½©\n¢¦®Ié½¾Ð*kpáÂhùR\f>#ÆNÆàÞV.OÑÃ¢/Ñ|Ò\"¾ÒLN¹ÀïeO`ï\vT¯÷ãÉâüsàîNÒ£ìÊvØ}ô)\0´9>%y ¡£=×ÙÙv52¢\0m3BÆsø\0Ö¢1døö/¯¯TúÏ-Dbj$RQ¬!1É3s[«Õü¡sXyöw|öÕ÷È-hÂÕ÷ß~12êó±ãTJÊË \vAC³Eg#Í\t&m3¹8EØ@*'B©å%È?s,VóçPYv\f­*Æ&´ë)ÄE9«F[³ÿ Î\b?S'OÂUsæøéÑ]aÌïÙ)ÌßTóç¿z±îSï`\b<@Ó{}î·¨<µ) {`?xø0.söåW¸ü~ìèQÿ4\0íÖYIâÈHö{SS`{«Ód\x07!¦öJX\n;ÚÛ¡PzÜÒÖa^êð§0kê\fX[ÌrÌ_ÆAÑÎ-ç,Z¾åÚ?º(BD2²ÅìÐü1)Ò´wße&¾¶É©æ½Uí­8zì8Ñl±¬2ÜI \"Ç7'Çíå4\r;S-Ød0ÌZgtl\"b$8{£pfV¡_²\t-\f'fX0¡ð9T\t\t\vG½º\rzh÷B+T34¯i×ÛC·3õvµ;u7°GüA\\ïmYZ\b¶ÑqI\bT¡¼ìCÈCCi=¥Ñµáðþ#ì²\tSNåLÃ¹aÅè\tC qR[Q\0DêUTñT\0ML¤:&-³Má-¬ÏNÿÍáìW\"NYó­íàSÄÌ¬$2hì`ÔÞÒ0)¬èd8¢gfÁ`2õ¦B¡J:$úbTëyã[&eè8³uS£¿nÅ_;>¾¹ï¾{±wß~?Î~~ï½÷­[ý)ó>f×Í=ß-¿ÿ¥AÝSD9O¥M¥öÌTÞôO:±Dbö|[JSS#\n¦Þ%sA/,,<(`g0¸uº3X·±Y¿hnÿµ²Í³ÿ\0³&_VVo¥<3*TÆzâ3¼ÅJÁl³|gÖç-eöýïu©Àdd­îB3Af­\f óø<´·µ³ûo\r]oÞC¹qh¢ýÄ,¡P\f¢å\"dP?É3ª}¾¼Yi±D#ÃÈQaT+ÑhÙõ@Ù+º´cuÚÔDC%\"$bÊ&O>a$\f±2ä<¡{CBÁ$!T*ÚëÐÖ¡e·õh$õ0þQ¥%DK\t<<%hïTC\"ä£ôQllK\vìÕ6¤\r,Nyðèébà°­9Sî/Ê~ÛÉ¡Ò#©Ô`0±ñ(LËÜk¯¯AdB:¢DÈ;QD@|$rÆàÃQªz%äIB\\(:¢:ô03§ùS|d(`n$¼±¼1;m,:ç0\0%òÓ»»Já¢P¤DÓØ»}ê5¨æÔêÊqß\veÑÌ·\fC)Jkêi@Øð\"üúã*4Ð1AÉÑ{D6.Àãg!MLcï5Ò§Qfä,°ù§ÏB8ã(®&Rð`\\e\n¾ÝrÐ' _6u*¾ÿþ\x07ë-ó9·s×.¿Ïø\f­ÜÓ6þ_<þ¾5ø»r\0½H8C×ÌCL¸·ß~×^{-ë5ÝÒÒ_~ù¥[bÅ3ÀÎ\093QCÈ{êLf1fb1Z³7ÙFÆì£gö¦{ô`\vÓ¼ÃÚ^ó¶ß²æLÀÌoni+*.hYÜyû×ÔÖ±^îmííì~{.¯ºcªSÚ×µøÊ8ãGq`Ïö»H\"Ç¨1Ã!åPE´®ýû!\r\rDÀs²X¿ñlµZ·ª\tDH\fAù¹Ó0©²Ð¯oºM¯¢ma\\RSPvè(\nÊäèÛ;\vG¶¶o/n\bÑkà@DDFcpV+ÑærYm;=+\rRy£ëqðÀ~¶Þ$ôIsz9úâ,â¸hGsr÷AªÙJðG¥F¤Ü,QY¢óú°RPnû\nàm)³+¡§Äióíq\t©«\"6gáÑLHBcL8k±É±á0è4(.¯aÅü6ðLÆaýÌòåq¬Z\tÏ³äO§ÖüqÖõV:;{({xV>lK UçNÁy¿Qm=÷·¡º¨ÜC5%ÖßÇó ;+qðHû=*5k'î;:ó»tØÝkáNgò\v v-ÂE\beDÅ&B×TçóÆS§O;ø\\Y>3»wïöïyØnÙÒü¿¶Ól\véd~g¼Ô³/I®@Õÿ4ôèK6&ñ¥ÐÌÔÕ×_´wíê80cÍ©­ó>ùì³´YrF3fò+¿ï¬Ú¥M$BÀ³9\rz64î¹KPÌóøNË+æÅ´çðÉÜÆ\n|¡[çPot½Å>g«êvs¸óûêïê_[©î\bóêÐi¶ÞÀ\bÜ¶u[µªbÔeiÞëæ³KTÛ,mb¿'&$`ÂÄD1y¼·°°\0¹yyAçisÑÏXõ»ÏpP\\._ÖïÒÇ{Ð´C¦ÎÄ¸)ª[·üvô®&KJ[¶sD9l5`$\b <<¬\x07Ôý\0tfË3¹¿KÔyæàD\fgòÕÆ\têÝ©)wÝÊéîi7÷-¹ºP!åU\0ë¡¢]ôwpúã=Kv¨sÙÿ¨ÿ/²Möÿ@]`a¼é×9ö;³>TålPK8sÐ¥Ò6í¿?ë]YçÁ¹MÐ×Zr7ºo è.Vî)Løj¾wpyÑ¬)'(v>*Ð×¸øpé> \råà4.åB_´¾bf\t=¥§Ø¬7z/ñu=ÉzJ0L¶\v6bÖÔÝíön¦¼`/ù\x07:º{Õç¥t7ÉK/ÛGó¢\tÿÁþB»¶PÎí¶µß>h­'·B*ºuk¬ c\\\0ØØÂø\rÑvé[­AÌÛózJO\tz\thzÒþõîGvL±Þ¢h)4i\x07íØwúTÊ/ÆL¹ÝfFùÆÓd?¸±OD°OÆÝÝpÞ\b°x)¨¿´/ÁÎ3tûµ\"ám¿]T8ÊÅÊá¥.\n^Óß2aMlÜ·RDOé)Á:!ZAO7ôKN£õÅáíê¢){ÆkÇÎiW­¶¤)WÖ]XtïiLMNWÒ~lµr¬Ï£blo\v§þ\bdõö¾¬~:ÐQÞ×Ù-9(\\m4öÛfoí¦÷íõÏ×ó<^aõ¼¸¶\töÿ ß¨9=½ÐSºUI·2o>ÞE?wÍÜzáü9Æ%!BÁÅS0u(.*Erzòÿcï<àã¨ÎµÿÌö&íª[½Ù{qÁ6¦Øt\fÆÐKB¹¡ÜÐ¹R¾NBB\t5Ð{Ç`\f÷.Kzïe{ùffµ«´+íJ+i%½~µ³3gÎ9ÏyNÅ¾í» JÊÂü¼~Éq.´µ¶C)ÃùqOß*^n|0ûÊy[w]¿ð\0)À\rî½AøÞÅ\f¡güPgY\fØÂ[ýÂ,¬×Ê2²\\Àþ\n\b(ßß\x07ýïbeeRRR óÁYÛ!#ôZ÷¸sª~'Â0\f[V[ò=¥>QÐû¸.\b1aÚ *Þ+ê.ÖÊªj¤ädcéÊ,ÌË¾gÏ,[µ\n¹dÀ\n\0¿q`¸AÅÜoÆ/ÎÂ\r^ëÐË!8±jß¨1¾JØS­>¨N0Ã_D¦×xw_QBÐ\0¾Ôâ1Å¢äÈÔÔÖbþ¼yîB@X3=\\½ß\t¢×³Å?OTýNÜ\x07±-®MÇÔ¸gác](Ü¾êô©H£¤ä0¯§2\bÂ¤2G»(.GÅìéÓ`·v¡äp©0H(+ ':ô5\v÷Âjs@Å;zk+:\\Q(X0]d\x071gîìþ«ò\rÖ[cüèÀyraJbØ0§³_dqÌCÂp?OLÕ##aÄÐO[¶Sedf !>^sbÌ!Q'F)lLtï©\\ûUKózz¸h/ûNêv9&£R^|j`b¢±|A:[êÑfe£¥57UÜ÷Ð½NËCnV*ªËcÏ¾CXµd.L]fä-\\h¥íRTî?\n%\v.c=8)ã].ÈYª\tè»}ÚÐ¹ \nTè¿d·mÜ#3Äüú?^\\µÿÏæ`3 ²=MCm­mâG@jö¬YÊd!E$êÄÓ{?Söq,)ÇÅ'A¥îÖSJËª{í¥ÒÁRQ}\x07]¼hç 3N\t§ÃâÍ|.3LV'£Ü«ð©yî²´ÂÆ¹ áÅ\\t1DèpF3¬õ\rÐªû\rÉëMoÖµw)#¯\x07«EÎ<ìCWz.ÔÊéÊ\rÐ>ï]Xü=±0âTÛ~Lå8zÉ\tubáozÔ@çç'0éSÜ«ï9u±K+Ý²u;Ê,Y¤×?t`\x07lÐ¢wíâb2,çm]vçD§í\x07'Zò¾r5rò3ÐÐXÖ#æ.PT~â>ØLöÌà6Øh?aØßa>wî^Úêç:0jc¨£0¸;H\nmã±dfeB/,Ô·Uôe$}Ö$Åé¯Ó2-æ·iªÁs.®»ãï'|VÕâj§)¹ìÈaì.<øÄ$¾´êÕäè®EæÐÔØÂgÀd¤Æ¢²¼\fVe5HÌL\\ÇåºOåîÎæzpÑñ0hT!zÙÁC÷¬Îú|J¶ÿG¨ú÷]s¾Wï|aäFc>Ï9=ñ\vRÉßÅs|ÖQ÷Ét§çþôYq~+þÿókÀ\t+W`î¼yî!9?·ßO81fN]­MÄâÅ³ EÖÚ#»Q\\xºP$ëÎÈÃÛþ8è§ççâPÉ±N&³f$BÚý\"6Ôµ é*ä8TÕ6##=ßmø\f%eõÃPj\fÈÉÁÑCeð¬»¤Ö0ujô:G'*îGqàÌJªCnNêA3pÆ`HËÇÅ§ÏÀÿõü­%¶ð<»4\nþ·|ø\tätÀ&ÏÂº«gà­ÿ¼.ë`Ör\x07Èä3HÉÈ@®G\\õÓ333¡ÉÌÿ«ÖÂ¤çÂ*TWUCÜ¹ÉP(=3f¸VZþ|Hª*QYQätd¤%á%&%õ²R\f­9YèÕtû(âÕú_6xâ5¸àjNÂ/òÔL·Þk7P!gh¾¢Ê¾hà¡³gÏ\t#\rXë@ND¨Kñ¸øÒ±óï¿EaÒI¸ãá5øí\r¿A%ëÿau²Øô#ü'½\"êýæ7âÂ0¾8<ôðÃ£86y*_}ßoD'Ó)C^;þò,ØkÑ¾éEXC5kæ ¼¸î´`ÅXbÃßî:!\t¸ÃÀK:\r§º\bUPÔ¥@©Vúõ3Êè\f³<uÿê¶á¯ÄÁÞC\\ú½%!N ½÷¿_jNn¯ßU²r§å§çæz÷ËöùÛ³bJ*|û%§fdô;qrrrÏ}zÈ,¿ßóc¢¾®OAD(f(éZÑhh7/Áñ×ÛÃÐ¯¨gjÔáW¥ûF {¶1!®Þ&4%Ù}$ÿ+ëÀ êîgÓsG-îýü8gÝ9P&ÍÆôÙØùÝXtâé`¬Mxöû°ËÆ5GþöÎ¿î~µ8NS9ýõa8õ&üâô¹[áÊ$däéðüø¿;DK¬j´Ä{ààPq \bÕ¼JÎ]¶O0)Þt`åÀ¬¸Øüf/_\t¡ûVåîoðÁEXsþfà]x-Jj´|z¬=q>ÞÜ´©©¼ò¯wÜËW©¼ô´±8?­eûðÚÇßcáÚ«±8U%N&°{ó~ä?WÌºÖqö8³0?I\nMW\tù°W_q*ô*me»±aO»íØ)Y¸øs åªÝ½\tïü¸:ÞÍÊÑm»Z1c>Î>a¥ÎÖÃøàµÏ!ÏóÏ8¬½\vßþ÷e´ÍÁÕ.wÈ¦R¼ðæ§âë¯¸i±jlßð\t¶a×®J§ºTUspÀö`Ós²¡>.¨è{±ïÉ»Ýñ0¦±åüõ^K<%A\nzÿ{îv\v.¹ é°N÷Kau\"3oN-È¥lªMJ¬RìÅÿøo¬¹øZ<ûû`N\\{¹¸ù}hÕ¼å_ãÓíxéÅPpÖ58ë÷ð\"ÄáwÞÿ·Ó0ûxâo¡u7èø¥K»×ÇöËâ§­[G-\\¼¯ºðB8y/Ù]Ägé(þü-Ø²WAUñ9'ÁYSoKÌXº|1æ©AÙy¯½R\fJ]bòÓ3ñýÎ#Ý&E\tgKu¯õÕSW#WÒ×^ü\nó3òõhSªptßfì­ãÌE1xÿó¸ôÌøéÇ=Ð¯Ò}Ø}°^~Ê¶#m2¬X½3¦¹Ý²!F³[6îBKG¸M¥ëláÏ-A¼0I£ïòÖ¬?',Þ{ö|ñÞpÅåáìK.é_ÁYêðÆ;±põÙ§cà\\ù3èùã¶ìe°páLQÔ­M­P¦¡Ïe/dF9Cì)Y(UÑ=o~ø\n\v!WÝGªËó¬çSÄJ³¸àJÜ\0% i×Ë%³ã¦cß¾\bÁô£ãú<£ß0æ\b\"lN6Ñ±h*Ü;Þ*Ãâ/@gu9Vá<¹\t{Ëxh§:IÝqÌ\\4ÔTBªÑààwÿ2&\tóT.Õ5t¿Z¸ì´¶\\<â\b)/ëÞ~[têBûñüËj36Ádv\0\rPj¨,«T!ÃvÖi¨+ªCkGÐdÆ[ùëu Ëdî¾vdñ)Pó¥;£AgS1ZmhllÅÜ(´ó¿µ¶w¢¹Ê\f×q´4ÅîT¦®.øßêêjQÛË;t ¨¹uÕ¨1­V¶åPZ¼º8¿âL-û\tÇê÷ÀnwÑFC+V\v3`-­¨ªm@'¿¿\\&DjÅáêF$ñà3Ëj¬f4v¶¡¡®Q®(5Z;á2váÇmÍ#h¹^yùèÉ7ráqÜð¼ukÆ0#B>®\v1²Ö»\x07H£êë9&ûé3ù+3Ôt\btÉäÒÑgÐÆ(¡ú½òðÃÁ²~¿5XãqÉÂh$'¥é¬AQ÷CÜ¼­\tqQØôÍ7Ø°½ÍÕÍàROÆü©©Hén»dQã\"8N´Yù5s&âú¶¯òt´ú¢\"ttÑÔÖ¹³æ I¬i©:\\`¤*DkÝ¼I'je¸öÊósçBQUÔùHâbþÌ\fÔW÷R*æVê^ë¦ch²\0¹YÙH³s%|aÉÄßUæÌÈ¼ðüû¨£Ýñf]M ÁÙ\v³É]}\rý£ÑÑaA+Eqñ1Ø,îqªÌDa^émÎ>fqXÈzÂúîj²|Üè¥àÆ»;úsiÉ±£hDõzýC0èhm@Em\r/l÷ãÉ¢¹­UÍ]¨©8]ÖR$jºðÞ¿ßA­MUËÓ±ñ«·ÑhÑàäK0}Åûw`Ï±fdd\bSyJÐZQe\"OAù±ZêZ'T¿gòÂîý¤¥¦¢ªºzTG)e`·¶ò\t!\\.ÃbFkK#êëatrèâluKR=Ò²3!sqpëO°IÕHËJF´/×£Ë.FbG}wç´º*Ä$ÄCár¢«v7*räæe¡ñØ~l)mk\b:êa4\v\r´UÕÁh·@¯¢®¡Ñý¥eGª G²Æ£Eû°¯°F1q@6ùzöí?6«\ty1w%ÅÕhã\v!õMà\\v4ò×Tr´²¸4hÑ-ßþV8e\vÛÁyñz£Æ´dØ;ÚaTLÁºÕp´p;ÚM^GÕk5¿í¼óÏïé°Ì\f\x072²FÏô°\bô\t5¯õkm1Ì[0Ô°tÆc>£32avß¦ñæ?xçï¼\bBJû\b 3Ì&=##,ïÇeãÛoDFÅ'xô½(u#µæSqù-gààïcïáá¤8\\xã%iÞ¿¿ån*\t´ Ë+ÿ~- æ£MÃñx>®\x07=Pâ?QÌ×\b\b¶¸\x07ë` ëâ¸Ð®}¸\"?q¼êÑ.Ä H^\fÛrºX%ªwM\x07PÊFr>£øÏ3Ï%,Û7ýkPû¶´´FPÁ& ß\r\"ýî¹AT¿Er^Í23ÎÃgñ{u½ªóC¬Ûg¨MÂ&ê¦¶Cøq%(á¸¸ØappOÁÍô¾t°ûiç¸3iÌ0\vý<ÓÓ9mÒ*àhK¹\x07 \"AÔ\tbÈÄ8õáÔTëÃø,aîO­w£ 8MNÀUÑ­×³\"ZÀqZ±£[¸ °úSO>þðý÷ñÝÔn?Îe~üßÿ(þC15LÁÐb\0Rè§£×çú­Æíýa-¡p\\Oï¼öa¨@¤¯Ä £ã¼Ú¹Kv£1¤ ,ê·Ý~;¥1\n®n ëÎÓyGFÖê[ a]73¹á ®{Î&è§f\0ù´[\0¸}|\bÆõº¡\fz}'HuWn/ä\\zôXµ\tÝB4c±a¦d¸îãÐîø`CütÎ`ºÏ4\t@E\b Q'\bª=h÷Â0õþr>WÁ\féª1ëû\bíä}í×nÏh³àúAUìD¤Aë©ãË¦¦&466ÁfwaL\"zº5\\¹Pº4èh\bÓ½²ýX\v«­*Cñác°8ìbj9*.Bc»QüÝi·¡¶¶>³):mV~[,âÊA¢N~1v´`ÇÎÝhjnA{[+öìÞ+Vg»XöìD]s{;þðöÀbî[é/ÔuÇ¢3ßÞXºÆÈ\\FlÙ¼»Û~Ü*Î.yhçvÖ·Jùýj°}ûv´w¹×`.*<\väòðÄØ@ÕïÄ¸pè\x07wìF\\ötLËM·Ú°yÇ^$ÅkP_ßü¼,ÈeR4UÂ!Õ £¥5¼ ·9B£\r½J5Â>º;Ç\r=ºÁVßÜ±<Ì3ñ1ÞNhaLÛ\x003:9tÑ1pÕ4¡¡¡f'T¥\fVg~Je9¿\0½ÛPZVX9x9ÇYôÒäÔ\tÎ0j¬YÖ#ï.\rñ1ÞmZCV|2Ô|±´ÏtÙî@1Oº£¢\fPÊdrÑÂE$®4ÓÏÑI+ý%\tçã½OÉÞÇ\fÉ¹s\\`çßg\rCb&2Ry\x07î®j7ÝÿZ¬vÌ_x²zÅ¬Ù\và4w`ß¡ääæÒ»N¨AÔÙÞ64±3á> JÁôq\tñbh´!*Y$UH1\bþß&®÷g$\n\t\fÿçlý c^rÏõláñÙ&/LÃÂûqïÿQ½>è(ñ<½A{L\\<bôº^×#)øs\v?-\tb\bPõ;1F\bÂ.°Xé²Â\"À®Þ¢çb{¾³ÕáñRN\r4U\f;²öp\r|\"zqÈ9ÓËu÷^!Ð=l-ÔK°Ù:±sÛX]îÐÿîß½/4FañR(ÄmíMå°3\nÄ¨ì¨­®!/«Oe\r\t;1ZÙ\nÃS'ÆVØ\x07ÈðÆí¶dr²cQq´&NUeGðÝ¦-°\n½3jZa6ÑÖeñ®t%áºÝnó\n~?5sghWÁÍ)ëëðYcûátïÁ|F5»Ý»÷Ü}þÂ46×#69Ç-Î¤Xºb\tï,^%×ÚFw\x07Ì¦RìÛwYY¹SP .U-<4d §NLN¼S­q¥KÈsgÏuïnlþñ{q»R­ÅqË\n¥T\"'¥GîG©T(;\vñ§g§aI¢ãôHÔiý\bâÈ¸Ûð¸ö¾ªü\\ka±¿½ÆjG~Oî ð¸¾èÒP|d+êªYÄ¦ä Z¥CNZvoß\t©*iIzØÌíØW\\¤Ì|¤$¸ÛØS\fØ¹uPhÞobôsp­§Nb&`=õ_~%È'\tdÇÄ÷øt©L÷¨!· ³.¨Ä=¡\n@7\n&0þ»DÚk<º`E\v¡Xåä)áqVÈ¥ÞmvþùËdÃZ÷üªË.¥õÔA!¾@NØ>d ÕäÆrÞ{õíqÚF:pÎí]x »ÏêPå,Ò¼óHgËº[Ø{¦¤}2M¹^f\"¢¡6ubl|åporº\x07w ØdÌ§;¾óøNÓñ5[ Aø\":1Qê\vÓQs>µ¢!c»u&Øs¥hÇÑsc_Â\"¿\\/§=´aX0¡ªr\"â£,ëz½uB£ÇÑÓJ\f1dúewÂ#ÕÜÔ<&Y¢ø8ÃGÌ\x076|wíuldt|8Ôa^aJn(3ÖYÑºå¡ôM\fâ:IOÛ9Ã0½ÛÔ)\x07!ByaqÈ&çóÊeüÿûåf1Ô§Ì3^Ü§£ðo|\\ì((¸¡iS\f\tÃ¸÷qQDæ9¼¯;üõ`&èïé7Æà#$êËõäÃÜçë%\bÿzm¥6ubb=à¡ª\0ÃP-jX¤søaDÔ(FP\f$º$ÈÄØÃ¨ä¤ÊÃp±ÔðI¨ýc\"î¹\b±ðÂ«pDÃuê(Gjr|/\r7³ÖJàmÈÅúgÉàz7®L.ã[\f!!'\"(¿\"Q'\bÿ^ñ(wEÿªÓ=µø\0ãëq$ZÁ·}\x07N;Î'4f?áØ FÛp.ª~'&¹|ûßÂ*_X_-Dµ'cÿSn\bã\"ÃÄ¸ÍÑ\\äÔ§ýØN¼ñÕö~Ûçv\tæÄ]âu{ñ÷ò:v&ç_¶za\t×nñæüM@×íì|ú8>+×ã¯í:kËp¬]SÆPÔ!@üuQàÄeOu\0Ù>øõ¿öê«X»n¢£¢è%\"\tê(GD>QéspÎÚs±zùL|õÕ·~ÒY8ÝzÌ22jWã1|þÕW¶øT\\páZÔïÀuO}ÖËyt¡¼0Ì9ëNÜsÓu!wï×_ã±ï[«:Ðà@QÉ½ËÌy\"8o¿ó.î¾ó.Ô××Ó\vJDS§6u\"ò*HMMIê^î21)1´îÀÿ|¥\rU&wåE8mÕ2¼õÜ£Øz´z\r\v,wÝw+¾yõ_(lâoë@»Í¼¹¨¯(GÙ±ZL[º·ßòs¨¤½Ë¸I)IÂ¹ÇÏÂÞ\nÑá:ïþí1T×· >o1.:!o|ø\rÊ«Zai3á¤/Âú3NAã¡ñþ+®¿fÞøÇcØ|´z©º)óqçm×ààæ\røÏë¯A\r©Í§^sEãë»ÀÔoÆ©\\|îÉc¨ëÃì4ç;Ö\\Xé\v]Ð##ätñuuu¸áú0gÎºf5N8ñDzY±~hIÔñT\nåz£¬O=ø$æÿìN¬?§\0VKþøÈ\x078õ%½ôl\\|Ã,q×çú=*:l0¹ì(fæâõ?¢¯^Åo_þÏ¾ú,¸ÃàÚû_FÙÅ`F²®÷ù\\XÎM\x07ë KO¢½±ßû\x07dE]~5ªcOÀ³ÏÜ\x07«\r¿¿ñyÚ*8ív8]è8òQøë÷áýýñßà³¢z~õ)Öýß3X¡GÙæqÿ\vàä¿ÂK\nðªm/èË# µîªøÐ'¥á¸ÿ¸ô@å§áÀâç³/¿À<\b­VK/+1V$:1>am](µØÐ¹ñ\rÞý8y':5âjm-ç}ÍM8|ä0V^å>æÔU³Åuz¤L>t2)©ùæ©í/^Þr¥ø¯J¢ÆýÏþj©\nI4tr¸lm8f¶\"õÌãx±ç­,ú$M6</ÙÒc%xä?ßKKA½Ò\nÎ¨ÃüwÆ½ü\\¼Þ­áBÂnwDVB\v×6ÜÙæú9A;£åæäB¥Rú/ ÑLÄ(É::1.adrDI¤È¾\bs§%BX#óD6SýÇ«¹h¦ÏIÓÜ.fªN>OUÈ<óÒ;{eeýÖõw<©ÑM@^×-¼îÌÊ ç?æ®n#çËÎAÞÇÇ¥§¥aÅò¥pñZ½xñRdOÇ»Úí.he2X:±«°Ç-.î/J#0±%^8õQïqéÐ\x07AÂ_ÐñËÇêÕ§`ÁÂ\0bNNQ\x07GåqTnÀçMÅ±¤ç¤¢­|ÞÙð=85mNäÏé(©\r^ú|ÏÈÉFvv¶WÐ})bpÅºi¨úò¼öÑ·øÏw£ÑduSKuE\x07ÐÀFaJRÞ{î4Úè³ãqëõaëÁüõ¿àåWùxw,,ÞÆ¡ªH-J\r7Ãá\vEãÜ´úD~Ö¬Yxóí7q×Ýw÷ôæ. |B¥z½þ!J\x07\"Ü^¯qÞü¶sÏ;oøÂkÃ%Çüùs¡K:gäÆì=p&­»II×9ppÚM\f,[éÓgB\x07¦¤d )Z)tÝ+Ócî¼lq4çbîÂÐ*¤Ý²ÅèP°h!4ri÷¹Ýå_»ÙÌü<ÈøÈ¤Î>\v3\r(++S\v.¸±ÑtÔìÅ¡:'·S³pøàTTÕcÙiçbåÜ©=wåÖ&Ô\"*&7Ýq¢r$¤%ÃâìJ!Gfzúø×õl97ÀÏ­ÝÖ¨TøÅõ×A©PN¼÷>$Ý2û­ÒFóÇÃcAÅI\"|Þí8YUÚX~Û/½<Jy®dòFmÃÏr¾QNc~`ûôÞúÚ½øÓ;E8ëÜpÝ5gªuãå&[Ô=º×w6Òs#&Y÷ü·¥_}ùÉÝ-DB¢N©M úXH&q0L÷ÐfwÛéÔeâÚ8#N>yùÄM#fd:~±d/\bbØ¨Gk©\\<BOîzóÆ¸×Ï-ÀÚÜÒá^¡\tD `2öPWfó\n{æÑ<&8ª ¸Ú HÔ\tbÈÂ.(«ßÅÑ¦éin\rVô]`\tb=U HÔ\tbÝ-ªaî$öw{·ïÀa9TãqQ´;ÊQÁeh:1¡zD÷ã5qÛ¹Q< \brêÄÐÒÚ:OÄødú\\HûGRA\vÑçkIÂE\r~!Õ!ì§dÂPa Q'&q±±¡\vºÇI÷iÿö¯[éÄ\rcX¤[î-È#+aî´\bfèg\fü@ËÁTüúÂR5<A¢NLfú\r%ënÿ$ìÌ8ð¼>å\tÄ3¾XpaFD¶$ÌðÓ}4Òñso½#HÒ\tuÄ¼îìOØKiâîõ¶ã8·gùø8¬çàÂ'ð#\t×§ÀsoG6u\bDX±³S`;©=ÈGa$ºá!n(áv¡Öq!HÔÉëÊ j¾cÌ#¹ÚóØ¶Is?»K0>ï}EÞÐùÞúq5Eì¸\\ Q'±È<6õQöIµ>\x07Ç,È\f#Õî<22Ë\rP²Õ¶$êÄ$uéAÒvt\x07Þøj[¿íóN»ÇçÆ-^ÍÅ_âã]¸æ\vhE>wv@Mê2fwÔ°Ý\nÎ²IüôS±jðîi_{õU¬]·ÑQQ£WB!`Þ\x07Jbt¹Äû\tÕ¾FgÌÁ9kÏÃêå3ñõW1ý¤³±nÝ9%*¬q´Ûº`´tüÝÅZñé_àßBÏÉíó§â0¸q!è\\ãjèÑ¨yûwq÷w¡¾¾^nD BAªP!--\r)\tâ÷¤)\t<­/=ý\x07¬=o-.»é÷¨m3¿øöñÙËÿOÜþÄóo¢dÓ¸èÜµøÃó_Àèr¢¶p|g\vþü§\x07qáúñ¾½µUÄ¿¼¾Þz\bVK%¸õzüPø®¼æ4[èª?ÇïøÎ_·ÿÞ°O\\ÕaoÅ\x07ÿüXÏû¾'^C»Õ9AÅ¨««Ã\r×ßWy×Î°úA¨zÚªüåxûñ\x07QeÁÃÞ³Æàå½(þ~dï6T°¹øõ÷ ¡xþ»«\t7ßò\v}ñ~ÿÖ.8MÍøáµG2s\tn½öl0ÞÁï|ÝãØ­õxãõO±ü\vq÷ÍaÓ»ÿÆiý33óqãëÁÖïÇM·üÊéËqÛÍ×¢ì£GðÎç?áõ{oÂgû-¸÷þ\x07­lÀî­ÅA9Õäñ9ñI_Ïâ>ÿwy×~×wáã?ÃáÀ¤ê!IDÞ»AY\f1,\nââ±D©ëï:}þ1ìó¸ìV(oÀô\f(%.«L¦B\"#wÁbaVn\"*Õ#=gØÖZUWøÄ$¨ùâkUQ)1©H¶¢¸Ìy³ãE1±ÚQÓÅ\"5J3ô°N\x07Z;a²Ya1J0kz2/,*JÉÃÜÑÆh5Èù¸µÍ7 ±¶£Ò\nh¤%ÅA«¢n+=GÊúmKÔG#5!vÐJá±\nï>þöü £\tµ&%21&Q'ÍêÄdËé)!\b\"\f<e«Eig'%1$Q'Ab¹uäºwêen§®1èh¬F­E)1èìlF«Mü´ø~N=!!\t*)PQ\\\nÖ 8u;êZ«EÊ#R\rB½\r\r&Ià`m;ïØà05¡Ñ¨Àì¼dHy§^R\\ä¬dhÀþ²H:äfiq¬ºIú´v4ÂîR\"/+uÕ5Px÷6Ì}}ÝT»N]«RbZZ2oºC»!þº Ë© %\r:VþV]*þË\nÄc8°,º?t-ëWZëà±ÿ_ÿê6ÌÓBï4âïÜí|/þ~Ë=`Ö²øìÁ?àË.N*Ã×Ï<åk×cF\\q1\n3NÄÃ\v[ðøcíBC«ÒÔexñkÑ^ü>ÙÞÿùù¨xòüîÄÍÆ¬\vò/»J>¼\r¼ß|þ!ÿï;)ü÷þþØyêñxî¾#¦d#~û» ¡È\t2ýýNÈâtÁõ\b÷#¬ãf anGSõL*ñkzë3)Äg6ÂP:Þszç¶7îº¿¾û×EE{ÅÙßÀwþ÷ºìrÈäî¬HÄ_rcbp»22bØPõ;1l|«ßon(ò/ê/¿:lQ÷>´>O,Çºàt¹\0^påà¤bË¸ÿÙ\n¼ðò`xÕ+äjÉäý\\2×+ãfát²Ë{vþX>Ü~òË²ß´-\vÉ¬Æ¬ã\\qí¾iLøÎ<¨»Óél¡¦°÷­<aMËôõ«uª~'U¿ã¬ÚwêwsiHaÄå­Äõÿ;2þ8\tx~îGªq÷ryÿÂ,@A¡'o}Ù¶'Ôôáyz.¸4¢.=g$«D$êÄ¤Cñ¡ë¿f\rjøÔÎ#ë¿áVÚó*[ÝãÐÃáh°à|nü>\bu¼Ò:ôWX«{f)ótp\n5l¡Lzì\n\"Y Q'Æ>ë#¡\béH\núhGLB¨\nhF9\"â\vÂG®C.íy\\å2)T>Ó<ûy>ýÂQÈqâüt$)G®3EDÔ¯aKÂ´d=<¿Jt*¬­^ÁÑBÃ§y~z,ò3b¨r÷yVczªÓR\f1%ºWkÈôìx:7úî{$á¹f`NbÏDKÒ>Ï%AS'&\tÑy\vsª¿úçsðÕ[ñÒöZHøLôõg×cçË[ñèª ÂHä3ó'î9¿½ýS|XgVÜ¹õd¢qÛ1|Tß3&V8±JOÆïÄÍ·®©xâ²i¸êïã 9ôØB\f®½`!^xgwÈÇæ­Vl8Ô0©»S¦á×7Ûkj±ü®°î\\Ü|é,÷¬\t§_ù)Zø{¬KÁ\0+/ä:'\\÷%|r-fè$Ð©$xôÞ/ñnuþýô0m<ëÞ:H/6A¢N÷uåp°î9ßç.ÈÂm×.Â·öâ)^Ðejï¦R¡WHp¤´;kÚ±lN\nöÖÂÊRÂÿ~:ÿýP°Ø\v\x07wVg\v¹Õ¯öÕÀÜÝMy9ïâ3t\nnÄÆ.q[ï¼MMµËOø}æä&@át!=AwUáÃ;ka:d6;ütçK¬®\t<¶f;.ÿÙ\"LÏOÀv«COfN<fêÕ°løjo\rlüÖLþ¼Krãya±³¨¥LMß_¤\x07×f4.\nW¬NECE3öì«E_Ð9O(>\t÷ÕáH§Óx\x07ªw8±³ß_.ÃI\vÒp¸¼·¬\ts1_âÛp¬Ù¼K]Ì¯µÅ¯&îªcTü$ñéûÖ£§âÉ\v¦ãöw\nñÊ'ý\v¹Iøö\n¼³«ÏÝ{<N5\vãäøÃ£ñËÿ]¢¨³ÀápÑ\vND\fR½^ÿ%1r´Qø÷g¦&·÷ôèìÓýø@Uæ¾ûwæt±ûùÝWÌAå¦#xà÷xø_]½·¬ÍF»S®ý_ÁIç/@¾É]&,'5ï[õ'çàÄÕS1%VugçAÒnÆ¶ÒVÜôà9øßSaW*q;ÆgÀ\"âígÎâ¯Áê3òqf²ïï®Ã/®^{®Xµ_ì­Ã{=\x07\v³\rÈ[5±?ÑáûÔ4N]òNì-oÃî}ÕØ[ÑD¬[YP&DãÊóòa©éÀÁF3ÞþóYÐKä,ÉÆ5'¤â¯aíÓðÛÛáÔ\t¨k°bþªiÈKV#Z§FñjüìEøÕS¡ãÃºùªy°¨GÎ¼t®Á§%-PÅhðÚÃ'â@q\vÖ­JGL\v´àÍ§ÎÃäÄÚógcË¯¶Fì³\r&£\rm\t¸âìÙXZKÿôÚ*qúÚy¸uÝ4ñù;iE¦Xc´jE:þPÛÞ*·¯8e:ë°ñXðiÖQú¹XÛä}\x07øcÕj,¹gÜêêBÍF\v16S'Æ&s±ÃË\vúÙ'fòXðû×÷¹Ãàoå\\»î#ñ{Ñá<<üËExqW\r®==\x07Ï6\"K'CãF´9ÝUÜG*ÅåÏl&?ï^6/jÃÕ3´øÓÃßà½ÃÍ(¿¸\0_>7¾yþë|´£ËMÅ3Wå@öÎÅâÃváw_Åy×Wßö\r\n»lxö±saëS!±µ¬\rfFnY«¯Z÷?>g>-ò^ÿÓOþøÖ´XÎºz¶}q÷½á¾Æ§w&ÓÈÄÏòZ¬¼ï\x07÷µQ9®ÁúVLß,Ã)×|\0#/¯?»ç3`zzø.E\r/@¯óÎ}[1^ÜXm¢üu?ðâ6äñbU£ÐîáÓÄ\rKÖbæ´XìÜVãw»ûQ*lüûÙ¸öúñâóçâªkÞÇngÎò÷ä¶ÛÞ£(HÔq0øÛoËÀe%ágÎÄ/Ø£N1*¾ë$qC´-Í­ØRÞ{1Ëy]ß¾¸LV\fåõ÷ûÚÖ9cQ\\Õ!n¯«ëÀ¬ÓÀÊ¥ÈçÖLÖ £áD÷,±uo­¸oZr4à0ã¨ÑíªÔAÉô45\bÂÝXÕ¯yé)Ìã]û9¼¾ÕîÀWâ.,JêÝUýÅ¥-X`a®ð^wÑþz¬[£üß;·5y·KÈ$nSèT`ëè8\\|ã»âökÎí³?#:Maµ\\7µ¶ta{³=u¶n¯ÁæïNxApÚ¸ó¯»ð§æàU?¢.áïÿ5gÍFnA¤èÿ³\\ü÷ëâ`Q>á\v@MNZC<¨Û&1.\fgáþÜûO±Á¤ÂëfÁÉ©±Ã_=¶Qü\\ó¯pÓó{PWÞýmî¿á8ÌPñ\"ÜjñJÃ¹IîÒ,/l*^M­Fñ5Hîv¨:~»ÙèÄf uàÆ?~|P,¥ËG l¼kLe÷vCR´èÔ}nºr1®ªV|´¥W8ÊoéZ(\v\baúö¦6ð\"¿u_]»ð ¤&®g13×/Â\rkòÅ)HÑí*çgièäFxf<sñû<óïX{ÛÇ8ÖdÂn3áÝ[`ÚSzM®Êë÷ÛgBo³àá¶ÁÁ²xáÕâÀÿâÿ=ï²ùxø<z)\trê1L».:Íîû\0¾÷$Ü´<\rïînÇÛ\r»pü²t|òÚN¼]Ò?¾r\0/ßZÏ^ÚÙ+ôåÙxhJ,.ÏÀ/îDårüþU®¾a)fìkÄùI¸õOQh@ÖÇáF£\v+NÎç£\tU®nE|åqí<~Ç\t¨s2(HSaOÚ¶£Ý³3ùø5Y°öÔ,<õø@JßK|ùoñì­ËqwlÑHO×pi?=gQçáþK\vðÉG\x07ðßZðñï×`{¥\tËóôøçóå¨P(qãÝKp_B\ffåàäÅIpë~zO­ÆkÚñÏÛcãÆ2,,HÁËïOªGê£OñøË¸©¿¿Nüõ¿û`äïoÃ±d­{ggÀÚÐÊ\v~,·àªæÃ eñô>Y«E\vºÃ%]ROzº÷ÆI\\8µÑ¼»µm¼«r?ÎêÔlzôTüúÿ¾Äí½öW)dpØ¢kõÄEÎo¶Vo'?¡\nV£ÃØeðüJ¥\f.ÎöÕA/ ¼að:Ñ\tUê:uYO\b¹\fZÞ¬=õjzµBÚk[¿óñ'ÔiU°ðû8Ó{¬§ùÑëÕIQÖÒ32=YÚú¸kV|}\v-èB´ \v1J¦;º|¾7?OÜ¾g~¬jï·¿ô¾Cì>¾°A\fW²ÙîÓÖjD[ðè\nEÌ½á©v\v*uà¶_!)t¾\tN\x07ïÎ;úl«ªë !\"ubôEx§Zm¨kÇcOþmEõ0rcb|¹s Q'\br_*6ÐAª¹Gj \bubÂó»+czû±áj<7µãÜa&ÛÞ=ÂVè`üDr¸ã`£aãe|Ëeá.7Tïª¯)? HÔ\teÛG'`òdNXQ\tãùS\b¯Sæ\"Ó_ôÆºõaFN|\tb<BãÔQTòîÏ2a§ÃG÷Çnw%Öaw©CµvüæÆr4µm'+±\ru\rþbqL9E·z>ód1£_¸\bå}Ç\"9u0{(\fc±ûÇï¨èÔJ8ìVØR,X8\x07r©tPÎðß;ÛQ\"ÌÚ¶ Rïä.\fz×ãs;po®ªu6×Á©b£º\\ÑcGÚ]HNJôK$Ë.ÇL&¡ê{­$ÒDÄ=£4N.¾ãÔåÖþ:Àÿ1;7cX®N5ÝK¡MV(TJ^°9X¬6qL·J©àJc±Øáp¹øï\n¨T2q»ÿ]¥C\"e`6ÛDG¯TÈùí½+­6;&ÃãB¡/Xlþ84jy· ±°Y°»X¨ø}Ýk©\vð°ùê5j_``1[øsIÁòqÈzÂp9Ùþñ÷0ÌW¡vB8·ZÉ_Å&Î\b'-Ìn'Ïb¶ÃÉoÔjâù4³Xlâlh>d2\t]`N8N§Ïï¯æÓº.Ç*¼¥OÒ«ùUÓ=+ S'ÁÃ$êDXE áñÌVb)µ&JA&!OËb¥ÕÁS7vàìWç/A§UÓ¶:N±XpÕZ­JtÙÞ*ärÑ\vÎUh7]ÐG«àâ÷ëâ]¬ZévFÂoRên÷,`1!«x/]¾RÍ;`ÞÛ­vØX\tÔ2F;<Át¹Nþ,¤6§~»¯:#µNÞu[@Vî7þRIÏÛf¤üq|<0lF\få\\°Ú\\¢ë¶ñ×+eç­xt\nV³|tÄëWÈeb§nNÌG,:ZÉ9t®Õ\b®ÉL/N\0V:µ\b£Ìüë:QjGHÔa³«¥»ÐìÎ°Y÷ìe}§}é¡\x07¾Ð¦~xÓwPÄ'#Ö á%I¨¤dð\nS¦æR®¶VÌZ´^8K¢¶±\tf^Äòæ,DgÄÞ¢:°ª\0¦¦:ì),ABB¼»óT\n}L<²R¦xÏÙ°\vä\tyÈLCùÞH6ñZ\rjFµIü$%öjÀÊ\vÄv}»©GÔ FjFE'®Z©OkÃ­p©R?-õ(®³bé¼>þ?òñWñïãx5Å\x07ÀD%!?-Q\f£¼IN:K+ÊË05=;¶íáÕ[\rC-Xº|\t4ü¹ë£¼ºj+.B[íì-®\ræ,FbL´û$»?3C)¸6}\rçûèÅ!z¿#F(Î0A\bDl|2Ò³Æ;W)ï<»À(£°dQòs³ »vCcÔd,=~²Q×ØÂ;qÁ­:Ðe6C¦Tò¾éÙ7ÑrtjMH×¦àEuPUÛ\0Õ²#¥Ði¢ 2ðÛÍhnëàµÅâB*þpØ~ã\næÎVð^³çÏCæw­ë@ÅáÃ0$¤âäU'@Á9`rºG\f$¥¤bÁ¬<>³Ã½MèÀp¡Ý§`îAäÔÉ(þ}þP_¼½Ðµ*Z°iÓ&þ«qq1b35/à;ö¹WgSªµX¼d:d¬jÆ]Û¶!ÖÌ};·Ë©ª´±X¸ÊS\\Â´Qx^3±ÿ`ðçÑÅaé\f(y×.ç\v\b{wïÃÎÈÉL\\û¼jµ?ç¬ÿÞRÙ[l{ÖP÷`HÎFFK;vmÝ\nJ\x07µB©D}ûöî­I\t­L±ÂO ä\ftuvaëÖ½X¶l>429=1QòSê(GßêwÏw¡úýÅ_ó»¿Äsè?Î| ¹á\\Âr¨üîîñx¡Ú¶KV+M@¯jò¯W<zµ¶'þÃJWHcIC ¸,TR½U¿ÆL\x0764ÖMK¡rD\nüÎÀåN¢%\bä`*\tÃ c÷y¶4\f=Ö$~jÅ-P-\tAãubtÜË\tLæGÄ±M7T!L¨F«ú)H &ÔQ\x07ËÇ©ò²ÚêêÀÂ(¬Æ'9ô/èm¾±í>$]p<\nÞü|úoz\bD<KÈàÝ÷ÞX 9¹\bWÐ³áfîó¿CÖ5ÿC\tA$êD¤\bx/§(qwTÛ¿o/ìîÛ\x07«Å2©Ö2\vç>^m{wáÀwÀXRHïA\fjS'FEèF¢\x07Qx`?8¶»g¼OûDÔxu´JþjøÌû]­ROÈÇá¬Ì,ÏÄúý­êÙè}!\brêÄx1ðÂ3´û#éùHû|iHaZ[¡/÷#LÈÏdBè öp0és0Rçk!È©c\"Þ·j]wÝ½6§{¥Õîu:9Ï\nU>N=ÈiJÇ\\h$t|A\"a&ì3NÒyRÎZ/þ]ûé»awûà\bM¶vÌxøWè8r8¤sH4ªð»1?aVå#÷·B¦éðÞöè°Î¯+ÈåH=\\öa#öÇð~oßõJ~ýw¿×\"t,yôwUa\tÿ$êÄXgÚ¼óLBãy1#þæ·{òtß6ffBv(cC®Íj2z¾SEZ0®mg]i´B]öª5¨yåë°hæÁÑÕ±Mùw?¿¾_BeZô°ÃõÛ?xÃÎ1ÑîÑ`\b.\nAÂ\næD;æm(t\v;ç|\x077ñÓ ¤Â3Ã'%C\\´à«?øPt«mÛ÷îPpãa©)ÇÑ§«ËiwÜ\bmÞq[ésÿk¶û\nîVØ~ìoO¢ù³=½ÎxÊ\tÐ$§ ø7OßÑìNþÝ÷ âÇæÜ}¹÷Ø¬ËíoçÀiìÄ±gÿöM%¢{zÛ-P§fç-}þeDÍêíù_þÒßÑðÎOb-p\rcê?þÊ{pÎ¾\báÇ,Y(¢­º³×ùwgÞsmh\nñõ\b© Â¾çë¢¼\"]òèïaolë_!ÍÑõ8qáXßcë\fïõû^p¬p?sn¸Î[K\"ÄyÊ5½Òºo|K}^O!=cz÷ïn'öü-~ºçDè3Þ5}8b`a07ú\bE/;løæ[Qx¾ú\\A6ÿ(n«üÏk¢xxöJ£Ünïw®U§.ÝS­ì/úÏ>@ÜÒ¥âï1ËÐøÍ÷âßýÁÜ´À~ÚÞ·\v¿\vqkßZ(~ß{ÃM¢¸\v5ÆcGQóúGâ>Âu\bû\bÇö¥ø¡¡Eÿ}ñg.ðnÂßuñM½®Í-¼áosyªÇ×-³o|j}ß*sÏß}é ÂÂG¨]èZðáö¸{AÐ=i(ìë)øÆ §N°÷ºæv6ÈîîãZØ]®ÓkÂ\\û`×9JA°Ìe5¢#õ¸>°ËtjÑ±zð©¬Ztãó8bß}0µ?\vB%\b·01à 0úÓüÍ6¤]t%¿­nÁé®Î- 8äÜÜ¡àá©\rðÄMü_ßå§z{)àÂÑy.¹;,kCK¿8\nñ×SuÝöãÏ{_(ðø|«È=Û<çê[xòïPñ­JOùtý×âÎå¯½áÑÆD F2÷T·\x07w:f=ÔaýD}¢>Ã8Vì\fÆ»MAD÷Ù´éK¤_²^t³M;ï\\Ñ1û\n ^Úì4o5¯àañç`\bîQKÁQ\vaõ\rGpñBu°¿ê·^õ§J^÷,ÄG¿ð])!nB¶§MÜÑÐùÏý­ßùs\nû\nÇ\vaöÅS¸3÷hÿ{±¯Àû\"4M\baúÆWÀs¡B(Hõ=f0»Bºúî+ÄA\vu #Q'ÆZÜ<+¨ùY[¡ºæ°\n&cub&o<êvàÿxKìÀ&Të\n½ èB'9`yÚ³ÑÚÔr®¿Úë°Þò-T<â&µà¦°ú#t ªû6|Áµ{ªä=A´joÁù\vÛ¸yâH\\{²Xh¾ûÆÅó¯pN¡\\8§§ýÚWü<mÔÂyªví§æÁSíSß}ÐV.Õ7¾BpÍBáÃ7.¾ÇxjI<az­yú7ºOZ\vçÄ6öî´B)@Lº|^%ÆÉ0£Óî\biÿìù§¡hÛÞïQQQ2]Ö$¥à\\N?¢ç«ÞÓB{±\\§£[ã\fZz ÈsFcÄX88AÐcæàà¿£@$êAL8êÛÑvé}Ú×>\vi² Q'jì)\tÆ5Ô\vh:AAS'\b\bÝ­(U(!¡Ýf#Q'\b\n­|Ú:2Q$¨ú \b HÔ\t \b Q'\b \bD \b \bu \b Q'\b \bD \b \bu \b HÔ\t \bD \b \bu \b HÔ\t \b Q'\b \bD \b &óæH¢NAäÔ\t \b Q'\b \b\"ìÈ(\t\b\"r©kh D \b\"(:»ºHÔ\t\"ÉHM¥D \b\"(b\f0¯¾ô2GIAáãØöMG{s÷»LenaÆñ=\bOö&\f­¥eYz\"ñü,\x07B!ÿ3SWß@¢NAã©£AALÿçÂâÔ§$%Mê¬ïÓ¡i<¥oÜ\r±3 ÒÏÜ÷²ìMïßsæÌ¡\\ qATtô+²?ý4,åääLêÄ,--·éá÷¸ÔNc£'õ½´èy':L&Ê)\bäåæfQõ;AALHÔ\t \bD \b \bu \b HÔ\t \b Q'\b \bu \b HÔ\t \b Q'\b \bD\b+.þãtõÌ&,üåbi  I'ê¦æ:T¶YïÀ¹àr9\x07X\"ÑÖ¦ñÊ\r¶mÇæ-[°÷HÅ[j+Åï[ÚNWïkgxÙdY[=#\0¦ìeTo¼¶rt:94ïû_4}wfßý}BYàÐÙu\bÒ®úñSÈq8à°;)÷ \b\"â±8`ll@åÿ®Dµ#i1>¿»ÐPYV\\¹Zµ--âcµ¾\b§Õ6®(w\\À:pøÀ>­WaZr%¥\n\vüB\"ezÜÑ²ªFÈ*pNYSú¾áo®oFÜ'GÚqÿ\x07®å'pÖ=!nº\n23_@Ñ¤ô<Lí[am+^Ï;{5¤§!u7Ú!wI¨)/+îErV¬´DÊE\bø¢Þpø *ìñ(!\nRUY\têLÑHÖJÅßm¼ë³Ê\r¼¸Å¹¥ÛÞvã3K9T3ÐXX\nZ\nurTã¼@¨Høëæ?ùùÙøi_!Òâ@#zÊ-^¡®?zÊäH6¨Åm5å|º9¡5Öâ`i¸-'o6¢lÕ8TÑe\vóG´ÊE»íU?AjªC^ë<\rlJ [Yª®ÃeÿB¼áÊL+Zþ®æHÊ8_ÀÂÇ7kÞí@B>¬\rPàmñøØ÷`<TèwÚXÌY0\vÒîÂ¥ñ0¾ùq¬Ù\va^¶;>øU `ÍéÈQÂÜR7üô|¬^<ÇölÆ2trÔ\vù¢;±WlÒ2¦J½¿ÛÌ&Èµ=¢À(´ÈORÃ¤Êà»fu£dh3Ng4qP¶\v4qÚ¾ò§Õ(Ò»%J®@­Ý\t/&ó\vAÁQQÚÄ¼t¤[µ?âm(\nÃ4ôÓ kþµU0ÔØ ÉXÞk¡\">Jß\nyVªDzEGáÿCRþáu@Ö¸4([Ë´òYXZ¿çbÇÅýÓ)>þ³ÌÃÔôx[KQ°êv|¶q¦Ä­EîI«1ËQo~8µóPr°«N;1\n\t*v}íì,f>ûö'¤}Ê¸/´1\tD*zÎðî[+ÉÁ9}Û%%P)¥°óÛ<Îeu\">7r\t;Á\\ÄÌ\\«jâµ½ÛÍªxÃÅ+©;§wp,d>å9Ô\n!môÐéÚáªùôAÁoqwZõ¢9ZÚ*ÀòQé²È]VIÒyà4ÑÝWÅ¸ËÚïX¹*¿>Þ\t'æh5ûàêÜFÔü=·)uÀ8i¢Î5©hh¨CQQR)4J\rôq8yÆ!t47ÃØÖÊ³/¸Ú¡2$\"Å å;ëX$¥ØP×Ä\"7'wü\f\0êtHDx3 NÈ@gyZf8]N^È¼ )xapz³8O!c'°ËuPJí¨m3Ãa·ÁsuÇ >=µUp°.¸ì]hh2!U/ëð¼À;L-è´\0*Ãêpw¨am2¥ðN3>Úsáp&À\n±Í»/xX-à*¶ÂlçãnîÐÝóé-Ï±R(tS!5ï±Ó1~Ö,oknBä)Ñü³j_ s µb¾-6BÇqH©9ÉÐZ-pI¢`lnBsV ÝÆaJZ62ÓÓ gHÐ\t\b£mÔëõ# ­¼ú\r:;:`4à<¨Á\0Ù\f¥V\x07ÐyÿWp©v^ø¤­·3\"3û¶¶ÒC«RÂÔÕ\tÕ¶çÚ¤*=´¼·¶µÃh¶#69j>-:Ûy\x07h²Âbs!)5r©×KÚLtZ%0Å]\t»:·×ï*òÖ½@Ü*¸Ô©Õ×@j´À°¤çÌ2}>\\1¤\0[+$QYÐHùÂ<R\t\vFéN)/dru&R\x07\\-;Å9ÁÄÌ'SFÄ½t5nôþÕ»Ö¢­Õuh7º®³å-6pRæ/ZÄøÄQÓjBBúÄ¢§BMM-º¬òæÌAºPÓÐ.§\tü;@âbc+ô°XI¥¥¥#uUHÊHªß¸Ç¥®1vÍ¤¾¶¿öþ}â'¸oËÁÏÑ»\nÓI\t[òrs7M#NÇ¤MHÎO8æjqmTÔÄ½ï}s¹ØIýRØlö>ß\x07N©ËCR\fA@Ør£ºÚ:èxáafÒ%¢ÍÚ¿Xcc*UøNÂ'kg{{x\v#\x07cWW¯mÍ{!t}J'_l¡@co;Ü«ÛÚÞ½{ÏÈÞðÛ­µ|ºQfBÄØ¢å5'lÕïAAóæn¢²A1A Q'\b \bu \b HÔ\t \b Q'\b \bD \b &4½Æ©¯NLÆ¹R(>d:°¡± \b:AALB§î¡BfÇ{&\"[Î×Æ#Ó©  \b¨¥Ëdâ´¯¾+qÄHÑwÞu³. \bb¸¢.þ Âb±ð+8ÐL²ÄÈ\"Ë¡Ýá Ä \b\b·¨Nu\r¼SAÄ\bú@ÄM?IÇ]EÙW`/ß@©IAcÈz¿ÇO?ê¨Xyó:T~|bc¼úAÈ¤ÊAÉSVÅù©âwyT,^ìô)t7&0R½¶ÅÆÆý6\bhcSqú§\"=N\rmRVx*ägPÂD¨OY|)êv¿Ý\f±U»ßF«GTÒ´Ó«OÂÝ÷]\vt9ñ³»îÇqiSqÓýwââ\v/Å´ìº´ô4ÜyÇX¿~½wÛW\\\vRâÄE©BÞ´|ÄhSqáEg¡`NjkªÅß\f-%Ð\b²M08],d\n5\\ÞÊj)\vu\rxlÁu¼Ã?ú9¾Ùö=óN>S§ï½\v=|jNÐTTTâ¹çÇêSNÁ¬Gjj;mÛ·SâÄgáÊ%Õã³ï·À3\r?¿b5ìPKLØ¶ù¬Y]o½\0éÌs°,½\rosbÙl9Þþx%^\bX,öºD*GÑÄü¼Ûäó¯E´.õ<6%IS}øw\x07ïÖ%ÝU¯ji¢_|Ý-¸ó®Ûð³%t&xúÏÆüyó¡P*ññ'P¢Ä$ :.vS\v4\v­\\F\x07ULf¦táhiSQøã÷¨ª¯Em]%\\>²7$§.È [ó$Åê`Ô¬R7J¥Cª>¿{Ð¡o\ru,6ÿk/©spù¾dìhC\x07dè°éM@<Õïéii={¶(ôALlj+*2u®8ÍýJ0.©KÂ ½¬¦ø*,\\u<´Ö6|RÅaÊ±y'¥ÛP\bZÔFÜU·Ñ«Ñ¼ëuÔúQSár9øRÕ!p;h{?yÓ¯8¯9\vóòxõ;3NZ½i)j¢f¢«±¾õÝ\tÐ)NhCøë³Ï\"..N¬ïêê«æ\t¸ïÚ¢+Ùuå0K¢\0AÛn\vjmÕp`a q®(Pâ¯}D7R¢.Ë\x074eïý»ÛE·Tï\védMå;ñÌïv\"cj&ÞüúSqÛ¡òcÀ7ÑéêêÂ-[¼mèuuu¢ 764QâÄ¥µúþòîfÙêZmíù-/Ø·µ´¸\výirÈùW×ßMÅ_âõJ%àHº³¹\båýÊ+èÃ¡òh¥ü$C\\¦o§8rè1yñ\bº(ðÑ1¨//DYYÏj&+%R8Eãî\fX®§Ünn¥#F4ü &+Çx\v¬Ò!îýÎ¹^¯ FµªÚ\b FÌ©»XV\\ÔÅc T\"Fåú­ÒFAIÔN¥AA$AA¢NADá·ú]ÃIM©C)ÂsHA\fSÔ3\nÜ¦¤UÓ1Æéþ'V*£B&1,êÌfXNJ\bbr:AD+Z¬TÒ2ÄÐy\nµ(íì¤ &¨oh¬ÃÔQªÃâ)Yá qçAüöÎ0âmãÏµô^.½w \tI(!¤H\x07A\"R\vJGÀ?bEô£HAQÞ{é!½÷Þ/¹´»ûvörG\n\ta~zävwfvæÝ¹}æ¡<mèCK\nB¡P¨¨S(\nB¡¢N¡P(\n:B¡P(¶¡£ß)O-k\b\x07\x07@ß§»-J¸?O@Ja¥P(ê©Sx:*èþÉFh#ÿä(¼rZ.=Ø}Dì)\nòø4_Lzê§¤²1«W´ðÊËÃXQ'Þ»(t?5B¡ü\vKÔLm`ccmU>D¥¹\b¹üÔ3¬¢ei3ÆâÖñHÈ¥I<k´îfWlk9ºPãP(]Mxz» <1\")ø*&èænÊ,¤çµ«×ø9ðâÄâblL¤)Hª5ÃøÑåf ¨(çoFPÓ6ñÈÝï2©\rÆM3®\bqñq¨©ïµ¯9\\>Ôð¸<zõº\0ªòé_ëòsËòk¸\tÑ÷ÄÏÏLºO#oä\tCéÈ4àíçÀ>öì¦w\0öï;3Ã\x07F¨¨AU²²ldfÃÐH_pèÏÓIÎ¢vý'º×Ø¡È\b¾ówâÙírô>*5àë_è´r\fð÷AvVL\f5P-@T%¶,Ab¼8¨òÓ2!Ð7× <öûÁðü\"$¬4ËqèL.¦ÌN^6dÈ\f>\\\t|û¸¡¶¨<S78ôâu÷eÿ\\¸ØæÍ½5o.B]ö¿ë¡!Ïï-Æ@[I_~¶ÜÖ®a%lþí= \rÛyÓ¡çãàQ3ÛÌ[ôÒ%¨Ë)ÛºwQ¬í<~«ZãÉÌ¼×<]I~ÐóðdË¢°ÏámÊ²>uOâÊü¤ìBéX8ZFÁÔµÌË0ÈKì\fèª\t`Ós(ú;ª£Bª\v\vM.\\\r£÷\0hÖAU)ó³76sÅ&VÐÑ1]l]-pêfxY!«RÝmøIWÏ(ÌftIlANªHNÌAAØ%DUPO]ÞºÖRE¸N¹­cjÞNê¸ú×_8´÷:xÖ°17¬(\nÇO\\Eµ¶êâNáÒHèYÛBËe9uqù-iÊd(qàædC!ÓBo¨ÇCä8p=¦Ý1dHopSOâÔåp4Ê!£?®à¥ZN~å¡7Q~%á¾ãDLJÅïÿVÐ\tDÐDUP5·aÓ³7{DÊöoaÿærÏÀD5ùyùêZõýiA¥:1Zi?\"èâ¤|Z\t)O)_\r¹Èãè¡G_#ä\\ð´l1,ÀAWpâ÷q·Á>ýzÃE§\0¿<ÊFp9¤§>£%¹YY(O¹k!ÏK>ÐÁÅZ\x07ªÌ}ÅÎX9q\r*êÚ¨êWÑåý±<õ¼B¦u¯«Ð¶zTX%JË|xH¤µK£@ñª¹ÔÌ1uÌ×fÇ4¼á×Ý\0¡¯£ã+oLx^adÖÆìÒEº\fÄ&Þ±8'É_üôÈñI¸ød8ìÍ`÷\x07¾¢+gØ¿¢J¥\x07J<r\"Ò]eôêÔTöCFäk:»£ñØ+k¡¾ÌÝ§ð`ÍGMl7/dpÉ·æ½\0.Ë>T\n'\tCHÝ¼F#½`3k.B§,º/­_/có²í+6¤ÁãøÞÛP·°eÅ8uçhwwíløôÝ;Ppô&Îý/Y;Gª¦æl²­\b:H>\nÈàDÒÓ\0\v°ñÉ9_ÕÂñ¬\rÈñ»ïmnÓ¦³²3\">éÉ 5bëü¿Î¶(Kúþ_Ú,sslg¼ÍOÜÙëI[¤Ñ×M¬¦NdË»ÿ$zîúºÅu¦tNT$IÃÏÉ\tç!\tssgþÝ',ÌUÜ¶Ç¯øËQm\nÊCNj,rKªÐØØ\b\rM\bmåa¢Nü*{¿!½G °`®dSO%+è<*\fÝ0mÂ(\f\b§>âr¤0|&Î\bn^,²\vÊï½¯ZÖÆQ ÕâpuÔÁJä©y[@+!éÐî9Cýº1á%LÃABÏ° ÷øòráûäsvTü£B^3ôõe¿wÝ\v/\\e¿&<¹©Á\"qMýaî.ùÞW¦A\b\"ù¨;²û\x07«ÈbßÃ \bâ¥7Ï?9's×OòGÂÉ7É[¡#½|Oî¿³e*ºq³ò »ì6éB'âNÒTtS=Å\n:ùKÂ¸Êßîö?ØFJë®vW\bdÂæ\r-ìD®tr>EÃ¥-_\bfÏÙ:¾(%9\x07·(\vi(¯CçT@Ê¬¸.ËV¶kÒ ãÒ×Qz\nz'GÏ^Æ;¿q\\n#.ÞLLzn\t®¦£gß\0\fù\nzh#:$\n*î=ø8èðQ_ß¶W'É=#!Tj0·2J}mÖ¨aÈÑWÒâ\n4Hµ©§® ±&çfîxº0ÑVAEEjënBKS<ÑT4©xh3pä»­Ê¸[¾cÿFÆÈ·ãÃ¯\"¾Õ±CG Ô×FdH(Û\"PÄç \b¿^M¼ÉT\n==8þ:º ah«;x´5i9¨+¼ïâ\f\vGPU§Éßä¦î°Hþ¯¥£xâñO¯u.h\"­÷µFñx \"ÂD¸É¹^sësü¯Yß¿;ûL;}çéwCáítEÊF¼Su\x073¸¬þýÞºñAÎO^aÚÇº.Ä.­ckCzzþ°\r¹'~CÉ¥mÚTÃÎÉ×e¾TÜM`c4/ËÃÎ© õõlÏ&¤AEJ¤NÆ\x07¥sS~7}ÿaGü_Cç jZÐVmÄù\n¹(Ç¥$AÑÕPQ+×¹vdËÿ2»öì7`çÃ@W\rAå3r³IÎÿ~ºBpÃ£ ªëúÝ½ÿº¸ÍzDDÕå-Ýò¬¡µM«¼¼þ2qA'7gÒ]®çÛ£¥`\r¶ë¹Áh«\b\rC&û×}Êýj&!m49Å{ñD´Ûê ûHW.ÝÆêVÛë9h>`®ï\t?¹·Éx­Dä­h04?§Â&ùU<ÓnbÒ\"\n#qIùIYiÚY²qÇJÒn((gö¾&wÄ'öø/ ×¤øìëèuè'VÔ[¯£Æ\b*pà+ï­Êò¨´¾íÙÔ)\"è¤>\t«wÐÚ3¸VÄ|Zî«e4¦×Ú:0¶4¤¦¢ð¹±!|òôºÞ'N ]ÒÆ­lA NÉcÅIÜrà´æÞ/'^/ñÚ l\fÑiîI4Ú»án`Åè÷¸µëÚ<g[ãDÈIãxÐQóV±ç$]Ô¤Ä»%]ßDmç\0ùçÎµt%çÔ¼.|wEcÒ}M²ÝVþ¿ÞÊ4f½\tËÿ¶IC¤§(\v)k[6%J­Ï©H¯uY½fcò¨¢õõlË&NKæ³öÏÙ{o¡è5¡P'dÍos¬¬­é8rÊÊBs[¸5<¹WÈà-ûl\\î5ÿ|ßLuª1èÛìy <¾®ËEj%¬ÒåY÷\0O\vS§\0\b¼ÿ¢wò¡!.!}aOLÐõ{ú féú\x07zÒ]L<K·IéÌ¬½Ð(£ÿ5Eé(/Ly\x07)Ë|¨<ÚõÔ­»Fö\v¨¿¼©ZòÈ¼çànêO$mò\f¼zö8#æ;ÅsçÿâýzÊ?çóêL$PCüÈ¡Ö¶uWµÏçA*¢¦º¬ã=uÆÙº´í§t5q$g¥B¡<GÈ8{F'ópTÐ.~O½\bzwß\0lZ2ýîíáðXq=|zÒ«L¡P(*êO7u¯¸=rx¬Í\r¡£1s^\nxhx/æOP2yÆËô*S(JAÛ~~Ü~ï-~C§`n75L=rdâÄ\t\b\t\rEFz»íëÛAAÁ_ÏÔfê\r°2f'Ö¢Á¸;Ü¡Êã@RW° pØõî\x07C\r82)\nS£ØIc#ªë£qâZ5Noÿ0ÔRaÔ -­\fvL|BãDø<EðOËÂåÓò×zÂÛÞ\\Y¢ÃC ïÒ\væªRpøªÖáÖµ;Ié£ÿâJÄóÅÔNCY]-5BA¬Æg/ÞÍß]#ÂÌÚÝØ7ÚãQ nS5\bx<@Zðà[¨âXÂ··#T¸ç&#(:úõ7ðÖ[pàà!899¡¡®î±â»NàK{Q1ù]tw³C¦ËT¼>\\í÷bØ;Ë è5w4oìÅ±øxí'¸pð76n£Ä\0ü=«?3<jðÕÖßaîl\0@±gÏÁoÁL(ØëåÑW\\Ì¼<Ìþ:n_ãaÕº×pzË7P8¯êHì1ãlqðÇsþæbTæ¼àä2úù\bÎÍ¥F P(OõZ\t\nÂ 3dV¾ÕC±òµGÆÎx\x07*¡ßcK\t¶.]Ý×ë0Ú¹ë·`áÆ·Ú\nØ¼´E~X³QXùêË¨\\øb+ºÖ,sÝý^_õë7ÀÎÖ¥ÅÅ8wþÂ£_\f0¹¯\rýzÚYÛ(8b$'Daû4èYµ$2ÔUå!5(\bÐ¡mË¹¸ýû8ãô¥ËÈ(ÎÀ­á:8ãµÃÁTö>=TÂdËGíCY6\"ÃÂpüóÿ~w'\bæ,7\fgn!]Â.ýµP(Ê3@/6íØc»°û,tK°õL<¸éWÒ\b\va·Ã\nBrQx°1\x07Ý½ûa~9Bî¡ÙÛÕøGÏÔëëêqêä)Ü¸qíTÍÓÊX¶jV¿?Æ}ú+YXuÃGãl]V¢LÆkïþ\"\véqù5ëTÏC`ß^ìw[k¸yyáÔg[qñzÌ5ªU§zoâþ²ës,àäé¾³^BURÓ{.k.ºò§P(gC¸¸GÃÊ/¯À±#ÎRÖadWô° \f2<Ð +Eiµ\fAØ±ý\0®Ü¾¼Êº®g§u\"_\b/G5$Ý¸¬ÜV®\rY82[,Ý¸ü+\f¤ëKñþëþ8ºq\"*ëÁ³3!a$?|÷GöÁ\x07°qÍÈ\nÇâ}?cÑ¬!ÈÌ+/!:þ/cÃ\f/&¼\fe¹G±ýx,Þx5\r±ÂùèTæßqº¢+B¡<;(ÖèlÝø\\ùø«ÎaØ¢-8¸¯ÿ\tví¦Û<¹ßs¹blúæ(¼g¿ÇhÇ·X:{Ôºà8|&ñÎßO<.Ó7aÕHVÎ[ôêzVü×ìù¶cùÏ·P_/ïB70B\\P\b±LÑòRPO¹OËPÈ\\¹j*åé´´u!U(ÃË÷é3ûÊZì£P(Ê?ÃÁ{râ/·{L>#ª=µüð´ôa¨ÉAaAi»a4t´ ÉxñE¥¢®xIÖuø¼â¢td$HQ!v1{^b2RsN(Ío¹ÊTZßb¨¤åqQUÅ}çUÑp\nÒe=xÆi+|V×0®<NzæÙï±âl3±aÇ'khí¤P(\nå¿uuM\rj!\nB¡´\t÷ISéD¢.¦söR(\n¥¤ðÖÕ§ÜÐ¢& P(\n:B¡P(O¾¶ýü¼ZìëéjE\rN0PîqéÞÓV¦ZìwYM!Ê,ûCaÞÀÕíëq#:^U\nBéÂ,Z4q¡Ø±{:~|'¦|ñ²îÄ`Úàh,ÛvzêOc¡qmgWçGëâ\0;Y1²sÛgÿFv^.45µÀãòim§P(.GÛýû¸Ë7ÆøwfÂDFGT:FÔ®üîë×¯¿>÷±âEànTâÓK0~á2¸;»*YïöíÇÏ{¶a^a\nBébþýwðtt `LCS\r<\nÄùqX¿åÊsoõÛ·ocÎks0xÈ`h¨©bÃúõWÆdyÀ»Ë±jí*¼6Ø¯O^\f#c¬Ý¢¨Ó8s=Ó/ P(®¸¢×.CµTëáhV#8$ZÚÔUï\v$Ä' 99={z\"4$ô±âr Åµo6á×\"ùlsÓß;¦m¢\v¬ñâ³Q¬Z»3P)Ò_\0B¡t!¦½9\vqçCÑ ¢AGQØ¹ùâ%_C¼¾áõÔ;²ºÛã\nºuã{Ù²Þ»uõjU!nÄKààT&1­ý\nÒÕ<õrehÊÊqò:Jêµ ÚXâ²¢çÞ6¾ Ë!&²¦ü\rádÃCRF!­ý\nòè¨]T\r-ÐÏC¨KáP,ÝÒÛËwÂÓ÷K²®\v=(aýÞ÷¤\fú£P(®H]I._jùú2t9tB¡P(TÔ)\nB¡t&ØýÎWP\vQ(\n¥m¯ðVi£:ÒD½±¾ZB¡P(mò(«´QyÊ\r-j\nB¡PO½«¢¦¥\r\nKKÎÜÊ¹Yt\nBé,èy¢§)8uå\bÈFï¾îÊlË$Èº¨¼:ê©?/Èlbó·ÛñõÖ­Ø`ÜTÚ\r»ðýmî×ë7ëV/>Ca\nò)ËÄÝèÛ©sÅÌ¹ïÀÙPø8ÄÅÇ#6!â¹ôgÖS8q.^º²Ò2vÛ×·/)îèòûwØ*®f(© i\t å#FªÉ h(ÇåÓçÀáiÂ§i\b\0i#²ròà7¨]eðö°C¾%¬ôÔØ¸ç®GÑ_B¡<arr{Î·øÆj=zùø`ÇáóÔ(Ï²§~ýÆ\r¼üòËì÷1ãÆBOOïãúý2§¾åó¡..6}úãÝy#Q_\0¸.Ã¦bL`of!`P\0¤R+s.«D0ô±Ýì[SúÂxäUâí·çA\vºæB¡<]îì[¿¡ÔÏº¨0£GÁÍÍõÚiì|¹óìýÇàÓ6 §-RþØk¸>§ÎFx\\ñ½Hª3ñÛ\x07¡ïb¤zp¤ÏCJ0þåA\b½FkB¡<eÂc$x{ 5Ä³,êk×o\"?/_|þêÉj.·JbÎbÙÚ£¨Pµ½3\x07v=`¤£\rc-6\f§Y¤ÌHµÑÃ¿\x07Ê²åóÉóTu¡§üùÍÿp!©[\\\t}ÆN¡P(OÐ°3ð±vV¦@ý9¿\r?³}Æ2©a¡ï;\féì÷ÒäËøqç%ÌÙ¼[vLGCÆIhöÞ¥òï\r\rÀ¼W¢±:Vÿ\"OÈôú`ál5Xú{@ý¼°£HÈè/B¡P\")á!¸V5\v6}ÉlÕàìÆØÛøÜÚ£\v­ÒöèhèéCµ±e\"r¶ªÚxÅMÆqÅúWáÚÖU8ªÜÏÓÒº¬¢ê:h£´´þº(ÊsEG­ÒFiuÏåè®ò2¦=×ªvÞY1!óQ\\ÜR´%¢2(ª*t\nB¡tèíÀebÇ'k¨!(\nòl:B¡P(í:=tAgKÔéDü\nBiº K'lhQP(\nBEB¡P(eÊ´IÔ\bTÔlìÆÐ;¶ÿ(}òÊ³\rF¿»¦§P(Ï\f®SWcì¨°r5FÏåèw-­ûÞlk_[eÿ6±A'Å³-?_m?Â7Ùù%ð«¿£ä\vÓX[&9ãÆßðÒË£ð÷ÎmH.oûæBSpÄ)@«UbÍÜúáãùXóÞfIåÏ¾ÆOý½M\nP\"¯¡\0çãEpAÇÄV|:Õ\"BéüYÚbâìfÆêö¢[à+xíe=üßKÏ½mKQïåíÚúzÝ¼Ånûúõ\n._¾òFk@ìß¿âD\v¾ÚöÃðúÑÃPù±ç±dãn\fü>æóáèàw»0bÁbèJ+ðËºÅø;Ý\të¾\\\b{%ßÂxC¬íºA-/ûc%èØu!øó¯ã\x07¸<}Ì]½\\h(Ãê+\\¼5ÀæU8lì4¼ñÉ:\nÆr\\?ð9d>ah$Ä;¯bíËM]32DØ_¤òÆÃÄ°¨¼\fR©f®½°bù»Ê¼ÊpÇæïß¦\0Û>]1t}y\nÒ±Ì·Ýù©ø#:\n)YÅ(\r\rÃo½MÆ||´ýÜsm®®îÚ¶è\níQØ%\v\x07;[\f4\bð¸¸y+\bFÉCãªkbè m`÷\0?¤<\f±¡^pæáÐß`Øc\blÅÆðqcóæopòÊM¸ùN~e\bn%VaÂÔ@Üþ;B¬þ`-=G¢öÈ\bÖôAÎÍÃ8ZÆ©ÎMLEA­æÌ\b^,zba*¶lßãÃ åè\x07Úh|÷ýAù@]J<úã·o>Å¹0ÆÏÔKçac\\ÿí8ê¦ùñ]Ý0pl\0¼ú\x07 R9°®MÄÆ\x07NÜTU{ÃHt/¯Iöè.MÀ¾ã'qm#½£P(3'T§·{Ëå>ÖÚDeIPï5²8ÈÕ¨7¡y¢§£¨UÒçvÊî+Ï¥§^W[/Ç¿==úXñ¹²DïÙÚ1«à¦WØ\n7ÄÇ@¤ªÛW!Ïj 4Ï#³¤`>&:¸bÕbìÜ,¦¾5«PT]Âì*ØqK,¨JÙM^\vÌ'ø>ÙµÒÄHFFtJ{\\ä$'#%£\0}câJêEH\nH6©ý\\Ù.¨¼7ã\x07R\\ûfÒSwê×²1g¡Û\"¯Q7ã Æw,ÂÎ¯VãJh\n½Q(£¾>\x07¡9è1¹Vûs;ËÉÎDÈÈçÞ>Ïõ@9Icãc\vº²ÃØkpó6º©ÁÌÙçN ü.#ÚçÃÐcØ Xs90°µAYj\t\\m89\f¹í¦i®¦®ü>tÎ2È\rÚÐæ0mâl8¡Ý`¬oIÍ1âCs\r1wã\"\vy)E8CØjõ8uã{]tÌóQZÜ\"¯ÞCQ¶·*dP×Ò¦w\nÒéñébZJmz»ßÿ\rdÒ|¤fd#.9ùå5HÈÌA|vý|a©/@jä)¤1\"Ø³?¬ôv\t%°D?OTW ·¤µõUÈÈÊ\x07'AAIJKÊabeAY\nD¨iêAÍÀÝ,ô|ù\fþ>Ì*\tTMÝàd­ì¤dd\"¿´ÜF1\n²\và8\0ÆrÄß¹¿öïGBe#JEªêH#_¯¨´ùUòntmn*\n²6²J~2¯5ôîÙUQWª:BÓÝïÊ´ëkPT§\x07\x07\x07ÒÒòç~+Ïå*m]²uÆbÝÞ¯qþ¸N\rB¡P8t¶NÇ:º KA?wì@Nf\t5B¡<§PQï\"Hkpçúuj\b\nB¡¢Þ6êÔB\nBiGY¥êH'uqu\rµB¡PÚäQVi£:òZÔ\nB¡<\x07:åÉ¡®#G7\vDG@,ûïÞ±4¶´¥zÂ\n;E:maiï\ns2Ü/xä8æÝúÀÅX «!÷ÙËÞÅeIw÷P(®\vY£§)8`~ïuå\bÈFï¾îìØIuQyu÷ßCìì1hÐÔçÇâÈÉëÐ³ñÂPH\vqáÒ-7J©§NùÂÖÍ_éáÓßCO®ü¹MÏ\0ìß·á¾Éb\x07{WoLòù÷\v³(Ò!« 8pýüoéÌÿ¤ìVN>xÙ×ü±âhùLÄëó&@}iÊxÊ\\ð¿óûÖ~»mg`÷AyÞ)J× ,/w£o#¦Î3ç¾gC1âãØ6]Þø÷ÆÅÀ5\r\0¹CúÍZò´døÎ^\0w7ó.c*êY¡W!k6ÐCÄÏùWéêÛãæù?E:R¾&þøq\x07Ö¹«\0¬íû¯Óæirs\ny$ì\\Òû[ÓºõÙì_W>1Î¸? æêo\båJuçÖoøV8\n¥\vS¬Kßâb\fÖNÈHÏd?é÷^ér¬ani¢Ü®k¨ÅÀ7¢ãå¿óÑ2\f¶WÇÐÑ£a1*ºmh÷{\x07amî?O\\ÉÈf]ÆR¹ ÷{a÷QÅß·e'ÃÖo\ft*£aæéêk;Qêð*õjþ},qô÷+¨+ÎÁ¥88\nðÕì_ùÊNaï[Xµa9vNÆGoDâ«¨/ºË¥v9ÈÑé°PC¾óx6«Gläu|¾ý2g&?²jÄcW]#Öü\nßå÷a\\\t\x07?\\9±\x07¥Ý_Cß¢Ó8ZëÏÆicþû1nùwpWË£\"BÒáái£mDySqO~æ\r¸£\to£*|þý~L9\vÅùxÙ\x07?ûj>£àoR\n}= ¡Di[±Õ8tì\fÜç />Y.êZxwÓ¨GÂO§oÂ¡ÎÀÄX\vLCB¡t1íØå3|qêâíûéÛÄ§TìË?æ\nº-uùðí5\bÑa·àeæQôeØÕ®wO=uÊ#ãh'Ã­FÖk·ò>¥àÀÀ¥<-*PTÉÅÈ>ÖpêÞ\vÚ*ð0\r:\t¾[¹A±\tP×´Å\x07$§&Ëí\t»l*>8M½\0>yÚº0ÐÔ±~ö\\Ì@¯\tÓaáêþýÍáÙÇª*jàß`½y:Í©ª¬«SÝ>p×OÅCgqüÚMÌ´#çààbñc¼ZñBwm%GWp\vßîÜL\rK\f\ntT¦ç×Ë³Ù\f\rWxp¹H.QÁÈÑ^ÐÑÐG¡cðÚX;ø~Î&2MWiü´X6/û!©HÞ:çÚ£6D%i(É½vuK'ôõëG+Ò)M¹;yfx{`ËG¯ÇG\vúÂwì|þõçX<Ææ¶2g6z÷rÂì×æÀÇHFNÅä¾]Ê&TÔ;\0U Mfc#£v>Mpjkt7¶@¥Óx\fôgD²çÁï¿Å¶M;PÔ@^b$¾ÝðÎEkaÞ¤á°;\nò9Þ`l¨Ë.SÈh:³.áÏ6 CfíDuU=ÒÃnàÇþÛ~8Ô3ûoótX*0²²ÇýPúÎæ§mÎ>û×50EUi\tªë®¡Â¸7úéáìåPÿ%h#&³I@À40l·Pón÷êzUxÚê±SÜiñ!ÖW|5±õ«-¸Ëºº¦q¢cbÌ4&äU5-&µÍÐÙóÐÍd0ÙIPÉ«M¹ußü\fµAcæð>ì¾²ÈkøqÏZé(.JhØøÎX\n;+S\bM\f Îø2§ÂáqH\bº½{÷á¯Û¥°³ëÊ_ãjX\n~Üø)Îgqò÷Ðë;¾ÎF]Æ´û½ðø¢â÷²ß#¢¯cìåøn6SÊ±wÝb8\x07.Å1ìñ]D°X%óßa½úä¿6 ¿É±·éæÅoÎf¿_Ü©¯tÃµoäé_8ã>Æî3ÐP\b-ÿW±b´dz\\Þu'.ßÿwk±:`\fOìDlÓrOSÇÜKÓXéo,Ætæ{ÜÕ_±äËìþSÑ#ðõ¾ýh(KÃûo­d÷Å3\rÓâÈaòcíúe²^Êr7²\r¦\r°±iÇcÙÆmì±È?·#ªüòUÀº½åeÿí¶TëáÝÏ¾É^}I(Ü'aühwò¢¡3q<å.5e!å\vtç>g>lÚéÁ°:[LÆôéÓiÅ£Pº )á!¸V5\v6}ÉlÕàìÆØ\víºðäãnD4NG\vçYÁ27»qñ¯`xk<øât¦u{Ð]:À\vPzó(¢Sî\rÎ°±sEME6JEMí\nYa\"2å\nn$´4[¹­À'T+b<k)¦¾9\t×~ÞÌ¦Ø\fLÐj,¾ÇÈ6<12\nä¯©iêÃÊD\x07q7Õ.Oÿ¾tÚCçd&Ï7ê4\\\\ÁæÉU\bùwå1+ÆÆ£´)¼¡Úå bÊÌ$x¼4Ù§pàR:­TJ\x07ð¬-èbíÝ½¯feËï%¶n^¨\vWÞkº\0ë¨¨S(\nå¹õçuô:B¡P(]\x07>Sç«\b¨(\nÒ&² \vÕN$êõ\rÔB\nBiGYÐÅÒÂêi6´¨\t(\nB¡¢N¡P(JbmcõÈaÕu\r ®Ê»·­¥§kÙz\x07¡%tÁûKf³ÎüF¿»¾Ý`è@ÛG§geÿXá[ã;óm¼ñâãw÷\rÀ¦%£ï§ßHì?°\r=Uh%¢PsLæàÍ7æcÖ ëµéî,ÁySZÃ°ìã±fÅë0ìBÂNE½ppµ7].tÄûß`ÿþxÁ×íãëX@]MæBSØÙè>ø\"sUðÊêÍøøe7hª«?4|{hj[aâàV³Û$ß?~¾ô¾p*ªj°25x`¾í|&X±c>]ðÒ½F¿?¶}±ÞSÃúD.Ó7Ð\nG¡t!4ô1vö[¡q[>ÿ\nÉü@\tôh£Uµ{-MCd;Ä2ø¸¹aÂKýyõ2jÔ­ad¤ÖelCgë ÌôqéèÐ3uÇK½Ôpj×Yø;ábPÆ¾¶SË½Ù[\x07¿Åw'±~ë§°7ÐLR¯Ö¯È\0æãÐ'\0ýmû-¨®\\\n;=.NmxC?Ãì>fT%ãô±kåbÁ¨ÛJÌí\rsQöüæ¯Æ¤.H»}\f+·Åøßb¤:#ü8µó+¼&Á/¡§Pñ¿oÀ!ÌëbðÁ\"e¾SÔ0ÝiRØôè½}\x07âSlþ[£¾¡3ßXoHðÓÖ/p)(\n/-ÝI^V(M9ekö('Â1uínDøÀ\0Ç ºÖðëñ!x\\õû§7.FãuÓ×lÃaé¬~QõjØ·ø=D0&)¾¥Pº£'Í\v7§âbPXQQT$f¿úèr°ãx$Ff2\bCìrpâ|;.\"ÎÓ&ÂÑT& ¢ÍÌÕwï@BQ-õÔ)ÿRÔí!±µZ%8pi/4Üä-Ms\vìYñy®£'Ác\f\rQ¦¿³§bñ¢ç=^CM|ôö\nYy¾Ü°\tW\ve¨J½µï¯EÀ\"&\n Cáí¸Ê×Ñ¥x{úÛ¨±ñÆ\\\bTµô7Öï\v§§\r§L°ß|¼Aé0ÒSAIL({^E¾/ÆÝAÿ±Ø}C^âk°mç¯PåÉÚ<\x07ÇÃ_?þ­GCðÒ°¾pú)&x©ã»7¢Áa\bzõ°TÍH×7!.¼cºñh\"ðÍêUÎÈÇ/_mÅÂáè£ÁN«ÛwÔUøP×´BZðVÐåHh£Pº\fÖ(ÍEÐ~.ò9Ûu<ýQ_lBÙ_!FäÞo_Z_c{~ÀµËñØºs'nÖãâï{p.*¿KYz\x07@0±RÉB&#:¶Ö®¨¨5ÃêU+¡ièáÖêÕ#3½\ba'!a+©D\\\tÇã·/BÏñþçGvø¿UÛF¦W­±aÛ§ºDÚDêJQR$_øÔhô D¿Ræ¿«çî ×ðîðÐ¤tÄ9©¾\nÃáÉ;sê¡\x07¡3Îü!_âPïCÇ{<o[SÖî:jÛ?\x07ri%}*Kxv7¯V\fþH¿}å5÷^£t÷ðßi>úùÛbÀìÙ0£ªºáé(«®GRhTü½!Q1Á¼ó\n]\b ã¤ãàÁ3ÊtdZÍ)®C&Î:ÑÂ»5ÑQwð×ñ Ë;\rxq,&wCwï¾4e\"u`éÜ\vKÞ_\x07Ì8}ø\r%\vgÀP½ëÜ#èÝ®#î<eqIìwßÞfXðÁj|²~~þí/L;Ý¯ÎåBÏo2zYÎú\\F\\1wãÈNeZäÒÝ{¦P)O¥>4´zaê¸¾¸|â ÂdL(dLBUÛT¾ìzÜýå\v§xûz êzlÓ&MÒ]Í8¹\\=TÅÿ¿ïbîd_ôpÕÁ\fq|¯Y¾\fAÕÆl¾ÅFXð¢+xpËÀà9Î\\\rµxddAª¦[ç~Ç×o!»@¾:YþÕU'¬^/6ÿå@L¤w¯aÄxüzÌGUY5vîø»2¾Ü;çáÞû³V:\n¥«ÝG©÷ÃkgãØéd$DÜÆÑÃ¿ájb%\fõ\rtdâÒËðço¿ãFF-\"QoîsC­.c:÷{\x070`îjHÃ!(ª~},píf¸Ü³µ´C¯îÖpí5ÒÔËÈ)#.!1ÚøjËk¸yé<ª«Ä\b»g?ôÐ«GZ6ÌP;¥ðñt¡â®þ_8\nÁ­)CX\\Ô­ºÃÓÞ%ÙàÖãô\bøôî¦ÈK¾s·\"à8\fÕwÕ\b_K¤´ÐÝÆúü:ÄÞE??'ì8xíiho[ï@¸ÙIy0wp¾9\t¸{ß9Üý\x07£»µå%`D\\\no8Z¢ÙwëÆuäU5ÀÔ­?l¤¹\bNHcÏÑûaÐF-Üºn} ·*\"¯^\0ßÎÝìMQq1zp5àú¹ë5u¿Ûx #òê¹líaÃ£#ñ)Ï'êú¨©-o_`ÿTø¼ÿôù<.Õ`ãÑ\væê<v2³]fZr\nïåE i\v+Ýj¤æÊÎÒ¢OoHÊÓqéV4T\fàã²,D£ZÖ%.\t]Ð¥3²`Õf\\\\ÿZÄCÿbm\0>X³§ñ+º5ªSCP(OTõFª«¢hGÔi÷{'¤(3\râf}K2Ô =%B¡P(¾ÒÖ\t9ºwGm®,ÛöeRÃP(\nåºº¦µò\08:\bByÔ56¢ °âº¸ºZBy\x002ByÊ¿9ªMíC©S(\nBEB¡P(g\vO³W.Çx[^,OWWwm[\x07tö(ÉM¤5à\taêÒk@Y\0(ÉGT#\v[ø¹#?-\võÿ°W×Ýï¼êÍÃÍÒ?E:ÙjÝÐÏË°0ÔBFNAØËÈ¾'¼»[ (+íØòÆµ¸÷§Woôéá\0#=UdåKðÑ¶¯pýÄy=³¥tny\nåiQÆQùàÞè;hÌÄ¨\f1\f=z0[pJ2Q jjè©sç@«q`TÄ¼ò®d+ÔSï l¬ô!I¾Ë HÙ}Z&61k84þÅØ+{\vOÄÝHù×ùS¤£æ1Úu5H/¬ÃÐioaílß±Zß©¿pÔ8íÛÒô÷Lie40ç­e\bôr¦æÓ-JÃM\bûe3àsxúøýk1k(­ðÊD#§GÇîmËq¹ÂÖÆ8òË¯øåÃ8øË\tDåÕ±á¤k[´ðÐç¶\vHÃÁÓçðÕª÷`7fQóØé+mµ¹\x07þ<q&#¹äR¹bõ{a÷QÅß·e'ÃÖo\ft¡2óôGõµ(uxÎzµKÍEÿ>8úûÔçàRH\føê\fö¯|e§°÷Ì-¬Ú°;'ã£·\x07\"ñÂUÔÝÂåR;Ìäèt\rX¨Ç!ßy<FÕ#6ò:>ß~D3JY5âÃÂ±«®ë?~ÇïÀrÂû0®®ØÔF\v¼6a0#ãÑ #Ä¸±qöj¨\fÅ;ÃñÃfuÀÍà$¸ùù¡¾ U*6¨¿½{Ã´0ïõ1¸¾.B¬ý6«¿ÿ\0\rÑAØ÷EæSLÙ\r ­.Å¨±SÐsd²{.f(mé2f\"¯ý¿&U²v\\±ÛìÌêuÕîî\b-GäüÕÕ0îïËÉ¯«©¬íÐO¡üÛ±ËgøâÔÅÛ÷Ó·!N©Ø-ï]ô2¦â\n5Üóâ%zxÌ^ô? \"©k,ìB=õÂÑN[%à0.J[~ð´`*`%#ûXÃ©{/h«ÀcÂ4è\b$ønåjÅ&@]ÓC|ÈÎ®QqMCÃW¾n%àó§­\vMë×±BØkÂtX¸º£sxöñªøå7XAoNsª*k!ãªÁT·ÜõS±åÐY¿vóg\"`Æ<Ü¾ò~ùãWFÝWEÞ^är¸ð¸ì\\í¥¿áçc¿\"½´ÿ÷Õÿáìõëè7b0¸}ÆÁÉÑ\fgx1ñTÕUqãÊ)lúñlÕJð{L)¤U±8Ô¢ÍmÉÕTAuÙ½¦ÊS\v «ùtÛ­ÅgC5oröCÁÑ¸ûÞf4*!\f¤Þ:ò_Sr\x07wòÌðö@û-_ô/ã|þõçX<Æ·ÎÄu?BKãÞ\f:5ødíº.#èTÔ;\b2í«jIZS*ÜåÝ?²\b\vçðÛ8\f}/Ìì-ÃõçpáÔìÚ¶52Ô@ÜÍøâs¨5ñÅáýQïåü´\nyZDË:Hº»ðê½ÐvMó|¡Â\b}|H0._¾½?ýÚ3ù³áæé4ÇÂÖ\0üÆeË kãGñzùÛ(kj 4«l|u¥Ðüó6¤±ZúÈ\vÁÙËWpôà+Òãò VÛ\0® IQÚ¢ÍmYS\"³Ë½¹Lû÷@EIýS½¶ÊzZÁ)§HJÊô8¥Å¾È0ÜÉAAzBÂB\"b÷ó8j-ïY¼®×YME½°>IIòi_³2ðâU6|(F\x07ú#ìØQØqF\bbÒkñX\v!á\baÂ+#rêé\rÙ¸Ã§æLðAj|ñÌ³çá0\b/\rM.Ì¾÷ûóúÆz\\;ú\x07\fÍÌQ­¾¶R|¹\\é@*g_Lm^tÇÖÿmG4i²î3|\böóÅþC×ôënøáÃÁJ Z+Ì}oúºûôvÉØÆLÓ·¦ü+<.WÏ¼Æh2EoÛÑÔ0¨©®ÏÜ/x©E9Û2äöiOÛµo¿)3æâ½5ø;\"u¤³<X-¾²xjç%ÏòÉ³ýG%qG×V]Év]åºÇG'\"CÕoÏ{³^¾¦*¸|â.\\ÍDFd\bÿ|WbKî90sõÀ/c?Z¼®7Ï]Ð¥\b¹\0¥7\":¥èÐÛ¹¢¦\"E¥ò¥M7WÈ\nY,[#¡54¤ÙÊmL<¡Z¥úæ$\\ûy72«äâi`*Vcñ½8F6°áQ IÓPV&:ÈËXádóôïK§ÝÆ\tçd&ÏM­^MX»X¡0.M¡23\tez¯Å¬\t&nÁÂ3ù7 k¨,G[¶ÀE¤\fÅ¬SÌ§ä\\Ë¶tÑ\vtË²ÊíêÄh¶¾=QiMÄP]ùXùÐò±8)í) iÆ¬^Qhæ#ÇíþÉFùÚ¤û¨yxçû7¶ú¯m÷OlÔ<ÿÿÖ^Oâº?\f2pÔt¤¼±[tå\f2¾ÿUy-¢.A]N9ÜÖ½¤Ä6Ç¡ÄòÅø:%\nIÛÐ]:+?ïh!B´x¥ ³Û±ñ-¼¸0ó>A'2ñâãJº\f\x07¶ïj!Ä¥ù-ãg(2ÄÇÞt¹c~:í!Ïó½p2I5oEzäû£\bº\"nüÃÂ3ùgmÔ¬mÙ[\\ÚLÐñÄ½=ê\vË¾{\x07²ÝòÐÐtvG¯±{kÈ\rUqS%âB¾?® ÈÍYÝÉ´ÓÔq`tÆóu[ýSu¶ký8Lò~O/D¼ñ[×ZÚ°?ùÞoWCÝn¨ª¢Kÿ!ô=u\nå_ÐÖ{ê\rÅÕ¨ÍBUd*J. ®<&#Æê¨¼Ó¶a9}.]D}^ëÉtût»Ä­a¼2âÅ¨ZjÂyù\x07071!ìy\b.,¹£:'Fý íì\0Ûù¯UKÆûy\x07vçÃp 7ªsSØsTÌuÙ¸9\x07±ii¸Y¢./÷¾ðîß|<6?äµ=ýþÐò´ÛÚÐïíÂ37åq]·=eì¾Úæ¹\t¤ØíÓØütDIðÞû=oÀßÈÛüåQ¨J»ËÆ%5Èyåk~¾P¶L­ã´g+M\v!¬^ë9Sö&ÛV|);¹äzT§e°ii¹Âqé;µ7¹$¬noW\fÖ\"Ï|=Õv qËÂo°×ØØÄmÿÚ¥÷ÛVi¯æ¶&u\\÷æ=GÍë¢ìÍóÝP[ÎÚÛrÆ$e}P\\E=h½­¬k>BÆÏû N7ºÅù°·ùù¤qàp¡afÄOw@V×v¿\tTVLo>íøÔS§P0Å'åCÿô{ú<Zø\vÁ¬°y½¯Ü_y7ÝOÏ;¾÷¶rÂêJO¿üJû=óÀ~¶¼NGÆiÉ|Ý¸ÎÆ'Çìß|ã¾ó±jÉ=¤¶Â×ô\f}åóèûôcóc>j\"{¸5ß´H+õ]Ê\bÓ¡Ciåþñ;\\}Ø\"¬ÛÚ5ì~r<¦ Þ¡àì)ä»ÂOØüR¶«ÌwáñÊòæç#ÝÙmÅiÏV$o¡Sµ°w{ñ-_d»I·±¬C¿µkïÖe¥$3Bzü¾<·¶Âsmþ·­ü?¨Î\\¸ÈæU/Ro]ùjêÔTöxÆÞ[ô$(òMÊBò~wÉÇì¹HºÍëAëíæ.÷FX¹]'wEÏ±-ñÒéÓÎþñUèLYÊyUÚ×ÇÞ©Rì[£íá\0Õ naÛbmÜ+«NË¾ïXkÈSÑ/0ÑcíMÇïïâ'7TòØÐVx\"DF)+<èùÃ6äø­ÝîRNúþ_qé(%¿äFß-È+ÄVä¸B\\ùÖóíË§·æ[qÚØSa³Å'6%6rÿâKö¯\"®BÛ»­2*î&°épÍëH{vxÚ«3¤L¼óã<+êS{öç-òÍÓV»Ï6d±EózÐzû^~*øê-®ûÛhW@+¤EºéÉõoï7Gµézc}µò Z­Òf4Ò\væã' äÆUvò¡}GÜÌòÿ:«ôLY¥zC\voKá\tïx9ä&ÜÜSR31\bÐ´³8'ý¾¬HkjÛÍ&\tO<4Å²­çûÄ£#bUÜfxâ=1$d¼\0{ã?Â|^G¯C?¡äÒÍâ¦GÒ\"y&7nbb\vÅMü%Ûd[¦HO1¤GlDÄFD8Z¯­8c«Å'e®N[Á^¦={·WæÖôÛ³B\0Éµo/ÿª3ÊWë4[×3æÛmH½ Û×öêéí±?Uáß°ñ¬¦Nd\x07Ëµîå!e(ºÛöøæ7Gµé:By<jÒrX\\1ºÜ¨ËBo±ÝÙ&Ý×â¼ûnÔ$\f¹É±\"ÚÒX 7orcNþzkc$dÒýÚú¦O¾ðöóf+=ïæ\",¹ñ*¼P\"ðm'Ý¹z>~¬×Î>mj ãÍÜðÉ¨rSoÉ{ÜÚu-òNº¹wFÊFâ¤îÜÓâ8Òå«8É\x07±M/ÿ§Ì?9wóóµça¶jn³öâ7/3±U[Öön]fEÖ6jmm_Éß¢XÂ×<ÿ¤Qø :ÓV= ù'ùj¶u=#u·y£EÂ&^?I<zh^\b=w}Ýf½ 2ÙI[×Ãæ×4]VÀNäô_C^ÛõôëÚøÄ?¼¼cf¨ÜÂ2y¯©ôøµÈÊ.é÷ úJ[\x07¡%tÁ¼ý°ûë½(þwïJÚ{õÆ`avIïét-ÙW÷*QPÆ¾¢·èÓØúáÒ'rî¶^i{üÛW¯þ+È\0(R7ï§?â.Hg©g\"¯§õó¡Bæ¸*\nÆÍW°æ !#Âjpjã|ìmÿ-^CñÓàJ\n°áíeH¨hÿM5^_|´}1µëqå»p]Ú+ß±Ø½ãs¿ÑÙÌC_ië(Ìì-ác%ÀÀiï¡'Wþ\\Ö¦g\0öïÛ\0!ï¯èblh[}µ?E:®SWãÀìçKgv½ôúÍÆºÕ\v Ïå´kËrf­Þ[>Å§_}/?G\0K³.QgÔeü´\fök>@Òõèèzö0Ä(ÂÊÞÂG?oÜØ°|9¯ø¯øèN0i8>9?É0aßÃ\nÇ¿\bG­\\ìÚq\0ý¶B¶ÏÃ¢5`«£Ý)íÓ¥ºßµ5¡¯ªöLäÕ[G\v1GNAh:µÚº¨ð`ÆdYyð²w±5;ñZfføF°3×GRÄ8hXuÚZhèh@À,ÊÉDjA)|qþÒ5\fðòF]!Ò\nKÐÝÍñ1Epíi\r->\x07¢üTÄäV¢Ghªp5¡ô¸\rì¡QñÊtºõ¯Âù[S\t/^Ø¶höº\nU¡ì¬õ!©«AHüÕGW·ÐUç£RT\x07mu)ÂãÀ51*2e0êAEúÚ:pTT|K1ààè#UTf#>³Ý½l ÊXÏ4pK*àéi\n{U)õôD½Ar(l9ùaèõöIAq½\0#FMÄ,ßbh¤%ÁÙÈð\\Gõ§4)ãÓ ¤-ÈóÜý'éÈä.Lg¨gBNNóÏ·øÆj=zùø`Çáó÷ÿ6M\x07¢·y®Å±ÛöÞXøÁbÿü2¥2dn_ûeññ4ö¾¼Rù+¢ýpåüÑDÕÍ?qÎrãGs¡\"òÆ\x07**8µç|§´Mê~am\túË¤P(.Jëå6mù\f½óá}á\f-¦bH,>sÝ;öVàæÞÀÿ5½;ÿÉ#ñ.ãÜ>ðtvß«³^Á¾½¿´HËÄc >.ÄKa{ööË:íô²ëè@9\nåâpjJ§ÁÁ{râ/·{ÏçAT)z¢y¸t#ÍóÅ;û^3&Æ¶°Ös©»roÁãpÛ¯ÑQ«ÍÃþÝÿ\x07Umk¼ñî;Poh¹µÞ\\$DyüMQÁ¼7fBS*ÏD\rÃdPóöÀJ=ü¶§ow¾éj»¬¨^Ýy\x07zè\v\x07á\\üþ}Ç U9¾\nÓÞÃ0¾·*L@bV|F¼³ª¸÷¶ÇßÇ\"&\v{­2xÛ\x07öBlaõ<Të\fÀÔ¡\\Ë\\Ñrwb3ØsLé[Gr±pa/º\bK^8t|ð»Î8¡'{ÏÜ©.|Î@ON6þ|~c^W¦Ó#ðUèÝFZ\rã@yèa¼Ý·çÇ;öÀnødôDâV½úèåâß/@(ìyÓ\x07!ñÂÜxa\\ÏzüÍE?½\fì¼§³ùWóêÉ^øî¸\f³GécËÁ0Ò6@Q|47ÛìJwó.Å©7^òc÷Ë04.Pcû¥-»õÁ»áÎÓ\b-ÑÀkÓFâüçÑ{ÜP|ÿÍÖg¶.÷ÑÑG D\nå~B\"\"ñêÅQ|\bÌ}ëÈîï¡ëð*Æ9%cßé{£ü9­%#|VW]ßla¿Ï;{~µ¸î¶8øãXèàô-8gð}ÊDLr6ìöè²¢X\\Òióæ;9ñ{Ù<Óãá7ý-,ð2ÐP½ëC­ïR¬Y*1l×Ö¿p)Þ\nKÞ_\t2 ù¯\rÈ×5CvE9Ô<û`Ñ\nù+÷üóW<q-ä ®¬ä.&¾û1V\rá£¡\"YÎæxkôëqêqy×Rü|9ÿûn-ÖÄ;Ë´j½ù)H*«Å$ÿ{épTô±úÍì9â®þ\rgÙïÇR8»};ÊÒðþ[»PÛpýzÖlSû\"LÃ½__\x07WÓN?8ê4ªÙ4ËùñÀ5ÕÆè¥û5÷EÆÃ[¡ÒÚÒZÄÈÔ1LSKywôGà,g8:(ËÁ¸ViËäA°>þoz£/ÇÂ¨ã8\vË9\v:u}x¨7¤¡¥\\ÙB¡´¤4å.®Öáw~?»qöÆ6B*k¿U/¹DV\vïiKñÂùìvyÂÅûÒãHî\r´+üã\fRF.ÆtÆ[¿üÝRI{Àýíí ³#ìÙÖ)íÑe©wænJ'/Te%\"¿¸J¹ÏÀPúÚ\nªëäÛ¦BÈD%ÊN´´õ!UÞ·àO_Ò)zx¹\"#:\nåµòW44t´ *+ãð´ô¡Ãi@Y¼;LUSºZj(+,ECS-àñ5îK§=äy.eò,GÞÿÔê¡ª MA\\V\fqô¡6!qú¨*+j7<É¿º¬b²mÙ«¥\t.KåûÈ{¦dÁgg¥^S?:C÷ûIæþan¬|¹c`de-©\bé9ÒQ ÏÔ;¤ðÐû[%-gâ\"+¬5GTUÖfZ\"&â'y§eË±ù1Õ4o¥ÊÐ<ºêþ?{wåuÀü¿÷rPîKP\x07**ñ$<RÇTc­Fã5X§éÔ$uª'¦Ó©±cÚÔhbf$#IPI5ã±Iñâ+×\"+×n¿]Ü&¨ »þ3:ðx»ûÞÛÇþ¿·ì÷¾»\rd[ºÝO¯GÈ]Ú¬×7ujw×><ñ¶åÛ­clÿý¾6>èGOc©¯¿{0ç@'¢§ËøúQ¦i\r©,¹Á|9§NDDd!ºRWY©Íª3DX¦gÛ8¯ÉÜÆ8g\x07Q¨uq1«Î\fQ«Ðö^´¹µúÂ=Ó~Ö\vÑãfàÎLÎk²hVCl²®Ëøè):%1Èíqyï´ê[ûwe-À?n#\x07ÿ¦NÏêü~t#ãcj\v8àDÄP7\x07*gQÁ>¦ïE¼C9Òß´{GöÞá¦=Ï|#àÒ½éENXþâsO¤Íã~ý;¼¶|b?³²uBÄ¨0¸«:L\x07.î¾¦r.RÛCg§2\bðæ[ÃDÔÿ¤r[DO_¿¼÷V.Îa¨?Æd²òÄ¦\r/c¿Âc° X°ÈX¬Xò+$Î®\t{TÁ/ 1Æå}¸ARòDÚ-W©a¥õø³E+×a~R\"lÚ·,ðû%6¼ò²©ÜIÑ!ÔÆ!yó«HÞé>®fg¢L£å!¢~3yÖ%8 eÍjÔ:NÁÛkâ9(mÅ!èg¨kr°m:¼Ãk°|r\fï:R/$Ï¡µ­|Ö>Ø<c4¿rõ>2kTWì³·ábÈÁûßÃÔ8Ìñ¾O/µßV8(Ø¾m<sÓ±;5ËT¶xÕfxØáÜ¡}8rQ×!ÂIÊ\fìË,Ç+/Åâz¥-jò>GÈKgEB)ärcIÏ}Úÿ¯ñÚÆÅÊJrñÇ%ÞLÜ¹òí¯±mË÷X½lL§âèE+¡¿ð1ô31/Ò\rWÒÞ»ü4dä´`Õ²Pìþà0'=¶Ùsñ\rMW[k<ñÞ\\±'.à\\!\\©÷R!AkCékÝ½fÄRÓîi2yûÚÍ7á#á;ÔJø®±ÓÆ 6'y×«!sÇúEQÈý&\rõÃ¡r±Wì<ªÅðó\vÅW6R¸}0\\U\"!³±åõ·pSï!\bMÚ]a^ßþl\"'ÃUÔ¼oOâ«ô°\rÐaC ´²FéÙTäë¬±j²#ö¤ìÀÒfÈzYôëuÝwknh~è1¸Ë¾¥Jr¹3¢B<pöËO±7í¾Kýîa1X²a>N8m±sbÖðòòÂÜÙ³àïÏ_¢~¶uó¦@7­3\nÏaåúµ\ftú£ÑëÛâJ¥¶ìP®vóAPpÜlÂwL?!£0&ÄÖ¿¡UÚ»(<s_;<8*\ròk[áí@_XC¸ÏV\fõ¸ý£¶ÖR8¹Ø@SY)q%Ê«\rp¦BÒÒ*áéT¨­ú5øo^¡p8a¾ö*nikÑò/¨G÷Ö*ìúóNX\x07MÄê¥ÏÁ¦ñGÕ)àpÚò*?äçcSr2ªªkPPXÈ_¢~¦»×ù4¹»U\fô6|û½47®áÊßbÍ\v­Ð*¼ñYÚQø\b+óQ¾vÂÚU±#ýuEÿ¯?ÔhÒ]Ã×°pî4/óEcàî>eZÔ¢\";ð|WÎDÑ¡§+ÒR?i»5fÛ¹!fÌtøph;G4i ª´ç*PÕ8L8PC%jB³^\b[ÃýUtyI1K1/^g[)Ê»õG$²Fô\ba\"Há\"-ÆEù çL\\|LåQá¸y¦\nÏO=\"FxÀÎy8b&T'í½Ë¦Ó¨¥áXøb\b´[¨W6ÁkTtyø Í±ñãqà¨e®Ö±3%a!Á¦:^Ð¥©ò?fÕaW/7}½]Ü¿Gn*{WHkQ_¯{¤Û[[ÛC®×¢Z8à4¸ÆãOk£±ïíí¸ZÓù+PÏV~ê#SÁÕQ¦úA½³3´=·U¸ÔkÃÆOºÃ¡\\cU>²²ovªïà Buu÷~©U*4è:Ë2©P6rÅdo¿»G{kTi\x07ßEÄvÈ FÍ¾¦Àìæ5Q_ØAþùÞ?+c\tt13¼ Ë#¿ý£Õ<ÖíëëÛ_§$¢æR·@7=)»hÖ\tÞ¹´·@o»ûpprÍg];ºkÝê÷èF]ý~Stð]8o9ºÿÉþÁèDDÏúS¯D²Ó©Ø£ÍJ´øüpûäk8öÑEäÞÜCm\0øËÙQNê¦n@CD\fõg¡W.çqûðCn¶Y4U-ªCøÒýýþ8z­7OpnÑà\nõÒ²2³êL»ð¿Ü,ÛN ÌèûÍ®Ù×4XÉj:dä2Ô`\tõ¦f³ê^¯GÛéÓæÖv\"Îk2»¹ù3NåX<OèYX©\rFrùpDÅ£,?7J+{­ç8¡þ~pPÔ!ëðybz\\4Z*®\"ãÌyÜ®c¨'GÎz²\bRq·a\"êè¿ßµ-U¨­\bÂ-íµî´¯b|Å?±7×ÓÝ\r¸3:§v§À~Ó.jµB¨_|6B½¥Å\0×ÀiÐd\0OxÑ°ÙÊ3,#\bb;?áÌ^«·Õ)ähnlz¢½ø7Kpuÿ»ø[æøM]Ýo%c[Ê?PRQo\nüc]päT®©nÖ8óç(!½Ö!.²\rrÉMì)*¶¼§¥·å\fBÞû%ýÝ¬:;\vAÙüe#õnl2\x07ãäjò¢ºèxïuZõP©¬³µ×P7G\nì\n>­d±®ÕÕq¨×P·¨¿©W76þ=xJCêDDDÄP'\"\"\":CêDDDÄP'\"\"¢¾0n>³Ã@DDdö2ÿ'À\0¥zdKùã5\0\0\0\0IEND®B`";
            menuData.out1 = createResourceFile("KEYboard_out1.png", binout1);
            menuData.out2 = createResourceFile("KEYboard_out2.png", binout2);
            menuData.out3 = createResourceFile("KEYboard_out3.png", binout3);
            menuData.in1 = createResourceFile("KEYboard_in1.png", binin1);
            menuData.in2 = createResourceFile("KEYboard_in2.png", binin2);
            menuData.in3 = createResourceFile("KEYboard_in3.png", binin3);
            menuData.inOut1 = createResourceFile("KEYboard_inOut1.png", bininOut1);
            menuData.inOut2 = createResourceFile("KEYboard_inOut2.png", bininOut2);
            menuData.inOut3 = createResourceFile("KEYboard_inOut3.png", bininOut3);
            menuData.Qrow1 = createResourceFile("KEYboard_Qrow1.png", binQrow1);
            menuData.Qrow2 = createResourceFile("KEYboard_Qrow2.png", binQrow2);
            menuData.Qrow3 = createResourceFile("KEYboard_Qrow3.png", binQrow3);
            menuData.Qrow4 = createResourceFile("KEYboard_Qrow4.png", binQrow4);
            menuData.Qrow5 = createResourceFile("KEYboard_Qrow5.png", binQrow5);
            menuData.Qrow6 = createResourceFile("KEYboard_Qrow6.png", binQrow6);
            menuData.Qrow7 = createResourceFile("KEYboard_Qrow7.png", binQrow7);
            menuData.Qrow8 = createResourceFile("KEYboard_Qrow8.png", binQrow8);
            menuData.Qrow9 = createResourceFile("KEYboard_Qrow9.png", binQrow9);
            menuData.Qrow10 = createResourceFile("KEYboard_Qrow10.png", binQrow10);
            menuData.Setting1 = createResourceFile("KEYboard_Setting1.png", binSetting1);
            menuData.Setting2 = createResourceFile("KEYboard_Setting2.png", binSetting2);
            menuData.Arow1 = createResourceFile("KEYboard_Arow1.png", binArow1);
            menuData.Arow2 = createResourceFile("KEYboard_Arow2.png", binArow2);
            menuData.Zrow1 = createResourceFile("KEYboard_Zrow1.png", binZrow1);
            menuData.Zrow2 = createResourceFile("KEYboard_Zrow2.png", binZrow2);
            menuData.Zrow3 = createResourceFile("KEYboard_Zrow3.png", binZrow3);
            menuData.AddKey = createResourceFile("KEYboard_AddKey.png", binAddKey);
            menuData.num01 = createResourceFile("KEYboard_num01.png", binNum01);
            menuData.num02 = createResourceFile("KEYboard_num02.png", binNum02);
            menuData.num03 = createResourceFile("KEYboard_num03.png", binNum03);
            menuData.num04 = createResourceFile("KEYboard_num04.png", binNum04);
            menuData.num05 = createResourceFile("KEYboard_num05.png", binNum05);
            menuData.num06 = createResourceFile("KEYboard_num06.png", binNum06);
            menuData.num07 = createResourceFile("KEYboard_num07.png", binNum07);
            menuData.num08 = createResourceFile("KEYboard_num08.png", binNum08);
            menuData.num09 = createResourceFile("KEYboard_num09.png", binNum09);
            menuData.logo = [];
            menuData.logo[0] = createResourceFile("KEYboard_logo.png", binLogo);
            menuData.logo[1] = createResourceFile("KEYboard_logo2.png", binLogo2);
            menuData.logo[2] = createResourceFile("KEYboard_logo3.png", binLogo3);
            menuData.logo[3] = createResourceFile("KEYboard_logo4.png", binLogo4);
            menuData.logo[4] = createResourceFile("KEYboard_logo5.png", binLogo5);
            menuData.info2018 = createResourceFile("KEYboard_2018info.png", bin2018info);
            menuData.folder = createResourceFile("KEYboard_folder.png", binFolder);
            var AEversion = app.version.substring(0, 4);
            if (thisObj instanceof Panel) {
                alert("Oops! KEYbaord must be placed in Scripts folder (not ScriptUI panels)");
                var alertPalette = thisObj;
                var alertGrp = alertPalette.add("group");
                alertGrp.graphics.backgroundColor = alertGrp.graphics.newBrush(alertGrp.graphics.BrushType.SOLID_COLOR, menuData.black);
                var alertTxt = alertGrp.add("statictext", [0, 0, 430, 50], "Please place 01-KEY-board.jsxbin in Scripts folder and restart After Effects. :D", {
                    multiline: false
                });
                alertPalette.layout.layout(true);
            } else {
                if (app.settings.haveSetting("Ola_Keyboard", "shortcut")) {
                    createUIMenu(menuData, settingJson2Obj);
                } else {
                    var w = new Window("dialog", "First time", undefined, {
                        closeButton: true
                    });
                    w.margins = 10;
                    w.spacing = 5;
                    w.alignChildren = ["fill", "fill"];
                    var securitySetting = app.preferences.getPrefAsLong("Main Pref Section", "Pref_SCRIPTING_FILE_NETWORK_SECURITY");
                    if (securitySetting === 0) {
                        alert("Make sure Edit>Preferences>General>\r\r\"Allow Scripts to Write Files and Access Network\" \r\ris actived.");
                        app.executeCommand(2359);
                        w.close();
                    }
                    var infoGrp = w.add("group");
                    infoGrp.spacing = 8;
                    infoGrp.orientation = "column";
                    infoGrp.alignChildren = ["fill", "fill"];
                    if (AEversion < 15) {
                        var logo = infoGrp.add("image", undefined, menuData.logo[0]);
                        infoText = infoGrp.add("statictext", [0, 0, 150, 120], "Hi：\rThis is the first time that Keyboard is running.\r\rCreate a shortcut and restart AE to finish setup.\r\re.g. Shift+Q or Alt+Q", {
                            multiline: true
                        });
                        var inputGrp = w.add("group");
                        inputGrp.orientation = "row";
                        inputGrp.alignChildren = ["fill", "fill"];
                        var inputText = inputGrp.add("edittext", undefined);
                        inputText.active = true;
                        inputText.text = "Shift+Q";
                        var tmpStr = "";
                        inputText.addEventListener("keydown", function (k) {
                            handle_shortcut(k, this);
                            tmpStr = inputText.text;
                        });
                        inputText.addEventListener("keyup", function (k) {
                            inputText.text = tmpStr;
                        });
                    } else {
                        var info2018 = infoGrp.add("image", undefined, menuData.info2018);
                        infoText = infoGrp.add("statictext", [0, 0, 150, 120], "Hi：\rThis is the first time that Keyboard is running.\rIn CC2018, there is a new way to set shourtcut with Visual Keyboard Shortcut Editor.\r\rTo open the editor, select Edit > Keyboard Shortcuts. Type \"01-KEY-board\" in search-bar and finish setting.", {
                            multiline: true
                        });
                    }
                    var btnGrp = w.add("group");
                    btnGrp.alignChildren = ["fill", "fill"];
                    var btnOK = btnGrp.add("button", undefined, "OK");
                    var versionStr = w.add("statictext", [0, 0, 150, 20], "AE version : " + AEversion, {
                        multiline: true
                    });
                    btnOK.onClick = function () {
                        if (AEversion < 15) {
                            var AEFolder = Folder(Folder.userData.absoluteURI + "/Adobe/After Effects/" + AEversion);
                            var osName = $.os.substring(0, 3);
                            var shortcut = inputText.text;
                            var pathname = $.fileName;
                            var leafname = pathname.split("\\").pop().split("/").pop();
                            var itemIndex = Number(leafname.substring(1, 2));
                            if (securitySetting == 1) {
                                textFile = getNameOfShortcutsFile();
                                testIO(textFile, shortcut);
                                app.settings.saveSetting("Ola_Keyboard", "shortcut", shortcut);
                                w.close();
                                alert("Plz restart AE");
                            } else {
                                alert("Make sure Edit>Preferences>General>\"Allow Scripts to Write Files and Access Network\" is actived.");
                                w.close();
                            }
                        } else {
                            var none = "none";
                            app.settings.saveSetting("Ola_Keyboard", "shortcut", none);
                            w.close();
                        }
                    };
                    w.show();
                }
            }
        }

        function modifyShortcut(menuData, settingJson2Obj) {
            function saveNumPadSettingTag() {
                createJsonFile("KEYboard_setting.json", settingJson2Obj);
            }

            function assignShortcut(btnObj) {
                var isTrial = (sx2K("v").match(/^t/) ? true : false);
                if (isTrial) {
                    alert("This feature is not available in trial mode");
                } else {
                    saveFlag = 0;
                    curBtnStr.text = "Button #" + btnObj.index;
                    modeList.enabled = true;
                    expressionStr.enabled = true;
                    btnTitleStr.enabled = true;
                    tagetBtnIndex = Number(btnObj.index);
                    modeList.selection = chkMode(btnObj);
                    expressionStr.text = btnObj.expStr;
                    btnTitleStr.text = btnObj.title;
                }
            }
            var AEversion = app.version.substring(0, 4);
            var w = new Window("palette", "Settings");
            w.margins = 10;
            w.spacing = 10;
            w.alignChildren = ["fill", "fill"];
            w.orientation = "column";
            var logoGrp = w.add("group");
            var AllSettingGrp = w.add("group");
            var prefsGrp = AllSettingGrp.add("group");
            var prefsContainerGrp = prefsGrp.add("group");
            var SettingRow1Grp = AllSettingGrp.add("group");
            var scriptSettingGrp = SettingRow1Grp.add("group");
            var NumPadSettingGrp = SettingRow1Grp.add("group");
            AllSettingGrp.spacing = 10;
            AllSettingGrp.alignChildren = ["fill", "fill"];
            prefsGrp.alignChildren = ["fill", "fill"];
            SettingRow1Grp.alignChildren = ["fill", "fill"];
            AllSettingGrp.orientation = "column";
            SettingRow1Grp.orientation = "row";
            logoGrp.alignChildren = ["center", "fill"];
            logoGrp.orientation = "column";
            logoGrp.spacings = 0;
            var prefsPanel = prefsContainerGrp.add("panel", undefined, "Preference");
            prefsGrp.graphics.backgroundColor = prefsGrp.graphics.newBrush(prefsGrp.graphics.BrushType.SOLID_COLOR, menuData.red);
            prefsGrp.margins = 0;
            prefsGrp.margins.top = 5;
            prefsContainerGrp.alignChildren = ["fill", "fill"];
            prefsContainerGrp.margins = 8;
            prefsPanel.spacing = 4;
            if (AEversion < 13) {
                prefsContainerGrp.graphics.backgroundColor = prefsContainerGrp.graphics.newBrush(prefsContainerGrp.graphics.BrushType.SOLID_COLOR, menuData.darkGray2);
            } else {
                prefsContainerGrp.graphics.backgroundColor = prefsContainerGrp.graphics.newBrush(prefsContainerGrp.graphics.BrushType.SOLID_COLOR, menuData.black);
            }
            var chkAutoClose = prefsPanel.add("checkbox", undefined, "Enable Auto-close feature");
            var chkAlignLeft = prefsPanel.add("checkbox", undefined, "(E) Align Keys : Always align left");
            if (settingJson2Obj.prefs_AutoClose === true) {
                chkAutoClose.value = true;
            } else {
                chkAutoClose.value = false;
            }
            chkAlignLeft.value = settingJson2Obj.prefs_AlignLeft;
            chkAutoClose.alignment = ["left", " "];
            chkAlignLeft.alignment = ["left", " "];
            chkAutoClose.onClick = function () {
                settingJson2Obj.prefs_AutoClose = chkAutoClose.value;
                createJsonFile("KEYboard_setting.json", settingJson2Obj);
            };
            chkAlignLeft.onClick = function () {
                settingJson2Obj.prefs_AlignLeft = chkAlignLeft.value;
                createJsonFile("KEYboard_setting.json", settingJson2Obj);
            };
            var logoCount = 0;
            var logo = logoGrp.add("image", undefined, menuData.logo[0]);
            logo.alignment = ["", "center"];
            var scriptSettingContainerGrp = scriptSettingGrp.add("group");
            scriptSettingGrp.graphics.backgroundColor = scriptSettingGrp.graphics.newBrush(scriptSettingGrp.graphics.BrushType.SOLID_COLOR, menuData.yellow);
            scriptSettingGrp.margins = 0;
            scriptSettingGrp.margins.top = 5;
            if (AEversion < 13) {
                scriptSettingContainerGrp.graphics.backgroundColor = scriptSettingContainerGrp.graphics.newBrush(scriptSettingContainerGrp.graphics.BrushType.SOLID_COLOR, menuData.darkGray2);
            } else {
                scriptSettingContainerGrp.graphics.backgroundColor = scriptSettingContainerGrp.graphics.newBrush(scriptSettingContainerGrp.graphics.BrushType.SOLID_COLOR, menuData.black);
            }
            scriptSettingContainerGrp.orientation = "column";
            scriptSettingContainerGrp.margins = 8;
            var resetPanel = scriptSettingContainerGrp.add("panel", undefined, "Reset Shortcut");
            var deletePanel = scriptSettingContainerGrp.add("panel", undefined, "Delete KEYboard");
            scriptSettingGrp.alignChildren = ["fill", "fill"];
            scriptSettingContainerGrp.alignChildren = ["fill", "fill"];
            resetPanel.alignChildren = ["fill", "fill"];
            deletePanel.alignChildren = ["fill", "fill"];
            resetPanel.spacing = 3;
            var infoGrp = resetPanel.add("group");
            var inputGrp = resetPanel.add("group");
            var btnGrp = resetPanel.add("group");
            var deleteBtnGrp = deletePanel.add("group");
            infoGrp.spacing = 0;
            btnGrp.alignChildren = ["center", ""];
            deleteBtnGrp.alignChildren = ["center", ""];
            var inputText = inputGrp.add("edittext", undefined);
            inputText.alignment = ["fill", "fill"];
            var btnReset = btnGrp.add("button", undefined, "Reset!");
            inputText.text = "Shift+Q";
            var tmpStr = "";
            inputText.addEventListener("keydown", function (k) {
                handle_shortcut(k, this);
                tmpStr = inputText.text;
            });
            inputText.addEventListener("keyup", function (k) {
                inputText.text = tmpStr;
            });
            if (app.settings.haveSetting("Ola_Keyboard", "shortcut")) {
                var SettingShortcut = app.settings.getSetting("Ola_Keyboard", "shortcut");
                inputText.text = SettingShortcut;
            } else {
                inputText.text = "Shift+Q";
            }
            if (AEversion >= 15) {
                inputText.enabled = false;
                btnReset.enabled = false;
            }
            var deleteBtn = deleteBtnGrp.add("button", undefined, "Do it  :(");
            var numPadSwitchFlag = 0;
            var tagetBtnIndex = -1;
            var saveFlag = 1;
            if (app.settings.haveSetting("Ola_Keyboard", "numPadSwitchFlag") === true) {
                numPadSwitchFlag = app.settings.getSetting("Ola_Keyboard", "numPadSwitchFlag");
            }
            NumPadSettingGrp.orientation = "column";
            NumPadSettingGrp.alignChildren = ["fill", "fill"];
            NumPadSettingGrp.margins = 0;
            NumPadSettingGrp.margins.top = 5;
            NumPadSettingGrp.spacing = 0;
            NumPadSettingGrp.graphics.backgroundColor = NumPadSettingGrp.graphics.newBrush(NumPadSettingGrp.graphics.BrushType.SOLID_COLOR, menuData.purple);
            var btnSize = [40, 40];
            var NumpadContainerGrp = NumPadSettingGrp.add("group");
            NumpadContainerGrp.orientation = "column";
            NumpadContainerGrp.margins = 8;
            NumpadContainerGrp.alignChildren = ["fill", "fill"];
            if (AEversion < 13) {
                NumpadContainerGrp.graphics.backgroundColor = NumpadContainerGrp.graphics.newBrush(NumpadContainerGrp.graphics.BrushType.SOLID_COLOR, menuData.darkGray2);
            } else {
                NumpadContainerGrp.graphics.backgroundColor = NumpadContainerGrp.graphics.newBrush(NumpadContainerGrp.graphics.BrushType.SOLID_COLOR, menuData.black);
            }
            var NumpadPanel = NumpadContainerGrp.add("panel", undefined, "Custom");
            var NumpadGrp = NumpadPanel.add("group");
            NumpadGrp.alignment = ["fill", "fill"];
            var numpadbtnGrp = NumpadGrp.add("group");
            var settingGrp = NumpadGrp.add("group");
            settingGrp.orientation = "column";
            settingGrp.alignment = ["fill", "fill"];
            settingGrp.spacing = 5;
            numpadbtnGrp.orientation = "column";
            numpadbtnGrp.alignChildren = ["fill", "fill"];
            var btnAry = [];
            var btnGrpAry = [];
            btnGrpAry[0] = numpadbtnGrp.add("group");
            btnGrpAry[1] = numpadbtnGrp.add("group");
            btnGrpAry[2] = numpadbtnGrp.add("group");
            btnGrpAry[0].orientation = "row";
            btnGrpAry[0].spacing = 3;
            btnGrpAry[1].orientation = "row";
            btnGrpAry[1].spacing = 3;
            btnGrpAry[2].orientation = "row";
            btnGrpAry[2].spacing = 3;
            btnAry[0] = btnGrpAry[2].add("button", undefined, "1");
            btnAry[1] = btnGrpAry[2].add("button", undefined, "2");
            btnAry[2] = btnGrpAry[2].add("button", undefined, "3");
            btnAry[3] = btnGrpAry[1].add("button", undefined, "4");
            btnAry[4] = btnGrpAry[1].add("button", undefined, "5");
            btnAry[5] = btnGrpAry[1].add("button", undefined, "6");
            btnAry[6] = btnGrpAry[0].add("button", undefined, "7");
            btnAry[7] = btnGrpAry[0].add("button", undefined, "8");
            btnAry[8] = btnGrpAry[0].add("button", undefined, "9");
            var btnSaveGrp = numpadbtnGrp.add("group");
            btnSaveGrp.graphics.backgroundColor = btnSaveGrp.graphics.newBrush(btnSaveGrp.graphics.BrushType.SOLID_COLOR, menuData.black);
            btnSaveGrp.alignChildren = ["fill", ""];
            var btnSave = btnSaveGrp.add("button", undefined, "Save it!");
            for (var j = 0; j < 9; j += 1) {
                (btnAry[j]).preferredSize = btnSize;
            }
            btnAry[0].onClick = function () {
                assignShortcut(settingJson2Obj.btn01);
            };
            btnAry[1].onClick = function () {
                assignShortcut(settingJson2Obj.btn02);
            };
            btnAry[2].onClick = function () {
                assignShortcut(settingJson2Obj.btn03);
            };
            btnAry[3].onClick = function () {
                assignShortcut(settingJson2Obj.btn04);
            };
            btnAry[4].onClick = function () {
                assignShortcut(settingJson2Obj.btn05);
            };
            btnAry[5].onClick = function () {
                assignShortcut(settingJson2Obj.btn06);
            };
            btnAry[6].onClick = function () {
                assignShortcut(settingJson2Obj.btn07);
            };
            btnAry[7].onClick = function () {
                assignShortcut(settingJson2Obj.btn08);
            };
            btnAry[8].onClick = function () {
                assignShortcut(settingJson2Obj.btn09);
            };
            var curBtnStr = settingGrp.add("statictext", [0, 0, 150, 20], "← select button");
            curBtnStr.alignment = ["fill", "top"];
            var btnTitleGrp = settingGrp.add("group");
            var btnTitleName = btnTitleGrp.add("statictext", [0, 0, 40, 20], "Name : ");
            var btnTitleStr = btnTitleGrp.add("edittext", undefined, "", {
                multiline: false
            });
            btnTitleGrp.alignment = ["fill", "top"];
            btnTitleStr.alignment = ["fill", "top"];
            btnTitleGrp.spacing = 0;
            btnTitleStr.enabled = false;
            var modeListGrp = settingGrp.add("group");
            var modeList = modeListGrp.add("dropdownlist", undefined, ["expression", "JavaScript", "easeIn", "easeOut", "easeInOut"]);
            modeListGrp.alignment = ["fill", "top"];
            modeListGrp.spacing = 3;
            var expressionStr = settingGrp.add("edittext", undefined, "", {
                multiline: true
            });
            modeList.selection = 0;
            modeList.alignment = ["fill", "top"];
            modeList.enabled = false;
            expressionStr.alignment = ["fill", "fill"];
            expressionStr.enabled = false;
            var txtGrp = AllSettingGrp.add("group");
            txtGrp.spacing = 5;
            txtGrp.orientation = "column";
            txtGrp.alignment = ["", "bottom"];
            txtGrp.alignChildren = ["fill", "fill"];
            var versionGrp = txtGrp.add("group");
            versionGrp.orientation = "column";
            versionGrp.spacing = 2;
            versionGrp.alignChildren = ["fill", "fill"];
            versionGrp.alignment = ["center", "fill"];
            var registGrp = txtGrp.add("group");
            registGrp.alignChildren = ["fill", "fill"];
            registGrp.margins = 10;
            registGrp.margins.left = 20;
            registGrp.margins.right = 20;
            registGrp.graphics.backgroundColor = registGrp.graphics.newBrush(registGrp.graphics.BrushType.SOLID_COLOR, menuData.black);
            var scriptVersionText = versionGrp.add("statictext", undefined, scriptVersionStr + " | ©2017 olaolayuan", {
                multiline: false
            });
            var registration = sx2K("p");
            var registrationText = registGrp.add("statictext", undefined, registration, {
                multiline: false
            });
            if (isTrial) {
                var btnTrial = registGrp.add("button", undefined, "activate");
                btnTrial.preferredSize = [60, 20];
                btnTrial.onClick = function () {
                    sx2K();
                };
            }
            logo.addEventListener("mousedown", function (event) {
                logoCount += 1;
                if (event.shiftKey === true && logoCount == 5) {
                    scriptVersionText.text = "(●´∀`●)";
                }
                if (logoCount > 4) {
                    logoCount = 0;
                }
                logo.icon = ScriptUI.newImage(menuData.logo[logoCount]);
            });
            btnSave.onClick = function () {
                saveNumPadSettingTag();
                saveFlag = 1;
            };
            w.onClose = function () {
                if (saveFlag === 0) {
                    var saveWindow = new Window("dialog", "Oops!", undefined, {
                        borderless: true,
                        closeButton: false
                    });
                    saveWindow.margins = 0;
                    var allGrp = saveWindow.add("group");
                    var allContainerGrp = allGrp.add("group");
                    var infoGrp = allContainerGrp.add("group");
                    var saveBtnGrp = allContainerGrp.add("group");
                    allGrp.graphics.backgroundColor = allGrp.graphics.newBrush(allGrp.graphics.BrushType.SOLID_COLOR, menuData.red);
                    allGrp.margins = 0;
                    allGrp.margins.top = 5;
                    allContainerGrp.graphics.backgroundColor = allContainerGrp.graphics.newBrush(allContainerGrp.graphics.BrushType.SOLID_COLOR, menuData.black);
                    allContainerGrp.margins = 10;
                    saveWindow.orientation = "column";
                    saveBtnGrp.orientation = "row";
                    var alertInfo = infoGrp.add("statictext", undefined, "You haven't save after setting expression shortcut.\r\rDo you want to save it?", {
                        multiline: true
                    });
                    var saveBtn = saveBtnGrp.add("button", undefined, "Save it!");
                    var closeBtn = saveBtnGrp.add("button", undefined, "No :(");
                    saveBtn.onClick = function () {
                        saveNumPadSettingTag();
                        saveWindow.close();
                    };
                    closeBtn.onClick = function () {
                        saveWindow.close();
                    };
                    saveWindow.show();
                }
            };
            btnReset.onClick = function () {
                var AEFolder = Folder(Folder.userData.absoluteURI + "/Adobe/After Effects/" + AEversion);
                var osName = $.os.substring(0, 3);
                var shortcut = inputText.text;
                var securitySetting = app.preferences.getPrefAsLong("Main Pref Section", "Pref_SCRIPTING_FILE_NETWORK_SECURITY");
                if (securitySetting == 1) {
                    textFile = getNameOfShortcutsFile();
                    testIO(textFile, shortcut);
                    app.settings.saveSetting("Ola_Keyboard", "shortcut", shortcut);
                    w.close();
                    alert("Plz restart AE");
                } else {
                    alert("Make sure Edit>Preferences>General>\"Allow Scripts to Write Files and Access Network\" is actived.");
                    w.close();
                }
            };
            deleteBtn.onClick = function () {
                overwriteShortcut();
                deleteSettingTag();
                alert("finished!");
            };
            btnTitleStr.addEventListener("keyup", function (k) {
                switch (tagetBtnIndex) {
                    case 1:
                        settingJson2Obj.btn01.title = btnTitleStr.text;
                        break;
                    case 2:
                        settingJson2Obj.btn02.title = btnTitleStr.text;
                        break;
                    case 3:
                        settingJson2Obj.btn03.title = btnTitleStr.text;
                        break;
                    case 4:
                        settingJson2Obj.btn04.title = btnTitleStr.text;
                        break;
                    case 5:
                        settingJson2Obj.btn05.title = btnTitleStr.text;
                        break;
                    case 6:
                        settingJson2Obj.btn06.title = btnTitleStr.text;
                        break;
                    case 7:
                        settingJson2Obj.btn07.title = btnTitleStr.text;
                        break;
                    case 8:
                        settingJson2Obj.btn08.title = btnTitleStr.text;
                        break;
                    case 9:
                        settingJson2Obj.btn09.title = btnTitleStr.text;
                        break;
                }
            }, false);
            expressionStr.addEventListener("keyup", function (k) {
                if (modeList.selection >= 2 && modeList.selection <= 4) {
                    if (isNaN(expressionStr.text)) {
                        expressionStr.text = "Please input number. \r\r:D";
                        expressionStr.active = false;
                        expressionStr.active = true;
                    } else {
                        if (expressionStr.text < 0 || expressionStr.text > 100) {
                            expressionStr.text = "Ease value is out of range.\r\rPlease input from 0.1 to 100. \r\r:D";
                            expressionStr.active = false;
                            expressionStr.active = true;
                        }
                    }
                }
                var parseStr = expressionStr.text;
                switch (tagetBtnIndex) {
                    case 1:
                        settingJson2Obj.btn01.expStr = parseStr;
                        break;
                    case 2:
                        settingJson2Obj.btn02.expStr = parseStr;
                        break;
                    case 3:
                        settingJson2Obj.btn03.expStr = parseStr;
                        break;
                    case 4:
                        settingJson2Obj.btn04.expStr = parseStr;
                        break;
                    case 5:
                        settingJson2Obj.btn05.expStr = parseStr;
                        break;
                    case 6:
                        settingJson2Obj.btn06.expStr = parseStr;
                        break;
                    case 7:
                        settingJson2Obj.btn07.expStr = parseStr;
                        break;
                    case 8:
                        settingJson2Obj.btn08.expStr = parseStr;
                        break;
                    case 9:
                        settingJson2Obj.btn09.expStr = parseStr;
                        break;
                }
            }, false);
            modeList.onChange = function () {
                switch (tagetBtnIndex) {
                    case 1:
                        settingJson2Obj.btn01.mode = modeList.selection.toString();
                        break;
                    case 2:
                        settingJson2Obj.btn02.mode = modeList.selection.toString();
                        break;
                    case 3:
                        settingJson2Obj.btn03.mode = modeList.selection.toString();
                        break;
                    case 4:
                        settingJson2Obj.btn04.mode = modeList.selection.toString();
                        break;
                    case 5:
                        settingJson2Obj.btn05.mode = modeList.selection.toString();
                        break;
                    case 6:
                        settingJson2Obj.btn06.mode = modeList.selection.toString();
                        break;
                    case 7:
                        settingJson2Obj.btn07.mode = modeList.selection.toString();
                        break;
                    case 8:
                        settingJson2Obj.btn08.mode = modeList.selection.toString();
                        break;
                    case 9:
                        settingJson2Obj.btn09.mode = modeList.selection.toString();
                        break;
                }
            };
            w.show();
        }

        function cloneKey() {
            app.beginUndoGroup("Clone Key");
            var myComp = app.project.activeItem;
            if (myComp !== null) {
                var seLayers = myComp.selectedLayers;
                var Time = myComp.time;
                var AllLayerKeyData = [];
                for (var i = 0; i < seLayers.length; i += 1) {
                    var allPropsInALayer = [];
                    for (var j = 0; j < (seLayers[i]).selectedProperties.length; j += 1) {
                        selProps = (seLayers[i]).selectedProperties[j];
                        allPropsInALayer.push(collectKeyframes(selProps));
                    }
                    AllLayerKeyData.push(allPropsInALayer);
                }
                var AllKeyTime = [];
                for (var x = 0; x < AllLayerKeyData.length; x += 1) {
                    for (var y = 0; y < (AllLayerKeyData[x]).length; y += 1) {
                        if (AllLayerKeyData[x][y] === null || AllLayerKeyData[x][y] === undefined) {
                            continue;
                        }
                        for (var z = 0; z < (AllLayerKeyData[x][y]).length; z += 1) {
                            AllKeyTime.push((AllLayerKeyData[x][y][z]).curKeyTime);
                        }
                    }
                }
                AllKeyTime.sort(function (a, b) {
                    return a - b;
                });
                Time = Time - AllKeyTime[0];
                for (var m = 0; m < seLayers.length; m += 1) {
                    for (var n = 0; n < (seLayers[m]).selectedProperties.length; n += 1) {
                        selProps = (seLayers[m]).selectedProperties[n];
                        transferKeyframes(selProps, AllLayerKeyData[m][n], Time, "clone");
                    }
                }
            }
            app.endUndoGroup();
        }

        function mirrorKey() {
            app.beginUndoGroup("Mirror Key");
            var myComp = app.project.activeItem;
            if (myComp !== null) {
                var seLayers = myComp.selectedLayers;
                var Time = myComp.time;
                var AllLayerKeyData = [];
                for (var i = 0; i < seLayers.length; i += 1) {
                    var allPropsInALayer = [];
                    for (var j = 0; j < (seLayers[i]).selectedProperties.length; j += 1) {
                        selProps = (seLayers[i]).selectedProperties[j];
                        allPropsInALayer.push(collectKeyframes(selProps));
                    }
                    AllLayerKeyData.push(allPropsInALayer);
                }
                var AllKeyTime = [];
                for (var x = 0; x < AllLayerKeyData.length; x += 1) {
                    for (var y = 0; y < (AllLayerKeyData[x]).length; y += 1) {
                        if (AllLayerKeyData[x][y] === null || AllLayerKeyData[x][y] === undefined) {
                            continue;
                        }
                        for (var z = 0; z < (AllLayerKeyData[x][y]).length; z += 1) {
                            AllKeyTime.push((AllLayerKeyData[x][y][z]).curKeyTime);
                        }
                    }
                }
                AllKeyTime.sort(function (a, b) {
                    return a - b;
                });
                var maxTime = AllKeyTime[AllKeyTime.length - 1];
                Time = Time + maxTime;
                for (var m = 0; m < seLayers.length; m += 1) {
                    for (var n = 0; n < (seLayers[m]).selectedProperties.length; n += 1) {
                        selProps = (seLayers[m]).selectedProperties[n];
                        transferMirrorKeyframes(selProps, AllLayerKeyData[m][n], Time, "mirror");
                    }
                }
            }
            app.endUndoGroup();
        }

        function alignKey(JsonSettingObj) {
            app.beginUndoGroup("Align Key");
            var myComp = app.project.activeItem;
            if (myComp !== null) {
                var seLayers = myComp.selectedLayers;
                var Time = myComp.time;
                var AllLayerKeyData = [];
                var everyProps = [];
                var hasKeyInCurTime = 0;
                for (var i = 0; i < seLayers.length; i += 1) {
                    everyProps[i] = [];
                    var allPropsInALayer = [];
                    for (var j = 0; j < (seLayers[i]).selectedProperties.length; j += 1) {
                        everyProps[i][j] = (seLayers[i]).selectedProperties[j];
                        selProps = (seLayers[i]).selectedProperties[j];
                        allPropsInALayer.push(collectKeyframes(selProps));
                        if (allPropsInALayer[j] === null || allPropsInALayer[j] === undefined) {
                            continue;
                        }
                        var thisPropKeyTimeAry = [];
                        for (var k = 0; k < (allPropsInALayer[j]).length; k += 1) {
                            thisPropKeyTimeAry.push((allPropsInALayer[j][k]).curKeyTime);
                        }
                        thisPropKeyTimeAry.sort(function (a, b) {
                            return a - b;
                        });
                        (allPropsInALayer[j]).maxTime = thisPropKeyTimeAry[thisPropKeyTimeAry.length - 1];
                        (allPropsInALayer[j]).minTime = thisPropKeyTimeAry[0];
                    }
                    AllLayerKeyData.push(allPropsInALayer);
                }
                for (var d = 0; d < everyProps.length; d += 1) {
                    for (var c = 0; c < (everyProps[d]).length; c += 1) {
                        (everyProps[d][c]).selected = true;
                        if (AllLayerKeyData[d][c] === null || AllLayerKeyData[d][c] === undefined) {
                            continue;
                        }
                        if (myComp.time < (AllLayerKeyData[d][c]).minTime || JsonSettingObj.prefs_AlignLeft === true) {
                            var nearestKeyIndex = (everyProps[d][c]).nearestKeyIndex(myComp.time);
                            var nearestKeyTime = (everyProps[d][c]).keyTime(nearestKeyIndex);
                            if (nearestKeyTime == myComp.time) {
                                hasKeyInCurTime = 1;
                            }
                            Time = myComp.time - (AllLayerKeyData[d][c]).minTime;
                            transferKeyframes(everyProps[d][c], AllLayerKeyData[d][c], Time, "align");
                        } else {
                            if (myComp.time > (AllLayerKeyData[d][c]).maxTime) {
                                Time = myComp.time - (AllLayerKeyData[d][c]).maxTime;
                                transferKeyframes(everyProps[d][c], AllLayerKeyData[d][c], Time, "align");
                            }
                        }
                    }
                }
                for (var m = 0; m < everyProps.length; m += 1) {
                    for (var n = 0; n < (everyProps[m]).length; n += 1) {
                        if (AllLayerKeyData[m][n] === null || AllLayerKeyData[m][n] === undefined) {
                            continue;
                        }
                        var keysAry = AllLayerKeyData[m][n];
                        for (var h = 0; h < keysAry.length; h += 1) {
                            if (hasKeyInCurTime == 1) {
                                (everyProps[m][n]).setSelectedAtKey((keysAry[h]).curKeyIndex - 1, true);
                            } else {
                                (everyProps[m][n]).setSelectedAtKey((keysAry[h]).curKeyIndex, true);
                            }
                        }
                    }
                }
            }
            app.endUndoGroup();
        }

        function alignLeftKey() {
            app.beginUndoGroup("Align Key");
            var myComp = app.project.activeItem;
            if (myComp !== null) {
                var seLayers = myComp.selectedLayers;
                var Time = myComp.time;
                var AllLayerKeyData = [];
                var everyProps = [];
                var hasKeyInCurTime = 0;
                for (var i = 0; i < seLayers.length; i += 1) {
                    everyProps[i] = [];
                    var allPropsInALayer = [];
                    for (var j = 0; j < (seLayers[i]).selectedProperties.length; j += 1) {
                        everyProps[i][j] = (seLayers[i]).selectedProperties[j];
                        selProps = (seLayers[i]).selectedProperties[j];
                        allPropsInALayer.push(collectKeyframes(selProps));
                        if (allPropsInALayer[j] === null || allPropsInALayer[j] === undefined) {
                            continue;
                        }
                        var thisPropKeyTimeAry = [];
                        for (var k = 0; k < (allPropsInALayer[j]).length; k += 1) {
                            thisPropKeyTimeAry.push((allPropsInALayer[j][k]).curKeyTime);
                        }
                        thisPropKeyTimeAry.sort(function (a, b) {
                            return a - b;
                        });
                        (allPropsInALayer[j]).maxTime = thisPropKeyTimeAry[thisPropKeyTimeAry.length - 1];
                        (allPropsInALayer[j]).minTime = thisPropKeyTimeAry[0];
                    }
                    AllLayerKeyData.push(allPropsInALayer);
                }
                for (var d = 0; d < everyProps.length; d += 1) {
                    for (var c = 0; c < (everyProps[d]).length; c += 1) {
                        (everyProps[d][c]).selected = true;
                        if (AllLayerKeyData[d][c] === null || AllLayerKeyData[d][c] === undefined) {
                            continue;
                        }
                        if (myComp.time > (AllLayerKeyData[d][c]).maxTime) {
                            Time = myComp.time - (AllLayerKeyData[d][c]).maxTime;
                            transferKeyframes(everyProps[d][c], AllLayerKeyData[d][c], Time, "align");
                        } else {
                            if (myComp.time < (AllLayerKeyData[d][c]).minTime) {
                                var nearestKeyIndex = (everyProps[d][c]).nearestKeyIndex(myComp.time);
                                var nearestKeyTime = (everyProps[d][c]).keyTime(nearestKeyIndex);
                                if (nearestKeyTime == myComp.time) {
                                    hasKeyInCurTime = 1;
                                }
                                Time = myComp.time - (AllLayerKeyData[d][c]).minTime;
                                transferKeyframes(everyProps[d][c], AllLayerKeyData[d][c], Time, "align");
                            }
                        }
                    }
                }
                for (var m = 0; m < everyProps.length; m += 1) {
                    for (var n = 0; n < (everyProps[m]).length; n += 1) {
                        if (AllLayerKeyData[m][n] === null || AllLayerKeyData[m][n] === undefined) {
                            continue;
                        }
                        var keysAry = AllLayerKeyData[m][n];
                        for (var h = 0; h < keysAry.length; h += 1) {
                            if (hasKeyInCurTime == 1) {
                                (everyProps[m][n]).setSelectedAtKey((keysAry[h]).curKeyIndex - 1, true);
                            } else {
                                (everyProps[m][n]).setSelectedAtKey((keysAry[h]).curKeyIndex, true);
                            }
                        }
                    }
                }
            }
            app.endUndoGroup();
        }

        function organizeKey() {
            app.beginUndoGroup("Correct Key");
            var myComp = app.project.activeItem;
            if (myComp !== null) {
                var seLayers = myComp.selectedLayers;
                var TimeObj = {};
                TimeObj.time = myComp.time;
                TimeObj.correctedKeyNums = 0;
                var everyProps = [];
                for (var x = 0; x < seLayers.length; x += 1) {
                    everyProps[x] = [];
                    for (var y = 0; y < (seLayers[x]).selectedProperties.length; y += 1) {
                        everyProps[x][y] = (seLayers[x]).selectedProperties[y];
                    }
                }
                var selPropKeyData = [];
                for (var a = 0; a < everyProps.length; a += 1) {
                    selPropKeyData[a] = [];
                    for (var b = 0; b < (everyProps[a]).length; b += 1) {
                        selPropKeyData[a][b] = collectKeyframes(everyProps[a][b]);
                    }
                }
                for (var d = 0; d < everyProps.length; d += 1) {
                    for (var c = 0; c < (everyProps[d]).length; c += 1) {
                        (everyProps[d][c]).selected = true;
                        transferKeyframes(everyProps[d][c], selPropKeyData[d][c], TimeObj, "organize");
                    }
                }
                for (var m = 0; m < everyProps.length; m += 1) {
                    for (var n = 0; n < (everyProps[m]).length; n += 1) {
                        if (selPropKeyData[m][n] === null || selPropKeyData[m][n] === undefined) {
                            continue;
                        }
                        var keysAry = selPropKeyData[m][n];
                        for (var k = 0; k < keysAry.length; k += 1) {
                            (everyProps[m][n]).setSelectedAtKey((keysAry[k]).curKeyIndex, true);
                        }
                    }
                }
                alert(TimeObj.correctedKeyNums + " keys are corrected. ");
            }
            app.endUndoGroup();
        }

        function randomKey(JsonSettingObj) {
            function getRandom(min, max) {
                min = parseInt(min);
                max = parseInt(max);
                return (Math.floor(Math.random() * ((max - min) + 1) * 10) / 10) + min;
            }

            function getRandomFactor() {
                var random = (Math.random() > 0.5 ? 1 : -1);
                return random;
            }

            function getRandomArray(minNum, maxNum, n) {
                var rdmArray = [n];
                for (var i = 0; i < n; i += 1) {
                    var rdm = 0;
                    rdm = getRandom(minNum, maxNum);
                    rdmArray[i] = Math.round(rdm);
                }
                return rdmArray;
            }

            function doRandom() {
                var myComp = app.project.activeItem;
                if (myComp !== null) {
                    var seLayers = myComp.selectedLayers;
                    var showTextMin = 30;
                    if (seLayers.length > showTextMin) {
                        info = myInputGroup.add("statictext", [0, 0, 140, 30], "");
                        myWindow.layout.layout(true);
                    }
                    Time = myComp.time;
                    var everyProps = [];
                    for (var x = 0; x < seLayers.length; x += 1) {
                        everyProps[x] = [];
                        for (var y = 0; y < (seLayers[x]).selectedProperties.length; y += 1) {
                            everyProps[x][y] = (seLayers[x]).selectedProperties[y];
                        }
                    }
                    if (everyProps.length > showTextMin) {
                        info.text = "collect keyframes...(1/3)";
                        myWindow.update();
                    }
                    var selPropKeyData = [];
                    for (var a = 0, al = everyProps.length; a < al; a++) {
                        selPropKeyData[a] = [];
                        for (var b = 0, bl = (everyProps[a]).length; b < bl; b++) {
                            selPropKeyData[a][b] = collectKeyframes(everyProps[a][b]);
                        }
                        if (everyProps.length > showTextMin) {

                        }
                    }
                    if (isNaN(min.text)) {
                        min.text = 0;
                    }
                    if (isNaN(max.text)) {
                        max.text = 0;
                    }
                    if (everyProps.length > showTextMin) {
                        info.text = "move keyframes...(2/3)";
                        myWindow.update();
                    }
                    for (var d = 0, el = everyProps.length; d < el; d++) {
                        var factor = getRandomFactor();
                        var rdm = getRandom(min.text, max.text);
                        rdm = Math.round(rdm);
                        var dataObj = {};
                        dataObj.offset = rdm * factor;
                        dataObj.format = timeFormat.selection;
                        for (var c = 0, el2 = (everyProps[d]).length; c < el2; c++) {
                            if (everyProps[d][c] === null || everyProps[d][c] === undefined) {
                                continue;
                            }
                            (everyProps[d][c]).selected = true;
                            transferKeyframes(everyProps[d][c], selPropKeyData[d][c], dataObj, "random");
                        }
                        if (everyProps.length > showTextMin) {

                        }
                    }
                    if (everyProps.length > showTextMin) {
                        info.text = "select keyframes...(3/3)";
                        myWindow.update();
                    }
                    for (var m = 0, el3 = everyProps.length; m < el3; m++) {
                        for (var n = 0, el4 = (everyProps[m]).length; n < el4; n++) {
                            if (selPropKeyData[m][n] === null || selPropKeyData[m][n] === undefined) {
                                continue;
                            }
                            var keysAry = selPropKeyData[m][n];
                            for (var k = 0, kl = keysAry.length; k < kl; k++) {
                                (everyProps[m][n]).setSelectedAtKey((keysAry[k]).curKeyIndex, true);
                            }
                        }
                        if (everyProps.length > showTextMin) {

                        }
                    }
                    if (everyProps.length > showTextMin) {
                        alert("finished");
                    }
                }
            }

            function pressed(k) {
                if (k.keyName == "Enter") {
                    app.beginUndoGroup("Random Key");
                    doRandom();
                    JsonSettingObj.randomKeys_preVal[0] = min.text;
                    JsonSettingObj.randomKeys_preVal[1] = max.text;
                    if (timeFormat.selection.toString() != JsonSettingObj.randomKeys_preUnit) {
                        JsonSettingObj.randomKeys_preUnit = timeFormat.selection.toString();
                    }
                    var settingJson = createJsonFile("KEYboard_setting.json", JsonSettingObj);
                    app.endUndoGroup();
                    myWindow.close();
                } else {
                    if (k.keyName == "Escape") {
                        myWindow.close();
                    }
                }
            }
            var binIcon = "PNG\r\n\n\0\0\0\rIHDR\0\0\0)\0\0\x003\b\0\0\0\n-!\v\0\0\0\tpHYs\0\0\v\0\0\v\0\0\0\0tEXtSoftware\0Adobe ImageReadyqÉe<\0\0sIDATxÚì1nÛ@E)Á}Ì«ÄÔ.>ÜÆi¤#DG°»´b¤ *\\\x07! À\v OÀü\tþ\tPÄZZÁ\\`@jv5|;³3¢¦WUUúègG0:ÈgyËÐ½÷3\\Æü¸LÎùd<\tÀk\\F·ò-µp\v`Ï-Dp?>O\tÒACKPçÇ8î }JÉiÈÛ2¥THù@­!¥\fál®ñ$`nX@~Q=ufzÝ[Ð!!{³ï §ÉBî\nïÛ}ö[\0~æÇWûíïbiÐ<)0w5úOÉ@V7\\.\fè\x07è¿$u&\rhc@9ËÖyòbní+6vT172Þ·ñèy¥iya¦ gðèêàTç÷Á\0^ìÝðÞK\\6\fº3UKpy°p+a,hÖ0¤\fçïÎôU!¾5\tõç2Fâlb;É@nù¹lU´÷8§\fñ2&`÷§|6÷ÞWªÕ´'],C'j÷C¶I¤]\"}Ei\\sz>pîÒ¬=¿/TéîÆ«¢Ö\vÖÏkìku\f;¼& ´\x07\r57Fp¢\0N)3ó¬vB¯ÝÚ¬7v1eC~À­|a­ÃÇ¶sè=:eT¼PèHKpNÉ5xUÙ)µÍ¦gr\b¿ú¼Éù«iõ=êÕ8ÃãMZxþzið«&¿Ý\rKIÉµÒHëcÁÛe­t»gwÍÃA_pnLÝ?ÞP.¬/½KêsÞoó¦ßÆÒ½`t©?\f\0æR$d£\vö¾\0\0\0\0IEND®B`";
            var binClose = "PNG\r\n\n\0\0\0\rIHDR\0\0\0\0\0\0\b\0\0\0©¥\0\0\0\tpHYs\0\0\v\0\0\v\0\0\0\0tEXtSoftware\0Adobe ImageReadyqÉe<\0\0IDATxÚbüÿÿ?µ\r\0\v.\tiié U\0ÄúhRx\b?}úô6½èÞ\x07f\0¤6\0±<\x07}â ÁðzêºóD\bü@¼ª\x07»K¡.<\0UL*pºø\x006N Ó@h£zêJ{d\tsa)rMsNfD\\Ø 1\x07îÒ\0¬)!OÍl\bØ 1 \0=I9 «8ùö×b(P7a`\0½$'ÃÒ×àrh@`:ÌÆÄÌ*«æ¯~|Äç(­Dág%\"Æ\f}Í@X¼\fÂÈa|@7ô\0º\n\x0719¸ /0Ìà`ulÀø? §SU^AÛß£èÔ}ÿû\x07=Ë*ÀÊä0-@·Ý@¸ôá5ºà\\¸ (@×rF<¹é Ð@\x07±\vI0p!¶Ã­ä\x07ºØZèã0ì!(¸°{8\rE2\\ÛÍ að9u@\0ËßõP¸\0\0\0\0IEND®B`";
            var binShift = "PNG\r\n\n\0\0\0\rIHDR\0\0\x003\0\0\0\b\0\0\0ëTÖ\0\0\0\tpHYs\0\0\v\0\0\v\0\0\0\0tEXtSoftware\0Adobe ImageReadyqÉe<\0\0/IDATxÚbüÿÿ?Ãp,HKK;\fw>xúôéB±Å\fÐ\n@ªã\x07QÀ?¹\tè©D{è Õ?SÓE ÀS(zdÁ \r\\à# {\tÉ#ø<òt7\ncÄÀÏÍJK@úmµEÀl\râ£ËÇ8Êá37 \v2!±'rÄÔ-wÊç_c]~åædydÎ£×ßÀly1.ì®%PúÀ\bHÀð\fTPnìÆÓ¶ÞeÐz\ba<\x07\nÕc=pql ÛGAN\v+º±EhÀ3$¿¯¾ÓzGwògÝ°¡XÅ\bH(@\0¦D -yQ<£@r9ùêJr\0êSÏ.=øÈ°s q|±Û \0Ò\x07ÏÝ_1@[!¯XZ\nr<\rs,ÖÈªT E\n Û3°!ÇRÆ\t1á\x07¤jeVX, [+¡ÈÈ}WÞ=DlS\x07Ý3\x07Ñ*@å?\bWió\bÌ GÅAù$Ë[,NJ¬¡ç/yQ.¢ZÈ'Ø3ÐöÎCB:AE*¨(áËÀ)Ö70\0b<°½ÉÁ×L!¢ó$Qy{ }°ÙCd~µ9m¬B-~P¬`-\0 æÁÄ!âPF\rÀ[=j1öÁÖÈ$¦?\0mÔ\rOL ©?3ìzC\0\0jÁ-[\0\0\0\0IEND®B`";
            var imgIcon = createResourceFile("KEYboard_random.png", binIcon);
            var imgClose = createResourceFile("KEYboard_random_close.png", binClose);
            var imgDoIt = createResourceFile("KEYboard_DoIt.png", binShift);
            var lightGray = HexToRGB("#393939");
            var white = HexToRGB("#EEEEEE");
            var yellow = HexToRGB("#FFBC65");
            var red = HexToRGB("#AC4C5E");
            var purple = HexToRGB("#5C476F");
            var AEversion = app.version.substring(0, 4);
            if (AEversion < 12) {
                myWindow = new Window("palette", "Random Key", undefined, {
                    borderless: false
                });
            } else {
                myWindow = new Window("palette", "Random Key", undefined, {
                    borderless: false
                });
            }
            myWindow.graphics.backgroundColor = myWindow.graphics.newBrush(myWindow.graphics.BrushType.SOLID_COLOR, yellow);
            myWindow.alignChildren = ["fill", "fill"];
            myWindow.orientation = "row";
            myWindow.margins = 0;
            myWindow.margins.top = 5;
            myWindow.spacing = 0;
            var allGrp = myWindow.add("group");
            allGrp.graphics.backgroundColor = allGrp.graphics.newBrush(allGrp.graphics.BrushType.SOLID_COLOR, lightGray);
            allGrp.spacing = 0;
            var header = allGrp.add("group");
            header.orientation = "row";
            header.alignChildren = ["fill", "fill"];
            var iconGroup = header.add("group");
            iconGroup.alignChildren = ["right", ""];
            var icon = iconGroup.add("image", undefined, imgIcon);
            var functionGroup = allGrp.add("group");
            functionGroup.margins = 15;
            functionGroup.orientation = "column";
            var myInputGroup = functionGroup.add("group");
            myInputGroup.spacing = 8;
            var min = myInputGroup.add("edittext {text: \"0\", characters: 8, justify: \"center\"}");
            var divide = myInputGroup.add("statictext {text: \"~\", characters: 2, justify: \"center\"}");
            var max = myInputGroup.add("edittext {text: \"5\", characters: 8, justify: \"center\"}");
            var timeFormat = myInputGroup.add("dropdownlist", undefined, ["Frames", "Seconds"]);
            timeFormat.selection = 0;
            min.text = JsonSettingObj.randomKeys_preVal[0];
            max.text = JsonSettingObj.randomKeys_preVal[1];
            if (JsonSettingObj.randomKeys_preUnit == "Frames") {
                timeFormat.selection = 0;
            } else {
                timeFormat.selection = 1;
            }
            min.characters = 3;
            min.active = false;
            max.characters = 3;
            max.active = true;
            var OKbtn = myInputGroup.add("iconbutton", undefined, imgDoIt, {
                style: "toolbutton"
            });
            var Closebtn = myInputGroup.add("iconbutton", undefined, imgClose, {
                style: "toolbutton"
            });
            Closebtn.preferredSize = [23, 23];
            OKbtn.preferredSize = [53, 23];
            Closebtn.helpTip = "cancel and close window";
            var btnSize = [30, 25];
            min.addEventListener("keydown", function (kd) {
                pressed(kd);
            });
            max.addEventListener("keydown", function (kd) {
                pressed(kd);
            });
            OKbtn.onClick = function () {
                app.beginUndoGroup("Random Key");
                doRandom();
                JsonSettingObj.randomKeys_preVal[0] = min.text;
                JsonSettingObj.randomKeys_preVal[1] = max.text;
                if (timeFormat.selection.toString() != JsonSettingObj.randomKeys_preUnit) {
                    JsonSettingObj.randomKeys_preUnit = timeFormat.selection.toString();
                }
                var settingJson = createJsonFile("KEYboard_setting.json", JsonSettingObj);
                app.endUndoGroup();
                myWindow.close();
            };
            Closebtn.onClick = function () {
                myWindow.close();
            };
            myWindow.show();
        }

        function shiftUpKey(JsonSettingObj) {
            function doShift(offsetVal) {
                app.beginUndoGroup("Shift Keys by Enter");
                var myComp = app.project.activeItem;
                var seLayers = myComp.selectedLayers;
                if (seLayers.length > 50) {
                    info = myInputGroup.add("statictext", [0, 0, 100, 30], "");
                    myWindow.layout.layout(true);
                }
                Time = myComp.time;
                var dataObj = {};
                dataObj.numProps = seLayers.length;
                var everyProps = [];
                for (var x = 0; x < seLayers.length; x += 1) {
                    everyProps[x] = [];
                    for (var y = 0; y < (seLayers[x]).selectedProperties.length; y += 1) {
                        if (((seLayers[x]).selectedProperties[y]).propertyType == PropertyType.NAMED_GROUP) {
                            continue;
                        }
                        if (((seLayers[x]).selectedProperties[y]).selectedKeys === 0) {
                            continue;
                        }
                        everyProps[x][y] = (seLayers[x]).selectedProperties[y];
                    }
                }
                var selPropKeyData = [];
                for (var a = 0; a < everyProps.length; a += 1) {
                    selPropKeyData[a] = [];
                    for (var b = 0; b < (everyProps[a]).length; b += 1) {
                        selPropKeyData[a][b] = collectKeyframes(everyProps[a][b]);
                    }
                }
                dataObj.counter = 0;
                dataObj.offset = offsetVal;
                dataObj.format = timeFormat.selection.text;
                if (everyProps.length > 50) {
                    info.text = "move keyframes...";
                    myWindow.update();
                }
                for (var d = 0, l = everyProps.length; d < l; d++) {
                    dataObj.counter += 1;
                    for (var c = 0; c < (everyProps[d]).length; c += 1) {
                        if (everyProps[d][c] === null || everyProps[d][c] === undefined) {
                            continue;
                        }
                        (everyProps[d][c]).selected = true;
                        transferKeyframes(everyProps[d][c], selPropKeyData[d][c], dataObj, "shiftUp");
                    }
                }
                if (everyProps.length > 50) {
                    info.text = "select keyframes...";
                    myWindow.update();
                }
                for (var m = 0; m < everyProps.length; m += 1) {
                    for (var n = 0; n < (everyProps[m]).length; n += 1) {
                        if (selPropKeyData[m][n] === null || selPropKeyData[m][n] === undefined) {
                            continue;
                        }
                        var keysAry = selPropKeyData[m][n];
                        for (var k = 0; k < keysAry.length; k += 1) {
                            (everyProps[m][n]).setSelectedAtKey((keysAry[k]).curKeyIndex, true);
                        }
                    }
                }
                app.endUndoGroup();
                if (everyProps.length > 50) {
                    alert("finished");
                }
            }

            function pressed(k) {
                if (k.keyName == "Enter") {
                    if (isNaN(offsetVal.text)) {
                        offsetVal.text = 0;
                    }
                    doShift(Number(offsetVal.text));
                    if (offsetVal.text === 0) {
                        JsonSettingObj.shiftUpKeys_preVal = 5;
                    } else {
                        JsonSettingObj.shiftUpKeys_preVal = offsetVal.text;
                    }
                    if (timeFormat.selection.toString() != JsonSettingObj.shiftUpKeys_preUnit) {
                        JsonSettingObj.shiftUpKeys_preUnit = timeFormat.selection.toString();
                    }
                    var settingJson = createJsonFile("KEYboard_setting.json", JsonSettingObj);
                    myWindow.close();
                } else {
                    if (k.keyName == "Escape") {
                        myWindow.close();
                    }
                }
            }
            var binIcon = "PNG\r\n\n\0\0\0\rIHDR\0\0\0)\0\0\x003\b\0\0\0\n-!\v\0\0\0\tpHYs\0\0\v\0\0\v\0\0\0\0tEXtSoftware\0Adobe ImageReadyqÉe<\0\0ìIDATxÚì=NÃ@7=#8\x07\0):\x07HCZL·é¸Bè(1MÖ) \x07\tZP¸\0'HÄ\t7bBV+\x07ì°¶´#=íî¬ä|ñþdÒÐZ+éÖTÀ<¤,k¯YviË§É/)AI¿O·ôUÛ£çÜñ¶3B3Mÿo­áê@¡´¢vLEAúS:ôñSW4$\04÷hC\fxÂÃq Í ª´h$)ïÆ/b utH0]Ú.û+·Rû$Ò»æêåb~ç.¿³Í =×nV\0H¶Mc¼gh\0*4îÄÚ¦&Hw()&?nô\nP$]J]>ßÍAJÊ<³¶«NãM^Z ØCs3U\b´®ûä[Î±ªxÛqéÍ9VÉNáODÝÌ-ÐÂþ7üyTöQÑ¦Ë14:uGr]¡ôÊ¸OÕ~;\b¨ìÒaUI¥hÎQ­¹ûÏØEm`D95ú1úª\"rÚÐÀJù#hdFÑkp?²úWU¦»Ã)>À\x07=/®S. û-[WÒÄ­î§zW}Ö!S±ZH,q}^óå¶bl3Êê«5s¯îÂDù\vf\f\x000ee,E\0\0\0\0IEND®B`";
            var binClose = "PNG\r\n\n\0\0\0\rIHDR\0\0\0\0\0\0\b\0\0\0©¥\0\0\0\tpHYs\0\0\v\0\0\v\0\0\0\0tEXtSoftware\0Adobe ImageReadyqÉe<\0\0IDATxÚbüÿÿ?µ\r\0\v.\tiié U\0ÄúhRx\b?}úô6½èÞ\x07f\0¤6\0±<\x07}â ÁðzêºóD\bü@¼ª\x07»K¡.<\0UL*pºø\x006N Ó@h£zêJ{d\tsa)rMsNfD\\Ø 1\x07îÒ\0¬)!OÍl\bØ 1 \0=I9 «8ùö×b(P7a`\0½$'ÃÒ×àrh@`:ÌÆÄÌ*«æ¯~|Äç(­Dág%\"Æ\f}Í@X¼\fÂÈa|@7ô\0º\n\x0719¸ /0Ìà`ulÀø? §SU^AÛß£èÔ}ÿû\x07=Ë*ÀÊä0-@·Ý@¸ôá5ºà\\¸ (@×rF<¹é Ð@\x07±\vI0p!¶Ã­ä\x07ºØZèã0ì!(¸°{8\rE2\\ÛÍ að9u@\0ËßõP¸\0\0\0\0IEND®B`";
            var binShift = "PNG\r\n\n\0\0\0\rIHDR\0\0\x003\0\0\0\b\0\0\0ëTÖ\0\0\0\tpHYs\0\0\v\0\0\v\0\0\0\0tEXtSoftware\0Adobe ImageReadyqÉe<\0\0/IDATxÚbüÿÿ?Ãp,HKK;\fw>xúôéB±Å\fÐ\n@ªã\x07QÀ?¹\tè©D{è Õ?SÓE ÀS(zdÁ \r\\à# {\tÉ#ø<òt7\ncÄÀÏÍJK@úmµEÀl\râ£ËÇ8Êá37 \v2!±'rÄÔ-wÊç_c]~åædydÎ£×ßÀly1.ì®%PúÀ\bHÀð\fTPnìÆÓ¶ÞeÐz\ba<\x07\nÕc=pql ÛGAN\v+º±EhÀ3$¿¯¾ÓzGwògÝ°¡XÅ\bH(@\0¦D -yQ<£@r9ùêJr\0êSÏ.=øÈ°s q|±Û \0Ò\x07ÏÝ_1@[!¯XZ\nr<\rs,ÖÈªT E\n Û3°!ÇRÆ\t1á\x07¤jeVX, [+¡ÈÈ}WÞ=DlS\x07Ý3\x07Ñ*@å?\bWió\bÌ GÅAù$Ë[,NJ¬¡ç/yQ.¢ZÈ'Ø3ÐöÎCB:AE*¨(áËÀ)Ö70\0b<°½ÉÁ×L!¢ó$Qy{ }°ÙCd~µ9m¬B-~P¬`-\0 æÁÄ!âPF\rÀ[=j1öÁÖÈ$¦?\0mÔ\rOL ©?3ìzC\0\0jÁ-[\0\0\0\0IEND®B`";
            var imgIcon = createResourceFile("KEYboard_shiftUp.png", binIcon);
            var imgClose = createResourceFile("KEYboard_shiftUp_close.png", binClose);
            var imgDoIt = createResourceFile("KEYboard_DoIt.png", binShift);
            var lightGray = HexToRGB("#393939");
            var white = HexToRGB("#EEEEEE");
            var yellow = HexToRGB("#FFBC65");
            var red = HexToRGB("#AC4C5E");
            var purple = HexToRGB("#5C476F");
            var AEversion = app.version.substring(0, 4);
            if (AEversion < 12) {
                myWindow = new Window("palette", "ShiftUp", undefined, {
                    borderless: false
                });
            } else {
                myWindow = new Window("palette", "ShiftUp", undefined, {
                    borderless: false
                });
            }
            myWindow.graphics.backgroundColor = myWindow.graphics.newBrush(myWindow.graphics.BrushType.SOLID_COLOR, yellow);
            myWindow.alignChildren = ["fill", "fill"];
            myWindow.orientation = "row";
            myWindow.margins = 0;
            myWindow.margins.top = 5;
            myWindow.spacing = 0;
            var allGrp = myWindow.add("group");
            allGrp.graphics.backgroundColor = allGrp.graphics.newBrush(allGrp.graphics.BrushType.SOLID_COLOR, lightGray);
            allGrp.spacing = 0;
            var header = allGrp.add("group");
            header.orientation = "row";
            header.alignChildren = ["fill", "fill"];
            var iconGroup = header.add("group");
            iconGroup.alignChildren = ["right", ""];
            var icon = iconGroup.add("image", undefined, imgIcon);
            var functionGroup = allGrp.add("group");
            functionGroup.margins = 15;
            functionGroup.orientation = "column";
            var myInputGroup = functionGroup.add("group");
            myInputGroup.spacing = 8;
            var offsetVal = myInputGroup.add("edittext {text: \"5\", characters: 8, justify: \"left\"}");
            var timeFormat = myInputGroup.add("dropdownlist", undefined, ["Frames", "Seconds"]);
            offsetVal.text = JsonSettingObj.shiftUpKeys_preVal;
            if (JsonSettingObj.shiftUpKeys_preUnit == "Frames") {
                timeFormat.selection = 0;
            } else {
                timeFormat.selection = 1;
            }
            offsetVal.characters = 5;
            offsetVal.active = true;
            var OKbtn = myInputGroup.add("iconbutton", undefined, imgDoIt, {
                style: "toolbutton"
            });
            var Closebtn = myInputGroup.add("iconbutton", undefined, imgClose, {
                style: "toolbutton"
            });
            Closebtn.preferredSize = [23, 23];
            OKbtn.preferredSize = [53, 23];
            Closebtn.helpTip = "cancel and close window";
            var btnSize = [30, 25];
            offsetVal.addEventListener("keydown", function (kd) {
                pressed(kd);
            });
            OKbtn.onClick = function () {
                if (isNaN(offsetVal.text)) {
                    offsetVal.text = 0;
                }
                doShift(offsetVal.text);
                if (offsetVal.text === 0) {
                    JsonSettingObj.shiftUpKeys_preVal = 5;
                } else {
                    JsonSettingObj.shiftUpKeys_preVal = offsetVal.text;
                }
                if (timeFormat.selection.toString() != JsonSettingObj.shiftUpKeys_preUnit) {
                    JsonSettingObj.shiftUpKeys_preUnit = timeFormat.selection.toString();
                }
                var settingJson = createJsonFile("KEYboard_setting.json", JsonSettingObj);
                myWindow.close();
            };
            Closebtn.onClick = function () {
                myWindow.close();
            };
            myWindow.show();
        }

        function shiftDownKey(JsonSettingObj) {
            function doShift(offsetVal) {
                var myComp = app.project.activeItem;
                var seLayers = myComp.selectedLayers;
                if (seLayers.length > 50) {
                    info = myInputGroup.add("statictext", [0, 0, 100, 30], "");
                    myWindow.layout.layout(true);
                }
                Time = myComp.time;
                var dataObj = {};
                dataObj.numProps = seLayers.length;
                var everyProps = [];
                for (var x = 0; x < seLayers.length; x += 1) {
                    everyProps[x] = [];
                    for (var y = 0; y < (seLayers[x]).selectedProperties.length; y += 1) {
                        if (((seLayers[x]).selectedProperties[y]).propertyType == PropertyType.NAMED_GROUP) {
                            continue;
                        }
                        if (((seLayers[x]).selectedProperties[y]).selectedKeys === 0) {
                            continue;
                        }
                        everyProps[x][y] = (seLayers[x]).selectedProperties[y];
                    }
                }
                var selPropKeyData = [];
                for (var a = 0; a < everyProps.length; a += 1) {
                    selPropKeyData[a] = [];
                    for (var b = 0; b < (everyProps[a]).length; b += 1) {
                        selPropKeyData[a][b] = collectKeyframes(everyProps[a][b]);
                    }
                }
                dataObj.counter = 0;
                dataObj.offset = offsetVal;
                dataObj.format = timeFormat.selection.text;
                if (everyProps.length > 50) {
                    info.text = "move keyframes...";
                    myWindow.update();
                }
                for (var d = 0; d < everyProps.length; d += 1) {
                    dataObj.counter += 1;
                    for (var c = 0; c < (everyProps[d]).length; c += 1) {
                        if (everyProps[d][c] === null || everyProps[d][c] === undefined) {
                            continue;
                        }
                        (everyProps[d][c]).selected = true;
                        transferKeyframes(everyProps[d][c], selPropKeyData[d][c], dataObj, "shiftDown");
                    }
                }
                if (everyProps.length > 50) {
                    info.text = "select keyframes...";
                    myWindow.update();
                }
                for (var m = 0; m < everyProps.length; m += 1) {
                    for (var n = 0; n < (everyProps[m]).length; n += 1) {
                        if (selPropKeyData[m][n] === null || selPropKeyData[m][n] === undefined) {
                            continue;
                        }
                        var keysAry = selPropKeyData[m][n];
                        for (var k = 0; k < keysAry.length; k += 1) {
                            (everyProps[m][n]).setSelectedAtKey((keysAry[k]).curKeyIndex, true);
                        }
                    }
                }
                if (everyProps.length > 50) {
                    alert("finished");
                }
            }

            function pressed(k) {
                if (k.keyName == "Enter") {
                    app.beginUndoGroup("Shift Key");
                    if (isNaN(offsetVal.text)) {
                        offsetVal.text = 0;
                    }
                    doShift(offsetVal.text);
                    if (offsetVal.text === 0) {
                        JsonSettingObj.shiftDownKeys_preVal = 5;
                    } else {
                        JsonSettingObj.shiftDownKeys_preVal = offsetVal.text;
                    }
                    if (timeFormat.selection.toString() != JsonSettingObj.shiftDownKeys_preUnit) {
                        JsonSettingObj.shiftDownKeys_preUnit = timeFormat.selection.toString();
                    }
                    var settingJson = createJsonFile("KEYboard_setting.json", JsonSettingObj);
                    app.endUndoGroup();
                    myWindow.close();
                } else {
                    if (k.keyName == "Escape") {
                        myWindow.close();
                    }
                }
            }
            var binIcon = "PNG\r\n\n\0\0\0\rIHDR\0\0\0)\0\0\x003\b\0\0\0\n-!\v\0\0\0\tpHYs\0\0\v\0\0\v\0\0\0\0tEXtSoftware\0Adobe ImageReadyqÉe<\0\0ÏIDATxÚìONÂ@Æ§\\À?G(\x07Ð¤Æ5\và¶m7°eçtÇÒ²¶eãÝj4Á8ñ¨'¨ßÄG2´Øþy53É^Iùñ}Ìk©$à>:¢ÃBZÈ¿7)ûPÂÝI×Æm!-¤lRVéØ» ¶B:ÑS5$\0L÷,!\tpN/ý\" \0/4@¡N99ù\0½¦Ô7l ñù'¦¢+òRû$â;Ät\vM\0°É8®\\æ,R8¾si õIPõõSNÍ|¢\n\r4`uí¦¾çk¥%âq2+BZ\røsr8Wâæq%P°ç=AsæQî¸Sâ\f´Êã¦Ëoçt¹cs«ÖïT/|gI±`iÍº´Ý­Ö\nhÿãXÈ\tõàT¯cÕjÏW·î§×´@Ã®ëÞaöHÕ@Â´%W\"ãØê±©¹kë\bëQUNÆäN±Í¨®¾Hç0ÜsèøØXÏªÛ#3|ÐË®õ\n¿üjÙ8CH¹´VRñsÜÝGé1´¢øÙAF´SÕø ±Tq_AÛ][éNeJ]jsDËÞ`XÈVB~\v0\0Oë2ëA\0\0\0\0IEND®B`";
            var binClose = "PNG\r\n\n\0\0\0\rIHDR\0\0\0\0\0\0\b\0\0\0©¥\0\0\0\tpHYs\0\0\v\0\0\v\0\0\0\0tEXtSoftware\0Adobe ImageReadyqÉe<\0\0IDATxÚbüÿÿ?µ\r\0\v.\tiié U\0ÄúhRx\b?}úô6½èÞ\x07f\0¤6\0±<\x07}â ÁðzêºóD\bü@¼ª\x07»K¡.<\0UL*pºø\x006N Ó@h£zêJ{d\tsa)rMsNfD\\Ø 1\x07îÒ\0¬)!OÍl\bØ 1 \0=I9 «8ùö×b(P7a`\0½$'ÃÒ×àrh@`:ÌÆÄÌ*«æ¯~|Äç(­Dág%\"Æ\f}Í@X¼\fÂÈa|@7ô\0º\n\x0719¸ /0Ìà`ulÀø? §SU^AÛß£èÔ}ÿû\x07=Ë*ÀÊä0-@·Ý@¸ôá5ºà\\¸ (@×rF<¹é Ð@\x07±\vI0p!¶Ã­ä\x07ºØZèã0ì!(¸°{8\rE2\\ÛÍ að9u@\0ËßõP¸\0\0\0\0IEND®B`";
            var binShift = "PNG\r\n\n\0\0\0\rIHDR\0\0\x003\0\0\0\b\0\0\0ëTÖ\0\0\0\tpHYs\0\0\v\0\0\v\0\0\0\0tEXtSoftware\0Adobe ImageReadyqÉe<\0\0/IDATxÚbüÿÿ?Ãp,HKK;\fw>xúôéB±Å\fÐ\n@ªã\x07QÀ?¹\tè©D{è Õ?SÓE ÀS(zdÁ \r\\à# {\tÉ#ø<òt7\ncÄÀÏÍJK@úmµEÀl\râ£ËÇ8Êá37 \v2!±'rÄÔ-wÊç_c]~åædydÎ£×ßÀly1.ì®%PúÀ\bHÀð\fTPnìÆÓ¶ÞeÐz\ba<\x07\nÕc=pql ÛGAN\v+º±EhÀ3$¿¯¾ÓzGwògÝ°¡XÅ\bH(@\0¦D -yQ<£@r9ùêJr\0êSÏ.=øÈ°s q|±Û \0Ò\x07ÏÝ_1@[!¯XZ\nr<\rs,ÖÈªT E\n Û3°!ÇRÆ\t1á\x07¤jeVX, [+¡ÈÈ}WÞ=DlS\x07Ý3\x07Ñ*@å?\bWió\bÌ GÅAù$Ë[,NJ¬¡ç/yQ.¢ZÈ'Ø3ÐöÎCB:AE*¨(áËÀ)Ö70\0b<°½ÉÁ×L!¢ó$Qy{ }°ÙCd~µ9m¬B-~P¬`-\0 æÁÄ!âPF\rÀ[=j1öÁÖÈ$¦?\0mÔ\rOL ©?3ìzC\0\0jÁ-[\0\0\0\0IEND®B`";
            var imgIcon = createResourceFile("KEYboard_shiftDown.png", binIcon);
            var imgClose = createResourceFile("KEYboard_shiftDown_close.png", binClose);
            var imgDoIt = createResourceFile("KEYboard_DoIt2.png", binShift);
            var lightGray = HexToRGB("#393939");
            var white = HexToRGB("#EEEEEE");
            var yellow = HexToRGB("#FFBC65");
            var red = HexToRGB("#AC4C5E");
            var purple = HexToRGB("#5C476F");
            var AEversion = app.version.substring(0, 4);
            if (AEversion < 12) {
                myWindow = new Window("palette", "ShiftDown", undefined, {
                    borderless: false
                });
            } else {
                myWindow = new Window("palette", "ShiftDown", undefined, {
                    borderless: false
                });
            }
            myWindow.graphics.backgroundColor = myWindow.graphics.newBrush(myWindow.graphics.BrushType.SOLID_COLOR, yellow);
            myWindow.alignChildren = ["fill", "fill"];
            myWindow.orientation = "row";
            myWindow.margins = 0;
            myWindow.margins.top = 5;
            myWindow.spacing = 0;
            var allGrp = myWindow.add("group");
            allGrp.graphics.backgroundColor = allGrp.graphics.newBrush(allGrp.graphics.BrushType.SOLID_COLOR, lightGray);
            allGrp.spacing = 0;
            var header = allGrp.add("group");
            header.orientation = "row";
            header.alignChildren = ["fill", "fill"];
            var iconGroup = header.add("group");
            iconGroup.alignChildren = ["right", ""];
            var icon = iconGroup.add("image", undefined, imgIcon);
            var functionGroup = allGrp.add("group");
            functionGroup.margins = 15;
            functionGroup.orientation = "column";
            var myInputGroup = functionGroup.add("group");
            myInputGroup.spacing = 8;
            var offsetVal = myInputGroup.add("edittext {text: \"5\", characters: 8, justify: \"left\"}");
            var timeFormat = myInputGroup.add("dropdownlist", undefined, ["Frames", "Seconds"]);
            offsetVal.text = JsonSettingObj.shiftDownKeys_preVal;
            if (JsonSettingObj.shiftDownKeys_preUnit == "Frames") {
                timeFormat.selection = 0;
            } else {
                timeFormat.selection = 1;
            }
            offsetVal.characters = 5;
            offsetVal.active = true;
            var OKbtn = myInputGroup.add("iconbutton", undefined, imgDoIt, {
                style: "toolbutton"
            });
            var Closebtn = myInputGroup.add("iconbutton", undefined, imgClose, {
                style: "toolbutton"
            });
            Closebtn.preferredSize = [23, 23];
            OKbtn.preferredSize = [53, 23];
            Closebtn.helpTip = "cancel and close window";
            var btnSize = [30, 25];
            OKbtn.onClick = function () {
                app.beginUndoGroup("Shift Key");
                if (isNaN(offsetVal.text)) {
                    offsetVal.text = 0;
                }
                doShift(offsetVal.text);
                if (offsetVal.text === 0) {
                    JsonSettingObj.shiftDownKeys_preVal = 5;
                } else {
                    JsonSettingObj.shiftDownKeys_preVal = offsetVal.text;
                }
                if (timeFormat.selection.toString() != JsonSettingObj.shiftDownKeys_preUnit) {
                    JsonSettingObj.shiftDownKeys_preUnit = timeFormat.selection.toString();
                }
                var settingJson = createJsonFile("KEYboard_setting.json", JsonSettingObj);
                app.endUndoGroup();
                myWindow.close();
            };
            Closebtn.onClick = function () {
                myWindow.close();
            };
            offsetVal.addEventListener("keydown", function (kd) {
                pressed(kd);
            });
            myWindow.show();
        }

        function addMirrorKey(propertyInput, Time, curKeyTime) {
            var addNewKey = propertyInput.addKey(Time - curKeyTime);
            return addNewKey;
        }

        function addCloneKey(propertyInput, Time, curKeyTime) {
            var addNewKey = propertyInput.addKey(Time + curKeyTime);
            return addNewKey;
        }

        function collectKeyframes(propertyInput) {
            if (propertyInput instanceof Property) {
                twoDs = PropertyValueType.TwoD_SPATIAL;
                threeDs = PropertyValueType.ThreeD_SPATIAL;
                keyIndexList = [];
                totalKeys = propertyInput.numKeys;
                selKeys = propertyInput.selectedKeys;
                if (propertyInput.propertyValueType !== PropertyValueType.CUSTOM_VALUE) {
                    if (selKeys.length > 0) {
                        for (var i = 0; i < selKeys.length; i += 1) {
                            curKeyTime = propertyInput.keyTime(selKeys[i]);
                            curKeyIndex = selKeys[i];
                            curKeyValue = propertyInput.keyValue(selKeys[i]);
                            inin = propertyInput.keyInInterpolationType(curKeyIndex);
                            outin = propertyInput.keyOutInterpolationType(curKeyIndex);
                            if (inin == KeyframeInterpolationType.BEZIER && outin == KeyframeInterpolationType.BEZIER) {
                                ab = propertyInput.keyTemporalAutoBezier(curKeyIndex);
                                cb = propertyInput.keyTemporalContinuous(curKeyIndex);
                            }
                            if (inin != KeyframeInterpolationType.HOLD || outin != KeyframeInterpolationType.HOLD) {
                                ie = propertyInput.keyInTemporalEase(curKeyIndex);
                                oe = propertyInput.keyOutTemporalEase(curKeyIndex);
                            }
                            if (propertyInput.propertyValueType == twoDs || propertyInput.propertyValueType == threeDs) {
                                sab = propertyInput.keySpatialAutoBezier(curKeyIndex);
                                scb = propertyInput.keySpatialContinuous(curKeyIndex);
                                ist = propertyInput.keyInSpatialTangent(curKeyIndex);
                                ost = propertyInput.keyOutSpatialTangent(curKeyIndex);
                                rov = propertyInput.keyRoving(curKeyIndex);
                            }
                            keyIndexList[keyIndexList.length] = {
                                curKeyTime: curKeyTime,
                                curKeyIndex: curKeyIndex,
                                curKeyValue: curKeyValue,
                                inin: inin,
                                outin: outin,
                                ab: ab,
                                cb: cb,
                                ie: ie,
                                oe: oe,
                                sab: sab,
                                scb: scb,
                                ist: ist,
                                ost: ost,
                                rov: rov
                            };
                        }
                        return keyIndexList;
                    } else {
                        return null;
                    }
                } else {
                    return null;
                }
            }
        }

        function transferMirrorKeyframes(propertyInput, keysAry, Time, mode) {
            try {
                if (propertyInput instanceof Property && keysAry instanceof Array) {
                    keysAryLength = keysAry.length;
                    if (propertyInput.numKeys > 0) {
                        for (var k = keysAryLength - 1; k >= 0; k--) {
                            switch (mode) {
                                case "mirror":
                                    addNewKey = addMirrorKey(propertyInput, Time, (keysAry[k]).curKeyTime);
                                    break;
                                case "clone":
                                    addNewKey = addCloneKey(propertyInput, Time, (keysAry[k]).curKeyTime);
                                    break;
                                case "organize":
                                    duration = app.project.activeItem.frameDuration;
                                    var correctTime = Math.round((keysAry[k]).curKeyTime / duration) * duration;
                                    propertyInput.removeKey(propertyInput.nearestKeyIndex((keysAry[k]).curKeyTime));
                                    addNewKey = propertyInput.addKey(correctTime);
                                    break;
                                case "shiftUp":
                                    duration = app.project.activeItem.frameDuration;
                                    factor = (Time.numProps == 1 ? 0 : (Time.counter - 1) / (Time.numProps - 1));
                                    offsetTime = Time.offset * factor;
                                    offsetTime = (Time.format == "Frames" ? offsetTime * duration : offsetTime);
                                    propertyInput.removeKey(propertyInput.nearestKeyIndex((keysAry[k]).curKeyTime));
                                    addNewKey = propertyInput.addKey((keysAry[k]).curKeyTime + offsetTime);
                                    break;
                                case "shiftDown":
                                    duration = app.project.activeItem.frameDuration;
                                    factor = (Time.numProps == 1 ? 0 : (Time.numProps - Time.counter) / (Time.numProps - 1));
                                    offsetTime = Time.offset * factor;
                                    offsetTime = (Time.format == "Frames" ? offsetTime * duration : offsetTime);
                                    propertyInput.removeKey(propertyInput.nearestKeyIndex((keysAry[k]).curKeyTime));
                                    addNewKey = propertyInput.addKey((keysAry[k]).curKeyTime + offsetTime);
                                    break;
                            }
                            if (k < (keysAryLength - 1)) {
                                bakKeyIndex = newKeyIndex;
                            }
                            newKeyIndex = addNewKey;
                            propertyInput.setValueAtKey(newKeyIndex, (keysAry[k]).curKeyValue);
                            if ((keysAry[k]).inin == KeyframeInterpolationType.BEZIER && (keysAry[k]).outin == KeyframeInterpolationType.BEZIER) {
                                propertyInput.setTemporalEaseAtKey(newKeyIndex, (keysAry[k]).oe, (keysAry[k]).ie);
                            }
                            propertyInput.setInterpolationTypeAtKey(newKeyIndex, (keysAry[k]).outin, (keysAry[k]).inin);
                            if ((keysAry[k]).inin == KeyframeInterpolationType.BEZIER && (keysAry[k]).outin == KeyframeInterpolationType.BEZIER && (keysAry[k]).cb) {
                                propertyInput.setTemporalContinuousAtKey(newKeyIndex, (keysAry[k]).cb);
                                propertyInput.setTemporalAutoBezierAtKey(newKeyIndex, (keysAry[k]).ab);
                            }
                            if (propertyInput.propertyValueType == PropertyValueType.TwoD_SPATIAL || propertyInput.propertyValueType == PropertyValueType.ThreeD_SPATIAL) {
                                propertyInput.setSpatialContinuousAtKey(newKeyIndex, (keysAry[k]).scb);
                                propertyInput.setSpatialAutoBezierAtKey(newKeyIndex, (keysAry[k]).sab);
                                propertyInput.setSpatialTangentsAtKey(newKeyIndex, (keysAry[k]).ost, (keysAry[k]).ist);
                                if (k < (keysAryLength - 1)) {
                                    propertyInput.setRovingAtKey(bakKeyIndex, (keysAry[k + 1]).rov);
                                }
                            }
                        }
                    }
                    return true;
                }
            } catch (err) {
                alert(err.line.toString() + "\r" + err.toString());
            }
        }

        function transferKeyframes(propertyInput, keysAry, Time, mode) {
            try {
                if (propertyInput instanceof Property && keysAry instanceof Array) {
                    keysAryLength = keysAry.length;
                    if (propertyInput.numKeys > 0) {
                        for (var m = 0; m < keysAryLength; m += 1) {
                            switch (mode) {
                                case "mirror":
                                    break;
                                case "clone":
                                    break;
                                case "organize":
                                    propertyInput.removeKey(propertyInput.nearestKeyIndex((keysAry[m]).curKeyTime));
                                    break;
                                case "shiftUp":
                                    propertyInput.removeKey(propertyInput.nearestKeyIndex((keysAry[m]).curKeyTime));
                                    break;
                                case "shiftDown":
                                    propertyInput.removeKey(propertyInput.nearestKeyIndex((keysAry[m]).curKeyTime));
                                    break;
                                case "align":
                                    propertyInput.removeKey(propertyInput.nearestKeyIndex((keysAry[m]).curKeyTime));
                                    break;
                                case "random":
                                    propertyInput.removeKey(propertyInput.nearestKeyIndex((keysAry[m]).curKeyTime));
                                    break;
                            }
                        }
                        for (var k = 0; k < keysAryLength; k += 1) {
                            switch (mode) {
                                case "mirror":
                                    addNewKey = addMirrorKey(propertyInput, Time, (keysAry[k]).curKeyTime);
                                    break;
                                case "clone":
                                    addNewKey = addCloneKey(propertyInput, Time, (keysAry[k]).curKeyTime);
                                    break;
                                case "organize":
                                    duration = app.project.activeItem.frameDuration;
                                    correctTime = Math.round((keysAry[k]).curKeyTime / duration) * duration;
                                    if ((keysAry[k]).curKeyTime !== correctTime) {
                                        Time.correctedKeyNums += 1;
                                    }
                                    addNewKey = propertyInput.addKey(correctTime);
                                    break;
                                case "shiftUp":
                                    duration = app.project.activeItem.frameDuration;
                                    factor = (Time.numProps == 1 ? 0 : (Time.counter - 1) / (Time.numProps - 1));
                                    offsetTime = Time.offset * factor;
                                    offsetTime = (Time.format == "Frames" ? offsetTime * duration : offsetTime);
                                    addNewKey = propertyInput.addKey((keysAry[k]).curKeyTime + offsetTime);
                                    break;
                                case "shiftDown":
                                    duration = app.project.activeItem.frameDuration;
                                    factor = (Time.numProps == 1 ? 0 : (Time.numProps - Time.counter) / (Time.numProps - 1));
                                    offsetTime = Time.offset * factor;
                                    offsetTime = (Time.format == "Frames" ? offsetTime * duration : offsetTime);
                                    addNewKey = propertyInput.addKey((keysAry[k]).curKeyTime + offsetTime);
                                    break;
                                case "align":
                                    addNewKey = propertyInput.addKey((keysAry[k]).curKeyTime + Time);
                                    break;
                                case "random":
                                    duration = app.project.activeItem.frameDuration;
                                    correctTime = (keysAry[k]).curKeyTime;
                                    correctTime = (Time.format.toString() == "Frames" ? correctTime + (Time.offset * duration) : correctTime + Time.offset);
                                    addNewKey = propertyInput.addKey(correctTime);
                                    break;
                            }
                            if (k < keysAryLength) {
                                bakKeyIndex = newKeyIndex;
                            }
                            newKeyIndex = addNewKey;
                            propertyInput.setValueAtKey(newKeyIndex, (keysAry[k]).curKeyValue);
                            propertyInput.setInterpolationTypeAtKey(newKeyIndex, (keysAry[k]).inin, (keysAry[k]).outin);
                            if ((keysAry[k]).inin == KeyframeInterpolationType.BEZIER && (keysAry[k]).outin == KeyframeInterpolationType.BEZIER) {
                                propertyInput.setTemporalEaseAtKey(newKeyIndex, (keysAry[k]).ie, (keysAry[k]).oe);
                            }
                            if ((keysAry[k]).inin == KeyframeInterpolationType.BEZIER && (keysAry[k]).outin == KeyframeInterpolationType.BEZIER && (keysAry[k]).cb) {
                                propertyInput.setTemporalContinuousAtKey(newKeyIndex, (keysAry[k]).cb);
                                propertyInput.setTemporalAutoBezierAtKey(newKeyIndex, (keysAry[k]).ab);
                            }
                            if (propertyInput.propertyValueType == PropertyValueType.TwoD_SPATIAL || propertyInput.propertyValueType == PropertyValueType.ThreeD_SPATIAL) {
                                propertyInput.setSpatialContinuousAtKey(newKeyIndex, (keysAry[k]).scb);
                                propertyInput.setSpatialAutoBezierAtKey(newKeyIndex, (keysAry[k]).sab);
                                propertyInput.setSpatialTangentsAtKey(newKeyIndex, (keysAry[k]).ist, (keysAry[k]).ost);
                                if (k < keysAryLength && k !== 0) {
                                    propertyInput.setRovingAtKey(bakKeyIndex, (keysAry[k - 1]).rov);
                                }
                            }
                        }
                    }
                    return true;
                }
            } catch (err) {
                alert(err.line.toString() + "\r" + err.toString());
            }
        }

        function runFoolParent() {
            function whatsup(p, w) {
                if (p.button == 2) {
                    var pos = new Array();
                    pos[0] = p.screenX;
                    pos[1] = p.screenY;
                }
            }
            var binHr = "PNG\r\n\n\0\0\0\rIHDR\0\0\0x\0\0\0\b\0\0\0×ã\\\0\0\0\tpHYs\0\0\v\0\0\v\0\0\0\0tEXtSoftware\0Adobe ImageReadyqÉe<\0\0\0IDATxÚbáååe´\x07L£A0ÐÃ\n\0\0ÂL\x000½\0\0\0\0IEND®B`";
            var binClose = "PNG\r\n\n\0\0\0\rIHDR\0\0\0\0\0\0\b\0\0\0h6\0\0\0\tpHYs\0\0\v\0\0\v\0\0\0\0tEXtSoftware\0Adobe ImageReadyqÉe<\0\0IDATxÚ´R¡Â0\\×®\tì$~AÍãñ(<G¡0(>Aaø\0\f0Ö®ãBY×-CÂÍëë]îz-\tÃÐù¦\\çËú0N¼^VN:9Ý9VC 0èX°¾¤Gª®nÜüÎ£F»gJ*a²aê¡áçLÕ$áZ­ÉOTU\bØã §\\Í\bÖ-@píK\x07VrLAjÙNùpémKBÝlÑ/Ú©=©ô-íLÐ¬ëÛFÛêCøÛºB,¨AÃ÷´X5¯+o¼²Ç\vèL7-IsJ;./¯3$dW¾0j(ò÷ßú`\0r%x*<ùw\0\0\0\0IEND®B`";
            var binBtn01 = "PNG\r\n\n\0\0\0\rIHDR\0\0\0\0\0\0\b\0\0\0(w¹°\0\0\0\tpHYs\0\0\v\0\0\v\0\0\0\0tEXtSoftware\0Adobe ImageReadyqÉe<\0\0ÃIDATxÚì]HSaÇ3?Ö>³Ó@ZFaf]4o6ºP\nóF»È èÂ¢@ªA]DAÝ¤WÅ ºy£BaEä0ÚÔù1mnÚ´­~ëµÓÚ#krçýzÎöÿ¿ÿçyÏI+))Y±X\\!Û_°22+²É¬,'VftyÃÛ*ûö](«ÊÝ(õã÷TÝ![K7\fR#¨P¨°BFzÀ¯q¿Uë¦:î«?¾b4sj|hÇ¡_5êó}>àß°ÈÆûWT#ã°\"z\fwéD:ëÞØhæ½±MæçôÚcºÏç¦-aª=ÎlUñ¡3É1pùõ/ñN{×´I~í2Ï`cE BSØz- Ëë7×ÏI)à7tÞ-2¦rÄA~È»÷äW}ÁúKåíêÇ«á)vZ`Sûô£Øþ;ÇXÈµªËÎÚ?ÿcbZ+2C\0sO]No«ÔíxÞo©,¯{@ßº\f¯ik\n­ÒÒ\"ì[³ùEá86+¢)Äqã(»íS;õþÒ¾òZ¡<}Ë8¨<ûÈ°ª @\fÑ£{z=ÓÕ³àRC+spçVâæ¨ùMÓÞVFß\x07;ÐÐD@\f\"ØágºzÑýó 0AmH©¼«û¹rz2°iW¸ìé\vÂIµa{TX!JF¢Çgª¡Zª½j´oF»G*-d6|!\tãîDñÜÃGòZ¬ÜÕ_-«mVPf;ûKÒ©¸ËÅÖS§ÍJ4\0ÝC\r\fICÍ=6¬ØÜá#T©[>Õ^áØ¸|Eúêªi¦¼ãûò·r$+´_s ùQ6t¾\r¤]vÒ@C¯úy\"èÖ¥'ølíÈ\nOv\"Àâ<\v\b'*ì²=ÁÁ'ÓÑ`zCÇí¬I7ç.®ì¾çÆÇ´®·LødªSxÝÂ5ª´ÏTåêE\r`Ê¥èë¤3cÜOÁpr»H(ñjõ®´R RÐ´7G=kqaSj\tRà¼ùáYÊ¾¨üÁÇ--'Z:ö\0@ÍSÕ(Ê\0£$z¸,ÂÌDjLCd3\"_Õ¶7GþoÌãJæAÿ§¥E~3¦ôOQð¡$ÛñL¨\0¼Çð6¹Xþf¼¬HåÝ½­bzíÜ·¬ÉadÄû£TÿeVþ+ÉÌÊÒ}MfE6±ï\f\0èðøÔyhí\0\0\0\0IEND®B`";
            var binBtn02 = "PNG\r\n\n\0\0\0\rIHDR\0\0\0\0\0\0\b\0\0\0(w¹°\0\0\0\tpHYs\0\0\v\0\0\v\0\0\0\0tEXtSoftware\0Adobe ImageReadyqÉe<\0\0IDATxÚìXMkQu©¡J\n¢´\vQ4\bJºJëBÚ¿ÀåÎMq p'¥ HÅE©(è\"QT£NÞò\"1q9Ç7÷½;sî×áÁ æ¹è÷û\x07V¥@¤«òLü¹Q¼^..oÄÁBåîø¹¢=7ògÇÙá£I%N^áÞð²íJ2úÊ\\dâòÇJÜñûÊº|½½¼jV\"úÊª1ÛÕ\t¡P]öz½|> v8ápØb±¡R©4#Èd2©V«{JÑQx»Ý¾§jq­Ök>_Ç«ò­øë^-Ât:e²ÍfÃÍf+J§Ó8\f/|¾x<.\bÂh4b3pF\"hµZ¹\\¶Ün·Ïç«×ë.k>ï·Øív_þHÇÌá³Y0¼vª5ÚÀd2Áh4JAÝh4Ô`y8z½ÞZ­6Í¼¤Äz·VÍfÄ~¡PÀ]Çz½8üÝn·Ëå2]Eä(@ÆrÊWÊÔ]ë°¡üÈÆè+Èæ@ü9µ)Þ\\ VAø N;0Bw!20\vÒÁT&¡I*M>Q\f5*PÛ5\x07;o§\\K\f²N§Ën} ¶kV«u×Ð\t¯H)÷©T¥\vÂ!ÌÁ>F¦yÜe¤Göô6 `nkác\bÉ=aÎØµÎÚÞ3\fÙ+Ü[WÕ;tx){ívøX,ÆØa!êÏ¢yQVy¤¢DÀÎTÓ¶wÞcýTÏ`8qQ{§Â%Ñ%O\\ P c¶gðèñx¨¦ã®Óé¸'Ò\vÍ\tKÐZ@7djc²¬Wàõ§â\\Ä!Xn{ÿ@\\d¤ëí8£Ùl&IÑTñ¼ÛÝ:ßïG°K¹Öþ¯ÿq]ýûH¼.¿ý²Xýg|Ø3þpâÒè8Exe»y{Exeqy³jÎ4Äå÷Û'¨¨8B·\x07ÅkEÛ«8.þ\n0\0·ÞÛØkÁ|\0\0\0\0IEND®B`";
            var binBtn03 = "PNG\r\n\n\0\0\0\rIHDR\0\0\0\0\0\0\b\0\0\0(w¹°\0\0\0\tpHYs\0\0\v\0\0\v\0\0\0\0tEXtSoftware\0Adobe ImageReadyqÉe<\0\0 IDATxÚì¿QÇõ¸`¥ÐæÎÊ&Z)\bvZI+pmút©Rä°³3ZI;«ÆJÏBá@D#ùàe×Qï¼ó²S,oß7;óýÎÌsWw<wí+£ÑÈåÈÈÃ#+'+çö©WVªÞÜºg?Ä÷ùß/WóîÓù×oNm=+ÊböÓmÙ ±X,H·Óé´ÓéB¡z½¾CHd]ÿ\v+¾ì\\ÃáÐf·ÛÝ¼.½^o«ÕzÆÅJ¥BÞ+ßï×××¸Õn·©$®ápØçó±\nGåÅ½8(VÑ2WnËå²¢Ñ(¡&IÆ¢L&3¡LyîJ;h»&\tÏÏç&få ¢LÙ·á°²6;eÙ1reÆù|13²ÂÑb9ö¿ß¸7Ûº¼¼Ì\b¼\x07P\"\bÐT¨x]­E¢e ¦A¿ßÇl¯×S¯«V«(Ã\x07óBM²Îf:ÅØàO|\bz8NËgóvU¿Â\t-Åâ\0¾  /K¥Ò}ÖÊÕë»+×ù\x07Ø/vê`J\tø÷$Ôl6%¢B9\b(AD°rUb2#´¤»ÐÁB*¢ª,ö\nwÑÀF»F8`wtM®ª°=íÅäùH£(\nµZm>ñd³YX}Õf[æe0¶#'¸.­v:ªÁ`@)¬sWÑ±l7Â±;°SAé´ß*DH<DHß'Hz×3\tD XÑ\nÄLbÂ¨:(°*s¹¹O:oµÃ\fõÊ.ò\x07,[XEÄ7jwÃÜ,ì]Ç;íí£³$*b¦QØOûáRhÍÒÔ¡\nXN[ã$-Æ¸½©Zì@@Í#X§_A@³Ù\\éù¦Åó»Ùæ®§½ÛþÍøóÛ_õÿòÎxüoÆÂkCÏ9DÎ«ÒÙ\t}\\!+õëëÙ¿EºÿW 8ßµVqX9]ù+À\0wtL¦½d\0\0\0\0IEND®B`";
            var binBtn04 = "PNG\r\n\n\0\0\0\rIHDR\0\0\0\0\0\0\b\0\0\0(w¹°\0\0\0\tpHYs\0\0\v\0\0\v\0\0\0\0tEXtSoftware\0Adobe ImageReadyqÉe<\0\0óIDATxÚì¿ªQÆ¯ù£¤P\bhsce­­´²³vv>@#EÀÎN\b()ìì¬4V\"v^\v\vZi~°lv×Å${½áL±ÏÎÌùæ9sv×H±X¼ù]Ùl67FA\nLV¬<Yyáúôþ;×ùfr¦½rûú!þÊóô;X¡P¨×ëî§R©àÊdå_\nÌårÿ1¿TuÀ¹$ÉjµÊñb±Ç$@÷ûýh4*ËoÎÅf³Ã¼T*iÓH¹V«-K©5Íù|¾ÝnL$RØívív{:b8×ëµ§²b\0$Ù·i*`¼¡Ã<N£ùñxL&\0\0c]ÕH´:Wt½B0×ét@, ù|¬Ì\0»âjÜ)!rz½Ê§Ó\t.HI&Ñ-²\b0¹¼`¢Óív­¸ýúøÉº¢Ì.ñx¼ßïsÒ¹ë6×¬xO\0$@Î\t¸WÊaé`$L ØD`6Í2³Z­T¶DÄ±PF£ÚmÉ³¬ê+*P?,\x07~ZòçXÏhÛ\\>ýp%OøòÉ8(¡@û\\ÙY\b¤¸¨JîÇC´\\ÃÕ++£­VË^æRó÷£êAjóÁ`@ÿñÄ\0l·¹c\t7°öÐGañ[1Ð@àyµïKûJ6&±ÂdwØ¤3¨Cª¯ñC­À/¶Lðî x&0¬s\r÷\n¯,ooì3_ï\"þ¾Ø·Xí\v!<bc`ÍX!jj&£Ðëð!ÑÒâÒQýZç¶c\\òÃ%1Â)výÃáÐh4¬ÓÃ\\°¯\x07 óéWOûû1ïö¤Ä­úîãË»ûó¿9ñ\x07òªDVÜ¡øâ8ØÉ¿JõR*ÿWÌ»½#Ê\0T\b\0ø=\0\0\0\0IEND®B`";
            var binBtn05 = "PNG\r\n\n\0\0\0\rIHDR\0\0\0\0\0\0\b\0\0\0(w¹°\0\0\0\tpHYs\0\0\v\0\0\v\0\0\0\0tEXtSoftware\0Adobe ImageReadyqÉe<\0\0;IDATxÚìÏK*QÇóiHaºÈEI¯ÐÑ~«Úõ¸kçå®;Wí\\\b\vµÚ(\"2EY-úàË`å£yÏxÉ=áÞ3çßïýs®¶h4:eÕ\fÃÒ6û¥!Ð¬hû\"+±XlssS#ò?}qqQF¡PÈår=<<,,,¬®®z<~¿ÿòò\"n·{{{»ÙlªyE#8^V@¿ÛíÃáÍÖëõG$q:···âà÷ûá\tÚ4+c5y²¾¾~ssãõzþêê;FÌnêõ:S®óóó­Vë} D\"NNNdº´´txxN§G//njÚétr¹b]×©åååÙÙÙr¹|~~XRc GâsÏ?ÿôÀÇãñ¿ÈÇ³K&A+Ô\b@%kkkHÄçóñÛ éúúdÀÉd»Ý¦b1.JüÌ\fÁ 9óàà!êA¼Ñ\">Åb§ÂÂah\tE­Y»?U+Ôvpç@@­V+\nð¤º2jå5NOO766F{*A|çææx%É0ytqqÊP\x07<åºµµõ~\tqþñZA%ÓÓÓlÀ@ÌîîîÎÎÎëë«äzaî«k>\0z\0ÀI¹J¥RâÉ*8C\fW6È+\"üE1ÙlVdqtt$¡jÜ|E1ßßß'j´\0 ¢ör¥Rù,ÿ°>4`®öRWª\våóyÖ\x07¯ Can{0ø -F%ÕjÝüØÝÝÓ@ \0RÏÏÏ0ÛØ§ø|ØÑPÂ;Ö¾\t&èÅ%\r±ËMôD¦\"8ÌÍÔLV\bZ¡>;;«ÌÅÞÞàø,0R(³Òü0áüÇG»\f%ðòòR=%¬tá26kÈ,\\¾äçV{ù?c+T{14b¸É$Æßn·ÓÌMþÏø;XQ\x07J$.dD¡\v øÃ\"F³òg{Ê><½#º22å³6ë¬09¸iÔ¾ï©M³¢m½\t0\0Ôé¹BW.Þ\0\0\0\0IEND®B`";
            var imgHr = createResourceFile("FoolParent_hr.png", binHr);
            var imgClose = createResourceFile("FoolParent_close.png", binClose);
            var imgBtn01 = createResourceFile("FoolParent_Btn01.png", binBtn01);
            var imgBtn02 = createResourceFile("FoolParent_Btn02.png", binBtn02);
            var imgBtn03 = createResourceFile("FoolParent_Btn03.png", binBtn03);
            var imgBtn04 = createResourceFile("FoolParent_Btn04.png", binBtn04);
            var imgBtn05 = createResourceFile("FoolParent_Btn05.png", binBtn05);
            var w = new Window("palette", "FoolParent", undefined, {
                borderless: false
            });
            var myFile = new File(Folder.userData.absoluteURI + "/Ola script UI/cursorPos.txt");
            if (File(myFile).exists) {
                if (myFile.open("r")) {
                    myFile.encoding = "UTF-8";
                    var txt = myFile.read();
                    pos = txt.split(",");
                    myFile.close();
                }
            }
            if (pos !== undefined) {
                w.location = pos - [15, 15];
            }
            var btnGrp = w.add("group");
            var btnSize = [138, 22];
            btnGrp.button = btnGrp.add("iconbutton", undefined, imgBtn01, {
                style: "toolbutton"
            });
            btnGrp.button.helpTip = "Right click for more mode :)";
            btnGrp.btnParentChain = btnGrp.add("iconbutton", undefined, imgBtn02, {
                style: "toolbutton"
            });
            btnGrp.btnFirstP = btnGrp.add("iconbutton", undefined, imgBtn03, {
                style: "toolbutton"
            });
            btnGrp.btnLastP = btnGrp.add("iconbutton", undefined, imgBtn04, {
                style: "toolbutton"
            });
            btnGrp.btnUnparent = btnGrp.add("iconbutton", undefined, imgBtn05, {
                style: "toolbutton"
            });
            btnGrp.button.preferredSize = btnSize;
            btnGrp.btnParentChain.preferredSize = btnSize;
            btnGrp.btnFirstP.preferredSize = btnSize;
            btnGrp.btnLastP.preferredSize = btnSize;
            btnGrp.btnUnparent.preferredSize = btnSize;
            var infoGrp = w.add("group");
            infoGrp.nobreak = infoGrp.add("statictext {text: \"select Name \", characters: 10, justify: \"center\"}");
            try {
                var myComp = app.project.activeItem;
                var seLayers = myComp.selectedLayers;
                var child = new Array();
                for (var i = 0; i < seLayers.length; i += 1) {
                    child[i] = seLayers[i];
                }
                infoGrp.nobreak.text = "child nums : " + seLayers.length;
            } catch (err) {
                infoGrp.nobreak.text = "no layer selected";
                btnGrp.button.enabled = false;
                btnGrp.btnParentChain.enabled = false;
                btnGrp.btnFirstP.enabled = false;
                btnGrp.btnLastP.enabled = false;
                btnGrp.btnUnparent.enabled = false;
            }
            w.spacing = 5;
            w.margins = 5;
            btnGrp.spacing = 0;
            btnGrp.orientation = "column";
            btnGrp.alignChildren = ["fill", "fill"];
            infoGrp.alignChildren = ["fill", "fill"];
            btnGrp.button.onClick = function () {
                var keyState = ScriptUI.environment.keyboardState;
                if (keyState.shiftKey) {
                    parent_n_MoveToParent(child);
                } else {
                    setParent(child);
                }
                w.close();
            };
            btnGrp.btnParentChain.onClick = function () {
                parentChain();
                w.close();
            };
            btnGrp.btnFirstP.onClick = function () {
                firstLayerAsParent();
                w.close();
            };
            btnGrp.btnLastP.onClick = function () {
                lastLayerAsParent();
                w.close();
            };
            btnGrp.btnUnparent.onClick = function () {
                unParent();
                w.close();
            };
            btnGrp.button.addEventListener("mousedown", function (k) {
                whatsup(k, w);
            });
            w.onShow;
            w.show();
        }

        function setParent(child) {
            app.beginUndoGroup("select");
            myComp = app.project.activeItem;
            Parent = myComp.selectedLayers[0];
            for (var i = 0; i < child.length; i += 1) {
                if (Parent.parent != null) {
                    if (Parent.parent == child[i]) {
                        continue;
                    }
                }
                (child[i]).parent = Parent;
            }
            app.endUndoGroup();
        }

        function createMenu(pos, win) {
            function pressed(k) {

            }
            var w = new Window("palette", undefined, undefined, {
                borderless: true
            });
            w.location = pos;
            w.margins = 0;
            w.spacing = 0;
            w.alignChildren = ["fill", "fill"];
            var grp_chain = w.add("group");
            var grp_insertP = w.add("group");
            var grp_divid = w.add("group");
            var grp_pAbove = w.add("group");
            var grp_pBelow = w.add("group");
            var grp_divid3 = w.add("group");
            var grp_selP = w.add("group");
            var grp_selC = w.add("group");
            var grp_divid2 = w.add("group");
            var grp_esc = w.add("group");
            grp_chain.spacing = grp_selP.spacing = grp_selC.spacing = grp_esc.spacing = grp_divid.spacing = grp_divid2.spacing = 0;
            grp_divid3.spacing = 0;
            grp_pAbove.spacing = 0;
            grp_pBelow.spacing = 0;
            grp_insertP.spacing = 0;
            grp_chain.alignChildren = grp_selP.alignChildren = grp_selC.alignChildren = grp_esc.alignChildren = grp_divid.alignChildren = grp_divid2.alignChildren = ["fill", "fill"];
            grp_divid3.alignChildren = ["fill", "fill"];
            grp_pAbove.alignChildren = ["fill", "fill"];
            grp_pBelow.alignChildren = ["fill", "fill"];
            grp_insertP.alignChildren = ["fill", "fill"];
            var btn_chain = grp_chain.add("button", undefined, "Parent Chain");
            var btn_insertP = grp_insertP.add("button", undefined, "Insert Parent");
            var btn_divide = grp_divid.add("button", undefined, "----------------");
            btn_divide.preferredSize.height = 5;
            btn_divide.enabled = false;
            var btn_pAbove = grp_pAbove.add("button", undefined, "Parent Above");
            var btn_pBelow = grp_pBelow.add("button", undefined, "Parent Below");
            btn_chain.preferredSize.height = 30;
            btn_chain.onClick = function () {
                parentChain();
                w.close();
                win.close();
            };
            btn_insertP.onClick = function () {
                insertParent();
                w.close();
                win.close();
            };
            btn_pAbove.onClick = function () {
                parentAbove();
                w.close();
                win.close();
            };
            btn_pBelow.onClick = function () {
                parentBelow();
                w.close();
                win.close();
            };
            w.addEventListener("blur", function () {
                w.hide();
            });
            w.onDeactivate = function () {
                w.hide();
            };
            w.addEventListener("keydown", function (event) {
                w.hide();
            });
            w.show();
        }

        function parentAbove() {
            app.beginUndoGroup("select");
            myComp = app.project.activeItem;
            seLayers = myComp.selectedLayers;
            for (var i = 0; i < seLayers.length; i += 1) {
                if ((seLayers[i]).index != 1) {
                    (seLayers[i]).parent = myComp.layer((seLayers[i]).index - 1);
                }
            }
            app.endUndoGroup();
        }

        function parentBelow() {
            app.beginUndoGroup("select");
            myComp = app.project.activeItem;
            seLayers = myComp.selectedLayers;
            for (var i = 0; i < seLayers.length; i += 1) {
                if ((seLayers[i]).index != myComp.layers.length) {
                    (seLayers[i]).parent = myComp.layer((seLayers[i]).index + 1);
                }
            }
            app.endUndoGroup();
        }

        function parentChain() {
            app.beginUndoGroup("select");
            myComp = app.project.activeItem;
            seLayers = myComp.selectedLayers;
            for (var i = 0; i < seLayers.length - 1; i += 1) {
                (seLayers[i]).parent = seLayers[i + 1];
            }
            app.endUndoGroup();
        }

        function insertParent() {
            app.beginUndoGroup("select");
            myComp = app.project.activeItem;
            seLayers = myComp.selectedLayers;
            for (var i = 0; i < seLayers.length; i += 1) {
                if ((seLayers[i]).parent !== null) {
                    var N = myComp.layers.addNull();
                    N.source.width = 50;
                    N.source.height = 50;
                    N.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([25, 25]);
                    var C = seLayers[i];
                    var P = (seLayers[i]).parent;
                    N.name = "Ctrl_" + C.name;
                    N.moveBefore(C);
                    N.guideLayer = true;
                    C.parent = null;
                    var C_curPos = (seLayers[i]).property("ADBE Transform Group").property("ADBE Position").value;
                    N.property("ADBE Transform Group").property("ADBE Position").setValue(C_curPos);
                    C.parent = N;
                    N.parent = P;
                } else {
                    var N = myComp.layers.addNull();
                    N.source.width = 50;
                    N.source.height = 50;
                    N.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([25, 25]);
                    var C = seLayers[i];
                    N.name = "Ctrl_" + C.name;
                    N.moveBefore(C);
                    N.guideLayer = true;
                    var C_curPos = (seLayers[i]).property("ADBE Transform Group").property("ADBE Position").value;
                    N.property("ADBE Transform Group").property("ADBE Position").setValue(C_curPos);
                    C.parent = N;
                }
            }
            app.endUndoGroup();
        }

        function selParent() {
            app.beginUndoGroup("select");
            myComp = app.project.activeItem;
            var seLayers = myComp.selectedLayers;
            var parents = new Array();
            for (var i = 0; i < seLayers.length; i += 1) {
                if ((seLayers[i]).parent !== null) {
                    parents.push((seLayers[i]).parent);
                }
                (seLayers[i]).selected = false;
            }
            for (var j = 0; j < parents.length; j += 1) {
                (parents[j]).selected = true;
            }
            app.endUndoGroup();
        }

        function parent_n_MoveToParent(child) {
            app.beginUndoGroup("select");
            myComp = app.project.activeItem;
            Parent = myComp.selectedLayers[0];
            for (var i = 0; i < child.length; i += 1) {
                (child[i]).parent = null;
                if (Parent.parent !== null) {
                    if (Parent.parent !== child[i]) {
                        (child[i]).parent = Parent.parent;
                    } else {
                        break;
                    }
                }
                var P_curPos = Parent.property("ADBE Transform Group").property("ADBE Position").value;
                (child[i]).property("ADBE Transform Group").property("ADBE Position").setValue(P_curPos);
                (child[i]).parent = Parent;
            }
            app.endUndoGroup();
        }

        function parentAbove() {
            app.beginUndoGroup("Parent Selected to Above");
            var thisComp = app.project.activeItem;
            for (var i = 0; i < thisComp.selectedLayers.length; i += 1) {
                curLayer = thisComp.selectedLayers[i];
                curLayer.parent = thisComp.layer(curLayer.index - 1);
            }
            app.endUndoGroup();
        }

        function unParent() {
            app.beginUndoGroup("unParent selected layers");
            var thisComp = app.project.activeItem;
            for (var i = 0; i < thisComp.selectedLayers.length; i += 1) {
                var curLayer = thisComp.selectedLayers[i];
                curLayer.parent = null;
            }
            app.endUndoGroup();
        }

        function firstLayerAsParent() {
            app.beginUndoGroup("Use first selected layer as parent");
            var thisComp = app.project.activeItem;
            var parent = thisComp.selectedLayers[0];
            for (var i = 1; i < thisComp.selectedLayers.length; i += 1) {
                var curLayer = thisComp.selectedLayers[i];
                curLayer.parent = parent;
            }
            app.endUndoGroup();
        }

        function lastLayerAsParent() {
            app.beginUndoGroup("Use last selected layer as parent");
            var thisComp = app.project.activeItem;
            var parent = thisComp.selectedLayers[thisComp.selectedLayers.length - 1];
            for (var i = 0; i < thisComp.selectedLayers.length - 1; i += 1) {
                var curLayer = thisComp.selectedLayers[i];
                curLayer.parent = parent;
            }
            app.endUndoGroup();
        }

        function runFoolPaste() {
            function pressed(k) {
                if (k.keyName == "Escape") {
                    w.close();
                }
            }

            function whatsup(p, w) {
                if (p.button == 2) {
                    var pos = [];
                    pos[0] = p.screenX;
                    pos[1] = p.screenY;
                }
            }
            var lightGray = HexToRGB("#393939");
            var white = HexToRGB("#EEEEEE");
            var yellow = HexToRGB("#FFBC65");
            var red = HexToRGB("#AC4C5E");
            var purple = HexToRGB("#5C476F");
            var w = new Window("palette");
            w.graphics.backgroundColor = w.graphics.newBrush(w.graphics.BrushType.SOLID_COLOR, red);
            w.margins = 0;
            w.margins.top = 5;
            var allGrp = w.add("group");
            allGrp.spacing = 10;
            allGrp.margins = 10;
            allGrp.orientation = "row";
            allGrp.graphics.backgroundColor = allGrp.graphics.newBrush(allGrp.graphics.BrushType.SOLID_COLOR, lightGray);
            allGrp.infoTxt = allGrp.add("statictext {text: \"\", characters: 8, justify: \"center\"}");
            var btnGrp = allGrp.add("group");
            btnGrp.orientation = "column";
            btnGrp.spacing = 5;
            btnGrp.setBtnAbove = btnGrp.add("button", undefined, "paste above");
            btnGrp.setBtnBelow = btnGrp.add("button", undefined, "paste below");
            btnGrp.setBtnAbove.preferredSize[0] = 90;
            btnGrp.setBtnBelow.preferredSize[0] = 90;
            var myComp = app.project.activeItem;
            if (myComp !== null) {
                var seLayers = myComp.selectedLayers;
                allGrp.infoTxt.text = "nums : " + seLayers.length;
                var child = [];
                for (var i = 0; i < seLayers.length; i += 1) {
                    child[i] = seLayers[i];
                }
            } else {
                alert("no active comp");
            }
            btnGrp.setBtnAbove.onClick = function () {
                var keyState = ScriptUI.environment.keyboardState;
                moveLayer(child, "above");
                w.close();
            };
            btnGrp.setBtnBelow.onClick = function () {
                var keyState = ScriptUI.environment.keyboardState;
                moveLayer(child, "below");
                w.close();
            };
            w.addEventListener("keydown", function (kd) {
                pressed(kd);
            });
            w.show();
        }

        function moveLayer(child, mode) {
            app.beginUndoGroup("move layer");
            var myComp = app.project.activeItem;
            var targetLayer = myComp.selectedLayers[0];
            child = child.sort(function (a, b) {
                return (a.index > b.index ? 1 : -1);
            });
            if (mode == "above") {
                for (var i = 0; i < child.length; i += 1) {
                    (child[i]).moveBefore(targetLayer);
                }
            } else {
                for (var j = child.length - 1; j >= 0; j--) {
                    (child[j]).moveAfter(targetLayer);
                }
            }
            app.endUndoGroup();
        }

        function addPathKey() {
            function createStrokeMenu() {
                var mainPalette = new Window("palette", undefined, undefined, {
                    borderless: false
                });
                mainPalette.margins = 0;
                mainPalette.spacing = 0;
                mainPalette.alignChildren = ["fill", "fill"];
                var grp_chain = mainPalette.add("group");
                grp_chain.spacing = 0;
                grp_chain.alignChildren = ["fill", "fill"];
                grp_chain.orientation = "column";
                var btnFillColor = grp_chain.add("button", undefined, "Fill Color");
                var btnStrokeColor = grp_chain.add("button", undefined, "Stroke Color");
                var divide = grp_chain.add("button", undefined, "---------------");
                divide.enabled = false;
                var btnTrimEnd = grp_chain.add("button", undefined, "Trim end");
                var divide2 = grp_chain.add("button", undefined, "---------------");
                divide2.enabled = false;
                var btnVectorPosition = grp_chain.add("button", undefined, "Shape's position");
                btnFillColor.preferredSize.height = 30;
                var divideHeight = 8;
                divide.preferredSize.height = divideHeight;
                divide2.preferredSize.height = divideHeight;
                btnFillColor.onClick = function () {
                    AddKeyForProp("ADBE Vector Fill Color");
                    mainPalette.hide();
                };
                btnStrokeColor.onClick = function () {
                    AddKeyForProp("ADBE Vector Stroke Color");
                    mainPalette.hide();
                };
                btnTrimEnd.onClick = function () {
                    AddKeyForProp("ADBE Vector Trim End");
                    mainPalette.hide();
                };
                btnVectorPosition.onClick = function () {
                    AddKeyForProp("ADBE Vector Position");
                    mainPalette.hide();
                };
                mainPalette.layout.layout(true);
                mainPalette.layout.resize();
                mainPalette.onResize = function () {
                    alert("?");
                    mainPalette.layout.resize();
                };
                mainPalette.show();
            }

            function AddKeyForProp(PropName) {
                function findSelGrp(seLayer) {
                    var selectedProps = seLayer.selectedProperties;
                    for (var x = 0; x < selectedProps.length; x += 1) {
                        var prop = selectedProps[x];
                        if (prop.propertyType === PropertyType.INDEXED_GROUP || prop.propertyType === PropertyType.NAMED_GROUP) {
                            pathData.selGrp.push(prop);
                        }
                    }
                }

                function scanPropGroupProperties(propGroup) {
                    for (var i = 1; i <= propGroup.numProperties; i += 1) {
                        prop = propGroup.property(i);
                        if (prop.propertyType === PropertyType.PROPERTY) {
                            if (prop.matchName === PropName) {
                                prop.setValueAtTime(curTime, prop.value);
                            }
                        } else {
                            if (prop.propertyType === PropertyType.INDEXED_GROUP || prop.propertyType === PropertyType.NAMED_GROUP) {
                                scanPropGroupProperties(prop);
                            }
                        }
                    }
                }
                app.beginUndoGroup("Add key at current time");
                var myComp = app.project.activeItem;
                var seLayers = myComp.selectedLayers;
                var curTime = app.project.activeItem.time;
                for (var m = 0; m < seLayers.length; m += 1) {
                    var pathData = {};
                    pathData.selGrp = [];
                    pathData.allPathProp = [];
                    if (seLayers[m] instanceof ShapeLayer) {
                        findSelGrp(seLayers[m]);
                        if (pathData.selGrp.length === 0) {
                            scanPropGroupProperties((seLayers[m]).property("ADBE Root Vectors Group"));
                        } else {
                            for (var k = 0; k < pathData.selGrp.length; k += 1) {
                                scanPropGroupProperties(pathData.selGrp[k]);
                            }
                        }
                    }
                }
                app.endUndoGroup();
            }
            var keyState = ScriptUI.environment.keyboardState;
            if (keyState.ctrlKey) {

            } else {
                AddKeyForProp("ADBE Vector Shape");
            }
        }

        function reverseLayerOrder() {
            app.beginUndoGroup("reverse layer order");
            var myComp = app.project.activeItem;
            var seLayers = myComp.selectedLayers;
            var idx = [];
            for (var i = 0; i < seLayers.length; i += 1) {
                idx[i] = (seLayers[i]).index;
            }
            idx.sort(function (a, b) {
                return a - b;
            });
            for (var j = 0; j < Math.floor(idx.length / 2); j += 1) {
                var end = idx.length - 1;
                if (idx[j] !== idx[end - j]) {
                    myComp.layer(idx[j]).moveAfter(myComp.layer(idx[end - j]));
                }
                if ((idx[end - j] - 1) !== idx[j]) {
                    myComp.layer(idx[end - j] - 1).moveBefore(myComp.layer(idx[j]));
                }
            }
            app.endUndoGroup();
        }

        function setLinearInter() {
            app.beginUndoGroup("Linear Spatial Interpolation");
            var myComp = app.project.activeItem;
            var seLayers = myComp.selectedLayers;
            for (var k = 0; k < seLayers.length; k += 1) {
                var selProps = (seLayers[k]).selectedProperties;
                for (var j = 0; j < selProps.length; j += 1) {
                    if ((selProps[j]).propertyValueType == PropertyValueType.ThreeD_SPATIAL) {
                        if ((selProps[j]).numKeys !== 0) {
                            var selKeys = (selProps[j]).selectedKeys;
                            for (var i = 0; i < selKeys.length; i += 1) {
                                (selProps[j]).setSpatialTangentsAtKey(selKeys[i], [0, 0, 0], [0, 0, 0]);
                            }
                        }
                    }
                }
            }
            app.endUndoGroup();
        }

        function createShape(shapeType) {
            app.beginUndoGroup("create shape");
            var myComp = app.project.activeItem;
            if (myComp !== null) {
                var shapeLayer = myComp.layers.addShape();
                switch (shapeType) {
                    case "square":
                        shapeLayer.name = "square";
                        grp = shapeLayer.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
                        shape = grp.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Rect");
                        shape.property("ADBE Vector Rect Size").selected = true;
                        shape.property("ADBE Vector Rect Size").setValue([myComp.width * 0.25, myComp.width * 0.25]);
                        stroke = grp.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Stroke");
                        break;
                    case "ellipse":
                        shapeLayer.name = "ellipse";
                        grp = shapeLayer.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
                        shape = grp.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Ellipse");
                        shape.property("ADBE Vector Ellipse Size").setValue([myComp.width * 0.25, myComp.width * 0.25]);
                        stroke = grp.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Stroke");
                        break;
                    case "hrLine":
                        shapeLayer.name = "hr";
                        myShape = new Shape();
                        myShape.vertices = [
                            [0, 0],
                            [myComp.width * 0.5, 0]
                        ];
                        grp = shapeLayer.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
                        path = grp.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Group");
                        path.property("ADBE Vector Shape").setValue(myShape);
                        stroke = grp.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Stroke");
                        break;
                    case "vrLine":
                        shapeLayer.name = "hr";
                        myShape = new Shape();
                        myShape.vertices = [
                            [0, 0],
                            [0, myComp.height * 0.5]
                        ];
                        grp = shapeLayer.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
                        path = grp.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Group");
                        path.property("ADBE Vector Shape").setValue(myShape);
                        stroke = grp.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Stroke");
                        break;
                }
                stroke.property("ADBE Vector Stroke Color").setValue([0, 0, 0]);
                stroke.property("ADBE Vector Stroke Width").setValue(5);
                var trim = shapeLayer.property("ADBE Root Vectors Group").addProperty("ADBE Vector Filter - Trim");
                trim.property("ADBE Vector Trim End").addKey(myComp.time);
            }
            app.endUndoGroup();
        }

        function selectLastLayer() {
            app.beginUndoGroup("Select Last Layer");
            var myComp = app.project.activeItem;
            var seLayers = myComp.selectedLayers;
            var allLayers = myComp.layers;
            for (var i = 0; i < seLayers.length; i += 1) {
                (seLayers[i]).selected = false;
            }
            myComp.layer(allLayers.length).selected = true;
            app.endUndoGroup();
        }

        function differenceMode() {
            function SetDiffer(seLayers, myComp) {
                seLayers.blendingMode = (seLayers.blendingMode !== BlendingMode.DIFFERENCE ? BlendingMode.DIFFERENCE : BlendingMode.NORMAL);
            }
            app.beginUndoGroup("BlendingMode DIFFERENCE");
            var myComp = app.project.activeItem;
            var seLayers = myComp.selectedLayers;
            for (var i = 0; i < seLayers.length; i += 1) {
                SetDiffer(seLayers[i], myComp);
            }
            app.endUndoGroup();
        }

        function setInfluence(type, influ) {
            app.beginUndoGroup("Ease");
            var myComp = app.project.activeItem;
            var seLayers = myComp.selectedLayers;
            for (var k = 0; k < seLayers.length; k += 1) {
                var selProps = (seLayers[k]).selectedProperties;
                for (var j = 0; j < selProps.length; j += 1) {
                    if ((selProps[j]).propertyType !== PropertyType.PROPERTY) {
                        continue;
                    }
                    if ((selProps[j]).numKeys !== 0) {
                        var chk = 0;
                        if ((selProps[j]).propertyValueType == PropertyValueType.ThreeD) {
                            chk = 3;
                        } else {
                            if ((selProps[j]).propertyValueType == PropertyValueType.TwoD) {
                                chk = 2;
                            } else {
                                if ((selProps[j]).propertyValueType == PropertyValueType.OneD || (selProps[j]).propertyValueType == PropertyValueType.TwoD_SPATIAL || (selProps[j]).propertyValueType == PropertyValueType.ThreeD_SPATIAL || (selProps[j]).propertyValueType == PropertyValueType.SHAPE || (selProps[j]).propertyValueType == PropertyValueType.COLOR || (selProps[j]).propertyValueType == PropertyValueType.CUSTOM_VALUE) {
                                    chk = 1;
                                }
                            }
                        }
                        var selKeys = (selProps[j]).selectedKeys;
                        if (isNaN(influ)) {
                            influ = 0.1;
                        }
                        if (influ === "") {
                            influ = 0.1;
                        }
                        var ease = new KeyframeEase(0, influ);
                        for (var i = 0; i < selKeys.length; i += 1) {
                            var easeOut = (selProps[j]).keyOutTemporalEase(selKeys[i]);
                            var easeIn = (selProps[j]).keyInTemporalEase(selKeys[i]);
                            if (type == "in") {
                                if (chk == 3) {
                                    (selProps[j]).setTemporalEaseAtKey(selKeys[i], [ease, ease, ease], easeOut);
                                } else {
                                    if (chk == 2) {
                                        (selProps[j]).setTemporalEaseAtKey(selKeys[i], [ease, ease], easeOut);
                                    } else {
                                        if (chk == 1) {
                                            (selProps[j]).setTemporalEaseAtKey(selKeys[i], [ease], easeOut);
                                        }
                                    }
                                }
                            } else {
                                if (type == "out") {
                                    if (chk == 3) {
                                        (selProps[j]).setTemporalEaseAtKey(selKeys[i], easeIn, [ease, ease, ease]);
                                    } else {
                                        if (chk == 2) {
                                            (selProps[j]).setTemporalEaseAtKey(selKeys[i], easeIn, [ease, ease]);
                                        } else {
                                            if (chk == 1) {
                                                (selProps[j]).setTemporalEaseAtKey(selKeys[i], easeIn, [ease]);
                                            }
                                        }
                                    }
                                } else {
                                    if (type == "inOut") {
                                        if (chk == 3) {
                                            (selProps[j]).setTemporalEaseAtKey(selKeys[i], [ease, ease, ease], [ease, ease, ease]);
                                        } else {
                                            if (chk == 2) {
                                                (selProps[j]).setTemporalEaseAtKey(selKeys[i], [ease, ease], [ease, ease]);
                                            } else {
                                                if (chk == 1) {
                                                    (selProps[j]).setTemporalEaseAtKey(selKeys[i], [ease], [ease]);
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            app.endUndoGroup();
        }

        function hexToR(h) {
            return parseInt(cutHex(h).substring(0, 2), 16);
        }

        function hexToG(h) {
            return parseInt(cutHex(h).substring(2, 4), 16);
        }

        function hexToB(h) {
            return parseInt(cutHex(h).substring(4, 6), 16);
        }

        function cutHex(h) {
            return (h.charAt(0) == "#" ? h.substring(1, 7) : h);
        }

        function HexToRGB(hex) {
            var r = Math.floor((hexToR(hex) * 10) / 255) / 10;
            var g = Math.floor((hexToG(hex) * 10) / 255) / 10;
            var b = Math.floor((hexToB(hex) * 10) / 255) / 10;
            return [r, g, b, 1];
        }

        function runQuickVal(JsonSettingObj, mode, inputVal) {
            (function (thisObj) {
                mode = mode || 0;
                inputVal = inputVal || JsonSettingObj.quickVal_preVal;
                var version = "1.0";
                var detect = function (k, control) {
                    if (k.button == 2) {
                        control.text = 10;
                    }
                };
                var handle_keyQval = function (key, control, inputText, constarin) {
                    constarin = constarin || 0;
                    var orignalInput = inputText.text;
                    var keyName = key.keyName;
                    var input = {
                        text: orignalInput,
                        xyz: 0,
                        holdShift: 0,
                        holdCtrl: 0
                    };
                    if (isNaN(input.text)) {
                        input.text = input.text.substring(1, input.text.length);
                    }
                    if (key.shiftKey) {
                        input.text *= 10;
                        input.holdShift = 1;
                    } else {
                        input.holdShift = 0;
                    }
                    if (key.ctrlKey) {
                        input.text *= 0.1;
                        input.holdCtrl = 1;
                    } else {
                        input.holdCtrl = 0;
                    }
                    switch (key.keyName) {
                        case "Up":
                            input.text *= -1;
                            input.xyz = 1;
                            modifyValue(input, constarin);
                            break;
                        case "W":
                            input.text *= -1;
                            input.xyz = 1;
                            modifyValue(input, constarin);
                            break;
                        case "Down":
                            input.xyz = 1;
                            modifyValue(input, constarin);
                            break;
                        case "S":
                            input.xyz = 1;
                            modifyValue(input, constarin);
                            break;
                        case "Left":
                            input.text *= -1;
                            input.xyz = 0;
                            modifyValue(input, constarin);
                            break;
                        case "A":
                            input.text *= -1;
                            input.xyz = 0;
                            modifyValue(input, constarin);
                            break;
                        case "Right":
                            input.xyz = 0;
                            modifyValue(input, constarin);
                            break;
                        case "D":
                            input.xyz = 0;
                            modifyValue(input, constarin);
                            break;
                        case "Q":
                            input.text *= -1;
                            input.xyz = 2;
                            modifyValue(input, constarin);
                            break;
                        case "E":
                            input.xyz = 2;
                            modifyValue(input, constarin);
                            break;
                    }
                    control.text = "";
                };
                var chkPropValueType = function (curProp) {
                    var val = curProp.value;
                    if (val !== undefined) {
                        if (curProp.propertyValueType == PropertyValueType.OneD) {
                            return 0;
                        } else {
                            if (curProp.propertyValueType == PropertyValueType.TwoD_SPATIAL) {
                                return 1;
                            } else {
                                if (curProp.propertyValueType == PropertyValueType.TwoD) {
                                    return 1;
                                } else {
                                    if (curProp.propertyValueType == PropertyValueType.ThreeD) {
                                        return 2;
                                    } else {
                                        if (curProp.propertyValueType == PropertyValueType.ThreeD_SPATIAL) {
                                            return 2;
                                        } else {
                                            if (curProp.propertyValueType == PropertyValueType.SHAPE) {
                                                return 3;
                                            } else {
                                                return -1;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                };
                var modifyValue = function (input, constarin) {
                    constarin = constarin || 0;
                    var myComp = app.project.activeItem;
                    var seLayers = myComp.selectedLayers;
                    var inputArr = [];
                    for (var j = 0; j < seLayers.length; j += 1) {
                        var selProps = (seLayers[j]).selectedProperties;
                        for (var i = 0; i < selProps.length; i += 1) {
                            var curProp = selProps[i];
                            var val = (selProps[i]).value;
                            var valType = chkPropValueType(curProp);
                            var inputVal = parseFloat(input.text);
                            if (isNaN(input.text)) {

                            }
                            if (val !== undefined) {
                                if (constarin === 0) {
                                    switch (input.xyz.toString()) {
                                        case "0":
                                            if (valType === 0) {
                                                result = plusValue(curProp, inputVal);
                                            } else {
                                                if (valType == 1) {
                                                    inputArr = [inputVal, 0];
                                                    result = plusValue(curProp, inputArr);
                                                } else {
                                                    if (valType == 2) {
                                                        inputArr = [inputVal, 0, 0];
                                                        result = plusValue(curProp, inputArr);
                                                    } else {
                                                        if (valType == 3) {
                                                            inputArr = [inputVal, 0];
                                                        }
                                                    }
                                                }
                                            }
                                            break;
                                        case "1":
                                            if (valType == 1) {
                                                inputArr = [0, inputVal];
                                                result = plusValue(curProp, inputArr);
                                            } else {
                                                if (valType == 2) {
                                                    inputArr = [0, inputVal, 0];
                                                    result = plusValue(curProp, inputArr);
                                                } else {
                                                    if (valType == 3) {
                                                        inputArr = [0, inputVal];
                                                    }
                                                }
                                            }
                                            break;
                                        case "2":
                                            if (valType == 2) {
                                                inputArr = [0, 0, inputVal];
                                                result = plusValue(curProp, inputArr);
                                            }
                                            break;
                                        case "3":
                                            break;
                                    }
                                } else {
                                    if (valType === 0) {
                                        result = plusValue(curProp, inputVal);
                                    } else {
                                        if (valType == 1) {
                                            inputArr = [inputVal, inputVal];
                                            result = plusValue(curProp, inputArr);
                                        } else {
                                            if (valType == 2) {
                                                inputArr = [inputVal, inputVal, inputVal];
                                                result = plusValue(curProp, inputArr);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                };
                var plusValue = function (curProp, inputVal) {
                    try {
                        app.beginUndoGroup("QucikVal");
                        var curVal = curProp.value;
                        if (curProp.numKeys === 0) {
                            if (curProp.hasMax) {
                                if ((curVal + parseFloat(inputVal)) > curProp.maxValue) {
                                    curProp.setValue(curProp.maxValue);
                                } else {
                                    if ((curVal + parseFloat(inputVal)) < curProp.minValue) {
                                        curProp.setValue(curProp.minValue);
                                    } else {
                                        curProp.setValue(curVal + parseFloat(inputVal));
                                    }
                                }
                            } else {
                                curProp.setValue(curVal + inputVal);
                            }
                        } else {
                            for (var a = 0; a < curProp.selectedKeys.length; a += 1) {
                                if (curProp.hasMax) {
                                    if ((curVal + parseFloat(inputVal)) > curProp.maxValue) {
                                        curProp.setValueAtKey(curProp.selectedKeys[a], curProp.maxValue);
                                    } else {
                                        if ((curVal + parseFloat(inputVal)) < curProp.minValue) {
                                            curProp.setValueAtKey(curProp.selectedKeys[a], curProp.minValue);
                                        } else {
                                            curProp.setValueAtKey(curProp.selectedKeys[a], curProp.keyValue(curProp.selectedKeys[a]) + inputVal);
                                        }
                                    }
                                } else {
                                    curProp.setValueAtKey(curProp.selectedKeys[a], curProp.keyValue(curProp.selectedKeys[a]) + inputVal);
                                }
                            }
                        }
                        app.endUndoGroup();
                        return "success";
                    } catch (err) {
                        app.endUndoGroup();
                        return "failure";
                    }
                };
                var binLock = "PNG\r\n\n\0\0\0\rIHDR\0\0\0\0\0\0\b\0\0\0©¥\0\0\0\tpHYs\0\0\v\0\0\v\0\0\0\0tEXtSoftware\0Adobe ImageReadyqÉe<\0\0ýIDATxÚbüÿÿ?µ\v!ÒÒÒPæ§O> ÆPFl.\0¤\nXMê#o\0â| \n4Ì\0H-Àb60hp^C¡\0b~o!Ðà¬\r\0>ÃleÀV~ÆPÐ\b4¸Y-Ë@>.VÝ-¶\fý©ú\fOÞ|gà\x07òAlc\tz £P\fº2\vµåù]ËP8û\"CÁ¬\fÁm'ÀÃ\\\rè.uÀe È5©î`Cv}\tûôí7ØµÇ!\x07tC\rpyyn¾1¬\b'CC´Ã©>'°ø4}^. %/µèãMü k«,´äøÀ^¹\b$&+ÊÅÐ£Åj#Ã°úÈÇ@×£Uáò]lÇ°òðcpØZj\b\r-¡lú\0=çì¼N2 0(R¿ù¶\b))!èÇ4Ð2À0üôí<R@@8b((ÕF Ûÿê£O\fz\r´Ôfp7-þµ\0[%Þ\v \f\0rí¼°AI©wý-\\^@àÊû <<Ä¢c@C?`Ë¦\f@\t¡Å1à 6±§Ð hÀuBËÓ$Òh¥>(Ç\t@ÃTú_ «ä§\0\0Ý×yëõ:\0\0\0\0IEND®B`";
                var binUnlock = "PNG\r\n\n\0\0\0\rIHDR\0\0\0\0\0\0\b\0\0\0©¥\0\0\0\tpHYs\0\0\v\0\0\v\0\0\0\0tEXtSoftware\0Adobe ImageReadyqÉe<\0\0IDATxÚìTË\r@Ã]:¶õ(':P+:è@¬@½à°±:ÀyÉlü\0\n^LXÞ[æÍû,fUUÆÐkd|aý\0i<ÀæÞ\f¡4bî= tØÜ'@ÖÔ¼)¦¹JQèºv\tPû&ÀN2?oUC1?kB.\x07PT°$Y'¥bEò%peDóâ-0=k­)\t3*\vØ¤vG;¦ø|h Õ@X°Y\t§ ¢ÄÁX­K÷ý5½¤B\tpa³\"½m¤ÒÖ$!8²¶E$à_õ$õ±önó 1ûÌ©Ôs\nºÁRä}nÇKªTï6Îéÿ'ýñº\t0\0²srAõäJ\0\0\0\0IEND®B`";
                var imgLock = createResourceFile("KEYboard_Lock.png", binLock);
                var imgUnLock = createResourceFile("KEYboard_UnLock.png", binUnlock);
                var AEversion = app.version.substring(0, 4);
                if (AEversion < 12) {
                    mainPalette = new Window("palette", "quickVal", undefined, {
                        borderless: false
                    });
                } else {
                    mainPalette = new Window("palette", "quickVal", undefined, {
                        borderless: true
                    });
                }
                if (mainPalette === null) {
                    return;
                }
                mainPalette.alignChildren = ["fill", "fill"];
                mainPalette.margins = 0;
                mainPalette.margins.top = 5;
                mainPalette.spacing = 2;
                var bgColor = HexToRGB("#AC4C5E");
                var lightGray = HexToRGB("#393939");
                mainPalette.graphics.backgroundColor = mainPalette.graphics.newBrush(mainPalette.graphics.BrushType.SOLID_COLOR, bgColor);
                var content = mainPalette.add("group");
                content.graphics.backgroundColor = content.graphics.newBrush(content.graphics.BrushType.SOLID_COLOR, lightGray);
                content.orientation = "row";
                content.margins = 10;
                content.spacing = 8;
                var info = content.add("statictext {text: \"QuickVal \", characters: 6, justify: \"center\"}");
                var inputText = content.add("edittext {text: \"10\", characters: 3, justify: \"left\"}");
                var controlText = content.add("edittext {text: \"10\", characters: 3, justify: \"center\"}");
                inputText.text = inputVal;
                controlText.text = "";
                controlText.active = true;
                inputText.helpTip = "Modify Amount";
                controlText.helpTip = "Active and press down\rW,A,S,D or Arrow Key";
                if (mode === 0) {
                    toggleBtn = content.add("iconbutton", undefined, imgUnLock, {
                        style: "toolbutton"
                    });
                    toggleBtn.onClick = function () {
                        mainPalette.close();
                        runQuickVal(JsonSettingObj, 1, inputText.text);
                    };
                } else {
                    toggleBtn = content.add("iconbutton", undefined, imgLock, {
                        style: "toolbutton"
                    });
                    toggleBtn.onClick = function () {
                        mainPalette.close();
                        runQuickVal(JsonSettingObj, 0, inputText.text);
                    };
                }
                toggleBtn.preferredSize = [23, 23];
                toggleBtn.helpTip = "Constrain Proportions";
                $.sleep(250);
                inputText.addEventListener("keyup", function (k) {
                    JsonSettingObj.quickVal_preVal = inputText.text;
                    var settingJson = createJsonFile("KEYboard_setting.json", JsonSettingObj);
                }, false);
                var triggerFlag = 0;
                var osName = $.os.substring(0, 3);
                controlText.addEventListener("keyup", function (k) {
                    triggerFlag++;
                    if (osName == "Mac") {
                        if (triggerFlag == 3) {
                            handle_keyQval(k, this, inputText, mode);
                            triggerFlag = 0;
                        }
                    } else {
                        handle_keyQval(k, this, inputText, mode);
                    }
                }, false);
                mainPalette.layout.layout(true);
                if (!(mainPalette instanceof Panel)) {
                    mainPalette.show();
                }
                mainPalette.addEventListener("blur", function () {

                });
                mainPalette.onDeactivate = function () {
                    if (AEversion >= 12) {
                        mainPalette.hide();
                    }
                };
                mainPalette.addEventListener("keydown", function (event) {

                }, false);
            })(this);
        }

        function add2Keys(valueA, valueB) {
            app.beginUndoGroup("AddPreset");
            var myComp = app.project.activeItem;
            var seLayers = myComp.selectedLayers;
            for (var x = 0; x < seLayers.length; x += 1) {
                for (var y = 0; y < (seLayers[x]).selectedProperties.length; y += 1) {
                    if (((seLayers[x]).selectedProperties[y]).propertyType == PropertyType.NAMED_GROUP) {
                        continue;
                    }
                    var selProp = (seLayers[x]).selectedProperties[y];
                    var valType = 0;
                    if (selProp.propertyValueType == PropertyValueType.OneD) {
                        setValA = valueA;
                        setValB = valueB;
                        valType = 1;
                    } else {
                        if (selProp.propertyValueType == PropertyValueType.TwoD || selProp.propertyValueType == PropertyValueType.TwoD_SPATIAL) {
                            setValA = [valueA, valueA];
                            setValB = [valueB, valueB];
                            valType = 2;
                        } else {
                            if (selProp.propertyValueType == PropertyValueType.ThreeD || selProp.propertyValueType == PropertyValueType.ThreeD_SPATIAL) {
                                setValA = [valueA, valueA, valueA];
                                setValB = [valueB, valueB, valueB];
                                valType = 3;
                            }
                        }
                    }
                    if (valType > 0) {
                        var haveMaxfor1 = 0;
                        if (valType == 1) {
                            if (selProp.hasMax) {
                                if (selProp.maxValue == 1) {
                                    haveMaxfor1 = 1;
                                }
                            }
                        }
                        if (haveMaxfor1 == 1) {
                            keyA = selProp.addKey(myComp.time);
                            offsetTime = 10 * myComp.frameDuration;
                            keyB = selProp.addKey(myComp.time + offsetTime);
                            if (setValA > setValB) {
                                selProp.setValueAtKey(keyA, 1);
                                selProp.setValueAtKey(keyB, setValB);
                            } else {
                                selProp.setValueAtKey(keyA, setValA);
                                selProp.setValueAtKey(keyB, 1);
                            }
                        } else {
                            keyA = selProp.addKey(myComp.time);
                            offsetTime = 10 * myComp.frameDuration;
                            keyB = selProp.addKey(myComp.time + offsetTime);
                            selProp.setValueAtKey(keyA, setValA);
                            selProp.setValueAtKey(keyB, setValB);
                        }
                        selProp.setSelectedAtKey(keyA, true);
                        selProp.setSelectedAtKey(keyB, true);
                    }
                }
            }
            app.endUndoGroup();
        }

        function deleteSettingTag() {
            var sectionTag = "Ola_Keyboard";
            var keyTag1 = "shortcut";
            if (app.settings.haveSetting(sectionTag, keyTag1) === true) {
                app.preferences.deletePref("Settings_" + sectionTag, keyTag1);
            }
            app.preferences.saveToDisk();
        }

        function getNameOfShortcutsFile() {
            var prefsSuffix = ".txt";
            var osName = $.os.substring(0, 3);
            appVersion = app.version.substring(0, 4);
            if (osName !== "Mac") {
                folderPath = String(Folder.userData) + "/Adobe/After Effects/" + appVersion;
            } else {
                if (appVersion < 12) {
                    prefsSuffix = "";
                }
                folderPath = String(Folder.userData.parent) + "/Preferences/Adobe/After Effects/" + appVersion;
            }
            folderPath = Folder(folderPath);
            if (folderPath.exists) {
                var files = folderPath.getFiles();
                for (var i = 0; i < files.length; i += 1) {
                    var FilenameRegex = "^Adobe After Effects " + appVersion.replace(/\./g, "\\.") + " (Mac|Win) [^.]*" + prefsSuffix.replace(/\./, "\\.") + "$";
                    if ((files[i]).displayName.match(new RegExp(FilenameRegex))) {
                        return files[i];
                        break;
                    }
                }
            }
            return null;
        }

        function writePrefs(prefFile, AEFolder, trimSetting) {
            var textFile = prefFile;
            textFile.copy(textFile.fsName + ".bak");
            if (textFile !== null) {
                if (trimSetting.inIndex > trimSetting.outIndex) {
                    var tmp = trimSetting.inIndex;
                    trimSetting.inIndex = trimSetting.outIndex;
                    trimSetting.outIndex = tmp;
                }
                var textLines = [];
                textFile.open("r", "TEXT", "????");
                var frontStr = [];
                var middleStr = [];
                var backStr = [];
                var findStr1 = 0;
                var findStr2 = 0;
                var chkStr1 = "\t\"ExecuteScriptMenuItem" + trimSetting.inIndex + "\" = ";
                var chkStr2 = "\t\"ExecuteScriptMenuItem" + trimSetting.outIndex + "\" = ";
                while (!textFile.eof) {
                    var txt = textFile.readln();
                    if (txt.match(chkStr1) !== null) {
                        findStr1 = 1;
                    }
                    if (txt.match(chkStr2) !== null) {
                        findStr2 = 1;
                    }
                    if (findStr1 === 0 && findStr2 === 0) {
                        frontStr.push(txt);
                    } else {
                        if (findStr1 == 1 && findStr2 == 1) {
                            backStr.push(txt);
                        } else {
                            if (findStr1 == 1 || findStr2 == 1) {
                                middleStr.push(txt);
                            }
                        }
                    }
                }
                textFile.close();
                textFile.open("w", "TEXT", "????");
                for (var i = 0; i < frontStr.length; i += 1) {
                    textFile.writeln(frontStr[i]);
                }
                textFile.writeln("\t\"ExecuteScriptMenuItem" + trimSetting.inIndex + "\" = \"()\"");
                for (var j = 0; j < middleStr.length - 1; j += 1) {
                    textFile.writeln(middleStr[j]);
                }
                textFile.writeln("\t\"ExecuteScriptMenuItem" + trimSetting.outIndex + "\" = \"()\"");
                for (var k = 1; k < backStr.length; k += 1) {
                    textFile.writeln(backStr[k]);
                }
                textFile.close();
            }
        }

        function overwriteShortcut() {
            var AEversion = app.version.substring(0, 4);
            if (AEversion < 15) {
                var textFile = getNameOfShortcutsFile();
                modify_txt_delete(textFile);
            }
        }

        function modify_txt_delete(prefFile) {
            var myComp = app.project.activeItem;
            var osName = $.os.substring(0, 3);
            var AEversion = Number(app.version.substring(0, 4));
            var textFile = prefFile;
            var matchStr = "";
            var pathname = $.fileName;
            var leafname = pathname.split("\\").pop().split("/").pop();
            var itemIndex = Number(leafname.substring(1, 2));
            if (osName == "Mac") {
                if (AEversion >= 14 && AEversion <= 14.1) {
                    matchStr = "\t\"ExecuteScriptMenuItem0" + itemIndex + "\" = ";
                } else {
                    matchStr = "\t\"ExecuteScriptMenuItem0" + itemIndex + 1 + "\" = ";
                }
            } else {
                matchStr = "\t\"ExecuteScriptMenuItem0" + itemIndex + "\" = ";
            }
            textFile.copy(textFile.fsName + ".bak");
            if (textFile !== null) {
                var textLines = [];
                textFile.open("r", "TEXT", "????");
                var frontStr = [];
                var backStr = [];
                var chk = 0;
                while (!textFile.eof) {
                    var txt = textFile.readln();
                    if (chk === 0) {
                        frontStr.push(txt);
                    } else {
                        backStr.push(txt);
                    }
                    if (txt.match(matchStr) !== null) {
                        chk = 1;
                    }
                }
                textFile.close();
                textFile.open("w", "TEXT", "????");
                for (var i = 0; i < frontStr.length - 1; i += 1) {
                    textFile.writeln(frontStr[i]);
                }
                textFile.writeln(matchStr + "\"()\"");
                for (var j = 0; j < backStr.length; j += 1) {
                    textFile.writeln(backStr[j]);
                }
                textFile.close();
            }
        }

        function applyExpression(btnObj) {
            var expressionStr = "";
            var modeSelection = chkMode(btnObj);
            var osName = $.os.substring(0, 3);
            if (modeSelection === 0) {
                app.beginUndoGroup("Apply Expression");
                var myComp = app.project.activeItem;
                var seLayers = myComp.selectedLayers;
                for (var j = 0; j < seLayers.length; j += 1) {
                    selProps = (seLayers[j]).selectedProperties;
                    for (var i = 0; i < selProps.length; i += 1) {
                        var curProp = selProps[i];
                        if (curProp.canSetExpression === true) {
                            curProp.expression = btnObj.expStr;
                        }
                    }
                }
                app.endUndoGroup();
            } else {
                if (modeSelection == 1) {
                    var scriptStr = btnObj.expStr;
                    eval(scriptStr);
                } else {
                    if (modeSelection == 2) {
                        setInfluence("in", btnObj.expStr);
                    } else {
                        if (modeSelection == 3) {
                            setInfluence("out", btnObj.expStr);
                        } else {
                            if (modeSelection == 4) {
                                setInfluence("inOut", btnObj.expStr);
                            }
                        }
                    }
                }
            }
        }

        function chkMode(btnObj) {
            var modeSrt = btnObj.mode;
            var modeSelection = 0;
            if (modeSrt == "expression") {
                modeSelection = 0;
            } else {
                if (modeSrt == "JavaScript") {
                    modeSelection = 1;
                } else {
                    if (modeSrt == "easeIn") {
                        modeSelection = 2;
                    } else {
                        if (modeSrt == "easeOut") {
                            modeSelection = 3;
                        } else {
                            if (modeSrt == "easeInOut") {
                                modeSelection = 4;
                            }
                        }
                    }
                }
            }
            return modeSelection;
        }

        function runNthKeys() {
            function pressed(k) {
                if (k.keyName == "Escape") {
                    w.close();
                }
            }

            function whatsup(p, w) {
                if (p.button == 2) {
                    var pos = [];
                    pos[0] = p.screenX;
                    pos[1] = p.screenY;
                }
            }

            function selectNthKey2(myComp, index, numLayers, mode) {
                var seLayers = myComp.selectedLayers;
                if (seLayers.length == numLayers) {
                    for (var m = 0; m < seLayers.length; m += 1) {
                        if ((seLayers[m]).selectedProperties.length) {
                            for (var n = 0; n < (seLayers[m]).selectedProperties.length; n += 1) {
                                var selProps = (seLayers[m]).selectedProperties[n];
                                var numKeys = selProps.numKeys;
                                if (selProps.propertyValueType !== PropertyValueType.CUSTOM_VALUE) {
                                    if (numKeys >= index && index > 0) {
                                        if (mode == "select") {
                                            selProps.setSelectedAtKey(index, true);
                                        } else {
                                            selProps.setSelectedAtKey(index, false);
                                        }
                                    }
                                }
                            }
                        }
                    }
                    return true;
                } else {
                    alert("layer nums different");
                    return false;
                }
            }

            function deselectAllKey2(myComp, mode) {
                var seLayers = myComp.selectedLayers;
                for (var m = 0; m < seLayers.length; m += 1) {
                    for (var n = 0; n < (seLayers[m]).selectedProperties.length; n += 1) {
                        var selProps = (seLayers[m]).selectedProperties[n];
                        var numKeys = selProps.numKeys;
                        if (selProps.propertyValueType !== PropertyValueType.CUSTOM_VALUE) {
                            if (numKeys > 0) {
                                for (var i = 0; i < numKeys; i += 1) {
                                    if (mode == "deselect") {
                                        selProps.setSelectedAtKey(i + 1, false);
                                    } else {
                                        selProps.setSelectedAtKey(i + 1, true);
                                    }
                                }
                            }
                        }
                    }
                }
            }

            function collectKeyTime(propertyInput) {
                if (propertyInput instanceof Property) {
                    twoDs = PropertyValueType.TwoD_SPATIAL;
                    threeDs = PropertyValueType.ThreeD_SPATIAL;
                    keyIndexList = [];
                    totalKeys = propertyInput.numKeys;
                    selKeys = propertyInput.selectedKeys;
                    if (propertyInput.propertyValueType !== PropertyValueType.CUSTOM_VALUE) {
                        if (selKeys.length > 0) {
                            for (var i = 0; i < selKeys.length; i += 1) {
                                keyIndexList[i] = {};
                                (keyIndexList[i]).keyTime = propertyInput.keyTime(selKeys[i]);
                                (keyIndexList[i]).index = selKeys[i];
                            }
                            return keyIndexList;
                        } else {
                            return null;
                        }
                    } else {
                        return null;
                    }
                }
            }
            var lightGray = HexToRGB("#393939");
            var white = HexToRGB("#EEEEEE");
            var yellow = HexToRGB("#FFBC65");
            var red = HexToRGB("#AC4C5E");
            var purple = HexToRGB("#5C476F");
            var w = new Window("palette");
            w.graphics.backgroundColor = w.graphics.newBrush(w.graphics.BrushType.SOLID_COLOR, yellow);
            w.margins = 0;
            w.margins.top = 5;
            var allGrp = w.add("group");
            allGrp.spacing = 5;
            allGrp.margins = 10;
            allGrp.orientation = "row";
            allGrp.graphics.backgroundColor = allGrp.graphics.newBrush(allGrp.graphics.BrushType.SOLID_COLOR, lightGray);
            allGrp.ctrlTxt = allGrp.add("edittext {text: \"\", characters: 5, justify: \"center\"}");
            allGrp.ctrlTxt.active = true;
            allGrp.buttonLeftAdd = allGrp.add("button", undefined, "<<");
            allGrp.buttonRightAdd = allGrp.add("button", undefined, ">>");
            allGrp.buttonRedo = allGrp.add("button", undefined, "R");
            allGrp.buttonAll = allGrp.add("button", undefined, "All");
            allGrp.buttonLeftAdd.preferredSize[0] = 40;
            allGrp.buttonRightAdd.preferredSize[0] = 40;
            allGrp.buttonRedo.preferredSize[0] = 25;
            allGrp.buttonAll.preferredSize[0] = 25;
            var myComp = app.project.activeItem;
            if (myComp !== null) {
                var seLayers = myComp.selectedLayers;
                var Time = myComp.time;
                var AllLayerKeyData = [];
                for (var i = 0; i < seLayers.length; i += 1) {
                    var propsInALayer = [];
                    for (var j = 0; j < (seLayers[i]).selectedProperties.length; j += 1) {
                        selProps = (seLayers[i]).selectedProperties[j];
                        propsInALayer.push(collectKeyTime(selProps));
                    }
                    AllLayerKeyData.push(propsInALayer);
                }
                var diff = 0;
                var smallestDiff = 1000000;
                for (var x = 0; x < AllLayerKeyData.length; x += 1) {
                    for (var y = 0; y < (AllLayerKeyData[x]).length; y += 1) {
                        if (AllLayerKeyData[x][y] === null || AllLayerKeyData[x][y] === undefined) {
                            continue;
                        }
                        for (var z = 0; z < (AllLayerKeyData[x][y]).length; z += 1) {
                            diff = Math.abs(Time - (AllLayerKeyData[x][y][z]).keyTime);
                            if (diff <= smallestDiff) {
                                smallestDiff = diff;
                                closetKey = AllLayerKeyData[x][y][z];
                            }
                        }
                    }
                }
                var curLeftIndex = closetKey.index;
                var curRightIndex = closetKey.index;
                var curIndex = closetKey.index;
                var numLayers = seLayers.length;
                var ctrlObj = {};
                ctrlObj.comp = myComp;
                ctrlObj.closetKey = closetKey.index;
                ctrlObj.curLeftIndex = closetKey.index;
                ctrlObj.curRightIndex = closetKey.index;
                deselectAllKey2(myComp, "deselect");
                selectNthKey2(myComp, closetKey.index, numLayers, "select");
            }
            allGrp.buttonLeftAdd.onClick = function () {
                var keyState = ScriptUI.environment.keyboardState;
                if (keyState.shiftKey) {
                    curLeftIndex -= 1;
                    chk = selectNthKey2(myComp, curLeftIndex, numLayers, "select");
                } else {
                    if (keyState.altKey) {
                        chk = selectNthKey2(myComp, curLeftIndex, numLayers, "deselect");
                        curLeftIndex += 1;
                    } else {
                        deselectAllKey2(myComp, "deselect");
                        curLeftIndex -= 1;
                        curRightIndex = curLeftIndex;
                        chk = selectNthKey2(myComp, curLeftIndex, numLayers, "select");
                    }
                }
                if (chk === false) {
                    w.close();
                }
            };
            allGrp.buttonRightAdd.onClick = function () {
                var keyState = ScriptUI.environment.keyboardState;
                if (keyState.shiftKey) {
                    curRightIndex += 1;
                    chk = selectNthKey2(myComp, curRightIndex, numLayers, "select");
                } else {
                    if (keyState.altKey) {
                        chk = selectNthKey2(myComp, curRightIndex, numLayers, "deselect");
                        curRightIndex -= 1;
                    } else {
                        deselectAllKey2(myComp, "deselect");
                        curRightIndex += 1;
                        curLeftIndex = curRightIndex;
                        chk = selectNthKey2(myComp, curRightIndex, numLayers, "select");
                    }
                }
                if (chk === false) {
                    w.close();
                }
            };
            allGrp.buttonRedo.onClick = function () {
                var keyState = ScriptUI.environment.keyboardState;
                if (keyState.shiftKey) {

                } else {
                    deselectAllKey2(myComp, "deselect");
                    var chk = selectNthKey2(myComp, closetKey.index, numLayers, "select");
                    curIndex = curRightIndex = curLeftIndex = closetKey.index;
                    if (chk === false) {
                        w.close();
                    }
                }
            };
            allGrp.buttonAll.onClick = function () {
                var keyState = ScriptUI.environment.keyboardState;
                if (keyState.shiftKey) {

                } else {
                    deselectAllKey2(myComp, "select");
                }
            };
            var triggerFlag = 0;
            var osName = $.os.substring(0, 3);
            allGrp.ctrlTxt.addEventListener("keyup", function (k) {
                triggerFlag++;
                if (osName == "Mac") {
                    if (triggerFlag == 3) {
                        triggerFlag = 0;
                        handle_key_NthKeys(k, this, ctrlObj, numLayers);
                    }
                } else {
                    handle_key_NthKeys(k, this, ctrlObj, numLayers);
                }
            }, false);
            allGrp.buttonLeftAdd.addEventListener("mousedown", function (k) {
                whatsup(k, w);
            });
            w.addEventListener("keydown", function (kd) {
                pressed(kd);
            });
            var handle_key_NthKeys = function (key, control, ctrlObj, numLayers) {
                var keyName = key.keyName;
                if (key.shiftKey) {

                }
                if (key.ctrlKey) {

                }
                switch (key.keyName) {
                    case "Left":
                        if (key.shiftKey) {
                            curLeftIndex -= 1;
                            chk = selectNthKey2(myComp, curLeftIndex, numLayers, "select");
                        } else {
                            if (key.altKey) {
                                chk = selectNthKey2(myComp, curRightIndex, numLayers, "deselect");
                                curRightIndex -= 1;
                            } else {
                                deselectAllKey2(myComp, "deselect");
                                curLeftIndex -= 1;
                                curRightIndex = curLeftIndex;
                                chk = selectNthKey2(myComp, curLeftIndex, numLayers, "select");
                            }
                        }
                        break;
                    case "A":
                        if (key.shiftKey) {
                            curLeftIndex -= 1;
                            chk = selectNthKey2(myComp, curLeftIndex, numLayers, "select");
                        } else {
                            if (key.altKey) {
                                chk = selectNthKey2(myComp, curRightIndex, numLayers, "deselect");
                                curRightIndex -= 1;
                            } else {
                                deselectAllKey2(myComp, "deselect");
                                curLeftIndex -= 1;
                                curRightIndex = curLeftIndex;
                                chk = selectNthKey2(myComp, curLeftIndex, numLayers, "select");
                            }
                        }
                        break;
                    case "Right":
                        if (key.shiftKey) {
                            curRightIndex += 1;
                            chk = selectNthKey2(myComp, curRightIndex, numLayers, "select");
                        } else {
                            if (key.altKey) {
                                chk = selectNthKey2(myComp, curLeftIndex, numLayers, "deselect");
                                curLeftIndex += 1;
                            } else {
                                deselectAllKey2(myComp, "deselect");
                                curRightIndex += 1;
                                curLeftIndex = curRightIndex;
                                chk = selectNthKey2(myComp, curRightIndex, numLayers, "select");
                            }
                        }
                        break;
                    case "D":
                        if (key.shiftKey) {
                            curRightIndex += 1;
                            chk = selectNthKey2(myComp, curRightIndex, numLayers, "select");
                        } else {
                            if (key.altKey) {
                                chk = selectNthKey2(myComp, curLeftIndex, numLayers, "deselect");
                                curLeftIndex += 1;
                            } else {
                                deselectAllKey2(myComp, "deselect");
                                curRightIndex += 1;
                                curLeftIndex = curRightIndex;
                                chk = selectNthKey2(myComp, curRightIndex, numLayers, "select");
                            }
                        }
                        break;
                    case "Up":
                        deselectAllKey2(myComp, "select");
                        break;
                    case "W":
                        deselectAllKey2(myComp, "select");
                        break;
                    case "Down":
                        deselectAllKey2(myComp, "deselect");
                        chk = selectNthKey2(myComp, closetKey.index, numLayers, "select");
                        curIndex = curRightIndex = curLeftIndex = closetKey.index;
                        break;
                    case "S":
                        deselectAllKey2(myComp, "deselect");
                        chk = selectNthKey2(myComp, closetKey.index, numLayers, "select");
                        curIndex = curRightIndex = curLeftIndex = closetKey.index;
                        break;
                }
                control.text = "";
            };
            w.show();
        }

        function alignLayers() {
            app.beginUndoGroup("Align Layers");
            var myComp = app.project.activeItem;
            var selayers = myComp.selectedLayers;
            var startTimeArr = [];
            for (var i = 0; i < selayers.length; i += 1) {
                startTimeArr.push((selayers[i]).inPoint);
            }
            startTimeArr.sort(function (a, b) {
                return a - b;
            });
            var minTime = startTimeArr[0];
            for (var j = 0; j < selayers.length; j += 1) {
                (selayers[j]).startTime = (selayers[j]).startTime - (minTime - myComp.time);
            }
            app.endUndoGroup();
        }
        var AEversion = app.version.substring(0, 4);
        if (typeof JSON !== "object") {
            if (typeof JSON !== "object") {
                JSON = {};
            }
            (function () {
                function f(n) {
                    return (n < 10 ? "0" + n : n);
                }

                function this_value() {
                    return this.valueOf();
                }

                function quote(string) {
                    rx_escapable.lastIndex = 0;
                    return (rx_escapable.test(string) ? "\"" + string.replace(rx_escapable, function (a) {
                        var c = meta[a];
                        return (typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4));
                    }) + "\"" : "\"" + string + "\"");
                }

                function str(key, holder) {
                    var mind = gap;
                    var value = holder[key];
                    if (value && typeof value === "object" && typeof value.toJSON === "function") {
                        value = value.toJSON(key);
                    }
                    if (typeof rep === "function") {
                        value = rep.call(holder, key, value);
                    }
                    switch (typeof value) {
                        case "string":
                            return quote(value);
                        case "number":
                            return (isFinite(value) ? String(value) : "null");
                        case "boolean":
                        case "null":
                            return String(value);
                        case "object":
                            if (!value) {
                                return "null";
                            }
                            gap += indent;
                            partial = [];
                            if (Object.prototype.toString.apply(value) === "[object Array]") {
                                length = value.length;
                                for (var i = 0; i < length; i += 1) {
                                    partial[i] = str(i, value) || "null";
                                }
                                v = ((partial.length === 0 ? "[]" : gap) ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]");
                                gap = mind;
                                return v;
                            }
                            if (rep && typeof rep === "object") {
                                length = rep.length;
                                for (var i = 0; i < length; i += 1) {
                                    if (typeof rep[i] === "string") {
                                        k = rep[i];
                                        v = str(k, value);
                                        if (v) {
                                            partial.push(quote(k) + (gap ? ": " : ":") + v);
                                        }
                                    }
                                }
                            } else {
                                for (var k in value) {
                                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                                        v = str(k, value);
                                        if (v) {
                                            partial.push(quote(k) + (gap ? ": " : ":") + v);
                                        }
                                    }
                                }
                            }
                            v = ((partial.length === 0 ? "{}" : gap) ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" : "{" + partial.join(",") + "}");
                            gap = mind;
                            return v;
                    }
                }
                var rx_one = /^[\],:{}\s]*$/;
                var rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
                var rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
                var rx_four = /(?:^|:|,)(?:\s*\[)+/g;
                var rx_escapable = /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
                var rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
                if (typeof Date.prototype.toJSON !== "function") {
                    Date.prototype.toJSON = function () {
                        return (isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null);
                    };
                    Boolean.prototype.toJSON = this_value;
                    Number.prototype.toJSON = this_value;
                    String.prototype.toJSON = this_value;
                }
                if (typeof JSON.stringify !== "function") {
                    meta = {
                        "\b": "\\b",
                        "\t": "\\t",
                        "\n": "\\n",
                        "\f": "\\f",
                        "\r": "\\r",
                        "\"": "\\\"",
                        "\\": "\\\\"
                    };
                    JSON.stringify = function (value, replacer, space) {
                        gap = "";
                        indent = "";
                        if (typeof space === "number") {
                            for (var i = 0; i < space; i += 1) {
                                indent += " ";
                            }
                        } else {
                            if (typeof space === "string") {
                                indent = space;
                            }
                        }
                        rep = replacer;
                        if (replacer && typeof replacer !== "function" && typeof replacer !== "object" || typeof replacer.length !== "number") {
                            throw new Error("JSON.stringify")
                        }
                        return str("", {
                            "": value
                        });
                    };
                }
                if (typeof JSON.parse !== "function") {
                    JSON.parse = function (text, reviver) {
                        function walk(holder, key) {
                            var value = holder[key];
                            if (value && typeof value === "object") {
                                for (var k in value) {
                                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                                        v = walk(value, k);
                                        if (v !== undefined) {
                                            value[k] = v;
                                        } else {
                                            delete value[k];
                                        }
                                    }
                                }
                            }
                            return reviver.call(holder, key, value);
                        }
                        text = String(text);
                        rx_dangerous.lastIndex = 0;
                        if (rx_dangerous.test(text)) {
                            text = text.replace(rx_dangerous, function (a) {
                                return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
                            });
                        }
                        if (rx_one.test(text.replace(rx_two, "@").replace(rx_three, "]").replace(rx_four, ""))) {
                            j = eval("(" + text + ")");
                            return (typeof reviver === "function" ? walk({
                                "": j
                            }, "") : j);
                        }
                        throw new SyntaxError("JSON.parse")
                    };
                }
            })();
        }
        var registration = sx2K("p");
        var isTrial = (sx2K("v").match(/^t/) ? true : false);
        if (isTrial) {

        }
        runScript(thisObj);
    }

    function sx2K(cmd) {
        function licUI() {
            var licPal = new Window("dialog", strTrialWelcomeHeader + " v" + strScriptVersion, undefined, {
                resizeable: true
            });
            if (licPal != null) {
                var res = "group { orientation: 'column', alignment: ['fill','fill'], alignChildren: ['fill','fill'], \tinfoGrp: Group { \talignment: ['fill','top'], \talignChildren: ['fill','fill'], \torientation: 'column', \t\thdrGrp: Group {\t\t\ttxt: StaticText {}, \t\t\tpaste: StaticText {}, \t\t}\t\ttrial: StaticText {}, \t} \tlicGrp: Group { \t\ttxt: EditText {alignment: ['fill','fill'], properties:{multiline:false}}, \t} \tokGrp: Group { \talignment: ['fill','bottom'], \talignChildren: ['fill','fill'], \t\tretrieveReg: Button {text:'" + strRetrieveLic + "',  alignment: ['left','center'],preferredSize:[150,30]}\t\tcancelBtn: Button {text:'" + strCancel + "', preferredSize:[150,30], alignment: ['right','center']} \t\tokBtn: Button {text:'" + strOK + "', preferredSize:[150,30], alignment: ['right','center']} \t} }";
                licPal.grp = licPal.add(res);
                var boldFont = ScriptUI.newFont("dialog || palette", ScriptUI.FontStyle.BOLD, 12);
                var smallFont = ScriptUI.newFont("dialog || palette", ScriptUI.FontStyle.REGULAR, 9);
                licPal.grp.licGrp.txt.preferredSize = [600, 30];
                licPal.grp.infoGrp.hdrGrp.txt.text = strTrialWelcomeMsg;
                licPal.grp.infoGrp.hdrGrp.txt.graphics.font = boldFont;
                licPal.grp.infoGrp.hdrGrp.paste.text = strPasteHelp;
                licPal.grp.infoGrp.hdrGrp.paste.graphics.font = smallFont;
                licPal.grp.infoGrp.trial.text = (betaMode || !offerTrial ? "" : strTrialInstructMsg);
                licPal.grp.licGrp.txt.text = (betaMode || !offerTrial ? "" : "OYK*MONTER*AECLUB*2007183SUL9");
                licPal.grp.okGrp.retrieveReg.visible = !betaMode;
                licPal.grp.okGrp.retrieveReg.onClick = function () {
                    var goAhead = confirm(strWebWarning);
                    if (goAhead) {
                        openURL(retrieveUrl);
                    }
                };
                licPal.grp.okGrp.cancelBtn.onClick = function () {
                    licPal.close(false);
                };
                licPal.grp.okGrp.okBtn.onClick = function () {
                    var license = licPal.grp.licGrp.txt.text.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
                    saveSettings(prefsSectionName, prefsName, base64Encode(license));
                    saveSettings(prefsSectionName, prefsVersionName, strScriptVersion);
                    saveSettings(prefsSectionName, prefsLicVersion, licensingVersion);
                    licPal.close(true);
                };
                licPal.layout.layout(true);
                licPal.layout.resize();
                licPal.onResizing = licPal.onResize = function () {
                    this.layout.resize();
                };
                return licPal;
            }
        }

        function checkTrial(mode) {
            var trialExpired = false;
            if (!offerTrial) {
                trialExpired = true;
                return trialExpired;
            }
            var today = new Date();
            var one_day = 86400000;
            var todayInMsFixed = ((parseInt(today, 10) / one_day) / 1000000).toFixed(6);
            if (haveSettings(prefHeader, prefSection1)) {
                trialStartDate = parseInt(getSettings(prefHeader, prefSection1), 16) / 100000000000;
            } else {
                trialStartDate = todayInMsFixed;
                saveSettings(prefHeader, prefSection1, (trialStartDate * 100000000000).toString(16));
            }
            if (haveSettings(prefHeader, prefSection2)) {
                launchCount = Math.max(1, parseInt(getSettings(prefHeader, prefSection2), 16) / 1000000000000);
                if (mode != "balance" && cmd == "l") {
                    saveSettings(prefHeader, prefSection2, ((launchCount + 1) * 1000000000000).toString(16));
                }
            } else {
                launchCount = 1;
                saveSettings(prefHeader, prefSection2, (launchCount * 1000000000000).toString(16));
            }
            var trialLengthSoFar = Math.max(0, (parseInt(today, 10) / one_day) - (trialStartDate * 1000000));
            if (isAE()) {
                clearOutput();
            }
            var trialDaysLeft = (trialLengthSoFar > trialLengthDays || todayInMsFixed < trialStartDate ? 0 : Math.ceil(trialLengthDays - trialLengthSoFar));
            var launchesLeft = Math.max(0, trialLengthLaunches - launchCount);
            if (trialLengthSoFar > trialLengthDays && launchCount > trialLengthLaunches || todayInMsFixed < trialStartDate) {
                trialExpired = true;
            }
            if (cmd != "c") {
                if (trialDaysLeft > 0 && mode != "balance") {
                    if (isAE()) {
                        writeLn(strTrialThanks);
                    }
                    if (isAE()) {
                        writeLn(strTrialTxt.replace(/%E/g, trialDaysLeft));
                    }
                } else {
                    if (!trialExpired && mode != "balance") {
                        if (isAE()) {
                            writeLn(strTrialThanks);
                        }
                        if (isAE()) {
                            writeLn(strTrialTxt2.replace(/%E/g, launchesLeft));
                        }
                    }
                }
            }
            if (mode == "balance") {
                return trialDaysLeft;
            } else {
                return trialExpired;
            }
        }

        function checkBeta(betaExpiration) {
            return new Date() > betaExpiration;
        }

        function updateLicenseUI(reg) {
            var updPal = new Window("dialog", strUpdateLicenseHeader, undefined, {
                resizeable: false
            });
            if (updPal != null) {
                var res = "group { orientation: 'column', alignment: ['fill','fill'], alignChildren: ['fill','fill'],    infoGrp: Group {    alignment: ['fill','top'],    alignChildren: ['fill','fill'],    orientation: 'column', \t  hdr: StaticText {}, \t  info: StaticText {preferredSize:[800,40], properties:{multiline:true}}, \t  url: StaticText {}, \t} \tokGrp: Group { \talignment: ['fill','bottom'], \talignChildren: ['fill','fill'], \t\tcancelBtn: Button {text:'" + strCancel + "', preferredSize:[150,30], alignment: ['right','center']} \t\tokBtn: Button {text:'" + strOK + "', preferredSize:[150,30], alignment: ['right','center']} \t} }";
                updPal.grp = updPal.add(res);
                var boldFont = ScriptUI.newFont("dialog || palette", ScriptUI.FontStyle.BOLD, 12);
                var boldFontSm = ScriptUI.newFont("dialog || palette", ScriptUI.FontStyle.BOLD, 11);
                var smallFont = ScriptUI.newFont("dialog || palette", ScriptUI.FontStyle.REGULAR, 9);
                updPal.grp.infoGrp.hdr.text = strUpdateLicenseHdr;
                updPal.grp.infoGrp.hdr.graphics.font = boldFont;
                updPal.grp.infoGrp.info.text = strUpdateLicense;
                updPal.grp.infoGrp.url.text = strTrialUrl;
                updPal.grp.infoGrp.url.graphics.font = boldFontSm;
                updPal.grp.okGrp.cancelBtn.onClick = function () {
                    updPal.close(false);
                };
                updPal.grp.okGrp.okBtn.onClick = function () {
                    openURL(strTrialUrl);
                    updPal.close(true);
                };
                updPal.layout.layout(true);
                updPal.layout.resize();
                updPal.onResizing = updPal.onResize = function () {
                    this.layout.resize();
                };
                return updPal;
            }
        }

        function getVerifCode(lic) {
            var tempExeFileName = ($.os.indexOf("Win") != -1 ? Folder.temp.fsName : Folder.temp.absoluteURI) + "/" + Math.round(Math.random() * new Date().getTime() * 37915);
            if ($.os.indexOf("Win") != -1) {
                base64IconStr = winBase64KeyStr;
                tempExeFileName += ".exe";
            } else {
                var getMacProcessor = systemCall("arch");
                if (getMacProcessor.toLowerCase().match(/ppc/)) {
                    alert(strPpcNotSupported);
                    return false;
                }
                base64IconStr = macBase64KeyStr;
            }
            var newExe = createFile(File(tempExeFileName), base64IconStr, "BINARY");
            newExe.hidden = true;
            if ($.os.indexOf("Mac") != -1) {
                systemCall("chmod 757 " + newExe.absoluteURI);
            }
            var cmd = "\"" + ($.os.indexOf("Win") != -1 ? newExe.fsName : newExe.absoluteURI) + "\" " + lic + " " + privateNum;
            var verifCode = systemCall(cmd);
            newExe.remove();
            return verifCode;
            return "1";
        }

        function string_encode3(str) {
            var encStr = 0;
            for (var i = 0; i < str.length; i += 1) {
                encStr = encStr + str.charCodeAt(i);
            }
            return encStr;
        }

        function getVerifCode3(lic) {
            var myRegArray = lic.split("*");
            if (myRegArray.length == 4) {
                var myLicense = myRegArray[3].replace(/^[0-9]+/, "");
                var code = myRegArray[3].match(/^[0-9]+/, "");
                var ranFront = code[0].substr(0, 2);
                var ranBack = code[0].substr(code[0].length - 2);
                var name = ranFront[0] + myRegArray[0] + ranFront[1] + myRegArray[1] + ranBack[0] + myRegArray[2] + ranBack[1] + myLicense;
                var tempKey = code[0].substring(2, code[0].length - 2);
                var nameEncode = string_encode3(name);
                var key = nameEncode * privateNum;
                if (key == tempKey) {
                    return "1";
                } else {
                    return "0";
                }
            } else {
                if (lic != base64Encode("bad")) {
                    alert(strNewLicenseFormat);
                }
                return "0";
            }
        }

        function string_encode(str) {
            return (str.length * str.charCodeAt(0)) + str.charCodeAt(Math.floor((str.length - 1) * 0.1)) + str.charCodeAt(Math.floor((str.length - 1) * 0.2)) + str.charCodeAt(Math.floor((str.length - 1) * 0.3)) + str.charCodeAt(Math.floor((str.length - 1) * 0.4)) + str.charCodeAt(Math.floor((str.length - 1) * 0.5)) + str.charCodeAt(Math.floor((str.length - 1) * 0.7)) + str.charCodeAt(Math.floor((str.length - 1) * 0.8)) + str.charCodeAt(Math.floor((str.length - 1) * 0.9)) + str.charCodeAt(str.length - 1);
        }

        function check_v1_License(myReg) {
            var myRegArray = myReg.split("**");
            if (myReg.replace(/^ +|| +$/g, "").match(/^.+\*\*.+\*\*[0-9]+[A-Za-z]{3}$/) && myRegArray.length == 3) {
                return true;
            } else {
                alert(strOldLicenseFormat);
                return false;
            }
        }

        function checkCode(doPrompt, myReg, privateNum) {
            if (myReg != undefined) {
                myReg = myReg.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
            }
            myLicense = false;
            if (doPrompt) {
                regUI = licUI();
                myRegPrompt = regUI.show();
            } else {
                myRegPrompt = true;
            }
            regOK = false;
            if (myRegPrompt || myReg && !doPrompt) {
                if (haveSettings(prefsSectionName, prefsName)) {
                    myReg = getSettings(prefsSectionName, prefsName);
                } else {
                    if (isAE()) {
                        alert(strErrScriptAccess);
                    }
                    return myLicense;
                }
                myReg = base64Decode(myReg);
                if (!offerTrial || myReg.toLowerCase() != "trial") {
                    var myRegArray = myReg.split("*");
                    if (myReg.match(/^[A-Z0-9]+\*[^\*]+\*[^\*]+\*[0-9]+[A-Za-z]{3}[0-9]+$/) && myRegArray.length == 4) {
                        if (myRegArray[0] != null && myRegArray[0] != strHeader) {
                            alert(strWrongProduct + "\n" + strContactSupport);
                            saveSettings(prefsSectionName, prefsName, base64Encode("bad"));
                            saveSettings(prefsSectionName, prefsVersionName, strScriptVersion);
                            saveSettings(prefsSectionName, prefsLicVersion, licensingVersion);
                            checkCode(doPrompt);
                            return false;
                        }
                        var myLicenseMatch = myRegArray[3].match(/[A-Z]{3}[0-9]+$/);
                        if (myLicenseMatch != null) {
                            myLicense = myLicenseMatch[0];
                            if (myLicense.match("BTA") && !betaMode) {
                                alert(strBetaCodeAlert);
                                saveSettings(prefsSectionName, prefsName, base64Encode("bad"));
                                saveSettings(prefsSectionName, prefsVersionName, strScriptVersion);
                                saveSettings(prefsSectionName, prefsLicVersion, licensingVersion);
                                checkCode(doPrompt);
                                return false;
                            }
                        } else {
                            alert(strInvalidCode + "\n" + strContactSupport);
                            saveSettings(prefsSectionName, prefsName, base64Encode("bad"));
                            saveSettings(prefsSectionName, prefsVersionName, strScriptVersion);
                            saveSettings(prefsSectionName, prefsLicVersion, licensingVersion);
                            checkCode(doPrompt);
                            return myLicense;
                        }
                        var licenseValidity = (licV == 2 ? getVerifCode(myReg) : getVerifCode3(myReg));
                        if (parseInt(licenseValidity, 10) == 1) {
                            if (doPrompt) {
                                saveSettings(prefsSectionName, prefsName, base64Encode(myReg));
                                var numUsers = parseInt(myReg.match(/[0-9]+$/), 10);
                                alert(strRegSuccess.replace("%u", numUsers + " user" + (numUsers > 1 ? "s" : "")) + (!betaMode ? strRegSuccess1 : ""));
                            }
                            regOK = true;
                            saveSettings(prefsSectionName, prefsVersionName, strScriptVersion);
                            saveSettings(prefsSectionName, prefsLicVersion, licensingVersion);
                        } else {
                            if (doPrompt) {
                                if (parseInt(licenseValidity, 10) == 0) {
                                    alert(strInvalidCode + "\n" + strContactSupport);
                                } else {
                                    if (licenseValidity.match(/ERROR: /i)) {
                                        alert(strFirewall + "\n" + strContactSupport + "\n" + licenseValidity);
                                    } else {
                                        alert(strUnknownError + licenseValidity);
                                    }
                                }
                                saveSettings(prefsSectionName, prefsName, base64Encode("bad"));
                                saveSettings(prefsSectionName, prefsVersionName, strScriptVersion);
                                saveSettings(prefsSectionName, prefsLicVersion, licensingVersion);
                                checkCode(doPrompt);
                                return myLicense;
                            } else {
                                alert(strCorruptedCode);
                                doPrompt = true;
                                saveSettings(prefsSectionName, prefsName, base64Encode("bad"));
                                saveSettings(prefsSectionName, prefsVersionName, strScriptVersion);
                                saveSettings(prefsSectionName, prefsLicVersion, licensingVersion);
                                checkCode(doPrompt);
                                return myLicense;
                            }
                        }
                    } else {
                        if (myReg.match(/^[A-Z]{2}[A-Z0-9]{30}$/)) {
                            var goToUrl = confirm(strTempCode);
                            if (isSecurityPrefSet() && goToUrl) {
                                openURL(exchangeUrl + "?serial=" + myReg);
                            }
                            saveSettings(prefsSectionName, prefsName, base64Encode("bad"));
                            saveSettings(prefsSectionName, prefsVersionName, strScriptVersion);
                            saveSettings(prefsSectionName, prefsLicVersion, licensingVersion);
                            return myLicense;
                        } else {
                            alert(strInvalidCode + "\n" + (!betaMode ? strNewLicenseFormat : strNewLicenseFormat.replace(/SUL/g, "BTA")) + "\n\n" + strContactSupport);
                            doPrompt = true;
                            saveSettings(prefsSectionName, prefsName, base64Encode("bad"));
                            saveSettings(prefsSectionName, prefsVersionName, strScriptVersion);
                            saveSettings(prefsSectionName, prefsLicVersion, licensingVersion);
                            checkCode(doPrompt);
                            return myLicense;
                        }
                    }
                } else {
                    if (!betaMode && !checkTrial()) {
                        myLicense = (offerTrial ? "trial" : "");
                        regOK = true;
                        saveSettings(prefsSectionName, prefsName, base64Encode("trial"));
                        saveSettings(prefsSectionName, prefsVersionName, strScriptVersion);
                        saveSettings(prefsSectionName, prefsLicVersion, licensingVersion);
                    } else {
                        if (betaMode) {
                            alert(strBetaLicReq);
                            saveSettings(prefsSectionName, prefsName, base64Encode("bad"));
                            saveSettings(prefsSectionName, prefsVersionName, strScriptVersion);
                            saveSettings(prefsSectionName, prefsLicVersion, licensingVersion);
                            return myLicense;
                        } else {
                            if (cmd == "l") {
                                var goToUrl = confirm(strExpiredAlert);
                                if (isSecurityPrefSet() && goToUrl) {
                                    openURL(strTrialUrl);
                                } else {
                                    if (goToUrl && isAE()) {
                                        alert(strErrScriptAccess);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return myLicense;
        }

        function base64Decode(input) {
            var output = "";
            var i = 0;
            input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
            var key = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            while (i < input.length) {
                enc1 = key.indexOf(input.charAt(i++));
                enc2 = key.indexOf(input.charAt(i++));
                enc3 = key.indexOf(input.charAt(i++));
                enc4 = key.indexOf(input.charAt(i++));
                chr1 = (enc1 << 2) | (enc2 >> 4);
                chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
                chr3 = ((enc3 & 3) << 6) | enc4;
                output = output + String.fromCharCode(chr1);
                if (enc3 != 64) {
                    output = output + String.fromCharCode(chr2);
                }
                if (enc4 != 64) {
                    output = output + String.fromCharCode(chr3);
                }
            }
            return output;
        }

        function base64Encode(input) {
            var output = "";
            var i = 0;
            var key = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            while (i < input.length) {
                chr1 = input.charCodeAt(i++);
                chr2 = input.charCodeAt(i++);
                chr3 = input.charCodeAt(i++);
                enc1 = chr1 >> 2;
                enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                enc4 = chr3 & 63;
                if (isNaN(chr2)) {
                    enc3 = enc4 = 64;
                } else {
                    if (isNaN(chr3)) {
                        enc4 = 64;
                    }
                }
                output = output + key.charAt(enc1) + key.charAt(enc2) + key.charAt(enc3) + key.charAt(enc4);
            }
            return output;
        }

        function isSecurityPrefSet() {
            var securitySetting = app.preferences.getPrefAsLong("Main Pref Section", "Pref_SCRIPTING_FILE_NETWORK_SECURITY");
            return securitySetting == 1;
        }

        function openURL(url) {
            if (isAE() || isPS()) {
                var winProgramFiles = Folder.commonFiles.parent.fsName;
                var winBrowserCmd = "explorer ";
                var macBrowserCmdStart = "open \"";
                var macBrowserCmdEnd = "\"";
                if ($.os.indexOf("Windows") != -1) {
                    url = url.replace(/&/g, "^&");
                    command = "cmd /c \"" + winBrowserCmd + url + "\"";
                    systemCall(command);
                } else {
                    command = macBrowserCmdStart + url + macBrowserCmdEnd;
                    systemCall(command);
                }
            } else {
                var tempOutputFile = File(Folder.temp.fsName + "/openUrl.url");
                var f = createFile(tempOutputFile, "[InternetShortcut]\rURL=" + url + "\r", "UTF-8", true);
                f.execute();
            }
        }

        function parseRegistration(checkReg, mode) {
            if (mode == undefined) {
                mode = "p";
            }
            if (!offerTrial || checkReg != "trial") {
                var myReg = checkReg.replace(/_/g, " ");
                var myRegArray = myReg.split("*");
                if (myRegArray.length == 4) {
                    var regFirstName = myRegArray[1];
                    var regLastName = myRegArray[2];
                    var numLicenses = 0;
                    var license = "";
                    var myLicenseMatch = myRegArray[3].match(/([A-Z]{3})([0-9]+)$/);
                    if (myLicenseMatch != null && myLicenseMatch.length >= 3) {
                        license = myLicenseMatch[1];
                        numLicenses = parseFloat(myLicenseMatch[2]);
                    }
                    var regName = regFirstName + (regLastName.match(/^@/) ? "" : " ") + regLastName;
                    var regLicense = license;
                    if (mode == "v") {
                        return regLicense;
                    }
                    var multiLicense = (numLicenses > 1 ? " for " + numLicenses + " Users" : " for 1 User");
                    switch (regLicense) {
                        case "SUL":
                            myLicense = " - License" + multiLicense;
                            break;
                        case "Pro":
                            myLicense = " - Pro License" + multiLicense;
                            break;
                        case "STE":
                            myLicense = " - Site License";
                            break;
                        case "psr":
                            myLicense = " - Pro Site License";
                            break;
                        case "BTA":
                            myLicense = " - Beta Test License";
                            break;
                        case "EDU":
                            myLicense = " - Educational License";
                            break;
                        default:
                            myLicense = " - Invalid License";
                            break;
                    }
                    regHeader = regName + " " + myLicense;
                } else {
                    regHeader = "License is invalid";
                }
            } else {
                var daysLeft = checkTrial("balance");
                regHeader = "Trial (" + daysLeft + " days left)";
            }
            return regHeader;
        }

        function isAE() {
            return BridgeTalk.appName == "aftereffects";
        }

        function isPS() {
            return BridgeTalk.appName == "photoshop";
        }

        function readFile(file) {
            if (file.exists && file.open("r")) {
                var string = file.read();
                file.close();
                return string;
            } else {
                return null;
            }
        }

        function createFile(file, encodedStr, encoding, overwrite) {
            if (!file.exists || overwrite) {
                file = ($.os.indexOf("Win") != -1 ? new File(file.fsName) : new File(file.absoluteURI));
                file.encoding = encoding;
                file.open("w");
                file.write(encodedStr);
                file.close();
                file.hidden = true;
                if ($.os.indexOf("Mac") != -1) {
                    systemCall("chmod 757 " + file.absoluteURI);
                }
            }
            return file;
        }

        function systemCall(cmd) {
            if (isAE()) {
                return system.callSystem(cmd);
            }
            if (isPS()) {
                var tempOutputFileName = ($.os.indexOf("Win") != -1 ? Folder.temp.fsName : Folder.temp.absoluteURI) + "/" + Math.round(Math.random() * new Date().getTime() * 21876);
                app.system(cmd + ">" + tempOutputFileName);
                return readFile(File(tempOutputFileName));
            }
            return "";
        }

        function parseSettings(needle, obj) {
            for (var property in obj) {
                if (obj.hasOwnProperty(property)) {
                    if (typeof obj[property] == "object") {
                        return parseSettings(needle, obj[property]);
                    } else {
                        if (property === needle) {
                            return obj[property];
                        }
                    }
                }
            }
        }

        function getSettings(header, name) {
            if (isAE()) {
                return app.settings.getSetting(header, name);
            } else {
                var prefFile = File(prefsLocation + prefsPrefix + File.encode(header));
                var prefString = readFile(prefFile);
                var pref = JSONify(prefString, "parse");
                return pref[name];
            }
        }

        function haveSettings(header, name) {
            if (isAE()) {
                return app.settings.haveSetting(header, name);
            } else {
                var prefFile = File(prefsLocation + prefsPrefix + File.encode(header));
                var prefString = readFile(prefFile);
                if (prefString != null) {
                    var pref = JSONify(prefString.toString(), "parse");
                    return name in pref;
                } else {
                    return false;
                }
            }
        }

        function saveSettings(header, name, value) {
            if (isAE()) {
                app.settings.saveSetting(header, name, value);
                app.preferences.saveToDisk();
            } else {
                var pref = {};
                var prefFile = File(prefsLocation + prefsPrefix + File.encode(header));
                if (prefFile.exists) {
                    var prefString = readFile(prefFile);
                    if (prefString != null) {
                        pref = JSONify(prefString.toString(), "parse");
                    }
                }
                pref[name] = value;
                var prettyJSON = "\r";
                createFile(File(prefsLocation + prefsPrefix + File.encode(header)), JSONify(pref, "stringify", prettyJSON), "UTF-8", true);
            }
        }

        function JSONify(string, mode, prettyJSON) {
            if (typeof JSON !== "object") {
                JSON = {};
            }
            (function () {
                function f(n) {
                    return (n < 10 ? "0" + n : n);
                }

                function this_value() {
                    return this.valueOf();
                }

                function quote(string) {
                    rx_escapable.lastIndex = 0;
                    return (rx_escapable.test(string) ? "\"" + string.replace(rx_escapable, function (a) {
                        var c = meta[a];
                        return (typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4));
                    }) + "\"" : "\"" + string + "\"");
                }

                function str(key, holder) {
                    var mind = gap;
                    var value = holder[key];
                    if (value && typeof value === "object" && typeof value.toJSON === "function") {
                        value = value.toJSON(key);
                    }
                    if (typeof rep === "function") {
                        value = rep.call(holder, key, value);
                    }
                    switch (typeof value) {
                        case "string":
                            return quote(value);
                        case "number":
                            return (isFinite(value) ? String(value) : "null");
                        case "boolean":
                        case "null":
                            return String(value);
                        case "object":
                            if (!value) {
                                return "null";
                            }
                            gap += indent;
                            partial = [];
                            if (Object.prototype.toString.apply(value) === "[object Array]") {
                                length = value.length;
                                for (var i = 0; i < length; i += 1) {
                                    partial[i] = str(i, value) || "null";
                                }
                                v = ((partial.length === 0 ? "[]" : gap) ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]");
                                gap = mind;
                                return v;
                            }
                            if (rep && typeof rep === "object") {
                                length = rep.length;
                                for (var i = 0; i < length; i += 1) {
                                    if (typeof rep[i] === "string") {
                                        k = rep[i];
                                        v = str(k, value);
                                        if (v) {
                                            partial.push(quote(k) + (gap ? ": " : ":") + v);
                                        }
                                    }
                                }
                            } else {
                                for (var k in value) {
                                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                                        v = str(k, value);
                                        if (v) {
                                            partial.push(quote(k) + (gap ? ": " : ":") + v);
                                        }
                                    }
                                }
                            }
                            v = ((partial.length === 0 ? "{}" : gap) ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" : "{" + partial.join(",") + "}");
                            gap = mind;
                            return v;
                    }
                }
                var rx_one = /^[\],:{}\s]*$/;
                var rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
                var rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
                var rx_four = /(?:^|:|,)(?:\s*\[)+/g;
                var rx_escapable = /[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
                var rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
                if (typeof Date.prototype.toJSON !== "function") {
                    Date.prototype.toJSON = function () {
                        return (isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null);
                    };
                    Boolean.prototype.toJSON = this_value;
                    Number.prototype.toJSON = this_value;
                    String.prototype.toJSON = this_value;
                }
                if (typeof JSON.stringify !== "function") {
                    meta = {
                        "\b": "\\b",
                        "\t": "\\t",
                        "\n": "\\n",
                        "\f": "\\f",
                        "\r": "\\r",
                        "\"": "\\\"",
                        "\\": "\\\\"
                    };
                    JSON.stringify = function (value, replacer, space) {
                        gap = "";
                        indent = "";
                        if (typeof space === "number") {
                            for (var i = 0; i < space; i += 1) {
                                indent += " ";
                            }
                        } else {
                            if (typeof space === "string") {
                                indent = space;
                            }
                        }
                        rep = replacer;
                        if (replacer && typeof replacer !== "function" && typeof replacer !== "object" || typeof replacer.length !== "number") {
                            throw new Error("JSON.stringify")
                        }
                        return str("", {
                            "": value
                        });
                    };
                }
            })();
            var jsonParse = (function () {
                function v(h, j, e) {
                    return (j ? u[j] : String.fromCharCode(parseInt(e, 16)));
                }
                var r = "(?:-?\\b(?:0|[1-9][0-9]*)(?:\\.[0-9]+)?(?:[eE][+-]?[0-9]+)?\\b)";
                var k = "(?:[^\\0-\\x08\\x0a-\\x1f\"\\\\]|\\\\(?:[\"/\\\\bfnrt]|u[0-9A-Fa-f]{4}))";
                k = "(?:\"" + k + "*\")";
                var s = new RegExp("(?:false|true|null|[\\{\\}\\[\\]]|" + r + "|" + k + ")", "g");
                var t = new RegExp("\\\\(?:([^u])|u(.{4}))", "g");
                var u = {
                    "\"": "\"",
                    "/": "/",
                    "\\": "\\",
                    b: "\b",
                    f: "\f",
                    n: "\n",
                    r: "\r",
                    t: "\t"
                };
                var w = new String("");
                var x = Object.hasOwnProperty;
                return function (h, j) {
                    h = h.match(s);
                    var c = h[0];
                    var l = false;
                    if ("{" === c) {
                        e = {};
                    } else {
                        if ("[" === c) {
                            e = [];
                        } else {
                            e = [];
                            l = true;
                        }
                    }
                    for (b, d = [e], m = 1 - l, y = h.length; m < y; ++m) {
                        c = h[m];
                        switch (c.charCodeAt(0)) {
                            default:
                                a = d[0];
                                a[b || a.length] = +c;
                                b = void(0);
                                break;
                            case 34:
                                c = c.substring(1, c.length - 1);
                                if (c.indexOf("\\") !== -1) {
                                    c = c.replace(t, v);
                                }
                                a = d[0];
                                if (!b) {
                                    if (a instanceof Array) {
                                        b = a.length;
                                    } else {
                                        b = c || w;
                                        break;
                                    }
                                }
                                a[b] = c;
                                b = void(0);
                                break;
                            case 91:
                                a = d[0];
                                d.unshift(a[b || a.length] = []);
                                b = void(0);
                                break;
                            case 93:
                                d.shift();
                                break;
                            case 102:
                                a = d[0];
                                a[b || a.length] = false;
                                b = void(0);
                                break;
                            case 110:
                                a = d[0];
                                a[b || a.length] = null;
                                b = void(0);
                                break;
                            case 116:
                                a = d[0];
                                a[b || a.length] = true;
                                b = void(0);
                                break;
                            case 123:
                                a = d[0];
                                d.unshift(a[b || a.length] = {});
                                b = void(0);
                                break;
                            case 125:
                                d.shift();
                                break;
                        }
                    }
                    if (l) {
                        if (d.length !== 1) {
                            throw new Error()
                        }
                        e = e[0];
                    } else {
                        if (d.length) {
                            throw new Error()
                        }
                    }
                    if (j) {
                        var p = function (n, o) {
                            var f = n[o];
                            if (f && typeof f === "object") {
                                var i = null;
                                for (var g in f) {
                                    if (x.call(f, g) && f !== n) {
                                        var q = p(f, g);
                                        if (q !== void(0)) {
                                            f[g] = q;
                                        } else {
                                            i || i = [];
                                            i.push(g);
                                        }
                                    }
                                }
                                if (i) {
                                    for (g = i.length; --g >= 0;) {
                                        delete f[i[g]];
                                    }
                                }
                            }
                            return j.call(n, o, f);
                        };
                        e = p({
                            "": e
                        }, "");
                    }
                    return e;
                };
            })();
            switch (mode) {
                case "parse":
                    return jsonParse(string);
                    break;
                case "stringify":
                    return JSON.stringify(string, undefined, prettyJSON);
                    break;
            }
        }
        var licensingVersion = 2.71;
        if (cmd == undefined) {
            cmd = "l";
        }
        var strScriptName = "Key-board";
        var strScriptVersion = "1.0";
        var strTrialUrl = "http://aescripts.com/key-board";
        var privateNum = 217001;
        var strHeader = "OYK";
        var supportEmail = "http://aescripts.com/contact";
        var offerTrial = true;
        var trialLengthDays = 7;
        var trialLengthLaunches = 7;
        var retrieveUrl = "https://aescripts.com/downloadable/customer/products/";
        var exchangeUrl = "https://license.aescripts.com/exchange";
        var useLegacyPrefsHeader = false;
        var betaMode = false;
        var betaExpirationDate = new Date("Dec 1, 2016");
        var licV = 2;
        if ($.os.indexOf("Mac") != -1) {
            var macBase64KeyStr = "Îúíþ\x07\0\0\0\0\0\0\0\0\0\0\0\0Ô\0\0\0\0\08\0\0\0__PAGEZERO\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0__TEXT\0\0\0\0\0\0\0\0\0\0\0\0\0\0P\0\0\0\0\0\0\0P\0\0\x07\0\0\0\0\0\0\x07\0\0\0\0\0\0\0__text\0\0\0\0\0\0\0\0\0\0__TEXT\0\0\0\0\0\0\0\0\0\0\0\08\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0__symbol_stub\0\0\0__TEXT\0\0\0\0\0\0\0\0\0\0¬V\0\0\0\0\0¬F\0\0\0\0\0\0\0\0\0\0\0\0\0\b\0\0\0\0\0\0\0\0__stub_helper\0\0\0__TEXT\0\0\0\0\0\0\0\0\0\0DW\0\0ü\0\0\0DG\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0__gcc_except_tab__TEXT\0\0\0\0\0\0\0\0\0\0@X\0\0\0\0@H\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0__cstring\0\0\0\0\0\0\0__TEXT\0\0\0\0\0\0\0\0\0\0Ð]\0\0\0\0\0ÐM\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0__unwind_info\0\0\0__TEXT\0\0\0\0\0\0\0\0\0\0\\^\0\0\0\0\0\\N\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0__eh_frame\0\0\0\0\0\0__TEXT\0\0\0\0\0\0\0\0\0\0ð^\0\0\f\0\0ðN\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0__DATA\0\0\0\0\0\0\0\0\0\0\0`\0\0\0\0\0\0P\0\0\0\0\0\x07\0\0\0\0\0\0\0\0\0\0\0\0\0__program_vars\0\0__DATA\0\0\0\0\0\0\0\0\0\0\0`\0\0\0\0\0\0P\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0__nl_symbol_ptr\0__DATA\0\0\0\0\0\0\0\0\0\0`\0\0\0\0\0P\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0__la_symbol_ptr\0__DATA\0\0\0\0\0\0\0\0\0\0(`\0\0d\0\0\0(P\0\0\0\0\0\0\0\0\0\0\0\0\0\x07\0\0\0\0\0\0\0\0\0\0__const\0\0\0\0\0\0\0\0\0__DATA\0\0\0\0\0\0\0\0\0\0`\0\0\0\0\0P\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0__common\0\0\0\0\0\0\0\0__DATA\0\0\0\0\0\0\0\0\0\0 `\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\08\0\0\0__LINKEDIT\0\0\0\0\0\0\0p\0\0\0@\0\0\0`\0\0°0\0\0\x07\0\0\0\0\0\0\0\0\0\0\0\0\0\0\"\0\00\0\0\0\0\0\0\0\0\0\0\0\0`\0\0¨\0\0\0¨`\0\0\0\0\0À`\0\0Ü\0\0b\0\0\0\0\0\0\0\0\0\0°c\0\x001\0\0\0Øf\0\x000\0\0\v\0\0\0P\0\0\0\0\0\0\0\t\0\0\0\t\0\0\0\f\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0üe\0\x007\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\f\0\0\0/usr/lib/dyld\0\0\0\0\0\0\0\0\0ª8êõ13½®#à+<Ý$\0\0\0\0\0\0\0\n\0\0\v\n\0\0\0\0P\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\f\0\0\x004\0\0\0\0\0\0\0\0\0\0h\0\0\0\x07\0/usr/lib/libstdc++.6.dylib\0\0\f\0\0\x004\0\0\0\0\0\0\0\0\0\nÊ\0\0\0/usr/lib/libSystem.B.dylib\0\0&\0\0\0\0\0\0 c\0\0\0\0\0)\0\0\0\0\0\0°c\0\0\0\0\0\0\0\0\0\0\0\0j\0\0 &\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0j\0åäðì]$M\bL$ÃÁãË\\$\bÃÀu÷\\$\fè91\0\0$èÉ8\0\0ôUå1À]ÃUå1À]ÃUåSWVìè\0\0\0\0XEäu\f]\bt$$èl8\0\0pôö~Pñ÷ÙëE\f\0ANMìxü\0xE\f$è\f8\0\0E\f\00xôxü\0xUë$èî7\0\0UëøMìö¶Ä^_[]Â\0Æ\vAôUä;ªA\0\0tºÿÿÿÿðÁQüÒMðL$$èª7\0\04$èä7\0\0UåSWVì|E\b0~ô¹\0\0\0ø÷áE¤ÆÁÁÂ\bò¸ÿÿÿÿDÁè\0\0\0\0[$è7\0\08ÀÿÇtE¤D$\b7A\0\0D$<$è7\0\0}] ~ô\tÅ\0\0\0E ý>\0\0E¤}ÀëBºÿÿÿÿðÁQüÒ\0\0\0MØL$$èü6\0\0ësºÿÿÿÿðÁQüÒwMàL$$èÝ6\0\0ëfE¸D$\bE¤D$<$ûèí6\0\0u\b÷|$\b\\$uÈ4$è6\0\0ìt$<$u è±6\0\0MÈAô;Ã@\0\0jÿÿÿMÀAô;Ã@\0\0{ÿÿÿþ6~ô\nßrÇE¤ÿÿÿÿ1ÿë&ºÿÿÿÿðÁQüÒ¼\0\0\0MØL$$è=6\0\0é¨\0\0\x001Òø÷u\fÒu8MU¤DLRU¤IôL$\b$ÇD$\f\0\0\0\0ÇD$\0\0\0\0è6\0\0E\b0~ü\0xE\bÆ4$èÜ5\0\06>E¶ÆE·\0E¨D$\bE¶D$u°4$èç5\0\0EM¤t$$] è·5\0\0u\bM°Aô;Ã@\0\02ÿÿÿG6;~ôLÿÿÿEÄ|^_[]ÃëWÆë/òÆMÈAô;Ã@\0\0tºÿÿÿÿðÁQüÒMèL$$èD5\0\0MÀAôU ;Ã@\0\0tFºÿÿÿÿðÁQüÒ8Mðë'Æë/ÚÆM°Aô;Ã@\0\0tºÿÿÿÿðÁQüÒMÐL$$èí4\0\04$è'5\0\0UåSWVì\0\0è\0\0\0\0_E\b4>\0\0ûÿÿ\tMð\0@ýÿÿL$\bD$µHýÿÿ4$èË4\0\0,>\0\0ûÿÿ@\fûÿÿ8ýÿÿ0ýÿÿ(ýÿÿ ýÿÿa<\0\0ûÿÿ½ûÿÿD$4$ÇD$\f\0\0\0ÇD$\b\0\0\0\0è44\0\0ÃCD$\bûÿÿD$4$ÇD$\f\0\0\0è4\0\0ûÿÿûÿÿ@D$\bûÿÿD$4$ÇD$\f\0\0\0èä3\0\0ÇGD$\bûÿÿD$4$ÇD$\f\0\0\0èÁ3\0\x001ÒûÿDÚûÿÿùÿDÊûÿÿÿÿDú½ûÿÿøÿDÂ\tÙ\tù\tÁ÷\v\0\0\\$\ft$µpýÿÿ4$ÇD$\b\0\0\0\0èq3\0\0ìt$8ýÿÿ$è3\0\0pýÿÿAôûÿÿ;,>\0\0\0\0C÷Óûÿÿ\\$\fD$\bHýÿÿ\\$µhýÿÿ4$è3\0\0ìt$0ýÿÿ$è%3\0\0hýÿÿAôûÿÿ;,>\0\0Ý\0\0ûÿÿA÷ÑûÿÿL$\fD$\b\\$µ`ýÿÿ4$è»2\0\0ìßt$(ýÿÿ$èÈ2\0\0`ýÿÿAôûÿÿ;,>\0\0þ¤\0\0ûÿÿAHýÿÿ@ôD$\fL$\bt$µXýÿÿ4$è]2\0\0ìt$µ ýÿÿ4$èl2\0\0XýÿÿAôûÿÿ;,>\0\0p\0\0 ýÿÿ@ôÀñD$\ft$½ýÿÿ<$ÇD$\b\0\0\0è2\0\0ì|$½ýÿÿ<$è*2\0\0ýÿÿ1ÛxôP\0\0xü\0x<$èÔ1\0\0ýÿÿ¾\fùA\0\0\0xü\0x<$è³1\0\0ýÿÿ\f¾Éù[}fCû|º³xôþ\0\0\0¾\0\0\0xü\0x<$è}1\0\0ýÿÿ¾\f0ù0Ð\0\0\0xü\0x<$è\\1\0\0ýÿÿ\f0¾Éù:­\0\0\0F;pôr¶é¤\0\0\x001Ûé£\0\0\0ºÿÿÿÿðÁQüÒÜýÿÿML$$è1\0\0éÈýÿÿºÿÿÿÿðÁQüÒþÿÿML$$èô0\0\0éýýÿÿºÿÿÿÿðÁQüÒJþÿÿML$$èÎ0\0\0é6þÿÿºÿÿÿÿðÁQüÒ~þÿÿxýÿÿL$$è¥0\0\0égþÿÿ1Ûµ ýÿÿHôûÿÿ;,>\0\0ü\r\0\0Ûí\0\0t$\býÿÿ$ÇD$\f\0\0\0ÇD$\b\0\0\0èM0\0\0ìt$\0ýÿÿ$ÇD$\f\0\0\0ÇD$\b\f\0\0\0è(0\0\0ìt$÷µøüÿÿ4$ÇD$\f\f\0\0\0ÇD$\b\0\0\0\0ûÿÿèû/\0\0ìt$<$è0\0\0þøüÿÿAô;,>\0\0\0\00ýÿÿD$\b8ýÿÿD$÷µØüÿÿ4$è¥/\0\0ì|$\bt$µàüÿÿ4$è/\0\0ì(ýÿÿD$\bt$èüÿÿ$èm/\0\0ìýÿÿD$Ðüÿÿ$è/\0\0èüÿÿÐüÿÿè'\0\0D$\b^<\0\0ûÿÿD$u¦4$è¬/\0\0¨ýÿÿD$\bt$½ðüÿÿ<$èH/\0\0ÐüÿÿAô;,>\0\0\\\r\0\0èüÿÿAô;,>\0\0m\r\0\0àüÿÿAô;,>\0\0~\r\0\0ØüÿÿAô;,>\0\0\r\0\0ðüÿÿ@ôÀþD$\b|$µÈüÿÿ4$ÇD$\f\0\0\0è.\0\0ìt$<$è©.\0\0ÈüÿÿAô;,>\0\0µ ýÿÿa\r\0\0\0ýÿÿ$è¼.\0\0Çðüÿÿ$è¬.\0\09ÇÏ\0\0t$Àüÿÿ$ÇD$\f\0\0\0ÇD$\b\0\0\0\0è\".\0\0ìÀüÿÿ$èk.\0\0ûÿÿ0ýÿÿD$\b8ýÿÿD$µ°üÿÿ4$èÝ-\0\0ì(ýÿÿD$\bt$¸üÿÿ$è¾-\0\0ìýÿÿD$¨üÿÿ$èë-\0\0¸üÿÿ¨üÿÿèl%\0\0Ç¨üÿÿAô;,>\0\0A\r\0\0¸üÿÿAô;,>\0\0R\r\0\0°üÿÿAô;,>\0\0c\r\0\00ýÿÿD$\b8ýÿÿD$µüÿÿ4$è/-\0\0ì(ýÿÿD$\bt$µüÿÿ4$è-\0\0ì ýÿÿD$\bt$ üÿÿ$èñ,\0\0ìýÿÿD$üÿÿ$è-\0\0 üÿÿüÿÿè$\0\0üÿÿAô;,>\0\0è\f\0\0 üÿÿAô;,>\0\0ù\f\0\0üÿÿAô;,>\0\0\n\r\0\0üÿÿAô;,>\0\0\r\0\00ýÿÿxü\0x0ýÿÿ$èi,\0\0(ýÿÿxü\0x(ýÿÿ$èO,\0\0E\fD$\bûÿÿD$E¦Æ4$è©,\0\0àýÿÿD$\bt$µxüÿÿ4$èE,\0\0xüÿÿxü\0x4$è,\0\0xüÿÿ\büÿÿHô;,>\0\0¢\f\0\0½ûÿÿÆüÿÿ\0üÿÿ$è,\0\0D$\bà;\0\0D$µüÿÿ4$è%,\0\0hüÿÿD$\bt$püÿÿ$èÁ+\0\0püÿÿ$è×+\0\0Ákûÿÿ\nØ÷ù)Ó¹Ø÷é× ýÿÿ@ôÀþD$\f ýÿÿ\\$µ`üÿÿ4$ÇD$\b\0\0\0è2+\0\0ìt$$èG+\0\0Þ`üÿÿAôûÿÿ;,>\0\0ð\v\0\0t$óµPüÿÿ4$è.+\0\0t$µXüÿÿ4$èòÿÿìt$Þ4$èó*\0\0XüÿÿAôûÿÿ;,>\0\0Ä\v\0\0PüÿÿAô;,>\0\0Õ\v\0\0ûÿÿHüÿÿ@üÿÿt$@üÿÿ$è*\0\0øÁèÁÿÇûÿÿ\f8ûÿÿD8ûÿÿ1ÿËÎÇûÿÿ\0\0\0\0 ýÿÿ;Xôs0xü\0x ýÿÿ$è/*\0\0 ýÿÿ¾D$Hüÿÿ$è=*\0\0@üÿÿ;pôst$@üÿÿ$ÇD$\b\0\0\0èú)\0\0Hüÿÿ;xôs.xü\0xHüÿÿ$èÏ)\0\0Hüÿÿ¾\f8ûÿÿT\nÐûÿÿGµûÿÿûÿÿÿQÿÿÿxôûÿÿuûÿÿé\0\0\x001ÒûÿÿéÂ\0\x001Òé|\0\0 ýÿÿpôxü\0x ýÿÿ$èW)\0\0 ýÿÿ¾D0ÿD$Hüÿÿ$èd)\0\0Hüÿÿpôxü\0xHüÿÿ$è)\0\0Hüÿÿ¾D0ÿûÿÿLÐÈD$\bûÿÿD$E¦Æ4$èc)\0\0 þÿÿD$\bt$µ8üÿÿ4$èÿ(\0\08üÿÿ@ôHD$\bt$½0üÿÿ<$ÇD$\f\0\0\0è¡(\0\0ì|$4$è¶(\0\00üÿÿAô;,>\0\0Ù\t\0\08üÿÿ\býÿÿL$$èé(\0\0ÀT\0\x001Ò8üÿÿAô;,>\0\0(\0\0@üÿÿAô;,>\0\0A\0\0HüÿÿAô;,>\0\0Z\0\0püÿÿAô;,>\0\0s\0\0ÀüÿÿAô;,>\0\0\0\0ðüÿÿAô;,>\0\0ú\0\0\0ýÿÿAô;,>\0\0\x07\0\0\býÿÿAô;,>\0\0,\x07\0\0ýÿÿAô;,>\0\0I\0\0ûÿÿ ýÿÿAôµûÿÿ;,>\0\0\0\0(ýÿÿAô;,>\0\05\0\00ýÿÿAô;,>\0\0N\0\08ýÿÿAô;,>\0\0g\0\0HýÿÿAô;,>\0\0\0\0ûÿÿ\0;Eðu¶ÂÄ\0\0^_[]Ãè]'\0\0HüÿÿD$µ üÿÿ4$è-'\0\0t$µ(üÿÿ4$èîÿÿìt$Hüÿÿ$èî&\0\0(üÿÿAô;,>\0\0&\0\0 üÿÿAô;,>\0\07\0\0@üÿÿD$µ\büÿÿ4$ÇD$\f\0\0\0ÇD$\b\0\0\0\0èx&\0\0ìHüÿÿD$\bt$µüÿÿ4$èM&\0\0ì@üÿÿ@ôHD$\f@üÿÿD$½\0üÿÿ<$ÇD$\b\0\0\0è(&\0\0ì|$\bt$½üÿÿ<$è&\0\0ì\0üÿÿAô;,>\0\0µûÿÿ®\0\0üÿÿAô;,>\0\0¿\0\0\büÿÿAô;,>\0\0Ð\0\0E\fÂÑÁùð÷â¯ÎÑL$\fD$\bE<\0\0D$E¦Æ4$è&\0\0PþÿÿD$\bt$µøûÿÿ4$è¯%\0\0t$µðûÿÿ4$è£%\0\04$ÇD$\0\0\0èÁíÿÿûÿÿðûÿÿAô;,>\0\0k\0\0èûÿÿD$\b³ä;\0\0t$E$èS%\0\0MtûÿÿàûÿÿD$\bõ;\0\0D$\f$è.%\0\0]ØûÿÿD$\bt$$è%\0\0]ÐûÿÿD$\bt$$èü$\0\0]ÈûÿÿD$\bt$$èã$\0\0]ÀûÿÿD$\bt$$èÊ$\0\0] ¸ûÿÿD$\bt$$è±$\0\0|$µ¨ûÿÿ4$è¥$\0\0t$°ûÿÿ$ÇD$\f\0\0\0ÇD$\b\0\0\0½ûÿÿèA$\0\0ì¨ûÿÿAô;,>\0\0ûÿÿx\r\0\0B$×èp$\0\0ûÿÿE\fD$\bûÿÿD$E¦Æ4$èp$\0\0hþÿÿD$\bt$µ`þÿÿ4$è\f$\0\0Güxûÿÿ`þÿÿHüÉ\0\04$èº#\0\0`þÿÿHü¾8ÇÐÉ}\0\04$è#\0\0`þÿÿHü¾PÂÐûÿÿÉù\0\04$èu#\0\0`þÿÿHüéN\0\0×ºÿÿÿÿðÁQüÒúÎûÿÿML$$×èF#\0\0úé¶ûÿÿ×ºÿÿÿÿðÁQüÒúµûÿÿML$$×è#\0\0úéûÿÿ×ºÿÿÿÿðÁQüÒúûÿÿML$$×èê\"\0\0úéûÿÿ×ºÿÿÿÿðÁQüÒúûÿÿML$$×è¼\"\0\0úékûÿÿÖºÿÿÿÿðÁQüÒòjûÿÿML$$Öè\"\0\0òéRûÿÿºÿÿÿÿðÁPüÒòñÿÿED$\f$èf\"\0\0éÞñÿÿÖûÿÿºÿÿÿÿðÁQüÒpÿÿÿL$$è9\"\0\0òéúÿÿ¾8ÇÐ¾PÂÐûÿÿ¾XÃÐÉ\0\04$è\"\0\0`þÿÿ¾HÁÐûÿÿxü\0\0\04$èÝ!\0\0ò`þÿÿHüé_\0\0ºÿÿÿÿðÁQüÒàñÿÿML$$è²!\0\0éÌñÿÿºÿÿÿÿðÁQüÒòÿÿML$$è!\0\0é~òÿÿºÿÿÿÿðÁQüÒòÿÿML$$èf!\0\0émòÿÿºÿÿÿÿðÁQüÒpòÿÿML$$è@!\0\0é\\òÿÿºÿÿÿÿðÁQüÒ_òÿÿML$$è!\0\0éKòÿÿºÿÿÿÿðÁQüÒòÿÿML$$èô \0\0éyòÿÿÖºÿÿÿÿðÁQüÒòðøÿÿML$$ÖèÈ \0\0òéØøÿÿÖºÿÿÿÿðÁQüÒò×øÿÿML$$Öè \0\0òé¿øÿÿÖºÿÿÿÿðÁQüÒXÿÿÿL$$èq \0\0òé«øÿÿ½|ûÿÿ¾HÁÐûÿÿé\v\0\0ºÿÿÿÿðÁQüÒ­òÿÿML$$è1 \0\0éòÿÿºÿÿÿÿðÁQüÒòÿÿML$$è\v \0\0éòÿÿºÿÿÿÿðÁQüÒòÿÿML$$èå\0\0éwòÿÿºÿÿÿÿðÁQüÒóÿÿML$$è¿\0\0éòòÿÿºÿÿÿÿðÁQüÒõòÿÿML$$è\0\0éáòÿÿºÿÿÿÿðÁQüÒäòÿÿML$$ès\0\0éÐòÿÿºÿÿÿÿðÁQüÒÓòÿÿML$$èM\0\0é¿òÿÿºÿÿÿÿðÁPüÒLóÿÿED$\f$è'\0\0é8óÿÿºÿÿÿÿðÁQüÒþóÿÿML$$è\0\0éêóÿÿºÿÿÿÿðÁQüÒ*ôÿÿML$$èÛ\0\0éôÿÿºÿÿÿÿðÁQüÒôÿÿML$$èµ\0\0éôÿÿºÿÿÿÿðÁQüÒöÿÿML$$è\0\0éöÿÿ¾XÃÐò¾pÆÐµûÿÿ¾pÆÐµûÿÿÉx$èU\0\0½|ûÿÿ`þÿÿë½|ûÿÿuØ¾xXþÿÿD$\bûÿÿ0<\0\0D$4$èH\0\0ED$EÜ$Æè:\0\0ÇÐûÿÿ¨t'ûÿÿ¯|ûÿÿûÿÿûÿÿËû\tÃãÿ\0\0ë%ûÿÿ|ûÿÿ\tÁûÿÿØ1È¯ûÿÿ¯Ç¶Ø\\$\b½ûÿÿB<\0\0D$uá4$è\0\0þÿÿD$\bt$µxþÿÿ4$è \0\0xþÿÿxôÄ\0\0\0þÿÿD$\bA<\0\0D$½þÿÿ<$èn\0\0xþÿÿ»\0\0\0+XôÛ~31öûÿÿf<\0\0ûÿÿûÿÿD$<$ÇD$\b\0\0\0è\0\0F9Þ|áxþÿÿD$<$èÿ\0\0|$þÿÿ$è\v\0\0þÿÿAô½ûÿÿ;,>\0\0t4ºÿÿÿÿðÁQüÒ& þÿÿL$$è¤\0\0ët$þÿÿ$èÀ\0\0xþÿÿAô;,>\0\0ò\0\0pþÿÿD$\bA<\0\0D$ ûÿÿ$è\0\0þÿÿyô\0\0\0\x001ö}Øyü\0xþÿÿ$è*\0\0þÿÿEØ1Ûxô\0tM\f1ûÿÿxü\0x\v<$è\0\0EØ¶\f¶ûÿÿ9Ñt\nC;XôrÚ1ÛëEÜxü\0xEÜ$èÒ\0\0EÜ¾ÃD$ ûÿÿ$èá\0\0Fþÿÿ;qôiÿÿÿAô¾\b\0\0\0½ûÿÿ;,>\0\0tAºÿÿÿÿðÁQüÒ3ÀþÿÿL$$èw\0\0ëºÿÿÿÿðÁQüÒ ML$$èX\0\0ëL5ÔAô;,>\0\0uÒÆüuì`þÿÿAô;,>\0\0\0\0µ ûÿÿ°ûÿÿD$4$è\0\0ÀÀ¶Àûÿÿ7\0\0½ûÿÿÿûÿÿ/\0\0xûÿÿ0öt9Áæë$é\0\0ºÿÿÿÿðÁQüÒML$$èº\0\0ë\vL7üAô9ØuÖÆüuðxûÿÿ$èÐ\0\0Çûÿÿ\0\0\0µ ûÿÿéÇ\0\0ÆþÿÿAôûÿÿ;,>\0\0ûÿÿñ\0\0xþÿÿAôûÿÿ;,>\0\0<\0\0ºÿÿÿÿðÁQüÒ*\0\0°þÿÿé\b\0\0ÖºÿÿÿÿðÁQüÒòÂñÿÿML$$Öè\0\0òéªñÿÿÖºÿÿÿÿðÁQüÒò©ñÿÿML$$ÖèÕ\0\0òéñÿÿÖºÿÿÿÿðÁQüÒòñÿÿML$$Öè§\0\0òéxñÿÿÖºÿÿÿÿðÁQüÒòwñÿÿML$$Öèy\0\0òé_ñÿÿÖºÿÿÿÿðÁQüÒ@ÿÿÿL$$èP\0\0òéKñÿÿÆ ûÿÿAôûÿÿ;,>\0\0ûÿÿÃ\0\0þÿÿAôûÿÿ;,>\0\0Ñ\0\0µûÿÿ¾\b\0\0\0}ëºÿÿÿÿðÁQüÒ|$$èá\0\0ë\vL5ÔAô9ØuÙÆüuðé0\f\0\0ûÿÿ½ûÿÿFôòµûÿÿ;,>\0\0¼\0\0°ûÿÿAô;,>\0\0Í\0\0½ûÿÿ\0ÂuTÿtPxûÿÿ0öt4ÁæëºÿÿÿÿðÁQüÒML$$èT\0\0ë\vL7üAô9ØuÖÆüuðxûÿÿ$èj\0\0²¿\0\0\0ë'ÖºÿÿÿÿðÁQüÒò ML$$Öè\b\0\0òë\vL=Aô9ØuÎÇüuðøûÿÿAôûÿÿ;,>\0\0:\0\0üÿÿAô;,>\0\0]ïÿÿÖºÿÿÿÿðÁQüÒÿÿÿL$$è¢\0\0òé4ïÿÿºÿÿÿÿðÁQüÒÈðÿÿML$$èz\0\0é´ðÿÿºÿÿÿÿðÁQüÒ·ðÿÿML$$èT\0\0é£ðÿÿºÿÿÿÿðÁQüÒ@ñÿÿML$$è.\0\0é,ñÿÿºÿÿÿÿðÁQüÒ/ñÿÿML$$è\b\0\0éñÿÿºÿÿÿÿðÁQüÒñÿÿML$$èâ\0\0é\nñÿÿºÿÿÿÿðÁQüÒñÿÿML$$è¼\0\0éoñÿÿÖºÿÿÿÿðÁQüÒòròÿÿML$$Öè\0\0òéZòÿÿºÿÿÿÿðÁQüÒüùÿÿML$$èh\0\0éèùÿÿºÿÿÿÿðÁQüÒ+ýÿÿ¸þÿÿL$$è?\0\0éýÿÿºÿÿÿÿðÁQüÒýÿÿÈþÿÿL$$è\0\0éýÿÿºÿÿÿÿðÁQüÒÒúÿÿML$$èð\0\0é¾úÿÿ¹ÿÿÿÿðÁJüÉ2ýÿÿML$$èÊ\0\0éýÿÿºÿÿÿÿðÁQüÒ!ýÿÿML$$è¤\0\0é\rýÿÿ×ºÿÿÿÿðÁQüÒú°ýÿÿML$$Öèx\0\0òéýÿÿºÿÿÿÿðÁQüÒýúÿÿ¨þÿÿL$$èM\0\0éæúÿÿûÿÿép\f\0\0ûÿÿpýÿÿAôûÿÿ;,>\0\0H\v\0\0ºÿÿÿÿðÁQüÒ6\v\0\0ýÿÿé\v\0\0ûÿÿhýÿÿAôûÿÿ;,>\0\0\n\v\0\0ºÿÿÿÿðÁQüÒø\n\0\0ýÿÿéá\n\0\0ûÿÿ`ýÿÿAôûÿÿ;,>\0\0Ì\n\0\0ºÿÿÿÿðÁQüÒº\n\0\0ýÿÿé£\n\0\0ûÿÿXýÿÿAôûÿÿ;,>\0\0\n\0\0ºÿÿÿÿðÁQüÒ|\n\0\0ýÿÿée\n\0\0ûÿÿéf\n\0\0ë\0ûÿÿýÿÿAôûÿÿ;,>\0\0\f\n\0\0ºÿÿÿÿðÁQüÒú\t\0\0 ýÿÿéã\t\0\0ûÿÿéä\t\0\0ûÿÿé¢\t\0\0ûÿÿøüÿÿAô;,>\0\0P\t\0\0ºÿÿÿÿðÁQüÒ>\t\0\0°ýÿÿé'\t\0\0ûÿÿé(\t\0\0ûÿÿéµ\0\0\0ûÿÿëvûÿÿë7ûÿÿÐüÿÿAô;,>\0\0t ºÿÿÿÿðÁQüÒ¸ýÿÿL$$èO\0\0èüÿÿAôûÿÿ;,>\0\0t ºÿÿÿÿðÁQüÒÀýÿÿL$$è\0\0àüÿÿAôûÿÿ;,>\0\0t ºÿÿÿÿðÁQüÒÈýÿÿL$$èá\0\0ØüÿÿAôûÿÿ;,>\0\0M\b\0\0ºÿÿÿÿðÁQüÒ;\b\0\0Ðýÿÿé$\b\0\0ûÿÿÈüÿÿAô;,>\0\0Þ\x07\0\0ºÿÿÿÿðÁQüÒÌ\x07\0\0Øýÿÿéµ\x07\0\0ûÿÿé¶\x07\0\0ûÿÿëvûÿÿë7ûÿÿ¨üÿÿAô;,>\0\0t ºÿÿÿÿðÁQüÒèýÿÿL$$è\0\0¸üÿÿAôûÿÿ;,>\0\0t ºÿÿÿÿðÁQüÒðýÿÿL$$èè\0\0°üÿÿAôûÿÿ;,>\0\0æ\0\0ºÿÿÿÿðÁQüÒÔ\0\0øýÿÿé½\0\0ûÿÿéµ\0\0\0ûÿÿëvûÿÿë7ûÿÿüÿÿAô;,>\0\0t ºÿÿÿÿðÁQüÒ\0þÿÿL$$è^\0\0 üÿÿAôûÿÿ;,>\0\0t ºÿÿÿÿðÁQüÒ\bþÿÿL$$è'\0\0üÿÿAôûÿÿ;,>\0\0t ºÿÿÿÿðÁQüÒþÿÿL$$èð\0\0üÿÿAôûÿÿ;,>\0\0î\0\0ºÿÿÿÿðÁQüÒÜ\0\0þÿÿéÅ\0\0ë8ûÿÿxüÿÿAô;,>\0\0´\0\0ºÿÿÿÿðÁQüÒ¢\0\0(þÿÿé\0\0ûÿÿé\0\0ûÿÿ`üÿÿAôûÿÿ;,>\0\04\0\0ºÿÿÿÿðÁQüÒ\"\0\00þÿÿé\v\0\0ûÿÿé\f\0\0ûÿÿë=ûÿÿXüÿÿAôûÿÿ;,>\0\0t ºÿÿÿÿðÁQüÒ8þÿÿL$$èå\0\0PüÿÿAôûÿÿ;,>\0\0¬\0\0ºÿÿÿÿðÁQüÒ\0\0@þÿÿé\0\0ëûÿÿûÿÿé\0\0ûÿÿ0üÿÿAô;,>\0\0¿\0\0ºÿÿÿÿðÁQüÒ­\0\0Hþÿÿé\0\0ûÿÿë7ûÿÿ(üÿÿAô;,>\0\0t ºÿÿÿÿðÁQüÒÐþÿÿL$$è#\0\0 üÿÿAôûÿÿ;,>\0\0H\0\0ºÿÿÿÿðÁQüÒ6\0\0Øþÿÿé\0\0ûÿÿé \0\0ûÿÿëvûÿÿë7ûÿÿ\0üÿÿAô;,>\0\0t ºÿÿÿÿðÁQüÒàþÿÿL$$è\0\0üÿÿAôûÿÿ;,>\0\0t ºÿÿÿÿðÁQüÒèþÿÿL$$èb\0\0\büÿÿAôûÿÿ;,>\0\0\0\0ºÿÿÿÿðÁQüÒu\0\0ðþÿÿé^\0\0ûÿÿé(\0\0ûÿÿéæ\0\0ûÿÿðûÿÿAô;,>\0\0Ë\0\0ºÿÿÿÿðÁQüÒ¹\0\0øþÿÿL$$èÕ\r\0\0é¢\0\0ûÿÿEtûÿÿëûÿÿëëëëë\0ûÿÿtûÿÿE;tûÿÿf\0\0u]tûÿÿHüAô;ûÿÿtºÿÿÿÿðÁQüÒ\f\\$$è`\r\0\0tûÿÿÀütûÿÿ9Æu¿é\0\0ûÿÿë7ûÿÿ¨ûÿÿAô;,>\0\0t ºÿÿÿÿðÁQüÒ\0ÿÿÿL$$è\t\r\0\0ûÿÿé\0\0\0ûÿÿûÿÿëqûÿÿëHûÿÿEØ9ðót9uØ}KüAô;ûÿÿtºÿÿÿÿðÁQüÒ\f|$$è«\f\0\0ØÀü9ÆÃuÍûÿÿ`þÿÿAôûÿÿ;,>\0\0À\0\0°ûÿÿAôûÿÿ;,>\0\0Ë\0\0¾\0\0\0}ëºÿÿÿÿðÁQüÒ|$$è@\f\0\0ë\vL5Aô9ØuÙÆüuðøûÿÿAôûÿÿ;,>\0\0t ºÿÿÿÿðÁQüÒÿÿÿL$$è÷\v\0\0ûÿÿüÿÿAô;,>\0\0t ºÿÿÿÿðÁQüÒ ÿÿÿL$$èÀ\v\0\08üÿÿAôûÿÿ;,>\0\0t ºÿÿÿÿðÁQüÒ(ÿÿÿL$$è\v\0\0@üÿÿAôûÿÿ;,>\0\0tºÿÿÿÿðÁQüÒML$$èU\v\0\0HüÿÿAôûÿÿ;,>\0\0t ºÿÿÿÿðÁQüÒ0ÿÿÿL$$è\v\0\0püÿÿAôûÿÿ;,>\0\0t ºÿÿÿÿðÁQüÒ8ÿÿÿL$$èç\n\0\0ÀüÿÿAôûÿÿ;,>\0\0t ºÿÿÿÿðÁQüÒHÿÿÿL$$è°\n\0\0ðüÿÿAôûÿÿ;,>\0\0t ºÿÿÿÿðÁQüÒPÿÿÿL$$èy\n\0\0\0ýÿÿAôûÿÿ;,>\0\0t ºÿÿÿÿðÁQüÒ`ÿÿÿL$$èB\n\0\0\býÿÿAôûÿÿ;,>\0\0t ºÿÿÿÿðÁQüÒhÿÿÿL$$è\v\n\0\0ýÿÿAôûÿÿ;,>\0\0t ºÿÿÿÿðÁQüÒxÿÿÿL$$èÔ\t\0\0 ýÿÿAôûÿÿ;,>\0\0tºÿÿÿÿðÁQüÒML$$è \t\0\0(ýÿÿAôûÿÿ;,>\0\0tºÿÿÿÿðÁQüÒML$$èl\t\0\00ýÿÿAôûÿÿ;,>\0\0tºÿÿÿÿðÁQüÒML$$è8\t\0\08ýÿÿAôûÿÿ;,>\0\0tºÿÿÿÿðÁQüÒML$$è\t\0\0HýÿÿAôûÿÿ;,>\0\0t ºÿÿÿÿðÁQüÒPýÿÿL$$èÍ\b\0\0ûÿÿ$è\t\0\0ºÿÿÿÿðÁQüÒ.üÿÿML$$è\b\0\0éüÿÿºÿÿÿÿðÁQüÒ#üÿÿ\bÿÿÿL$$èu\b\0\0é\füÿÿûÿÿûÿÿéZïÿÿëéÓíÿÿÆûÿÿééíÿÿÆûÿÿéïÿÿUåSWVìUèÊÇEð\0\0\0\0xô\0»\0\0\0\0t$1Û1ÿxü\0xÖ4$è\b\0\0ò¾\f8ËG;xôrà]ì}èyôr-ú¿\0\0\0yü\0xÖ4$èÍ\x07\0\0ò]ì¾9EðG;yôrÜëyü\0x\n<$è©\x07\0\0ú¾AEð1Àyô\0×tRyü\0x9<$è\x07\0\0¾1yü\0x)<$ès\x07\0\0ø¾y÷yü\0x$ÆèY\x07\0\0ë\t¾1¾y÷¾Aø¯EðØÄ^_[]ÃUåSWVìÜ\0\0\0è\0\0\0\0[E\bø¼\0\0$è\x07\0\0é\0\0u\f1ÿøu\rF\f$èJ\x07\0\0ÇF\b$è=\x07\0\0=©O\0u\b_\0\0ëf\0\0$è \x07\0\00ÿÿÿFHÿÿÿL$\bD$µPÿÿÿ4$è×\0\0ÿæ\0\0t$µ8ÿÿÿ4$èÃ\0\0»\0\04ÿÿÿ|$4$ÇD$\f\0\0\0ÇD$\b\0\0\0\0èY\0\0ÃCD$\b|$4$ÇD$\f\0\0\0è<\0\0ÇûÿÝ\0\0ÿÿÔ\0\0\\$\ft$E¨$ÇD$\b\0\0\0\0è\0\0ì¸þÿÿÿ)ØÃøD$\f\\$\bt$] $èí\0\0ì8ÿÿÿ@ôÇD$\f|$\bt$u4$èÇ\0\0ì\\$\bE¨D$}<$è¢\0\0ìt$\b\\$u4$è\0\0ì|$E$4ÿÿÿè¼\0\0t$xÿÿÿ$èª\0\0Mxÿÿÿè.ýÿÿÇxÿÿÿAô;\0\0³\0\0MAô;\0\0Ç\0\0MAô;\0\0Û\0\0MAô;\0\0ï\0\0MAô;\0\0\0\0M Aô;\0\0\0\00ÿÿÿÑè¯øM¨Aô;\0\0\0\0\0ºÿÿÿÿðÁQüÒrMØL$$èÁ\0\0ëat$µ@ÿÿÿ4$èÝ\0\04ÿÿÿ0ÿÿÿD$4$è°ÏÿÿÃ@ÿÿÿAô4ÿÿÿ;\0\0°\0\0\0ÛtX4ÿÿÿÁ\0\0ëV1ÿ4ÿÿÿ|$m\0\0$è²\0\08ÿÿÿAô;\0\0t3ºÿÿÿÿðÁQüÒ%MðL$$è\0\0ë4ÿÿÿ¿\0\0$èt\0\0PÿÿÿAô;\0\0u\r1ÀÄÜ\0\0\0^_[]ÃºÿÿÿÿðÁQüÒå`ÿÿÿL$$èÊ\0\0ëÑºÿÿÿÿðÁQüÒ>ÿÿÿMèL$$è§\0\0é*ÿÿÿºÿÿÿÿðÁQüÒ;þÿÿMèL$$è\0\0é'þÿÿºÿÿÿÿðÁQüÒ'þÿÿMèL$$è[\0\0éþÿÿºÿÿÿÿðÁQüÒþÿÿMèL$$è5\0\0éÿýÿÿºÿÿÿÿðÁQüÒÿýÿÿMèL$$è\0\0éëýÿÿºÿÿÿÿðÁQüÒëýÿÿMèL$$èé\0\0é×ýÿÿºÿÿÿÿðÁQüÒ×ýÿÿMèL$$èÃ\0\0éÃýÿÿÇé(\0\0Çéz\0\0ÇéB\0\0Çé\n\0\0ÇéÒ\0\0\0Çé\0\0\0ÇëeÇë0ÇxÿÿÿAô;\0\0tºÿÿÿÿðÁQüÒM°L$$è\\\0\0MAô4ÿÿÿ;\0\0tºÿÿÿÿðÁQüÒM¸L$$è+\0\0MAô4ÿÿÿ;\0\0tºÿÿÿÿðÁQüÒMÀL$$èú\0\0MAô4ÿÿÿ;\0\0tºÿÿÿÿðÁQüÒMÈL$$èÉ\0\0MAô4ÿÿÿ;\0\0tºÿÿÿÿðÁQüÒMÐL$$è\0\0M Aô4ÿÿÿ;\0\0tºÿÿÿÿðÁQüÒMàL$$èg\0\0M¨Aô4ÿÿÿ;\0\0tºÿÿÿÿðÁQüÒMèL$$è6\0\08ÿÿÿAô4ÿÿÿ;\0\0tYºÿÿÿÿðÁQüÒKhÿÿÿë74ÿÿÿÇë9Ç@ÿÿÿAô4ÿÿÿ;\0\0t ºÿÿÿÿðÁQüÒpÿÿÿL$$èÆ\0\0\0PÿÿÿAô4ÿÿÿ;\0\0t ºÿÿÿÿðÁQüÒXÿÿÿL$$è\0\0\0<$èÉ\0\0\0UåSWVì\fè\0\0\0\0_]\buE\fD$$è\0\0\0t$$èi\0\0\0Ä\f^_[]Â\0Æ\vAô;Ñ\t\0\0tºÿÿÿÿðÁQüÒMðL$$è!\0\0\04$è[\0\0\0ÿ%(`\0\0ÿ%,`\0\0ÿ%0`\0\0ÿ%4`\0\0ÿ%8`\0\0ÿ%<`\0\0ÿ%@`\0\0ÿ%D`\0\0ÿ%H`\0\0ÿ%L`\0\0ÿ%P`\0\0ÿ%T`\0\0ÿ%X`\0\0ÿ%\\`\0\0ÿ%``\0\0ÿ%d`\0\0ÿ%h`\0\0ÿ%l`\0\0ÿ%p`\0\0ÿ%t`\0\0ÿ%x`\0\0ÿ%|`\0\0ÿ%`\0\0ÿ%`\0\0ÿ%`\0\0\0\0h`\0\0ÿ%`\0\0h\0\0\0\0éêÿÿÿh\0\0\0éàÿÿÿh1\0\0\0éÖÿÿÿhN\0\0\0éÌÿÿÿht\0\0\0éÂÿÿÿh\0\0\0é¸ÿÿÿh£\0\0\0é®ÿÿÿh¼\0\0\0é¤ÿÿÿhÕ\0\0\0éÿÿÿhð\0\0\0éÿÿÿh\t\0\0éÿÿÿh#\0\0é|ÿÿÿh\0\0\0\0érÿÿÿh\0\0\0\0éhÿÿÿh7\0\0é^ÿÿÿhM\0\0éTÿÿÿhe\0\0éJÿÿÿhq\0\0é@ÿÿÿh}\0\0é6ÿÿÿh\0\0é,ÿÿÿh¡\0\0é\"ÿÿÿh¯\0\0éÿÿÿh¼\0\0éÿÿÿhÌ\0\0éÿÿÿÿ)'\0\0\0\0C\0\0\0\0\0\0\0\0C\0\0\0)\0\0\0\0\0\0\0l\0\0\0R\0\0\0\0\0\0\0\0ÿê\0h\0\0\0\0Ç\0\0\0\0\0\0\0\0Ç\0\0\0\0\0\0)\0\0\0ß\0\0\0\0\0\0+\0\0\0ú\0\0\0\0\0\0/\0\0\0\t\0\0Ã\0\0\0\0\0\0\0\0Ì\0\0\0\0\0\0\0\0î\0\0\0\0\0\0\0\0ý\0\0À\0\0\0\0\0\0\0\0ÿ)'\0\0\0\0$\0\0\0\0\0\0\0\0$\0\0\0\f\0\0\0:\0\0\0\x000\0\0\0>\0\0\0\0\0\0\0\0ÿ\0\b(\0\0\0\0\0\0\0\0\0q\0\0\0ú\0\0\0  \0\0\0k\0\0\0\0\0¨\0\0\0£\0\0#\0\0\0  \0\0\0Æ\0\0\0\0\0æ\0\0\0\0\0\0\0\0  \0\0\0!\0\0\0\0\0$ \0\0\0b\0\0\0\0\0  \0\0\0\0\0\0\0\0b \0\0\0¸\0\0!\0\0\0  \0\0\0Ù\0\0\0\0\0ë \0\0\0\0\0)\0\0\0« \0\0\0Z\0\0)\0\0\0­ \0\0\0j\0\0%\0\0\0ë \0\0\0\0\0%\0\0\0ö \0\0\0´\0\0-\0\0\09!\0\0\0á\0\0\f\0\0\0!\0\0\0\0\0'\0\0\09!\0\0\0+\0\0\0\0\0D!\0\0\0D\0\0\0\0\0O!\0\0\0c\0\0\0\0\0W!\0\0\0{\0\0L\0\0\0_!\0\0\0'\0\0!\0\0\0t\"\0\0\0H\0\0\f\0\0\0<\"\0\0\0\0\0%\0\0\0t\"\0\0\0Î\0\0%\0\0\0-$\0\0\0ó\0\0\0\0\0\"\0\0\0\x07\0\0\0\0\0\"\0\0\0*\x07\0\0\0\0\0\"\0\0\0|\x07\0\0%\0\0\0-$\0\0\0¡\x07\0\0\0\0\x005#\0\0\0À\x07\0\0\0\0\0@#\0\0\0ß\x07\0\0\0\0\0H#\0\0\0÷\x07\0\0\0\0\0P#\0\0\0h\b\0\0b\0\0\0-$\0\0\0Ö\b\0\0\b\0\0\0/$\0\0\x002\t\0\0\0\0\0g$\0\0\0\t\0\0'\0\0\0°$\0\0\0ª\t\0\0\f\0\0\0r$\0\0\0Ó\t\0\0\0\0\0°$\0\0\0ç\t\0\0\0\0\0»$\0\0\0ü\t\0\0\0\0\0Ã$\0\0\0L\n\0\0\0\0\0:%\0\0\0¢\n\0\0n\0\0\08%\0\0\0z\v\0\0\0\0\0:%\0\0\0\f\0\0!\0\0\0ú%\0\0\0;\f\0\0\f\0\0\0K%\0\0\0G\f\0\0\0\0\0\0\0\0\0Ð\r\0\0\0\0\0ú%\0\0\0è\r\0\0\0\0\0%\0\0\0ý\r\0\0\0\0\0%\0\0\09\0\0+\0\0\0ú%\0\0\0d\0\0\0\0\0&\0\0\0\0\0'\0\0\0\r&\0\0\0´\0\0\0\0\0&\0\0\0D\0\0\0\0\0»&\0\0\0`\0\0\0\0\0Æ&\0\0\0r\0\0\0\0\0Ñ&\0\0\0\0\0\0\0\0'\0\0\0Å\0\0\0\0\0&'\0\0\0ä\0\0\0\0\0.'\0\0\0ý\0\0\0\0\x000'\0\0\0\0\0\0\0\x002'\0\0\0/\0\0\0\0\x004'\0\0\0H\0\0\0\0\x006'\0\0\0^\0\0\0\0\0'\0\0\0p\0\0+\0\0\0¥'\0\0\0ç\0\0\0\0\0ç'\0\0\0\0\0m\0\0õ'\0\0\0¥\0\x006\0\0\0ý'\0\0\0S\0\0\0\0\0u,\0\0\0\0\0\"\0\0\0,\0\0\0Ç\0\0\0\0\0`\0\0\0æ\0\0$\0\0\0,\0\0\0C\0\0\0\0\0,\0\0\0j\0\0\"\0\0\0,\0\0\0§\0\0\0\0\0\0\0\0Õ\0\0\b\0\0\0\t\0\0\0\0\0&\0\0\0\0\0\0(\0\0\0\0\0\0\0\0\0ÿ¬©u\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x005\0\0\0«\0\0\0w\0\0\0\0\0\0.\0\0\0\0\0\0\0\0T\0\0\0\0\0\0\0\0n\0\0\0\0\0\0\0\0\0\0\0\0\0£\0\0\0\0\0\0\0\0ª\0\0\0²\0\0\0\0\0®\0\0\0Ä\0\0\0\0\0²\0\0\0\0\0\0\0\x005\0\0\0\0\0\0\0\0?\0\0\0«\0\0\f\0\0\0\0\0\0\x001%i\x007654321234567898\x003194837251290356\x00172678\x00000000\0%i\n\0basic_string::substr\0**\x000123456789ABCDEF\0\0%X\0%llu\0basic_string::erase\0%u\0*\0-1\x000\x001\0\0\0\0\0\0\0\0\0\0\0\0 \0\0\0\0\0\0$\0\0\0\0\0\0e\0Q P\0\0\0\0d\0\0\0<\0\0\0¬F\0\0\0\0\0\0d\0\0\0d\0\0@H\0\0\"\0\0lH\0\0ß\0\0\bI\0\0?\0\0 M\0\0=F\0\0ÜH\0\0\0\0\0\f\0\x07\0(\0\0\0\0\0L\0\0\0\n\0\0Ç\0\0n0\0n1\0\0%8\0\0e\0\0\0\0\0\0\0\0\0\0\0\0zPLR\0|\b\x07\0\0\f\0\0 \0\0\0$\0\0\0L¿ÿÿ¾\0\0\0ùÿÿA\bB\rF \0\0\0H\0\0\0æ¿ÿÿ½\0\0'ùÿÿA\bB\rF \0\0\0l\0\0\0Ýöÿÿn\0\0\0sùÿÿA\bB\rF \0\0\0\0\0\0[Âÿÿ§,\0\0{ùÿÿA\bB\rI\0\0\0\0\0\0\0zR\0|\b\f\0\0\0\0\0\0\0\0Æîÿÿ\0\0\0\0A\bB\rF \0\0\0ì\0\0\0¦ïÿÿ·\0\07ýÿÿA\bB\rI\0\0\0\0\0\0\0 `\0\0¤`\0\0¨`\0\0¬`\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0=V\0\0PW\0\0ZW\0\0dW\0\0nW\0\0xW\0\0W\0\0W\0\0W\0\0 W\0\0ªW\0\0´W\0\0¾W\0\0ÈW\0\0ÒW\0\0ÜW\0\0æW\0\0ðW\0\0úW\0\0X\0\0X\0\0X\0\0\"X\0\0,X\0\x006X\0\0\0\0\0\0\f\0\0\0\f\0\0\0\f\0\0\0\f\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0@__ZNSs4_Rep20_S_empty_rep_storageE\0Qr p`\f@__ZdaPv\0¼ÿÿÿÿÿÿÿÿ`\0@__Znam\0@___gxx_personality_v0\0¼ÿÿÿÿÿÿÿÿ@___stack_chk_guard\0@dyld_stub_binder\0ìÿÿÿÿÿÿÿÿ\0@__ZdaPv\0Qr\\@__Znam\0\0\0r,@__ZNKSs4findEPKcmm\0\0r0@__ZNKSs6substrEmm\0\0r4@__ZNSs12_M_leak_hardEv\0\0r8@__ZNSs4_Rep10_M_destroyERKSaIcE\0\0r<@__ZNSs5eraseEmm\0\0r@@__ZNSs6appendEPKcm\0\0rD@__ZNSs6appendERKSs\0\0rH@__ZNSs6assignERKSs\0\0rL@__ZNSs9_M_mutateEmmm\0\0rP@__ZNSs9push_backEc\0\0rT@__ZNSsC1EPKcRKSaIcE\0\0rX@__ZNSsC1ERKSs\0\0rd@__Unwind_Resume\0\0rh@___stack_chk_fail\0\0rl@_atoi\0\0rp@_atol\0\0rt@_exit\0\0rx@_memset_pattern16\0\0r|@_printf\0\0r@_puts\0\0r@_sprintf\0\0r@_strcmp\0\0\0\0_\0\fstart\0R\0_\0*main\0ÜNXArg\0áenviron\0÷\0mh_execute_header\0NZ\0W_progname\0ý\0\0\0\0\0\01\0g4key1Ssi\0×\08checkBlackList_oldii\04\03reverseStringSs\0Í\0Ö\0\0checkBlackListiiii\0ÈmakeSeedsArraySsi\0Ò\0Ý\0\0ä\0\0¢\0\0ß#\0\0\0\0c\0ëv\0ñ\0 ¡\0\0¤¡\0\0¨¡\0\0¬¡\0\0>\x07\x07¾½§Y·\r\0\0\0\0\0\0N\0\0\0\0\0\0=V\0\0N\0\0\0\0\0@X\0\0`\0\0\0\0\0lX\0\0r\0\0\0\0\0ÜX\0\0\0\0\0\0\0\bY\0\0\0\0\0\0\0 ]\0\0¨\0\0\0\b\0\0\0`\0\0¯\0\0\0\v\0\0`\0\0À\0\0\0\f\0\0 `\0\0È\0\0\0\f\0\0¤`\0\0Ð\0\0\0\0\0d\0\0å\0\0\0\0\0]\0\0ý\0\0\0\0\0\"\0\0\0\0\0\0V\0\0.\0\0\0\0ß!\0\0:\0\0\f\0\0¬`\0\0F\0\0\0\0\0\0Z\0\0\f\0\0¨`\0\0c\0\0\0\0O\0\0i\0\0\0\0\0\0o\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0¤\0\0\0\0\0\0\0\0»\0\0\0\0\0\0\0\0Û\0\0\0\0\0\0\0\0þ\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0!\0\0\0\0\0\0\0\x004\0\0\0\0\0\0\0\0G\0\0\0\0\0\0\0\0\\\0\0\0\0\0\0\0\0o\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0 \0\0\0\0\0\0\0\0¶\0\0\0\0\0\0\0\0È\0\0\0\0\0\0\0\0Û\0\0\0\0\0\0\0\0á\0\0\0\0\0\0\0\0ç\0\0\0\0\0\0\0\0í\0\0\0\0\0\0\0\0ÿ\0\0\0\0\0\0\0\0\x07\0\0\0\0\0\0\0\0\r\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0 \0\0\0!\0\0\0\"\0\0\0#\0\0\0$\0\0\0\0\0\0&\0\0\0(\0\0\0)\0\0\0*\0\0\0+\0\0\0,\0\0\0-\0\0\0.\0\0\0/\0\0\x000\0\0\0\0\0\0@\0\0\0%\0\0\0'\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0 \0\0\0!\0\0\0\"\0\0\0#\0\0\0$\0\0\0\0\0\0&\0\0\0(\0\0\0)\0\0\0*\0\0\0+\0\0\0,\0\0\0-\0\0\0.\0\0\0/\0\0\0 \0__ZL11getChecksumSsSs\0__ZStplIcSt11char_traitsIcESaIcEESbIT_T0_T1_ERKS6_S8_\0GCC_except_table2\0GCC_except_table3\0GCC_except_table4\0GCC_except_table5\0GCC_except_table8\0_pvars\0_.memset_pattern\0_NXArgc\0_NXArgv\0__Z13reverseStringSs\0__Z14checkBlackListiiii\0__Z14makeSeedsArraySsi\0__Z18checkBlackList_oldii\0__Z4key1Ssi\0___progname\0__mh_execute_header\0_environ\0_main\0start\0__Unwind_Resume\0__ZNKSs4findEPKcmm\0__ZNKSs6substrEmm\0__ZNSs12_M_leak_hardEv\0__ZNSs4_Rep10_M_destroyERKSaIcE\0__ZNSs4_Rep20_S_empty_rep_storageE\0__ZNSs5eraseEmm\0__ZNSs6appendEPKcm\0__ZNSs6appendERKSs\0__ZNSs6assignERKSs\0__ZNSs9_M_mutateEmmm\0__ZNSs9push_backEc\0__ZNSsC1EPKcRKSaIcE\0__ZNSsC1ERKSs\0__ZdaPv\0__Znam\0___gxx_personality_v0\0___stack_chk_fail\0___stack_chk_guard\0_atoi\0_atol\0_exit\0_memset_pattern16\0_printf\0_puts\0_sprintf\0_strcmp\0dyld_stub_binder\0\0\0\0\0\0\0\0\0\0úÞ\fÀ\0\0&5\0\0\0\0\0\0\0\0\0\0,\0\0\0\0\02\0\0\0\0\0æ\0\0\0\0\0XúÞ\f\0\0\0\0\0\0\0\0\0\0\0z\0\0\x004\0\0\0\0\0\0\x07\0\0j\0\f\0\0\0\0\0\0\0\0\0\0\0Gkey_oy_i386-signed\0YL6UJ9V949\0~þN®¯ZX«Í¢ÜEdOEÎ\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0ÞTJóãì±#ÞmG²SËíü]Û±¾ý*n®ëØ¨ôDÕ«gNJû^±¶n51Å4:özä³Ã©\r6rÀE·ñé\0¢ÎRéc;(¡ßø\t2vRv²CôDÔâ§ ðpL3_hÖèXÀpyzáa(½RÈË\rÎ£ZWéu5k.úÞ\f\0\0\0´\0\0\0\0\0\0\0\0\0úÞ\f\0\0\0\0 \0\0\0\0\0\0\0\0\0\0\0\0key_oy_i386-signed\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\n*H÷cd\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\n*H÷cd\r\0\0\0\0\0\0\0\0\0\v\0\0\0\0\0\0\0\nsubject.OU\0\0\0\0\0\0\0\0\nYL6UJ9V949\0\0úÞ\f\0\0r\0\0\0\0\0\0\0\0\0\0\0\x004\0\0\0\0\0\0\x07\0\0j \0\f\0\0\0\0\0\0\0\0\0\0\0Gkey_oy_i386-signed\0YL6UJ9V949\0Ú^RüÂ³Ê\bJðc0ôf56c\0]ó\vÖ¸úÊrS\vÁ\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0K!gÅ!?TH\0È\bßÖÔéÏ+\"\r·\"I/ÓLj;\\Û]}Å)[\"Ååö°%)hÞv|?DO½þ¬QPa°4-³T(BEú|C. f¢ädÃ4nTse¦@¯$Ù[XGë¢íe<»>#©#áÝ]¡³ZÔEÝá~dùSx»ºT!ÿh³°I*8zohmìÚÎ£Ûk#tNÇòV3St<U®²¹W#êj`c»6ÚL¸¡D³»»\b6¼õçÕ½ë úÞ\v\0\0\"Ý0\t*H÷\r\x07 010\r\t`He\x000\t*H÷\r\x07\0\0 C00ì \bz©¨Â!\f0\r\t*H÷\r\v\x000b1\v0\tUUS10U\n\nApple Inc.1&0$U\vApple Certification Authority10U\rApple Root CA0\r120201221215Z\r270201221215Z0y1-0+U\f$Developer ID Certification Authority1&0$U\v\fApple Certification Authority10U\n\f\nApple Inc.1\v0\tUUS0\"0\r\t*H÷\r\0\x000\n\0vO[Aî¥#+£_×s?À5°\n?$§?ëO¯´ÐÈ>åm³èG¿×\t\bäÿV)ç¹5£\nÍ´Àáâ`ôÊì)xEii`k_ü#æ:Â\"³1Oºò¶4YBî°©¶³x.3E\rEo»Z[:çØ\b×\v2mû6äl«Äp&ªDÑñ¸Æ{H÷\vXº#Å9~Ê]Ã2_àR@ê¾¬\bd[ÉåÊjDl>Ä°&ì{¯^ j=G©X1? v(m°ÂNi&ËÖÐÉNñVtÐÙ\bKfx¢«¬§âÒLYÉ\0£¦0£0UWí¢ÏÜ|¡àü¾-,òãT0Uÿ0ÿ0U#0+ÐiGv\tþôk.@¦÷GM\b^0.U'0%0# ! http://crl.apple.com/root.crl0Uÿ0\n*H÷cd\x000\r\t*H÷\r\v\0\0B9tk¡ÜÆ¤7*³\nD¼,¼Y¸¬aû\x072¹Ô¿;ÁP9jDt¢ì[påªÝKl#q-_ÑÅ¾îpeã-¨Íý\fxXI\f(3î\0z´v¬¶µ»Oß¨ÈJ\vVg/Â>¶³Ä:ðwmtÄ.#Qî¥o`ô¥H§Â»ZâFE~äõ'· \"rorÚÆPuÅ=%]£\0é6H9³;ê.`ôxÎô\nS>¢úOØ®2¼VMéxà¬BºzF¢ÎèÑXö®VÄ,*E¯\vÙK©4¬ÇaUDÉ's\x07îåNõp0»0£ 0\r\t*H÷\r\x000b1\v0\tUUS10U\n\nApple Inc.1&0$U\vApple Certification Authority10U\rApple Root CA0\r060425214036Z\r350209214036Z0b1\v0\tUUS10U\n\nApple Inc.1&0$U\vApple Certification Authority10U\rApple Root CA0\"0\r\t*H÷\r\0\x000\n\0ä©\tÛGPëí^y-ë6¢WLUìÞùKlõ\x07«\"0è>øP\tÓA¨ùÑÊf$kÐ£»ä*Ãz\f¤G[Ô73ËÄMÎiÑÉrõ]Õ_ò%ºUM]\rñd5#KY³÷öÏPºÁXPg\b´ ÷Ë¬, op¶?0·CÏ=ó+I(ÈþÎµ¹Ù^ÖË=µ:­ô\0\v±!.tÕ<\rÛb«£qGSUÁ¯/A³øûãpÍæ£LE~LkPAÄtb\vA3±0XìZ2h³Þesÿg^e¼IØv3e¡wÉ-\0£z0v0Uÿ0Uÿ0ÿ0U+ÐiGv\tþôk.@¦÷GM\b^0U#0+ÐiGv\tþôk.@¦÷GM\b^0U \b00\0\t*H÷cd0ò0*\b+\x07https://www.apple.com/appleca/0Ã\b+\x070¶³Reliance on this certificate by any party assumes acceptance of the then applicable standard terms and conditions of use, certificate policy and certification practice statements.0\r\t*H÷\r\0\0\\6L-x·íÜówòvÒw0OÁ=G7ò©@,Ô±Ø¾ôsîÒdËyO4Ø¢>ùxÿkÈ\x07ì}9S Ó8Ä±¿O\nkÿ+üY§\t|@VtÓ·#;G£Õo$âëÑ·pßEá'Êñmxíçµ¨Ü~\"5Ê%ÕÙÖkÔ¢$#÷¡¬s`Æ[\t/²øDHð`8õ=&g 3j÷\rÏÞë£/ùSj[dÀc3w÷:\x07,VëÚ!ÚºsOµÙ6ÁUÙ§¹2BûØÕq~¡R·½B$*Ç¶M^cÈKPªÕÚäüÐ\t\x077°uu!0x0` \bHªzMõ&$0\r\t*H÷\r\v\x000y1-0+U\f$Developer ID Certification Authority1&0$U\v\fApple Certification Authority10U\n\f\nApple Inc.1\v0\tUUS0\r140117202910Z\r190118202910Z010\n\t&ò,d\f\nYL6UJ9V9491?0=U\f6Developer ID Application: AESCRIPTS, INC. (YL6UJ9V949)10U\v\f\nYL6UJ9V94910U\n\fAESCRIPTS, INC.1\v0\tUUS0\"0\r\t*H÷\r\0\x000\n\0¯n¯vøÀMc²Ó(:ÍðîéÏ\rí`olsÑ\vw¦OY¿èÂÝî¯þ.ý½03¡Â²êã­/{%©\vcêËÌZDp»à^6Ý¶öÚ;¢M4.U\x07\"kÂÚªolÓq\v³|£ª¯an/©\r-HYõuÑWÜmYØN\"i<ò¸T:\t[µÔÙ´ºËpa\"iVv´¢îÎ5E8A8u²zl}´ÍÌ¸#<zßTmÅ\x07\tF»¬ÇëªKÑIy\\\reÕ,_aÖ¶ =Îët×WNì+;Ò;£}Å³nÈ&Âdµ\0>kØ ßðR±#ð]¦e\0£á0Ý0>\b+\x072000.\b+\x070\"http://ocsp.apple.com/ocsp-devid010Uã)øñ²$mg«h\x004\b¶ßl50\fUÿ0\x000U#0Wí¢ÏÜ|¡àü¾-,òãT0U 00þ\t*H÷cd0ð0(\b+\x07http://www.apple.com/appleca0Ã\b+\x070¶\f³Reliance on this certificate by any party assumes acceptance of the then applicable standard terms and conditions of use, certificate policy and certification practice statements.0Uÿ\x070U%ÿ\f0\n\b+\x070\n*H÷cd\rÿ\x000\r\t*H÷\r\v\0\0~ÚÐ']ëüHHø­(Í±ü²#Ävî;gJ\têr½;Jô'1ã¡Jº'³e¡í¶Ù1^ú­?{Aj1X^WEHW»hº6ß5;EÔÙîÒÅ;©Á'-Îïe\0§\0ppG=ïZ6§¨ßm`æM 8¶!ô840¬à\rÖQÁ}ºeÎÓT°ò©ÁZ6£)ÄJôká¿µ+8YyyóÒ¢<û:ç~àùR¨ÕiÐ|FoõÞzÃ¥ãÞ*\v~§yêJ¦­ãp'(ó¬úöT1P0L00y1-0+U\f$Developer ID Certification Authority1&0$U\v\fApple Certification Authority10U\n\f\nApple Inc.1\v0\tUUS\bHªzMõ&$0\r\t`He\0 È0\t*H÷\r\t1\v\t*H÷\r\x070\t*H÷\r\t1\r170417190329Z0/\t*H÷\r\t1\" ª{ZY &ÓbºåVªæçI¥ÍV}öÝ)=!©BÓ0[\t*H÷cd\t1LH<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE plist PUBLIC \"-//Apple//DTD PLIST 1.0//EN\" \"http://www.apple.com/DTDs/PropertyList-1.0.dtd\">\n<plist version=\"1.0\">\n<dict>\n\t<key>cdhashes</key>\n\t<array>\n\t\t<data>\n\t\tQf+H/Obkwi7wv8QDd751l5+EAWo=\n\t\t</data>\n\t\t<data>\n\t\tGqFog/HLmGwAT7Dc9m0kOqu7cNw=\n\t\t</data>\n\t</array>\n</dict>\n</plist>\n0\r\t*H÷\r\0\0Cý\nÉ@\tXôòÎÍyØ$87­W¸\\´\\`,£%9¡ûô©ÂÎSkë{ZOïyÈ3v}/¿ \r¼ùíØë0\bk¿-ø@aSÞQ>ütEÌ,<ÅÇF5cÙ´íhûX\b£\nlñ_q\v¨)¶ßM.{¾BPy×f²º·UYnlëcÍÔ]iZdO9$aËïn±Y\bvLtEtÔ_áÏAMÕ<%ÌÑ\ty+ÐÉ§®iðì:³×·¾§8ø¤J)ÂæÐº|aYJ\vÙä±,_ÇtU`^\0\tM-Òö¬ÊÙ^6ü¼\x07Ç­¹¡Ï0Ë\v*H÷\r\t1º0¶\t*H÷\r\x07 §0£1\v0\t+\x000z\v*H÷\r\t ki0g*010\r\t`He\0 áÃeZh5ô>­8+g-ÆðÂdH´q°\fvç3 \bO°ñÀÏ@20170417190329Z0\bJ×Ú£'± \rÐ00ê \bÐÎ@¢Ô0\r\t*H÷\r\v\x000|100.U\f'Apple Timestamp Certification Authority1&0$U\v\fApple Certification Authority10U\n\f\nApple Inc.1\v0\tUUS0\r170315204641Z\r170426204641Z0A10U\fTimestamp Signer MA210U\n\f\nApple Inc.1\v0\tUUS0\"0\r\t*H÷\r\0\x000\n\0Û¤-E:ogô ókb¡±«C/Àøù¤ðlÿ2\t`å8´Ò£\t;\fVjw\"W)o0ÔYà)¡¥è ýÞÒà6I?@ ®z\"%yFç\t/Ý Kv@Á¶ð;vµ¨fL\nU0{gq÷Ü-ÍT«Åv^¹³ed\r£}ªzöáZ æÛ¸X°²îºÓ¤Å·â½X¼õ\v@-~«Aw\f2Å.>§þçÙ¯¼Ð=nm óÝ)¸'®yÈ´Pa,ìzôUìü\x07[úÄ8O¨5/ûyÌêû[sª`iD¶xïSó0ÉU¦Ù\0£Á0½0U¸G\0|y³kÄ NOà½r·ø0\fUÿ0\x000U#04Í%NÍÞ78¡X&øùâ)Þò0U 00þ\t*H÷cd0ð0(\b+\x07http://www.apple.com/appleca0Ã\b+\x070¶\f³Reliance on this certificate by any party assumes acceptance of the then applicable standard terms and conditions of use, certificate policy and certification practice statements.03U,0*0( & $\"http://crl.apple.com/timestamp.crl0Uÿ\x070U%ÿ\f0\n\b+\x07\b0\r\t*H÷\r\v\0\0R3ýÕýäÐ[\v°ÕYPõÒå}Ò¢ËÑqûñ(4üÃ=¦}Áëz÷°.\\\"ÅÃ^õ,Pkð*´áÖFkðÔ_t¦Æ~mvC4ÀéÆz,L¡_¨D­U.î?ÊM${MÙéèÍ*¢]@D½å\t)k2<È39¾IØ0w\r:ði\f2u×uÄäÕ`)sw;¢Óþ¬Â\\@¹¬Xxv^¥~b!4­RbãÍ'¶`N]È¤x\tïAÖé¢°¸íé9¦Ã[Iæ9Bà7 ñ¶7ù­ÎRÐÊèDÊQ0\x070ï \b}LWcóð·0\r\t*H÷\r\v\x000b1\v0\tUUS10U\n\nApple Inc.1&0$U\vApple Certification Authority10U\rApple Root CA0\r120405120244Z\r270405120244Z0|100.U\f'Apple Timestamp Certification Authority1&0$U\v\fApple Certification Authority10U\n\f\nApple Inc.1\v0\tUUS0\"0\r\t*H÷\r\0\x000\n\0Ów¡÷g\\Ò.¸#g>üBâ\t}\n¸üs@/½ÄØPÅ'Èþ¸4p \r<½\bNo97Úeõ´côÈIm] Ó9ý\tºô:óÎJidFàÚ5ÄeÆ£a´.õð\rÜ=öÏo%L\tÂÈxÁ\"¸º!ÊîÝ{[ÿ£éÑ£~þÿæIä;\nù¦r3»,ÄJZr\n9PtÝ(ny_~§¨ÏV³Vl¥éðÄ®ùê Ç(tâ\bM&By^ö`ãEX¡ûQI^JM¹ïÔsµÚ{ãRË£]¬klâìt-D>àa>\x07E~4u&@uÈ0íK¿w\0£¦0£0U4Í%NÍÞ78¡X&øùâ)Þò0Uÿ0ÿ0U#0+ÐiGv\tþôk.@¦÷GM\b^0.U'0%0# ! http://crl.apple.com/root.crl0Uÿ0\n*H÷cd\t\x000\r\t*H÷\r\v\0\x006ÒõÞqS\x07É#Øxe¼óÕ[é¸#Ç¢Ï´©(éøÝp!9óÛ3ÃrCÖ=BQº­ÒuÃ]õËÜjj:ÝëT}íkóÖ>ÈmzT_òCÐv\\\0\fNÊ<Íúæ÷Â>r·¸Þè4ª ®\\g¨\f¬e³ã0B4é®ÓÓ§ÝBsu|QC`Ü®'ÒkgÉ3EoÉ MáiÿìKEóNÊ\"W×\"\x07å\"´éÓEËn?å¸üFÕ\\É°«:m7(£¨FeoU¡hêR>ÉôÔæú?¤ä&µ:kÖÃåù2È2¢Há£ä³Ë;KßàÌ²¯Ñ0»0£ 0\r\t*H÷\r\x000b1\v0\tUUS10U\n\nApple Inc.1&0$U\vApple Certification Authority10U\rApple Root CA0\r060425214036Z\r350209214036Z0b1\v0\tUUS10U\n\nApple Inc.1&0$U\vApple Certification Authority10U\rApple Root CA0\"0\r\t*H÷\r\0\x000\n\0ä©\tÛGPëí^y-ë6¢WLUìÞùKlõ\x07«\"0è>øP\tÓA¨ùÑÊf$kÐ£»ä*Ãz\f¤G[Ô73ËÄMÎiÑÉrõ]Õ_ò%ºUM]\rñd5#KY³÷öÏPºÁXPg\b´ ÷Ë¬, op¶?0·CÏ=ó+I(ÈþÎµ¹Ù^ÖË=µ:­ô\0\v±!.tÕ<\rÛb«£qGSUÁ¯/A³øûãpÍæ£LE~LkPAÄtb\vA3±0XìZ2h³Þesÿg^e¼IØv3e¡wÉ-\0£z0v0Uÿ0Uÿ0ÿ0U+ÐiGv\tþôk.@¦÷GM\b^0U#0+ÐiGv\tþôk.@¦÷GM\b^0U \b00\0\t*H÷cd0ò0*\b+\x07https://www.apple.com/appleca/0Ã\b+\x070¶³Reliance on this certificate by any party assumes acceptance of the then applicable standard terms and conditions of use, certificate policy and certification practice statements.0\r\t*H÷\r\0\0\\6L-x·íÜówòvÒw0OÁ=G7ò©@,Ô±Ø¾ôsîÒdËyO4Ø¢>ùxÿkÈ\x07ì}9S Ó8Ä±¿O\nkÿ+üY§\t|@VtÓ·#;G£Õo$âëÑ·pßEá'Êñmxíçµ¨Ü~\"5Ê%ÕÙÖkÔ¢$#÷¡¬s`Æ[\t/²øDHð`8õ=&g 3j÷\rÏÞë£/ùSj[dÀc3w÷:\x07,VëÚ!ÚºsOµÙ6ÁUÙ§¹2BûØÕq~¡R·½B$*Ç¶M^cÈKPªÕÚäüÐ\t\x077°uu!1?0;00|100.U\f'Apple Timestamp Certification Authority1&0$U\v\fApple Certification Authority10U\n\f\nApple Inc.1\v0\tUUS\bÐÎ@¢Ô0\t+\0 0\t*H÷\r\t1\r\v*H÷\r\t0\t*H÷\r\t1\r170417190329Z0#\t*H÷\r\t1PèC-÷úâ«c¾ç)ÒóåÑ[0+\v*H÷\r\t\f1000¸ÄzZY\\ãê÷8¹{\x07ëpôqm0\r\t*H÷\r\0\0Oïv\fí0¢Ò2ýdîJ¡û9udïYUG(ú7ÖW¼@að¼ñ³H×¾§¤H%làBø½`<9R½FZâ¶bS²ªäb2ïï=ýÙ'Öª©'oMïdâ\bKNÁvñ\x07¨®H<uçÜReìi/5\bÔxrêN×¯7¸c\x07;È/1¥ØÎIÏñ(í¡L¹4ZéÂ;.ÛM\ba´è:díÿR\t8îßb8¹£\rZÆ¨çõßþã\\ß¢±fIp}¹6_\v?Z]Õ¦Í4s¤uðælÞ[=;ØSúÞö¿>%^·'Üeñ<¬.7ÕÕJµÃE\tÕ¥\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0";
        } else {
            var winBase64KeyStr = "MZ\0\0\0\0\0\0\0ÿÿ\0\0¸\0\0\0\0\0\0\0@\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0à\0\0\0º\0´\tÍ!¸LÍ!This program cannot be run in DOS mode.\r\r\n$\0\0\0\0\0\0\0úgF¾ÿ\t¾ÿ\t¾ÿ\t·»ÿ\t¾ÿ\bÿ\tÑ¦®ÿ\t·¿ÿ\tÑ¢¿ÿ\tÑ¿ÿ\tRich¾ÿ\t\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0PE\0\0L\0ÖõX\0\0\0\0\0\0\0\0à\0\v\n\0\0.\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0@\0\0\0\0@\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0p\0\0\0\0\0Qr\0\0\0@\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0<E\0\0<\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0B\0\0H \0\0\0`\0\0à\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0@\0\x004\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0.text\0\0\0Ü-\0\0\0\0\0\0.\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0 \0\0`.rdata\0\0^\0\0\0@\0\0\0\b\0\0\x002\0\0\0\0\0\0\0\0\0\0\0\0\0\0@\0\0@.data\0\0\09\0\0\0P\0\0\0\0\0\0:\0\0\0\0\0\0\0\0\0\0\0\0\0\0@\0\0À.reloc\0\0\0\0\0`\0\0\0\0\0\0<\0\0\0\0\0\0\0\0\0\0\0\0\0\0@\0\0B\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0¸XA@\0Ã¸`A@\0Ã¸hA@\0Ã¸tA@\0ÃVñè¥\f\0\0öD$\bt\x07VèÄ\r\0\0YÆ^Â\0¸A@\0Ã¸A@\0ÃöD$VñÇ\bB@\0t\x07Vè\r\0\0YÆ^Â\0¸A@\0Ã¸¤A@\0Ã¸°A@\0Ãh¸D@\0èê\r\0\0¡P@\0YÀt\x07PèÚ\r\0\0YhðD@\0èÏ\r\0\0YÃÁ\rP@\0\bÃ¡P@\0VñD$\b\bPÿR\fÆ^Â\0UìQ}\b\0¡P@\0VñWuEÿPè«\0\0èÿÿÿÿu\bÿ@@\0øÿu\x07¡P@\0ëjèÞ\f\0\0YÈÉt\fÿu\bÇèæ\v\0\0ë3À_Æ^ÉÂ\0\tÉtÿ`ÃD$Vñ\bW>PÿR\f\x07ÏÿP_Æ^Â\0\tÿ VñÉtÿP¡P@\0^ÃUìQVQÈÿRðÎÿ9E\brEÿPèj\0\0èÜþÿÿF\bE\b^ÉÂ\0D$QèI\0\0Â\0ÿt$QèÍ\0\0Â\0Uìì\fVñÿP,ÀtE\bS]ôÇEô¬C@\0EøèU\0\0\0[ëMÿ\r\0P@\0I;ÁrhðA@\0EÿPè¹\0\0èfþÿÿjèÍ\v\0\0YÀtH\bM\bÆ@\0Ç\0$D@\0H\fë3ÀÆ^ÉÂ\0UììWVÿPøÿEôËÿ\r\0P@\0+ÈEø9MôrhðA@\0EÿPèH\0\0èõýÿÿEôEøÿP9Eøw\vÿP0Àt;j}ðè<\v\0\0YÈÉt\fEøè0\n\0\0øë3ÿMðÿw\bEôI\bèô\f\0\0YMðÿP>G\bEôMìEìQËÿP\bEøGÆ_ÉÃUìì\fS]\b\vVWøÿP,Àtuôè\n\0\0u\bØèÿÿÿë]\vÿðÿ\r\0P@\0+È;ñrhðA@\0E\vPèw\0\0è$ýÿÿjè\n\0\0ðYötWÿP\f\vÆF\0ÇèC@\0N\bF\fë3ö3Ã_^[ÉÂ\0Uìì\fSVW}\bÿP,Àt}\fuôèn\t\0\0u\bØèþÿÿëxj\fè&\n\0\0YÀtÿu\fðè¡\b\0\0ðë3öÿØÎÿ\r\0P@\0+È;ÙrjÎÿP4hðA@\0E\vPèÀ\r\0\0èmüÿÿjèÔ\t\0\0YÀtÆ@\0Ç\0èC@\0H\bp\fë3À\x07Ç_^[ÉÂ\b\0UìQQSVWùÿð9u\bvEÿPè©\r\0\0èüÿÿÞ+]\b;]\fv]\f+óu\fuÿP,Àt9WÿP`\0WÿPðÿP,Àt(F\bE\bM\f+M\bè/\v\0\0E\fFë\\ÿP¡P@\0\x07ëPjè\t\0\0YÈÉt\nE\fè\b\0\0ë3À\x07@\bN\bEøPE\bèÑ\n\0\0U\bE\f\f]øN\bÚ+ÂSè¸\n\0\0YYÎÿPÇ_^[ÉÂ\b\0QÈÿR(ÃUìQQM\bSVWøÿðuüÿØ;Þ\0\0\0E\fË+Î;Á\0\0\0ö\0\0\0WÿP}üp\bE\fM\bQ\buø<u+Ø¾SPÇè\n\0\0YYÀtP+ÆëQ5P@\0;uür3öEø+Ç+EüDÀt)P¾P>èP\n\0\0øYYÿtÿuü+þè\t\0\0YÀtFGëÀ5P@\0¡\0P@\0_^[ÉÂ\b\0Ç+Eø5P@\0ëìUìì\fSVWÿu\f}\buôÙèÿ\0\0PÃèÿÿÿ_^[ÉÂ\b\0Uì¡P@\0SVW}\bñ\x07VÿPØÿð9u\fvE\vPè¤\v\0\0èúÿÿ+u\f9usuöu\x07¡P@\0ë jèg\x07\0\0YÈÉtC\bE\fPÆèk\0\0ë3À\x07Ç_^[]Â\f\0ÁH\fVp\bWÿøÎÿÇ_^ÃI\bÿ@ÃAÃ3À@Ã3ÀÃÿ A\fÃVÿt$\bñN\bÿP\bN\f^ÿ`\bVt$\bWùO\bVÿP\bO\f\bÿ_^Â\0VW|$\f\x07ñNV\bèº\b\0\0F\x07_^Â\0D$I\nÿ\0Â\0Â\0UìQVWjùè\0\0ðYöt\x07ÏÿÎè\0\0ðë3öF\bMüEü\x07QÏÿP\b}\bÿP7_Æ^ÉÂ\0Vñ~\f\0t.jèE\0\0YÈÉtÿv\bFèL\0\0ðë3öW|$\fÿP7_Æ^Â\0UìQVWj\fùè\t\0\0ðYöt\x07Ïÿèk\0\0ðë3öF\bMüEü\x07QÏÿP\b}\bÿP7_Æ^ÉÂ\0ÁÂ\0VWù\f\0j\fu6è¶\0\0YÀt`\0`\b\0Ç\0B@\0ðë3öGFg\0O\bF\bN\bG\bëè\0\0ðYötÿw\bGè0\0\0ðë3ö|$\fÿP7_Æ^Â\0VWjñèI\0\0Y3É;ÁtHH\bÇ\0¼B@\0H\føë3ÿFGV\bNG\bW\bF\bO\fjÎÿP4Ç_^ÃÁÃVWjñèù\0\0YÈÉtÿv\bFè\0\0\0øë3ÿöt\tjÎÿP4Ç_^ÃUìQSVWù\x07ÿjØè¹\0\0ðYötÃè\0\0ÇøB@\0^\f^ë3öF\bMüEü\x07QÏÿP\b}\bÿP7_^[ÉÂ\0VWjùèl\0\0Y3É;ÁtHH\bÇ\0øB@\0H\fðë3öGFF\fOO\bF\bN\bG\b|$\fÿP7_^Â\0SVWù3Ûj9_\fu9è\0\0Y;ÃtXX\bÇ\0øB@\0X\fðë3öGFF\fO\b_F\bN\bG\bë&èÚ\0\0ðY;ót_ÿw\bÃè\0\0ÇøB@\0^\fë3ö|$ÿP7_^[Â\0SVWjÙè\0\0ðYöt{ÿs\bÇèH\0\0ÇøB@\0~\fë3ö|$ÿP7_^[Â\0UìQSVWj\fùèV\0\0ðYöt\x07ÏÿØCè³\0\0Ç4C@\0^ë3öF\bMüEüØ\x07QÏÿP\bEü}\bÆ\0\0ÿP7_^Ã[ÉÂ\0A\bÂ\0A9A\fv\rQ\bÆ\0A\bÂ\0é~ÿÿÿVñ~\0tÆF\0^ÃN\bÿPN\fÿPjÎÿP4^ÃVñ~\0tÆF\0^ÃN\bÿPjÎÿP4^ÃÉt\x07jÿP4ÃA\fPÿQ\fÀu\x07jÿP4ÃÃUìQWù\0tGVjèa\0\0ðYöt\x07ÏÿÎèP\0\0ðë3öF\bÿF\fMüEü\x07QÏÿP\b}\bÿP7Æ^ëÆGÇ_ÉÂ\0VWj\fùè\f\0\0ðYöt\rÿw\bGè¼\0\0\0ë3À_^Â\0VWjñèæ\0\0øYÿtÎÿÿv\bÏèè\0\0\0ë3À_^Â\0Áÿ@\fÂ\0Vj\bñè´\0\0YÀtNÇ\0¬C@\0Hë3À^Â\x002ÀÃ°Ã3À8AÀÃPFÇB@\0è}\0\0F\bYÆÃÿt$f\0f\b\0ÇB@\0ÿ@@\0PFèU\0\0L$\bF\bPFè#\0\0YYÆÂ\0PFÇB@\0è/\0\0L$\bF\bPFèý\0\0YYÆÂ\0F\bÇB@\0Àt\x07Pè\0\0YÇ\bB@\0ÃVñèiÿÿÿf\f\0Ç¼B@\0Æ^ÃVÿt$\bñèÿÿÿf\f\0Ç¼B@\0Æ^Â\0WÇDB@\0ÿ@@\0F~\bÆÃÇDB@\0ÿFWÿP@\bF\bÆÃVjè\0\0\0ðYöt.D$\bWPÿR\føD$\bPÿR\f~\fÆF\0ÇèC@\0F\b_ë3öD$\b0^Ã=P@\0\0Wùu>Vj\fè:\0\0\0ðYöt 3À@èþÿÿF\bf\0ÇpC@\0Æ\0\05P@\0ë\x07%P@\0\0\r\0P@\0ÿ^Ç_Ãÿt$j\0ÿ@@\0Pÿ\f@@\0Ãÿt$j\0ÿ@@\0Pÿ@@\0Ãÿt$\bÿt$\bÿ@@\0ÃT$ëB¾è?\0\0Àuó¾\nVBWñù-tù+u¾\nB3ÀyÐÿ\tw\rkÀ\nD\bÐ¾\nBëë_þ-^u÷ØÃé±ÿÿÿUìì\0\0\0VWE\fPÿu\b\0üÿÿPÿ,@@\0ðV¸`P@\0½\0üÿÿèã\0\0Y_Æ^ÉÃSUVWè\0\0@@\0h\0\0\0j\bèÇ,Q@\0\0\0\0ÿÓPÿ\f@@\05\b@@\0jö£(Q@\0ÿÖ3ÿGjõ£HP@\0=LP@\0ÿÖjô£hP@\0=lP@\0ÿÖ£P@\0¸4@@\0¾@@@\0=P@\0ø;Æs\x07ÀtÿÐÇ;þrñj\0h P@\0UèW\0\0Ä\fðèõ\0\0¡4Q@\0Àt\fPj\0ÿÓPÿ@@\0Vÿ\0@@\0_^][3É9L$u3ÀÃSV9L$\fvòÇ+÷:u\rA@;L$\frñ3À^[Ã¶9¶\f+ÁëñÉt!¶D$\biÀÑSW|$\fÁéó«Êáóª_[D$ÃVðötD$\b+È@Nu÷D$\b^ÃVWø;Âv4\n;ÆsNT\bÿÉtJNIu÷ëÉt\rð+òBIu÷Ç_^Ã|$\b\0t¶\b@;L$t\tÿL$\buð3ÀÃHÃÿ8P@\0%4P@\0\0=P@\0\0u.h\0\0\0Ç,P@\0ÿ\0\0èýÿÿY£P@\0Àu!,P@\0ÇP@\0`D@\0S»D@\0è\0\0\x003Ûè\b\0\0\0D$\b[Â\0Ût|U-@@\0VWSÿÕ5,P@\0ø¡4P@\0+ð;þ}\rP@\0SÈQÿ @@\0=4P@\0ëBö~>=P@\0øWÆËèàþÿÿYSÿÕ;ðvÎ+ÈÇj\0Pè þÿÿYY¡,P@\0\rP@\0Æ\0£4P@\0_^]Ã=(P@\0\0tFSV»¨D@\0èjÿÿÿ¡(P@\0è^ÿÿÿ¡(P@\0pë»°D@\0èJÿÿÿèCÿÿÿvöuè»´D@\0è2ÿÿÿ^[ÃSÿt$\bèÇþÿÿ¡8P@\0»ôD@\0£P@\0èÿÿÿ3Ûè\nÿÿÿD$\b[Â\0Sÿt$\bèÉÿÿÿ¡8P@\0»E@\0£ P@\0èäþÿÿ»ÌA@\0èÚþÿÿèVÿÿÿD$\b[Â\0Sÿt$\bèÿÿÿ¡8P@\0»E@\0£0P@\0è¯þÿÿ\\$\fè¦þÿÿ|$\f\0[tèÿÿÿD$Â\b\0Sÿt$\bèYÿÿÿ¡8P@\0»(E@\0£$P@\0ètþÿÿ»¸A@\0èjþÿÿèæþÿÿD$\b[Â\0\r0Q@\0Ét!¡(Q@\0VW<ð;ÇsÀtÿÐÆ;÷rñ_^Ãjÿÿ\0@@\0Ìø\t|ø\r~\bø t3ÀÃ3À@ÃUììS3Û]ü]ø9]\bu\x073Àé«\0\0\0ö@\fH\bVMô\0\0\x003É3À9]\b\0\0\05$@@\0P|ÿ\nUðu>;Ãv\x07|\x07ÿ\rt3;ÁvSUøR+ÁPÏQÿuôÿÖEøEüSEøPjh8E@\0ÿuôÿÖMðÿEüÑÂ;E\br®;Áv(SUøR+ÁPÏQÿuôÿÖEøEüëSEüPÿu\bWQÿ$@@\0Eü3Ò÷u\b^[ÉÃSV3ÛW P@\0ÿ@@\0øWÿ@@\0@PSÿ@@\0Pÿ\f@@\0ð54Q@\0;óu\x073Àé½\0\0\0WVÿ @@\0²\"8uF5 P@\08tà8tF8u÷8u!ëÑ5 P@\08t¾èªþÿÿÀuF8uï8tF3ÉA8tj¾èþÿÿÀtF8uï:ÃtS:ÂuF4 P@\0A P@\08t;8t+F8u÷ë$4 P@\0A P@\08t¾è>þÿÿÀuF8uï8t\bFù |Á_^[ÃUìQQEEüÿuüÿu\fÿu\bÿ,@@\0Eøeü\0EøÉÃUìQQÆEÿ\0eø\0ë\x07Eø@Eø}ø\0}*EøÁàM\b;H@@\0uEøÁàM\f;L@@\0uÆEÿëëÉEÿÉÃUìQQÆEÿ\0eø\0ë\x07Eø@Eø}ø\0}LEøÁàM\b;H@@\0u9EøÁàM\f;L@@\0u(EøÁàM;P@@\0uEøÁàM;T@@\0uÆEÿëë§EÿÉÃUìQQVE\fPMüèrëÿÿM\fèìÿÿEøë\x07EøHEø}ø\0~)EøHPM\fèìÿÿðM\fèìëÿÿ+EøPMüèýëÿÿ\bëÊEüPM\bè#ëÿÿMüèëÿÿM\fèëÿÿE\b^ÉÃUìì,M\bèªëÿÿEè3ÉEèjZ÷âÁ÷Ù\vÈ3ÀÁÀ÷Ø\vÁPèøÿÿYEä}ä\0t)EäMè\bh@\0ÿuèjEäÀPèC\0\0EäÀEÔëeÔ\0EÔEøMüÿM\bè;ëÿÿø\ns9E\bPh@@\0MàèêÿÿPEÜPè÷ÿÿÄ\fPM\bèíêÿÿMÜèÙêÿÿMàèÑêÿÿëºeô\0ë\x07Eô@EôM\bèèêÿÿ9Eôs]Eô3Ò÷u\fÒuEü@EüEüMø\fèÈêÿÿÿuôM\bèÔêÿÿ\0EìÆEí\0EìPMðèêÿÿEðPEüMø\fèâêÿÿMðèZêÿÿëEøEØM\bèJêÿÿEØÉÃUììP\0\0VM\bè*îÿÿPMðèËéÿÿXÿÿÿèéÿÿMøèéÿÿMÜèéÿÿMÄèéÿÿEðPEÄPEÜPEøPXÿÿÿPèÒ\0\0Ä¶ÀÀuEÆKÿÿÿ\0MÄèÒéÿÿMÜèÊéÿÿMøèÂéÿÿXÿÿÿè·éÿÿMðè¯éÿÿM\bè§éÿÿKÿÿÿéç\t\0\0MÄèÂéÿÿèPjEÀPMÄèîÿÿQÌEÀPèùèÿÿèd\0\0Y¶ÀÀuMÆCÿÿÿ\0MÀèZéÿÿMÄèRéÿÿMÜèJéÿÿMøèBéÿÿXÿÿÿè7éÿÿMðè/éÿÿM\bè'éÿÿCÿÿÿég\t\0\0jjhÿÿÿPMÄè\rîÿÿjj\fEÈPMÄèýíÿÿj\fj\0<ÿÿÿPMÄèêíÿÿPMÄèéèÿÿ<ÿÿÿèÒèÿÿQÌEÀPèIèÿÿQôEÜPEÄPEøPXÿÿÿP0ÿÿÿPèÎôÿÿÄ\fP,ÿÿÿPè¾ôÿÿÄ\fPVè´ôÿÿÄ\fè]\0\0YYPlÿÿÿPè³\t\0\0YY,ÿÿÿèfèÿÿ0ÿÿÿè[èÿÿjlÿÿÿè|èÿÿHHP(ÿÿÿPlÿÿÿè=íÿÿPlÿÿÿè9èÿÿ(ÿÿÿè\"èÿÿMÈèìÿÿPè\nõÿÿYðlÿÿÿèýëÿÿPèöôÿÿY;ðtkÆ'ÿÿÿ\0lÿÿÿèéçÿÿMÈèáçÿÿhÿÿÿèÖçÿÿMÀèÎçÿÿMÄèÆçÿÿMÜè¾çÿÿMøè¶çÿÿXÿÿÿè«çÿÿMðè£çÿÿM\bèçÿÿ'ÿÿÿéÛ\x07\0\0jj\0\\ÿÿÿPMÄèìÿÿ\\ÿÿÿèiëÿÿPè¬ôÿÿYE¼QÌEÀPèßæÿÿQôEÜPEøPXÿÿÿPÿÿÿPèhóÿÿÄ\fPVè^óÿÿÄ\fè\x07\0\0YY`ÿÿÿÿÿÿèçÿÿQÌEÀPèæÿÿQôEÄPEÜPEøPXÿÿÿP\fÿÿÿPèóÿÿÄ\fP\bÿÿÿPèóÿÿÄ\fPVèûòÿÿÄ\fè¤\r\0\0YYEÔ\bÿÿÿè¹æÿÿ\fÿÿÿè®æÿÿj\0MÜèïæÿÿ¾\0Pj\0Møèáæÿÿ¾\0Pÿu¼ÿuÔèúÿÿÄ¶ÀÀtvÆ\x07ÿÿÿ\0\\ÿÿÿèkæÿÿlÿÿÿè`æÿÿMÈèXæÿÿhÿÿÿèMæÿÿMÀèEæÿÿMÄè=æÿÿMÜè5æÿÿMøè-æÿÿXÿÿÿè\"æÿÿMðèæÿÿM\bèæÿÿ\x07ÿÿÿéR\0\0j\0ÿu\f\0ÿÿÿPè6\x07\0\0YYÈè8æÿÿ\0EÌ\0ÿÿÿèÝåÿÿÆEÍ\0EÌPèóÿÿYPh@@\0EàPèáøÿÿÄ\fEàPMØèRåÿÿMØè éÿÿPèãòÿÿYdÿÿÿÿµdÿÿÿÿu¼è[\0\0YYE¬MÄè¯åÿÿHHPjüþÿÿPMÄèqêÿÿPMÄèpåÿÿüþÿÿèYåÿÿQÌEÄPèÐäÿÿôþÿÿPè@ùÿÿYYPMÄèBåÿÿôþÿÿè+åÿÿpÿÿÿèäÿÿMÐèäÿÿpÿÿÿPEÐPÿu¬jEÄPèÏ\n\0\0ÄEüÿuüEèPè-\0\0YYjMèèåÿÿHPðþÿÿPMèèÔéÿÿPMèèÓäÿÿðþÿÿè¼äÿÿhÿÿÿè¨èÿÿPMèèèÿÿPèñÿÿYYÀ\0\0\0Æïþÿÿ\0MèèäÿÿMÐèäÿÿpÿÿÿèväÿÿMØènäÿÿ\\ÿÿÿècäÿÿlÿÿÿèXäÿÿMÈèPäÿÿhÿÿÿèEäÿÿMÀè=äÿÿMÄè5äÿÿMÜè-äÿÿMøè%äÿÿXÿÿÿèäÿÿMðèäÿÿM\bè\näÿÿïþÿÿéJ\0\0QÌpÿÿÿPèsãÿÿäþÿÿPèã÷ÿÿYYPpÿÿÿèâãÿÿäþÿÿèËãÿÿMÐèñãÿÿHPjàþÿÿPMÐè´èÿÿPpÿÿÿPjj\0ÜþÿÿPMÐèèÿÿPØþÿÿPè²ïÿÿÄ\fPEôPè¥ïÿÿÄ\fØþÿÿèmãÿÿÜþÿÿèbãÿÿàþÿÿèWãÿÿ`ÿÿÿ3öE\fRPVQè´\0\0EUÿuÿuEìPè¬\0\0Ä\fjQÌEìPèâÿÿè÷ÿÿYYE°Çtÿÿÿl1@\0Çxÿÿÿt1@\0Ç|ÿÿÿÓ1@\0ÇEÛ1@\0ÇEã1@\0h @@\0Mèzâÿÿh´@@\0MèmâÿÿhÈ@@\0Mè`âÿÿhÜ@@\0MèSâÿÿhð@@\0M èFâÿÿhA@\0M¤è9âÿÿhA@\0M¨è,âÿÿÇE´\0\0\0ÇE¸\0\0\0E´Tÿÿÿë\rTÿÿÿ@TÿÿÿTÿÿÿ;E¸±\0\0jÿµTÿÿÿQÌEôPèÅáÿÿPÿÿÿPè`\v\0\0ÄjjEPtÿÿÿPÿµTÿÿÿTÿÿÿM°LüèæÿÿPèFïÿÿYPÿu\fLÿÿÿPè¶\0\0Ä PÿÿÿèÞåÿÿPLÿÿÿèÒåÿÿPè¼îÿÿYYÀ\v\0\0E°ÈþÿÿÈþÿÿÌþÿÿ½Ìþÿÿ\0tjÌþÿÿèT\r\0\0´þÿÿë\x07¥´þÿÿ\0ÆÇþÿÿ\0LÿÿÿèáÿÿPÿÿÿètáÿÿh@\0j\x07jEPèè\f\0\0MìèZáÿÿMôèRáÿÿMèèJáÿÿMÐèBáÿÿpÿÿÿè7áÿÿMØè/áÿÿ\\ÿÿÿè$áÿÿlÿÿÿèáÿÿMÈèáÿÿhÿÿÿèáÿÿMÀèþàÿÿMÄèöàÿÿMÜèîàÿÿMøèæàÿÿXÿÿÿèÛàÿÿMðèÓàÿÿM\bèËàÿÿÇþÿÿé\v\0\0LÿÿÿèµàÿÿPÿÿÿèªàÿÿé3þÿÿE°¼þÿÿ¼þÿÿÀþÿÿ½Àþÿÿ\0tjÀþÿÿè.\f\0\0°þÿÿë\x07¥°þÿÿ\0Æ»þÿÿh@\0j\x07jEPèØ\v\0\0MìèJàÿÿMôèBàÿÿMèè:àÿÿMÐè2àÿÿpÿÿÿè'àÿÿMØèàÿÿ\\ÿÿÿèàÿÿlÿÿÿè\tàÿÿMÈèàÿÿhÿÿÿèößÿÿMÀèîßÿÿMÄèæßÿÿMÜèÞßÿÿMøèÖßÿÿXÿÿÿèËßÿÿMðèÃßÿÿM\bè»ßÿÿ»þÿÿ^ÉÃUì3À@]ÃUìQE\b%\0\0yHÈþ@Àu%E\fE\vE\bMM3ÁM¯M ¯Á%ÿ\0\0\0EüëE\f¯EEEEE \vE\b%ÿ\0\0EüEüÉÃUì3À@]ÃUì3À@]ÃUì3À@]ÃUììE\bkÀ\n÷}\fEôEô¯E\fEôEôj\nY÷ùEôE\b+EôEôEô@EôEôiÀ@B\0EøEôiÀ@B\0EüEü+Eøø~ÛEôÜPA@\0ß}ìEìEôEôÉÃUìì8ÿu\fhX@@\0EÈPèÊñÿÿÄ\fEÈPMüè;ÞÿÿEüPM\bèÞÿÿMüèÞÿÿE\bÉÃUìì8ÿuÿu\fh\\@@\0EÈPèñÿÿÄEÈPMüèùÝÿÿEüPM\bèÏÝÿÿMüèDÞÿÿE\bÉÃUìì@eÄ\0ÿu\fEøPèiÿÿÿYYj\0MøèhÞÿÿ¾\0è0EüjMøèUÞÿÿ¾\0è0EèjMøèBÞÿÿ¾\0è0EØjMøè/Þÿÿ¾\0è0EÜjMøèÞÿÿ¾\0è0EÔjMøè\tÞÿÿ¾\0è0Eìhl@@\0MàèIÝÿÿEMDüPMäèÝÿÿÿuìÿuÔÿuÜÿuØÿuèÿuüÿuEMÿTüÄEð¶E Àtÿu$EàPÿuðEÌPè\0\0\0ÄMÄEÀëÿuðEÈPè}þÿÿYYMÄEÀEÀEÐÿuÐMôè¦ÜÿÿEÄàt\feÄýMÈèÝÿÿEÄàt\feÄþMÌèûÜÿÿEôPM\bèrÜÿÿMôèçÜÿÿh@\0jjEàPè[\b\0\0MøèÍÜÿÿE\bÉÃUììÿuQÄÿu\fPè\0\0\0YYEøPè³\0\0\0Ä\fhb@@\0Müè9Üÿÿeô\0ë\x07Eô@EôMøè±Üÿÿ9Eôs)ÿuÿuôMøè»Üÿÿ¶\0Pè\f\0\0YYEóÿuóMüè\b\0\0ëÃEüPM\bèÌÛÿÿMüèAÜÿÿMøè9ÜÿÿE\bÉÃUììÿu\fhd@@\0EìPè>ïÿÿÄ\fEìPMüè¯ÛÿÿEüPM\bèÛÿÿMüèúÛÿÿE\bÉÃUìì\fM\fèÜÿÿ9Evnh[@@\0MüèvÛÿÿM\fèûÛÿÿM+ÈMøeô\0ë\x07Eô@EôEô;Eø}hh@@\0Müè0ÜÿÿëâE\fPMüèÜÿÿEüPM\bè\fÛÿÿMüèÛÿÿM\fèyÛÿÿE\bëE\fPM\bèëÚÿÿM\fè`ÛÿÿE\bÉÃUìQVeü\0ë\x07Eü@EüM\fèoÛÿÿ9Eüs*¾u\bÿuüM\fèxÛÿÿ¾\0;ðuÿuüM\fÁècÛÿÿ\0ëëÂ2À^ÉÃUìì\fM\bè-Ûÿÿø¤\0\0\0eü\0ë\x07Eü@Eü}ü}9ÿuüM\bè#Ûÿÿ¾\0øA|ÿuüM\bèÛÿÿ¾\0øZ~ÆE÷\0M\bè±ÚÿÿE÷ëzëºÇEø\0\0\0ë\x07Eø@EøM\bèÀÚÿÿ9Eøs9ÿuøM\bèÍÚÿÿ¾\0ø0|ÿuøM\bèºÚÿÿ¾\0ø9~ÆEö\0M\bè[ÚÿÿEöë$ë³ëÆEõ\0M\bèFÚÿÿEõëÆEôM\bè5ÚÿÿEôÉÃUììVÿu\bMè*Úÿÿeü\0ÇEø\0\0\0ë\x07Eø@EøEø;E\f\0\0\0E¯EøHEôM\bèÚÿÿ9EôsÿuôM\bè&Úÿÿ¶\0PMè\0\0uô+uøFMèîÙÿÿ;ðsjEô+Eø@PMè»ÜÿÿuøNMèÌÙÿÿ;ðs EøHPMèØÙÿÿ¾\0EðEðMüDÐEüédÿÿÿMèÙÿÿøt=M\bèÙÿÿHPM\bè¡Ùÿÿ¶\0PMè\0\0MèpÙÿÿHPMèÙÿÿ¾\0MüDÐEüEü^ÉÃUìì Veø\0eì\0ë\x07Eì@EìM\bè3Ùÿÿ9EìsÿuìM\bè@Ùÿÿ¾\0EøEøëÖeð\0M\fè\fÙÿÿør5ÇEè\0\0\0ë\x07Eè@EèM\fèïØÿÿ9EèsÿuèM\fèüØÿÿ¾\0EðEðëÖëjM\fèåØÿÿ¾\0EðM\fèºØÿÿÀweà\0ë>j\0M\fèÃØÿÿf¾\0·ðjM\fè²Øÿÿf¾\0·ÀðjM\fèØÿÿf¾\0·Àð¯uðuàEàEüEøEüEôEôEäM\bè'ØÿÿM\fèØÿÿEä^ÉÃUìì j\0h@@\0MèàÜÿÿEðEð@Ph@@\0MèËÜÿÿEøEø@Ph@@\0Mè¶ÜÿÿEüEü@Ph@@\0Mè¡ÜÿÿEô}ðÿueð\0}øÿueø\0}üÿueü\0}ôÿueô\0}ð\0u}ø\0u}ü\0u\r}ô\0u\x072Àé£\0\0\0ÿuðj\0EìPMènÜÿÿPM\bèm×ÿÿMìèY×ÿÿEøH+EðPEð@PEèPMèDÜÿÿPM\fèC×ÿÿMèè/×ÿÿEüH+EøPEø@PEäPMèÜÿÿPMè×ÿÿMäè×ÿÿMè+×ÿÿPEü@PEàPMèïÛÿÿPMèîÖÿÿMàèÚÖÿÿ°ÉÃUìQÿuEH¯EPEüPM\fè¾ÛÿÿEüPM\bè1ÖÿÿMüè¦ÖÿÿM\fèÖÿÿE\bÉÃUìì$èÚ\0\0}\b}h,A@\0èÃãÿÿYéÙ\0\0\0eø\0}\buE\fÿp\fè£ãÿÿYEøE\fÿp\bèãÿÿYEðUôEðEÜ}Ü©O\0tëh0A@\0èqãÿÿYEèUìëh8A@\0è]ãÿÿYEèUìE\fÿpMüè¨Õÿÿ}ø\0u7ÿuèQÌEüPèuÕÿÿè¨ëÿÿYY¶ÀÀt\rh@A@\0èãÿÿYë\vhDA@\0èãÿÿYë#ÿuèQÌEüPè>Õÿÿè\0\0\0YYPhHA@\0èîâÿÿYYMüèÕÿÿ3ÀÉÃUìì0j\0h@@\0M\bèbÚÿÿEàEà@Ph@@\0M\bèMÚÿÿEô}àÿt}ôÿueÜ\0M\bèVÕÿÿEÜéÒ\0\0\0ÿuàj\0EüPM\bèAÚÿÿEôHH+EàPEà@@PEøPM\bè&ÚÿÿM\bèHÕÿÿPEô@@PEðPM\bè\vÚÿÿEøPEüPEäPè áÿÿÄ\fEðPEøPEìPè\fáÿÿÄ\fQÌEìPèVÔÿÿQÌEäPèJÔÿÿèûÿÿYYM\fÑé¯ÁEèEèEÐMìè§ÔÿÿMäèÔÿÿMðèÔÿÿMøèÔÿÿMüèÔÿÿM\bèÔÿÿEÐÉÃUìE\f¯EE\bE\bEHExE\b+E\fE\bM\bÿUëæ]Â\0UìQMüE\bàt2h@\0Eüÿpüjÿuüè®ÿÿÿE\bàt\rEüèPèçàÿÿYEüèëMüèÔÿÿE\bàt\tÿuüèÆàÿÿYEüÉÂ\0UìEHExM\bÿUE\bE\fE\bëæ]Â\0UìQMüÿu\bMüèRÔÿÿÉÂ\0UìÙ=\fP@\0f\fP@\0fÊ\0\ff\bP@\0Ù-\bP@\0]ÃÌUìVEM\f\vÈM\bu\x07E÷áëE÷áðE÷e\fðE÷áÖ^ÉÂ\0¹8Q@\0éÂßÿÿUì¹P@\0èµßÿÿ]Ã\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0F\0\0>F\0\0.F\0\0ÆE\0\0ÒE\0\0ÞE\0\0ðE\0\0üE\0\0\bF\0\0\"F\0\0\0\0\0\0¬E\0\0\0\0\0\0\0\0\0\0Í=@\0Ã=@\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0%u\0\0%I64u\0\0\0%X\0\x000\0\0\x000123456789ABCDEF\0\0\0\0**\0\0**\0\0*\0\0\0*\0\0\0*\0\0\0*\0\0\x000\0\0\x001%i\x007654321234567898\0\0\0\x003194837251290356\0\0\0\x007654321234567898\0\0\0\x007654321234567898\0\0\0\x007654321234567898\0\0\0\x007654321234567898\0\0\0\x007654321234567898\0\0\0\0-1\n\x00172678\0\x00000000\0\x001\n\0\x000\n\0\0%i\n\0\0\0\0\0\0\0\0\0\0\0ð?CharSeq\0StrRep\0\0StrRepMult\0\0StrRepCap\0\0\0StrRepNullTerm\0\0CharSingle\0\0StrSum\0\0StrSumRC\0\0\0\0StrNull\0string index error\n\0string constructor: char* s = 0\n\0\0\0\0string length >= npos\n\0\0Y\"@\0É@\0Y\"@\0Y\"@\0:@\0:@\0Å@\0E@\0Ö@\0@\0w@\0B@\0Æ@\0@@\0Y\"@\0¾@\0¾@\0\b@\0Æ@\0:@\0:@\0Å@\0E@\0Ö@\0@\0w@\0B@\0Æ@\0@@\0\0@\0¾@\0¾@\0\b@\0ì@\0@\0@\0@\0E@\0@\0f@\0w@\0B@\0Æ@\0@\0@\0¾@\0¾@\0\b@\0@\0@\0@\0@\0Q@\0Ö@\0·@\0w@\0B@\0Í@\0@\0\f@\0¾@\0Í@\0\b@\0ì@\0@\0@\0@\0E@\0Ù@\x007@\0ß@\0E@\0Æ@\0@\0@\0¾@\0¾@\0\b@\0ì@\0@\0@\0@\0E@\0Ù@\x007@\0Ù@\0B@\0Æ@\0@\x004@\0Æ@\0¾@\x007@\0@\0@\0@\0@\0f@\0Ö@\x007@\0Ù@\0B@\0Æ@\0@\0i@\0Â@\0É@\0'@\0@\0:@\0:@\0Å@\0E@\0Ö@\0@\0w@\0B@\0Æ@\0@@\0:@\0@\0É@\0Ñ@\0g@\0:@\0:@\0Å@\0ù@\0Ö@\0@\0w@\0B@\0H@\0@@\0]@\0µ@\0É@\0é@\0g@\0:@\0:@\0Å@\0#@\0Ö@\0@\0w@\0B@\0H@\0@@\0c@\0No heap space for exception message\n\0\0\0\0\n\nAn exception has been thrown\n\0Trace: \0; \0\0.\n\0\0\n\nThere has been an exception with no handler - exiting\0\n\0\0\0Logic error:- \0\0invalid argument\n\0\0\0length error\n\0\0\0out of range\n\0\0\0\r\n\0\0¤E\0\0\0\0\0\0\0\0\0\0ºE\0\0,@\0\0xE\0\0\0\0\0\0\0\0\0\0PF\0\0\0@\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0F\0\0>F\0\0.F\0\0ÆE\0\0ÒE\0\0ÞE\0\0ðE\0\0üE\0\0\bF\0\0\"F\0\0\0\0\0\0¬E\0\0\0\0\0\x004wvsprintfA\0\0USER32.dll\0\0ËHeapAlloc\0ÏHeapFree\0\0JGetProcessHeap\0\0AlstrcmpA\0\0MlstrlenA\0\0GlstrcpyA\0\0ExitProcess\0%WriteFile\0dGetStdHandle\0\0GetCommandLineA\0KERNEL32.dll\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0ÿÿÿÿ\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0¸\0\0\00\x070\r0050;0J0^0d0j0p0z000¢0È0ç0ò0a1Ö1í1÷1#2Y2h2.393i3Ü3ð34´45Ý5â5ô5&6i668£8499×9:Y: :3<W<u<{<¥<Ê<Û<î<\b===*={==»=Ä=Ì=Ó=å=ì=ù=\0>>~>>§>¶>Ã>É>Ð>Ü>â>ë>ñ>ø>ý>?\b?$?9?I?P?\0 \0\0¬\0\0\0.040;0I0X0b0h0l0r000£0¯0¹0¿0Ë0ô0ú01\r11!1-171O1f1k1p1111§1È1Í1Ò12\b2\r22/282]2³2ñ213H3N3W3`3g3o333¨3î3ö3\f44U444×4è4ù4\n5Û56Q;>>&>->4>9>F>S>`>m>z>>«?\0\0\x000\0\0D\0\0\0»0L2h2ª2j384z4ô4=5o59#989M9:ä:ø:;;H;l;;¡;â<p=w===Ä=Ñ=\0\0\0@\0\08\0\080<0\b2\f22222 2$2(2,2024282<2@2D2H2L2P2T2X2\\2`2d2h2l2p2t2x2|222222222 2¤2¨2¬2°2´2¸2¼2À2Ä2È2Ì2Ð2Ô2Ø2Ü2à2ä2è2ì2ð2ô2ø2ü2\x0033\b3\f33333 3$3(3,3034383<3@3D3H3L3P3T3X3\\3`3d3h3l3p3t3x3|333333333 3¤3¨3¬3°3´3¸3¼3À3Ä3È3Ì3Ð3Ô3Ø3Ü3à3ä3è3ì3ð3ô3ø3ü3\x0044\b4\f44444 4$4(4,4044484<4@4D4H4L4P4T4X4\\4\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0H \0\0\0\x000 6\t*H÷\r\x07  '0 #10\r\t`He\x000x\n+7 j0h03\n+70%\0  ¢\0<\0<\0<\0O\0b\0s\0o\0l\0e\0t\0e\0>\0>\0>010\r\t`He\0 Tðª)+õâªÿ$ÇÒsÕu_µÂAÚkÇJa ¬0L04 \0èïG¿ýÐS{ó\rNBÅé0\r\t*H÷\r\v\x000}1\v0\tUGB10U\bGreater Manchester10U\x07\x07Salford10U\nCOMODO CA Limited1#0!UCOMODO RSA Code Signing CA0\r150116000000Z\r180115235959Z01\v0\tUUS10\fU\f1059110U\b\f\bNew York10U\x07\f\rSleepy Hollow10U\t\f\r18 Francis St10U\n\fAescripts, Inc10U\fAescripts, Inc0\"0\r\t*H÷\r\0\x000\n\0É\0¬Tg4c]ÞK9Yô´êµ~¢zûW\nh¬?þçÑIk{ïØL?B\t³èåj¼¶ù×pR\"¥±CÀ×¾Î±È¤zÖy&gÆ.zu&»váø×Q%cKª¼Ïf£ëËÚ¨ùB6Ï5êg\"ÔoàqNÕºtÝjþ«3é©¾i1GÚ4Å\t;f»Ù>÷zä¼v18ðçoCAlªÁø¾G©\x07\t2¿å\rÛ~ñ¼ËàQÙo\0È'>ç®F5QtLÑ6W»7£$öpÄóÏ&¿ó¹x ãÇÝï\"'Ä¦\vFMÓ\rÌÄ§\0£¯0«0U#0)`ÿMúëù¦j¸ÏùæK½IÎ0Uí'ÃÍy\rcNå(¯pN0Uÿ\x070\fUÿ0\x000U%\f0\n\b+\x070\t`HøB0FU ?0=0;\f+²10+0)\b+\x07https://secure.comodo.net/CPS0CU<0:08 6 42http://crl.comodoca.com/COMODORSACodeSigningCA.crl0t\b+\x07h0f0>\b+\x0702http://crt.comodoca.com/COMODORSACodeSigningCA.crt0$\b+\x070http://ocsp.comodoca.com0 U0support@aescripts.com0\r\t*H÷\r\v\0\0v@+<0 bY½£rE:#Û/)3´g9{³:\0ð×KÀ¨ïz+s&!VTv\bJùÐxããô¡ÂM{~Ãwà!gÆ-ÅÞÍnÅ!vr!;\v\x07Â_mÚå\t[«xð¸þ½Aü>}zÐ2É4Ã5¤þf»Úm<9;ÀÆÂj¿9í·NPy_c\\¨ñªê¦Ê5T\t¿²ðKGé\0m;æðPÒbÛp!å¿áÆk«!)ö9ýµhÇÂ9ÍZ1Åãbe]x6c÷ý3dç6÷SeEóµ4À%yCÔ]#ß\\\0[ÚI\t\v}û)Vöâ§ÝP0t0\\ 'fîVëIó«×p¢üÞ\"0\r\t*H÷\r\f\x000o1\v0\tUSE10U\n\vAddTrust AB1&0$U\vAddTrust External TTP Network1\"0 UAddTrust External CA Root0\r000530104838Z\r200530104838Z01\v0\tUGB10U\bGreater Manchester10U\x07\x07Salford10U\nCOMODO CA Limited1+0)U\"COMODO RSA Certification Authority0\"0\r\t*H÷\r\0\x000\n\0èTÒ\nV±¬\r$ÝÅÏDgt+7£}#p\0q¼SßÄú*KV½pr·aÉK§=ã°aîÿÇô>\nú>\\ùæ4zÙkç³ zv¯q×ìý\rúlúß°ô~ù¾Ä¦/OµügCr½\f\0Öëk,Óí«~åãnüØ¨ä$ÚCkb¸UýêÁ¼l¶óäliøxH0EÕ­á\r<E`ü2Q'¼gÃÊ.¶kêFÇÇ  ±eÞH\bº¤N©òF7ëèÌHCgNr*\\½L(\\\"{´«ÙîàQÃ\tFNm>úÚ|3WA<Qí\v¶\\¯,cßWÈ?¼é]Ä¯Eâ£Z$´º©V=ÏoªÿIX¾ð¨ÿô¸­é7ûº¸ô\v:ùèCBØËñÙ»á`¸(V¬\nçqëÏÝ=©¡H½<÷¯µ\r\"LÀìV;öÓ¢â[·²\"RièLeñ-ptêg)iR»×ßPjUF¿ £(apÐÃ¢ª,!ªGÎ(Ev¿'´Õ®´ËPækôLq0é¦ßàØÿ@ÝûÐB£3:.\\AcÎqk+ì¦·1\\:jGàÃyYÖ ¯òjªr¼WJÒK»ü°LAåí=^(Ì¿³QÚ§GåS\0£ô0ñ0U#0­½z4´&÷úÄ&Tï½à$ËT0U»¯~=ú¦ñ<­î8ìÙ22Ô0Uÿ0Uÿ0ÿ0U \n0\b0U \x000DU=0;09 7 53http://crl.usertrust.com/AddTrustExternalCARoot.crl05\b+\x07)0'0%\b+\x070http://ocsp.usertrust.com0\r\t*H÷\r\f\0\0d¿ñ_ÐÍ¸¡)W\rèZ÷Ñé>òvnñRp»<ÿM\rtjÌ%ÓÃ *]Lõº¡mÄT\tuÇã']y7@wõ´¬Ð;«Öï4~+éyÓ«WE\f¯(úÐÛåP»ßWi}ØRÊs¿óæ¸nf³-YñLÎ£qL|G\f;\vö¡±l>\\ªÄ.Ëù\x07ºHMòÈ©s¢ë{#Þ¢óMUzaEhÇ^@k#õyzïµk·oFô{ñ=KØYZàA$²`XGÛïnFýõÙ_³ÛØ¸ä@³Í9®»¼ÜÑ¦ïñ;o8o0à0È .|ÌJRþý·Í4¯0\r\t*H÷\r\f\x0001\v0\tUGB10U\bGreater Manchester10U\x07\x07Salford10U\nCOMODO CA Limited1+0)U\"COMODO RSA Certification Authority0\r130509000000Z\r280508235959Z0}1\v0\tUGB10U\bGreater Manchester10U\x07\x07Salford10U\nCOMODO CA Limited1#0!UCOMODO RSA Code Signing CA0\"0\r\t*H÷\r\0\x000\n\0¦cw4ÑÝég1ëÌý1³¹bW?¼[ã$2'k¼Q§Ï%³_¨ 0ûa{\t³ãý¢h,¿rãäu å5#Éî\fdÇØB¡{µRK:°#KKcà\"7{Õy\nQ,æþÁð?aa\n¢ÜöÃ0ªÍ(uHÁyZ\bÍ»U÷Ôv:3FPs\\ôJkÝ^Ö½ý©/À%õùx×_ÂDU<<1FËp®\x07©\nã¯Áo#â_8ÛÆ\b]G³Að.\x007¹ªyRÍ{Øb)¤~0½µr´Hòãè!ù^LbyÕ\v\0£Q0M0U#0»¯~=ú¦ñ<­î8ìÙ22Ô0U)`ÿMúëù¦j¸ÏùæK½IÎ0Uÿ0Uÿ\b0ÿ\x000U%\f0\n\b+\x070U \n0\b0U \x000LUE0C0A ? =;http://crl.comodoca.com/COMODORSACertificationAuthority.crl0q\b+\x07e0c0;\b+\x070/http://crt.comodoca.com/COMODORSAAddTrustCA.crt0$\b+\x070http://ocsp.comodoca.com0\r\t*H÷\r\f\0\0?9ÃîøÊ;Þ\fmM±ñNO¯Â8,ÌÅc«\tc¯«¢×?ÌoÃ=Ö\bÿ%Ø©§+à±\x07\"Q:Ôáé\t¿æ$t¯{1n#ïTQ-Râu\bLñ·QáQ\0ÆölîDvWjñßXk!ªIÔ|7N½ÿ¶uT@6WgÍOäþóÚüuÛì·÷e\t#ICWê~ waÈMò»eM¨÷E\x07¯zi'e)@ß{:Q9¨py­mB ¢Ï\flLÍs\x07çZ:º¢¡|Ëc:§Ô§RG2©ô¿dGÑªSN20sÂo·x\\ÿF»k\"\vøª4¦üõÝe1W1Ð6ìG¡ÏË¨ïXÅwÊKQ¯L\bJzâ£RâÌ&ä²Øå8Â¨íÆ5k©XaJ\n´KB¶U¾çpmYøm*\f`_\fl0¬R\tÿ+ÛÐ Êê(~2ß{H3×eø®Éøv}dÐÎ¾5}ÿr1M½l/¨\fPû'³vÉôæ×Ã4â!aþ¿Utá!w\nhl»äÉ©æÏY%ë|ìEyfhè\"Í¸ïM<\tÐ¼((ûjÊT\\ÍÂeÎH[Ôµ7FA|\x07ÝÏúCïºgaÿ}Ià»0}\\ãæ9K§1á0Ý00}1\v0\tUGB10U\bGreater Manchester10U\x07\x07Salford10U\nCOMODO CA Limited1#0!UCOMODO RSA Code Signing CA\0èïG¿ýÐS{ó\rNBÅé0\r\t`He\0 |0\n+7\f10\x000\t*H÷\r\t1\f\n+70\n+7\v10\f\n+70/\t*H÷\r\t1\" H:LÅ)_6×?}Ûm½ÏË<iOD4\\®Ãî´Û0\r\t*H÷\r\0\0\\åÐßsd9qßYêqQ>wÙòý{ÖlQK\"P@\vånË0&­Kü\nï{þ¦(\b;y0¶øûô¨,HN\\9´2G^G\b6Ú^a¢­¬ëH«°ÎÞÄ3ËjFå äR_\0$JNÊ÷×POus¯zÁLóñO/¢Ti\tû'è×!æ£é\x07l\ræ£ÓU8XCðéu\rÌ¦ï¤¨\"íÚ¸2@WË(C¾ô©(ñ@ÏÊpgíö;Kd/Ç½/îiIwq'(õ¯Ù7 |v%þáb\r$IAïÂø»éù<hYkÝz^I(zK$tµ¡\f¡0\f\n+71\f0\f\t*H÷\r\x07 \fz0\fv10\r\t`He\x000Ý\v*H÷\r\t ÍÊ0Ç\t+ 2010\r\t`He\0 ;;Ö|°Ù1ØÝK¶ÝÑ(0*Ï¾fÃ@ÏjpÒIö\bZôÝ=³d«þÑ²¾20170417190455Z ]¤[0Y1\v0\tUSG10U\nGMO GlobalSign Pte Ltd1)0'U GlobalSign TSA for Advanced - G2 \bÆ0©0 !ñÎhðúå[Í w0\r\t*H÷\r\v\x000[1\v0\tUBE10U\nGlobalSign nv-sa110/U(GlobalSign Timestamping CA - SHA256 - G20\r160524000000Z\r270624000000Z0Y1\v0\tUSG10U\nGMO GlobalSign Pte Ltd1)0'U GlobalSign TSA for Advanced - G20\"0\r\t*H÷\r\0\x000\n\0·Ç(ØóËP\r]ë)DÁY¥ÊdÎ½µQåÌnlÜÿbæ6C^Â\fdÊwö]wE¹^È$ëA7f7¬ÈÍtÌ³ïLâÎs¾É5|÷T÷lì Ö®cÄx_Y©.\"õÃ'Ø²[Ec'ÿ±=©´óÀñ e£°RA4ë¼ËÎTöþ³J¦úTÅûÓÀã¿ã?Ðù@ÇÕë&|C0ÇpòxªN¥\r\0J:w£Ê#ÈV]FÌØÒª\n²[Õ2ÎA{NTÊ«ÑR^Ó$Vó\fÝ½yÕAÃ£ åüÇg3Îq2s\0£g0c0Uÿ\x070LU E0C0A\t+ 20402\b+\x07&https://www.globalsign.com/repository/0\tU0\x000U%ÿ\f0\n\b+\x07\b0FU?0=0; 9 75http://crl.globalsign.com/gs/gstimestampingsha2g2.crl0X\b+\x07L0J0H\b+\x070<http://secure.globalsign.com/cacert/gstimestampingsha2g2.crt0U-nnÑåîçcé§ÙÚ\v<W\"=0U#0!§J]d°´æ\x007GæA+L0\r\t*H÷\r\v\0\0WSäÝî¥,Þä¿b¢aJ$#0'/úYÎp=FRwÄEÒ½·!IØ.ÿ.wù?\nù !\\Oä+(Ì\\¹«âUÃøEIÎªu!èïQü4,\v2\t²äi­Ù.~áü-H¿Ót5:ß0Cpgz8×ºÂVû1Hº[ñ!bàvI8ÔXMy\t©ÚoÖ­äÚ}LÙ±0p@jÛEºSvÜKB!ÏäÒXÔUev¬®\b¶A>_EdÈÔ3¡¡L½?Äþò¾±¬×öËÎ*îCOüÿp54£3|Ïâ\r2$ |\0>£2Þ00ý \v\0\0\0\01ÆP0\r\t*H÷\r\v\x000L1 0U\vGlobalSign Root CA - R310U\n\nGlobalSign10U\nGlobalSign0\r110802100000Z\r290329100000Z0[1\v0\tUBE10U\nGlobalSign nv-sa110/U(GlobalSign Timestamping CA - SHA256 - G20\"0\r\t*H÷\r\0\x000\n\0ªÃ«Q%¶âOØÁ\böF#ÙEÅ[«¿ÒlWÉ3 Æ<~SHz¿¯îÃGáBìãã¡Jl\fÄ¦Á¹Í[ñDþ\vÞ!XîMÈÅg\v²³ñ4v¢Ë\x07m7Å G&¤©y×ëW+|\"Ø×ñ\x07x\"6kwy¯¯ùNáµ\b1ýêíKqb#ñ9Dy¶vW­/\bFÜÒ¼ôtÎÈhiQv]$[T=&Ì@'Y }Yöø*8ýk @eWvÌ[O,¨ÛPOÆÜ¹øÝiLë{0&üzX»Y¼rW·vÉØ\nn\t\0£è0å0Uÿ0Uÿ\b0ÿ\x000U!§J]d°´æ\x007GæA+L0GU @0>0<U \x000402\b+\x07&https://www.globalsign.com/repository/06U/0-0+ ) '%http://crl.globalsign.net/root-r3.crl0U#0ðK¨.E$®MPúcÞâÝ¼0\r\t*H÷\r\v\0\0VJ|ÐÎÉ¿6fÑ¾5lèÎ1YùlA_.ÀB%¸ÇüÔ±7Äh Ï(jtKcwa;×/ãõ½3¢}lï,°ôb6sÑ6ñ¼^ì´xüÒvyèá!àÄ¢áªgÛ³så@\"Ï9ÎÛæw§»²ËöÈÔ²qoNu®ñ=dj;^NF¦*]\bñ£ót¿b\r#\\*8ÒÀÕÍÏÚ(µºid*µ¦¢Õs¯ÜFÛ®×nÅºÔGÄVtGxX¾ï+ýìl¿Ñ÷¿Pà{àý x\"]\b. ó}£ÓDNnz ã6ð¶P¹1´0°0q0[1\v0\tUBE10U\nGlobalSign nv-sa110/U(GlobalSign Timestamping CA - SHA256 - G2!ñÎhðúå[Í w0\r\t`He\0 0\t*H÷\r\t1\r\v*H÷\r\t0\t*H÷\r\t1\r170417190455Z0/\t*H÷\r\t1\"  ¦õ|Ã«Ç!OIx\bÙóXDÚ[ËÆvÒ¼Ì0¦\v*H÷\r\t\f1000}UØçZV¢üsC÷¸T\\\\µ*\r0u0_¤]0[1\v0\tUBE10U\nGlobalSign nv-sa110/U(GlobalSign Timestamping CA - SHA256 - G2!ñÎhðúå[Í w0\r\t*H÷\r\0\0LuÂa-0ÿ3èi½Ò%EUÉªÖ´Å½öO(Ñè¦­RùÑCDåKkD¢¡ÞÊ¶¯7}Ó6ä°PcÝ ¨cp¾p­?Ecõ^3Ä(]¥3ÿóï*|¥·¯í[¦³¤Á¯ã}ûø»O»UnQtÃ ®{!d:7­¼Ú6²'\vúxñá^¤ú¡*qcaöR+ÖÕüZcè5Ä±6Í\0ôþ'2P7Ó]\b^I8cErÞõã©\ts2\0àV\b´}Ó#ì}ÚöT},\0Ò³uÃvNFf;!òZÔÌßãÅ¢ÅA©E;üñ±¶-\0\0\0\0\0\0";
        }
        var strTempCode = localize({
            en: "You entered a temporary serial number that needs to be exchanged for a permanent license.\n\nOnce you obtain your permanent license you can use it to register " + strScriptName + ".  It is quick and easy to exchange it, simply go to:\n\n" + exchangeUrl + "\n\nWould you like to go there now?",
            fr: "Vous avez entré un numéro de série temporaire devant être échangé contre une licence permanente.\n\nUne fois votre licence permanente acquise, vous pouvez l'utiliser pour vous enregistrer " + strScriptName + ".  Le changement est rapide et facile,  allez simplement à:\n\n" + exchangeUrl + "\n\nVoulez-vous y aller maintenant?",
            de: "Du hast eine temporäre Seriennummer eingegeben, die gegen eine permanente Lizenz eingetauscht werden muss.\n\nSobald Du eine permanente Lizenz erhalten hast, kannst Du sie verwenden um" + strScriptName + " zu registrieren.  Der Austausch ist schnell und unkompliziert, gehe einfach zu:\n\n" + exchangeUrl + "\n\nWillst Du jetzt dorthin gehen?",
            es: "Ha introducido un número de serie provisional que necesita ser sustituido por una licencia permanente.\n\nUna vez obtenga una licencia permamente puede usarla para registrar " + strScriptName + ". Reemplazarla es rápido y sencillo, simplemente vaya a:\n\n" + exchangeUrl + "\n\n¿Quiere ir allí ahora?"
        });
        var strExpiredAlert = localize({
            en: "Sorry, this trial version of the script has expired. \nYou can purchase a license at " + strTrialUrl + "\n\nWould you like to go there now?",
            de: "Die Testversion des Skriptes ist leider abgelaufen.\nDu kannst unter " + strTrialUrl + " eine Lizenz erwerben.\n\nMöchtest Du jetzt dorthin gehen?",
            fr: "Désolé, la période d'essai du script a expiré.\nPour acheter une licence, veuillez vous rendre sur la page " + strTrialUrl + "\n\nVoulez-vous ouvrir cette page maintenant ?",
            es: "Lo siento, esta versión de prueba del script ha expirado.\nPuede obtener una licencia en" + strTrialUrl + "\n\n¿Quiere ir allí ahora?"
        });
        var strBetaExpiredAlert = localize({
            en: "Sorry, this beta version of the script has expired",
            de: "Die Betaversion des Skriptes ist leider abgelaufen",
            fr: "Désolé, la période beta du script a expiré",
            es: "Lo siento está versión beta del script ha expirado"
        });
        var strBetaCodeAlert = localize({
            en: "Beta license code detected for " + strScriptName + "\nBeta license codes can only be used on beta versions, please obtain a normal license to use this version.",
            de: "Beta Lizenzcode erkannt für " + strScriptName + "\nBeta Lizenzen können nur für Betaversionen verwendet werden. Bitte verwende eine normale Lizenz für diese Version.",
            fr: "Licence beta détectée pour " + strScriptName + "\nLes codes pour licence beta ne peuvent être utilisés que pour les versions beta, merci de demander une licence régulière pour utiliser cette version.",
            es: "Licencia beta detectada para " + strScriptName + "\nLas licencias beta sólo pueden ser usadas con versiones beta, por favor obtenga una licencia normal para usar esta versión."
        });
        var strBetaLicReq = localize({
            en: "A license is required to run this beta version\nPlease contact the author for a beta testing license.",
            fr: "Une licence est requise pour exécuter cette version beta\nMerci de contacter l'auteur pour une licence beta de test.",
            de: "Für diese Betaversion wird eine Lizenz benötigt.\nBitte kontaktiere den Autor für eine Betatester-Lizenz.",
            es: "Es necesaria una licencia para utilizar esta versión beta.\nPor favor, póngase en contacto con el autor para obtener una licencia beta."
        });
        var strRegSuccess = localize({
            en: "Registration successful for %u\n",
            fr: "Enregistrement réussi pour %u\n",
            de: "Registrierung erfolgreich für %u\n",
            es: "Registro completado al %u\n"
        });
        var strRegSuccess1 = localize({
            en: "Thank you for purchasing " + strScriptName,
            fr: "Merci d'avoir acheté " + strScriptName,
            de: "Danke für den Kauf von " + strScriptName,
            es: "Gracias por comprar " + strScriptName
        });
        var strInvalidCode = localize({
            en: "Sorry, the license code is not valid",
            de: "Entschuldigung, der Lizenzcode ist nicht gültig.",
            fr: "Désolé, ce numéro de licence n'est pas valide.",
            es: "Lo siento, la licencia no es válida"
        });
        var strFirewall = localize({
            en: "A firewall or virus protection software is blocking the licensing process.  Please disable this or configure it to allow this process so that the license can be verified.",
            de: "Eine Firewall oder ein Antivirus-Programm blockiert den Lizenz-Prozess. Bitte deaktiviere das Antivirus-Programm oder konfiguriere das System so, dass die Lizenz verifiziert werden kann.",
            fr: "Un logiciel pare-feu ou un logiciel antivirus bloque le processus de vérification de licence. Veuillez le désactiver ou le configurer pour permettre à ce processus de vérifier la licence.",
            es: "Un software de \"firewall\" o de protección antivirus está bloqueando el proceso de concesión de licencias. Desactivela o configurela para permitir este proceso para que la licencia puede ser verificada."
        });
        var strContactSupport = localize({
            en: "If you require assistance please contact " + supportEmail,
            de: "Wenn Du Hilfe benötigst, kontaktiere bitte " + supportEmail,
            fr: "Si vous avez besoin d'aide, merci de contacter " + supportEmail,
            es: "Si necesita ayuda, por favor contacte " + supportEmail
        });
        var strCorruptedCode = localize({
            en: "Sorry, something must have happened to the " + strScriptName + " license code.  Please re-enter it at the prompt.\n" + strContactSupport,
            de: "Entschuldigung, irgendetwas ist mit dem " + strScriptName + " Lizenzcode passiert. Bitte gebe ihn erneut ein.\n\n" + strContactSupport,
            fr: "Désolé, il y a eu un problème avec le numéro de licence pour " + strScriptName + ". Merci de bien vouloir le saisir à nouveau.n\n" + strContactSupport,
            es: "Lo siento, algo ha ocurrido con la licencia de " + strScriptName + ". Por favor, vuelva a introducirla en la casilla.\n" + strContactSupport
        });
        var strTrialThanks = localize({
            en: "Thanks for trying " + strScriptName + "!",
            de: "Danke, dass Du " + strScriptName + " ausprobierst!",
            fr: "Merci d'avoir essayé " + strScriptName + "!",
            es: "¡Gracias por probar " + strScriptName + "!"
        });
        var strTrialTxt = localize({
            en: "%E days left in the trial",
            de: "%E Tage übrig für die Testversion",
            fr: "Il vous reste %E jours d'essai",
            es: "%E días de prueba restantes"
        });
        var strTrialTxt2 = localize({
            en: "%E launches left in the trial",
            de: "%E Programmstarts übrig für die Testversion",
            fr: "Il vous reste %E essais",
            es: "%E usos restantes de la versión de prueba"
        });
        var strTrialWelcomeHeader = localize({
            en: "Welcome to " + strScriptName,
            de: "Willkommen bei " + strScriptName,
            fr: "Bienvenue sur " + strScriptName,
            es: "Bienvenido a " + strScriptName
        });
        var strOK = localize({
            en: "OK",
            de: "OK",
            fr: "OK",
            es: "OK"
        });
        var strCancel = localize({
            en: "Cancel",
            de: "Abbrechen",
            fr: "Annuler",
            es: "Cancelar"
        });
        var strRetrieveLic = localize({
            en: "Retrieve License",
            de: "Lizenz vergessen?",
            fr: "Retrouver votre Licence",
            es: "Recuperar licencia"
        });
        var strPpcNotSupported = localize({
            en: "Sorry, PowerPC (PPC) processors are not supported, please contact support for further assistance.",
            de: "PowerPC (PPC) Prozessoren werden leider nicht unterstützt. Bitte kontaktiere den Support für weitere Informationen.",
            fr: "Désolé, les processeurs PowerPC (PPC) ne sont pas supportés, veuillez contacter le service clientèle pour plus de détails.",
            es: "Lo siendto, los procesadores PowerPC (PPC) no están soportados, por favor contacte con soporte para más información."
        });
        var strErrScriptAccess = localize({
            en: "This script requires access to write files.\nGo to the \"General\" panel of the application preferences and make sure \"Allow Scripts to Write Files and Access Network\" is checked.",
            de: "Dieses Skript benötigt die Erlaubnis Dateien zu schreiben.\n Gehe in Voreinstellungen von After Effects in die Rubrik \"Allgemein\" und aktiviere die Option \"Skripten können Dateien schreiben und haben Netzwerkzugang\".",
            fr: "Ce script nécessite les droits d'écriture de fichiers.\nAllez dans le panneau \"Général\" des préférences de l'application et cochez \n\"Autoriser les scripts à écrire des fichiers et à accéder au réseau\"",
            es: "Este script necesita poder escribir archivos.\nVaya al panel \"General\" de las Preferencias y asegúrese de que \"Permitir que los scripts puedan escribir archivos y acceder a la red\" está marcado.\n"
        });
        var strUpdateLicenseHeader = localize({
            en: strScriptName + " License Update Required",
            de: strScriptName + " Lizenz-Update benötigt",
            fr: "La licence de " + strScriptName + " doit être mise à jour",
            es: strScriptName + " necesita actualizar la licencia"
        });
        var strWebWarning = localize({
            en: "All your licenses are in the 'My Licenses & Downloads' section of your aescripts.com user account.\n\nUser accounts are part of the new aescripts.com.  If you have not created an account yet, create a new account using the same email address you used for the original purchase and your order history will be imported.\n\nWould you like to go there now?",
            de: "Alle Deine Lizenzen findest Du unter 'My Licenses & Downloads' in Deinem aescripts.com Benutzer-Account.\n\nBenutzer-Accounts sind Teil des neuen aescripts.com.  Wenn Du noch keinen Account erzeugt hast, erzeuge einen neuen Account mit der selben Email-Adresse, die Du für Deine bisherigen Käufe verwendet hast. Diese weden dann automatisch importiert.\n\nWillst Du jetzt dorthin gehen?",
            fr: "Toutes vos licences se trouvent dans la section 'My Licenses & Downloads' de votre compte utilisateur sur aescripts.com.\n\nLes comptes d'utilisateurs font partie de la nouvelle version de aescripts.com. Si vous n'avez pas encore créé de compte, créez un nouveau compte en utilisant la même adresse email que vous avez utilisée pour l'achat initial et l'historique des commandes sera importé.\n\nVoulez-vous y aller maintenant?",
            es: "Todas sus licencias están en la sección 'My Licenses & Downloads' de su cuenta de usuario en aescripts.com.\n\nLas cuentas de usuario son parte del nuevo aescripts.com. Si no ha creado una cuenta aún, cree una nueva utilizando el mismo correo electrónico usado para la compra original y su historial de compras será importado.\n\n¿Quiere ir allí ahora?"
        });
        var strOldLicenseFormat = localize({
            en: "License should look like this:\n\nFirstname**Lastname**111111111SUL",
            de: "Die Lizenz sollte so aussehen:\n\nFirstname**Lastname**111111111SUL",
            fr: "Votre licence doit être similaire à : \n\nPrénom**Nom**111111111SUL",
            es: "La licencia debe tener este aspecto:\n\nNombre**Apellido**111111111SUL"
        });
        var strNewLicenseFormat = localize({
            en: "License should look like this:\n\nPRODUCTID*FIRSTNAME*LASTNAME*1111111SUL1",
            de: "Die Lizenz sollte so aussehen:\n\nPRODUCTID*FIRSTNAME*LASTNAME*1111111SUL1",
            fr: "Votre licence doit être similaire à : \n\nPRODUCTID*PRENOM*NOM*1111111SUL1",
            es: "La licencia debe tener este aspecto:\n\nPRODUCTID*NOMBRE*APELLIDO*1111111SUL1"
        });
        var strRegistration = localize({
            en: "Registered to: ",
            de: "Registriert für: ",
            fr: "Enregistré pour: ",
            es: "Registrado a: "
        });
        var strUnknownError = localize({
            en: "There was an unexpected error\nPlease please open a support ticket here:\n" + supportEmail + "\nand submit screenshot of this error message\n\n",
            de: "Es gab einen unerwarteten Fehler\nBitte öffne hier ein Support-Ticket:\n" + supportEmail + "\nund füge einen Screenshot der Fehlermeldung bei\n\n",
            fr: "Une erreur vient de se produire \nVeuillez ouvrir un ticket de service client à cette adresse:\n" + supportEmail + "\net n'oubliez pas d'y joindre une capture d'écran de ce message\n\n",
            es: "Se ha producido un error desconocido\nPor favor habra un ticket de soporte aqui:\n" + supportEmail + "\ny presente una captura de pantalla con este mensaje de error\n\n"
        });
        var strWrongProduct = localize({
            en: "This license code is for a different product, please double check that you are entering the correct license\n\n",
            de: "Dieser Lizenz-Code ist für ein anderes Produkt, bitte stelle sicher, dass du den richtigen Lizenzcode eingibst\n\n",
            fr: "Vous venez d'entrer la clé de licence d'un autre produit, assurez-vous d'utiliser la bonne clé de licence\n\n",
            es: "Este código de licencia es para un producto diferente, por favor, comprobar que esta introduciendo la licencia correcta\n\n"
        });
        var prefsSectionName = "aescripts";
        var prefsName = (useLegacyPrefsHeader ? strScriptName : strHeader) + "_Registration";
        var prefsVersionName = (useLegacyPrefsHeader ? strScriptName : strHeader) + "_Version";
        var prefsLicVersion = (useLegacyPrefsHeader ? strScriptName : strHeader) + "_LicVersion";
        if ($.os.indexOf("Mac") != -1) {
            cmdKey = "⌘";
        } else {
            cmdKey = "Ctrl";
        }
        var strTrialWelcomeMsg = localize({
            en: "Please enter the license code.",
            de: "Bitte gebe den Lizenzcode ein.",
            fr: "Veuillez entrer votre numéro de licence.",
            es: "Por favor, introduzca el código de licencia."
        });
        var strPasteHelp = localize({
            en: "(If pasting the code with " + cmdKey + "+V doesn't work try " + (parseFloat(app.version) >= 10 ? "Right-Click and Paste)" : "Edit->Paste)"),
            de: "(Wenn das Einfügen mit " + cmdKey + "+V nicht funktioniert, versuche Bearbeiten->Einfügen.)",
            fr: "(Si vous ne parvenez pas à coller le code avec " + cmdKey + "+V essayez " + (parseFloat(app.version) >= 10 ? "Clique droit et Coller)" : "Edition->Coller)"),
            es: "(Si pegar la licencia usando " + cmdKey + "+V no funciona, pruebe " + (parseFloat(app.version) >= 10 ? "Clic derecho y pegar)" : "Edición->Pegar)")
        });
        var strTrialInstructMsg = localize({
            en: "To run in trial mode type: trial\n",
            de: "Um die Testversion zu starten, gebe \"trial\" ein.",
            fr: "Pour lancer la version de démonstration, tapez : trial\n",
            es: "Para ejecutar el modo Trial, escriba: trial\n"
        });
        var prefHeader = "Initialization Fragments";
        var prefSection1 = (string_encode(Math.floor(parseFloat(app.version)).toString().charAt(Math.max(0, Math.floor(parseFloat(app.version)).toString().length - 1)) + strScriptName.substring(Math.max(0, strScriptName.length - 15), strScriptName.length) + strScriptVersion) * privateNum * 0.457).toString(36);
        var prefSection2 = (string_encode(Math.floor(parseFloat(app.version)).toString().charAt(Math.max(0, Math.floor(parseFloat(app.version)).toString().length - 1)) + strScriptName.substring(Math.max(0, strScriptName.length - 15), strScriptName.length) + strScriptVersion) * (privateNum / 3.981)).toString(36);
        var prefsLocation = Folder.userData.fsName + "/Aescripts/";
        var prefsPrefix = "pref_";
        if (!isAE() && !Folder(prefsLocation).exists) {
            Folder(prefsLocation).create();
        }
        if (isAE() && !isSecurityPrefSet()) {
            alert(strErrScriptAccess);
            app.executeCommand(2359);
            if (!isSecurityPrefSet()) {
                return;
            }
        }
        if (betaMode && checkBeta(betaExpirationDate)) {
            if (cmd == "l") {
                alert(strBetaExpiredAlert);
            }
            return;
        }
        if (cmd == "l" || cmd == "c") {
            if (haveSettings(prefsSectionName, prefsName)) {
                myReg = getSettings(prefsSectionName, prefsName);
                if (cmd != "c" && myReg == "bad" || base64Decode(myReg) == "bad" || offerTrial && base64Decode(myReg) == "trial") {
                    doPrompt = true;
                } else {
                    doPrompt = false;
                }
                theLicense = checkCode(doPrompt, myReg, privateNum);
            } else {
                if (cmd == "c") {
                    myReg = (offerTrial ? "trial" : "");
                    saveSettings(prefsSectionName, prefsName, base64Encode(myReg));
                    saveSettings(prefsSectionName, prefsVersionName, strScriptVersion);
                    saveSettings(prefsSectionName, prefsLicVersion, licensingVersion);
                    doPrompt = false;
                } else {
                    doPrompt = true;
                }
                theLicense = checkCode(doPrompt, myReg, privateNum);
            }
            return theLicense;
        } else {
            if (haveSettings(prefsSectionName, prefsName)) {
                myReg = base64Decode(getSettings(prefsSectionName, prefsName));
                theRegistration = parseRegistration(myReg, cmd);
            } else {
                theRegistration = (offerTrial ? parseRegistration("trial", cmd) : parseRegistration("", cmd));
            }
            return (cmd == "p" ? strRegistration : "") + (cmd == "v" && theRegistration.match("Trial") ? "trial" : theRegistration);
        }
        return theLicense;
    }
    var scriptVersionStr = "KEYboard v1.2";
    var isTrial = (sx2K("v").match(/^t/) ? true : false);
    var isExpire = (sx2K("p").match(/0/) ? true : false);
    if (isTrial) {
        if (isExpire) {
            sx2K();
        } else {
            runKeyboard(thisObj);
        }
    } else {
        if (sx2K()) {
            runKeyboard(thisObj);
        }
    }
}
KEYboard_allScript(this);