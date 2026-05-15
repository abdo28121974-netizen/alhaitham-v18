
// حماية قوية من فتح معاينة الطباعة تلقائيًا عند تشغيل التطبيق كتطبيق PWA
(function(){
  const realPrint = window.print ? window.print.bind(window) : function(){};
  window.__haithamPrintAllowedUntil = 0;
  window.__haithamAppStartedAt = Date.now();
  window.haithamAllowPrint = function(){ window.__haithamPrintAllowedUntil = Date.now() + 5000; };
  window.print = function(){
    // لا تسمح بأي أمر طباعة إلا بعد ضغط المستخدم على زر طباعة داخل التطبيق
    if (Date.now() < window.__haithamPrintAllowedUntil) return realPrint();
    console.warn('Al-Haitham: blocked unexpected automatic print preview');
  };
  window.addEventListener('beforeprint', function(e){
    if (Date.now() >= window.__haithamPrintAllowedUntil) {
      try { e.preventDefault(); } catch(_) {}
    }
  });
})();
