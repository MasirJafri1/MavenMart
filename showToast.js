export const showToast = (action, id) => {
  const toastId = `toast-${Date.now()}`;
  const toastContainer = document.getElementById('toastContainer') || createToastContainer();

  const actionText = action === 'add' ? 'added to' : 'removed from';
  const toastHTML = `
    <div id="${toastId}" class="toast" role="alert" aria-live="assertive" aria-atomic="true" data-bs-delay="3000">
      <div class="toast-header">
        <strong class="me-auto">${action === 'add' ? 'Product Added' : 'Product Removed'}</strong>
        <small>Just now</small>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body">
        Product with ID ${id} was ${actionText} your cart.
      </div>
    </div>
  `;

  // Append the toast to the container
  toastContainer.insertAdjacentHTML('beforeend', toastHTML);

  const toastElement = document.getElementById(toastId);
  const toastInstance = new bootstrap.Toast(toastElement);
  toastInstance.show();

  // Remove the toast after it's hidden
  toastElement.addEventListener('hidden.bs.toast', () => {
    toastElement.remove();
  });
};

// Create toast container if it doesn't exist
function createToastContainer() {
  const toastContainer = document.createElement('div');
  toastContainer.id = 'toastContainer';
  toastContainer.style.position = 'fixed';
  toastContainer.style.top = '20px';
  toastContainer.style.right = '20px';
  document.body.appendChild(toastContainer);
  return toastContainer;
}
