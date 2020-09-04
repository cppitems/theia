export function render(rawcode: any) {
    var skiplines = rawcode.split('\n').filter(function (line: any) {

        if (line.match(/\/\/\/\s*$/)) { return false; }
        else { return true; };
    }).join('\n');

    var replSE = skiplines.
        replace(/</gm, "&lt;");

    var skipbeforeTriple = replSE.
        // insert dots: "  xxxx /// YYY" -> "  YYY"  
        replace(/^(\s*)(.*\/\/\/\s)(.*)$/gm, "$1$3");

    var tmp = skipbeforeTriple;
    for (var j = 0; j < 10; j++) {
        var num = j.toString();
        var regex2 = new RegExp('\\/\\*b([' + num + '])\\*\\/\\s(.{' + num + '})', "gm");
        tmp = tmp.replace(regex2, '<span class="pmans-b">$2</span>')
    }
    for (var j = 0; j < 10; j++) {
        var num = j.toString();
        var regex2 = new RegExp('\\/\\*f([' + num + '])\\*\\/\\s(.{' + num + '})', "gm");
        tmp = tmp.replace(regex2, '<span class="pmans-f">$2</span>')
    }

    var colors = tmp.
        replace(/\/\*b\*\/\s(.*?)\s\/\*x\*\//gm, '<span class="pmans-b">$1</span>').
        replace(/\/\*f\*\/\s(.*?)\s\/\*x\*\//gm, '<span class="pmans-f">$1</span>');

    var filename = colors.
        replace(/\/\*\sfile:\s(.[^\/*\*\/]*)\s\*\//gm, '<span class="pmans-filename">$1</span>');

    var compileCommand = filename.
        replace(/\/\*\scompile:\s(.[^\/*\*\/]*)\s\*\//gm, '<span class="pmans-compile">$1</span>');

    var colorComments = compileCommand.
        replace(/\/\/(.*)$/gm, '<span class="pmans-comment">//$1</span>');

    return colorComments;
}
