var table;
var row;
var time;
var sensor;
var spacing;
var avg = 0;
var button;
var x = 100;
var y;
var buttonState = "1";

function preload() {
	//table is comma separated value "csv"
	//and has no header specifying the columns labels
	table = loadTable("assets/FUNTIMES.csv", "csv", "noHeader");
}

function setup() {
	var canvas = createCanvas(1275, 700);
	canvas.parent("canvas");
	button = createButton('Add Color and Average Volts');
	button.mousePressed(changeState);
	button.parent("button");
	background("#beefed");
	strokeWeight(10);
	textStyle(BOLD);
	textFont("Georgia");
	line(0, height / 2, width, height / 2);
	ellipse(0, height / 2, 15, 15);
	ellipse(width / 16 + 5, height / 2, 15, 15)
	ellipse(2 * width / 16, height / 2, 15, 15);
	ellipse(3 * width / 16, height / 2, 15, 15);
	ellipse(4 * width / 16, height / 2, 15, 15);
	ellipse(5 * width / 16, height / 2, 15, 15);
	ellipse(6 * width / 16, height / 2, 15, 15);
	ellipse(7 * width / 16, height / 2, 15, 15);
	ellipse(8 * width / 16, height / 2, 15, 15);
	ellipse(9 * width / 16, height / 2, 15, 15);
	ellipse(10 * width / 16, height / 2, 15, 15);
	ellipse(11 * width / 16, height / 2, 15, 15);
	ellipse(12 * width / 16, height / 2, 15, 15);
	ellipse(13 * width / 16, height / 2, 15, 15);
	ellipse(14 * width / 16, height / 2, 15, 15);
	ellipse(15 * width / 16, height / 2, 15, 15);
	ellipse(16 * width / 16 - 2, height / 2, 15, 15);
	push();
	fill("#0E5557");
	textSize(20);
	translate(125, height / 2 - 75);
	rotate(PI / 2);
	text("MacArthur", 100, 100, 1000, 100);
	translate(0, 13 - width / 16);
	text("19th Street Oakland", 100, 100, 1000, 100);
	translate(0, -width / 16);
	text("12th Street/City Center", 100, 100, 1000, 100);
	translate(0, -width / 16);
	text("West Oakland", 100, 100, 1000, 100);
	translate(0, -width / 16);
	text("Embarcadero", 100, 100, 1000, 100);
	translate(0, -width / 16);
	text("Montgomery", 100, 100, 1000, 100);
	translate(0, -width / 16);
	text("Powell", 100, 100, 1000, 100);
	translate(0, -width / 16);
	text("Civic Center", 100, 100, 1000, 100);
	translate(0, -width / 16);
	text("16th Street Mission", 100, 100, 1000, 100);
	translate(0, -width / 16);
	text("24th Street Mission", 100, 100, 1000, 100);
	translate(0, -width / 16);
	text("Glen Park", 100, 100, 1000, 100);
	translate(0, -width / 16);
	text("Balboa Park", 100, 100, 1000, 100);
	translate(0, -width / 16);
	text("Daly City", 100, 100, 1000, 100);
	translate(0, -width / 16);
	text("Colma", 100, 100, 1000, 100);
	translate(0, -width / 16);
	text("South San Francisco", 100, 100, 1000, 100);
	translate(0, -width / 16);
	text("San Bruno", 100, 100, 1000, 100);
	translate(0, 15 - width / 16);
	text("Millbrae", 100, 100, 1000, 100);
	pop();
	push();
	textSize(90);
	text("HOW LOUD IS BART?", width / 8 - 30, height - 100, 2000, 100);
	pop();
	spacing = ((13 * width / 16) - (12 * width / 16));
	x = 11 * width / 16;
	y = height / 2;
	for (var r = 0; r < 33; r++) {
		row = table.getRow(r);
		//print it column by column
		//note: a row is an object, not an array
		time = row.getNum(0);
		sensor = row.getNum(1);



		//console.log(time); //optional but helpful
		//console.log(sensor);

		sensormap = map(sensor, 0, 3, 20, 300); //remap the sensor variable
		//look of ellipses
		console.log(sensormap);
		strokeWeight(1);
		line(x, y, x, y - sensormap);


		x += spacing / 33;

	}

	x = 12 * width / 16
	for (var r = 34; r < 64; r++) {
		row = table.getRow(r);
		//print it column by column
		//note: a row is an object, not an array
		time = row.getNum(0);
		sensor = row.getNum(1);



		console.log(time); //optional but helpful
		console.log(sensor);

		sensormap = map(sensor, 0, 3, 20, 300); //remap the sensor variable
		//look of ellipses
		strokeWeight(1);
		line(x, y, x, y - sensormap);


		x += spacing / 30;
	}

	x = 13 * width / 16
	for (var r = 64; r < 104; r++) {
		row = table.getRow(r);
		//print it column by column
		//note: a row is an object, not an array
		time = row.getNum(0);
		sensor = row.getNum(1);



		console.log(time); //optional but helpful
		console.log(sensor);

		sensormap = map(sensor, 0, 3, 20, 300); //remap the sensor variable
		//look of ellipses
		strokeWeight(1);
		line(x, y, x, y - sensormap);
		x += spacing / 40;
	}

	x = 14 * width / 16
	for (var r = 2364; r < 2410; r++) {
		row = table.getRow(r);
		//print it column by column
		//note: a row is an object, not an array
		time = row.getNum(0);
		sensor = row.getNum(1);



		console.log(time); //optional but helpful
		console.log(sensor);

		sensormap = map(sensor, 0, 3, 20, 300); //remap the sensor variable
		//look of ellipses
		strokeWeight(1);
		line(x, y, x, y - sensormap - 50);
		x += spacing / 46;
	}

	x = 15 * width / 16
	for (var r = 2554; r < 2597; r++) {
		row = table.getRow(r);
		//print it column by column
		//note: a row is an object, not an array
		time = row.getNum(0);
		sensor = row.getNum(1);



		console.log(time); //optional but helpful
		console.log(sensor);

		sensormap = map(sensor, 0, 3, 20, 300); //remap the sensor variable
		//look of ellipses
		strokeWeight(1);
		line(x, y, x, y - sensormap - 50);
		x += spacing / 43;
	}

	x = 10 * width / 16
	for (var r = 3097; r < 3144; r++) {
		row = table.getRow(r);
		//print it column by column
		//note: a row is an object, not an array
		time = row.getNum(0);
		sensor = row.getNum(1);



		console.log(time); //optional but helpful
		console.log(sensor);

		sensormap = map(sensor, 0, 3, 20, 300); //remap the sensor variable
		//look of ellipses
		strokeWeight(1);
		line(x, y, x, y - sensormap - 50);
		x += spacing / 47;
	}

	x = 9 * width / 16
	for (var r = 3145; r < 3187; r++) {
		row = table.getRow(r);
		//print it column by column
		//note: a row is an object, not an array
		time = row.getNum(0);
		sensor = row.getNum(1);



		console.log(time); //optional but helpful
		console.log(sensor);

		sensormap = map(sensor, 0, 3, 20, 300); //remap the sensor variable
		//look of ellipses
		strokeWeight(1);

		line(x, y, x, y - sensormap - 50);
		x += spacing / 42;
	}

	x = 8 * width / 16
	for (var r = 3190; r < 3229; r++) {
		row = table.getRow(r);
		//print it column by column
		//note: a row is an object, not an array
		time = row.getNum(0);
		sensor = row.getNum(1);



		console.log(time); //optional but helpful
		console.log(sensor);

		sensormap = map(sensor, 0, 3, 20, 300); //remap the sensor variable
		//look of ellipses
		strokeWeight(1);
		line(x, y, x, y - sensormap);
		x += spacing / 39;
	}

	x = 7 * width / 16
	for (var r = 3200; r < 3238; r++) {
		row = table.getRow(r);
		//print it column by column
		//note: a row is an object, not an array
		time = row.getNum(0);
		sensor = row.getNum(1);



		console.log(time); //optional but helpful
		console.log(sensor);

		sensormap = map(sensor, 0, 3, 20, 300); //remap the sensor variable
		//look of ellipses
		strokeWeight(1);
		line(x, y, x, y - sensormap);
		x += spacing / 38;
	}

	x = 6 * width / 16
	for (var r = 3330; r < 3368; r++) {
		row = table.getRow(r);
		//print it column by column
		//note: a row is an object, not an array
		time = row.getNum(0);
		sensor = row.getNum(1);



		console.log(time); //optional but helpful
		console.log(sensor);

		sensormap = map(sensor, 0, 3, 20, 300); //remap the sensor variable
		//look of ellipses
		strokeWeight(1);
		line(x, y, x, y - sensormap);
		x += spacing / 38;
	}

	x = 5 * width / 16
	for (var r = 3430; r < 3468; r++) {
		row = table.getRow(r);
		//print it column by column
		//note: a row is an object, not an array
		time = row.getNum(0);
		sensor = row.getNum(1);



		console.log(time); //optional but helpful
		console.log(sensor);

		sensormap = map(sensor, 0, 3, 20, 300); //remap the sensor variable
		//look of ellipses
		strokeWeight(1);
		line(x, y, x, y - sensormap);
		x += spacing / 38;
	}

	x = 4 * width / 16
	for (var r = 3508; r > 3470; r--) {
		row = table.getRow(r);
		//print it column by column
		//note: a row is an object, not an array
		time = row.getNum(0);
		sensor = row.getNum(1);



		console.log(time); //optional but helpful
		console.log(sensor);

		sensormap = map(sensor, 0, 3, 20, 300); //remap the sensor variable
		//look of ellipses
		strokeWeight(1);
		line(x, y, x, y - sensormap - 50);
		x += spacing / 38;
	}

	x = 3 * width / 16
	for (var r = 3654; r > 3601; r--) {
		row = table.getRow(r);
		//print it column by column
		//note: a row is an object, not an array
		time = row.getNum(0);
		sensor = row.getNum(1);



		console.log(time); //optional but helpful
		console.log(sensor);

		sensormap = map(sensor, 0, 3, 20, 300); //remap the sensor variable
		//look of ellipses
		strokeWeight(1);
		line(x, y, x, y - sensormap - 50);
		x += spacing / 53;
	}

	x = 2 * width / 16
	for (var r = 3697; r > 3656; r--) {
		row = table.getRow(r);
		//print it column by column
		//note: a row is an object, not an array
		time = row.getNum(0);
		sensor = row.getNum(1);



		console.log(time); //optional but helpful
		console.log(sensor);

		sensormap = map(sensor, 0, 3, 20, 300); //remap the sensor variable
		//look of ellipses
		strokeWeight(1);
		line(x, y, x, y - sensormap);
		x += spacing / 41;
	}

	x = width / 16
	for (var r = 3797; r > 3756; r--) {
		row = table.getRow(r);
		//print it column by column
		//note: a row is an object, not an array
		time = row.getNum(0);
		sensor = row.getNum(1);



		console.log(time); //optional but helpful
		console.log(sensor);

		sensormap = map(sensor, 0, 3, 20, 300); //remap the sensor variable
		//look of ellipses
		strokeWeight(1);
		line(x, y, x, y - sensormap);
		x += spacing / 41;
	}

	x = 0
	for (var r = 3897; r > 3856; r--) {
		row = table.getRow(r);
		//print it column by column
		//note: a row is an object, not an array
		time = row.getNum(0);
		sensor = row.getNum(1);



		console.log(time); //optional but helpful
		console.log(sensor);

		sensormap = map(sensor, 0, 3, 20, 300); //remap the sensor variable
		//look of ellipses
		strokeWeight(1);
		line(x, y, x, y - sensormap);
		x += spacing / 41;
	}



}

function changeState() {
	if (buttonState === "1") {
		buttonState = "2";
		button.html("Remove Color and Average Volts")
		fill("#beefed");
		rect(0, 0, 1275, 700);
		fill(0);
		stroke(0);
		strokeWeight(10);
		textFont("Georgia");
		line(0, height / 2, width, height / 2);
		push();
		fill(255);
		ellipse(0, height / 2, 15, 15);
		ellipse(width / 16 + 5, height / 2, 15, 15)
		ellipse(2 * width / 16, height / 2, 15, 15);
		ellipse(3 * width / 16, height / 2, 15, 15);
		ellipse(4 * width / 16, height / 2, 15, 15);
		ellipse(5 * width / 16, height / 2, 15, 15);
		ellipse(6 * width / 16, height / 2, 15, 15);
		ellipse(7 * width / 16, height / 2, 15, 15);
		ellipse(8 * width / 16, height / 2, 15, 15);
		ellipse(9 * width / 16, height / 2, 15, 15);
		ellipse(10 * width / 16, height / 2, 15, 15);
		ellipse(11 * width / 16, height / 2, 15, 15);
		ellipse(12 * width / 16, height / 2, 15, 15);
		ellipse(13 * width / 16, height / 2, 15, 15);
		ellipse(14 * width / 16, height / 2, 15, 15);
		ellipse(15 * width / 16, height / 2, 15, 15);
		ellipse(16 * width / 16 - 2, height / 2, 15, 15);
		pop();
		push();
		fill("#0E5557");
		noStroke();
		textSize(20);
		translate(125, height / 2 - 75);
		rotate(PI / 2);
		text("MacArthur", 100, 100, 1000, 100);
		translate(0, 13 - width / 16);
		text("19th Street Oakland", 100, 100, 1000, 100);
		translate(0, -width / 16);
		text("12th Street/City Center", 100, 100, 1000, 100);
		translate(0, -width / 16);
		text("West Oakland", 100, 100, 1000, 100);
		translate(0, -width / 16);
		text("Embarcadero", 100, 100, 1000, 100);
		translate(0, -width / 16);
		text("Montgomery", 100, 100, 1000, 100);
		translate(0, -width / 16);
		text("Powell", 100, 100, 1000, 100);
		translate(0, -width / 16);
		text("Civic Center", 100, 100, 1000, 100);
		translate(0, -width / 16);
		text("16th Street Mission", 100, 100, 1000, 100);
		translate(0, -width / 16);
		text("24th Street Mission", 100, 100, 1000, 100);
		translate(0, -width / 16);
		text("Glen Park", 100, 100, 1000, 100);
		translate(0, -width / 16);
		text("Balboa Park", 100, 100, 1000, 100);
		translate(0, -width / 16);
		text("Daly City", 100, 100, 1000, 100);
		translate(0, -width / 16);
		text("Colma", 100, 100, 1000, 100);
		translate(0, -width / 16);
		text("South San Francisco", 100, 100, 1000, 100);
		translate(0, -width / 16);
		text("San Bruno", 100, 100, 1000, 100);
		translate(0, 15 - width / 16);
		text("Millbrae", 100, 100, 1000, 100);
		pop();
		push();
		textSize(90);
		noStroke();
		text("HOW LOUD IS BART?", width / 8 - 30, height - 100, 2000, 100);
		pop();
		spacing = ((13 * width / 16) - (12 * width / 16));
		x = 11 * width / 16;
		y = height / 2;
		for (var r = 0; r < 33; r++) {
			row = table.getRow(r);
			//print it column by column
			//note: a row is an object, not an array
			time = row.getNum(0);
			sensor = row.getNum(1);



			//console.log(time); //optional but helpful
			//console.log(sensor);

			sensormap = map(sensor, 0, 3, 20, 300); //remap the sensor variable
			//look of ellipses
			console.log(sensormap);
			strokeWeight(1);
			colorChange();
			line(x, y, x, y - sensormap);

			avg += sensor;

			x += spacing / 33;

		}
		avg = avg / 33;
		push();
		translate(5, 0);
		average();
		pop();
		avg = 0;
		x = 12 * width / 16
		for (var r = 34; r < 64; r++) {
			row = table.getRow(r);
			//print it column by column
			//note: a row is an object, not an array
			time = row.getNum(0);
			sensor = row.getNum(1);



			console.log(time); //optional but helpful
			console.log(sensor);

			sensormap = map(sensor, 0, 3, 20, 300); //remap the sensor variable
			//look of ellipses
			strokeWeight(1);
			colorChange();
			line(x, y, x, y - sensormap);

			avg += sensor;
			x += spacing / 30;
		}
		avg = avg / 30;
		average();
		avg = 0;
		x = 13 * width / 16
		for (var r = 64; r < 104; r++) {
			row = table.getRow(r);
			//print it column by column
			//note: a row is an object, not an array
			time = row.getNum(0);
			sensor = row.getNum(1);



			console.log(time); //optional but helpful
			console.log(sensor);

			sensormap = map(sensor, 0, 3, 20, 300); //remap the sensor variable
			//look of ellipses
			strokeWeight(1);
			colorChange();
			line(x, y, x, y - sensormap);
			avg += sensor;
			x += spacing / 40;
		}
		avg = avg / 40;
		average();
		avg = 0;
		x = 14 * width / 16
		for (var r = 2364; r < 2410; r++) {
			row = table.getRow(r);
			//print it column by column
			//note: a row is an object, not an array
			time = row.getNum(0);
			sensor = row.getNum(1);



			console.log(time); //optional but helpful
			console.log(sensor);

			sensormap = map(sensor, 0, 3, 20, 300); //remap the sensor variable
			//look of ellipses
			strokeWeight(1);
			colorChange();
			line(x, y, x, y - sensormap - 50);
			avg += sensor;
			x += spacing / 46;
		}
		avg = avg / 46;
		average();
		avg = 0;
		x = 15 * width / 16
		for (var r = 2554; r < 2597; r++) {
			row = table.getRow(r);
			//print it column by column
			//note: a row is an object, not an array
			time = row.getNum(0);
			sensor = row.getNum(1);



			console.log(time); //optional but helpful
			console.log(sensor);

			sensormap = map(sensor, 0, 3, 20, 300); //remap the sensor variable
			//look of ellipses
			strokeWeight(1);
			colorChange();
			line(x, y, x, y - sensormap - 50);
			avg += sensor;
			x += spacing / 43;
		}
		avg = avg / 43;
		average();
		avg = 0;
		x = 10 * width / 16
		for (var r = 3097; r < 3144; r++) {
			row = table.getRow(r);
			//print it column by column
			//note: a row is an object, not an array
			time = row.getNum(0);
			sensor = row.getNum(1);



			console.log(time); //optional but helpful
			console.log(sensor);

			sensormap = map(sensor, 0, 3, 20, 300); //remap the sensor variable
			//look of ellipses
			strokeWeight(1);
			colorChange();
			line(x, y, x, y - sensormap - 50);
			avg += sensor;
			x += spacing / 47;
		}
		avg = avg / 47;
		average();
		avg = 0;
		x = 9 * width / 16
		for (var r = 3145; r < 3187; r++) {
			row = table.getRow(r);
			//print it column by column
			//note: a row is an object, not an array
			time = row.getNum(0);
			sensor = row.getNum(1);



			console.log(time); //optional but helpful
			console.log(sensor);

			sensormap = map(sensor, 0, 3, 20, 300); //remap the sensor variable
			//look of ellipses
			strokeWeight(1);
			colorChange();
			line(x, y, x, y - sensormap - 50);
			avg += sensor;
			x += spacing / 42;
		}
		avg = avg / 42;
		average();
		avg = 0;
		x = 8 * width / 16
		for (var r = 3190; r < 3229; r++) {
			row = table.getRow(r);
			//print it column by column
			//note: a row is an object, not an array
			time = row.getNum(0);
			sensor = row.getNum(1);



			console.log(time); //optional but helpful
			console.log(sensor);

			sensormap = map(sensor, 0, 3, 20, 300); //remap the sensor variable
			//look of ellipses
			strokeWeight(1);
			colorChange();
			line(x, y, x, y - sensormap);
			avg += sensor;
			x += spacing / 39;
		}
		avg = avg / 39;
		average();
		avg = 0;
		x = 7 * width / 16
		for (var r = 3200; r < 3238; r++) {
			row = table.getRow(r);
			//print it column by column
			//note: a row is an object, not an array
			time = row.getNum(0);
			sensor = row.getNum(1);



			console.log(time); //optional but helpful
			console.log(sensor);

			sensormap = map(sensor, 0, 3, 20, 300); //remap the sensor variable
			//look of ellipses
			strokeWeight(1);
			colorChange();
			line(x, y, x, y - sensormap);
			avg += sensor;
			x += spacing / 38;
		}
		avg = avg / 38;
		average();
		avg = 0;
		x = 6 * width / 16
		for (var r = 3330; r < 3368; r++) {
			row = table.getRow(r);
			//print it column by column
			//note: a row is an object, not an array
			time = row.getNum(0);
			sensor = row.getNum(1);



			console.log(time); //optional but helpful
			console.log(sensor);

			sensormap = map(sensor, 0, 3, 20, 300); //remap the sensor variable
			//look of ellipses
			strokeWeight(1);
			colorChange();
			line(x, y, x, y - sensormap);
			avg += sensor;
			x += spacing / 38;
		}
		avg = avg / 38;
		average();
		avg = 0;
		x = 5 * width / 16
		for (var r = 3430; r < 3468; r++) {
			row = table.getRow(r);
			//print it column by column
			//note: a row is an object, not an array
			time = row.getNum(0);
			sensor = row.getNum(1);



			console.log(time); //optional but helpful
			console.log(sensor);

			sensormap = map(sensor, 0, 3, 20, 300); //remap the sensor variable
			//look of ellipses
			strokeWeight(1);
			colorChange();
			line(x, y, x, y - sensormap);
			avg += sensor;
			x += spacing / 38;
		}
		avg = avg / 38;
		average();
		avg = 0;
		x = 4 * width / 16
		for (var r = 3508; r > 3470; r--) {
			row = table.getRow(r);
			//print it column by column
			//note: a row is an object, not an array
			time = row.getNum(0);
			sensor = row.getNum(1);



			console.log(time); //optional but helpful
			console.log(sensor);

			sensormap = map(sensor, 0, 3, 20, 300); //remap the sensor variable
			//look of ellipses
			strokeWeight(1);
			colorChange();
			line(x, y, x, y - sensormap - 50);
			avg += sensor;
			x += spacing / 38;
		}
		avg = avg / 38;
		average();
		avg = 0;
		x = 3 * width / 16
		for (var r = 3654; r > 3601; r--) {
			row = table.getRow(r);
			//print it column by column
			//note: a row is an object, not an array
			time = row.getNum(0);
			sensor = row.getNum(1);



			console.log(time); //optional but helpful
			console.log(sensor);

			sensormap = map(sensor, 0, 3, 20, 300); //remap the sensor variable
			//look of ellipses
			strokeWeight(1);
			colorChange();
			line(x, y, x, y - sensormap - 50);
			avg += sensor;
			x += spacing / 53;
		}
		avg = avg / 53;
		average();
		avg = 0;
		x = 2 * width / 16
		for (var r = 3697; r > 3656; r--) {
			row = table.getRow(r);
			//print it column by column
			//note: a row is an object, not an array
			time = row.getNum(0);
			sensor = row.getNum(1);



			console.log(time); //optional but helpful
			console.log(sensor);

			sensormap = map(sensor, 0, 3, 20, 300); //remap the sensor variable
			//look of ellipses
			strokeWeight(1);
			colorChange();
			line(x, y, x, y - sensormap);
			avg += sensor;
			x += spacing / 41;
		}
		avg = avg / 41;
		average();
		avg = 0;
		x = width / 16
		for (var r = 3797; r > 3756; r--) {
			row = table.getRow(r);
			//print it column by column
			//note: a row is an object, not an array
			time = row.getNum(0);
			sensor = row.getNum(1);



			console.log(time); //optional but helpful
			console.log(sensor);

			sensormap = map(sensor, 0, 3, 20, 300); //remap the sensor variable
			//look of ellipses
			strokeWeight(1);
			colorChange();
			line(x, y, x, y - sensormap);
			avg += sensor;
			x += spacing / 41;
		}
		avg = avg / 41;
		average();
		avg = 0;
		x = 0
		for (var r = 3897; r > 3856; r--) {
			row = table.getRow(r);
			//print it column by column
			//note: a row is an object, not an array
			time = row.getNum(0);
			sensor = row.getNum(1);



			console.log(time); //optional but helpful
			console.log(sensor);

			sensormap = map(sensor, 0, 3, 20, 300); //remap the sensor variable
			//look of ellipses
			strokeWeight(1);
			colorChange();
			line(x, y, x, y - sensormap);
			avg += sensor;
			x += spacing / 41;
		}
		avg = avg / 41;
		average();
	} else if (buttonState === "2") {
		buttonState = "1";
		button.html("Add Color and Average Volts");
		fill("#beefed");
		rect(0, 0, 1275, 700);
		fill(0);
		stroke(0);
		strokeWeight(10);
		textStyle(BOLD);
		textFont("Georgia");
		line(0, height / 2, width, height / 2);
		push();
		fill(255);
		ellipse(0, height / 2, 15, 15);
		ellipse(width / 16 + 5, height / 2, 15, 15)
		ellipse(2 * width / 16, height / 2, 15, 15);
		ellipse(3 * width / 16, height / 2, 15, 15);
		ellipse(4 * width / 16, height / 2, 15, 15);
		ellipse(5 * width / 16, height / 2, 15, 15);
		ellipse(6 * width / 16, height / 2, 15, 15);
		ellipse(7 * width / 16, height / 2, 15, 15);
		ellipse(8 * width / 16, height / 2, 15, 15);
		ellipse(9 * width / 16, height / 2, 15, 15);
		ellipse(10 * width / 16, height / 2, 15, 15);
		ellipse(11 * width / 16, height / 2, 15, 15);
		ellipse(12 * width / 16, height / 2, 15, 15);
		ellipse(13 * width / 16, height / 2, 15, 15);
		ellipse(14 * width / 16, height / 2, 15, 15);
		ellipse(15 * width / 16, height / 2, 15, 15);
		ellipse(16 * width / 16 - 2, height / 2, 15, 15);
		pop();
		push();
		fill("#0E5557");
		noStroke();
		textSize(20);
		translate(125, height / 2 - 75);
		rotate(PI / 2);
		text("MacArthur", 100, 100, 1000, 100);
		translate(0, 13 - width / 16);
		text("19th Street Oakland", 100, 100, 1000, 100);
		translate(0, -width / 16);
		text("12th Street/City Center", 100, 100, 1000, 100);
		translate(0, -width / 16);
		text("West Oakland", 100, 100, 1000, 100);
		translate(0, -width / 16);
		text("Embarcadero", 100, 100, 1000, 100);
		translate(0, -width / 16);
		text("Montgomery", 100, 100, 1000, 100);
		translate(0, -width / 16);
		text("Powell", 100, 100, 1000, 100);
		translate(0, -width / 16);
		text("Civic Center", 100, 100, 1000, 100);
		translate(0, -width / 16);
		text("16th Street Mission", 100, 100, 1000, 100);
		translate(0, -width / 16);
		text("24th Street Mission", 100, 100, 1000, 100);
		translate(0, -width / 16);
		text("Glen Park", 100, 100, 1000, 100);
		translate(0, -width / 16);
		text("Balboa Park", 100, 100, 1000, 100);
		translate(0, -width / 16);
		text("Daly City", 100, 100, 1000, 100);
		translate(0, -width / 16);
		text("Colma", 100, 100, 1000, 100);
		translate(0, -width / 16);
		text("South San Francisco", 100, 100, 1000, 100);
		translate(0, -width / 16);
		text("San Bruno", 100, 100, 1000, 100);
		translate(0, 15 - width / 16);
		text("Millbrae", 100, 100, 1000, 100);
		pop();
		push();
		textSize(90);
		noStroke();
		text("HOW LOUD IS BART?", width / 8 - 30, height - 100, 2000, 100);
		pop();
		spacing = ((13 * width / 16) - (12 * width / 16));
		x = 11 * width / 16;
		y = height / 2;
		for (var r = 0; r < 33; r++) {
			row = table.getRow(r);
			//print it column by column
			//note: a row is an object, not an array
			time = row.getNum(0);
			sensor = row.getNum(1);



			//console.log(time); //optional but helpful
			//console.log(sensor);

			sensormap = map(sensor, 0, 3, 20, 300); //remap the sensor variable
			//look of ellipses
			console.log(sensormap);
			strokeWeight(1);
			line(x, y, x, y - sensormap);


			x += spacing / 33;

		}

		x = 12 * width / 16
		for (var r = 34; r < 64; r++) {
			row = table.getRow(r);
			//print it column by column
			//note: a row is an object, not an array
			time = row.getNum(0);
			sensor = row.getNum(1);



			console.log(time); //optional but helpful
			console.log(sensor);

			sensormap = map(sensor, 0, 3, 20, 300); //remap the sensor variable
			//look of ellipses
			strokeWeight(1);
			line(x, y, x, y - sensormap);


			x += spacing / 30;
		}

		x = 13 * width / 16
		for (var r = 64; r < 104; r++) {
			row = table.getRow(r);
			//print it column by column
			//note: a row is an object, not an array
			time = row.getNum(0);
			sensor = row.getNum(1);



			console.log(time); //optional but helpful
			console.log(sensor);

			sensormap = map(sensor, 0, 3, 20, 300); //remap the sensor variable
			//look of ellipses
			strokeWeight(1);
			line(x, y, x, y - sensormap);
			x += spacing / 40;
		}

		x = 14 * width / 16
		for (var r = 2364; r < 2410; r++) {
			row = table.getRow(r);
			//print it column by column
			//note: a row is an object, not an array
			time = row.getNum(0);
			sensor = row.getNum(1);



			console.log(time); //optional but helpful
			console.log(sensor);

			sensormap = map(sensor, 0, 3, 20, 300); //remap the sensor variable
			//look of ellipses
			strokeWeight(1);
			line(x, y, x, y - sensormap - 50);
			x += spacing / 46;
		}

		x = 15 * width / 16
		for (var r = 2554; r < 2597; r++) {
			row = table.getRow(r);
			//print it column by column
			//note: a row is an object, not an array
			time = row.getNum(0);
			sensor = row.getNum(1);



			console.log(time); //optional but helpful
			console.log(sensor);

			sensormap = map(sensor, 0, 3, 20, 300); //remap the sensor variable
			//look of ellipses
			strokeWeight(1);
			line(x, y, x, y - sensormap - 50);
			x += spacing / 43;
		}

		x = 10 * width / 16
		for (var r = 3097; r < 3144; r++) {
			row = table.getRow(r);
			//print it column by column
			//note: a row is an object, not an array
			time = row.getNum(0);
			sensor = row.getNum(1);



			console.log(time); //optional but helpful
			console.log(sensor);

			sensormap = map(sensor, 0, 3, 20, 300); //remap the sensor variable
			//look of ellipses
			strokeWeight(1);
			line(x, y, x, y - sensormap - 50);
			x += spacing / 47;
		}

		x = 9 * width / 16
		for (var r = 3145; r < 3187; r++) {
			row = table.getRow(r);
			//print it column by column
			//note: a row is an object, not an array
			time = row.getNum(0);
			sensor = row.getNum(1);



			console.log(time); //optional but helpful
			console.log(sensor);

			sensormap = map(sensor, 0, 3, 20, 300); //remap the sensor variable
			//look of ellipses
			strokeWeight(1);

			line(x, y, x, y - sensormap - 50);
			x += spacing / 42;
		}

		x = 8 * width / 16
		for (var r = 3190; r < 3229; r++) {
			row = table.getRow(r);
			//print it column by column
			//note: a row is an object, not an array
			time = row.getNum(0);
			sensor = row.getNum(1);



			console.log(time); //optional but helpful
			console.log(sensor);

			sensormap = map(sensor, 0, 3, 20, 300); //remap the sensor variable
			//look of ellipses
			strokeWeight(1);
			line(x, y, x, y - sensormap);
			x += spacing / 39;
		}

		x = 7 * width / 16
		for (var r = 3200; r < 3238; r++) {
			row = table.getRow(r);
			//print it column by column
			//note: a row is an object, not an array
			time = row.getNum(0);
			sensor = row.getNum(1);



			console.log(time); //optional but helpful
			console.log(sensor);

			sensormap = map(sensor, 0, 3, 20, 300); //remap the sensor variable
			//look of ellipses
			strokeWeight(1);
			line(x, y, x, y - sensormap);
			x += spacing / 38;
		}

		x = 6 * width / 16
		for (var r = 3330; r < 3368; r++) {
			row = table.getRow(r);
			//print it column by column
			//note: a row is an object, not an array
			time = row.getNum(0);
			sensor = row.getNum(1);



			console.log(time); //optional but helpful
			console.log(sensor);

			sensormap = map(sensor, 0, 3, 20, 300); //remap the sensor variable
			//look of ellipses
			strokeWeight(1);
			line(x, y, x, y - sensormap);
			x += spacing / 38;
		}

		x = 5 * width / 16
		for (var r = 3430; r < 3468; r++) {
			row = table.getRow(r);
			//print it column by column
			//note: a row is an object, not an array
			time = row.getNum(0);
			sensor = row.getNum(1);



			console.log(time); //optional but helpful
			console.log(sensor);

			sensormap = map(sensor, 0, 3, 20, 300); //remap the sensor variable
			//look of ellipses
			strokeWeight(1);
			line(x, y, x, y - sensormap);
			x += spacing / 38;
		}

		x = 4 * width / 16
		for (var r = 3508; r > 3470; r--) {
			row = table.getRow(r);
			//print it column by column
			//note: a row is an object, not an array
			time = row.getNum(0);
			sensor = row.getNum(1);



			console.log(time); //optional but helpful
			console.log(sensor);

			sensormap = map(sensor, 0, 3, 20, 300); //remap the sensor variable
			//look of ellipses
			strokeWeight(1);
			line(x, y, x, y - sensormap - 50);
			x += spacing / 38;
		}

		x = 3 * width / 16
		for (var r = 3654; r > 3601; r--) {
			row = table.getRow(r);
			//print it column by column
			//note: a row is an object, not an array
			time = row.getNum(0);
			sensor = row.getNum(1);



			console.log(time); //optional but helpful
			console.log(sensor);

			sensormap = map(sensor, 0, 3, 20, 300); //remap the sensor variable
			//look of ellipses
			strokeWeight(1);
			line(x, y, x, y - sensormap - 50);
			x += spacing / 53;
		}

		x = 2 * width / 16
		for (var r = 3697; r > 3656; r--) {
			row = table.getRow(r);
			//print it column by column
			//note: a row is an object, not an array
			time = row.getNum(0);
			sensor = row.getNum(1);



			console.log(time); //optional but helpful
			console.log(sensor);

			sensormap = map(sensor, 0, 3, 20, 300); //remap the sensor variable
			//look of ellipses
			strokeWeight(1);
			line(x, y, x, y - sensormap);
			x += spacing / 41;
		}

		x = width / 16
		for (var r = 3797; r > 3756; r--) {
			row = table.getRow(r);
			//print it column by column
			//note: a row is an object, not an array
			time = row.getNum(0);
			sensor = row.getNum(1);



			console.log(time); //optional but helpful
			console.log(sensor);

			sensormap = map(sensor, 0, 3, 20, 300); //remap the sensor variable
			//look of ellipses
			strokeWeight(1);
			line(x, y, x, y - sensormap);
			x += spacing / 41;
		}

		x = 0
		for (var r = 3897; r > 3856; r--) {
			row = table.getRow(r);
			//print it column by column
			//note: a row is an object, not an array
			time = row.getNum(0);
			sensor = row.getNum(1);



			console.log(time); //optional but helpful
			console.log(sensor);

			sensormap = map(sensor, 0, 3, 20, 300); //remap the sensor variable
			//look of ellipses
			strokeWeight(1);
			line(x, y, x, y - sensormap);
			x += spacing / 41;
		}
	}
	console.log(buttonState);
}

function colorChange() {
	if (sensormap < 80) {
		stroke('#00c957');
	}
	if (sensormap < 160 && sensormap > 80) {
		stroke('#bdbf11');
	}
	if (sensormap < 180 && sensormap > 160) {
		stroke('#ff8000');
	}
	if (sensormap > 180) {
		stroke('#ff0000');
	}
}

function average() {
	noStroke();
	avg = avg * 100;
	avg = round(avg);
	avg = avg / 100;
	if (avg < .80) {
		fill('#00c957');
	}
	if (avg < 1.60 && avg > .80) {
		fill('#bdbf11');
	}
	if (avg < 1.80 && avg > 1.60) {
		fill('#ff8000');
	}
	if (avg > 1.80) {
		fill('#ff0000');
	}
	textStyle(BOLD);
	push();
	translate(5, 0);
	text(avg + " volts", x - width / 16 + 4, height / 2 + 20);
	pop();
}

function draw() {

}
