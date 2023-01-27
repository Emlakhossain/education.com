import React from 'react';

const Toast = () => {
    return (
        <div>
            <div class="toast toast-end transparent toast-end">
                <div class="alert alert-info">
                    <div>
                        <span>New mail arrived.</span>
                    </div>
                </div>
                <div class="alert alert-success">
                    <div>
                        <span>Message sent successfully.</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Toast;