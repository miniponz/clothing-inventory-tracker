const test = QUnit.test;

QUnit.module('Am I cool');

function amICool(child) {
    if(child.cool === true){
        return child.name;
    }
    if(child.cool === false) {
        return 'you\'ve been doged';
    }
}

test('return riley is cool', assert => {
//arrange
    const riley = {
        name: 'Riley',
        cool: true,
        unCool: false
    };

//act
    const cool = amICool(riley);
//assert
    assert.equal(cool, 'Riley');
});

test('return doge is cool', assert => {
//arrange
    const doge = {
        name: 'doge',
        cool: false,
        unCool: true
    };

//act
    const cool = amICool(doge);
//assert
    assert.equal(cool, 'you\'ve been doged');
});