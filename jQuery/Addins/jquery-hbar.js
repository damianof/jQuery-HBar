(function ($) {
	$.widget("ui.hbar", {
		options: {
			width: 180,
			height: 15,
			minValue: -10,
			maxValue: 10,
			value: '3%',
			numValue: 3,
			displayValue: true,
			centerAligned: true
		},
		_create: function () {
			var self = this,
					options = this.options,
					minValue = Number(options.minValue),
					maxValue = Number(options.maxValue),
					numValue = options.numValue,
					range = maxValue - minValue,
					displayValue = options.displayValue,
					thisElement = this.element.hide();

			//var colorArray = '<div><a id="ca0">F5D000</a><a id="ca1">F5D000</a><a id="ca2">F5D000</a><a id="ca3">F5D000</a><a id="ca4">F5D000</a><a id="ca5">F5D000</a><a id="ca6">F5D000</a><a id="ca7">F5D000</a><a id="ca8">F5D000</a><a id="ca9">F5D000</a><a id="ca10">F5D000</a><a id="ca11">F5D000</a><a id="ca12">F5D000</a><a id="ca13">F5D000</a><a id="ca14">F5D000</a><a id="ca15">F5D000</a><a id="ca16">F5D000</a><a id="ca17">F5D000</a><a id="ca18">F5D000</a><a id="ca19">F5D000</a><a id="ca20">F5D000</a><a id="ca21">F5D000</a><a id="ca22">F5D000</a><a id="ca23">F5D000</a><a id="ca24">F5D000</a><a id="ca25">F5D000</a><a id="ca26">F5D000</a><a id="ca27">F5D000</a><a id="ca28">F5D000</a><a id="ca29">F5D000</a><a id="ca30">F5D000</a><a id="ca31">F5D000</a><a id="ca32">F5D000</a><a id="ca33">F5D000</a><a id="ca34">F5D000</a><a id="ca35">F5D000</a><a id="ca36">F5D000</a><a id="ca37">F5D000</a><a id="ca38">F5D000</a><a id="ca39">F5D000</a><a id="ca40">F5D000</a><a id="ca41">F5D000</a><a id="ca42">F5D000</a><a id="ca43">F5D000</a><a id="ca44">F5D000</a><a id="ca45">F5D000</a><a id="ca46">F4D000</a><a id="ca47">F3CF00</a><a id="ca48">F2CF00</a><a id="ca49">F1CF00</a><a id="ca50">EFCE00</a><a id="ca51">EECE00</a><a id="ca52">EDCE00</a><a id="ca53">ECCD00</a><a id="ca54">EBCD00</a><a id="ca55">E9CC00</a><a id="ca56">E8CC00</a><a id="ca57">E7CB00</a><a id="ca58">E5CB00</a><a id="ca59">E4CA00</a><a id="ca60">E2CA00</a><a id="ca61">E1C900</a><a id="ca62">DFC900</a><a id="ca63">DEC800</a><a id="ca64">DCC800</a><a id="ca65">DBC700</a><a id="ca66">D9C700</a><a id="ca67">D7C600</a><a id="ca68">D6C600</a><a id="ca69">D4C500</a><a id="ca70">D2C500</a><a id="ca71">D0C400</a><a id="ca72">CFC300</a><a id="ca73">CDC300</a><a id="ca74">CBC200</a><a id="ca75">C9C200</a><a id="ca76">C7C100</a><a id="ca77">C5C000</a><a id="ca78">C3C000</a><a id="ca79">C1BF00</a><a id="ca80">BFBE00</a><a id="ca81">BDBE00</a><a id="ca82">BBBD00</a><a id="ca83">B9BC00</a><a id="ca84">B7BC00</a><a id="ca85">B5BB00</a><a id="ca86">B3BA00</a><a id="ca87">B1BA00</a><a id="ca88">AFB900</a><a id="ca89">ADB800</a><a id="ca90">ABB700</a><a id="ca91">A8B700</a><a id="ca92">A6B600</a><a id="ca93">A4B500</a><a id="ca94">A2B500</a><a id="ca95">A0B400</a><a id="ca96">9DB300</a><a id="ca97">9BB200</a><a id="ca98">99B200</a><a id="ca99">97B100</a><a id="ca100">94B000</a><a id="ca101">92AF00</a><a id="ca102">90AF00</a><a id="ca103">8EAE00</a><a id="ca104">8BAD00</a><a id="ca105">89AC00</a><a id="ca106">87AC00</a><a id="ca107">85AB00</a><a id="ca108">82AA00</a><a id="ca109">80A900</a><a id="ca110">7EA900</a><a id="ca111">7BA800</a><a id="ca112">79A700</a><a id="ca113">77A600</a><a id="ca114">74A600</a><a id="ca115">72A500</a><a id="ca116">70A400</a><a id="ca117">6EA300</a><a id="ca118">6BA300</a><a id="ca119">69A200</a><a id="ca120">67A100</a><a id="ca121">64A000</a><a id="ca122">62A000</a><a id="ca123">609F00</a><a id="ca124">5E9E00</a><a id="ca125">5B9D00</a><a id="ca126">599D00</a><a id="ca127">579C00</a><a id="ca128">559B00</a><a id="ca129">539A00</a><a id="ca130">509A00</a><a id="ca131">4E9900</a><a id="ca132">4C9800</a><a id="ca133">4A9700</a><a id="ca134">489700</a><a id="ca135">469600</a><a id="ca136">439500</a><a id="ca137">419500</a><a id="ca138">3F9400</a><a id="ca139">3D9300</a><a id="ca140">3B9300</a><a id="ca141">399200</a><a id="ca142">379100</a><a id="ca143">359100</a><a id="ca144">339000</a><a id="ca145">318F00</a><a id="ca146">2F8F00</a><a id="ca147">2D8E00</a><a id="ca148">2B8D00</a><a id="ca149">2A8D00</a><a id="ca150">288C00</a><a id="ca151">268C00</a><a id="ca152">248B00</a><a id="ca153">228A00</a><a id="ca154">218A00</a><a id="ca155">1F8900</a><a id="ca156">1D8900</a><a id="ca157">1B8800</a><a id="ca158">1A8800</a><a id="ca159">188700</a><a id="ca160">178700</a><a id="ca161">158600</a><a id="ca162">148500</a><a id="ca163">128500</a><a id="ca164">118500</a><a id="ca165">0F8400</a><a id="ca166">0E8400</a><a id="ca167">0D8300</a><a id="ca168">0B8300</a><a id="ca169">0A8200</a><a id="ca170">098200</a><a id="ca171">078100</a><a id="ca172">068100</a><a id="ca173">058100</a><a id="ca174">048000</a><a id="ca175">038000</a><a id="ca176">028000</a><a id="ca177">017F00</a><a id="ca178">017F00</a><a id="ca179">017F00</a></div>';

			var container = $('<div class="hbarcontainer" style="position:relative;width:' + options.width + 'px;height:' + options.height + 'px;border:solid 0px blue"></div>')
					.insertAfter(thisElement)
					;

			//(I33-3)*180/(15-3)

			var relValue = 0;
			if (options.centerAligned) {
				relValue = Math.round(((numValue) * (options.width / 2)) / range);
			}
			else {
				relValue = Math.round(((numValue) * (options.width)) / range);
			}

			if (relValue < 0) {
				relValue *= -1;
			}

			// create text div
			// don't let bar or text go out of the edges
			var tempRelValue = relValue;
			if (tempRelValue < 5) {
				tempRelValue = 5;
			}
			else if (tempRelValue > (options.width - 5)) {
				tempRelValue = (options.width - 5);
			}
			var textMarginLeft = (tempRelValue - 18) + 'px';
			//SafeLog('textMarginLeft :' + textMarginLeft);

			// create bar div
			var float = '', bgcolor = '', halfWidth = Math.round(options.width / 2);
			if (numValue > 0) {
				float = 'left';
				bgcolor = '#0F0';
			}
			else {
				float = 'right';
				bgcolor = '#F00';
			}

			//alert('numValue|relValue|tempRelValue: ' + numValue + '|' + relValue + '|' + tempRelValue);

			var barscontainer = $('<div style=""></div>');

			var barValue = $('<div style="z-index:121;float:' + float + ';background-color:' + bgcolor + ';width:' + tempRelValue + 'px;border:solid 1px #CCC" title="' + options.value + '"><img src="Images/hbar-mask.png" alt="value" width="' + tempRelValue + '" height="' + options.height + '" title="' + options.value + '"/><div>');
			var barFiller = $('<div style="z-index:122;float:' + float + ';width:' + halfWidth + 'px" title="' + options.value + '"><img src="Images/hbar-mask.png" alt="value" width="' + halfWidth + '" height="' + options.height + '" title="' + options.value + '"/><div>');

			if (numValue != 0) {
				if (options.centerAligned) {
					barscontainer.append(barFiller);
				}
				barscontainer.append(barValue);
				container.append(barscontainer);
			}

			if (displayValue) {
				var text = $('<div title="' + options.value + '" style="z-index:123;position:absolute;background:url(~/Images/hbar-mask.png);right:0px;display:table-cell;width:100%;height:' + options.height + 'px;font-weight:bold;border:solid 0px #EEE;text-align:right;float:right">' + options.value + '</div>');
				container.append(text);
			}
		}
	});
})(jQuery);