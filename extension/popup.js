// Initialize settings when the DOM content is loaded
document.addEventListener("DOMContentLoaded", () => {
    const thresholdSlider = document.getElementById("threshold-slider")
    const thresholdValue = document.getElementById("threshold-value")
    
    // Default threshold value
    const DEFAULT_THRESHOLD = 120
  
    // Make sure the slider event listener is set up immediately
    thresholdSlider.addEventListener("input", function() {
      thresholdValue.textContent = this.value
    })
    
    // Check if we're in a Chrome extension environment
    const isExtensionEnvironment = typeof chrome !== 'undefined' && localStorage
  
    if (isExtensionEnvironment) {
      // Get stored threshold from Chrome storage
      const result = localStorage.getItem("shortsBlockerThreshold")

      const storedThreshold = result|| DEFAULT_THRESHOLD
        
        // Set initial values
    thresholdSlider.value = storedThreshold
    thresholdValue.textContent = storedThreshold
      
      // Save settings
      document.getElementById("save-settings").addEventListener("click", () => {
        const newThreshold = Number.parseInt(thresholdSlider.value)
        // Save to Chrome storage
        localStorage.setItem("shortsBlockerThreshold", newThreshold)
        
          console.log("Threshold saved:", newThreshold)
          
          // Send message to content script
          chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs[0]) {
              chrome.tabs.sendMessage(
                tabs[0].id,
                {
                  action: "updateThreshold",
                  threshold: newThreshold,
                },
                (response) => {
                  console.log("Response from content script:", response || "No response")
                }
              )
            }
          })
          
          // Show saved confirmation
          showSaveConfirmation()
        
      })
    } else {
      // Fallback for non-extension environment (direct browser testing)
      console.log("Running in non-extension environment, using localStorage fallback")
      
      // Get stored threshold from localStorage
      const storedThreshold = localStorage.getItem("shortsBlockerThreshold") || DEFAULT_THRESHOLD
      
      // Set initial values
      thresholdSlider.value = storedThreshold
      thresholdValue.textContent = storedThreshold
      
      // Save settings
      document.getElementById("save-settings").addEventListener("click", () => {
        const newThreshold = Number.parseInt(thresholdSlider.value)
        
        // Save to localStorage
        localStorage.setItem("shortsBlockerThreshold", newThreshold)
        console.log("Threshold saved to localStorage:", newThreshold)
        
        // Show saved confirmation
        showSaveConfirmation()
      })
    }
    
    // Helper function to show save confirmation
    function showSaveConfirmation() {
      const saveButton = document.getElementById("save-settings")
      const originalText = saveButton.textContent
      saveButton.textContent = "Settings Saved!"
      saveButton.style.backgroundColor = "#4caf50"
      
      setTimeout(() => {
        saveButton.textContent = originalText
        saveButton.style.backgroundColor = ""
      }, 1500)
    }
  })
  