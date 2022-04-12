// 文件名：BehaviorLog.lxl.js
// 文件功能：LXL平台下BehaviorLog行为监控日志
// 作者：yqs112358
// 首发平台：MineBBS

var _VER = [2,1,4];
var _CONFIG_PATH = './plugins/BehaviorLog/config.json';
var _SHOW_ERROR_INFO = false;

if(!lxl.requireVersion(0,5,3))
    throw new Error("\n\n【加载失败】LXL版本过旧！请升级你的LXL版本到0.5.3及以上再使用此插件\n");

if(lxl.requireVersion(2,1,3))
    lxl.registerPlugin("BehaviorLog", "Behavior Log for LiteLoaderBDS", _VER, {"GitHub":"https://github.com/LiteLScript-Dev/LXL-Plugins"});

var _DEFAULT_CONFIG_FILE = String.raw
`{
    "ShowLogInConsole": 1,
    "Settings": {
        "onPreJoin": {
            "LogToFile": 1,
            "LogToConsole": 1,
            "NoOutputContent": []
        },
        "onJoin": {
            "LogToFile": 1,
            "LogToConsole": 1,
            "NoOutputContent": []
        },
        "onLeft": {
            "LogToFile": 1,
            "LogToConsole": 1,
            "NoOutputContent": []
        },
        "onRespawn": {
            "LogToFile": 1,
            "LogToConsole": 1,
            "NoOutputContent": []
        },
        "onPlayerDie": {
            "LogToFile": 1,
            "LogToConsole": 1,
            "NoOutputContent": []
        },
        "onPlayerCmd": {
            "LogToFile": 1,
            "LogToConsole": 1,
            "NoOutputContent": []
        },
        "onChat": {
            "LogToFile": 1,
            "LogToConsole": 1,
            "NoOutputContent": [
                "{\"rawtext\":[{"
            ]
        },
        "onChangeDim": {
            "LogToFile": 1,
            "LogToConsole": 1,
            "NoOutputContent": []
        },
        "onJump": {
            "LogToFile": 0,
            "LogToConsole": 0,
            "NoOutputContent": []
        },
        "onSneak": {
            "LogToFile": 0,
            "LogToConsole": 0,
            "NoOutputContent": []
        },
        "onAttack": {
            "LogToFile": 1,
            "LogToConsole": 1,
            "NoOutputContent": []
        },
        "onUseItem": {
            "LogToFile": 1,
            "LogToConsole": 1,
            "NoOutputContent": []
        },
        "onUseItemOn": {
            "LogToFile": 0,
            "LogToConsole": 0,
            "NoOutputContent": []
        },
        "onTakeItem": {
            "LogToFile": 1,
            "LogToConsole": 1,
            "NoOutputContent": []
        },
        "onDropItem": {
            "LogToFile": 1,
            "LogToConsole": 1,
            "NoOutputContent": []
        },
        "onEat": {
            "LogToFile": 1,
            "LogToConsole": 1,
            "NoOutputContent": []
        },
        "onStartDestroyBlock": {
            "LogToFile": 0,
            "LogToConsole": 0,
            "NoOutputContent": []
        },
        "onDestroyBlock": {
            "LogToFile": 1,
            "LogToConsole": 1,
            "NoOutputContent": []
        },
        "onPlaceBlock": {
            "LogToFile": 1,
            "LogToConsole": 1,
            "NoOutputContent": []
        },
        "onOpenContainer": {
            "LogToFile": 1,
            "LogToConsole": 1,
            "NoOutputContent": []
        },
        "onCloseContainer": {
            "LogToFile": 1,
            "LogToConsole": 1,
            "NoOutputContent": []
        },
        "onInventoryChange": {
            "LogToFile": 0,
            "LogToConsole": 0,
            "NoOutputContent": []
        },
        "onSetArmor": {
            "LogToFile": 0,
            "LogToConsole": 0,
            "NoOutputContent": []
        },
        "onUseRespawnAnchor": {
            "LogToFile": 1,
            "LogToConsole": 1,
            "NoOutputContent": []
        },
        "onOpenContainerScreen": {
            "LogToFile": 0,
            "LogToConsole": 0,
            "NoOutputContent": []
        },
        "onMobDie": {
            "LogToFile": 1,
            "LogToConsole": 1,
            "NoOutputContent": []
        },
        "onMobHurt": {
            "LogToFile": 0,
            "LogToConsole": 0,
            "NoOutputContent": []
        },
        "onExplode": {
            "LogToFile": 1,
            "LogToConsole": 1,
            "NoOutputContent": []
        },
        "onProjectileHitEntity": {
            "LogToFile": 1,
            "LogToConsole": 1,
            "NoOutputContent": []
        },
        "onWitherBossDestroy": {
            "LogToFile": 1,
            "LogToConsole": 1,
            "NoOutputContent": []
        },
        "onRide": {
            "LogToFile": 0,
            "LogToConsole": 0,
            "NoOutputContent": []
        },
        "onStepOnPressurePlate": {
            "LogToFile": 0,
            "LogToConsole": 0,
            "NoOutputContent": []
        },
        "onBlockInteracted": {
            "LogToFile": 1,
            "LogToConsole": 1,
            "NoOutputContent": []
        },
        "onBedExplode": {
            "LogToFile": 1,
            "LogToConsole": 1,
            "NoOutputContent": []
        },
        "onRespawnAnchorExplode": {
            "LogToFile": 1,
            "LogToConsole": 1,
            "NoOutputContent": []
        },
        "onBlockExploded": {
            "LogToFile": 0,
            "LogToConsole": 0,
            "NoOutputContent": []
        },
        "onCmdBlockExecute": {
            "LogToFile": 1,
            "LogToConsole": 1,
            "NoOutputContent": []
        },
        "onContainerChange": {
            "LogToFile": 1,
            "LogToConsole": 1,
            "NoOutputContent": []
        },
        "onProjectileHitBlock": {
            "LogToFile": 0,
            "LogToConsole": 0,
            "NoOutputContent": []
        },
        "onRedStoneUpdate": {
            "LogToFile": 0,
            "LogToConsole": 0,
            "NoOutputContent": []
        },
        "onHopperPushOut": {
            "LogToFile": 0,
            "LogToConsole": 0,
            "NoOutputContent": []
        },
        "onPistonPush": {
            "LogToFile": 1,
            "LogToConsole": 1,
            "NoOutputContent": []
        },
        "onFarmLandDecay": {
            "LogToFile": 1,
            "LogToConsole": 1,
            "NoOutputContent": []
        },
        "onUseFrameBlock": {
            "LogToFile": 0,
            "LogToConsole": 0,
            "NoOutputContent": []
        },
        "onScoreChanged": {
            "LogToFile": 0,
            "LogToConsole": 0,
            "NoOutputContent": []
        },
        "onFireSpread": {
            "LogToFile": 0,
            "LogToConsole": 0,
            "NoOutputContent": []
        },
        "onConsoleCmd": {
            "LogToFile": 1,
            "LogToConsole": 0,
            "NoOutputContent": []
        }
    }
}`;

//配置文件
var confFile = data.openConfig(_CONFIG_PATH,"json",_DEFAULT_CONFIG_FILE);
var conf = JSON.parse(confFile.read());

//日志文件
function GetTodayLogPath() {
    return './logs/BehaviorLog-' + system.getTimeStr().substr(0, 10) + '.csv';
}

var logFile;
function OpenNewFile()
{
    let nowLogPath = GetTodayLogPath();

    var isNewFile = false;
    if (!file.exists(nowLogPath))
        isNewFile = true;
    
    logFile = file.open(nowLogPath,file.AppendMode);
    if(!logFile)
    {
        throw Error("日志文件打开失败！\n行为日志将无法正常工作！");
    }
    
    if(isNewFile)
        file.writeLine(nowLogPath, '\ufeff时间,维度,主体,X,Y,Z,事件,目标,x,y,z,附加信息');
}
OpenNewFile();

//定时更新文件
var lastDay = system.getTimeObj().D;
setInterval(function () {
    if (lastDay != system.getTimeObj().D) {
        //新的一天
        lastDay = system.getTimeObj().D;
        logFile.close();
        OpenNewFile();
    }
}, 30000);

//输出日志
var consoleQueue = [], fileQueue = [];
setInterval(function () {
    //File Log
    let logStr = "";
    if(fileQueue.length != 0)
    {
        try
        {
            while (fileQueue.length > 1) {
                logStr += fileQueue.shift() + "\n";
            }
            logStr += fileQueue.shift();
            logFile.writeLine(String(logStr));
        }
        catch(exception)
        {
            if(_SHOW_ERROR_INFO) throw exception;
        }
    }

    //Console Log
    logStr = "";
    if(consoleQueue.length != 0)
    {
        while (consoleQueue.length > 1) {
            logStr += consoleQueue.shift() + "\n";
        }
        logStr += consoleQueue.shift();
        if (conf.ShowLogInConsole)
            fastLog(String(logStr));
    }
}, 50);
setInterval(function(){
    try
    {
        logFile.flush();
    }
    catch(exception)
    {
        if(_SHOW_ERROR_INFO) throw exception;
    }
},5000);

function writeLog(logToFile, logToConsole, NoOutputContent, event, dim, doer, dx, dy, dz, target, tx, ty, tz, notes) {
    let logStr = system.getTimeStr() + ',' + dim + ',' + doer + ',' + dx + ',' + dy + ',' + dz
        + ',' + event + ',' + target + ',' + tx + ',' + ty + ',' + tz + ',' + notes;

    if (NoOutputContent.length != 0) {
        let no = false
        NoOutputContent.forEach(element => {
            if (logStr.indexOf(element) != -1)
            {
                no = true;
                return false;
            }
        });
        if(no) return;
    }

    if (logToFile)
        fileQueue.push(logStr);
    if (conf.ShowLogInConsole && logToConsole)
    {
        logStr = '[' + system.getTimeStr() + '][' + event + '] ';
        if(dim != '')
            logStr += '在' + dim + '  ';
        if(doer != '')
            logStr += doer;
        if(dx != '')
            logStr += ' (' + dx + ',' + dy + ',' + dz + ')';
        logStr += '  ' + event + '  ';
        if(target != '')
            logStr += target;
        if(tx != '')
            logStr += ' (' + tx + ',' + ty + ',' + tz + ')';
        logStr += '  ' + notes;

        consoleQueue.push(logStr);
    }
}

//导出接口
function writeLogExported(event,dim,doer,dx,dy,dz,target,tx,ty,tz,notes,logToConsole,logToFile)
{
    writeLog(logToFile,logToConsole,[],event,dim,doer,dx,dy,dz,target,tx,ty,tz,notes);
}
lxl.export(writeLogExported,"BehaviorLog_WriteLog");

//监控部分
var settings = conf.Settings;

//onPreJoin
if (settings.onPreJoin.LogToFile || settings.onPreJoin.LogToConsole) {
    let logToFile = settings.onPreJoin.LogToFile;
    let logToConsole = settings.onPreJoin.LogToConsole;
    let noOutputContent = settings.onPreJoin.NoOutputContent;
    mc.listen("onPreJoin", function (pl) {
        try {
            writeLog(logToFile, logToConsole, noOutputContent,
                "开始进服", '', pl.realName, '', '', '', '', '', '', '', 'xuid=' + pl.xuid);
        }
        catch (exception) {
            if(_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onJoin
if (settings.onJoin.LogToFile || settings.onJoin.LogToConsole) {
    let logToFile = settings.onJoin.LogToFile;
    let logToConsole = settings.onJoin.LogToConsole;
    let noOutputContent = settings.onJoin.NoOutputContent;
    mc.listen("onJoin", function (pl) {
        try {
            let pos = pl.pos;
            writeLog(logToFile, logToConsole, noOutputContent,
                "进入服务器", pos.dim, pl.realName, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), '', '', '', '', 'xuid=' + pl.xuid);
        }
        catch (exception) {
            if(_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onLeft
if (settings.onLeft.LogToFile || settings.onLeft.LogToConsole) {
    let logToFile = settings.onLeft.LogToFile;
    let logToConsole = settings.onLeft.LogToConsole;
    let noOutputContent = settings.onLeft.NoOutputContent;
    mc.listen("onLeft", function (pl) {
        try {
            writeLog(logToFile, logToConsole, noOutputContent,
                "离开服务器", '', pl.realName, '', '', '', '', '', '', '', '');
        }
        catch (exception) {
            if(_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onRespawn
if (settings.onRespawn.LogToFile || settings.onRespawn.LogToConsole) {
    let logToFile = settings.onRespawn.LogToFile;
    let logToConsole = settings.onRespawn.LogToConsole;
    let noOutputContent = settings.onRespawn.NoOutputContent;
    mc.listen("onRespawn", function (pl) {
        try {
            let pos = pl.pos;
            writeLog(logToFile, logToConsole, noOutputContent,
                "重生", pos.dim, pl.realName, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), '', '', '', '', '');
        }
        catch (exception) {
            if(_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onPlayerDie
if (settings.onPlayerDie.LogToFile || settings.onPlayerDie.LogToConsole) {
    let logToFile = settings.onPlayerDie.LogToFile;
    let logToConsole = settings.onPlayerDie.LogToConsole;
    let noOutputContent = settings.onPlayerDie.NoOutputContent;
    mc.listen("onPlayerDie", function (pl) {
        try {
            let pos = pl.pos;
            writeLog(logToFile, logToConsole, noOutputContent,
                "玩家死亡", pos.dim, pl.realName, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), '', '', '', '', '');
        }
        catch (exception) {
            if(_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onPlayerCmd
if (settings.onPlayerCmd.LogToFile || settings.onPlayerCmd.LogToConsole) {
    let logToFile = settings.onPlayerCmd.LogToFile;
    let logToConsole = settings.onPlayerCmd.LogToConsole;
    let noOutputContent = settings.onPlayerCmd.NoOutputContent;
    mc.listen("onPlayerCmd", function (pl, cmd) {
        try {
            let pos = pl.pos;
            writeLog(logToFile, logToConsole, noOutputContent,
                "玩家执行命令", pos.dim, pl.realName, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), cmd, '', '', '', '');
        }
        catch (exception) {
            if(_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onChat
if (settings.onChat.LogToFile || settings.onChat.LogToConsole) {
    let logToFile = settings.onChat.LogToFile;
    let logToConsole = settings.onChat.LogToConsole;
    let noOutputContent = settings.onChat.NoOutputContent;
    mc.listen("onChat", function (pl, msg) {
        try {
            let pos = pl.pos;
            writeLog(logToFile, logToConsole, noOutputContent,
                "聊天", pos.dim, pl.realName, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), msg, '', '', '', '');
        }
        catch (exception) {
            if(_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onChangeDim
if (settings.onChangeDim.LogToFile || settings.onChangeDim.LogToConsole) {
    let logToFile = settings.onChangeDim.LogToFile;
    let logToConsole = settings.onChangeDim.LogToConsole;
    let noOutputContent = settings.onChangeDim.NoOutputContent;
    mc.listen("onChangeDim", function (pl, to) {
        try {
            let dimName = "Unknown";
            if (to == 0)
                dimName = "主世界";
            else if (to == 1)
                dimName = "下界";
            else if (to == 2)
                dimName = "末地";

            let pos = pl.pos;
            writeLog(logToFile, logToConsole, noOutputContent,
                "切换维度", pos.dim, pl.realName, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), '前往' + dimName, '', '', '', '');
        }
        catch (exception) {
            if(_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onJump
if (settings.onJump.LogToFile || settings.onJump.LogToConsole) {
    let logToFile = settings.onJump.LogToFile;
    let logToConsole = settings.onJump.LogToConsole;
    let noOutputContent = settings.onJump.NoOutputContent;
    mc.listen("onJump", function (pl) {
        try {
            let pos = pl.pos;
            writeLog(logToFile, logToConsole, noOutputContent,
                "跳跃", pos.dim, pl.realName, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), '', '', '', '', '');
        }
        catch (exception) {
            if(_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onSneak
if (settings.onSneak.LogToFile || settings.onSneak.LogToConsole) {
    let logToFile = settings.onSneak.LogToFile;
    let logToConsole = settings.onSneak.LogToConsole;
    let noOutputContent = settings.onSneak.NoOutputContent;
    mc.listen("onSneak", function (pl, isSneaking) {
        try {
            let pos = pl.pos;
            if (isSneaking)
                writeLog(logToFile, logToConsole, noOutputContent,
                    "潜行", pos.dim, pl.realName, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), '', '', '', '', '');
        }
        catch (exception) {
            if(_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onAttack
if (settings.onAttack.LogToFile || settings.onAttack.LogToConsole) {
    let logToFile = settings.onAttack.LogToFile;
    let logToConsole = settings.onAttack.LogToConsole;
    let noOutputContent = settings.onAttack.NoOutputContent;
    mc.listen("onAttack", function (pl, ac) {
        try {
            let pos = pl.pos;
            let acPos = ac.pos;
            writeLog(logToFile, logToConsole, noOutputContent,
                "攻击", pos.dim, pl.realName, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), ac.name, acPos.x.toFixed(0), acPos.y.toFixed(0), acPos.z.toFixed(0), `使用物品：${pl.getHand().name} 类型：${pl.getHand().type}`);
        }
        catch (exception) {
            if(_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onUseItem
if (settings.onUseItem.LogToFile || settings.onUseItem.LogToConsole) {
    let logToFile = settings.onUseItem.LogToFile;
    let logToConsole = settings.onUseItem.LogToConsole;
    let noOutputContent = settings.onUseItem.NoOutputContent;
    mc.listen("onUseItem", function (pl, it) {
        try {
            let pos = pl.pos;
            writeLog(logToFile, logToConsole, noOutputContent,
                "使用物品", pos.dim, pl.realName, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), it.name, '', '', '', `类型：${it.type}`);
        }
        catch (exception) {
            if(_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onUseItemOn
if (settings.onUseItemOn.LogToFile || settings.onUseItemOn.LogToConsole) {
    let logToFile = settings.onUseItemOn.LogToFile;
    let logToConsole = settings.onUseItemOn.LogToConsole;
    let noOutputContent = settings.onUseItemOn.NoOutputContent;
    mc.listen("onUseItemOn", function (pl, it, bl) {
        try {
            //防抖
            if(pl.getExtraData("_BEHAVIOR_LOG_PLACE_BLOCK"))
                return;

            let pos = pl.pos;
            let blPos = bl.pos;
            writeLog(logToFile, logToConsole, noOutputContent,
                "使用物品点击方块", pos.dim, pl.realName, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), bl.name, blPos.x.toFixed(0), blPos.y.toFixed(0), blPos.z.toFixed(0), `使用物品：${it.name} 类型：${it.type}`);
        }
        catch (exception) {
            if(_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onTakeItem
if (settings.onTakeItem.LogToFile || settings.onTakeItem.LogToConsole) {
    let logToFile = settings.onTakeItem.LogToFile;
    let logToConsole = settings.onTakeItem.LogToConsole;
    let noOutputContent = settings.onTakeItem.NoOutputContent;
    mc.listen("onTakeItem", function (pl, en, it) {
        try {
            let enPos = en.pos;
            let pos = pl.pos;
            writeLog(logToFile, logToConsole, noOutputContent,
                "捡起物品", pos.dim, pl.realName, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), it.name, enPos.x.toFixed(0), enPos.y.toFixed(0), enPos.z.toFixed(0), `${it.count}个`);
        }
        catch (exception) {
            if(_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onDropItem
if (settings.onDropItem.LogToFile || settings.onDropItem.LogToConsole) {
    let logToFile = settings.onDropItem.LogToFile;
    let logToConsole = settings.onDropItem.LogToConsole;
    let noOutputContent = settings.onDropItem.NoOutputContent;
    mc.listen("onDropItem", function (pl, it) {
        try {
            let pos = pl.pos;
            writeLog(logToFile, logToConsole, noOutputContent,
                "丢出物品", pos.dim, pl.realName, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), it.name, '', '', '', `${it.count}个`);
        }
        catch (exception) {
            if(_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onEat
if (settings.onEat.LogToFile || settings.onEat.LogToConsole) {
    let logToFile = settings.onEat.LogToFile;
    let logToConsole = settings.onEat.LogToConsole;
    let noOutputContent = settings.onEat.NoOutputContent;
    mc.listen("onEat", function (pl, it) {
        try {
            let pos = pl.pos;
            writeLog(logToFile, logToConsole, noOutputContent,
                "食用食物", pos.dim, pl.realName, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), it.name, '', '', '', '');
        }
        catch (exception) {
            if(_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onStartDestroyBlock
if (settings.onStartDestroyBlock.LogToFile || settings.onStartDestroyBlock.LogToConsole) {
    let logToFile = settings.onStartDestroyBlock.LogToFile;
    let logToConsole = settings.onStartDestroyBlock.LogToConsole;
    let noOutputContent = settings.onStartDestroyBlock.NoOutputContent;
    mc.listen("onStartDestroyBlock", function (pl, bl) {
        try {
            let blPos = bl.pos;
            let pos = pl.pos;
            writeLog(logToFile, logToConsole, noOutputContent,
                "开始破坏方块", pos.dim, pl.realName, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), bl.name, blPos.x.toFixed(0), blPos.y.toFixed(0), blPos.z.toFixed(0), '');
        }
        catch (exception) {
            if(_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onDestroyBlock
if (settings.onDestroyBlock.LogToFile || settings.onDestroyBlock.LogToConsole) {
    let logToFile = settings.onDestroyBlock.LogToFile;
    let logToConsole = settings.onDestroyBlock.LogToConsole;
    let noOutputContent = settings.onDestroyBlock.NoOutputContent;
    mc.listen("onDestroyBlock", function (pl, bl) {
        try {
            let blPos = bl.pos;
            let pos = pl.pos;
            writeLog(logToFile, logToConsole, noOutputContent,
                "破坏方块", pos.dim, pl.realName, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), bl.name, blPos.x.toFixed(0), blPos.y.toFixed(0), blPos.z.toFixed(0), '');
        }
        catch (exception) {
            if(_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onPlaceBlock
if (settings.onPlaceBlock.LogToFile || settings.onPlaceBlock.LogToConsole) {
    let logToFile = settings.onPlaceBlock.LogToFile;
    let logToConsole = settings.onPlaceBlock.LogToConsole;
    let noOutputContent = settings.onPlaceBlock.NoOutputContent;
    mc.listen("onPlaceBlock", function (pl, bl) {
        try {
            //防抖
            if(pl.getExtraData("_BEHAVIOR_LOG_PLACE_BLOCK"))
                return;
            else
            {
                pl.setExtraData("_BEHAVIOR_LOG_PLACE_BLOCK",true);
                setTimeout(function(){pl.setExtraData("_BEHAVIOR_LOG_PLACE_BLOCK",null);},100);
            }

            let blPos = bl.pos;
            let pos = pl.pos;
            writeLog(logToFile, logToConsole, noOutputContent,
                "放置方块", pos.dim, pl.realName, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), bl.name, blPos.x.toFixed(0), blPos.y.toFixed(0), blPos.z.toFixed(0), '');
        }
        catch (exception) {
            if(_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onOpenContainer
if (settings.onOpenContainer.LogToFile || settings.onOpenContainer.LogToConsole) {
    let logToFile = settings.onOpenContainer.LogToFile;
    let logToConsole = settings.onOpenContainer.LogToConsole;
    let noOutputContent = settings.onOpenContainer.NoOutputContent;
    mc.listen("onOpenContainer", function (pl, bl) {
        try {
            let blPos = bl.pos;
            let pos = pl.pos;
            writeLog(logToFile, logToConsole, noOutputContent,
                "打开容器", pos.dim, pl.realName, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), bl.name, blPos.x.toFixed(0), blPos.y.toFixed(0), blPos.z.toFixed(0), '');
        }
        catch (exception) {
            if(_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onCloseContainer
if (settings.onCloseContainer.LogToFile || settings.onCloseContainer.LogToConsole) {
    let logToFile = settings.onCloseContainer.LogToFile;
    let logToConsole = settings.onCloseContainer.LogToConsole;
    let noOutputContent = settings.onCloseContainer.NoOutputContent;
    mc.listen("onCloseContainer", function (pl, bl) {
        try {
            let blPos = bl.pos;
            let pos = pl.pos;
            writeLog(logToFile, logToConsole, noOutputContent,
                "关闭容器", pos.dim, pl.realName, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), bl.name, blPos.x.toFixed(0), blPos.y.toFixed(0), blPos.z.toFixed(0), '');
        }
        catch (exception) {
            if(_SHOW_ERROR_INFO) throw exception;
        }
    });
}

////////////////////////// 细化修改 //////////////////////////
//onInventoryChange
if (settings.onInventoryChange.LogToFile || settings.onInventoryChange.LogToConsole) {
    let logToFile = settings.onInventoryChange.LogToFile;
    let logToConsole = settings.onInventoryChange.LogToConsole;
    let noOutputContent = settings.onInventoryChange.NoOutputContent;
    mc.listen("onInventoryChange", function (pl, slotNum, oldItem, newItem) {
        try {
            if (pl.getExtraData("_BEHAVIOR_LOG_PLAYER_IS_JOINING_SERVER"))
                return;

            let pos = pl.pos;
            if (newItem.isNull())
                writeLog(logToFile, logToConsole, noOutputContent,
                    "物品栏 取出物品", pos.dim, pl.realName, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), oldItem.name, '', '', '', `${oldItem.count}个 在第${slotNum}号槽`);
            else
                writeLog(logToFile, logToConsole, noOutputContent,
                    "物品栏 放入物品", pos.dim, pl.realName, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), newItem.name, '', '', '', `${newItem.count}个 在第${slotNum}号槽`);
        }
        catch (exception) {
            if(_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onSetArmor
if (settings.onSetArmor.LogToFile || settings.onSetArmor.LogToConsole) {
    let logToFile = settings.onSetArmor.LogToFile;
    let logToConsole = settings.onSetArmor.LogToConsole;
    let noOutputContent = settings.onSetArmor.NoOutputContent;
    mc.listen("onSetArmor", function (pl, slotNum, newItem) {
        try {
            if (pl.getExtraData("_BEHAVIOR_LOG_PLAYER_IS_JOINING_SERVER"))
                return;

            let pos = pl.pos;
            if (newItem.isNull())
                writeLog(logToFile, logToConsole, noOutputContent,
                    "盔甲栏 取出物品", pos.dim, pl.realName, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), '', '', '', '', `在第${slotNum}号槽`);
            else
                writeLog(logToFile, logToConsole, noOutputContent,
                    "盔甲栏 放入物品", pos.dim, pl.realName, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), newItem.name, '', '', '', `${newItem.count}个 在第${slotNum}号槽`);
        }
        catch (exception) {
            if(_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onUseRespawnAnchor
if (settings.onUseRespawnAnchor.LogToFile || settings.onUseRespawnAnchor.LogToConsole) {
    let logToFile = settings.onUseRespawnAnchor.LogToFile;
    let logToConsole = settings.onUseRespawnAnchor.LogToConsole;
    let noOutputContent = settings.onUseRespawnAnchor.NoOutputContent;
    mc.listen("onUseRespawnAnchor", function (pl, blPos) {
        try {
            let pos = pl.pos;
            writeLog(logToFile, logToConsole, noOutputContent,
                "使用重生锚", pos.dim, pl.realName, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), 'minecraft:respawn_anchor', blPos.x.toFixed(0), blPos.y.toFixed(0), blPos.z.toFixed(0), '');
        }
        catch (exception) {
            if(_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onOpenContainerScreen
if (settings.onOpenContainerScreen.LogToFile || settings.onOpenContainerScreen.LogToConsole) {
    let logToFile = settings.onOpenContainerScreen.LogToFile;
    let logToConsole = settings.onOpenContainerScreen.LogToConsole;
    let noOutputContent = settings.onOpenContainerScreen.NoOutputContent;
    mc.listen("onOpenContainerScreen", function (pl) {
        try {
            let pos = pl.pos;
            writeLog(logToFile, logToConsole, noOutputContent,
                "打开容器UI", pos.dim, pl.realName, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), '', '', '', '', '');
        }
        catch (exception) {
            if(_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onMobDie
if (settings.onMobDie.LogToFile || settings.onMobDie.LogToConsole) {
    let logToFile = settings.onMobDie.LogToFile;
    let logToConsole = settings.onMobDie.LogToConsole;
    let noOutputContent = settings.onMobDie.NoOutputContent;
    mc.listen("onMobDie", function (mob, source) {
        try {
            if(mob.type != "minecraft:player")
            {
                let pos = mob.pos;
                writeLog(logToFile, logToConsole, noOutputContent,
                    "生物死亡", pos.dim, mob.name, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), '', '', '', '', `由于${source.name}的攻击`);
            }
        }
        catch (exception) {
            if(_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onMobHurt
if (settings.onMobHurt.LogToFile || settings.onMobHurt.LogToConsole) {
    let logToFile = settings.onMobHurt.LogToFile;
    let logToConsole = settings.onMobHurt.LogToConsole;
    let noOutputContent = settings.onMobHurt.NoOutputContent;
    mc.listen("onMobHurt", function (mob, source, damage) {
        try {
            let pos = mob.pos;
            writeLog(logToFile, logToConsole, noOutputContent,
                "生物受伤", pos.dim, mob.name, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), '', '', '', '', `受到来自${source.name}的${damage}点伤害`);
        }
        catch (exception) {
            if(_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onExplode
if (settings.onExplode.LogToFile || settings.onExplode.LogToConsole) {
    let logToFile = settings.onExplode.LogToFile;
    let logToConsole = settings.onExplode.LogToConsole;
    let noOutputContent = settings.onExplode.NoOutputContent;
    mc.listen("onExplode", function (source, pos) {
        try {
            writeLog(logToFile, logToConsole, noOutputContent,
                "爆炸", pos.dim, source.name, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), '', '', '', '', '');
        }
        catch (exception) {
            if(_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onProjectileHitEntity
if (settings.onProjectileHitEntity.LogToFile || settings.onProjectileHitEntity.LogToConsole) {
    let logToFile = settings.onProjectileHitEntity.LogToFile;
    let logToConsole = settings.onProjectileHitEntity.LogToConsole;
    let noOutputContent = settings.onProjectileHitEntity.NoOutputContent;
    mc.listen("onProjectileHitEntity", function (entity, source) {
        try {
            let pos = entity.pos;
            writeLog(logToFile, logToConsole, noOutputContent,
                "弹射物击中", pos.dim, source.name, '', '', '', entity.name, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), '');
        }
        catch (exception) {
            if(_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onWitherBossDestroy
if (settings.onWitherBossDestroy.LogToFile || settings.onWitherBossDestroy.LogToConsole) {
    let logToFile = settings.onWitherBossDestroy.LogToFile;
    let logToConsole = settings.onWitherBossDestroy.LogToConsole;
    let noOutputContent = settings.onWitherBossDestroy.NoOutputContent;
    mc.listen("onWitherBossDestroy", function (witherBoss, AAbb, aaBB) {
        try {
            let pos = witherBoss.pos;
            writeLog(logToFile, logToConsole, noOutputContent,
                "凋零破坏", pos.dim, witherBoss.name, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), '', '', '', '', `破坏从${Pos2String(AAbb)}到${Pos2String(aaBB)}的方块`);
        }
        catch (exception) {
            if(_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onRide
if (settings.onRide.LogToFile || settings.onRide.LogToConsole) {
    let logToFile = settings.onRide.LogToFile;
    let logToConsole = settings.onRide.LogToConsole;
    let noOutputContent = settings.onRide.NoOutputContent;
    mc.listen("onRide", function (ac1, ac2) {
        try {
            let pos = ac1.pos;
            let pos2 = ac2.pos;
            writeLog(logToFile, logToConsole, noOutputContent,
                "生物骑乘", pos.dim, ac1.name, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), ac2.name, pos2.x.toFixed(0), pos2.y.toFixed(0), pos2.z.toFixed(0), '');
        }
        catch (exception) {
            if(_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onStepOnPressurePlate
if (settings.onStepOnPressurePlate.LogToFile || settings.onStepOnPressurePlate.LogToConsole) {
    let logToFile = settings.onStepOnPressurePlate.LogToFile;
    let logToConsole = settings.onStepOnPressurePlate.LogToConsole;
    let noOutputContent = settings.onStepOnPressurePlate.NoOutputContent;
    mc.listen("onStepOnPressurePlate", function (ac, plate) {
        try {
            let pos = ac.pos;
            let blPos = plate.pos;
            writeLog(logToFile, logToConsole, noOutputContent,
                "踩踏压力板", pos.dim, ac.name, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), plate.name, blPos.x.toFixed(0), blPos.y.toFixed(0), blPos.z.toFixed(0), '');
        }
        catch (exception) {
            if(_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onBlockInteracted
if (settings.onBlockInteracted.LogToFile || settings.onBlockInteracted.LogToConsole) {
    let logToFile = settings.onBlockInteracted.LogToFile;
    let logToConsole = settings.onBlockInteracted.LogToConsole;
    let noOutputContent = settings.onBlockInteracted.NoOutputContent;
    mc.listen("onBlockInteracted", function (pl, bl) {
        try {
            let pos = pl.pos;
            let blPos = bl.pos;
            writeLog(logToFile, logToConsole, noOutputContent,
                "方块接受玩家互动", pos.dim, pl.realName, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), bl.name, blPos.x.toFixed(0), blPos.y.toFixed(0), blPos.z.toFixed(0), '');
        }
        catch (exception) {
            if(_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onBedExplode
if (settings.onBedExplode.LogToFile || settings.onBedExplode.LogToConsole) {
    let logToFile = settings.onBedExplode.LogToFile;
    let logToConsole = settings.onBedExplode.LogToConsole;
    let noOutputContent = settings.onBedExplode.NoOutputContent;
    mc.listen("onBedExplode", function (pos) {
        try {
            writeLog(logToFile, logToConsole, noOutputContent,
                "床爆炸", pos.dim, "minecraft:bed", pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), '', '', '', '', '');
        }
        catch (exception) {
            if(_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onRespawnAnchorExplode
if (settings.onRespawnAnchorExplode.LogToFile || settings.onRespawnAnchorExplode.LogToConsole) {
    let logToFile = settings.onRespawnAnchorExplode.LogToFile;
    let logToConsole = settings.onRespawnAnchorExplode.LogToConsole;
    let noOutputContent = settings.onRespawnAnchorExplode.NoOutputContent;
    mc.listen("onRespawnAnchorExplode", function (pos, pl) {
        try {
            writeLog(logToFile, logToConsole, noOutputContent,
                "重生锚爆炸", pos.dim, "minecraft:respawn_anchor", pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), '', '', '', '', `由${pl.realName}引起`);
        }
        catch (exception) {
            if(_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onBlockExploded
if (settings.onBlockExploded.LogToFile || settings.onBlockExploded.LogToConsole) {
    let logToFile = settings.onBlockExploded.LogToFile;
    let logToConsole = settings.onBlockExploded.LogToConsole;
    let noOutputContent = settings.onBlockExploded.NoOutputContent;
    mc.listen("onBlockExploded", function (bl, source) {
        try {
            let pos = bl.pos;
            writeLog(logToFile, logToConsole, noOutputContent,
                "方块被爆炸破坏", pos.dim, bl.name, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), '', '', '', '', `由${source.name}引起的爆炸`);
        }
        catch (exception) {
            if(_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onCmdBlockExecute
if (settings.onCmdBlockExecute.LogToFile || settings.onCmdBlockExecute.LogToConsole) {
    let logToFile = settings.onCmdBlockExecute.LogToFile;
    let logToConsole = settings.onCmdBlockExecute.LogToConsole;
    let noOutputContent = settings.onCmdBlockExecute.NoOutputContent;
    mc.listen("onCmdBlockExecute", function (cmd, pos) {
        try {
            writeLog(logToFile, logToConsole, noOutputContent,
                "命令方块执行", pos.dim, "minecraft:command_block", pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), cmd, '', '', '', '');
        }
        catch (exception) {
            if(_SHOW_ERROR_INFO) throw exception;
        }
    });
}

////////////////////////// 细化修改 //////////////////////////
//onContainerChange
if (settings.onContainerChange.LogToFile || settings.onContainerChange.LogToConsole) {
    let logToFile = settings.onContainerChange.LogToFile;
    let logToConsole = settings.onContainerChange.LogToConsole;
    let noOutputContent = settings.onContainerChange.NoOutputContent;
    mc.listen("onContainerChange", function (pl, bl, slotNum, oldItem, newItem) {
        try {
            let pos = pl.pos;
            let blPos = bl.pos;
            if (newItem.isNull())
                writeLog(logToFile, logToConsole, noOutputContent,
                    "从容器取出物品", pos.dim, pl.realName, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), bl.name, blPos.x.toFixed(0), blPos.y.toFixed(0), blPos.z.toFixed(0), `从第${slotNum}号槽 取出${oldItem.count}个 ${oldItem.name}`);
            else
                writeLog(logToFile, logToConsole, noOutputContent,
                    "向容器放入物品", pos.dim, pl.realName, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), bl.name, blPos.x.toFixed(0), blPos.y.toFixed(0), blPos.z.toFixed(0), `向第${slotNum}号槽 放入${newItem.count}个 ${newItem.name}`);
        }
        catch (exception) {
            if(_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onProjectileHitBlock
if (settings.onProjectileHitBlock.LogToFile || settings.onProjectileHitBlock.LogToConsole) {
    let logToFile = settings.onProjectileHitBlock.LogToFile;
    let logToConsole = settings.onProjectileHitBlock.LogToConsole;
    let noOutputContent = settings.onProjectileHitBlock.NoOutputContent;
    mc.listen("onProjectileHitBlock", function (bl, source) {
        try {
            let pos = bl.pos;
            writeLog(logToFile, logToConsole, noOutputContent,
                "弹射物击中", pos.dim, source.name, '', '', '', bl.name, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), '');
        }
        catch (exception) {
            if(_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onRedStoneUpdate
if (settings.onRedStoneUpdate.LogToFile || settings.onRedStoneUpdate.LogToConsole) {
    let logToFile = settings.onRedStoneUpdate.LogToFile;
    let logToConsole = settings.onRedStoneUpdate.LogToConsole;
    let noOutputContent = settings.onRedStoneUpdate.NoOutputContent;
    mc.listen("onRedStoneUpdate", function (bl, level, isActive) {
        try {
            let pos = bl.pos;
            writeLog(logToFile, logToConsole, noOutputContent,
                "红石更新", pos.dim, bl.name, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), '', '', '', '', isActive ? '激活 红石等级' + level : '熄灭');
        }
        catch (exception) {
            if(_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onHopperPushOut
if (settings.onHopperPushOut.LogToFile || settings.onHopperPushOut.LogToConsole) {
    let logToFile = settings.onHopperPushOut.LogToFile;
    let logToConsole = settings.onHopperPushOut.LogToConsole;
    let noOutputContent = settings.onHopperPushOut.NoOutputContent;
    mc.listen("onHopperPushOut", function (pos) {
        try {
            writeLog(logToFile, logToConsole, noOutputContent,
                "漏斗（矿车）输出物品", pos.dim, "Hopper", pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), '', '', '', '', '');
        }
        catch (exception) {
            if(_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onPistonPush
if (settings.onPistonPush.LogToFile || settings.onPistonPush.LogToConsole) {
    let logToFile = settings.onPistonPush.LogToFile;
    let logToConsole = settings.onPistonPush.LogToConsole;
    let noOutputContent = settings.onPistonPush.NoOutputContent;
    mc.listen("onPistonPush", function (pos, bl) {
        try {
            let pis = mc.getBlock(pos);
            let blPos = bl.pos;
            writeLog(logToFile, logToConsole, noOutputContent,
                "活塞推动", pos.dim, pis.name, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), bl.name, blPos.x.toFixed(0), blPos.y.toFixed(0), blPos.z.toFixed(0), '');
        }
        catch (exception) {
            if(_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onFarmLandDecay
if (settings.onFarmLandDecay.LogToFile || settings.onFarmLandDecay.LogToConsole) {
    let logToFile = settings.onFarmLandDecay.LogToFile;
    let logToConsole = settings.onFarmLandDecay.LogToConsole;
    let noOutputContent = settings.onFarmLandDecay.NoOutputContent;
    mc.listen("onFarmLandDecay", function (blPos, ac) {
        try {
            let pos = ac.pos;
            writeLog(logToFile, logToConsole, noOutputContent,
                "破坏耕地", pos.dim, ac.name, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), 'minecraft:farm_land', blPos.x.toFixed(0), blPos.y.toFixed(0), blPos.z.toFixed(0), '');
        }
        catch (exception) {
            if(_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onUseFrameBlock
if (settings.onUseFrameBlock.LogToFile || settings.onUseFrameBlock.LogToConsole) {
    let logToFile = settings.onUseFrameBlock.LogToFile;
    let logToConsole = settings.onUseFrameBlock.LogToConsole;
    let noOutputContent = settings.onUseFrameBlock.NoOutputContent;
    mc.listen("onUseFrameBlock", function (pl, bl) {
        try {
            let pos = pl.pos;
            let blPos = bl.pos;
            writeLog(logToFile, logToConsole, noOutputContent,
                "操作物品展示框", pos.dim, pl.realName, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), bl.name, blPos.x.toFixed(0), blPos.y.toFixed(0), blPos.z.toFixed(0), '');
        }
        catch (exception) {
            if(_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onScoreChanged
if (settings.onScoreChanged.LogToFile || settings.onScoreChanged.LogToConsole) {
    let logToFile = settings.onScoreChanged.LogToFile;
    let logToConsole = settings.onScoreChanged.LogToConsole;
    let noOutputContent = settings.onScoreChanged.NoOutputContent;
    mc.listen("onScoreChanged", function (pl, num, name, disName) {
        try {
            let pos = pl.pos;
            writeLog(logToFile, logToConsole, noOutputContent,
                "计分板数值改变", pos.dim, pl.realName, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), '', '', '', '', `计分项${name}被改变为${num}`);
        }
        catch (exception) {
            if(_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onFireSpread
if (settings.onFireSpread.LogToFile || settings.onFireSpread.LogToConsole) {
    let logToFile = settings.onFireSpread.LogToFile;
    let logToConsole = settings.onFireSpread.LogToConsole;
    let noOutputContent = settings.onFireSpread.NoOutputContent;
    mc.listen("onFireSpread", function (pos) {
        try {
            if(pos.dimid != 1)
                writeLog(logToFile, logToConsole, noOutputContent,
                    "火焰蔓延", pos.dim, "minecraft:fire", pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), '', '', '', '', '');
        }
        catch (exception) {
            if(_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onConsoleCmd
if (settings.onConsoleCmd.LogToFile || settings.onConsoleCmd.LogToConsole) {
    let logToFile = settings.onConsoleCmd.LogToFile;
    let logToConsole = settings.onConsoleCmd.LogToConsole;
    let noOutputContent = settings.onConsoleCmd.NoOutputContent;
    mc.listen("onConsoleCmd", function (cmd) {
        try {
            writeLog(logToFile, logToConsole, noOutputContent,
                "执行后台命令", '', '', '', '', '', cmd, '', '', '', '');
        }
        catch (exception) {
            if(_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//特殊记录
mc.listen("onPreJoin", function (pl) {
    pl.setExtraData("_BEHAVIOR_LOG_PLAYER_IS_JOINING_SERVER", true);
});

mc.listen("onJoin", function (pl) {
    pl.setExtraData("_BEHAVIOR_LOG_PLAYER_IS_JOINING_SERVER", false);
});

//实用
function Pos2String(pos) {
    return `(${pos.x.toFixed(0)},${pos.y.toFixed(0)},${pos.z.toFixed(0)})`;
}

//清理
delete settings;

//注册临时关闭
mc.regConsoleCmd("behaviorlog","Contorl BehaviorLog",function(args){
    if(args[0] == 'hide')
    {
        if(conf.ShowLogInConsole)
            conf.ShowLogInConsole = false;
        log("控制台行为日志输出已关闭");
    }
    else if(args[0] == 'show')
    {
        if(!conf.ShowLogInConsole)
            conf.ShowLogInConsole = true;
        log("控制台行为日志输出已开启");
    }
    else
        log("此操作不存在！");
});

log('BehaviorLog行为监控日志-已装载  当前版本：' + _VER[0] + "." + _VER[1] + "." + _VER[2]);
log('【配置文件】位于 ' + _CONFIG_PATH);
log('作者：yqs112358  发布平台：MineBBS');
log('联系作者可前往MineBBS论坛');