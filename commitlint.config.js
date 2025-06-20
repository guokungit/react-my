export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'fix', // 修复Bug
        'feat', // 新增功能
        'docs', // 文档变更
        'style', // 代码格式（不影响功能）
        'refactor', // 代码重构
        'test', // 添加/修改测试
        'chore', // 构建流程或辅助工具的变动
        'perf', // 性能优化
        'ci', // CI配置变更
        'revert' // 回滚提交
      ]
    ],
    'subject-case': [0] // 不强制主题大小写
  }
};