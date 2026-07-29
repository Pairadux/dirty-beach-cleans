<script lang="ts">
	// Web3Forms access key is public/safe to expose (it only allows submitting to this form).
	const accessKey = '777402db-ba42-4d37-a51e-e3b796245092';

	const propertyTypes = [
		'Residential Home',
		'Vacation Rental / Airbnb',
		'Move-In / Move-Out',
		'Condo / Townhome'
	];
	const frequencies = [
		'One-Time Cleaning',
		'Weekly',
		'Bi-Weekly',
		'Monthly',
		'Airbnb Turnovers',
		'Not Sure Yet'
	];
	const cleaningTypes = [
		'Maintenance Cleaning',
		'Deep Cleaning',
		'Move-Out Cleaning',
		'Vacation Rental Turnover',
		'Post-Construction Cleaning',
		'Laundry Service',
		'Organization / Decluttering'
	];
	const bedroomOptions = ['Studio', '1', '2', '3', '4', '5+'];
	const bathroomOptions = ['1', '1.5', '2', '2.5', '3', '3.5', '4+'];

	const inputClass =
		'w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-ink focus:border-info focus:outline-none focus:ring-2 focus:ring-info/30';
	const labelClass = 'mb-1 block text-sm font-medium text-ink/80';
</script>

<!--
  Standard POST to Web3Forms so the dashboard redirect (to /thank-you) drives the
  success flow. hCaptcha is rendered by the Web3Forms client script (loaded in
  app.html); the quote links use data-sveltekit-reload so the widget always renders.
-->
<form action="https://api.web3forms.com/submit" method="POST" class="space-y-6">
	<input type="hidden" name="access_key" value={accessKey} />
	<input type="hidden" name="subject" value="New Quote Request — Dirty Beach Cleaning" />
	<input type="hidden" name="from_name" value="Dirty Beach Website" />
	<!-- Honeypot (spam trap) -->
	<input
		type="checkbox"
		name="botcheck"
		class="hidden"
		style="display:none"
		tabindex="-1"
		autocomplete="off"
	/>

	<!-- 1. Contact Information -->
	<div class="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
		<h3 class="mb-5 flex items-center gap-3 text-lg font-bold text-ink-strong">
			<span class="flex h-7 w-7 items-center justify-center rounded-full bg-info text-sm text-white"
				>1</span
			>
			Contact Information
		</h3>
		<div class="grid gap-4 sm:grid-cols-2">
			<div>
				<label class={labelClass} for="full_name">Full Name *</label>
				<input class={inputClass} id="full_name" name="full_name" type="text" required />
			</div>
			<div>
				<label class={labelClass} for="phone">Phone Number *</label>
				<input class={inputClass} id="phone" name="phone" type="tel" required />
			</div>
			<div>
				<label class={labelClass} for="email">Email Address *</label>
				<input class={inputClass} id="email" name="email" type="email" required />
			</div>
			<div>
				<label class={labelClass} for="property_address">Property Address *</label>
				<input
					class={inputClass}
					id="property_address"
					name="property_address"
					type="text"
					required
				/>
			</div>
		</div>
	</div>

	<!-- 2. Property Details -->
	<div class="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
		<h3 class="mb-5 flex items-center gap-3 text-lg font-bold text-ink-strong">
			<span class="flex h-7 w-7 items-center justify-center rounded-full bg-info text-sm text-white"
				>2</span
			>
			Property Details
		</h3>
		<div class="grid gap-6 sm:grid-cols-2">
			<fieldset>
				<legend class={labelClass}>Type of Property</legend>
				<div class="mt-2 space-y-2">
					{#each propertyTypes as opt}
						<label class="flex items-center gap-2 text-sm">
							<input type="radio" name="property_type" value={opt} class="accent-primary" />
							<span>{opt}</span>
						</label>
					{/each}
				</div>
			</fieldset>

			<div class="space-y-4">
				<div>
					<label class={labelClass} for="square_footage">
						Square Footage <span class="font-normal text-ink/60">(estimate is fine)</span>
					</label>
					<input
						class={inputClass}
						id="square_footage"
						name="square_footage"
						type="text"
						inputmode="numeric"
					/>
				</div>
				<div class="grid grid-cols-2 gap-4">
					<div>
						<label class={labelClass} for="bedrooms">Bedrooms</label>
						<select class={inputClass} id="bedrooms" name="bedrooms">
							<option value="">Select</option>
							{#each bedroomOptions as b}<option>{b}</option>{/each}
						</select>
					</div>
					<div>
						<label class={labelClass} for="bathrooms">Bathrooms</label>
						<select class={inputClass} id="bathrooms" name="bathrooms">
							<option value="">Select</option>
							{#each bathroomOptions as b}<option>{b}</option>{/each}
						</select>
					</div>
				</div>
			</div>

			<fieldset class="sm:col-span-2">
				<legend class={labelClass}>How often are you looking for service?</legend>
				<div class="mt-2 grid gap-2 sm:grid-cols-3">
					{#each frequencies as opt}
						<label class="flex items-center gap-2 text-sm">
							<input type="radio" name="service_frequency" value={opt} class="accent-primary" />
							<span>{opt}</span>
						</label>
					{/each}
				</div>
			</fieldset>
		</div>
	</div>

	<!-- 3. Cleaning Details -->
	<div class="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
		<h3 class="mb-5 flex items-center gap-3 text-lg font-bold text-ink-strong">
			<span class="flex h-7 w-7 items-center justify-center rounded-full bg-info text-sm text-white"
				>3</span
			>
			Cleaning Details
		</h3>
		<div class="space-y-6">
			<fieldset>
				<legend class={labelClass}>What type of cleaning do you need?</legend>
				<div class="mt-2 grid gap-2 sm:grid-cols-2">
					{#each cleaningTypes as opt}
						<label class="flex items-center gap-2 text-sm">
							<input type="radio" name="cleaning_type" value={opt} class="accent-primary" />
							<span>{opt}</span>
						</label>
					{/each}
				</div>
			</fieldset>

			<div class="grid gap-6 sm:grid-cols-2">
				<fieldset>
					<legend class={labelClass}>Do you have pets?</legend>
					<div class="mt-2 flex gap-6">
						{#each ['Yes', 'No'] as opt}
							<label class="flex items-center gap-2 text-sm">
								<input type="radio" name="has_pets" value={opt} class="accent-primary" />
								<span>{opt}</span>
							</label>
						{/each}
					</div>
				</fieldset>
				<fieldset>
					<legend class={labelClass}>Has the home been professionally cleaned before?</legend>
					<div class="mt-2 flex gap-6">
						{#each ['Yes', 'No'] as opt}
							<label class="flex items-center gap-2 text-sm">
								<input
									type="radio"
									name="professionally_cleaned_before"
									value={opt}
									class="accent-primary"
								/>
								<span>{opt}</span>
							</label>
						{/each}
					</div>
				</fieldset>
			</div>

			<div>
				<label class={labelClass} for="notes">Anything we should know?</label>
				<textarea
					class={inputClass}
					id="notes"
					name="notes"
					rows="3"
					placeholder="Stains, tough buildup, extra rooms, pets, crawlers, special requests, etc."
				></textarea>
			</div>
		</div>
	</div>

	<!-- 4. Preferred Appointment -->
	<div class="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
		<h3 class="mb-5 flex items-center gap-3 text-lg font-bold text-ink-strong">
			<span class="flex h-7 w-7 items-center justify-center rounded-full bg-info text-sm text-white"
				>4</span
			>
			Preferred Appointment
		</h3>
		<div>
			<label class={labelClass} for="preferred_time">Preferred Day/Time</label>
			<input
				class={inputClass}
				id="preferred_time"
				name="preferred_time"
				type="text"
				placeholder="e.g. Monday mornings, after 2pm, weekends, etc."
			/>
		</div>
	</div>

	<!-- hCaptcha (rendered by the Web3Forms client script in app.html), centered above the button -->
	<div class="flex justify-center">
		<div class="h-captcha" data-captcha="true"></div>
	</div>

	<button
		type="submit"
		class="w-full rounded-full bg-primary px-8 py-4 text-lg font-bold text-white shadow-lg transition-colors hover:bg-primary-600"
	>
		Request My Free Quote
	</button>
</form>
