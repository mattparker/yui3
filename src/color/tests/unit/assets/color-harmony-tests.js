YUI.add('color-harmony-tests', function(Y) {

    var testBasic = new Y.Test.Case({
            name: "Color Convertion Tests",

           'complementary of "blue"': function() {
                var c = Y.Color.getComplementary('blue');

                Y.Assert.areSame(2, c.length);
                addOutput('complementary of "blue"', "blue", c);
                Y.Assert.areSame("#0000ff", c[0]);
                Y.Assert.areSame("#ffaa00", c[1]);

            },

            'complementary of "#ff7700"': function() {
                var c = Y.Color.getComplementary('#ff7700');

                Y.Assert.areSame(2, c.length);
                addOutput('complementary of "#ff7700"', "#ff7700", c);
                Y.Assert.areSame("#ff7700", c[0]);
                Y.Assert.areSame("#0099ff", c[1]);             
            },

            'split complementary of "blue"': function() {
                var c = Y.Color.getSplit('blue');

                Y.Assert.areSame(3, c.length, 'length is greater than 1');
                addOutput('split complementary of "blue"', "blue", c);
                Y.Assert.areSame("#0000ff", c[0]);
                Y.Assert.areSame("#ffff00", c[1]); 
                Y.Assert.areSame("#ff5500", c[2]);
                
            },

            'split complementary of "blue" with 45 degree offset': function() {
                var c = Y.Color.getSplit('blue', 45);

                Y.Assert.areSame(3, c.length, 'length is greater than 1');
                addOutput('split complementary of "blue" with 45 degree offset', "blue", c);
                Y.Assert.areSame("#0000ff", c[0]);
                Y.Assert.areSame("#d4ff00", c[1]); 
                Y.Assert.areSame("#ff2b00", c[2]);                
            },

            'analogous of "red"': function() {
                var c = Y.Color.getAnalogous('red');

                Y.Assert.areSame(5, c.length, 'length is greater than 1');
                addOutput('analogous of "red"', 'red', c);
                Y.Assert.areSame("#ff0000", c[0]);
                Y.Assert.areSame("#ff1a00", c[1]); 
                Y.Assert.areSame("#ff3700", c[2]);   
                Y.Assert.areSame("#ff002b", c[3]);
                Y.Assert.areSame("#ff0055", c[4]); 

            },

            'triad of "#ff7700"': function() {
                var c = Y.Color.getTriad('#ff7700');

                Y.Assert.areSame(3, c.length, 'length is greater than 1');
                addOutput('triad of "#ff7700"', '#ff7700', c);
                Y.Assert.areSame("#ff7700", c[0]);
                Y.Assert.areSame("#33ff00", c[1]); 
                Y.Assert.areSame("#b300ff", c[2]);                
            },

            'tetrad of "#ff00ff"': function() {
                var c = Y.Color.getTetrad('#ff00ff');

                Y.Assert.areSame(4, c.length, 'length is greater than 1');
                addOutput('tetrad of "#ff00ff"', '#ff00ff', c);
                Y.Assert.areSame("#ff00ff", c[0]);
                Y.Assert.areSame("#ff0000", c[1]); 
                Y.Assert.areSame("#aaff00", c[2]);   
                Y.Assert.areSame("#00ff00", c[3]);                
            },

            'square of "#ff00ff"': function() {
                var c = Y.Color.getSquare('#ff00ff');

                Y.Assert.areSame(4, c.length, 'length is greater than 1');
                addOutput('square of "#ff00ff"', '#ff00ff', c);
                Y.Assert.areSame("#ff00ff", c[0]);
                Y.Assert.areSame("#ff5500", c[1]); 
                Y.Assert.areSame("#aaff00", c[2]);   
                Y.Assert.areSame("#00ffff", c[3]);                   
            },

            'monochrome of "#ff7700" one time': function() {
                var c = Y.Color.getMonochrome('#ff7700', 1);

                Y.Assert.areSame('#ff7700', c, 'color is not returned');
            },

            'monochrome of "#ff7700" default count': function() {
                var c = Y.Color.getMonochrome('#ff7700');

                Y.Assert.areSame(5, c.length, 'length is greater than 1');
            },

            'monochrome of "#ff7700"': function() {
                var c = Y.Color.getMonochrome('#ff7700', 5);

                Y.Assert.areSame(5, c.length, 'length is greater than 1');
                Y.Assert.areSame("#000000", c[0]);
                Y.Assert.areSame("#803c00", c[1]); 
                Y.Assert.areSame("#ff7700", c[2]);   
                Y.Assert.areSame("#ffbb80", c[3]);                   
                Y.Assert.areSame("#ffffff", c[4]);                
            },

            'similar of "#ff00ff" default offset': function() {
                var c = Y.Color.getSimilar('#ff00ff');

                Y.Assert.areSame(6, c.length, 'length is greater than 1');
            },

            'similar of "#ff00ff" default count': function() {
                var c = Y.Color.getSimilar('#ff00ff', 10);

                Y.Assert.areSame(6, c.length, 'length is greater than 1');
            },

            'similar of "#ff00ff" custom count': function() {
                var c = Y.Color.getSimilar('#ff00ff', 10, 10);

                Y.Assert.areSame(11, c.length, 'length is greater than 1');
            },

            'hue offset to +10 of "blue"': function() {
                var c = Y.Color.getOffset('blue', {h: 10});

                Y.Assert.areSame('#2a00ff', c, 'length is greater than 1');
            },

            'saturation offset to -10 of "#ff7700"': function() {
                var c = Y.Color.getOffset('#ff7700', {s: -10});

                Y.Assert.areSame('#f2780d', c, 'length is greater than 1');
            },

            'luminance offset to -10 of "#ff00ff"': function() {
                var c = Y.Color.getOffset('#ff00ff', {l: -10});

                Y.Assert.areSame('#cc00cc', c, 'length is greater than 1');
            },

            'brightness of "yellow"': function() {
                var b = Y.Color.getBrightness('yellow');

                Y.Assert.areSame(0.97, Math.round(b*100)/100, 'length is greater than 1');
            },

            'similar brightness of "yellow" matching "blue" to rgb': function() {
                var c = Y.Color.getSimilarBrightness('yellow', 'blue', 'rgb');

                Y.Assert.areSame('rgb(71, 71, 0)', c, 'incorrect color matching');
            },

            'similar brightness of "yellow" matching "blue"': function() {
                var c = Y.Color.getSimilarBrightness('yellow', 'blue');

                Y.Assert.areSame('#474700', c, 'incorrect color matching');
            },

            'test additive to subtractive and back': function() {
                var i = 0,
                    additive,
                    subtractive;

                for (; i < 360; i++) {
                    additive = i;
                    subtractive = Y.Color._toSubtractive(additive);
                    Y.Assert.areSame(additive, Y.Color._toAdditive(subtractive));
                }
            },

            'test additive to subtractive with negative hues ': function() {
                var i = -360,
                    additive,
                    subtractive;

                for (; i < 0; i++) {
                    additive = i;
                    subtractive = Y.Color._toSubtractive(additive);
                    Y.Assert.isTrue(subtractive >= 0 && subtractive <= 360)
                }
            },

            'test subtractive to additive with negative hues ': function() {
                var i = -360,
                    additive,
                    subtractive;

                for (; i < 0; i++) {
                    subtractive = i;
                    additive = Y.Color._toAdditive(subtractive);
                    Y.Assert.isTrue(additive >= 0 && additive <= 360)
                }
            }


        });

    var suite = new Y.Test.Suite("Color");
    suite.add(testBasic);

    Y.Test.Runner.add(suite);

});
