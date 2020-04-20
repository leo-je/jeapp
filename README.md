# jeapp
# react native app test
brew install watchman
npm install -g react-native-cli

# 环境安装
npm install -g yarn react-native-cli
npm install -g npm
yarn config set registry https://registry.npm.taobao.org --global
yarn config set disturl https://npm.taobao.org/dist --global
npm install

# 安装device-info
npm install --save core-js@3
npm install --save react-native-device-info

# antd
npm install antd-mobile --save

# 启动
npm start


# 解决问题
## iponeos SDK路径不对的问题
xcrun --sdk iphoneos --show-sdk-path
sudo xcode-select --switch /Applications/Xcode.app/Contents/Developer/

## 解决块大小过小
git config --global http.postBuffer 52428800

# 参考
https://github.com/react-ui-kit/dribbble2react.git

