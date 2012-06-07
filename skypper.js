/* skypper -- convert images into skype emoticons */

(function() {
	var canvas = document.getElementById("canvas"),
		ctx = canvas.getContext("2d"),
		w = canvas.width,
		h = canvas.height,
		hpix = 15,
		vpix = 14,
		img = new Image(),
		colormap = {			
			"000000": "(emo)",
			"ffffff": "(e)",
			"ff0000": "(devil)",
			"d72018": "(h)",
			"00ff00": "(envy)",
			"0000ff": "(skype)",
			"ffeb2a": "(sun)",
			"f0be8d": "(y)",
			"844222": "(hug)"
		};

	function populateCanvas(callback) {
		img.onload = function() {
			console.log('Image loaded');
			ctx.drawImage(img, 0, 0);
			callback.call();
		}
		// img.src = 'mario.png';
		img.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAOCAIAAAB/6NG4AAAD8GlDQ1BJQ0MgUHJvZmlsZQAAKJGNVd1v21QUP4lvXKQWP6Cxjg4Vi69VU1u5GxqtxgZJk6XpQhq5zdgqpMl1bhpT1za2021Vn/YCbwz4A4CyBx6QeEIaDMT2su0BtElTQRXVJKQ9dNpAaJP2gqpwrq9Tu13GuJGvfznndz7v0TVAx1ea45hJGWDe8l01n5GPn5iWO1YhCc9BJ/RAp6Z7TrpcLgIuxoVH1sNfIcHeNwfa6/9zdVappwMknkJsVz19HvFpgJSpO64PIN5G+fAp30Hc8TziHS4miFhheJbjLMMzHB8POFPqKGKWi6TXtSriJcT9MzH5bAzzHIK1I08t6hq6zHpRdu2aYdJYuk9Q/881bzZa8Xrx6fLmJo/iu4/VXnfH1BB/rmu5ScQvI77m+BkmfxXxvcZcJY14L0DymZp7pML5yTcW61PvIN6JuGr4halQvmjNlCa4bXJ5zj6qhpxrujeKPYMXEd+q00KR5yNAlWZzrF+Ie+uNsdC/MO4tTOZafhbroyXuR3Df08bLiHsQf+ja6gTPWVimZl7l/oUrjl8OcxDWLbNU5D6JRL2gxkDu16fGuC054OMhclsyXTOOFEL+kmMGs4i5kfNuQ62EnBuam8tzP+Q+tSqhz9SuqpZlvR1EfBiOJTSgYMMM7jpYsAEyqJCHDL4dcFFTAwNMlFDUUpQYiadhDmXteeWAw3HEmA2s15k1RmnP4RHuhBybdBOF7MfnICmSQ2SYjIBM3iRvkcMki9IRcnDTthyLz2Ld2fTzPjTQK+Mdg8y5nkZfFO+se9LQr3/09xZr+5GcaSufeAfAww60mAPx+q8u/bAr8rFCLrx7s+vqEkw8qb+p26n11Aruq6m1iJH6PbWGv1VIY25mkNE8PkaQhxfLIF7DZXx80HD/A3l2jLclYs061xNpWCfoB6WHJTjbH0mV35Q/lRXlC+W8cndbl9t2SfhU+Fb4UfhO+F74GWThknBZ+Em4InwjXIyd1ePnY/Psg3pb1TJNu15TMKWMtFt6ScpKL0ivSMXIn9QtDUlj0h7U7N48t3i8eC0GnMC91dX2sTivgloDTgUVeEGHLTizbf5Da9JLhkhh29QOs1luMcScmBXTIIt7xRFxSBxnuJWfuAd1I7jntkyd/pgKaIwVr3MgmDo2q8x6IdB5QH162mcX7ajtnHGN2bov71OU1+U0fqqoXLD0wX5ZM005UHmySz3qLtDqILDvIL+iH6jB9y2x83ok898GOPQX3lk3Itl0A+BrD6D7tUjWh3fis58BXDigN9yF8M5PJH4B8Gr79/F/XRm8m241mw/wvur4BGDj42bzn+Vmc+NL9L8GcMn8F1kAcXjEKMJAAAAACXBIWXMAAAsTAAALEwEAmpwYAAABbmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNC40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iPgogICAgICAgICA8ZGM6c3ViamVjdD4KICAgICAgICAgICAgPHJkZjpCYWcvPgogICAgICAgICA8L2RjOnN1YmplY3Q+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgrlPw1BAAAA50lEQVQokYWRLQ7CQBCFX0klCZXU8WMaEg7B1JI6LoAEFE0dEhQBBci9QB3BshyCBFAgayHBL2LKZtlCeKJ5234z82brKKXw1qXuw1BwywA8Dks+Vjpj9xdqvvFFwsbRvWdhk81oMgTgUXyXi6w/N0eVNMoQP7V8kejGAErW9NV0zeYuFx7FuoZ3yJNwDLOxRgGca9UP2tzdEkdn2rVuY9Deb46h5RmdUsNRSll3ZxXIbYvRvHdwy4oFbKToUZQCIOAjN0UnTUvRo35q1tOzm9M8RZZ31n6cwZTL6NdvReV/ZyKvf1EAL4IOaN00zirzAAAAAElFTkSuQmCC';
	}

	function decode() {		
		var imageData = ctx.getImageData(0, 0, w, h);

		var rows = [];
		for (var x = 0; x < imageData.width; x++) {
			var row = [];
			for (var y = 0; y < imageData.height; y++) {
				var index = ((y * (imageData.width * 4)) + (x*4)),
					r = imageData.data[index],
					g = imageData.data[index + 1],
					b = imageData.data[index + 2];

				// console.log(x, y, "rgb: " + r + ", " + g + ", " + b + ", " + rgbToHex(r, g, b));
				var value = mapColorToValue(r, g, b);
				row.push(value);
			}
			rows.push(row);
		}
		return rows;
	}

	function rgbToHex(r, g, b) {
		return ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).substr(1);
	}

	function hexToRgb(hex) {
	    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	    return result ? {
	        r: parseInt(result[1], 16),
	        g: parseInt(result[2], 16),
	        b: parseInt(result[3], 16)
	    } : null;
	}

	function difference(color1, color2) {
		var dr = color1.r - color2.r,
			dg = color1.g - color2.g,
			db = color1.b - color2.b;

		return dr*dr + dg*dg + db*db;
	}

	function mapColorToValue(r, g, b) {
		var nearest,
			smallestDiff = 255 * 255 * 3,
			color1 = {
				r: r,
				g: g,
				b: b
			};

		for (var color in colormap) {
			var color2 = hexToRgb(color);
			var diff = difference(color1, color2);
			if (diff < smallestDiff) {
				smallestDiff = diff;
				nearest = colormap[color];
			}
		}

		console.log("Nearest color for (" + r + "," + g + "," + b + "): " + nearest);
		return nearest;
	}

	return function() {
		populateCanvas(function() {
			var rows = decode(),
				result = '';

			for (var row = 0; row < rows.length; row++) {
				for (var color = 0; color < rows[row].length; color++) {
					// console.log(rows[row]);
					// console.log(color);
					result = result + rows[row][color];
				}
				result = result + "\n";
			}
			console.log(result);
		});		
	}();
}());
