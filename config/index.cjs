/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {
  USE_PASSAGE: 'wechat-test',
  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx641ebad7206b5c0e',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '720ffb854fcdea4c404bd004aae31ef3',

  PROVINCE: '云南',
  CITY: '昆明',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝宝乖乖',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o3E7o61VMBzSExnii1a-sdvAoeWQ','o3E7o68jvqnjbV9eGV2X39rP1npA',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'UaaW_WmHz4SbfR72bUIP_rFHBTB1tKsM41sdqf2LjEs',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '08-04',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        // {
        //   type: '*生日', name: '纪念日', year: '2024', date: '11-28',
        // },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '佳宝', year: '1998', date: '08-04',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2024-11-10' },
        // 结婚纪念日
         { keyword: 'birth_day', date: '2025-08-04' },
        // pl生日
         { keyword: 'birth1_day', date: '2025-04-03' }
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o3E7o68jvqnjbV9eGV2X39rP1npA',
    }
  ],

}

module.exports = USER_CONFIG

