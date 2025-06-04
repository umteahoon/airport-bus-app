const { execSync } = require('child_process');

try {
  const jsEngine = execSync('npx expo config --json').toString();
  if (!jsEngine.includes('hermes')) {
    console.warn('⚠️ Hermes가 활성화되어 있지 않습니다. app.json에서 jsEngine을 확인하세요.');
  } else {
    console.log('✅ Hermes 엔진이 활성화되어 있습니다.');
  }
} catch (e) {
  console.error('Hermes 확인 중 오류 발생:', e.message);
}
