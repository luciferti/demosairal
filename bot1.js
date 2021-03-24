<script type='text/javascript' src='https://service.force.com/embeddedservice/5.0/esw.min.js'></script>
	var initESW = function(gslbBaseURL) {
		embedded_svc.settings.displayHelpButton = true; //Or false
		embedded_svc.settings.language = ''; //For example, enter 'en' or 'en-US'

		//embedded_svc.settings.defaultMinimizedText = '...'; //(Defaults to Chat with an Expert)
		//embedded_svc.settings.disabledMinimizedText = '...'; //(Defaults to Agent Offline)

		//embedded_svc.settings.loadingText = ''; //(Defaults to Loading)
		//embedded_svc.settings.storageDomain = 'yourdomain.com'; //(Sets the domain for your deployment so that visitors can navigate subdomains during a chat session)

		embedded_svc.settings.enabledFeatures = [];
		embedded_svc.settings.entryFeature = '';

		embedded_svc.init(
			'https://mercedes-scloud-dev-ed.my.salesforce.com',
			'https://mbusa-atcs-developer-edition.ap16.force.com/mercedesbenz',
			gslbBaseURL,
			'00D2w00000CoNQh',
			'eshopifyy',
			{
				
			}
		);
	};

	if (!window.embedded_svc) {
		var s = document.createElement('script');
		s.setAttribute('src', 'https://mercedes-scloud-dev-ed.my.salesforce.com/embeddedservice/5.0/esw.min.js');
		s.onload = function() {
			initESW(null);
		};
		document.body.appendChild(s);
	} else {
		initESW('https://service.force.com');
	}
