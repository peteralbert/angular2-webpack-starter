1. .skip(1) not skipping first emmission in Component1Component...

ngAfterViewInit() {
        this.ngForm.form.valueChanges
            .skip(1)
            .debounceTime(400)
            .distinctUntilChanged()
            .subscribe((form: IComponent1Form) => {
                this.save(form)
            });
    }