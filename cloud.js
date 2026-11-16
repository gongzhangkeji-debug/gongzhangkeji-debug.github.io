/* ============================================================
 * 云服务共用模块（张协恒作品集）
 * 说明：SDK 已下载到本地 sdk-cloud.js，不依赖国外 CDN
 * ============================================================ */
(function () {
  // 云环境公开配置（可安全放在前端；真正的权限由服务端 Origin 校验）
  var PUBLIC_CONFIG = {
    endpoint: 'https://wbapp-c404ctoggenjhugffnnfvo.app.workbuddy.host',
    oauthRelayBaseUrl: 'https://www.workbuddy.cn/v2/as/genie-baas/oauth',
    publishableKey: 'wbpk_c404ctOgGENJhugffnNFVo_L7xQKS0o1bw15tF7fHOxNzf4PP24M2qq'
  };

  window.WB_PUBLIC_CONFIG = PUBLIC_CONFIG;

  if (!window.WorkBuddyCloud || typeof window.WorkBuddyCloud.createWorkBuddyCloud !== 'function') {
    window.wbCloudError = '云 SDK 未加载';
    return;
  }

  try {
    window.wbCloud = window.WorkBuddyCloud.createWorkBuddyCloud({
      endpoint: PUBLIC_CONFIG.endpoint,
      oauthRelayBaseUrl: PUBLIC_CONFIG.oauthRelayBaseUrl,
      publishableKey: PUBLIC_CONFIG.publishableKey
    });
  } catch (e) {
    window.wbCloudError = (e && e.message) || '云服务初始化失败';
  }
})();
