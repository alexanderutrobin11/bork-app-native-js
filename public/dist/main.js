"use strict";function processForm(t){t.preventDefault();var e=document.querySelector(".borkapp-contentwrapper__tel").value,n=document.querySelector(".borkapp-contentwrapper__password").value;return console.log(e,n),document.querySelector(".borkapp-contentwrapper__tel").value="",document.querySelector(".borkapp-contentwrapper__password").value="",!1}var form=document.querySelector(".borkapp__signin"),telInput=document.querySelector(".borkapp-contentwrapper__tel"),passwordInput=document.querySelector(".borkapp-contentwrapper__password"),buttonSent=document.querySelector(".borkapp-contentwrapper__submit");form.addEventListener("submit",processForm),telInput.addEventListener("input",formatingTelInput),passwordInput.addEventListener("input",formatingPasswordInput);var statusButtonSent=[!1,!1];function statusButtonSentCheck(){!0===statusButtonSent[0]&&!0===statusButtonSent[1]?buttonSent.className="borkapp-contentwrapper__submitactive":buttonSent.className="borkapp-contentwrapper__submit"}function formatingTelInput(t){if(""===t.target.value)return null;for(var e=t.target.value.split(""),n=[],r=0;r<e.length;r++)isNaN(e[r])||n.push(e[r]);return 11===n.length?statusButtonSent[0]=!0:statusButtonSent[0]=!1,statusButtonSentCheck(),document.querySelector(".borkapp-contentwrapper__tel").value=n.join(""),!0}function formatingPasswordInput(t){return""===t.target.value?null:(5<=t.target.value.length?statusButtonSent[1]=!0:statusButtonSent[1]=!1,statusButtonSentCheck(),!0)}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsicHJvY2Vzc0Zvcm0iLCJlIiwicHJldmVudERlZmF1bHQiLCJ0ZWxJbnB1dFZhbHVlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidmFsdWUiLCJjb25zb2xlIiwicGFzc3dvcmRJbnB1dFZhbHVlIiwibG9nIiwiZm9ybSIsInRlbElucHV0IiwicGFzc3dvcmRJbnB1dCIsImJ1dHRvblNlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwic3RhdHVzQnV0dG9uU2VudCIsInN0YXR1c0J1dHRvblNlbnRDaGVjayIsImNsYXNzTmFtZSIsImZvcm1hdGluZ1RlbElucHV0IiwidGFyZ2V0Iiwic3BsaXQiLCJzaWducyIsInNpZ25zQXJyIiwibGVuZ3RoIiwiaSIsIm51bWJlcnNBcnIiLCJwdXNoIiwiam9pbiIsImZvcm1hdGluZ1Bhc3N3b3JkSW5wdXQiXSwibWFwcGluZ3MiOiJhQUFBLFNBQVNBLFlBQVlDLEdBQ25CQSxFQUFFQyxpQkFESixJQUFBQyxFQUFBQyxTQUF3QkMsY0FBQSxnQ0FBQUMsTUFDcEJKLEVBQUZFLFNBQUFDLGNBQUEscUNBQUFDLE1BSUFGLE9BSEFHLFFBQUlKLElBQUFBLEVBQWdCQyxHQUNwQkEsU0FBSUksY0FBa0IsZ0NBQTBCRixNQUFBLEdBQ2hEQyxTQUFRRSxjQUFJTixxQ0FBWkcsTUFBQSxJQUNBRixFQUdELElBQUFNLEtBQUFOLFNBQUFDLGNBQUEsb0JBR0dNLFNBQVdQLFNBQVNDLGNBQWMsZ0NBRGxDSyxjQUFnQkwsU0FBQUEsY0FBYyxxQ0FDOUJNLFdBQVdQLFNBQVNDLGNBQWMsbUNBQ3RDSyxLQUFJRSxpQkFBZ0JSLFNBQVNDLGFBQzdCTSxTQUFJRSxpQkFBc0JSLFFBQUFBLG1CQUMxQkssY0FBS0ksaUJBQUwsUUFBZ0NkLHdCQUNoQ1csSUFBQUEsaUJBQVNHLEVBQUFBLEdBQWlCLEdBRTFCLFNBQUlDLHlCQUcwQixJQUF4QkEsaUJBQWlCLEtBQXVDLElBQXhCQSxpQkFBaUIsR0FEdkRGLFdBQVNHLFVBQUFBLHVDQUVMSCxXQUFXSSxVQUFZLGlDQUkxQixTQUFBQyxrQkFBQWpCLEdBR0MsR0FBdUIsS0FBbkJBLEVBQUVrQixPQUFPYixNQUFjLE9BQU8sS0FFbEMsSUFIRixJQUNNTCxFQURHaUIsRUFBQUEsT0FBQUEsTUFDSEUsTUFBdUIsSUFDdkJDLEVBQVVGLEdBQ1ZHLEVBQVEsRUFBR0QsRUFBS0MsRUFBTEMsT0FBZkMsSUFDSUMsTUFBQUEsRUFBSkQsS0FHSUMsRUFBV0MsS0FBS0osRUFBU0UsSUFhN0JwQixPQVpHLEtBQUFxQixFQUFBRixPQUNGUixpQkFBQSxJQUFBLEVBRURBLGlCQUFlUSxJQUFYLEVBR0ZSLHdCQUdGQyxTQUFBQSxjQUFxQixnQ0FBQVYsTUFBQW1CLEVBQUFFLEtBQUEsS0FHckJ2QixFQUlGLFNBQVN3Qix1QkFBdUIzQixHQUFoQyxNQUFTMkIsS0FBVDNCLEVBQUFrQixPQUFTUyxNQUEwQixNQUliLEdBSGhCM0IsRUFBU0ssT0FBVEEsTUFHTWlCLE9BQVZSLGlCQUFJLElBQW1CLEVBQXZCQSxpQkFFTyxJQUFBLEVBSVBDLHlCQUVPIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBwcm9jZXNzRm9ybShlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgbGV0IHRlbElucHV0VmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9ya2FwcC1jb250ZW50d3JhcHBlcl9fdGVsJykudmFsdWU7XG4gIGxldCBwYXNzd29yZElucHV0VmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9ya2FwcC1jb250ZW50d3JhcHBlcl9fcGFzc3dvcmQnKS52YWx1ZTtcbiAgY29uc29sZS5sb2codGVsSW5wdXRWYWx1ZSwgcGFzc3dvcmRJbnB1dFZhbHVlKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvcmthcHAtY29udGVudHdyYXBwZXJfX3RlbCcpLnZhbHVlID0gJyc7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib3JrYXBwLWNvbnRlbnR3cmFwcGVyX19wYXNzd29yZCcpLnZhbHVlID0gJyc7XG4gIHJldHVybiBmYWxzZTtcbn1cblxubGV0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9ya2FwcF9fc2lnbmluJyk7XG5sZXQgdGVsSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9ya2FwcC1jb250ZW50d3JhcHBlcl9fdGVsJyk7XG5sZXQgcGFzc3dvcmRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib3JrYXBwLWNvbnRlbnR3cmFwcGVyX19wYXNzd29yZCcpO1xubGV0IGJ1dHRvblNlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9ya2FwcC1jb250ZW50d3JhcHBlcl9fc3VibWl0Jyk7XG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHByb2Nlc3NGb3JtKTtcbnRlbElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZm9ybWF0aW5nVGVsSW5wdXQpO1xucGFzc3dvcmRJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZvcm1hdGluZ1Bhc3N3b3JkSW5wdXQpO1xubGV0IHN0YXR1c0J1dHRvblNlbnQgPSBbZmFsc2UsIGZhbHNlXTtcblxuZnVuY3Rpb24gc3RhdHVzQnV0dG9uU2VudENoZWNrKCkge1xuICBpZiAoc3RhdHVzQnV0dG9uU2VudFswXSA9PT0gdHJ1ZSAmJiBzdGF0dXNCdXR0b25TZW50WzFdID09PSB0cnVlKSB7XG4gICAgYnV0dG9uU2VudC5jbGFzc05hbWUgPSAnYm9ya2FwcC1jb250ZW50d3JhcHBlcl9fc3VibWl0YWN0aXZlJztcbiAgfSBlbHNlIHtcbiAgICBidXR0b25TZW50LmNsYXNzTmFtZSA9ICdib3JrYXBwLWNvbnRlbnR3cmFwcGVyX19zdWJtaXQnO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZvcm1hdGluZ1RlbElucHV0KGUpIHtcbiAgaWYgKGUudGFyZ2V0LnZhbHVlID09PSAnJykgcmV0dXJuIG51bGw7XG4gIGxldCBzaWducyA9IGUudGFyZ2V0LnZhbHVlO1xuICBsZXQgc2lnbnNBcnIgPSBzaWducy5zcGxpdCgnJyk7XG4gIGxldCBudW1iZXJzQXJyID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2lnbnNBcnIubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoIWlzTmFOKHNpZ25zQXJyW2ldKSkge1xuICAgICAgbnVtYmVyc0Fyci5wdXNoKHNpZ25zQXJyW2ldKTtcbiAgICB9XG4gIH1cblxuICBpZiAobnVtYmVyc0Fyci5sZW5ndGggPT09IDExKSB7XG4gICAgc3RhdHVzQnV0dG9uU2VudFswXSA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgc3RhdHVzQnV0dG9uU2VudFswXSA9IGZhbHNlO1xuICB9XG5cbiAgc3RhdHVzQnV0dG9uU2VudENoZWNrKCk7XG5cblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9ya2FwcC1jb250ZW50d3JhcHBlcl9fdGVsJykudmFsdWUgPSBudW1iZXJzQXJyLmpvaW4oJycpO1xuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0aW5nUGFzc3dvcmRJbnB1dChlKSB7XG4gIGlmIChlLnRhcmdldC52YWx1ZSA9PT0gJycpIHJldHVybiBudWxsO1xuICBsZXQgc2lnbnMgPSBlLnRhcmdldC52YWx1ZTtcblxuICBpZiAoc2lnbnMubGVuZ3RoID49IDUpIHtcbiAgICBzdGF0dXNCdXR0b25TZW50WzFdID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBzdGF0dXNCdXR0b25TZW50WzFdID0gZmFsc2U7XG4gIH1cblxuICBzdGF0dXNCdXR0b25TZW50Q2hlY2soKTtcblxuICByZXR1cm4gdHJ1ZTtcbn0iXX0=