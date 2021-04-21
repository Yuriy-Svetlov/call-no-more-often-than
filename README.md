# call-no-more-often-than
> [npm](https://www.npmjs.com/package/call-no-more-often-than)
> Call a function or something else no more often than a certain amount of time

##  Install

```shell
npm i call-no-more-often-than --save-dev
```

##  Usage


```javascript
  const call_no_more_often_than = require('call-no-more-often-than');

  call_no_more_often_than(3000).then(function(){
      // Your code that won't execute more often than 3000 milliseconds
  });
```

## Examples

```javascript
  const call_no_more_often_than = require('call-no-more-often-than');

  test_function();
  test_function();

  setTimeout(function(){
    test_function();
  }, 2000);

  function test_function(){
    call_no_more_often_than(3000).then(function(){
      console.log('Called once');
    });  
  }
```

##  Options

#### time

* Type: `Integer`
* Default value: `1000`

The number is specified in milliseconds. The time during which the internal code of the function will not be called after the first call. The deviation accuracy can be 10-30 milliseconds.
