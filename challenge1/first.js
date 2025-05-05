/**
 * @param {string} s
 * @return {number}
 */
var getSubStringCount = function (s) {
  const vowels = new set(['a' , 'e' , 'i' , 'u' , 'o']);
  let maxlen = 0 ;
  let n = s.length ;

  for (int i = 0 ; i < n ; i++)
    {
      let charset = new set();
      let vowelcount = 0;
      for ( int j = i ; j < n ; j++ )
      {
        const char = s[j];

        if(charset.has(char))
        {
          //duplicate character found
          break;
        }
        charset.add(char);

        if(vowels.has(char))
        {
           vowelcount++;
        }
        
        if(vowelcount % 2 === 0)
        {
           maxlen = math.max(maxlen , j - i + 1);
        }
      }
    }
  return maxlen;

  
    
};
