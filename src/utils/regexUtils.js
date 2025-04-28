export function generateRandomRegex(selectedOptions) {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*(),.?":{}|<>';
  
    let characterPool = '';
    let password = '';
  
    // Add required characters based on selected options
    if (selectedOptions.includes('uppercase')) {
      password += uppercase[Math.floor(Math.random() * uppercase.length)];
      characterPool += uppercase;
    }
    if (selectedOptions.includes('lowercase')) {
      password += lowercase[Math.floor(Math.random() * lowercase.length)];
      characterPool += lowercase;
    }
    if (selectedOptions.includes('numbers')) {
      password += numbers[Math.floor(Math.random() * numbers.length)];
      characterPool += numbers;
    }
    if (selectedOptions.includes('symbols')) {
      password += symbols[Math.floor(Math.random() * symbols.length)];
      characterPool += symbols;
    }
  
    // Fill the rest of the password with random characters from the pool
    const passwordLength = 12; // You can adjust the length as needed
    while (password.length < passwordLength) {
      password += characterPool[Math.floor(Math.random() * characterPool.length)];
    }
  
    // Shuffle the password to randomize the order of characters
    password = password.split('').sort(() => Math.random() - 0.5).join('');
  
    return password;
  }